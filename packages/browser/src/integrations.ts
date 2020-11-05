/**
 * 针对一些框架异常捕获的钩子
 */
import { captureException } from '@thynpm/argos-hub';
import { getGlobalObject,logger } from '@thynpm/argos-utils'

/**
 * Vue 中全局错误配置 errorHandler
 * https://cn.vuejs.org/v2/api/#errorHandler
 */
export class VueIntegration {

  private readonly _vue: any;
  private _hasSet: boolean = false;

  constructor(options) {
    const globalObj: any = getGlobalObject();
    this._vue = options.Vue || globalObj.Vue;
    this.setUp();
  }

  setUp() {
    if (this._hasSet) {
      logger.info('VueIntegration installed');
      return;
    }

    if (!this._vue || !this._vue.config) {
      logger.error('VueIntegration is missing a Vue instance');
      return;
    }

    const oldOnError = this._vue.config.errorHandler;

    this._vue.config.errorHandler = (error: Error, vm: { [key: string]: any }, info: string): void => {
      captureException(error)
      if (typeof oldOnError === 'function') {
        oldOnError.call(this._vue, error, vm, info);
      }

    };

    this._hasSet = true

  }


}