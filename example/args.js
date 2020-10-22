(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Argos"] = factory();
	else
		root["Argos"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "init", function() { return /* binding */ init; });
__webpack_require__.d(__webpack_exports__, "captureMessage", function() { return /* binding */ captureMessage; });

// CONCATENATED MODULE: ./src/utils.ts
var fallbackGlobalObject = {};
// 获取全局属性，在其它的一些环境（例如 node）中，可能没有 window 对象
var getGlobalObject = function () {
    return typeof window !== 'undefined' ? window : fallbackGlobalObject;
};
// 扩展属性，避免覆盖已存在的方法
var fill = function (source, name, replacement) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacement(original);
    source[name] = wrapped;
};
var supportsFetch = function () {
    if (!('fetch' in getGlobalObject())) {
        return false;
    }
    return true;
};
/**
 * 生成唯一标志
 */
var uuid4 = function () {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
// 事件统一发布订阅
var handlers = {};
var addHandler = function (handler) {
    if (!handler || typeof handler.type !== 'string') {
        return;
    }
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.fn);
};
var triggerHandler = function (type, data) {
    if (!type || !handlers[type]) {
        return;
    }
    for (var _i = 0, _a = handlers[type] || []; _i < _a.length; _i++) {
        var handler = _a[_i];
        try {
            handler(data);
        }
        catch (e) {
            console.error('Error while triggering handler');
        }
    }
};
var log = {
    log: function (msg) {
        console.log("---" + msg + "---");
    },
    warn: function (msg) {
        console.warn("---" + msg + "---");
    },
    info: function (msg) {
        console.info("---" + msg + "---");
    },
    error: function (msg) {
        throw new Error("---" + msg + "---");
    }
};

// CONCATENATED MODULE: ./src/Log.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var prefix = 'Argos Log';
var Log_Log = /** @class */ (function () {
    function Log() {
        this.options = {
            enableLog: false,
            showLog: true,
            showInfo: true,
            showWarn: true,
            showError: true,
        };
        this.globalObj = null;
    }
    Log.prototype.bindOptions = function (options) {
        this.options = __assign(__assign({}, this.options), options);
        this.globalObj = getGlobalObject();
    };
    Log.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showLog = _a.showLog;
        var global = this.globalObj;
        if (!enableLog || !showLog) {
            return;
        }
        var msg = args.join(' ');
        global.console.log("[" + prefix + "] " + msg);
    };
    Log.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showWarn = _a.showWarn;
        var global = this.globalObj;
        if (!enableLog || !showWarn) {
            return;
        }
        var msg = args.join(' ');
        global.console.warn("[" + prefix + "] " + msg);
    };
    Log.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showInfo = _a.showInfo;
        var global = this.globalObj;
        if (!enableLog || !showInfo) {
            return;
        }
        var msg = args.join(' ');
        global.console.info("[" + prefix + "] " + msg);
    };
    Log.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showError = _a.showError;
        var global = this.globalObj;
        if (!enableLog || !showError) {
            return;
        }
        var msg = args.join(' ');
        global.console.error("[" + prefix + "] " + msg);
    };
    return Log;
}());
/* harmony default export */ var src_Log = (Log_Log);

// CONCATENATED MODULE: ./src/BaseClient.ts
var BaseClient_assign = (undefined && undefined.__assign) || function () {
    BaseClient_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return BaseClient_assign.apply(this, arguments);
};

var BaseClient_BaseClient = /** @class */ (function () {
    function BaseClient() {
        this.options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    BaseClient.prototype.bindOptions = function (options, logger) {
        this.options = BaseClient_assign(BaseClient_assign({}, this.options), options);
        this.logger = logger;
    };
    // 主动捕获
    BaseClient.prototype.capture = function (data) {
        var logger = this.logger;
        logger.info('capture data', data);
        this.send(data);
    };
    BaseClient.prototype.createFetch = function (data) {
        var _a = this.options, url = _a.url, headers = _a.headers;
        var logger = this.logger;
        if (!url) {
            logger.error('There is no upload data url!');
            return;
        }
        var reqOptions = {
            body: JSON.stringify(data),
            method: 'POST',
            headers: BaseClient_assign({}, headers)
        };
        logger.info('upload params', reqOptions);
        fetch(url, BaseClient_assign({}, reqOptions));
    };
    BaseClient.prototype.createXHR = function (data) {
        var _a = this.options, url = _a.url, headers = _a.headers;
        var logger = this.logger;
        if (!url) {
            logger.error('There is no upload data url!');
            return;
        }
        var request = new XMLHttpRequest();
        // request.onreadystatechange = () => {
        // };
        request.open('POST', url);
        for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
                request.setRequestHeader(header, headers[header]);
            }
        }
        logger.info('upload params', data);
        var sendData = JSON.stringify(data);
        request.send(sendData);
    };
    // 获取环境基本信息
    BaseClient.prototype.getUserAgent = function () {
        var global = getGlobalObject();
        var data = {
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
        var innerWidth = global.innerWidth, innerHeight = global.innerHeight, screen = global.screen, navigator = global.navigator;
        if (innerWidth) {
            data.pageW = innerWidth;
            data.pageH = innerHeight;
        }
        if (screen) {
            data.screenW = screen.width;
            data.screenH = screen.height;
        }
        if (navigator) {
            var appName = navigator.appName, appVersion = navigator.appVersion, userAgent = navigator.userAgent, platform = navigator.platform;
            data.appName = appName;
            data.appVersion = appVersion;
            data.userAgent = userAgent;
            data.platform = platform;
        }
        return data;
    };
    // 发送数据
    BaseClient.prototype.send = function (data) {
        var environment = this.getUserAgent();
        if (!data.environment) {
            data.environment = environment;
        }
        debugger
        if (supportsFetch()) {
            this.createFetch(data);
            return;
        }
        this.createXHR(data);
    };
    return BaseClient;
}());
/* harmony default export */ var src_BaseClient = (BaseClient_BaseClient);

