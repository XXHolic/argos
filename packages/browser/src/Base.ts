import { logger,getGlobalObject } from '@thynpm/argos-utils';
import {Request,sendData} from './Request';
import { exceptionCheck } from './utils';

interface BaseOptions {
  headers?: object,
  url?: string,
  integrations?: Array<any>
}

class Base {
  options: BaseOptions = {
    headers:{
      'Content-Type': 'application/json'
    }
  };
  request: any;

  constructor(options) {
    this.options = {...this.options,...options};
    this.request = new Request();
    const {integrations} = this.options;
    if (integrations) {
      this.setUpIntegrations(integrations)
    }

  }

  setUpIntegrations(integrations) {
    integrations.forEach(ele => {
      if (ele && ele.setUp) {
        ele.setUp()
      }
    });
  }

  captureException(exception,otherMsg) {
    const eventId = otherMsg && otherMsg.eventId;
    let exceptionFormat = exceptionCheck(exception);
    exceptionFormat.eventId = eventId;
    const allData = this.combineData(exceptionFormat)
    debugger
    logger.info('exception data',allData);
    this.request.add(
      new Promise(() => {
        sendData(allData,this.options);
      })
    )
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

  // 合并数据
  combineData(data) {
    const environment = this.getUserAgent()
    if (!data.environment) {
      data.environment = environment;
    }
    return data;
  }

}

export default Base