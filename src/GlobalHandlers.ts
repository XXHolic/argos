/**
 * 对原生方法的重新包装，为错误捕获提供另外一个角度
 * 比如本地无服务情况下，chrome 由于同源策略，看不到错误相关信息，这个时候，对原生方法重新包装就有效果
 */
import { captureException } from './Hub';
import { fill,wrap,getGlobalObject,exceptionCheck,getLocationHref } from './utils'
import { isString,isSupportsXMR,isPrimitive,isErrorEvent } from './is'
import logger from './logger'

const global:any = getGlobalObject();
interface GlobalHandlersOptions {
  onerror?: boolean,
  onunhandledrejection?: boolean,
  eventTarget?: boolean,
  // xhr?: boolean,
  // fetch?: boolean,
}

class GlobalHandlers {
  options: GlobalHandlersOptions = {
    onerror:true,
    onunhandledrejection:true,
    eventTarget: true,
    // xhr: true,
    // fetch: true,
  };

  _isSet: boolean = false

  constructor(options) {
    this.options = {...this.options,...options};
    this.setUp()
  }

  setUp() {
    if (this._isSet) {
      return;
    }
    const {onerror,onunhandledrejection,eventTarget} = this.options;
    if (onerror) {
      this._wrapOnerror()
    }
    if (onunhandledrejection) {
      this._wrapOnunhandledrejection()
    }
    if (eventTarget) {
      this._wrapEventTarget()
    }
    // if (xhr) {
    //   this._wrapXHR()
    // }
    this._isSet = true;
  }

  private _wrapOnerror() {
    const self = this; // tslint:disable-line:no-this-assignment
    // 有可能已有被重写了，所以要暂存下来
    const oldOnError = global.onerror;

    global.onerror = function(msg, url, line, column, error) {
      logger.info('onerror event: ',{msg, url, line, column, error});
      const ex = isPrimitive(error)
      ? self._eventFromIncompleteOnError(msg, url, line, column)
      : self._enhanceEventWithInitialFrame(
        exceptionCheck(error),
          url,
          line,
          column,
        );

        captureException(ex)
      if (oldOnError) {
        return oldOnError.apply(this, arguments);
      }
      return false;
    }

  }

  private _wrapOnunhandledrejection() {
    const self = this;
    // 有可能已有被重写了，所以要暂存下来
    const oldOnError = global.onunhandledrejection;

    global.onunhandledrejection = function(e) {
      logger.info('unhandledrejection event: ',e);
      let error = e;
      try {
        error = e && 'reason' in e ? e.reason : e;
      } catch (ex) {
        // no-empty
      }

      const ex = isPrimitive(error)
      ? self._eventFromIncompleteRejection(error)
      : exceptionCheck(error);

      if (oldOnError) {
        return oldOnError.apply(this, arguments);
      }
      return true;
    }

  }

  private _wrapEventTarget() {

    if (!('document' in global)) {
      return;
    }

    const proto = global.EventTarget && global.EventTarget.prototype;
    if(!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return;
    }

    fill(proto,'addEventListener',function(original: () => void){
      return function(eventName,fn,options) {
        const wrapFn = wrap(fn,options);
        return original.call(this,eventName,wrapFn,options);
      }
    });

  }

  // 暂时用不到
  private _wrapXHR() {
    if (!isSupportsXMR()) {
      return;
    }
  }

  // 暂时用不到
  private _wrapFetch() {

    fill(global, 'fetch', function(originalFetch: () => void): () => void {
      return function(...args: any[]): void {
        const fetchInput = args[0];
        let method = 'GET';
        let url;

        if (typeof fetchInput === 'string') {
          url = fetchInput;
        } else if ('Request' in global && fetchInput instanceof Request) {
          url = fetchInput.url;
          if (fetchInput.method) {
            method = fetchInput.method;
          }
        } else {
          url = String(fetchInput);
        }

        if (args[1] && args[1].method) {
          method = args[1].method;
        }

        const fetchData: {
          method: string;
          url: string;
          status_code?: number;
        } = {
          method: isString(method) ? method.toUpperCase() : method,
          url,
        };

        return originalFetch
          .apply(global, args)
          .then((response: Response) => {
            fetchData.status_code = response.status;
            return response;
          })
          .then(null, (error: Error) => {
            throw error;
          });
      };
    });


  }

  private _eventFromIncompleteOnError(msg: any, url: any, line: any, column: any): Event {
    const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;

    // If 'message' is ErrorEvent, get real message from inside
    let message = isErrorEvent(msg) ? msg.message : msg;
    let name;

    if (isString(message)) {
      const groups = message.match(ERROR_TYPES_RE);
      if (groups) {
        name = groups[1];
        message = groups[2];
      }
    }

    const event = {
      exception: {
        values: [
          {
            type: name || 'Error',
            value: message,
          },
        ],
      },
    };

    return this._enhanceEventWithInitialFrame(event, url, line, column);
  }

  private _eventFromIncompleteRejection(error: any) {
    return {
      exception: {
        values: [
          {
            type: 'UnhandledRejection',
            value: `Non-Error promise rejection captured with value: ${error}`,
          },
        ],
      },
    };
  }

  private _enhanceEventWithInitialFrame(event: any, url: any, line: any, column: any) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].stacktrace = event.exception.values[0].stacktrace || {};
    event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames || [];

    const colno = isNaN(parseInt(column, 10)) ? undefined : column;
    const lineno = isNaN(parseInt(line, 10)) ? undefined : line;
    const filename = isString(url) && url.length > 0 ? url : getLocationHref();

    if (event.exception.values[0].stacktrace.frames.length === 0) {
      event.exception.values[0].stacktrace.frames.push({
        colno,
        filename,
        function: '?',
        in_app: true,
        lineno,
      });
    }

    return event;
  }


}

export default GlobalHandlers