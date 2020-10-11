import BaseClient from './BaseClient';
import GlobalHandlers from './GlobalHandlers';

const baseClient = new BaseClient();
const globalHandlers = new GlobalHandlers();

const init = (options={}) => {
  const defaultOptions = {
    url:'http://localhost:9001/api/error' // 上报的请求
  }
  const combineOptions = {...defaultOptions,...options}
  baseClient.bindOptions(combineOptions);
  globalHandlers.bindOptions(combineOptions,baseClient);
};

const captureMessage = baseClient.capture.bind(baseClient);

export {init,captureMessage}