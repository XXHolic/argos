
const fallbackGlobalObject = {};
// 获取全局属性，在其它的一些环境（例如 node）中，可能没有 window 对象
export const getGlobalObject = ()=> {
  return typeof window !== 'undefined' ? window : fallbackGlobalObject;
}

export const supportsFetch = () => {
  if (!('fetch' in getGlobalObject())) {
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
      case '[object DOMException]':
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

export const isString = (value) => {
  return Object.prototype.toString.call(value) === '[object String]';
}

export const isPlainObject = (value) => {
  return Object.prototype.toString.call(value) === '[object Object]';
}