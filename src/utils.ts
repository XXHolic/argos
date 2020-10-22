
const fallbackGlobalObject = {};
// 获取全局属性，在其它的一些环境（例如 node）中，可能没有 window 对象
export const getGlobalObject = ()=> {
  return typeof window !== 'undefined' ? window : fallbackGlobalObject;
}

// 扩展属性，避免覆盖已存在的方法
export const fill = (source, name, replacement) => {
  if (!(name in source)) {
      return;
  }
  const original = source[name];
  const wrapped = replacement(original);
  source[name] = wrapped;
}

export const supportsFetch = () => {
  if (!('fetch' in getGlobalObject())) {
      return false;
  }
  return true;
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
      // set 4 in byte 7
      // eslint-disable-next-line no-bitwise
      arr[3] = (arr[3] & 0xfff) | 0x4000;
      // set 2 most significant bits of byte 9 to '10'
      // eslint-disable-next-line no-bitwise
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
      // eslint-disable-next-line no-bitwise
      const r = (Math.random() * 16) | 0;
      // eslint-disable-next-line no-bitwise
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

export const triggerHandler = (type, data) => {
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