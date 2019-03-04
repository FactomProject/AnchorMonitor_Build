module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./assets/factom_horizontal_white.js":
/*!*******************************************!*\
  !*** ./assets/factom_horizontal_white.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/assets/factom_horizontal_white.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 183.75 45.35"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, '.prefix__cls-1{fill:#fff}')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "prefix__Layer_2",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "prefix__Capa_1",
    "data-name": "Capa 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "prefix__Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape",
    className: "prefix__cls-1",
    d: "M18 39.69a14.39 14.39 0 0 0-1.19 1.89A14.39 14.39 0 0 1 18 39.69",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-2",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M21 .1c.6 0 1.29-.1 1.89-.1 2 0 3 .79 2.59 2.28C25 4.17 22.38 6.65 19 8.93c-.7.3-1.29-.6-1.19-.89a.1.1 0 0 1 .1-.1c3-2 5.27-4.17 5.67-5.85C24 .6 22.68-.1 20.49.1H21",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-3",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M32.62 2.28c1.19.5 1.59 1.49 1.29 3C32.72 9.53 24.37 16.17 15 20.14c-1.79.69-3.38 1.29-5 1.79-.8.1-1-1.09-.6-1.59.1-.2.2-.2.3-.3a46 46 0 0 0 4.67-1.69c8.75-3.67 16.71-9.92 17.8-14a2.16 2.16 0 0 0-1.49-2.88 10.79 10.79 0 0 0 1.89.79",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-4",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M42.67 11.91l.3.5a2.08 2.08 0 0 1 .3 1.19v.1a3.06 3.06 0 0 1-.9-1.79 2.27 2.27 0 0 0-.4-1.39l.7 1.39",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-5",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M44.66 17a3.74 3.74 0 0 1-.1 1.79c-1.09 4.27-8.35 10.42-17.11 15-1 .4-1.59-.3-1.29-1 .1-.3.3-.4.5-.6 8.85-4.66 16.21-10.91 17.41-15.28a3.33 3.33 0 0 0 0-2c.2.69.5 1.49.6 2.08",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-6",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M45.35 21v.69a4.44 4.44 0 0 1-.1 1.09c-.7 2.58-3.78 6-8.26 9.23-.7.4-1-.2-.9-.69a1 1 0 0 1 .5-.69c4.58-3.37 7.76-6.85 8.45-9.53a3.4 3.4 0 0 0 .1-1.39l.2 1.29",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-7",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M13.33 38.3a1.63 1.63 0 0 0-1.33-.79c-3.68.6-6.27.2-7.36-1.09l-.1-.1a5 5 0 0 0 .7.79 5.68 5.68 0 0 0 .7.79c1.09 1.19 3.68 1.49 7.16 1 .53-.01.33-.4.23-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-8",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M24 38.7c.1.1.1.5-.5.79-6.66 2.58-11.84 3.18-13.92 1.69-.5-.4-1.19-.89-1.59-1.29 2 1.69 7.56 1.19 14.62-1.59a1.15 1.15 0 0 1 1.39.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-9",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M45.35 24.81c-.1.5-.1 1.29-.2 1.79a.36.36 0 0 1-.1.3C44 31.06 35.81 37.51 26.76 41.28c-5.87 2.48-10.54 3.18-12.83 2.28-.6-.3-1.29-.6-1.89-.89 7.86 3.27 32.23-10 33.32-18.16v.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-10",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M43.66 31.35c-3.38 6.95-18.89 14.59-25.06 13.6a15.93 15.93 0 0 1-2.09-.5c2.19.6 6.37-.1 11.34-2.18 8.06-3.47 15.42-9.23 16.61-13-.3.6-.5 1.49-.8 2.08",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-11",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M38.69 38.3a1.17 1.17 0 0 1-.5.6 38.34 38.34 0 0 1-8 4.76 19 19 0 0 1-6.37 1.69h-2.34a18.76 18.76 0 0 0 8.06-2A36.33 36.33 0 0 0 38.59 38c.1 0 .1-.1.2-.1v.1a.36.36 0 0 1-.1.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-12",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M1.69 20.54a1.84 1.84 0 0 1-.8-.69 2.39 2.39 0 0 1-.4-1.49c0-.2.1-.4.1-.6V18l-.2.79-.19 1.15v.79c0 .2.1.3.1.5v.1a.1.1 0 0 0 .1.1c0 .1.1.1.1.2a2.35 2.35 0 0 0 .9.79c.2 0 .3-.3.4-.6-.01-.09.09-1.08-.11-1.28z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-13",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M36.7 4.86l-.9-.69-.8-.5a2.32 2.32 0 0 1 1.1 2.18C35.71 13.3 6.86 31.06.4 24.11a2.1 2.1 0 0 1-.4-1.39c0 .6.1 1.29.1 1.89v.3a.6.6 0 0 0 .1.4v.2c0 .1.1.1.1.2 0-.1-.1-.1-.1-.2.1.2.1.3.2.4 1.69 2.28 7.86 1.79 16-1.69C26.66 19.84 36.1 12.5 37.3 7.74a2.32 2.32 0 0 0-.6-2.88z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-14",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M40.18 8.24c-.4-.5-1-1.09-1.39-1.59a2.69 2.69 0 0 1 .6 2.78c-1.29 5-11 12.6-21.78 17.17C9.25 30.16 2.78 30.66 1 28.38a3.52 3.52 0 0 1-.4-.89c.1.6.4 1.39.5 2a1.61 1.61 0 0 0 .3.6c1.79 2.38 8.45 1.79 17-1.79 10.94-4.56 20.89-12.4 22.18-17.46a2.61 2.61 0 0 0-.4-2.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-15",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M16.81.79c-.3.1-.5.1-.8.2s-.4.1-.7.2a5.71 5.71 0 0 1-.7.4 4.86 4.86 0 0 1-.7.3 1.68 1.68 0 0 0-.6.3 3.27 3.27 0 0 0-.6.3.55.55 0 0 0-.5.2c-.2.1-.3.2-.5.3s-.3.2-.5.3-.3.2-.5.3-.3.2-.5.3-.3.2-.5.3-.3.2-.5.4-.3.2-.5.4a3.15 3.15 0 0 0-.6.5 3.15 3.15 0 0 1-.6.5L6.27 7.24c-.3.4-.5.79-.7 1.09a.6.6 0 0 0-.1.4v.2a1.07 1.07 0 0 0 .2.79c.7 1 3.38.69 6.76-.69a22.38 22.38 0 0 0 3.08-1.59.45.45 0 0 0 0-.6c-.1-.1-.4-.5-.7-.4a19.56 19.56 0 0 1-2.49 1.29C9.65 8.93 7.56 9 7 8.33a.75.75 0 0 1-.1-.79 2.49 2.49 0 0 1 .7-1.19 13.45 13.45 0 0 1 1.65-1.69 25.81 25.81 0 0 1 5.17-2.88l.9-.3c2.69-.89 4.48-.6 4.08.79a4.15 4.15 0 0 1-.9 1.49 2.38 2.38 0 0 0 1.69.2 5.09 5.09 0 0 0 1.09-1.79C21.48.5 19.69.1 16.81.79z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-16",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M10.44 11.71c-3.28 1.09-5.67 1.09-6.37.1a1.79 1.79 0 0 1-.2-1.29 3.66 3.66 0 0 1 .5-1.09c.2-.3.3-.5.5-.79l-.3.4a2.16 2.16 0 0 0-.5.79 3.48 3.48 0 0 0-.5.79l-.4.79c-.1.2-.1.4-.2.6s-.1.2-.1.4V13c0 .2.1.3.2.5.8.89 2.29.89 3.48.79 4.18-.5 4.18-1.19 4.28-1.69.01-.1.11-.99-.39-.89z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-17",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M28.45.79a6.35 6.35 0 0 0-.9-.2 2.81 2.81 0 0 0-.8-.1 1.78 1.78 0 0 1 1.19 2.38c-.9 3.37-7.46 8.53-14.72 11.61C7.56 16.87 3.18 17.26 2 15.68A1.9 1.9 0 0 1 1.79 14a6.83 6.83 0 0 0 .3-.79 16.52 16.52 0 0 0-.8 2c0 .1-.1.2-.1.4s-.1.3-.1.5a1.64 1.64 0 0 0 .3 1.39c1.29 1.79 6.07 1.39 12.33-1.29 8-3.37 15.12-9 16.11-12.7A2.11 2.11 0 0 0 28.45.79z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-18",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M3.18 34.23a3.55 3.55 0 0 1-.4-.69v-.1a9.21 9.21 0 0 1-.5-1c1.79 2.48 8.55 1.89 17.21-1.79a62.77 62.77 0 0 0 17-10.52.79.79 0 0 1 1.19.5 1.11 1.11 0 0 1-.2 1.19 65.32 65.32 0 0 1-17 10.52c-8.16 3.47-14.62 4.17-16.81 2.28 0 .1-.3-.2-.5-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "prefix__Group-2",
    "data-name": "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-19",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M94 23.16a11.07 11.07 0 0 1 11.47-11.4 9.78 9.78 0 0 1 8.11 4 1 1 0 0 1-.4 1.5l-1.48.8a.94.94 0 0 1-1.19-.3 6.4 6.4 0 0 0-5-2.5c-4.35 0-7.52 3.4-7.52 8s3.26 8 7.52 8a6.25 6.25 0 0 0 5-2.5.94.94 0 0 1 1.19-.3l1.48.8a1 1 0 0 1 .3 1.5 9.78 9.78 0 0 1-8.11 4A11.16 11.16 0 0 1 94 23.16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-20",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M134.91 23.16c0-5.3 3-9.5 7.52-10.9a6.25 6.25 0 0 1 .69-.2 15.11 15.11 0 0 1 3-.4c6.53 0 11.17 4.8 11.17 11.4s-4.65 11.4-11.17 11.4c-6.56.2-11.21-4.6-11.21-11.3zm18.49 0c0-4.6-2.87-8-7.22-8s-7.22 3.4-7.22 8 2.87 8 7.22 8 7.22-3.4 7.22-8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-21",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M67.73 21.26h-7.21v-5.7H70.7a1 1 0 0 0 .89-.6l.59-1.4a1 1 0 0 0-.89-1.4H57.65a.94.94 0 0 0-1 1v20.1a.94.94 0 0 0 1 1h1.88a.94.94 0 0 0 1-1v-8.6h6.72a1 1 0 0 0 .89-.6l.59-1.4a1.08 1.08 0 0 0-1-1.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "prefix__cls-1",
    d: "M133.63 12.16h-16.88a1 1 0 0 0-.79 1.6l.89 1.4a.9.9 0 0 0 .79.4h5.62v17.7a.94.94 0 0 0 1 1h1.88a.94.94 0 0 0 1-1v-17.7h5.62a.9.9 0 0 0 .79-.4l.89-1.4a1 1 0 0 0-.81-1.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "prefix__cls-1",
    d: "M42.37 3.39a1.7 1.7 0 1 1 1.7-1.69 1.7 1.7 0 0 1-1.7 1.69zm0-3.13a1.44 1.44 0 1 0 1.44 1.44A1.43 1.43 0 0 0 42.37.26zm.46 2.41l-.5-.77H42v.77h-.27V.73h.79a.6.6 0 0 1 .63.59.57.57 0 0 1-.5.58l.52.78zM42.51 1H42v.69h.52a.35.35 0 0 0 .35-.34.35.35 0 0 0-.36-.35z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "prefix__cls-1",
    d: "M178 12.76l-3.93 9.65a1.11 1.11 0 0 0 0 .8l1.32 3.35c.2.4.79.4.89 0l3.61-8.7v15.4a.94.94 0 0 0 1 1h1.88a.94.94 0 0 0 1-1v-20.1a.94.94 0 0 0-1-1H179a1.16 1.16 0 0 0-1 .6zm-5.13 18.9a1 1 0 0 0 .89-1.4l-7.12-17.4a1 1 0 0 0-.89-.6H162a.94.94 0 0 0-1 1v20.1a.94.94 0 0 0 1 1h1.88a.94.94 0 0 0 1-1v-15.5L170.26 31a1 1 0 0 0 .89.6z",
    id: "prefix__Shape-22",
    "data-name": "Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "prefix__Shape-23",
    "data-name": "Shape",
    className: "prefix__cls-1",
    d: "M83.41 12.16H80a1 1 0 0 0-.89.6l-7.91 20.1a1 1 0 0 0 .89 1.4h2.27a1 1 0 0 0 .89-.6l6.33-17.5 4 10.5h-4a1.19 1.19 0 0 0-1 .7l-.69 2.1a.53.53 0 0 0 .49.7h6.33l1.38 3.6a.87.87 0 0 0 .89.6h2.27a1 1 0 0 0 .89-1.4l-7.84-20.1a.92.92 0 0 0-.89-.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_factom_horizontal_white__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/factom_horizontal_white */ "./assets/factom_horizontal_white.js");





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2200322624" + " " + "PageLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2200322624"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2200322624"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2200322624"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-2200322624" + " " + "Header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2200322624" + " " + "HeaderGroup"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2200322624" + " " + "InsideHeaderGroup"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/BTC"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2200322624" + " " + "FactomIcon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2200322624"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_factom_horizontal_white__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      display: "none"
    },
    className: "jsx-2200322624"
  }, "Factom Anchor Monitor")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2200322624" + " " + "BTCorETH"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/BTC"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2200322624"
  }, "BTC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/ETH"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2200322624"
  }, "ETH")))))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1947549089",
    css: "body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;margin:0;-webkit-font-smoothing:antialiased;font-size:20px;line-height:1.3;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzJCLEFBR3lKLEFBT25ILGtEQUN6Qiw2RUFQYSxTQUMwQixtQ0FDcEIsZUFDQyxnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2pvc2h1YWJyaWdhdGkvZ28vc3JjL2dpdGh1Yi5jb20vRmFjdG9tUHJvamVjdC9BbmNob3JNb25pdG9yL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEZhY3RvbUljb24gZnJvbSAnLi4vYXNzZXRzL2ZhY3RvbV9ob3Jpem9udGFsX3doaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnZUxheW91dFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiSGVhZGVyR3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluc2lkZUhlYWRlckdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvQlRDYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJGYWN0b21JY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPjxGYWN0b21JY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PkZhY3RvbSBBbmNob3IgTW9uaXRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQlRDb3JFVEhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvQlRDYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJUQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvRVRIYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVUSFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgICAgIC5QYWdlTGF5b3V0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSA3ZnIgM3JlbTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA3cmVtIG1pbm1heCgxMDBweCwgOTUwcHgpIDFmcjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICBcIm1haW5oZWFkZXIgbWFpbmhlYWRlciBtYWluaGVhZGVyXCJcbiAgICAgICAgICAgICAgICBcIi4gdGFibGUgIC5cIlxuICAgICAgICAgICAgICAgIFwiZm9vdGVyIGZvb3RlciBmb290ZXJcIjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuSGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtYWluaGVhZGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQyQzNDO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuOHMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkhlYWRlckdyb3VwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnIgM3JlbTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgICcuIGhlYWRlcmluc2lkZSAgLic7XG4gICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5JbnNpZGVIZWFkZXJHcm91cCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXJpbnNpZGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgNmZyIDFmcjtcblxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAgICAgJ2hlYWRlciAuICBtZW51JztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkhlYWRlciBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5GYWN0b21JY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNyZW07XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IEhlcm9BbmltYXRpb24gIDNzIDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkZhY3RvbUljb24gaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOXB4IDAgMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkJUQ29yRVRIIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbWVudTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5CVENvckVUSCBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMi40cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgLkhlYWRlckdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLlBhZ2VMYXlvdXQge1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA0LjVyZW0gbWlubWF4KDEwMHB4LCA5ODBweCkgMWZyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuRmFjdG9tSWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIEhlcm9BbmltYXRpb24ge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/components/Layout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1147456840",
    css: ".PageLayout.jsx-2200322624{display:grid;grid-template-columns:3rem 7fr 3rem;grid-template-rows:7rem minmax(100px,950px) 1fr;grid-template-areas: \"mainheader mainheader mainheader\" \". table  .\" \"footer footer footer\";grid-row-gap:15px;}.Header.jsx-2200322624{position:fixed;grid-area:mainheader;height:13rem;width:100%;padding:0;background:#142C3C;-webkit-transition:0.8s cubic-bezier(0.2,0.8,0.2,1);transition:0.8s cubic-bezier(0.2,0.8,0.2,1);}.HeaderGroup.jsx-2200322624{margin:0 auto;display:grid;width:auto;grid-template-columns:3rem 1fr 3rem;grid-template-areas: '. headerinside  .';grid-gap:10px;padding:10px;}.InsideHeaderGroup.jsx-2200322624{grid-area:headerinside;display:grid;max-width:1400px;grid-template-columns:1fr 6fr 1fr;grid-template-areas: 'header .  menu';padding:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center;justify-self:center;}.Header.jsx-2200322624 a.jsx-2200322624{color:white;font-weight:700;}.FactomIcon.jsx-2200322624{width:13rem;grid-area:header;justify-self:start;-webkit-animation:HeroAnimation-jsx-2200322624 3s;animation:HeroAnimation-jsx-2200322624 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.FactomIcon.jsx-2200322624 h1.jsx-2200322624{margin:9px 0 0 0;}.BTCorETH.jsx-2200322624{display:grid;grid-template-columns:repeat(2,auto);justify-self:end;grid-area:menu;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.BTCorETH.jsx-2200322624 a.jsx-2200322624{position:relative;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 2.4rem;font-size:1.4rem;font-weight:600;color:#FFF;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media (max-width:640px){.HeaderGroup.jsx-2200322624{padding:10px;}.PageLayout.jsx-2200322624{grid-template-rows:4.5rem minmax(100px,980px) 1fr;}.FactomIcon.jsx-2200322624{width:10rem;}}@-webkit-keyframes HeroAnimation-jsx-2200322624{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-2200322624{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDJCLEFBRzhCLEFBVUUsQUFTRCxBQVVTLEFBYVgsQUFJQSxBQVFLLEFBR0osQUFPSyxBQWlCRCxBQUd1QyxBQUd4QyxBQUtGLEFBS0EsVUFKaUIsQUFLRCxFQXZEZCxBQUlDLEFBeUNqQixDQXZGb0MsQUF5REUsQUF3QnRDLENBOURhLENBVFEsRUE0Q3pCLENBVW9CLEtBbkNILElBVEYsQ0F1QmYsQ0FJdUIsS0FrQkMsRUF0RFAsQUFtQkksRUFUbUIsVUEyQlAsQ0EvQ3FCLEFBV3ZDLENBOENNLEFBMEJqQixHQXJEbUMsQ0FtQ2YsTUFyRFYsT0E4Q0ssR0E3Q0ksSUFTQSxBQTRDTixRQVBPLEtBMUJKLEVBbkIrQixRQVZ6QixHQTZGdEIsR0FMQSxZQXJFYyxVQVdELElBVkEsU0FXTSxFQWFVLEVBdkJqQyxNQTBDNkIseUJBQ0gsTUFSMUIsTUE3Q0EsSUFWc0IsTUFnRUMsV0FwQnNDLENBM0M3RCx3QkE4QnlCLHFCQUNELG9CQUN4QixnQkFnQ3FCLGlCQUNBLGlCQXJCckIsQUFzQm9CLGdCQUNMLFdBQ1ksbUdBRTNCIiwiZmlsZSI6Ii9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBGYWN0b21JY29uIGZyb20gJy4uL2Fzc2V0cy9mYWN0b21faG9yaXpvbnRhbF93aGl0ZSdcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlBhZ2VMYXlvdXRcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIkhlYWRlckdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnNpZGVIZWFkZXJHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL0JUQ2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiRmFjdG9tSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48RmFjdG9tSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5GYWN0b20gQW5jaG9yIE1vbml0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJUQ29yRVRIXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL0JUQ2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCVENcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL0VUSGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFVEhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8c3R5bGUganN4PVwidHJ1ZVwiPntgXG4gICAgICAgICAgICAuUGFnZUxheW91dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gN2ZyIDNyZW07XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgN3JlbSBtaW5tYXgoMTAwcHgsIDk1MHB4KSAxZnI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgXCJtYWluaGVhZGVyIG1haW5oZWFkZXIgbWFpbmhlYWRlclwiXG4gICAgICAgICAgICAgICAgXCIuIHRhYmxlICAuXCJcbiAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyXCI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkhlYWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbWFpbmhlYWRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE0MkMzQztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjhzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5IZWFkZXJHcm91cCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgICAnLiBoZWFkZXJpbnNpZGUgIC4nO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuSW5zaWRlSGVhZGVyR3JvdXAge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyaW5zaWRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDZmciAxZnI7XG5cbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgICdoZWFkZXIgLiAgbWVudSc7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5IZWFkZXIgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuRmFjdG9tSWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzcmVtO1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uICAzcyA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5GYWN0b21JY29uIGgxIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDlweCAwIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5CVENvckVUSCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1lbnU7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuQlRDb3JFVEggYSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIuNHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgIC5IZWFkZXJHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5QYWdlTGF5b3V0IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgNC41cmVtIG1pbm1heCgxMDBweCwgOTgwcHgpIDFmcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLkZhY3RvbUljb24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBIZXJvQW5pbWF0aW9uIHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/components/Layout.js */"
  }));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showMenuOffNoti", function (event) {
      event.preventDefault();

      _this.setState({
        offNotiToggle: true
      }, function () {
        document.addEventListener('click', _this.closeMenuOffNoti);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenuOffNoti", function () {
      _this.setState({
        offNotiToggle: false
      }, function () {
        document.removeEventListener('click', _this.closeMenuOffNoti);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "offNotiSelect", function (event) {
      if (event.target.value === 30) {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:3000/offnotificationchange", null, {
          params: {
            time: "30 Minutes"
          }
        });

        _this.setState({
          lastOff: "30 Minutes"
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:3000/offnotificationchange", null, {
          params: {
            time: event.target.value
          }
        }).then(_this.forceUpdate());

        _this.setState({
          lastOff: event.target.value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showMenuPendingNoti", function (event) {
      event.preventDefault();

      _this.setState({
        pendingNotiToggle: true
      }, function () {
        document.addEventListener('click', _this.closeMenuPendingNoti);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenuPendingNoti", function () {
      _this.setState({
        pendingNotiToggle: false
      }, function () {
        document.removeEventListener('click', _this.closeMenuPendingNoti);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pendingNotiSelect", function (event) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:3000/pendingtimenotification", null, {
        params: {
          time: event.target.value
        }
      });
    });

    _this.state = {
      name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null,
      offNotiToggle: false,
      pendingNotiToggle: false,
      lastOff: _this.props.lastOff
    };
    _this.showMenuOffNoti = _this.showMenuOffNoti.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeMenuOffNoti = _this.closeMenuOffNoti.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.offNotiSelect = _this.offNotiSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showMenuPendingNoti = _this.showMenuPendingNoti.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeMenuPendingNoti = _this.closeMenuPendingNoti.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pendingNotiSelect = _this.pendingNotiSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    setInterval(function () {
      Main.getInitialProps;
    }, 2000);
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          name = _this$state.name,
          pendingNotiToggle = _this$state.pendingNotiToggle,
          offNotiToggle = _this$state.offNotiToggle,
          lastOff = _this$state.lastOff;
      var _this$props = this.props,
          data = _this$props.data,
          lastConf = _this$props.lastConf,
          balance = _this$props.balance;
      console.log("lastOff: ", lastOff);
      var offHolder = "30 Minutes";

      if (lastOff !== offHolder) {
        offHolder = lastOff === "1" || lastOff === 1 ? "1 hour" : "".concat(lastOff, " hours");
      }

      var countHolder = "1 Block";
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Bitcoin Anchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "Hero"
      }, Array.isArray(data) ? data.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3100935000"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "tableHeaderContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "offNoti ",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-3100935000" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3100935000"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuOffNoti,
        className: "jsx-3100935000" + " " + "placeholder \n                                                            ".concat(offHolder.length === "30 Minutes".length ? "" : null, "\n                                                            ").concat(offHolder.length === "1 hour".length ? "short" : null, "\n                                                            ").concat(offHolder.length === "3 hours".length ? "singlehours" : null, "\n                                                            ").concat(offHolder.length === "12 hours".length ? "doublehours" : null, "\n                                                            ")
      }, offHolder), offNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3100935000"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "30",
        className: "jsx-3100935000"
      }, "30 Minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "1",
        className: "jsx-3100935000"
      }, "1 hour"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "3",
        className: "jsx-3100935000"
      }, "3 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "6",
        className: "jsx-3100935000"
      }, "6 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "9",
        className: "jsx-3100935000"
      }, "9 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "12",
        className: "jsx-3100935000"
      }, "12 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "24",
        className: "jsx-3100935000"
      }, "24 hours")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3100935000"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "pendingNoti",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-3100935000" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3100935000"
      }, "Pending count before notifying: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuPendingNoti,
        className: "jsx-3100935000" + " " + "placeholder small"
      }, countHolder), pendingNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3100935000"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "1",
        className: "jsx-3100935000"
      }, "1 Block"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "2",
        className: "jsx-3100935000"
      }, "2 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "4",
        className: "jsx-3100935000"
      }, "4 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "9",
        className: "jsx-3100935000"
      }, "9 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "18",
        className: "jsx-3100935000"
      }, "18 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "36",
        className: "jsx-3100935000"
      }, "36 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "72",
        className: "jsx-3100935000"
      }, "72 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "144",
        className: "jsx-3100935000"
      }, "144 Blocks")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3100935000"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          gridArea: "otherHeaderInfo"
        },
        className: "jsx-3100935000"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        id: "style-7",
        className: "jsx-3100935000" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-3100935000"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-3100935000"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3100935000" + " " + "headerheight"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3100935000" + " " + "headertime"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3100935000" + " " + "headerkeymr"
      }, "KEYMR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3100935000" + " " + "headerbtchash"
      }, "BTC HASH"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-3100935000"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-3100935000" + " " + "anchor-row"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--height"),
          style: {
            paddingLeft: "1.5rem !important"
          },
          className: "jsx-3100935000" + " " + "bodyheight"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-3100935000" + " " + "bodystarted"
        }, moment__WEBPACK_IMPORTED_MODULE_3___default()(anchor.started_at).format('YYYY-MM-DD HH:mm')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-3100935000" + " " + "bodykeymr"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "http://explorer.factom.com/dblocks/".concat(anchor.keymr),
          target: "_blank",
          className: "jsx-3100935000"
        }, anchor.keymr)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--btchash"),
          className: "jsx-3100935000" + " " + "bodybtchash"
        }, anchor.btc_hash === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          style: {
            color: "#4A4A4A"
          },
          className: "jsx-3100935000"
        }, "BTC has not recieved transaction yet.") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://www.blockchain.com/btc/tx/".concat(anchor.btc_hash),
          target: "_blank",
          className: "jsx-3100935000"
        }, anchor.btc_hash)));
      })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3100935000"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "tableHeaderContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "offNoti ",
          display: "grid",
          gridTemplateColumns: "230px 130px"
        },
        className: "jsx-3100935000" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3100935000"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuOffNoti,
        className: "jsx-3100935000" + " " + "placeholder"
      }, holder), offNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3100935000"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "30",
        className: "jsx-3100935000"
      }, "30 Minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "1",
        className: "jsx-3100935000"
      }, "1 hour"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "3",
        className: "jsx-3100935000"
      }, "3 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "6",
        className: "jsx-3100935000"
      }, "6 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "9",
        className: "jsx-3100935000"
      }, "9 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "12",
        className: "jsx-3100935000"
      }, "12 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "24",
        className: "jsx-3100935000"
      }, "1 Day")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3100935000"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "pendingNoti",
          display: "grid",
          gridTemplateColumns: "230px 130px"
        },
        className: "jsx-3100935000" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3100935000"
      }, "# of blocks before notifying: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuPendingNoti,
        className: "jsx-3100935000" + " " + "placeholder"
      }, holder), pendingNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3100935000"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "1",
        className: "jsx-3100935000"
      }, "1 block"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "2",
        className: "jsx-3100935000"
      }, "2 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "4",
        className: "jsx-3100935000"
      }, "4 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "9",
        className: "jsx-3100935000"
      }, "9 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "18",
        className: "jsx-3100935000"
      }, "18 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "36",
        className: "jsx-3100935000"
      }, "36 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "72",
        className: "jsx-3100935000"
      }, "72 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "144",
        className: "jsx-3100935000"
      }, "144 blocks")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3100935000"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          gridArea: "otherHeaderInfo"
        },
        className: "jsx-3100935000"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "NoAnchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3100935000"
      }, "No pending Anchors!"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3100935000"
      }, "Pending ", name, " Anchors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3100935000"
      }, data))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3100935000",
        css: ".jsx-3100935000{*/;}.Hero.jsx-3100935000{max-width:1400px;justify-self:center;width:-webkit-fill-available;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);-webkit-animation:HeroAnimation-jsx-3100935000 3s;animation:HeroAnimation-jsx-3100935000 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.HeroGroup.jsx-3100935000{margin:0 auto;padding:2rem 2.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:9rem minmax(300px,720px) 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.HeroGroupHeader.jsx-3100935000{grid-area:tableheader;display:grid;grid-template-rows:repeat(2,1fr);}.HeroGroupHeader.jsx-3100935000 small.jsx-3100935000{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;font-weight:600;}.tableHeaderContent.jsx-3100935000{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;grid-template-areas: \"pendingNoti .\" \"offNoti otherHeaderInfo\";grid-column-gap:10px;}.Hero.jsx-3100935000 h1.jsx-3100935000{margin:0;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;}.Hero.jsx-3100935000 p.jsx-3100935000{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-3100935000 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-3100935000 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}table.jsx-3100935000{display:block;overflow-x:auto;border-collapse:collapse;text-align:left;white-space:nowrap;}#style-7.jsx-3100935000::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:#F5F5F5;}#style-7.jsx-3100935000::-webkit-scrollbar{width:10px;background-color:#F5F5F5;}#style-7.jsx-3100935000::-webkit-scrollbar-thumb{background-image:-webkit-gradient(linear, 40% 0%, 75% 84%, from(#142C3C), to(#142C3C), color-stop(.7,#142c3cb8));}table.jsx-3100935000 thead.jsx-3100935000,table.jsx-3100935000 tbody.jsx-3100935000{display:grid;}table.jsx-3100935000 tr.jsx-3100935000{display:grid;grid-template-columns:minmax(100px,170px) minmax(100px,200px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight coltime colkeymr colbtchash \";}table.jsx-3100935000 thead.jsx-3100935000 th.jsx-3100935000{background:#E8E8E8;font-size:70%;padding:1.2rem;font-weight:600;}table.jsx-3100935000 thead.jsx-3100935000 th.jsx-3100935000:first-child{border-top-left-radius:0.4rem;border-bottom-left-radius:0.4rem;}.headerheight.jsx-3100935000 .bodyheight.jsx-3100935000{grid-area:colheight;padding-right:0;}.headertime.jsx-3100935000 .bodystarted.jsx-3100935000{grid-area:coltime;}.headerkeymr.jsx-3100935000{grid-area:colkeymr;}.headerbtchash.jsx-3100935000{grid-area:colbtchash;}thead.jsx-3100935000 th.jsx-3100935000:not(:first-child){padding-left:0 !important;}tbody.jsx-3100935000 td.jsx-3100935000{font-size:70%;padding:1.5rem;-webkit-letter-spacing:1.2px;-moz-letter-spacing:1.2px;-ms-letter-spacing:1.2px;letter-spacing:1.2px;color:#4A4A4A;border-bottom:1px solid #E9E9E9;}tbody.jsx-3100935000 td.jsx-3100935000:not(:first-child){padding-left:0 !important;}.bodykeymr.jsx-3100935000{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodykeymr.jsx-3100935000 a.jsx-3100935000{text-transform:none;background:none;color:#388FC9;}.bodybtchash.jsx-3100935000{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodybtchash.jsx-3100935000 a.jsx-3100935000{text-transform:none;background:none;color:#388FC9;}.custom-dropdown.jsx-3100935000 select.jsx-3100935000{background-color:#2c3e50;color:#fff;font-size:inherit;padding:.5em;padding-right:2.5em;border:0;margin:0;border-radius:3px;text-indent:0.01px;text-overflow:'';-webkit-appearance:button;}.custom-dropdown.jsx-3100935000::before,.custom-dropdown.jsx-3100935000::after{content:\"\";position:absolute;pointer-events:none;}.custom-dropdown.jsx-3100935000::after{content:\"\u25BC\";height:1em;font-size:.625em;line-height:1;right:1.2em;top:50%;margin-top:-.5em;}.custom-dropdown.jsx-3100935000::before{width:2em;right:0;top:0;bottom:0;border-radius:0 3px 3px 0;}.custom-dropdown.jsx-3100935000 select[disabled].jsx-3100935000{color:rgba(0,0,0,.3);}.custom-dropdown.jsx-3100935000 select[disabled].jsx-3100935000::after{color:rgba(0,0,0,.1);}.custom-dropdown.jsx-3100935000::before{background-color:rgba(0,0,0,.15);}.custom-dropdown.jsx-3100935000::after{color:rgba(0,0,0,.4);}.select.jsx-3100935000{position:relative;display:block;width:100%;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;}.placeholder.jsx-3100935000{position:relative;display:block;top:6px;background-color:#142C3C;z-index:1;padding:.5em;border-radius:0.4rem;cursor:pointer;font-size:70%;color:#cccccc;height:20px;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.placeholder.jsx-3100935000:hover{background:darken(#142C3C,2%);}.placeholder.jsx-3100935000:after{position:absolute;margin-left:2em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:'FontAwesome';content:'\u25BC';z-index:10;font-size:70%;}.short.jsx-3100935000:after{margin-left:5.5em;}.singlehours.jsx-3100935000:after{margin-left:4.5em;}.doublehours.jsx-3100935000:after{margin-left:3.8em;}.small.jsx-3100935000:after{position:absolute;margin-left:4.7em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:'FontAwesome';content:'\u25BC';z-index:10;font-size:70%;}ul.jsx-3100935000{position:absolute;overflow:hidden;overflow-y:auto;width:35%;background:#fff;border-radius:2px;top:100%;left:64.5%;list-style:none;margin:5px 0 0 0;padding:0;z-index:100;box-shadow:0 0 8px 0 rgba(0,0,0,0.9);}li.jsx-3100935000{display:block;text-align:left;padding:0.8em 1em 0.8em 1em;color:#999;cursor:pointer;font-size:70%;}li.jsx-3100935000:hover{background:#4ebbf0;color:#fff;}@media (min-width:1235px){tbody.jsx-3100935000 td.jsx-3100935000:first-child .headerheight.jsx-3100935000{padding-left:2rem;}}@media (max-width:830px){.tableHeaderContent.jsx-3100935000{display:grid;grid-template-columns:auto;grid-template-rows:auto 1fr 45px;grid-template-areas: \"offNoti\" \"pendingNoti\" \"otherHeaderInfo\";grid-column-gap:10px;grid-row-gap:10px;}.tableHeaderContent.jsx-3100935000 small.jsx-3100935000{justify-self:start;}.HeroGroup.jsx-3100935000{padding:30px 20px;grid-template-rows:10rem minmax(300px,720px) 2fr;}}@media (max-width:700px){table.jsx-3100935000 tr.jsx-3100935000{grid-template-columns:minmax(100px,170px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight colkeymr colbtchash \";}.headertime.jsx-3100935000,.bodystarted.jsx-3100935000{display:none;}}@media (max-width:686px){.HeroGroup.jsx-3100935000{padding:30px 20px;grid-template-rows:10rem minmax(300px,720px) 2fr;}}@media (max-width:644px){.tableHeaderContent.jsx-3100935000{display:grid;grid-template-columns:auto;grid-template-rows:auto 1fr 45px;grid-template-areas: \"offNoti\" \"pendingNoti\" \"otherHeaderInfo\";grid-column-gap:10px;grid-row-gap:10px;}.Hero.jsx-3100935000 h1.jsx-3100935000{font-size:35px;font-weight:400;}.Hero.jsx-3100935000 p.jsx-3100935000{font-size:24px;}}@media (max-width:506px){.Hero.jsx-3100935000 h1.jsx-3100935000{font-size:25px;font-weight:400;}.Hero.jsx-3100935000 p.jsx-3100935000{font-size:24px;}.headertime.jsx-3100935000{display:none;}}@-webkit-keyframes HeroAnimation-jsx-3100935000{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-3100935000{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTm1DLEFBRzBDLEFBY0gsQUFhUSxBQUtMLEFBS0osQUFTSixBQVFzQixBQU9qQixBQVFtQyxBQUl0QyxBQVNFLEFBTUEsQUFHQSxBQUtNLEFBTVcsQUFJVCxBQUlILEFBR0MsQUFHRSxBQUlLLEFBR1osQUFPWSxBQUdaLEFBTU0sQUFLTixBQU1NLEFBWUssQUFjZCxBQU1DLEFBVUYsQUFRVyxBQUlBLEFBSVksQUFJWixBQUNGLEFBSUQsQUFRQSxBQWNZLEFBR1osQUFVQSxBQUdBLEFBR0EsQUFHQSxBQVdBLEFBZUosQUFRSyxBQU9HLEFBS0wsQUFXTSxBQUdELEFBTTRELEFBSWpFLEFBS0ssQUFNTCxBQVlFLEFBS0EsQUFNQSxBQUtBLEFBSUYsQUFNSCxBQUtBLEdBSXRCLE1BdFYyQixDQWtKWCxBQTRMdUIsQUFLRCxDQXhUTCxBQXVHUCxDQU1QLENBakpvQixBQW1EbkMsQUFHc0csQUF3Tm5FLEFBd0IvQixBQVcrQixBQWdDL0IsQ0F4V29CLEFBK0NKLEFBOERELEFBVXNCLEFBV0EsQUErSXJCLENBbUVJLEFBS3BCLEFBTW9CLEFBS3BCLEVBbFhvQixBQWdDTCxDQThFbkIsQUFtRlUsQUF3QlEsQUFRQSxBQWlCRSxBQVVwQixBQUdBLEFBR0EsQUFHc0IsQUFXRixBQThCaEIsQUFtQnFELEFBZUEsQ0FoUHZDLEFBaUJsQixBQXNMZSxBQXVCWCxDQXBOZ0IsQUFpQ0EsQUFXQSxDQWpDcEIsQUFtRkEsQUFJQSxBQVFBLENBekxpQixDQTRKSSxDQVdSLENBaENFLENBMUNmLEFBVUEsRUFuRmUsQUFPSSxDQXNFTSxBQXFERCxDQW5ISyxBQXdDUSxBQXlJckMsQUFpRGdDLEFBUWhDLENBMkRJLEFBV0EsQ0FwSlcsQUFRSCxDQWpJTyxBQWtHVyxBQWE5QixDQWpNaUIsQUFvT0wsQUE4QlEsQ0FyUGtCLENBOEN0QyxBQWlDQSxBQWlDa0IsQUFXQSxBQVlJLEFBbUdWLENBclFxQixFQStDZCxDQXdJRCxBQTJDVyxBQWlGYSxBQW1DQSxFQW5HWCxDQTdMWCxBQW9LQSxDQXJMaUIsQUFpT04sR0F2UEcsQ0FrRmQsQ0E3QlMsQUE2RzdCLENBNUNvQixBQU9wQixBQUlvQixBQU9wQixBQTBIYyxJQWpPTSxBQW1ISCxBQXFCRCxDQTFISSxHQWtPTCxDQXpPNkQsQUE0STVFLEFBd0JxQixDQXVERCxHQTVLcEIsQ0FKQSxDQWlJYyxDQWxPTSxBQXFJTyxBQVdBLEFBd0NmLENBckJZLEFBNkpwQixBQWVBLENBcFRKLENBcVFtQixDQWhQQyxDQWNHLENBdkJVLENBeEJ3QixBQXVTNUIsQUFtQ0EsQ0FyUjdCLEFBcUhxQixDQTBDSixDQStDSyxFQW9EbkIsQ0F2U2lCLEdBOUJLLEVBZ1NQLEVBaFBsQixDQW1IYSxDQWdFWSxDQTlGekIsQUFXQSxDQWxGQSxDQTJIQSxHQXlGYSxDQW5QYixDQXFJYSxFQTZIYixFQThGSSxHQTlYVSxBQWtSQyxBQXVHWCxFQXJOa0IsSUErREgsRUEzSStDLEVBdkY5QyxBQThFcEIsQ0FvTW9CLE9BbFFDLEVBb0pFLENBK0RMLEtBbE9pQyxDQXVIakMsQUEySkcsRUFnRGpCLEdBOVJxQixBQTJNSyxDQW9FRCxBQW1DQSxDQXBGQyxDQS9CWixJQS9ERyxFQTVDZSxBQStGTCxHQTREakIsS0EvQ0UsSUEvTGhCLENBK09nQixBQWdDVSxBQW1DQSxFQWxMSSxFQTJFZCxFQW1CQSxDQTlCRyxLQWdEc0IsRUE3RHpDLEVBaklBLEFBMEplLEVBaFAyQixBQW1RM0IsQUFpRFgsQUFtQ0EsQ0EvTkosTUF6RzBCLEVBa09SLENBNUVsQixDQStGa0IsWUFsQmxCLEVBbE9zQixBQXFQdEIsTUFnQkEsTUFwUmlDLE1BZ0JqQyxRQW9OQSxTQW5MYyxVQUNkLDJEQWpEaUMsa0VBQzRCLG9IQUM3RCIsImZpbGUiOiIvVXNlcnMvam9zaHVhYnJpZ2F0aS9nby9zcmMvZ2l0aHViLmNvbS9GYWN0b21Qcm9qZWN0L0FuY2hvck1vbml0b3IvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lID09PSAnQlRDJyA/ICdCaXRjb2luJyA6IHByb3BzLm5hbWUgPT09ICdFVEgnID8gJ0V0aGVyZXVtJyA6IG51bGwsXG4gICAgICAgICAgICBvZmZOb3RpVG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHBlbmRpbmdOb3RpVG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RPZmY6IHRoaXMucHJvcHMubGFzdE9mZixcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd01lbnVPZmZOb3RpID0gdGhpcy5zaG93TWVudU9mZk5vdGkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZU1lbnVPZmZOb3RpID0gdGhpcy5jbG9zZU1lbnVPZmZOb3RpLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub2ZmTm90aVNlbGVjdCA9IHRoaXMub2ZmTm90aVNlbGVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dNZW51UGVuZGluZ05vdGkgPSB0aGlzLnNob3dNZW51UGVuZGluZ05vdGkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZU1lbnVQZW5kaW5nTm90aSA9IHRoaXMuY2xvc2VNZW51UGVuZGluZ05vdGkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nTm90aVNlbGVjdCA9IHRoaXMucGVuZGluZ05vdGlTZWxlY3QuYmluZCh0aGlzKTtcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBNYWluLmdldEluaXRpYWxQcm9wc1xuICAgICAgICB9LCAyMDAwKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeTogeyBuYW1lLCBkYXRhLCBsYXN0Q29uZiwgYmFsYW5jZSwgbGFzdE9mZiB9IH0pIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgZGF0YTogZGF0YSwgbGFzdENvbmY6IGxhc3RDb25mLCBiYWxhbmNlOiBiYWxhbmNlLCBsYXN0T2ZmOiBsYXN0T2ZmIH1cbiAgICB9XG5cbiAgICBzaG93TWVudU9mZk5vdGkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9mZk5vdGlUb2dnbGU6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudU9mZk5vdGkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZU1lbnVPZmZOb3RpID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb2ZmTm90aVRvZ2dsZTogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudU9mZk5vdGkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvZmZOb3RpU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IDMwKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvb2Zmbm90aWZpY2F0aW9uY2hhbmdlYCwgbnVsbCwgeyBwYXJhbXM6IHsgdGltZTogXCIzMCBNaW51dGVzXCIgfSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGFzdE9mZjogXCIzMCBNaW51dGVzXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvb2Zmbm90aWZpY2F0aW9uY2hhbmdlYCwgbnVsbCwgeyBwYXJhbXM6IHsgdGltZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0gfSkudGhlbih0aGlzLmZvcmNlVXBkYXRlKCkpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsYXN0T2ZmOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TWVudVBlbmRpbmdOb3RpID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZW5kaW5nTm90aVRvZ2dsZTogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51UGVuZGluZ05vdGkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZU1lbnVQZW5kaW5nTm90aSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlbmRpbmdOb3RpVG9nZ2xlOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51UGVuZGluZ05vdGkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwZW5kaW5nTm90aVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcGVuZGluZ3RpbWVub3RpZmljYXRpb25gLCBudWxsLCB7IHBhcmFtczogeyB0aW1lOiBldmVudC50YXJnZXQudmFsdWUgfSB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgbmFtZSwgcGVuZGluZ05vdGlUb2dnbGUsIG9mZk5vdGlUb2dnbGUsIGxhc3RPZmYgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7IGRhdGEsIGxhc3RDb25mLCBiYWxhbmNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxhc3RPZmY6IFwiLCBsYXN0T2ZmKVxuICAgICAgICBsZXQgb2ZmSG9sZGVyID0gXCIzMCBNaW51dGVzXCI7XG4gICAgICAgIGlmIChsYXN0T2ZmICE9PSBvZmZIb2xkZXIpIHtcbiAgICAgICAgICAgIG9mZkhvbGRlciA9IChsYXN0T2ZmID09PSBcIjFcIiB8fCBsYXN0T2ZmID09PSAxKSA/IFwiMSBob3VyXCIgOiBgJHtsYXN0T2ZmfSBob3Vyc2BcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnRIb2xkZXIgPSBcIjEgQmxvY2tcIlxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPSdCaXRjb2luIEFuY2hvcnMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShkYXRhKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoICE9PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGVuZGluZyB7bmFtZX0gQW5jaG9yczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlSGVhZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0XCIgc3R5bGU9e3sgZ3JpZEFyZWE6IFwib2ZmTm90aSBcIiwgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMjU1cHggMTMwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGp1c3RpZnlTZWxmOiBcInN0YXJ0XCIgfX0+VHVybiBvZmYgbm90aWZpY2F0aW9ucyBmb3I6IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHBsYWNlaG9sZGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvZmZIb2xkZXIubGVuZ3RoID09PSBcIjMwIE1pbnV0ZXNcIi5sZW5ndGggPyBcIlwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIxIGhvdXJcIi5sZW5ndGggPyBcInNob3J0XCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvZmZIb2xkZXIubGVuZ3RoID09PSBcIjMgaG91cnNcIi5sZW5ndGggPyBcInNpbmdsZWhvdXJzXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvZmZIb2xkZXIubGVuZ3RoID09PSBcIjEyIGhvdXJzXCIubGVuZ3RoID8gXCJkb3VibGVob3Vyc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9IG9uQ2xpY2s9e3RoaXMuc2hvd01lbnVPZmZOb3RpfT57b2ZmSG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29mZk5vdGlUb2dnbGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIzMFwiPjMwIE1pbnV0ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMVwiPjEgaG91cjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIzXCI+MyBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCI2XCI+NiBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCI5XCI+OSBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIxMlwiPjEyIGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjI0XCI+MjQgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2hhbmdlbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0XCIgc3R5bGU9e3sgZ3JpZEFyZWE6IFwicGVuZGluZ05vdGlcIiwgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMjU1cHggMTMwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGp1c3RpZnlTZWxmOiBcInN0YXJ0XCIgfX0+UGVuZGluZyBjb3VudCBiZWZvcmUgbm90aWZ5aW5nOiA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlciBzbWFsbFwiIG9uQ2xpY2s9e3RoaXMuc2hvd01lbnVQZW5kaW5nTm90aX0+e2NvdW50SG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlbmRpbmdOb3RpVG9nZ2xlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjFcIj4xIEJsb2NrPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIyXCI+MiBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjRcIj40IEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiOVwiPjkgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxOFwiPjE4IEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMzZcIj4zNiBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjcyXCI+NzIgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxNDRcIj4xNDQgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYW5nZW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgZ3JpZEFyZWE6IFwib3RoZXJIZWFkZXJJbmZvXCIgfX0+TGFzdCBBbmNob3I6IHtsYXN0Q29uZn0gfCBBZGRyZXNzIEJhbGFuY2U6IHtiYWxhbmNlICogMC4wMDAwMDAwMX0gfCBDb3VudDoge2RhdGEubGVuZ3RofSB8IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJGdWxsVGFibGVcIiBpZD1cInN0eWxlLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoZWFkZXJoZWlnaHRcIj5IRUlHSFQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVydGltZVwiPlNUQVJUIFRJTUU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVya2V5bXJcIj5LRVlNUjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoZWFkZXJidGNoYXNoXCI+QlRDIEhBU0g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoYW5jaG9yKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Ake2FuY2hvci5faWR9YH0gY2xhc3NOYW1lPVwiYW5jaG9yLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLWhlaWdodGB9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEuNXJlbSAhaW1wb3J0YW50XCIgfX0gY2xhc3NOYW1lPVwiYm9keWhlaWdodFwiPnthbmNob3IuaGVpZ2h0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0tc3RhcnRlZF9hdGB9IGNsYXNzTmFtZT1cImJvZHlzdGFydGVkXCI+e21vbWVudChhbmNob3Iuc3RhcnRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJyl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1rZXltcmB9IGNsYXNzTmFtZT1cImJvZHlrZXltclwiPjxhIGhyZWY9e2BodHRwOi8vZXhwbG9yZXIuZmFjdG9tLmNvbS9kYmxvY2tzLyR7YW5jaG9yLmtleW1yfWB9IHRhcmdldD1cIl9ibGFua1wiPnthbmNob3Iua2V5bXJ9PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0tYnRjaGFzaGB9IGNsYXNzTmFtZT1cImJvZHlidGNoYXNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvci5idGNfaGFzaCA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCIjNEE0QTRBXCIgfX0+e2BCVEMgaGFzIG5vdCByZWNpZXZlZCB0cmFuc2FjdGlvbiB5ZXQuYH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5ibG9ja2NoYWluLmNvbS9idGMvdHgvJHthbmNob3IuYnRjX2hhc2h9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+e2FuY2hvci5idGNfaGFzaH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5QZW5kaW5nIHtuYW1lfSBBbmNob3JzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlSGVhZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7IGdyaWRBcmVhOiBcIm9mZk5vdGkgXCIsIGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjIzMHB4IDEzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sganVzdGlmeVNlbGY6IFwic3RhcnRcIiB9fT5UdXJuIG9mZiBub3RpZmljYXRpb25zIGZvcjogPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyXCIgb25DbGljaz17dGhpcy5zaG93TWVudU9mZk5vdGl9Pntob2xkZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29mZk5vdGlUb2dnbGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjMwXCI+MzAgTWludXRlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMVwiPjEgaG91cjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiM1wiPjMgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjZcIj42IGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCI5XCI+OSBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMTJcIj4xMiBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMjRcIj4xIERheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjaGFuZ2VtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7IGdyaWRBcmVhOiBcInBlbmRpbmdOb3RpXCIsIGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjIzMHB4IDEzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sganVzdGlmeVNlbGY6IFwic3RhcnRcIiB9fT4jIG9mIGJsb2NrcyBiZWZvcmUgbm90aWZ5aW5nOiA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGxhY2Vob2xkZXJcIiBvbkNsaWNrPXt0aGlzLnNob3dNZW51UGVuZGluZ05vdGl9Pntob2xkZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlbmRpbmdOb3RpVG9nZ2xlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMVwiPjEgYmxvY2s8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIyXCI+MiBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI0XCI+NCBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI5XCI+OSBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxOFwiPjE4IGJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjM2XCI+MzYgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiNzJcIj43MiBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxNDRcIj4xNDQgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYW5nZW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBncmlkQXJlYTogXCJvdGhlckhlYWRlckluZm9cIiB9fT5MYXN0IEFuY2hvcjoge2xhc3RDb25mfSB8IEFkZHJlc3MgQmFsYW5jZToge2JhbGFuY2UgKiAwLjAwMDAwMDAxfSB8IENvdW50OiB7ZGF0YS5sZW5ndGh9IHwgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOb0FuY2hvcnNcIj48aDE+Tm8gcGVuZGluZyBBbmNob3JzITwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlbmRpbmcge25hbWV9IEFuY2hvcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZGF0YX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIj57YFxuICAgICAgICAgICAgICAgICAgICAuSGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uICAzcyA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA5cmVtIG1pbm1heCgzMDBweCw3MjBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlZm9vdGVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXBIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YWJsZWhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXBIZWFkZXIgc21hbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50YWJsZUhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgYXV0byAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZW5kaW5nTm90aSAuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9mZk5vdGkgb3RoZXJIZWFkZXJJbmZvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogSGVyb0FuaW1hdGlvbiAzcyAwLjJzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI3N0eWxlLTc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNzdHlsZS03Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI3N0eWxlLTc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgNDAlIDAlLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgNzUlIDg0JSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZyb20oIzE0MkMzQyksXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB0bygjMTQyQzNDKSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbG9yLXN0b3AoLjcsIzE0MmMzY2I4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyQzNDOyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGhlYWQsXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwxNzBweCkgbWlubWF4KDEwMHB4LDIwMHB4KSBtaW5tYXgoMTAwcHgsMWZyKSBtaW5tYXgoMTAwcHgsMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGNvbGhlaWdodCBjb2x0aW1lIGNvbGtleW1yIGNvbGJ0Y2hhc2ggXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGhlYWQgdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcmhlaWdodCAuYm9keWhlaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6ICBjb2xoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJ0aW1lIC5ib2R5c3RhcnRlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcmtleW1yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29sa2V5bXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcmJ0Y2hhc2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb2xidGNoYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhlYWQgdGg6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGJvZHkgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTlFOUU5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRib2R5IHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5a2V5bXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5a2V5bXIgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM4OEZDOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWJ0Y2hhc2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5YnRjaGFzaCBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg4RkM5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiAuY3VzdG9tLWRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7IC8qIGRlbW8gb25seSAqL1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93biBzZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNWVtO1x0XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMC4wMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogaGlkZSBkZWZhdWx0IGFycm93IGluIGNocm9tZSBPU1ggKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjpiZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmFmdGVyIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcdTI1YmNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNjI1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLS41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjpiZWZvcmUgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93biBzZWxlY3RbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd24gc2VsZWN0W2Rpc2FibGVkXTo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93bjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MkMzQztcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjY2NjYzsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCMxNDJDM0MsMiUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXHUyNWJjJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNob3J0OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1LjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xlaG91cnM6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQuNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kb3VibGVob3VyczphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMy44ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYWxsOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0LjdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFx1MjViYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY0LjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC44ZW0gMWVtIDAuOGVtIDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRlYmJmMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpmaXJzdC1jaGlsZCAuaGVhZGVyaGVpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJsZUhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIGF1dG8gMWZyIDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2ZmTm90aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ05vdGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm90aGVySGVhZGVySW5mb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudGFibGVIZWFkZXJDb250ZW50IHNtYWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gbWlubWF4KDMwMHB4LDcyMHB4KSAyZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZSAgdHIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LDE3MHB4KSBtaW5tYXgoMTAwcHgsMWZyKSBtaW5tYXgoMTAwcHgsMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIiBjb2xoZWlnaHQgY29sa2V5bXIgY29sYnRjaGFzaCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcnRpbWUsIC5ib2R5c3RhcnRlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjg2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcmVtIG1pbm1heCgzMDBweCw3MjBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDRweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlSGVhZGVyQ29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgYXV0byAxZnIgNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZOb3RpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZW5kaW5nTm90aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3RoZXJIZWFkZXJJbmZvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDZweCkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJ0aW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIEhlcm9BbmltYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          name = _ref$query.name,
          data = _ref$query.data,
          lastConf = _ref$query.lastConf,
          balance = _ref$query.balance,
          lastOff = _ref$query.lastOff;
      return {
        name: name,
        data: data,
        lastConf: lastConf,
        balance: balance,
        lastOff: lastOff
      };
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map