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
__webpack_require__.d(__webpack_exports__, "captureException", function() { return /* reexport */ captureException; });
__webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return /* reexport */ getCurrentHub; });
__webpack_require__.d(__webpack_exports__, "VueIntegration", function() { return /* reexport */ integrations_VueIntegration; });

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

// CONCATENATED MODULE: ./src/tracekit.ts
/**
 * This was originally forked from https://github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 */
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
// global reference to slice
var UNKNOWN_FUNCTION = '?';
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[-a-z]+:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
/** JSDoc */
function computeStackTrace(ex) {
    // tslint:disable:no-unsafe-any
    var stack = null;
    var popSize = ex && ex.framesToPop;
    try {
        // This must be tried first because Opera 10 *destroys*
        // its stacktrace property if you try to access the stack
        // property first!!
        stack = computeStackTraceFromStacktraceProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    return {
        message: extractMessage(ex),
        name: ex && ex.name,
        stack: [],
        failed: true,
    };
}
/** JSDoc */
// tslint:disable-next-line:cyclomatic-complexity
function computeStackTraceFromStackProp(ex) {
    // tslint:disable:no-conditional-assignment
    if (!ex || !ex.stack) {
        return null;
    }
    var stack = [];
    var lines = ex.stack.split('\n');
    var isEval;
    var submatch;
    var parts;
    var element;
    for (var i = 0; i < lines.length; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
            isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = submatch[1]; // url
                parts[3] = submatch[2]; // line
                parts[4] = submatch[3]; // column
            }
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = ''; // no column when eval
            }
            else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
                // FireFox uses this awesome columnNumber property for its top frame
                // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                // so adding 1
                // NOTE: this hack doesn't work if top-most frame is eval
                stack[0].column = ex.columnNumber + 1;
            }
            element = {
                url: parts[3],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null,
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** JSDoc */
function computeStackTraceFromStacktraceProp(ex) {
    if (!ex || !ex.stacktrace) {
        return null;
    }
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;
    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
    var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i;
    var lines = stacktrace.split('\n');
    var stack = [];
    var parts;
    for (var line = 0; line < lines.length; line += 2) {
        // tslint:disable:no-conditional-assignment
        var element = null;
        if ((parts = opera10Regex.exec(lines[line]))) {
            element = {
                url: parts[2],
                func: parts[3],
                args: [],
                line: +parts[1],
                column: null,
            };
        }
        else if ((parts = opera11Regex.exec(lines[line]))) {
            element = {
                url: parts[6],
                func: parts[3] || parts[4],
                args: parts[5] ? parts[5].split(',') : [],
                line: +parts[1],
                column: +parts[2],
            };
        }
        if (element) {
            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }
            stack.push(element);
        }
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** Remove N number of frames from the stack */
function popFrames(stacktrace, popSize) {
    try {
        return __assign(__assign({}, stacktrace), { stack: stacktrace.stack.slice(popSize) });
    }
    catch (e) {
        return stacktrace;
    }
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}

// CONCATENATED MODULE: ./src/parsers.ts


var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
        stacktrace: null
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    // tslint:disable-next-line:strict-type-predicates
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, rejection) {
    var event = {
        exception: {
            values: [
                {
                    type: isEvent(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (rejection ? 'promise rejection' : 'exception') + " captured with keys: " + exception,
                },
            ],
        },
        extra: {
            __serialized__: exception,
        },
        stacktrace: null
    };
    if (syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .map(function (frame) { return ({
        colno: frame.column === null ? undefined : frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line === null ? undefined : frame.line,
    }); })
        .slice(0, STACKTRACE_LIMIT)
        .reverse();
}

// CONCATENATED MODULE: ./src/utils.ts




var originMark = '__argos_original__';
var wrapMark = '__argos_wrapped__';
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
var wrap = function (fn, options) {
    var _a;
    if (options === void 0) { options = {}; }
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        if (fn[wrapMark]) {
            return fn[wrapMark];
        }
    }
    catch (e) {
        return fn;
    }
    var wrapped = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            return fn.apply(this, args);
        }
        catch (ex) {
            ignoreNextOnError();
            captureException(ex);
            throw ex;
        }
    };
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                wrapped[property] = fn[property];
            }
        }
    }
    catch (error) {
        // throw error;
    }
    // 相当于复制
    fn.prototype = fn.prototype || {};
    wrapped.prototype = fn.prototype;
    Object.defineProperty(fn, wrapMark, {
        enumerable: false,
        value: wrapped,
    });
    // 添加源标记
    Object.defineProperties(wrapped, (_a = {},
        _a[originMark] = {
            enumerable: false,
            value: fn,
        },
        _a));
    return wrapped;
};
// 异常类型检测
function exceptionCheck(exception) {
    var event;
    if (isErrorEvent(exception) && exception.error) {
        var errorEvent = exception;
        exception = errorEvent.error;
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (isDOMException(exception)) {
        var domException = exception;
        var name_1 = domException.name || 'DOMException';
        var message = domException.message ? name_1 + ": " + domException.message : name_1;
        event = eventFromString(message);
        // addExceptionTypeValue(event, message);
        return event;
    }
    if (isError(exception)) {
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (isPlainObject(exception) || isEvent(exception)) {
        // If it is plain Object or Event, serialize it manually and extract options
        // This will allow us to group events based on top-level keys
        // which is much better than creating new group when any key/value change
        var objectException = exception;
        event = eventFromPlainObject(objectException);
        // addExceptionMechanism(event, {
        //     synthetic: true,
        // });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception);
    // addExceptionTypeValue(event, "" + exception, undefined);
    return event;
}
function eventFromString(input, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event = {
        message: input,
        stacktrace: null
    };
    if (options.attachStacktrace && syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    // Skipped = 'skipped',
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    Status["Failed"] = "failed";
})(Status || (Status = {}));
function fromHttpCode(code) {
    if (code >= 200 && code < 300) {
        return Status.Success;
    }
    if (code === 429) {
        return Status.RateLimit;
    }
    if (code >= 400 && code < 500) {
        return Status.Invalid;
    }
    if (code >= 500) {
        return Status.Failed;
    }
    return Status.Unknown;
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
 * wrap 方法包裹的方法，如果里面报错了，除了自身会捕获，onerror 也会捕获到，
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

// CONCATENATED MODULE: ./src/Hub.ts
/**
 * 建立方法之间的全局调用桥梁
 * 例如 在 try-catch 中捕获的错误，onerror 无法拿到，需要一个公用的方法，可以调用已存在的公共方法
 */

var Hub_Hub = /** @class */ (function () {
    function Hub() {
        this._bond = new Map();
    }
    Hub.prototype._dispatchClient = function (method, key) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var targetBond = this.getBond().get(key);
        if (targetBond && targetBond[method]) {
            targetBond[method].apply(targetBond, args);
        }
    };
    Hub.prototype.getBond = function () {
        return this._bond;
    };
    Hub.prototype.bindClient = function (client, key) {
        if (key === void 0) { key = 'client'; }
        this.getBond().set(key, client);
    };
    Hub.prototype.captureException = function (key, exception, hint) {
        var eventId = uuid4();
        this._dispatchClient('captureException', key, exception, { eventId: eventId });
    };
    return Hub;
}());

function getGlobalCarrier() {
    var carrier = getGlobalObject();
    carrier[globalMark] = carrier[globalMark] || {
        hub: undefined,
    };
    return carrier;
}
var getCurrentHub = function () {
    var global = getGlobalCarrier();
    return getHubFromCarrier(global);
};
function getHubFromCarrier(carrier) {
    var carrierObj = carrier[globalMark];
    if (carrierObj && carrierObj.hub) {
        return carrierObj.hub;
    }
    carrier[globalMark] = carrier[globalMark] || {};
    carrier[globalMark].hub = new Hub_Hub();
    return carrier[globalMark].hub;
}
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = getCurrentHub();
    if (hub && hub[method]) {
        return hub[method].apply(hub, args);
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
function captureException(exception, key) {
    if (key === void 0) { key = 'client'; }
    return callOnHub('captureException', key, exception, {
        originalException: exception,
    });
}

// CONCATENATED MODULE: ./src/logger.ts
var logger_assign = (undefined && undefined.__assign) || function () {
    logger_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return logger_assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var logger_global = getGlobalObject();
var prefix = 'Argos Log';
var logger_Log = /** @class */ (function () {
    function Log() {
        this.options = {
            enableLog: false,
            showLog: true,
            showInfo: true,
            showWarn: true,
            showError: true,
        };
    }
    Log.prototype.bindOptions = function (options) {
        this.options = logger_assign(logger_assign({}, this.options), options);
    };
    Log.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showLog = _a.showLog;
        if (!enableLog || !showLog) {
            return;
        }
        consoleSandbox('log', function () {
            var _a;
            (_a = logger_global.console).log.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    Log.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showWarn = _a.showWarn;
        if (!enableLog || !showWarn) {
            return;
        }
        consoleSandbox('warn', function () {
            var _a;
            (_a = logger_global.console).warn.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    Log.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showInfo = _a.showInfo;
        if (!enableLog || !showInfo) {
            return;
        }
        consoleSandbox('info', function () {
            var _a;
            (_a = logger_global.console).info.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    Log.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this.options, enableLog = _a.enableLog, showError = _a.showError;
        if (!enableLog || !showError) {
            return;
        }
        consoleSandbox('error', function () {
            var _a;
            (_a = logger_global.console).error.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
        });
    };
    return Log;
}());
logger_global[globalMark] = logger_global[globalMark] || {};
var logger = logger_global[globalMark].logger || (logger_global[globalMark].logger = new logger_Log());
/* harmony default export */ var src_logger = (logger);

// CONCATENATED MODULE: ./src/Request.ts
var Request_assign = (undefined && undefined.__assign) || function () {
    Request_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Request_assign.apply(this, arguments);
};



var ignoreMark = '__ignore__';
var Request_Request = /** @class */ (function () {
    function Request(options) {
        if (options === void 0) { options = {}; }
        this.tasks = [];
        this.options = {
            maxRequest: 20
        };
        this.options = Request_assign(Request_assign({}, this.options), options);
    }
    Request.prototype.isReady = function () {
        return this.tasks.length <= this.options.maxRequest;
    };
    Request.prototype.remove = function (task) {
        var removedTask = this.tasks.splice(this.tasks.indexOf(task), 1)[0];
        return removedTask;
    };
    Request.prototype.add = function (task) {
        var _this = this;
        if (!this.isReady()) {
            console.warn('too many request');
            return;
        }
        this.tasks.push(task);
        task.then(function () { return _this.remove(task); }).then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add this catch here otherwise we have an unhandledPromiseRejection
                // because it's a new Promise chain.
            });
        });
        return task;
    };
    return Request;
}());

var Request_sendData = function (data, options) {
    if (!isSupportsFetch()) {
        return createFetch(data, options);
    }
    return createXHR(data, options);
};
function createFetch(data, options) {
    return new Promise(function (resolve, reject) {
        var url = options.url, headers = options.headers;
        if (!url) {
            console.error('There is no upload data url!');
            return;
        }
        var reqOptions = {
            body: JSON.stringify(data),
            method: 'POST',
            headers: Request_assign({}, headers)
        };
        return fetch(url, Request_assign({}, reqOptions)).then(function (response) {
            var status = fromHttpCode(response.status);
            if (status === Status.Success) {
                resolve({ status: status });
                return;
            }
            if (status === Status.RateLimit) {
                console.warn('Too many requests');
            }
            reject(response);
        }).catch(function (ex) {
            //上传的请求报错了，就不要抛到全局捕获了，直接在这里截断
            reject(ex);
        });
    });
}
function createXHR(data, options) {
    return new Promise(function (resolve, reject) {
        var url = options.url, headers = options.headers;
        if (!url) {
            console.error('There is no upload data url!');
            return;
        }
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState !== 4) {
                return;
            }
            var status = fromHttpCode(request.status);
            if (status === Status.Success) {
                resolve({ status: status });
                return;
            }
            src_logger.error(request);
            // 上传的请求报错了，就不要抛到全局捕获了，直接在这里截断
            reject(request);
        };
        request.open('POST', url);
        for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
                request.setRequestHeader(header, headers[header]);
            }
        }
        var sendData = JSON.stringify(data);
        request.send(sendData);
    });
}

// CONCATENATED MODULE: ./src/Base.ts
var Base_assign = (undefined && undefined.__assign) || function () {
    Base_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Base_assign.apply(this, arguments);
};



var Base_Base = /** @class */ (function () {
    function Base(options) {
        this.options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.options = Base_assign(Base_assign({}, this.options), options);
        this.request = new Request_Request();
        var integrations = this.options.integrations;
        if (integrations) {
            this.setUpIntegrations(integrations);
        }
    }
    Base.prototype.setUpIntegrations = function (integrations) {
        integrations.forEach(function (ele) {
            if (ele && ele.setUp) {
                ele.setUp();
            }
        });
    };
    Base.prototype.captureException = function (exception, otherMsg) {
        var _this = this;
        var eventId = otherMsg && otherMsg.eventId;
        var exceptionFormat = exceptionCheck(exception);
        exceptionFormat.eventId = eventId;
        var allData = this.combineData(exceptionFormat);
        src_logger.info('exception data', allData);
        this.request.add(new Promise(function () {
            Request_sendData(allData, _this.options);
        }));
    };
    // 获取环境基本信息
    Base.prototype.getUserAgent = function () {
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
    // 合并数据
    Base.prototype.combineData = function (data) {
        var environment = this.getUserAgent();
        if (!data.environment) {
            data.environment = environment;
        }
        return data;
    };
    return Base;
}());
/* harmony default export */ var src_Base = (Base_Base);

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
/**
 * 对原生方法的重新包装，为错误捕获提供另外一个角度
 * 比如本地无服务情况下，chrome 由于同源策略，看不到错误相关信息，这个时候，对原生方法重新包装就有效果
 */




var GlobalHandlers_global = getGlobalObject();
var GlobalHandlers_GlobalHandlers = /** @class */ (function () {
    function GlobalHandlers(options) {
        this.options = {
            onerror: true,
            onunhandledrejection: true,
            eventTarget: true,
        };
        this._isSet = false;
        this.options = GlobalHandlers_assign(GlobalHandlers_assign({}, this.options), options);
        this.setUp();
    }
    GlobalHandlers.prototype.setUp = function () {
        if (this._isSet) {
            return;
        }
        var _a = this.options, onerror = _a.onerror, onunhandledrejection = _a.onunhandledrejection, eventTarget = _a.eventTarget;
        if (onerror) {
            this._wrapOnerror();
        }
        if (onunhandledrejection) {
            this._wrapOnunhandledrejection();
        }
        if (eventTarget) {
            this._wrapEventTarget();
        }
        // if (xhr) {
        //   this._wrapXHR()
        // }
        this._isSet = true;
    };
    GlobalHandlers.prototype._wrapOnerror = function () {
        var self = this; // tslint:disable-line:no-this-assignment
        // 有可能已有被重写了，所以要暂存下来
        var oldOnError = GlobalHandlers_global.onerror;
        GlobalHandlers_global.onerror = function (msg, url, line, column, error) {
            src_logger.info('onerror event: ', { msg: msg, url: url, line: line, column: column, error: error });
            if (shouldIgnoreOnError()) {
                return;
            }
            var ex = isPrimitive(error)
                ? self._eventFromIncompleteOnError(msg, url, line, column)
                : self._enhanceEventWithInitialFrame(exceptionCheck(error), url, line, column);
            captureException(ex);
            if (oldOnError) {
                return oldOnError.apply(this, arguments);
            }
            return false;
        };
    };
    GlobalHandlers.prototype._wrapOnunhandledrejection = function () {
        var self = this;
        // 有可能已有被重写了，所以要暂存下来
        var oldOnError = GlobalHandlers_global.onunhandledrejection;
        GlobalHandlers_global.onunhandledrejection = function (e) {
            src_logger.info('unhandledrejection event: ', e);
            var error = e;
            try {
                error = e && 'reason' in e ? e.reason : e;
            }
            catch (ex) {
                // no-empty
            }
            if (shouldIgnoreOnError()) {
                return;
            }
            var ex = isPrimitive(error)
                ? self._eventFromIncompleteRejection(error)
                : exceptionCheck(error);
            if (oldOnError) {
                return oldOnError.apply(this, arguments);
            }
            return true;
        };
    };
    GlobalHandlers.prototype._wrapEventTarget = function () {
        if (!('document' in GlobalHandlers_global)) {
            return;
        }
        var proto = GlobalHandlers_global.EventTarget && GlobalHandlers_global.EventTarget.prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        fill(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                var wrapFn = fn;
                if (eventName === 'click') {
                    wrapFn = wrap(fn, options);
                }
                return original.call(this, eventName, wrapFn, options);
            };
        });
    };
    // 暂时用不到
    GlobalHandlers.prototype._wrapXHR = function () {
        if (!isSupportsXMR()) {
            return;
        }
    };
    // 暂时用不到
    GlobalHandlers.prototype._wrapFetch = function () {
        fill(GlobalHandlers_global, 'fetch', function (originalFetch) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var fetchInput = args[0];
                var method = 'GET';
                var url;
                if (typeof fetchInput === 'string') {
                    url = fetchInput;
                }
                else if ('Request' in GlobalHandlers_global && fetchInput instanceof Request) {
                    url = fetchInput.url;
                    if (fetchInput.method) {
                        method = fetchInput.method;
                    }
                }
                else {
                    url = String(fetchInput);
                }
                if (args[1] && args[1].method) {
                    method = args[1].method;
                }
                var fetchData = {
                    method: isString(method) ? method.toUpperCase() : method,
                    url: url,
                };
                return originalFetch
                    .apply(GlobalHandlers_global, args)
                    .then(function (response) {
                    fetchData.status_code = response.status;
                    return response;
                })
                    .then(null, function (error) {
                    throw error;
                });
            };
        });
    };
    GlobalHandlers.prototype._eventFromIncompleteOnError = function (msg, url, line, column) {
        var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        // If 'message' is ErrorEvent, get real message from inside
        var message = isErrorEvent(msg) ? msg.message : msg;
        var name;
        if (isString(message)) {
            var groups = message.match(ERROR_TYPES_RE);
            if (groups) {
                name = groups[1];
                message = groups[2];
            }
        }
        var event = {
            exception: {
                values: [
                    {
                        type: name || 'Error',
                        value: message,
                    },
                ],
            },
        };
        return this._enhanceEventWithInitialFrame(event, url, line, column);
    };
    GlobalHandlers.prototype._eventFromIncompleteRejection = function (error) {
        return {
            exception: {
                values: [
                    {
                        type: 'UnhandledRejection',
                        value: "Non-Error promise rejection captured with value: " + error,
                    },
                ],
            },
        };
    };
    GlobalHandlers.prototype._enhanceEventWithInitialFrame = function (event, url, line, column) {
        event.exception = event.exception || {};
        event.exception.values = event.exception.values || [];
        event.exception.values[0] = event.exception.values[0] || {};
        event.exception.values[0].stacktrace = event.exception.values[0].stacktrace || {};
        event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames || [];
        var colno = isNaN(parseInt(column, 10)) ? undefined : column;
        var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
        var filename = isString(url) && url.length > 0 ? url : getLocationHref();
        if (event.exception.values[0].stacktrace.frames.length === 0) {
            event.exception.values[0].stacktrace.frames.push({
                colno: colno,
                filename: filename,
                function: '?',
                in_app: true,
                lineno: lineno,
            });
        }
        return event;
    };
    return GlobalHandlers;
}());
/* harmony default export */ var src_GlobalHandlers = (GlobalHandlers_GlobalHandlers);

