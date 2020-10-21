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
  };
  logger: object;


  bindOptions(options,logger) {
    this.options = {...this.options,...options};
    this.logger = logger;
  }

  // 主动捕获
  capture(data) {
    const logger: any = this.logger;
    logger.info('capture data',data);
    this.send(data);
  }

  createFetch(data) {
    const {url,headers} = this.options;
    const logger: any = this.logger;
    if (!url) {
      logger.error('There is no upload data url!');
      return;
    }
    const reqOptions = {
      body: JSON.stringify(data),
      method: 'POST',
      headers:{...headers}
    }
    logger.info('upload params',reqOptions);
    fetch(url,{...reqOptions});
  }

  createXHR(data) {
    const {url,headers} = this.options;
    const logger: any = this.logger;
    if (!url) {
      logger.error('There is no upload data url!');
      return;
    }
    const request = new XMLHttpRequest();
    // request.onreadystatechange = () => {

    // };
    request.open('POST', url);
    for (const header in headers) {
        if (headers.hasOwnProperty(header)) {
            request.setRequestHeader(header, headers[header]);
        }
    }
    logger.info('upload params',data);
    const sendData = JSON.stringify(data);
    request.send(sendData);
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