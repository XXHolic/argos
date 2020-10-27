import {captureException,getCurrentHub} from './Hub';
import logger from './logger';
import Base from './Base';
import GlobalHandlers from './GlobalHandlers';


const init = (options={}) => {
  const defaultOptions = {
    url:'' // 上报的请求
  }
  const combineOptions = {...defaultOptions,...options}
  logger.bindOptions(combineOptions);
  if (!combineOptions.url) {
    logger.warn('There is no upload data url!');
  }
  const base = new Base(combineOptions)
  const hub = getCurrentHub();
  hub.bindClient(base);
  new GlobalHandlers(combineOptions);
  // globalHandlers.bindOptions(combineOptions,base,logger);
};


export {init,captureException,getCurrentHub}