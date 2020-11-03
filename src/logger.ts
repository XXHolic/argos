import { getGlobalObject,globalMark,consoleSandbox } from './utils'

const global:any = getGlobalObject();
interface LogOptions {
  enableLog?:boolean,
  showLog?: boolean,
  showInfo?: boolean
  showWarn?: boolean
  showError?: boolean
  isXCX?: boolean // 小程序环境内没有全局 window 对象
}
const prefix = 'Argos Log'
class Log {
  options: LogOptions = {
    enableLog: false,
    showLog: true,
    showInfo: true,
    showWarn: true,
    showError: true,
    isXCX: false,
  }


  bindOptions(options) {
    this.options = {...this.options,...options};
  }

  log(...args) {
    const {enableLog,showLog,isXCX} = this.options;
    if (!enableLog || !showLog) {
      return;
    }

    if (isXCX) {
      console.log(`[${prefix}]`,...args)
      return;
    }

    consoleSandbox('log',() => {
      global.console.log(`[${prefix}]`,...args)
    })
  }

  warn(...args) {
    const {enableLog,showWarn,isXCX} = this.options;
    if (!enableLog || !showWarn) {
      return;
    }

    if (isXCX) {
      console.warn(`[${prefix}]`,...args)
      return;
    }

    consoleSandbox('warn',()=>{
      global.console.warn(`[${prefix}]`,...args)
    })
  }

  info(...args) {
    const {enableLog,showInfo,isXCX} = this.options;
    if (!enableLog || !showInfo) {
      return;
    }

    if (isXCX) {
      console.info(`[${prefix}]`,...args)
      return;
    }

    consoleSandbox('info',() => {
      global.console.info(`[${prefix}]`,...args)
    })
  }

  error(...args) {
    const {enableLog,showError,isXCX} = this.options;
    if (!enableLog || !showError) {
      return;
    }

    if (isXCX) {
      console.error(`[${prefix}]`,...args)
      return;
    }

    consoleSandbox('error',() => {
      global.console.error(`[${prefix}]`,...args)
    })
  }

}

global[globalMark] = global[globalMark] || {};
const logger = global[globalMark].logger || (global[globalMark].logger = new Log());

export default logger