// CONCATENATED MODULE: ./src/integrations.ts
/**
 * 针对一些框架异常捕获的钩子
 */



/**
 * Vue 中全局错误配置 errorHandler
 * https://cn.vuejs.org/v2/api/#errorHandler
 */
var integrations_VueIntegration = /** @class */ (function () {
    function VueIntegration(options) {
        this._hasSet = false;
        var globalObj = getGlobalObject();
        this._vue = options.Vue || globalObj.Vue;
        this.setUp();
    }
    VueIntegration.prototype.setUp = function () {
        var _this = this;
        if (this._hasSet) {
            src_logger.info('VueIntegration installed');
            return;
        }
        if (!this._vue || !this._vue.config) {
            src_logger.error('VueIntegration is missing a Vue instance');
            return;
        }
        var oldOnError = this._vue.config.errorHandler;
        this._vue.config.errorHandler = function (error, vm, info) {
            captureException(error);
            if (typeof oldOnError === 'function') {
                oldOnError.call(_this._vue, error, vm, info);
            }
        };
        this._hasSet = true;
    };
    return VueIntegration;
}());


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





var init = function (options) {
    if (options === void 0) { options = {}; }
    var defaultOptions = {
        url: '' // 上报的请求
    };
    var combineOptions = src_assign(src_assign({}, defaultOptions), options);
    src_logger.bindOptions(combineOptions);
    if (!combineOptions.url) {
        src_logger.error('There is no upload data url!');
        return;
    }
    var base = new src_Base(combineOptions);
    var hub = getCurrentHub();
    hub.bindClient(base);
    new src_GlobalHandlers(combineOptions);
};



/***/ })
/******/ ]);
});
//# sourceMappingURL=args.js.map