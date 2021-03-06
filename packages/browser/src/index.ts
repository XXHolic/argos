import {captureException,getCurrentHub} from '@thynpm/argos-hub';
import {logger} from '@thynpm/argos-utils';
import Base from './Base';
import GlobalHandlers from './GlobalHandlers';
import {VueIntegration} from './integrations';


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