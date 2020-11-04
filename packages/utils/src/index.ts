import logger from './logger'

export {
  isSupportsFetch,
  isSupportsXMR,
  isError,
  isErrorEvent,
  isDOMException,
  isEvent,
  isString,
  isPlainObject,
  isPrimitive
} from './is';

export {
  getGlobalObject,
  globalMark,
  fill,
  uuid4,
  addHandler,
  triggerHandler,
  fromHttpCode,
  getLocationHref,
  shouldIgnoreOnError,
  ignoreNextOnError,
  consoleSandbox,
} from './utils'

export { logger }