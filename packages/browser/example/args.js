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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(window,(function(){return function(n){var t={};function r(o){if(t[o])return t[o].exports;var e=t[o]={i:o,l:!1,exports:{}};return n[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=t,r.d=function(n,t,o){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)r.d(o,e,function(t){return n[t]}.bind(null,e));return o},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";r.r(t),r.d(t,"isSupportsFetch",(function(){return S})),r.d(t,"isSupportsXMR",(function(){return E})),r.d(t,"isError",(function(){return L})),r.d(t,"isErrorEvent",(function(){return X})),r.d(t,"isDOMException",(function(){return M})),r.d(t,"isEvent",(function(){return P})),r.d(t,"isString",(function(){return C})),r.d(t,"isPlainObject",(function(){return R})),r.d(t,"isPrimitive",(function(){return A})),r.d(t,"getGlobalObject",(function(){return u})),r.d(t,"globalMark",(function(){return e})),r.d(t,"fill",(function(){return c})),r.d(t,"uuid4",(function(){return f})),r.d(t,"addHandler",(function(){return l})),r.d(t,"triggerHandler",(function(){return s})),r.d(t,"requestStatus",(function(){return o})),r.d(t,"fromHttpCode",(function(){return p})),r.d(t,"getLocationHref",(function(){return d})),r.d(t,"shouldIgnoreOnError",(function(){return y})),r.d(t,"ignoreNextOnError",(function(){return v})),r.d(t,"consoleSandbox",(function(){return x})),r.d(t,"logger",(function(){return m}));var o,e="__ARGOS__",i={},u=function(){return"undefined"!=typeof window?window:i},c=function(n,t,r){var o;if(t in n){var e=n[t],i=r(e);if("function"==typeof i)try{i.prototype=i.prototype||{},Object.defineProperties(i,((o={}).__argos_original__={enumerable:!1,value:e},o))}catch(n){console.warn("multiple fill may cause error")}n[t]=i}},f=function(){var n=u(),t=n.crypto||n.msCrypto;if(void 0!==t&&t.getRandomValues){var r=new Uint16Array(8);t.getRandomValues(r),r[3]=4095&r[3]|16384,r[4]=16383&r[4]|32768;var o=function(n){for(var t=n.toString(16);t.length<4;)t="0"+t;return t};return o(r[0])+o(r[1])+o(r[2])+o(r[3])+o(r[4])+o(r[5])+o(r[6])+o(r[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=16*Math.random()|0;return("x"===n?t:3&t|8).toString(16)}))},a={},l=function(n){n&&"string"==typeof n.type&&(a[n.type]=a[n.type]||[],a[n.type].push(n.fn))},s=function(n,t){if(n&&a[n])for(var r=0,o=a[n]||[];r<o.length;r++){var e=o[r];try{e(t)}catch(n){console.error("Error while triggering handler")}}};function p(n){return n>=200&&n<300?o.Success:429===n?o.RateLimit:n>=400&&n<500?o.Invalid:n>=500?o.Failed:o.Unknown}function d(){try{return document.location.href}catch(n){return""}}!function(n){n.Unknown="unknown",n.Success="success",n.RateLimit="rate_limit",n.Invalid="invalid",n.Failed="failed"}(o||(o={}));var g=0;function y(){return g>0}function v(){g+=1,setTimeout((function(){g-=1}))}function x(n,t){var r=u();if("console"in r&&r.console[n])return t()}var b=function(){return(b=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n}).apply(this,arguments)},h=function(){for(var n=0,t=0,r=arguments.length;t<r;t++)n+=arguments[t].length;var o=Array(n),e=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,e++)o[e]=i[u];return o},j=u(),w="Argos Log",O=function(){function n(){this.options={enableLog:!1,showLog:!0,showInfo:!0,showWarn:!0,showError:!0,isXCX:!1}}return n.prototype.bindOptions=function(n){this.options=b(b({},this.options),n)},n.prototype.log=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showLog,i=r.isXCX;o&&e&&(i?console.log.apply(console,h(["["+w+"]"],n)):x("log",(function(){var t;(t=j.console).log.apply(t,h(["["+w+"]"],n))})))},n.prototype.warn=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showWarn,i=r.isXCX;o&&e&&(i?console.warn.apply(console,h(["["+w+"]"],n)):x("warn",(function(){var t;(t=j.console).warn.apply(t,h(["["+w+"]"],n))})))},n.prototype.info=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showInfo,i=r.isXCX;o&&e&&(i?console.info.apply(console,h(["["+w+"]"],n)):x("info",(function(){var t;(t=j.console).info.apply(t,h(["["+w+"]"],n))})))},n.prototype.error=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showError,i=r.isXCX;o&&e&&(i?console.error.apply(console,h(["["+w+"]"],n)):x("error",(function(){var t;(t=j.console).error.apply(t,h(["["+w+"]"],n))})))},n}();j[e]=j[e]||{};var m=j[e].logger||(j[e].logger=new O),S=function(){return"fetch"in u()},E=function(){return"XMLHttpRequest"in u()};function _(n,t){try{return n instanceof t}catch(n){return!1}}var L=function(n){switch(Object.prototype.toString.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return _(n,Error)}},X=function(n){return"[object ErrorEvent]"===Object.prototype.toString.call(n)},M=function(n){return"[object DOMException]"===Object.prototype.toString.call(n)},P=function(n){return"undefined"!=typeof Event&&_(n,Event)},C=function(n){return"[object String]"===Object.prototype.toString.call(n)},R=function(n){return"[object Object]"===Object.prototype.toString.call(n)},A=function(n){return null===n||"object"!=typeof n&&"function"!=typeof n}}])}));
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(window,(function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=1)}([function(n,t,r){window,n.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";r.r(t),r.d(t,"isSupportsFetch",(function(){return _})),r.d(t,"isSupportsXMR",(function(){return E})),r.d(t,"isError",(function(){return M})),r.d(t,"isErrorEvent",(function(){return P})),r.d(t,"isDOMException",(function(){return L})),r.d(t,"isEvent",(function(){return X})),r.d(t,"isString",(function(){return k})),r.d(t,"isPlainObject",(function(){return C})),r.d(t,"isPrimitive",(function(){return H})),r.d(t,"getGlobalObject",(function(){return u})),r.d(t,"globalMark",(function(){return o})),r.d(t,"fill",(function(){return c})),r.d(t,"uuid4",(function(){return f})),r.d(t,"addHandler",(function(){return l})),r.d(t,"triggerHandler",(function(){return p})),r.d(t,"fromHttpCode",(function(){return s})),r.d(t,"getLocationHref",(function(){return d})),r.d(t,"shouldIgnoreOnError",(function(){return b})),r.d(t,"ignoreNextOnError",(function(){return y})),r.d(t,"consoleSandbox",(function(){return v})),r.d(t,"logger",(function(){return m}));var e,o="__ARGOS__",i={},u=function(){return"undefined"!=typeof window?window:i},c=function(n,t,r){var e;if(t in n){var o=n[t],i=r(o);if("function"==typeof i)try{i.prototype=i.prototype||{},Object.defineProperties(i,((e={}).__argos_original__={enumerable:!1,value:o},e))}catch(n){console.warn("multiple fill may cause error")}n[t]=i}},f=function(){var n=u(),t=n.crypto||n.msCrypto;if(void 0!==t&&t.getRandomValues){var r=new Uint16Array(8);t.getRandomValues(r),r[3]=4095&r[3]|16384,r[4]=16383&r[4]|32768;var e=function(n){for(var t=n.toString(16);t.length<4;)t="0"+t;return t};return e(r[0])+e(r[1])+e(r[2])+e(r[3])+e(r[4])+e(r[5])+e(r[6])+e(r[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=16*Math.random()|0;return("x"===n?t:3&t|8).toString(16)}))},a={},l=function(n){n&&"string"==typeof n.type&&(a[n.type]=a[n.type]||[],a[n.type].push(n.fn))},p=function(n,t){if(n&&a[n])for(var r=0,e=a[n]||[];r<e.length;r++){var o=e[r];try{o(t)}catch(n){console.error("Error while triggering handler")}}};function s(n){return n>=200&&n<300?e.Success:429===n?e.RateLimit:n>=400&&n<500?e.Invalid:n>=500?e.Failed:e.Unknown}function d(){try{return document.location.href}catch(n){return""}}!function(n){n.Unknown="unknown",n.Success="success",n.RateLimit="rate_limit",n.Invalid="invalid",n.Failed="failed"}(e||(e={}));var g=0;function b(){return g>0}function y(){g+=1,setTimeout((function(){g-=1}))}function v(n,t){var r=u();if("console"in r&&r.console[n])return t()}var h=function(){return(h=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},x=function(){for(var n=0,t=0,r=arguments.length;t<r;t++)n+=arguments[t].length;var e=Array(n),o=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,o++)e[o]=i[u];return e},j=u(),w="Argos Log",O=function(){function n(){this.options={enableLog:!1,showLog:!0,showInfo:!0,showWarn:!0,showError:!0,isXCX:!1}}return n.prototype.bindOptions=function(n){this.options=h(h({},this.options),n)},n.prototype.log=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showLog,i=r.isXCX;e&&o&&(i?console.log.apply(console,x(["["+w+"]"],n)):v("log",(function(){var t;(t=j.console).log.apply(t,x(["["+w+"]"],n))})))},n.prototype.warn=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showWarn,i=r.isXCX;e&&o&&(i?console.warn.apply(console,x(["["+w+"]"],n)):v("warn",(function(){var t;(t=j.console).warn.apply(t,x(["["+w+"]"],n))})))},n.prototype.info=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showInfo,i=r.isXCX;e&&o&&(i?console.info.apply(console,x(["["+w+"]"],n)):v("info",(function(){var t;(t=j.console).info.apply(t,x(["["+w+"]"],n))})))},n.prototype.error=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showError,i=r.isXCX;e&&o&&(i?console.error.apply(console,x(["["+w+"]"],n)):v("error",(function(){var t;(t=j.console).error.apply(t,x(["["+w+"]"],n))})))},n}();j[o]=j[o]||{};var m=j[o].logger||(j[o].logger=new O),_=function(){return"fetch"in u()},E=function(){return"XMLHttpRequest"in u()};function S(n,t){try{return n instanceof t}catch(n){return!1}}var M=function(n){switch(Object.prototype.toString.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return S(n,Error)}},P=function(n){return"[object ErrorEvent]"===Object.prototype.toString.call(n)},L=function(n){return"[object DOMException]"===Object.prototype.toString.call(n)},X=function(n){return"undefined"!=typeof Event&&S(n,Event)},k=function(n){return"[object String]"===Object.prototype.toString.call(n)},C=function(n){return"[object Object]"===Object.prototype.toString.call(n)},H=function(n){return null===n||"object"!=typeof n&&"function"!=typeof n}}])},function(n,t,r){"use strict";r.r(t),r.d(t,"Hub",(function(){return o})),r.d(t,"captureException",(function(){return u})),r.d(t,"getCurrentHub",(function(){return i}));var e=r(0),o=function(){function n(){this._bond=new Map}return n.prototype._dispatchClient=function(n,t){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=this.getBond().get(t);o&&o[n]&&o[n].apply(o,r)},n.prototype.getBond=function(){return this._bond},n.prototype.bindClient=function(n,t){void 0===t&&(t="client"),this.getBond().set(t,n)},n.prototype.captureException=function(n,t,r){var o=Object(e.uuid4)();this._dispatchClient("captureException",n,t,{eventId:o})},n}();var i=function(){var n;return function(n){var t=n[e.globalMark];if(t&&t.hub)return t.hub;return n[e.globalMark]=n[e.globalMark]||{},n[e.globalMark].hub=new o,n[e.globalMark].hub}(((n=Object(e.getGlobalObject)())[e.globalMark]=n[e.globalMark]||{hub:void 0},n))};function u(n,t){return void 0===t&&(t="client"),function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var e=i();if(e&&e[n])return e[n].apply(e,t);throw new Error("No hub defined or "+n+" was not found on the hub, please open a bug report.")}("captureException",t,n,{originalException:n})}}])}));
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "init", function() { return /* binding */ init; });
__webpack_require__.d(__webpack_exports__, "captureException", function() { return /* reexport */ dist["captureException"]; });
__webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return /* reexport */ dist["getCurrentHub"]; });
__webpack_require__.d(__webpack_exports__, "VueIntegration", function() { return /* reexport */ integrations_VueIntegration; });

// EXTERNAL MODULE: ./node_modules/@thynpm/argos-hub/dist/index.js
var dist = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@thynpm/argos-utils/dist/index.js
var argos_utils_dist = __webpack_require__(0);

// CONCATENATED MODULE: ./src/Request.ts
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

var ignoreMark = '__ignore__';
var Request_Request = /** @class */ (function () {
    function Request(options) {
        if (options === void 0) { options = {}; }
        this.tasks = [];
        this.options = {
            maxRequest: 20,
        };
        this.options = __assign(__assign({}, this.options), options);
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
            argos_utils_dist["logger"].warn('too many request');
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
    var isXCX = options.isXCX;
    if (isXCX) {
        return createWXRequest(data, options);
    }
    if (!Object(argos_utils_dist["isSupportsFetch"])()) {
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
            headers: __assign({}, headers)
        };
        return fetch(url, __assign({}, reqOptions)).then(function (response) {
            var status = Object(argos_utils_dist["fromHttpCode"])(response.status);
            if (status === argos_utils_dist["requestStatus"].Success) {
                resolve({ status: status });
                return;
            }
            if (status === argos_utils_dist["requestStatus"].RateLimit) {
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
            var status = Object(argos_utils_dist["fromHttpCode"])(request.status);
            if (status === argos_utils_dist["requestStatus"].Success) {
                resolve({ status: status });
                return;
            }
            argos_utils_dist["logger"].error(request);
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
function createWXRequest(data, options) {
    var url = options.url;
    if (!url) {
        console.error('There is no upload data url!');
        return;
    }
    return new Promise(function (resolve, reject) {
        // @ts-ignore
        wx.request({
            url: url,
            method: 'POST',
            data: data
        });
    });
}

// CONCATENATED MODULE: ./src/tracekit.ts
/**
 * This was originally forked from https://github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 */
var tracekit_assign = (undefined && undefined.__assign) || function () {
    tracekit_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return tracekit_assign.apply(this, arguments);
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
        return tracekit_assign(tracekit_assign({}, stacktrace), { stack: stacktrace.stack.slice(popSize) });
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
                    type: Object(argos_utils_dist["isEvent"])(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
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
            Object(argos_utils_dist["ignoreNextOnError"])();
            Object(dist["captureException"])(ex);
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
    if (Object(argos_utils_dist["isErrorEvent"])(exception) && exception.error) {
        var errorEvent = exception;
        exception = errorEvent.error;
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (Object(argos_utils_dist["isDOMException"])(exception)) {
        var domException = exception;
        var name_1 = domException.name || 'DOMException';
        var message = domException.message ? name_1 + ": " + domException.message : name_1;
        event = eventFromString(message);
        // addExceptionTypeValue(event, message);
        return event;
    }
    if (Object(argos_utils_dist["isError"])(exception)) {
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (Object(argos_utils_dist["isPlainObject"])(exception) || Object(argos_utils_dist["isEvent"])(exception)) {
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
        argos_utils_dist["logger"].info('exception data', allData);
        this.request.add(new Promise(function () {
            Request_sendData(allData, _this.options);
        }));
    };
    // 获取环境基本信息
    Base.prototype.getUserAgent = function () {
        var global = Object(argos_utils_dist["getGlobalObject"])();
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



var GlobalHandlers_global = Object(argos_utils_dist["getGlobalObject"])();
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
            argos_utils_dist["logger"].info('onerror event: ', { msg: msg, url: url, line: line, column: column, error: error });
            if (Object(argos_utils_dist["shouldIgnoreOnError"])()) {
                return;
            }
            var ex = Object(argos_utils_dist["isPrimitive"])(error)
                ? self._eventFromIncompleteOnError(msg, url, line, column)
                : self._enhanceEventWithInitialFrame(exceptionCheck(error), url, line, column);
            Object(dist["captureException"])(ex);
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
            argos_utils_dist["logger"].info('unhandledrejection event: ', e);
            var error = e;
            try {
                error = e && 'reason' in e ? e.reason : e;
            }
            catch (ex) {
                // no-empty
            }
            if (Object(argos_utils_dist["shouldIgnoreOnError"])()) {
                return;
            }
            var ex = Object(argos_utils_dist["isPrimitive"])(error)
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
        Object(argos_utils_dist["fill"])(proto, 'addEventListener', function (original) {
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
        if (!Object(argos_utils_dist["isSupportsXMR"])()) {
            return;
        }
    };
    // 暂时用不到
    GlobalHandlers.prototype._wrapFetch = function () {
        Object(argos_utils_dist["fill"])(GlobalHandlers_global, 'fetch', function (originalFetch) {
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
                    method: Object(argos_utils_dist["isString"])(method) ? method.toUpperCase() : method,
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
        var message = Object(argos_utils_dist["isErrorEvent"])(msg) ? msg.message : msg;
        var name;
        if (Object(argos_utils_dist["isString"])(message)) {
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
        var filename = Object(argos_utils_dist["isString"])(url) && url.length > 0 ? url : Object(argos_utils_dist["getLocationHref"])();
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
        var globalObj = Object(argos_utils_dist["getGlobalObject"])();
        this._vue = options.Vue || globalObj.Vue;
        this.setUp();
    }
    VueIntegration.prototype.setUp = function () {
        var _this = this;
        if (this._hasSet) {
            argos_utils_dist["logger"].info('VueIntegration installed');
            return;
        }
        if (!this._vue || !this._vue.config) {
            argos_utils_dist["logger"].error('VueIntegration is missing a Vue instance');
            return;
        }
        var oldOnError = this._vue.config.errorHandler;
        this._vue.config.errorHandler = function (error, vm, info) {
            Object(dist["captureException"])(error);
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
    argos_utils_dist["logger"].bindOptions(combineOptions);
    if (!combineOptions.url) {
        argos_utils_dist["logger"].error('There is no upload data url!');
        return;
    }
    var base = new src_Base(combineOptions);
    var hub = Object(dist["getCurrentHub"])();
    hub.bindClient(base);
    new src_GlobalHandlers(combineOptions);
};



/***/ })
/******/ ]);
});
//# sourceMappingURL=args.js.map