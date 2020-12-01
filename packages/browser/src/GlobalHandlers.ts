/**
 * 对原生方法的重新包装，捕获一些异常信息。
 * 也可以通过配置传入是否进行初始化，提供更高的的配置化。
 */
import { captureException } from '@thynpm/argos-hub';
import { fill,getGlobalObject,getLocationHref,shouldIgnoreOnError,logger,isString,isPrimitive,isErrorEvent } from '@thynpm/argos-utils'
import { exceptionFormat,wrap } from './utils'

const global:any = getGlobalObject();
interface GlobalHandlersOptions {
  onerror?: boolean,
  onunhandledrejection?: boolean,
  eventTarget?: boolean,
}

class GlobalHandlers {
  options: GlobalHandlersOptions = {
    onerror:true,
    onunhandledrejection:true,
    eventTarget: true,
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
    this._isSet = true;
  }

  private _wrapOnerror() {
    const self = this; // tslint:disable-line:no-this-assignment
    const oldOnError = global.onerror;

    global.onerror = function(msg, url, line, column, error) {
      logger.info('onerror event: ',{msg, url, line, column, error});

      if (shouldIgnoreOnError()) {
        return;
      }
      // 如果 error 是 undefined, null, number, boolean, string
      const ex = isPrimitive(error)
      ? self._eventFromIncompleteOnError(msg, url, line, column,error)
      : error;

      captureException(ex)
      if (oldOnError) {
        return oldOnError.apply(this, arguments);
      }
      return false;
    }



  }

  private _wrapOnunhandledrejection() {
    const self = this;
    const oldOnError = global.onunhandledrejection;

    global.onunhandledrejection = function(e) {
      logger.info('unhandledrejection event: ',e);
      let error = e;
      try {
        error = e && 'reason' in e ? e.reason : e;
      } catch (ex) {
        // no-empty
      }

      if (shouldIgnoreOnError()) {
        return;
      }

      const ex = isPrimitive(error)
      ? self._eventFromIncompleteRejection(error)
      : exceptionFormat(error);

      captureException(ex)

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
        let wrapFn = fn;
        if (eventName === 'click') {
          wrapFn = wrap(fn,options);
        }
        return original.call(this,eventName,wrapFn,options);
      }
    });

    // 资源加载异常
    global.addEventListener('error',function(e){
      if(e && e.target && (e.target.src || e.target.href)) {
        captureException(e)
      }
    },true)

  }

  /**
   * 拆自 https://github.com/occ/TraceKit
   * @param msg
   * @param url
   * @param line
   * @param column
   */
  private _eventFromIncompleteOnError(msg: any, url: any, line: any, column: any,error: any) {
    const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;

    const location = {
      'url': url,
      'line': line,
      'column': column,
    };
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

    const exception = {
      name: name || 'Error',
      message: message,
      stack:[location],
      mode: 'onerror',
    };

    return exception;
  }

  private _eventFromIncompleteRejection(error: any) {
    return {
      name: 'UnhandledRejection',
      message: `Non-Error promise rejection captured with value: ${error}`,
    };
  }


}

export default GlobalHandlers