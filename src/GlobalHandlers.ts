/**
 * 对原生方法的重新包装，为错误捕获提供另外一个角度
 * 比如本地无服务情况下，chrome 由于同源策略，看不到错误相关信息，这个时候，对原生方法重新包装就有效果
 */
import { addHandler,triggerHandler,uuid4,fill,wrap,getGlobalObject } from './utils'
import { isSupportsFetch,isString,isSupportsXMR } from './is'

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
  baseClient: object;
  logger: object;

  constructor(options) {
    this.options = {...this.options,...options};
    this.setUp()
  }

  bindOptions(options,baseClient,logger) {

    // this.logger = logger;
    // this.init();
  };

  setUp() {
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
  }

  private _wrapOnerror() {
    const baseClient: any = this.baseClient;
    const logger: any = this.logger;
    // 有可能已有被重写了，所以要暂存下来
    const oldOnError = global.onerror;

    addHandler({
      type:'error',
      fn:(data)=>{
        const eventId = uuid4();
        baseClient.send({type:'error',eventId:eventId,exception:data});
      }
    })

    global.onerror = function(msg, url, line, column, error) {
      logger.info('onerror event: ',{msg, url, line, column, error});
      triggerHandler('error', {
          column,
          error,
          line,
          msg,
          url,
      });
      if (oldOnError) {
        return oldOnError.apply(this, arguments);
      }
      return false;
    }

  }

  private _wrapOnunhandledrejection() {
    const baseClient: any = this.baseClient;
    const logger: any = this.logger;
    // 有可能已有被重写了，所以要暂存下来
    const oldOnError = global.onunhandledrejection;

    addHandler({type:'unhandledrejection',fn:(data) => {
      const eventId = uuid4()
      baseClient.send({type:'unhandledrejection',eventId:eventId,exception:data});
    }})

    global.onunhandledrejection = function(e) {
      logger.info('unhandledrejection event: ',e);
      triggerHandler('unhandledrejection', e);
      if (oldOnError) {
        return oldOnError.apply(this, arguments);
      }
      return true;
    }

  }

  private _wrapEventTarget() {
    const baseClient: any = this.baseClient;

    if (!('document' in global)) {
      return;
    }
    addHandler({
      type:'dom',
      fn:(data) => {
        const eventId = uuid4()
        baseClient.send({type:'dom',eventId:eventId,exception:data});
      }
    })

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


}

export default GlobalHandlers