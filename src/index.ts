import BaseClient from './BaseClient';
import GlobalHandlers from './GlobalHandlers';

const baseClient = new BaseClient();
const globalHandlers = new GlobalHandlers();

const init = (options={}) => {
  const defaultOptions = {
    url:'' // 上报的请求
  }
  const combineOptions = {...defaultOptions,...options}
  if (!combineOptions.url) {
    console.warn('no url')
  }
  baseClient.bindOptions(combineOptions);
  globalHandlers.bindOptions(combineOptions,baseClient);
};

const captureMessage = baseClient.capture.bind(baseClient);

export {init,captureMessage}