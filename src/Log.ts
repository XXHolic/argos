import { getGlobalObject } from './utils'

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

  globalObj:object = null

  bindOptions(options) {
    this.options = {...this.options,...options};
    this.globalObj = getGlobalObject();
  }

  log(...args) {
    const {enableLog,showLog} = this.options;
    const global: any = this.globalObj
    if (!enableLog || !showLog) {
      return;
    }
    global.console.log(`[${prefix}]`,...args)
  }

  warn(...args) {
    const {enableLog,showWarn} = this.options;
    const global: any = this.globalObj
    if (!enableLog || !showWarn) {
      return;
    }
    global.console.warn(`[${prefix}]`,...args)
  }

  info(...args) {
    const {enableLog,showInfo} = this.options;
    const global: any = this.globalObj
    if (!enableLog || !showInfo) {
      return;
    }
    global.console.info(`[${prefix}]`,...args)
  }

  error(...args) {
    const {enableLog,showError} = this.options;
    const global: any = this.globalObj
    if (!enableLog || !showError) {
      return;
    }
    const msg = args.join(' ')
    global.console.error(`[${prefix}]`,...args)
  }

}

export default Log