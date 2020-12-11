(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ArgosXcx"] = factory();
	else
		root["ArgosXcx"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(window,(function(){return function(n){var t={};function r(o){if(t[o])return t[o].exports;var e=t[o]={i:o,l:!1,exports:{}};return n[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=t,r.d=function(n,t,o){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)r.d(o,e,function(t){return n[t]}.bind(null,e));return o},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";r.r(t),r.d(t,"isSupportsFetch",(function(){return S})),r.d(t,"isSupportsXHR",(function(){return E})),r.d(t,"isError",(function(){return L})),r.d(t,"isErrorEvent",(function(){return X})),r.d(t,"isDOMException",(function(){return M})),r.d(t,"isEvent",(function(){return P})),r.d(t,"isString",(function(){return C})),r.d(t,"isPlainObject",(function(){return R})),r.d(t,"isPrimitive",(function(){return A})),r.d(t,"isUndefined",(function(){return H})),r.d(t,"isSupportsBeacon",(function(){return U})),r.d(t,"getGlobalObject",(function(){return u})),r.d(t,"globalMark",(function(){return e})),r.d(t,"fill",(function(){return c})),r.d(t,"uuid4",(function(){return f})),r.d(t,"addHandler",(function(){return l})),r.d(t,"triggerHandler",(function(){return s})),r.d(t,"requestStatus",(function(){return o})),r.d(t,"fromHttpCode",(function(){return p})),r.d(t,"getLocationHref",(function(){return d})),r.d(t,"shouldIgnoreOnError",(function(){return y})),r.d(t,"ignoreNextOnError",(function(){return v})),r.d(t,"consoleSandbox",(function(){return x})),r.d(t,"getTimeStamp",(function(){return I})),r.d(t,"logger",(function(){return m}));var o,e="__ARGOS__",i={},u=function(){return"undefined"!=typeof window?window:i},c=function(n,t,r){var o;if(t in n){var e=n[t],i=r(e);if("function"==typeof i)try{i.prototype=i.prototype||{},Object.defineProperties(i,((o={}).__argos_original__={enumerable:!1,value:e},o))}catch(n){m.warn("multiple fill may cause error")}n[t]=i}},f=function(){var n=u(),t=n.crypto||n.msCrypto;if(void 0!==t&&t.getRandomValues){var r=new Uint16Array(8);t.getRandomValues(r),r[3]=4095&r[3]|16384,r[4]=16383&r[4]|32768;var o=function(n){for(var t=n.toString(16);t.length<4;)t="0"+t;return t};return o(r[0])+o(r[1])+o(r[2])+o(r[3])+o(r[4])+o(r[5])+o(r[6])+o(r[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=16*Math.random()|0;return("x"===n?t:3&t|8).toString(16)}))},a={},l=function(n){n&&"string"==typeof n.type&&(a[n.type]=a[n.type]||[],a[n.type].push(n.fn))},s=function(n,t){if(n&&a[n])for(var r=0,o=a[n]||[];r<o.length;r++){var e=o[r];try{e(t)}catch(n){console.error("Error while triggering handler")}}};function p(n){return n>=200&&n<300?o.Success:429===n?o.RateLimit:n>=400&&n<500?o.Invalid:n>=500?o.Failed:o.Unknown}function d(){try{return document.location.href}catch(n){return""}}!function(n){n.Unknown="unknown",n.Success="success",n.RateLimit="rate_limit",n.Invalid="invalid",n.Failed="failed"}(o||(o={}));var g=0;function y(){return g>0}function v(){g+=1,setTimeout((function(){g-=1}))}function x(n,t){var r=u();if("console"in r&&r.console[n])return t()}var b=function(){return(b=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n}).apply(this,arguments)},h=function(){for(var n=0,t=0,r=arguments.length;t<r;t++)n+=arguments[t].length;var o=Array(n),e=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,e++)o[e]=i[u];return o},j=u(),w="Argos Log",O=function(){function n(){this.options={enableLog:!1,showLog:!0,showInfo:!0,showWarn:!0,showError:!0,isXCX:!1}}return n.prototype.bindOptions=function(n){this.options=b(b({},this.options),n)},n.prototype.log=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showLog,i=r.isXCX;o&&e&&(i?console.log.apply(console,h(["["+w+"]"],n)):x("log",(function(){var t;(t=j.console).log.apply(t,h(["["+w+"]"],n))})))},n.prototype.warn=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showWarn,i=r.isXCX;o&&e&&(i?console.warn.apply(console,h(["["+w+"]"],n)):x("warn",(function(){var t;(t=j.console).warn.apply(t,h(["["+w+"]"],n))})))},n.prototype.info=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showInfo,i=r.isXCX;o&&e&&(i?console.info.apply(console,h(["["+w+"]"],n)):x("info",(function(){var t;(t=j.console).info.apply(t,h(["["+w+"]"],n))})))},n.prototype.error=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,o=r.enableLog,e=r.showError,i=r.isXCX;o&&e&&(i?console.error.apply(console,h(["["+w+"]"],n)):x("error",(function(){var t;(t=j.console).error.apply(t,h(["["+w+"]"],n))})))},n}();j[e]=j[e]||{};var m=j[e].logger||(j[e].logger=new O),S=function(){return"fetch"in u()},E=function(){return"XMLHttpRequest"in u()};function _(n,t){try{return n instanceof t}catch(n){return!1}}var L=function(n){switch(Object.prototype.toString.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return _(n,Error)}},X=function(n){return"[object ErrorEvent]"===Object.prototype.toString.call(n)},M=function(n){return"[object DOMException]"===Object.prototype.toString.call(n)},P=function(n){return"undefined"!=typeof Event&&_(n,Event)},C=function(n){return"[object String]"===Object.prototype.toString.call(n)},R=function(n){return"[object Object]"===Object.prototype.toString.call(n)},A=function(n){return null===n||"object"!=typeof n&&"function"!=typeof n},H=function(n){return void 0===n},U=function(){var n=u();return!(!n.navigator||!n.navigator.sendBeacon)},I=function(){return Date.now()}}])}));
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(window,(function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=1)}([function(n,t,r){window,n.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";r.r(t),r.d(t,"isSupportsFetch",(function(){return _})),r.d(t,"isSupportsXMR",(function(){return E})),r.d(t,"isError",(function(){return M})),r.d(t,"isErrorEvent",(function(){return P})),r.d(t,"isDOMException",(function(){return L})),r.d(t,"isEvent",(function(){return X})),r.d(t,"isString",(function(){return k})),r.d(t,"isPlainObject",(function(){return C})),r.d(t,"isPrimitive",(function(){return H})),r.d(t,"getGlobalObject",(function(){return u})),r.d(t,"globalMark",(function(){return o})),r.d(t,"fill",(function(){return c})),r.d(t,"uuid4",(function(){return f})),r.d(t,"addHandler",(function(){return l})),r.d(t,"triggerHandler",(function(){return p})),r.d(t,"fromHttpCode",(function(){return s})),r.d(t,"getLocationHref",(function(){return d})),r.d(t,"shouldIgnoreOnError",(function(){return b})),r.d(t,"ignoreNextOnError",(function(){return y})),r.d(t,"consoleSandbox",(function(){return v})),r.d(t,"logger",(function(){return m}));var e,o="__ARGOS__",i={},u=function(){return"undefined"!=typeof window?window:i},c=function(n,t,r){var e;if(t in n){var o=n[t],i=r(o);if("function"==typeof i)try{i.prototype=i.prototype||{},Object.defineProperties(i,((e={}).__argos_original__={enumerable:!1,value:o},e))}catch(n){console.warn("multiple fill may cause error")}n[t]=i}},f=function(){var n=u(),t=n.crypto||n.msCrypto;if(void 0!==t&&t.getRandomValues){var r=new Uint16Array(8);t.getRandomValues(r),r[3]=4095&r[3]|16384,r[4]=16383&r[4]|32768;var e=function(n){for(var t=n.toString(16);t.length<4;)t="0"+t;return t};return e(r[0])+e(r[1])+e(r[2])+e(r[3])+e(r[4])+e(r[5])+e(r[6])+e(r[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=16*Math.random()|0;return("x"===n?t:3&t|8).toString(16)}))},a={},l=function(n){n&&"string"==typeof n.type&&(a[n.type]=a[n.type]||[],a[n.type].push(n.fn))},p=function(n,t){if(n&&a[n])for(var r=0,e=a[n]||[];r<e.length;r++){var o=e[r];try{o(t)}catch(n){console.error("Error while triggering handler")}}};function s(n){return n>=200&&n<300?e.Success:429===n?e.RateLimit:n>=400&&n<500?e.Invalid:n>=500?e.Failed:e.Unknown}function d(){try{return document.location.href}catch(n){return""}}!function(n){n.Unknown="unknown",n.Success="success",n.RateLimit="rate_limit",n.Invalid="invalid",n.Failed="failed"}(e||(e={}));var g=0;function b(){return g>0}function y(){g+=1,setTimeout((function(){g-=1}))}function v(n,t){var r=u();if("console"in r&&r.console[n])return t()}var h=function(){return(h=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},x=function(){for(var n=0,t=0,r=arguments.length;t<r;t++)n+=arguments[t].length;var e=Array(n),o=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,o++)e[o]=i[u];return e},j=u(),w="Argos Log",O=function(){function n(){this.options={enableLog:!1,showLog:!0,showInfo:!0,showWarn:!0,showError:!0,isXCX:!1}}return n.prototype.bindOptions=function(n){this.options=h(h({},this.options),n)},n.prototype.log=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showLog,i=r.isXCX;e&&o&&(i?console.log.apply(console,x(["["+w+"]"],n)):v("log",(function(){var t;(t=j.console).log.apply(t,x(["["+w+"]"],n))})))},n.prototype.warn=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showWarn,i=r.isXCX;e&&o&&(i?console.warn.apply(console,x(["["+w+"]"],n)):v("warn",(function(){var t;(t=j.console).warn.apply(t,x(["["+w+"]"],n))})))},n.prototype.info=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showInfo,i=r.isXCX;e&&o&&(i?console.info.apply(console,x(["["+w+"]"],n)):v("info",(function(){var t;(t=j.console).info.apply(t,x(["["+w+"]"],n))})))},n.prototype.error=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.options,e=r.enableLog,o=r.showError,i=r.isXCX;e&&o&&(i?console.error.apply(console,x(["["+w+"]"],n)):v("error",(function(){var t;(t=j.console).error.apply(t,x(["["+w+"]"],n))})))},n}();j[o]=j[o]||{};var m=j[o].logger||(j[o].logger=new O),_=function(){return"fetch"in u()},E=function(){return"XMLHttpRequest"in u()};function S(n,t){try{return n instanceof t}catch(n){return!1}}var M=function(n){switch(Object.prototype.toString.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return S(n,Error)}},P=function(n){return"[object ErrorEvent]"===Object.prototype.toString.call(n)},L=function(n){return"[object DOMException]"===Object.prototype.toString.call(n)},X=function(n){return"undefined"!=typeof Event&&S(n,Event)},k=function(n){return"[object String]"===Object.prototype.toString.call(n)},C=function(n){return"[object Object]"===Object.prototype.toString.call(n)},H=function(n){return null===n||"object"!=typeof n&&"function"!=typeof n}}])},function(n,t,r){"use strict";r.r(t),r.d(t,"Hub",(function(){return o})),r.d(t,"captureException",(function(){return u})),r.d(t,"getCurrentHub",(function(){return i}));var e=r(0),o=function(){function n(){this._bond=new Map}return n.prototype._dispatchClient=function(n,t){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=this.getBond().get(t);o&&o[n]&&o[n].apply(o,r)},n.prototype.getBond=function(){return this._bond},n.prototype.bindClient=function(n,t){void 0===t&&(t="client"),this.getBond().set(t,n)},n.prototype.captureException=function(n,t,r){var o=Object(e.uuid4)();this._dispatchClient("captureException",n,t,{eventId:o})},n}();var i=function(){var n;return function(n){var t=n[e.globalMark];if(t&&t.hub)return t.hub;return n[e.globalMark]=n[e.globalMark]||{},n[e.globalMark].hub=new o,n[e.globalMark].hub}(((n=Object(e.getGlobalObject)())[e.globalMark]=n[e.globalMark]||{hub:void 0},n))};function u(n,t){return void 0===t&&(t="client"),function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var e=i();if(e&&e[n])return e[n].apply(e,t);throw new Error("No hub defined or "+n+" was not found on the hub, please open a bug report.")}("captureException",t,n,{originalException:n})}}])}));
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@thynpm/argos-xcx\",\"version\":\"1.0.5\",\"description\":\"\",\"main\":\"dist/index.js\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\",\"build\":\"run-s build:dist build:example\",\"build:dist\":\"webpack --config webpack.config.js\",\"build:example\":\"webpack --outPath=example --filename=xcx --config webpack.config.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/XXHolic/argos.git\"},\"files\":[\"dist\"],\"author\":\"\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/XXHolic/argos/issues\"},\"homepage\":\"https://github.com/XXHolic/argos#readme\",\"devDependencies\":{\"@tsconfig/recommended\":\"^1.0.1\",\"clean-webpack-plugin\":\"^3.0.0\",\"npm-run-all\":\"^4.1.5\",\"ts-loader\":\"^8.0.4\",\"typescript\":\"^4.0.3\",\"webpack\":\"^4.44.2\",\"webpack-cli\":\"^3.3.12\"},\"publishConfig\":{\"registry\":\"https://registry.npmjs.org/\"},\"dependencies\":{\"@thynpm/argos-hub\":\"^1.0.6\",\"@thynpm/argos-utils\":\"^1.0.8\"}}");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "init", function() { return /* binding */ init; });
__webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return /* reexport */ dist["getCurrentHub"]; });
__webpack_require__.d(__webpack_exports__, "captureException", function() { return /* reexport */ dist["captureException"]; });

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
            argos_utils_dist["logger"].warn("too many request");
            return;
        }
        this.tasks.push(task);
        task
            .then(function () { return _this.remove(task); })
            .then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add this catch here otherwise we have an unhandledPromiseRejection
                // because it's a new Promise chain.
            });
        });
        return task;
    };
    return Request;
}());

