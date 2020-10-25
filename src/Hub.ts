/**
 * 建立方法之间的全局调用桥梁
 * 例如 在 try-catch 中捕获的错误，onerror 无法拿到，需要一个公用的方法，可以调用已存在的公共方法
 */
import {uuid4} from './utils'
import {getGlobalObject} from './helper'

export class Hub {
  private _bond = new Map();

  constructor() {

  }

  private _dispatchClient(method,...args) {
    const targetBond = this.getBond().get('client');
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

  captureException(exception) {
    const eventId = uuid4();
    this._dispatchClient('captureException',exception,{eventId})
  }
}

export function getMainCarrier(): Carrier {
  const carrier = getGlobalObject();
  carrier.__SENTRY__ = carrier.__SENTRY__ || {
    hub: undefined,
  };
  return carrier;
}

export const getCurrentHub = () => {
  const global = getMainCarrier();

  return getHubFromCarrier(global);
}

export function getHubFromCarrier(carrier): Hub {
  if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
    return carrier.__SENTRY__.hub;
  }
  carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  carrier.__SENTRY__.hub = new Hub();
  return carrier.__SENTRY__.hub;
}


function callOnHub<T>(method: string, ...args: any[]): T {
  const hub = getCurrentHub();
  if (hub && hub[method as keyof Hub]) {
    // tslint:disable-next-line:no-unsafe-any
    return (hub[method as keyof Hub] as any)(...args);
  }
  throw new Error(`No hub defined or ${method} was not found on the hub, please open a bug report.`);
}


export function captureEvent(event: Event): string {
  return callOnHub('captureEvent', event);
}