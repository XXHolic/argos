import logger from './logger'

export {
  isSupportsFetch,
  isSupportsXHR,
  isError,
  isErrorEvent,
  isDOMException,
  isEvent,
  isString,
  isPlainObject,
  isPrimitive,
  isUndefined,
  isSupportsBeacon,
} from './is';

export {
  getGlobalObject,
  globalMark,
  fill,
  uuid4,
  addHandler,
  triggerHandler,
  requestStatus,
  fromHttpCode,
  getLocationHref,
  shouldIgnoreOnError,
  ignoreNextOnError,
  consoleSandbox,
} from './utils'

export { logger }