// CONCATENATED MODULE: ./src/GlobalHandlers.ts
var GlobalHandlers_assign = (undefined && undefined.__assign) || function () {
    GlobalHandlers_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GlobalHandlers_assign.apply(this, arguments);
};
// 重写原生的一些异常相关的方法

var GlobalHandlers_GlobalHandlers = /** @class */ (function () {
    function GlobalHandlers() {
        this.options = {
            onerrorMark: true,
            onunhandledrejectionMark: true,
            eventTargetMark: true,
        };
        this.global = getGlobalObject();
    }
    GlobalHandlers.prototype.bindOptions = function (options, baseClient, logger) {
        this.options = GlobalHandlers_assign(GlobalHandlers_assign({}, this.options), options);
        this.baseClient = baseClient;
        this.logger = logger;
        this.init();
    };
    ;
    GlobalHandlers.prototype.init = function () {
        var _a = this.options, onerrorMark = _a.onerrorMark, onunhandledrejectionMark = _a.onunhandledrejectionMark, eventTargetMark = _a.eventTargetMark;
        if (onerrorMark) {
            this.wrapOnerror();
        }
        if (onunhandledrejectionMark) {
            // this.wrapOnunhandledrejection();
        }
        if (eventTargetMark) {
            // this.wrapEventTarget();
        }
    };
    GlobalHandlers.prototype.wrapOnerror = function () {
        var global = this.global;
        var baseClient = this.baseClient;
        var logger = this.logger;
        // 有可能已有被重写了，所以要暂存下来
        var oldOnError = global.onerror;
        addHandler({
            type: 'error',
            fn: function (data) {
                var eventId = uuid4();
                baseClient.send({ type: 'error', eventId: eventId, exception: data });
            }
        });
        global.onerror = function (msg, url, line, column, error) {
            logger.info('onerror event: ', { msg: msg, url: url, line: line, column: column, error: error });
            triggerHandler('error', {
                column: column,
                error: error,
                line: line,
                msg: msg,
                url: url,
            });
            if (oldOnError) {
                return oldOnError.apply(this, arguments);
            }
            return false;
        };
    };
    GlobalHandlers.prototype.wrapOnunhandledrejection = function () {
        var global = this.global;
        var baseClient = this.baseClient;
        var logger = this.logger;
        // 有可能已有被重写了，所以要暂存下来
        var oldOnError = global.onunhandledrejection;
        addHandler({ type: 'unhandledrejection', fn: function (data) {
                var eventId = uuid4();
                baseClient.send({ type: 'unhandledrejection', eventId: eventId, exception: data });
            } });
        global.onunhandledrejection = function (e) {
            logger.info('unhandledrejection event: ', e);
            triggerHandler('unhandledrejection', e);
            if (oldOnError) {
                return oldOnError.apply(this, arguments);
            }
            return true;
        };
    };
    GlobalHandlers.prototype.wrapEventTarget = function () {
        var global = this.global;
        var baseClient = this.baseClient;
        if (!('document' in global)) {
            return;
        }
        addHandler({
            type: 'dom',
            fn: function (data) {
                var eventId = uuid4();
                baseClient.send({ type: 'dom', eventId: eventId, exception: data });
            }
        });
        var proto = global.EventTarget && global.EventTarget.prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        fill(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                return original.call(this, eventName, fn, options);
            };
        });
    };
    return GlobalHandlers;
}());
/* harmony default export */ var src_GlobalHandlers = (GlobalHandlers_GlobalHandlers);

// CONCATENATED MODULE: ./src/index.ts
var src_assign = (undefined && undefined.__assign) || function () {
    src_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return src_assign.apply(this, arguments);
};



var src_baseClient = new src_BaseClient();
var globalHandlers = new src_GlobalHandlers();
var src_logger = new src_Log();
var init = function (options) {
    if (options === void 0) { options = {}; }
    var defaultOptions = {
        url: '' // 上报的请求
    };
    var combineOptions = src_assign(src_assign({}, defaultOptions), options);
    src_logger.bindOptions(combineOptions);
    if (!combineOptions.url) {
        src_logger.warn('There is no upload data url!');
    }
    src_baseClient.bindOptions(combineOptions, src_logger);
    globalHandlers.bindOptions(combineOptions, src_baseClient, src_logger);
};
var captureMessage = src_baseClient.capture.bind(src_baseClient);



/***/ })
/******/ ]);
});
//# sourceMappingURL=args.js.map