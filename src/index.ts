import Log from './Log';
import BaseClient from './BaseClient';
import GlobalHandlers from './GlobalHandlers';

const baseClient = new BaseClient();
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
  baseClient.bindOptions(combineOptions,logger);
  globalHandlers.bindOptions(combineOptions,baseClient,logger);
};

const captureMessage = baseClient.capture.bind(baseClient);

export {init,captureMessage}