import { Request, sendData } from "./Request";
import { logger } from "@thynpm/argos-utils";
import { SDK_MSG } from "./version";

interface BaseOptions {
  headers?: object;
  url?: string;
}

class Base {
  options: BaseOptions = {};
  request: any;
  environment: object = {};
  networkType: object = {};
  wxSetting: object = {};
  currentPage: object = {};

  constructor(options) {
    this.options = { ...this.options, ...options };
    this.request = new Request(options);
    // 异步，一开始先拿到存下来
    this.getSystemInfo();
    this.getNetworkType();
  }

  captureException(exception, otherMsg) {
    const eventId = otherMsg && otherMsg.eventId;
    let exceptionFormat = { exception, eventId: null };
    exceptionFormat.eventId = eventId;
    this.getCurrentPage();
    const allData = this.combineData(exceptionFormat);
    logger.info("exception data", allData);
    this.request.add(
      new Promise(() => {
        sendData(allData, this.options);
      })
    );
  }

  getCurrentPage() {
    const that = this;
    try {
      // @ts-ignore
      const pages = getCurrentPages();
      if (pages.length) {
        const currentPage = pages[pages.length - 1];
        const {
          route = "",
          options = {},
          __displayReporter = {},
          __route__ = "",
          __wxExparserNodeId__ = "",
        } = currentPage;
        that.currentPage = {
          route,
          options,
          __displayReporter,
          __route__,
          __wxExparserNodeId__,
        };
      }
    } catch (error) {
      logger.error("getCurrentPages error", error);
    }
  }

  getSetting() {
    const that = this;
    try {
      // @ts-ignore
      wx.getSetting({
        success(res) {
          console.log(res.authSetting);
          that.wxSetting = res.authSetting;
          // res.authSetting = {
          //   "scope.userInfo": true,
          //   "scope.userLocation": true
          // }
        },
      });
    } catch (error) {
      logger.error("wx.getSetting error", error);
    }
  }

  // 获取环境基本信息
  getSystemInfo() {
    const that = this;
    try {
      // @ts-ignore
      wx.getSystemInfo({
        success(res) {
          that.environment = res;
        },
      });
    } catch (error) {
      logger.error("wx.getSystemInfo error", error);
    }
  }

  // 获取网络信息
  getNetworkType() {
    const that = this;
    try {
      // @ts-ignore
      wx.getNetworkType({
        success(res) {
          that.networkType = res;
        },
      });
    } catch (error) {
      logger.error("wx.getNetworkType error", error);
    }
  }

  // 合并数据
  combineData(data) {
    if (!data.currentPage) {
      data.currentPage = this.currentPage;
    }
    if (!data.environment) {
      data.environment = this.environment;
    }
    if (!data.networkType) {
      data.networkType = this.networkType;
    }
    if (!data.sdk) {
      data.sdk = SDK_MSG;
    }
    return data;
  }
}

export default Base;
