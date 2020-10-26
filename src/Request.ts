import { getGlobalObject,supportsFetch } from './helper'
import { fromHttpCode,Status } from './utils'





interface RequestOptions {
  maxRequest?: number,
}

export class Request {
  private tasks = [];

  options: RequestOptions = {
    maxRequest: 20
  }

  constructor(options={}) {
    this.options = {...this.options,...options};
    const {maxRequest} = this.options;
    this.tasks = Array.from({length:Number(maxRequest)});
  }

  isReady() {
    return this.tasks.length < this.options.maxRequest;
  }

  remove(task) {
    const removedTask = this.tasks.splice(this.tasks.indexOf(task), 1)[0];
    return removedTask;
  }

  add(task) {
    if(!this.isReady()) {
      console.warn('too many request')
      return;
    }
    this.tasks.push(task);
    task.then(() => this.remove(task)).then(null, () =>
      this.remove(task).then(null, () => {
        // We have to add this catch here otherwise we have an unhandledPromiseRejection
        // because it's a new Promise chain.
      }),
    );

    return task;
  }

}

export const sendData = (data,options) => {
  if(supportsFetch()) {
    return createFetch(data,options);
  }
  return createXHR(data,options);
}

function createFetch(data,options) {
  return new Promise((resolve,reject) => {
    const {url,headers} = options;
    if (!url) {
      console.error('There is no upload data url!');
      return;
    }
    const reqOptions = {
      body: JSON.stringify(data),
      method: 'POST',
      headers:{...headers}
    }
    return fetch(url,{...reqOptions}).then(response => {
      resolve()
    }).catch(reject);
  })
}

function createXHR(data,options) {

  return new Promise((resolve,reject) => {
    const {url,headers} = options;
    if (!url) {
      console.error('There is no upload data url!');
      return;
    }
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return;
      }

      const status = fromHttpCode(request.status);

      if (status === Status.Success) {
        resolve({ status });
        return;
      }

      reject(request);
    };
    request.open('POST', url);
    for (const header in headers) {
        if (headers.hasOwnProperty(header)) {
            request.setRequestHeader(header, headers[header]);
        }
    }
    const sendData = JSON.stringify(data);
    request.send(sendData);
  })
}