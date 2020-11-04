

const originMark = '__argos_original__';
export const globalMark = '__ARGOS__'

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

/**
 * A safe form of location.href
 */
export function getLocationHref(): string {
  try {
    return document.location.href;
  } catch (oO) {
    return '';
  }
}

/**
 * wrap 包裹的方法，如果里面报错了，除了自身会捕获，onerror 也会捕获到，
 * 这个时候，不应该重复的捕获，于是用了下面的方法
 */
let ignoreOnError = 0;
/**
 * @hidden
 */
export function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
export function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(() => {
        ignoreOnError -= 1;
    });
}

/**
 * 在一些环境下面可能没有 console 相关的对象和方法，需要统一先做检查
 * @param type
 * @param callback
 */
export function consoleSandbox(type,callback) {
  var global: any = getGlobalObject();
  if (!('console' in global)) {
      return;
  }
  var originalConsole = global.console;
  if (originalConsole[type]) {
    var result = callback();
    return result;
  }

  return;
}