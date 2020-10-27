/**
 * 建立方法之间的全局调用桥梁
 * 例如 在 try-catch 中捕获的错误，onerror 无法拿到，需要一个公用的方法，可以调用已存在的公共方法
 */
import {uuid4,getGlobalObject} from './utils'

const globalMark = '__ARGOS__'
export class Hub {
  private _bond = new Map();

  constructor() {

  }

  private _dispatchClient(method,key,...args) {
    const targetBond = this.getBond().get(key);
    if (targetBond  && targetBond[method]) {
      targetBond[method](...args)
    }
  }

  getBond() {
    return this._bond;
  }

  bindClient(client,key='client') {
    this.getBond().set(key,client);
  }

  captureException(key,exception,hint) {
    const eventId = uuid4();
    this._dispatchClient('captureException',key,exception,{eventId})
  }
}

export function getGlobalCarrier() {
  const carrier = getGlobalObject();
  carrier[globalMark] = carrier[globalMark] || {
    hub: undefined,
  };
  return carrier;
}

export const getCurrentHub = () => {
  const global = getGlobalCarrier();
  return getHubFromCarrier(global);
}

export function getHubFromCarrier(carrier) {
  const carrierObj = carrier[globalMark];
  if (carrierObj && carrierObj.hub) {
    return carrierObj.hub;
  }
  carrier[globalMark] = carrier[globalMark] || {};
  carrier[globalMark].hub = new Hub();
  return carrier[globalMark].hub;
}


function callOnHub(method: string, ...args: any[]) {
  const hub = getCurrentHub();
  if (hub && hub[method]) {
    return (hub[method])(...args);
  }
  throw new Error(`No hub defined or ${method} was not found on the hub, please open a bug report.`);
}


export function captureException(exception: any,key='client'): string {
  return callOnHub('captureException',key,exception, {
    originalException: exception,
  });
}