import {captureException,getCurrentHub} from './Hub';
import Log from './Log';
import Base from './Base';
import GlobalHandlers from './GlobalHandlers';

const base = new Base();
const globalHandlers = new GlobalHandlers();
const logger = new Log();

const init = (options={}) => {
  const defaultOptions = {
    url:'' // 上报的请求
  }
  const combineOptions = {...defaultOptions,...options}
  logger.bindOptions(combineOptions);
  if (!combineOptions.url) {
    logger.warn('There is no upload data url!');
  }
  base.bindOptions(combineOptions,logger);
  const hub = getCurrentHub();
  hub.bindClient(base);
  globalHandlers.bindOptions(combineOptions,base,logger);
};


export {init,captureException}