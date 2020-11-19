/**
 * Base 类会进行外部框架插件异常的初始化，异常捕获和再加工
 */
import { logger, getGlobalObject } from '@thynpm/argos-utils';
import { Request, sendData } from './Request';
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

  /**
   * 外部提供传入方法的初始化
   * @param integrations
   */
  setUpIntegrations(integrations) {
    integrations.forEach(ele => {
      if (ele && ele.setUp) {
        ele.setUp()
      }
    });
  }

  /**
   * 与 Hub 中同名的异常捕获，Hub 进行中心调度的时候，就会根据名称进行调用。
   * @param exception
   * @param otherMsg
   */
  captureException(exception,otherMsg) {
    // 原则上是统一自动生成的
    const eventId = otherMsg && otherMsg.eventId;
    let exceptionFormat = exceptionCheck(exception);
    exceptionFormat.eventId = eventId;
    const allData = this.combineData(exceptionFormat)
    logger.info('exception data',allData);
    this.request.add(
      new Promise(() => {
        sendData(allData,this.options);
      })
    )
  }

  /**
   * 获取宿主环境的一些基本信息
   */
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

  /**
   * 宿主信息和异常信息整合到一起
   * @param data
   */
  combineData(data) {
    const environment = this.getUserAgent()
    if (!data.environment) {
      data.environment = environment;
    }
    return data;
  }

}

export default Base