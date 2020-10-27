
import { isErrorEvent,isDOMException,isError,isPlainObject,isEvent } from './is';
import { captureException } from './Hub';
import {computeStackTrace} from './tracekit'
import {eventFromStacktrace,prepareFramesForEvent,eventFromPlainObject} from './parsers'

const originMark = '__argos_original__';
const wrapMark = '__argos_wrapped__';

const fallbackGlobalObject = {};
// 获取全局属性，在其它的一些环境（例如 node）中，可能没有 window 对象
export const getGlobalObject = ()=> {
  return typeof window !== 'undefined' ? window : fallbackGlobalObject;
}

/**
 * 扩展属性，避免覆盖已存在的方法
 * @param source 原方法
 * @param name 属性名称
 * @param replacement 扩展的方法
 */
export const fill = (source, name, replacement) => {
  if (!(name in source)) {
      return;
  }
  const original = source[name];
  const wrapped = replacement(original);
  if (typeof wrapped === 'function') {
    try {
        wrapped.prototype = wrapped.prototype || {};
        Object.defineProperties(wrapped, {
            [originMark]: {
                enumerable: false,
                value: original,
            },
        });
    } catch (e) {
      console.warn('multiple fill may cause error')
    }
}
  source[name] = wrapped;
}



/**
 * 生成唯一标志
 */
export const uuid4 = () => {
  const global:any = getGlobalObject();
  const crypto = global.crypto || global.msCrypto;
  if (!(crypto === void 0) && crypto.getRandomValues) {
      // Use window.crypto API if available
      const arr = new Uint16Array(8);
      crypto.getRandomValues(arr);
      arr[3] = (arr[3] & 0xfff) | 0x4000;
      arr[4] = (arr[4] & 0x3fff) | 0x8000;
      const pad = (num) => {
          let v = num.toString(16);
          while (v.length < 4) {
              v = `0${v}`;
          }
          return v;
      };
      return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
  }
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
  });
}


// 事件统一发布订阅
const handlers ={}

export const addHandler = (handler) => {
  if (!handler || typeof handler.type !== 'string' ) {
    return;
  }
  handlers[handler.type] = handlers[handler.type] || [];
  handlers[handler.type].push(handler.fn);
}

export const triggerHandler = (type: string, data) => {
  if (!type || !handlers[type]) {
      return;
  }
  for (const handler of handlers[type] || []) {
      try {
          handler(data);
      }
      catch (e) {
        console.error('Error while triggering handler')
      }
  }
}

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
      captureException(ex);
    }
  }

  try {
    for (var property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        wrapped[property] = fn[property];
      }
    }
  } catch (error) {
    // throw error;
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

// 异常类型检测
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
      // addExceptionTypeValue(event, message);
      return event;
  }
  if (isError(exception)) {
      event = eventFromStacktrace(computeStackTrace(exception));
      return event;
  }
  if (isPlainObject(exception) || isEvent(exception)) {
      // If it is plain Object or Event, serialize it manually and extract options
      // This will allow us to group events based on top-level keys
      // which is much better than creating new group when any key/value change
      var objectException = exception;
      event = eventFromPlainObject(objectException);
      // addExceptionMechanism(event, {
      //     synthetic: true,
      // });
      return event;
  }
  // If none of previous checks were valid, then it means that it's not:
  // - an instance of DOMError
  // - an instance of DOMException
  // - an instance of Event
  // - an instance of Error
  // - a valid ErrorEvent (one with an error property)
  // - a plain Object
  //
  // So bail out and capture it as a simple message:
  event = eventFromString(exception);
  // addExceptionTypeValue(event, "" + exception, undefined);
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

export enum Status {
  /** The status could not be determined. */
  Unknown = 'unknown',
  /** The event was skipped due to configuration or callbacks. */
  // Skipped = 'skipped',
  /** The event was sent to Sentry successfully. */
  Success = 'success',
  /** The client is currently rate limited and will try again later. */
  RateLimit = 'rate_limit',
  /** The event could not be processed. */
  Invalid = 'invalid',
  /** A server-side error ocurred during submission. */
  Failed = 'failed',
}

export function fromHttpCode(code: number) {
  if (code >= 200 && code < 300) {
    return Status.Success;
  }

  if (code === 429) {
    return Status.RateLimit;
  }

  if (code >= 400 && code < 500) {
    return Status.Invalid;
  }

  if (code >= 500) {
    return Status.Failed;
  }

  return Status.Unknown;
}