var sendData = function (data, options) {
    return createWXRequest(data, options);
};
function createWXRequest(data, options) {
    var url = options.url;
    if (!data.timeStamp) {
        data.timeStamp = Object(argos_utils_dist["getTimeStamp"])();
    }
    return new Promise(function (resolve, reject) {
        // @ts-ignore
        wx.request({
            url: url,
            method: "POST",
            data: data,
            success: function (res) {
                resolve(res);
            },
            fail: function (e) {
                reject(e);
            },
        });
    });
}

// CONCATENATED MODULE: ./src/version.ts
var packageMsg = __webpack_require__(2);
var version_name = packageMsg.name, dependencies = packageMsg.dependencies;
// 先编译好，再发布，自动会改变版本号，所以此处版本要手动同步到下一次发布的版本
var SDK_MSG = { name: version_name, dependencies: dependencies, version: "1.0.6" };

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
        this.options = {};
        this.environment = {};
        this.networkType = {};
        this.wxSetting = {};
        this.options = Base_assign(Base_assign({}, this.options), options);
        this.request = new Request_Request(options);
        // 异步，一开始先拿到存下来
        this.getSystemInfo();
        this.getNetworkType();
    }
    Base.prototype.captureException = function (exception, otherMsg) {
        var _this = this;
        var eventId = otherMsg && otherMsg.eventId;
        var exceptionFormat = { exception: exception, eventId: null };
        exceptionFormat.eventId = eventId;
        var allData = this.combineData(exceptionFormat);
        argos_utils_dist["logger"].info("exception data", allData);
        this.request.add(new Promise(function () {
            sendData(allData, _this.options);
        }));
    };
    Base.prototype.getSetting = function () {
        var that = this;
        try {
            // @ts-ignore
            wx.getSetting({
                success: function (res) {
                    console.log(res.authSetting);
                    that.wxSetting = res.authSetting;
                    // res.authSetting = {
                    //   "scope.userInfo": true,
                    //   "scope.userLocation": true
                    // }
                },
            });
        }
        catch (error) {
            argos_utils_dist["logger"].error("wx.getSetting error", error);
        }
    };
    // 获取环境基本信息
    Base.prototype.getSystemInfo = function () {
        var that = this;
        try {
            // @ts-ignore
            wx.getSystemInfo({
                success: function (res) {
                    that.environment = res;
                },
            });
        }
        catch (error) {
            argos_utils_dist["logger"].error("wx.getSystemInfo error", error);
        }
    };
    // 获取网络信息
    Base.prototype.getNetworkType = function () {
        var that = this;
        try {
            // @ts-ignore
            wx.getNetworkType({
                success: function (res) {
                    that.networkType = res;
                },
            });
        }
        catch (error) {
            argos_utils_dist["logger"].error("wx.getNetworkType error", error);
        }
    };
    // 合并数据
    Base.prototype.combineData = function (data) {
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


var GlobalHandlers_GlobalHandlers = /** @class */ (function () {
    function GlobalHandlers(options) {
        this.options = {
            onerror: true,
            onRequest: true,
        };
        this._isSet = false;
        this.options = GlobalHandlers_assign(GlobalHandlers_assign({}, this.options), options);
        this.setUp();
    }
    GlobalHandlers.prototype.setUp = function () {
        if (this._isSet) {
            return;
        }
        var _a = this.options, onerror = _a.onerror, onRequest = _a.onRequest;
        if (onerror) {
            this._wrapOnerror();
        }
        if (onRequest) {
            this._wrapRequest();
        }
        this._isSet = true;
    };
    GlobalHandlers.prototype._wrapOnerror = function () {
        /**
         * 必须要这种形式，如果直接扩展反而没有作用
         */
        // @ts-ignore
        var originApp = App;
        // @ts-ignore
        App = function (params) {
            try {
                Object(argos_utils_dist["fill"])(params, 'onError', function (original) {
                    return function (e) {
                        Object(dist["captureException"])(e);
                        return original.call(this, e);
                    };
                });
            }
            catch (error) {
                argos_utils_dist["logger"].error('App onError', error);
            }
            originApp(params);
        };
    };
    // request 拦截
    GlobalHandlers.prototype._wrapRequest = function () {
        var url = this.options.url;
        // @ts-ignore
        // 另存一个原本的版本，防止请求死循环
        var copyWX = GlobalHandlers_assign({}, wx);
        // @ts-ignore
        var originRequest = wx.request;
        // @ts-ignore
        Object["defineProperty"](wx, "request", {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function (args) {
                try {
                    var reg = new RegExp(url);
                    // 不是上报的请求
                    if (args && !reg["test"](args["url"])) {
                        return originRequest.apply(this, arguments);
                    }
                    copyWX.request({
                        url: url,
                        method: 'POST',
                        data: args.data || {}
                    });
                    return;
                }
                catch (e) {
                    argos_utils_dist["logger"].error('request error', e);
                }
            },
        });
    };
    return GlobalHandlers;
}());
// exports.GlobalHandlers = GlobalHandlers
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




function init(options) {
    if (options === void 0) { options = {}; }
    var defaultOptions = {
        url: "",
        isXCX: true,
    };
    var combineOptions = src_assign(src_assign({}, defaultOptions), options);
    argos_utils_dist["logger"].bindOptions(combineOptions);
    if (!combineOptions.url) {
        argos_utils_dist["logger"].error("There is no upload data url!");
        return;
    }
    var base = new src_Base(combineOptions);
    var hub = Object(dist["getCurrentHub"])();
    hub.bindClient(base);
    new src_GlobalHandlers(combineOptions);
}



/***/ })
/******/ ]);
});
//# sourceMappingURL=xcx.js.map