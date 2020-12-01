
import { isErrorEvent,isDOMException,isError,isPlainObject,isEvent,ignoreNextOnError } from '@thynpm/argos-utils';
import { captureException } from '@thynpm/argos-hub';
import { computeStackTrace } from './tracekit'
import {eventFromStacktrace,eventFromPlainObject,eventFromString} from './parsers'

const originMark = '__argos_original__';
const wrapMark = '__argos_wrapped__';
// const UNKNOWN_FUNCTION = '?';

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
      /**
       * 这里的异常如果不抛出去，相当于屏蔽了用户那边的异常显示，
       * 如果在远程查看下，在控制台也会看不到对应的异常信息，所以还是要抛出异常。
       */
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
export function exceptionFormat(exception) {
  var event;
  // 已解析过的标识，有些情况可能会造成重复的解析
  if (exception.__isFormat__) {
    return exception;
  }
  if (isErrorEvent(exception) && exception.error) {
      var errorEvent = exception;
      exception = errorEvent.error;
      event = eventFromStacktrace(computeStackTrace(exception));
      event.__isFormat__ = true;
      return event;
  }
  if (isDOMException(exception)) {
      var domException = exception;
      var name_1 = domException.name || 'DOMException';
      var message = domException.message ? name_1 + ": " + domException.message : name_1;
      event = eventFromString(message);
      event.__isFormat__ = true;
      return event;
  }
  if (isError(exception)) {
      event = eventFromStacktrace(computeStackTrace(exception));
      event.__isFormat__ = true;
      return event;
  }
  // 图片资源加载会进入这里
  if (isPlainObject(exception) || isEvent(exception)) {
      var objectException = exception;
      event = eventFromPlainObject(objectException);
      event.__isFormat__ = true;
      return event;
  }

  event = eventFromString(exception);
  event.__isFormat__ = true;
  return event;
}






