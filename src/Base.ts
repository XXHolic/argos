import { exceptionCheck,getGlobalObject } from './utils';
import {Request,sendData} from './Request';


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
  request: any;


  bindOptions(options,logger) {
    this.options = {...this.options,...options};
    this.logger = logger;
    this.request = new Request();
  }

  captureException(exception,otherMsg) {
    const eventId = otherMsg && otherMsg.eventId;
    const logger: any = this.logger;
    logger.info('exception origin',exception);
    let exceptionFormat = exceptionCheck(exception);
    exceptionFormat.eventId = eventId;
    const allData = this.combineData(exceptionFormat)
    logger.info('allData',allData);
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

export default BaseClient