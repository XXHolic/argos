// 重写原生的一些异常相关的方法
import { getGlobalObject,addHandler,triggerHandler,uuid4,fill } from './utils'

interface GlobalHandlersOptions {
  onerrorMark?: boolean,
  onunhandledrejectionMark?: boolean,
  eventTargetMark?: boolean,
}

class GlobalHandlers {
  options: GlobalHandlersOptions = {
    onerrorMark:true,
    onunhandledrejectionMark:true,
    eventTargetMark: true,
  };
  global: object;
  baseClient: object;
  logger: object;

  constructor() {
    this.global = getGlobalObject();
  }

  bindOptions(options,baseClient,logger) {
    this.options = {...this.options,...options};
    this.baseClient = baseClient;
    this.logger = logger;
    this.init();
  };

  init() {
    const {onerrorMark,onunhandledrejectionMark,eventTargetMark} = this.options;
    if (onerrorMark) {
      this.wrapOnerror()
    }
    if (onunhandledrejectionMark) {
      this.wrapOnunhandledrejection()
    }
    if (eventTargetMark) {
      this.wrapEventTarget()
    }
  }

  wrapOnerror() {
    const global: any = this.global;
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

  wrapOnunhandledrejection() {
    const global:any = this.global;
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

  wrapEventTarget() {
    const global:any = this.global;
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
        return original.call(this,eventName,fn,options);
      }
    });

  }


}

export default GlobalHandlers