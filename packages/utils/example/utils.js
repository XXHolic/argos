(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ArgosUtils"] = factory();
	else
		root["ArgosUtils"] = factory();
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
__webpack_require__.d(__webpack_exports__, "isSupportsFetch", function() { return /* reexport */ isSupportsFetch; });
__webpack_require__.d(__webpack_exports__, "isSupportsXMR", function() { return /* reexport */ isSupportsXMR; });
__webpack_require__.d(__webpack_exports__, "isError", function() { return /* reexport */ isError; });
__webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return /* reexport */ isErrorEvent; });
__webpack_require__.d(__webpack_exports__, "isDOMException", function() { return /* reexport */ isDOMException; });
__webpack_require__.d(__webpack_exports__, "isEvent", function() { return /* reexport */ isEvent; });
__webpack_require__.d(__webpack_exports__, "isString", function() { return /* reexport */ isString; });
__webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return /* reexport */ isPlainObject; });
__webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return /* reexport */ isPrimitive; });
__webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return /* reexport */ getGlobalObject; });
__webpack_require__.d(__webpack_exports__, "globalMark", function() { return /* reexport */ globalMark; });
__webpack_require__.d(__webpack_exports__, "fill", function() { return /* reexport */ fill; });
__webpack_require__.d(__webpack_exports__, "uuid4", function() { return /* reexport */ uuid4; });
__webpack_require__.d(__webpack_exports__, "addHandler", function() { return /* reexport */ addHandler; });
__webpack_require__.d(__webpack_exports__, "triggerHandler", function() { return /* reexport */ triggerHandler; });
__webpack_require__.d(__webpack_exports__, "requestStatus", function() { return /* reexport */ requestStatus; });
__webpack_require__.d(__webpack_exports__, "fromHttpCode", function() { return /* reexport */ fromHttpCode; });
__webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return /* reexport */ getLocationHref; });
__webpack_require__.d(__webpack_exports__, "shouldIgnoreOnError", function() { return /* reexport */ shouldIgnoreOnError; });
__webpack_require__.d(__webpack_exports__, "ignoreNextOnError", function() { return /* reexport */ ignoreNextOnError; });
__webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return /* reexport */ consoleSandbox; });
__webpack_require__.d(__webpack_exports__, "logger", function() { return /* reexport */ src_logger; });

// CONCATENATED MODULE: ./src/utils.ts
var originMark = '__argos_original__';
var globalMark = '__ARGOS__';
var fallbackGlobalObject = {};
// 获取全局属性，在其它的一些环境（例如 node）中，可能没有 window 对象
var getGlobalObject = function () {
    return typeof window !== 'undefined' ? window : fallbackGlobalObject;
};
/**
 * 扩展属性，避免覆盖已存在的方法
 * @param source 原方法
 * @param name 属性名称
 * @param replacement 扩展的方法
 */
