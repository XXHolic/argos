// 重写原生的一些异常相关的方法
import { getGlobalObject,addHandler,triggerHandler,uuid4,fill,domEventHandler } from './utils'

interface GlobalHandlersOptions {
  onerrorMark?: boolean,
  onunhandledrejectionMark?: boolean,
  eventTargetMark?: boolean,
}

class GlobalHandlers {

  options:GlobalHandlersOptions = {
    onerrorMark:true,
    onunhandledrejectionMark:true,
    eventTargetMark: true,
  }
  global: object
  baseClient: object

  constructor() {
    this.global = getGlobalObject();
  }

  bindOptions(options,baseClient) {
    this.options = {...this.options,...options};
    this.baseClient = baseClient;
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
    // if (eventTargetMark) {
      // this.wrapEventTarget()
    // }
  }

  wrapOnerror() {
    const global: any = this.global;
    const baseClient: any = this.baseClient;
    // 有可能已有被重写了，所以要暂存下来
    const oldOnError = global.onerror;

    addHandler({
      type:'error',
      fn:(data)=>{
        const eventId = uuid4()
        baseClient.send({type:'error',eventId:eventId,exception:data});
      }
    })

    global.onerror = function(msg, url, line, column, error) {
      // console.info({msg, url, line, column, error})
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
    // 有可能已有被重写了，所以要暂存下来
    const oldOnError = global.onunhandledrejection;

    addHandler({type:'unhandledrejection',fn:(data) => {
      console.info('unhandledrejection',data);
      // baseClient.send(data);
    }})

    global.onunhandledrejection = function(e) {
      triggerHandler('unhandledrejection', e);
      if (oldOnError) {
        return oldOnError.apply(this, arguments);
      }
      return true;
    }

  }

  wrapEventTarget() {
    const global:any = this.global;

    if (!('document' in global)) {
      return;
    }
    addHandler({type:'dom',fn:(data) => {
      console.info('dom data',data)
      // baseClient.send(data);
    }})

    global.document.addEventListener('click', domEventHandler('click', triggerHandler.bind(null, 'dom')), true);


    const proto = global.EventTarget && global.EventTarget.prototype;
    if(!proto) {
      return;
    }

    // react 中不能放到生命周期中，会中止渲染
      fill(proto,'addEventListener',function(original){
        return function(eventName,fn,options) {

          const wrapFn= (...args) => {
            try {
              fn.apply(this,args);
            } catch (error) {
              console.info('addEventListener error',error)
              // throw error;
            }
          }
          return original.call(this,eventName,wrapFn,options);
        }
      });

  }


}

export default GlobalHandlers