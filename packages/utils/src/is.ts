import {getGlobalObject} from './utils'

export const isSupportsFetch = () => {
  if (!('fetch' in getGlobalObject())) {
      return false;
  }
  return true;
}

export const isSupportsXHR = () => {
  if (!('XMLHttpRequest' in getGlobalObject())) {
      return false;
  }
  return true;
}

function isInstanceOf(obj, base) {
  try {
      return obj instanceof base;
  } catch (e) {
      return false;
  }
}
/**
 * 检查数据是否是异常类型
 * @param value
 */
export const isError = (value) => {
  switch (Object.prototype.toString.call(value)) {
      case '[object Error]':
          return true;
      case '[object Exception]':
          return true;
      case '[object DOMException]': // 这个还并没有成为标准
          return true;
      default:
          return isInstanceOf(value, Error);
  }
}


/**
 * ErrorEvent 事件对象在脚本发生错误时产生，它可以提供发生错误的脚本文件的文件名，以及发生错误时所在的行号等信息。
 * @param value
 */
export const isErrorEvent = (value) => {
  return Object.prototype.toString.call(value) === '[object ErrorEvent]';
}

/**
 * 代表调用方法或访问 Web API 属性时发生的异常事，有 name 和 message 属性
 * @param value
 */
export const isDOMException = (value) => {
  return Object.prototype.toString.call(value) === '[object DOMException]';
}

export const isEvent = (value) => {
  return typeof Event !== 'undefined' && isInstanceOf(value, Event);
}

export const isString = (value) => {
  return Object.prototype.toString.call(value) === '[object String]';
}

export const isPlainObject = (value) => {
  return Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * @param value
 */
export const isPrimitive = (value) => {
  return value === null || (typeof value !== 'object' && typeof value !== 'function');
}

/**
 * Returns true if the parameter is undefined<br/>
 * Example: `_isUndefined(val) === true/false`
 *
 * @param {*} what Value to check
 * @return {Boolean} true if undefined and false otherwise
 */
export const isUndefined = (value) => {
  return typeof value === 'undefined';
}