var fill = function (source, name, replacement) {
    var _a;
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacement(original);
    if (typeof wrapped === 'function') {
        try {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, (_a = {},
                _a[originMark] = {
                    enumerable: false,
                    value: original,
                },
                _a));
        }
        catch (e) {
            console.warn('multiple fill may cause error');
        }
    }
    source[name] = wrapped;
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
        arr[3] = (arr[3] & 0xfff) | 0x4000;
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
        var r = (Math.random() * 16) | 0;
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
var requestStatus;
(function (requestStatus) {
    /** The status could not be determined. */
    requestStatus["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    // Skipped = 'skipped',
    /** The event was sent to Sentry successfully. */
    requestStatus["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    requestStatus["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    requestStatus["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    requestStatus["Failed"] = "failed";
})(requestStatus || (requestStatus = {}));
function fromHttpCode(code) {
    if (code >= 200 && code < 300) {
        return requestStatus.Success;
    }
    if (code === 429) {
        return requestStatus.RateLimit;
    }
    if (code >= 400 && code < 500) {
        return requestStatus.Invalid;
    }
    if (code >= 500) {
        return requestStatus.Failed;
    }
    return requestStatus.Unknown;
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    try {
        return document.location.href;
    }
    catch (oO) {
        return '';
    }
}
/**
 * wrap 包裹的方法，如果里面报错了，除了自身会捕获，onerror 也会捕获到，
 * 这个时候，不应该重复的捕获，于是用了下面的方法
 */
var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * 在一些环境下面可能没有 console 相关的对象和方法，需要统一先做检查
 * @param type
 * @param callback
 */
function consoleSandbox(type, callback) {
    var global = getGlobalObject();
    if (!('console' in global)) {
        return;
    }
    var originalConsole = global.console;
    if (originalConsole[type]) {
        var result = callback();
        return result;
    }
    return;
}

// CONCATENATED MODULE: ./src/logger.ts
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var global = getGlobalObject();
var prefix = 'Argos Log';
var logger_Log = /** @class */ (function () {
    function Log() {
        this.options = {
            enableLog: false,
            showLog: true,
            showInfo: true,
            showWarn: true,
            showError: true,
            isXCX: false,
        };
    }
    Log.prototype.bindOptions = function (options) {
        this.options = __assign(__assign({}, this.options), options);
    };
    Log.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showLog = _a.showLog, isXCX = _a.isXCX;
        if (!enableLog || !showLog) {
            return;
        }
        if (isXCX) {
            console.log.apply(console, __spreadArrays(["[" + prefix + "]"], args));
            return;
        }
        consoleSandbox('log', function () {
            var _a;
            (_a = global.console).log.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    Log.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showWarn = _a.showWarn, isXCX = _a.isXCX;
        if (!enableLog || !showWarn) {
            return;
        }
        if (isXCX) {
            console.warn.apply(console, __spreadArrays(["[" + prefix + "]"], args));
            return;
        }
        consoleSandbox('warn', function () {
            var _a;
            (_a = global.console).warn.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    Log.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showInfo = _a.showInfo, isXCX = _a.isXCX;
        if (!enableLog || !showInfo) {
            return;
        }
        if (isXCX) {
            console.info.apply(console, __spreadArrays(["[" + prefix + "]"], args));
            return;
        }
        consoleSandbox('info', function () {
            var _a;
            (_a = global.console).info.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    Log.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showError = _a.showError, isXCX = _a.isXCX;
        if (!enableLog || !showError) {
            return;
        }
        if (isXCX) {
            console.error.apply(console, __spreadArrays(["[" + prefix + "]"], args));
            return;
        }
        consoleSandbox('error', function () {
            var _a;
            (_a = global.console).error.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    return Log;
}());
global[globalMark] = global[globalMark] || {};
var logger = global[globalMark].logger || (global[globalMark].logger = new logger_Log());
/* harmony default export */ var src_logger = (logger);

// CONCATENATED MODULE: ./src/is.ts

var isSupportsFetch = function () {
    if (!('fetch' in getGlobalObject())) {
        return false;
    }
    return true;
};
var isSupportsXMR = function () {
    if (!('XMLHttpRequest' in getGlobalObject())) {
        return false;
    }
    return true;
};
function isInstanceOf(obj, base) {
    try {
        return obj instanceof base;
    }
    catch (e) {
        return false;
    }
}
/**
 * 检查数据是否是异常类型
 * @param value
 */
var isError = function (value) {
    switch (Object.prototype.toString.call(value)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(value, Error);
    }
};
/**
 * ErrorEvent 事件对象在脚本发生错误时产生，它可以提供发生错误的脚本文件的文件名，以及发生错误时所在的行号等信息。
 * @param value
 */
var isErrorEvent = function (value) {
    return Object.prototype.toString.call(value) === '[object ErrorEvent]';
};
/**
 * 代表调用方法或访问 Web API 属性时发生的异常事，有 name 和 message 属性
 * @param value
 */
var isDOMException = function (value) {
    return Object.prototype.toString.call(value) === '[object DOMException]';
};
var isEvent = function (value) {
    return typeof Event !== 'undefined' && isInstanceOf(value, Event);
};
var isString = function (value) {
    return Object.prototype.toString.call(value) === '[object String]';
};
var isPlainObject = function (value) {
    return Object.prototype.toString.call(value) === '[object Object]';
};
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * @param value
 */
var isPrimitive = function (value) {
    return value === null || (typeof value !== 'object' && typeof value !== 'function');
};

// CONCATENATED MODULE: ./src/index.ts






/***/ })
/******/ ]);
});
//# sourceMappingURL=utils.js.map