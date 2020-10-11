import { getGlobalObject,supportsFetch } from './utils'



interface BaseClientOptions {
  headers?: object,
  url?: string
}

class BaseClient {
  options: BaseClientOptions = {
    headers:{
      'Content-Type': 'application/json'
    }
  }
  constructor() {
  }

  bindOptions(options) {
    this.options = {...this.options,...options}
  }

  // 主动捕获
  capture(data) {
    console.info('capture')
    this.send(data);
  }

  createFetch(data) {
    const {url,headers} = this.options;
    const reqOptions = {
      body: JSON.stringify(data),
      method: 'POST',
      headers:{...headers}
    }

    fetch(url,{...reqOptions});
  }

  createXHR(data) {
    const {url,headers} = this.options;
    const request = new XMLHttpRequest();
    // request.onreadystatechange = () => {

    // };
    request.open('POST', url);
    for (const header in headers) {
        if (headers.hasOwnProperty(header)) {
            request.setRequestHeader(header, headers[header]);
        }
    }
    request.send(JSON.stringify(data));
  }

  // 获取环境基本信息
  getUserAgent() {
    const global:any = getGlobalObject();
    let data = {
      pageW: null,
      pageH: null,
      screenW: null,
      screenH: null,
      network: null,
      userAgent: null,
      appName: null,
      system: null,
      appVersion: null,
      platform: null
    };
    const {innerWidth,innerHeight,screen,navigator} = global;
    if (innerWidth) {
      data.pageW = innerWidth;
      data.pageH = innerHeight;
    }

    if(screen) {
      data.screenW = screen.width;
      data.screenH = screen.height;
    }

    if (navigator) {
      const {appName,appVersion,userAgent,platform} = navigator;
      data.appName = appName;
      data.appVersion = appVersion;
      data.userAgent = userAgent;
      data.platform = platform;
    }

    return data;
  }

  // 发送数据
  send(data) {
    const environment = this.getUserAgent()
    // console.info('environment',environment)
    if (!data.environment) {
      data.environment = environment;
    }
    if(supportsFetch()) {
      this.createFetch(data);
      return;
    }
    this.createXHR(data);
  }

}

export default BaseClient