import {captureException,getCurrentHub} from '../Hub';
import logger from '../logger';
import Base from './Base';
import GlobalHandlers from './GlobalHandlers.js'

function init(options={}) {
  const defaultOptions = {
    url:'', // 上报的请求
    isXCX: true
  }
  const combineOptions = {...defaultOptions,...options};
  logger.bindOptions(combineOptions);
  if (!combineOptions.url) {
    logger.error('There is no upload data url!');
    return;
  }
  const base = new Base(combineOptions)
  const hub = getCurrentHub();
  hub.bindClient(base);
  new GlobalHandlers(combineOptions)
}


export {
  init,
  captureException,
}