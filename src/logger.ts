import { getGlobalObject,globalMark,consoleSandbox } from './utils'

const global:any = getGlobalObject();
interface LogOptions {
  enableLog?:boolean,
  showLog?: boolean,
  showInfo?: boolean
  showWarn?: boolean
  showError?: boolean
}
const prefix = 'Argos Log'
class Log {
  options: LogOptions = {
    enableLog: false,
    showLog: true,
    showInfo: true,
    showWarn: true,
    showError: true,
  }


  bindOptions(options) {
    this.options = {...this.options,...options};
  }

  log(...args) {
    const {enableLog,showLog} = this.options;
    if (!enableLog || !showLog) {
      return;
    }
    consoleSandbox('log',() => {
      global.console.log(`[${prefix}]`,...args)
    })
  }

  warn(...args) {
    const {enableLog,showWarn} = this.options;
    if (!enableLog || !showWarn) {
      return;
    }
    consoleSandbox('warn',()=>{
      global.console.warn(`[${prefix}]`,...args)
    })
  }

  info(...args) {
    const {enableLog,showInfo} = this.options;
    if (!enableLog || !showInfo) {
      return;
    }
    consoleSandbox('info',() => {
      global.console.info(`[${prefix}]`,...args)
    })
  }

  error(...args) {
    const {enableLog,showError} = this.options;
    if (!enableLog || !showError) {
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