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
    const msg = args.join(' ')
    global.console.log(`[${prefix}]`)
  }

  warn(...args) {
    const {enableLog,showWarn} = this.options;
    const global: any = this.globalObj
    if (!enableLog || !showWarn) {
      return;
    }
    const msg = args.join(' ')
    global.console.warn(`[${prefix}] ${msg}`)
  }

  info(...args) {
    const {enableLog,showInfo} = this.options;
    const global: any = this.globalObj
    if (!enableLog || !showInfo) {
      return;
    }
    const msg = args.join(' ')
    global.console.info(`[${prefix}] ${msg}`)
  }

  error(...args) {
    const {enableLog,showError} = this.options;
    const global: any = this.globalObj
    if (!enableLog || !showError) {
      return;
    }
    const msg = args.join(' ')
    global.console.error(`[${prefix}] ${msg}`)
  }

}

export default Log