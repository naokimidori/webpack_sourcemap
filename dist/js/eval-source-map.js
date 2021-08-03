/******/ (function(modules) { // webpackBootstrap
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\nvar heading = Object(_heading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndocument.body.append(heading);\nconsole.log('mian.js is running');\nconsole.log1111('zz');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbImhlYWRpbmciLCJjcmVhdGVIZWFkaW5nIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImxvZzExMTEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsMkRBQWEsRUFBN0I7QUFFQUMsUUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWQsQ0FBcUJKLE9BQXJCO0FBRUFLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBRUFELE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixJQUFoQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUhlYWRpbmcgZnJvbSAnLi9oZWFkaW5nLmpzJ1xyXG5cclxuY29uc3QgaGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcoKVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGluZylcclxuXHJcbmNvbnNvbGUubG9nKCdtaWFuLmpzIGlzIHJ1bm5pbmcnKVxyXG5cclxuY29uc29sZS5sb2cxMTExKCd6eicpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var ele = document.createElement('h2');\n  ele.textContent = 'Hello Webpack';\n  ele.classList.add('heading');\n  ele.addEventListener('click', function () {\n    alert('hello world');\n  });\n  return ele;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGluZy5qcz9hZGMxIl0sIm5hbWVzIjpbImVsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFlLDJFQUFNO0FBQ25CLE1BQU1BLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVo7QUFFQUYsS0FBRyxDQUFDRyxXQUFKLEdBQWtCLGVBQWxCO0FBQ0FILEtBQUcsQ0FBQ0ksU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCO0FBQ0FMLEtBQUcsQ0FBQ00sZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNsQ0MsU0FBSyxDQUFDLGFBQUQsQ0FBTDtBQUNELEdBRkQ7QUFJQSxTQUFPUCxHQUFQO0FBQ0QsQ0FWRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcblxyXG4gIGVsZS50ZXh0Q29udGVudCA9ICdIZWxsbyBXZWJwYWNrJ1xyXG4gIGVsZS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJylcclxuICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBhbGVydCgnaGVsbG8gd29ybGQnKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBlbGVcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);