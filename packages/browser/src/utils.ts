
import { isErrorEvent,isDOMException,isError,isPlainObject,isEvent,ignoreNextOnError } from '@thynpm/argos-utils';
import { captureException } from '@thynpm/argos-hub';
import { computeStackTrace } from './tracekit'
import {eventFromStacktrace,prepareFramesForEvent,eventFromPlainObject} from './parsers'

const originMark = '__argos_original__';
const wrapMark = '__argos_wrapped__';

export const globalMark = '__ARGOS__'


/**
 * 主要用来包裹事件监听的方法，事件处理程序里面产生了异常，这里就可以进行统一捕获。
 * @param fn
 * @param options
 */
export const wrap = (fn, options={}) => {
  if (typeof fn !== 'function') {
    return fn;
  }
  try {
      if (fn[wrapMark]) {
        return fn[wrapMark];
      }
  } catch (e) {
    return fn;
  }

  const wrapped = function (...args) {
    try {
      return fn.apply(this, args);
    } catch (ex) {
      ignoreNextOnError()
      captureException(ex);
      throw ex;
    }
  }

  try {
    for (var property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        wrapped[property] = fn[property];
      }
    }
  } catch (error) {
    // 不需要上报
  }

  // 相当于复制
  fn.prototype = fn.prototype || {};
  wrapped.prototype = fn.prototype;
  Object.defineProperty(fn, wrapMark, {
      enumerable: false,
      value: wrapped,
  });

  // 添加源标记
  Object.defineProperties(wrapped, {
      [originMark]:{
        enumerable: false,
        value: fn,
      }
  });

  return wrapped;
}

/**
 * 异常类型检测
 * @param exception
 */
export function exceptionCheck(exception) {
  var event;
  if (isErrorEvent(exception) && exception.error) {
      var errorEvent = exception;
      exception = errorEvent.error;
      event = eventFromStacktrace(computeStackTrace(exception));
      return event;
  }
  if (isDOMException(exception)) {
      var domException = exception;
      var name_1 = domException.name || 'DOMException';
      var message = domException.message ? name_1 + ": " + domException.message : name_1;
      event = eventFromString(message);
      return event;
  }
  if (isError(exception)) {
      event = eventFromStacktrace(computeStackTrace(exception));
      return event;
  }
  // 图片资源加载会进入这里
  if (isPlainObject(exception) || isEvent(exception)) {
      var objectException = exception;
      event = eventFromPlainObject(objectException);
      return event;
  }

  event = eventFromString(exception);
  return event;
}

export function eventFromString(
  input: string,
  syntheticException?: Error,
  options: {
    attachStacktrace?: boolean;
  } = {},
) {
  const event = {
    message: input,
    stacktrace:null
  };

  if (options.attachStacktrace && syntheticException) {
    const stacktrace = computeStackTrace(syntheticException);
    const frames = prepareFramesForEvent(stacktrace.stack);
    event.stacktrace = {
      frames,
    };
  }

  return event;
}



