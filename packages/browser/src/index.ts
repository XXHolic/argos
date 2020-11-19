import {captureException,getCurrentHub} from '@thynpm/argos-hub';
import {logger} from '@thynpm/argos-utils';
import Base from './Base';
import GlobalHandlers from './GlobalHandlers';
import {VueIntegration} from './integrations';

/**
 * 进行初始化步骤：
 * 1. 配置初始化，包含配置同步到一些公用方法或类中；
 * 2. 初始化基础类 Base 以及全局协调的 Hub 类；
 * 3. Hub 与 base 产生关联；
 * 4. 初始化全局 GlobalHandlers 包裹的类。
 * @param options
 */

const init = (options={}) => {
  const defaultOptions = {
    url:'' // 上报的请求
  }
  const combineOptions = {...defaultOptions,...options}
  logger.bindOptions(combineOptions);
  if (!combineOptions.url) {
    logger.error('There is no upload data url!');
    return;
  }
  const base = new Base(combineOptions)
  const hub = getCurrentHub();
  hub.bindClient(base);
  new GlobalHandlers(combineOptions);
};


export {
  init,
  captureException,
  getCurrentHub,
  VueIntegration,
}