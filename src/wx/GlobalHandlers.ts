import { captureException } from '../Hub';
import {fill} from '../utils'
import logger from '../logger'

interface GlobalHandlersOptions {
  onerror?: boolean,
  onRequest?: boolean,
  url?: string,
}

class GlobalHandlers {
  options: GlobalHandlersOptions = {
    onerror: true,
    onRequest: true,
  };

  private _isSet: boolean = false;

  constructor(options) {
    this.options = {...this.options,...options};
    this.setUp();

  }

  setUp() {
    if (this._isSet) {
      return;
    }
    const {onerror,onRequest} = this.options;
    if (onerror) {
      this._wrapOnerror()
    }
    if (onRequest) {
      this._wrapRequest()
    }

    this._isSet = true;
  }

  private _wrapOnerror() {
    /**
     * 必须要这种形式，如果直接扩展反而没有作用
     */
    // @ts-ignore
    let originApp = App;
    // @ts-ignore
    App = function(params) {
      try {
          fill(params,'onError',function(original){
              return function(e) {
                  captureException(e)
                  return original.call(this,e);
              }
          })
      } catch (error) {
          logger.error('App onError',error)
      }
      originApp(params)
    }
  }

  // request 拦截
  private _wrapRequest() {
    const {url} = this.options;
    // @ts-ignore
    // 另存一个原本的版本，防止请求死循环
    const copyWX = {...wx};
    // @ts-ignore
    const originRequest = wx.request;
    // @ts-ignore
    Object["defineProperty"](wx, "request", {
      writable: true,
      enumerable: true,
      configurable: true,
      value: function (args) {
        try {
          const reg =  new RegExp(url);
          // 不是上报的请求
          if (args && !reg["test"](args["url"])) {
            return originRequest.apply(this, arguments);
          }
          copyWX.request({
            url:url,
            method: 'POST',
            data:args.data || {}
          })
          return;
        } catch (e) {
          logger.error('request error',e);
        }
      },
    })
  }



}

// exports.GlobalHandlers = GlobalHandlers
export default GlobalHandlers