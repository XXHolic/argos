
import {Request,sendData} from '../Request';
import logger from '../logger';


interface BaseOptions {
  headers?: object,
  url?: string,
}

class Base {
  options: BaseOptions = {};
  request: any;
  environment: object = {};

  constructor(options) {
    this.options = {...this.options,...options};
    this.request = new Request(options);
    this.getSystemInfo()
  }

  captureException(exception,otherMsg) {
    const eventId = otherMsg && otherMsg.eventId;
    let exceptionFormat = {exception,eventId:null};
    exceptionFormat.eventId = eventId;
    const allData = this.combineData(exceptionFormat)
    logger.info('exception data',allData);
    this.request.add(
      new Promise(() => {
        sendData(allData,this.options);
      })
    )
  }

  // 获取环境基本信息
  getSystemInfo() {
    const that = this;
    try {
      // @ts-ignore
      wx.getSystemInfo({
        success (res) {
          that.environment = res;
        }
      })
    } catch (error) {
      logger.error('wx.getSystemInfo error',error);
    }
  }

  // 合并数据
  combineData(data) {
    if (!data.environment) {
      data.environment = this.environment;
    }
    return data;
  }

}

export default Base