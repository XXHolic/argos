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

// CONCATENATED MODULE: ./src/helper.ts
var fallbackGlobalObject = {};
// 获取全局属性，在其它的一些环境（例如 node）中，可能没有 window 对象
var getGlobalObject = function () {
    return typeof window !== 'undefined' ? window : fallbackGlobalObject;
};
var supportsFetch = function () {
    if (!('fetch' in getGlobalObject())) {
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
            captureException(ex);
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

// CONCATENATED MODULE: ./src/Hub.ts
/**
 * 建立方法之间的全局调用桥梁
 * 例如 在 try-catch 中捕获的错误，onerror 无法拿到，需要一个公用的方法，可以调用已存在的公共方法
 */


var globalMark = '__ARGOS__';
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
    Hub.prototype.captureException = function (key, exception) {
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

// CONCATENATED MODULE: ./src/Log.ts
var Log_assign = (undefined && undefined.__assign) || function () {
    Log_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Log_assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
        this.options = Log_assign(Log_assign({}, this.options), options);
        this.globalObj = getGlobalObject();
    };
    Log.prototype.log = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _b = this.options, enableLog = _b.enableLog, showLog = _b.showLog;
        var global = this.globalObj;
        if (!enableLog || !showLog) {
            return;
        }
        (_a = global.console).log.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
    };
    Log.prototype.warn = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _b = this.options, enableLog = _b.enableLog, showWarn = _b.showWarn;
        var global = this.globalObj;
        if (!enableLog || !showWarn) {
            return;
        }
        (_a = global.console).warn.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
    };
    Log.prototype.info = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _b = this.options, enableLog = _b.enableLog, showInfo = _b.showInfo;
        var global = this.globalObj;
        if (!enableLog || !showInfo) {
            return;
        }
        (_a = global.console).info.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
    };
    Log.prototype.error = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _b = this.options, enableLog = _b.enableLog, showError = _b.showError;
        var global = this.globalObj;
        if (!enableLog || !showError) {
            return;
        }
        var msg = args.join(' ');
        (_a = global.console).error.apply(_a, __spreadArrays(["[" + prefix + "]"], args));
    };
    return Log;
}());
/* harmony default export */ var src_Log = (Log_Log);

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


var Base_BaseClient = /** @class */ (function () {
    function BaseClient() {
        this.options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    BaseClient.prototype.bindOptions = function (options, logger) {
        this.options = Base_assign(Base_assign({}, this.options), options);
        this.logger = logger;
    };
    BaseClient.prototype.captureException = function (exception) {
        var logger = this.logger;
        logger.info('exception origin', exception);
        var exceptionFormat = exceptionCheck(exception);
        logger.info('exception format', exceptionFormat);
        // this.send(exception);
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
            headers: Base_assign({}, headers)
        };
        logger.info('upload params', reqOptions);
        fetch(url, Base_assign({}, reqOptions));
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
        if (supportsFetch()) {
            this.createFetch(data);
            return;
        }
        this.createXHR(data);
    };
    return BaseClient;
}());
/* harmony default export */ var Base = (Base_BaseClient);

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
            this.wrapOnunhandledrejection();
        }
        if (eventTargetMark) {
            this.wrapEventTarget();
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
                var wrapFn = wrap(fn, options);
                return original.call(this, eventName, wrapFn, options);
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




var base = new Base();
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
    base.bindOptions(combineOptions, src_logger);
    var hub = getCurrentHub();
    hub.bindClient(base);
    globalHandlers.bindOptions(combineOptions, base, src_logger);
};



/***/ })
/******/ ]);
});
//# sourceMappingURL=args.js.map