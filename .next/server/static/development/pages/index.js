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
    className: "jsx-1559248198" + " " + "PageLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1559248198"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-1559248198"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1559248198"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-1559248198" + " " + "Header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1559248198" + " " + "HeaderGroup"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/BTC"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1559248198" + " " + "FactomIcon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1559248198"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_factom_horizontal_white__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      display: "none"
    },
    className: "jsx-1559248198"
  }, "Factom Anchor Monitor")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1559248198" + " " + "BTCorETH"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/BTC"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1559248198"
  }, "BTC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/ETH"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1559248198"
  }, "ETH"))))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-1559248198"
  }, 'I`m here to stay'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1947549089",
    css: "body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;margin:0;-webkit-font-smoothing:antialiased;font-size:20px;line-height:1.3;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzJCLEFBR3lKLEFBT25ILGtEQUN6Qiw2RUFQYSxTQUMwQixtQ0FDcEIsZUFDQyxnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2pvc2h1YWJyaWdhdGkvZ28vc3JjL2dpdGh1Yi5jb20vRmFjdG9tUHJvamVjdC9BbmNob3JNb25pdG9yL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEZhY3RvbUljb24gZnJvbSAnLi4vYXNzZXRzL2ZhY3RvbV9ob3Jpem9udGFsX3doaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnZUxheW91dFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiSGVhZGVyR3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL0JUQ2B9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJGYWN0b21JY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+PEZhY3RvbUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5GYWN0b20gQW5jaG9yIE1vbml0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQlRDb3JFVEhcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9CVENgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJUQ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvRVRIYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFVEhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8Zm9vdGVyPnsnSWBtIGhlcmUgdG8gc3RheSd9PC9mb290ZXI+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLlBhZ2VMYXlvdXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuM2ZyIDFmciAxZnIgMWZyIC4zZnI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgN3JlbSBtaW5tYXgoMTAwcHgsIDk4MHB4KSAxZnI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgXCIuIG1haW5oZWFkZXIgbWFpbmhlYWRlciBtYWluaGVhZGVyIC5cIlxuICAgICAgICAgICAgICAgIFwiLiB0YWJsZSB0YWJsZSB0YWJsZSAuXCJcbiAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcIjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuSGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtYWluaGVhZGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQyQzNDO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuOHMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkhlYWRlckdyb3VwIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRhYmxlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuM2ZyIDFmciAxZnIgMWZyIC4zZnI7XG5cbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgICcuIGhlYWRlciAuICBtZW51IC4nO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MzBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5IZWFkZXIgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuRmFjdG9tSWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzcmVtO1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuRmFjdG9tSWNvbiBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuQlRDb3JFVEgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtZW51O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkJUQ29yRVRIIGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyLjRyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/components/Layout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3796728206",
    css: ".PageLayout.jsx-1559248198{display:grid;grid-template-columns:.3fr 1fr 1fr 1fr .3fr;grid-template-rows:7rem minmax(100px,980px) 1fr;grid-template-areas: \". mainheader mainheader mainheader .\" \". table table table .\" \"footer footer footer footer footer\";grid-row-gap:15px;}.Header.jsx-1559248198{position:fixed;grid-area:mainheader;height:13rem;width:100%;padding:0;background:#142C3C;-webkit-transition:0.8s cubic-bezier(0.2,0.8,0.2,1);transition:0.8s cubic-bezier(0.2,0.8,0.2,1);}.HeaderGroup.jsx-1559248198{grid-area:table;margin:0 auto;display:grid;grid-template-columns:.3fr 1fr 1fr 1fr .3fr;grid-template-areas: '. header .  menu .';grid-gap:10px;padding:10px;padding-top:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center;justify-self:center;}.Header.jsx-1559248198 a.jsx-1559248198{color:white;font-weight:700;}.FactomIcon.jsx-1559248198{margin-left:1rem;width:13rem;grid-area:header;justify-self:start;}.FactomIcon.jsx-1559248198 h1.jsx-1559248198{margin:9px 0 0 0;}.BTCorETH.jsx-1559248198{display:grid;grid-template-columns:repeat(2,auto);justify-self:end;grid-area:menu;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.BTCorETH.jsx-1559248198 a.jsx-1559248198{position:relative;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 2.4rem;font-size:1.4rem;font-weight:600;color:#FFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRG9CLEFBRzhCLEFBVUUsQUFVQyxBQWVKLEFBSUssQUFNQSxBQUdKLEFBT0ssWUFuQkYsQ0FuQzRCLEFBZ0ROLEVBdENqQixDQVVQLENBbUJGLEFBTWhCLENBVW9CLFVBbkJwQixDQUlxQixDQW5CSixJQW1DTyxFQTdDUCxPQVcrQixHQW1CekIsR0E3QlIsQ0FxQ00sSUFRRyxHQXhEOEIsR0FZeEMsS0E2QmQsRUFRbUIsR0FuQ0ksSUEyQ04sUUFQTyxLQTFCQSxFQVQyQixnQkFYWCx3QkFxQnRCLGNBQ0QsS0FnQ1ksUUEvQlQsaUJBQ0csQUErQkcsTUFSMUIsTUFuQ0EsVUE0Q3VCLCtCQXZERCxrQkFDdEIsc0JBdUJ5QixxQkFDRCxDQStCSCxpQkFDQSxFQS9CckIsZUFnQ29CLGdCQUNMLFdBRWYiLCJmaWxlIjoiL1VzZXJzL2pvc2h1YWJyaWdhdGkvZ28vc3JjL2dpdGh1Yi5jb20vRmFjdG9tUHJvamVjdC9BbmNob3JNb25pdG9yL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEZhY3RvbUljb24gZnJvbSAnLi4vYXNzZXRzL2ZhY3RvbV9ob3Jpem9udGFsX3doaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnZUxheW91dFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiSGVhZGVyR3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL0JUQ2B9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJGYWN0b21JY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+PEZhY3RvbUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5GYWN0b20gQW5jaG9yIE1vbml0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQlRDb3JFVEhcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9CVENgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJUQ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvRVRIYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFVEhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8Zm9vdGVyPnsnSWBtIGhlcmUgdG8gc3RheSd9PC9mb290ZXI+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLlBhZ2VMYXlvdXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuM2ZyIDFmciAxZnIgMWZyIC4zZnI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgN3JlbSBtaW5tYXgoMTAwcHgsIDk4MHB4KSAxZnI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgXCIuIG1haW5oZWFkZXIgbWFpbmhlYWRlciBtYWluaGVhZGVyIC5cIlxuICAgICAgICAgICAgICAgIFwiLiB0YWJsZSB0YWJsZSB0YWJsZSAuXCJcbiAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcIjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuSGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtYWluaGVhZGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQyQzNDO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuOHMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkhlYWRlckdyb3VwIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRhYmxlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuM2ZyIDFmciAxZnIgMWZyIC4zZnI7XG5cbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgICcuIGhlYWRlciAuICBtZW51IC4nO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MzBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5IZWFkZXIgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuRmFjdG9tSWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzcmVtO1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuRmFjdG9tSWNvbiBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuQlRDb3JFVEgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtZW51O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkJUQ29yRVRIIGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyLjRyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/components/Layout.js */"
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var name = this.state.name;
      var data = this.props.data;
      console.log("client data", data);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Bitcoin Anchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3562997507" + " " + "Hero"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3562997507" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3562997507"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-3562997507" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-3562997507"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-3562997507"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3562997507" + " " + "headerheight"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3562997507" + " " + "headertime"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3562997507" + " " + "headerkeymr"
      }, "KEYMR"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-3562997507"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-3562997507" + " " + "anchor-row"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--height"),
          style: {
            paddingLeft: "1.5rem !important"
          },
          className: "jsx-3562997507" + " " + "bodyheight"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-3562997507" + " " + "bodystarted"
        }, anchor.started_at), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-3562997507" + " " + "bodykeymr"
        }, anchor.keymr));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3562997507",
        css: ".Hero.jsx-3562997507{background-size:cover;background-position:center;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);}.HeroGroup.jsx-3562997507{margin:0 auto;padding:3rem 3.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:5rem minmax(300px,780px) 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.Hero.jsx-3562997507 h1.jsx-3562997507{margin:0;grid-area:tableheader;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;opacity:0;-webkit-animation:HeroAnimation-jsx-3562997507 3s;animation:HeroAnimation-jsx-3562997507 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.Hero.jsx-3562997507 p.jsx-3562997507{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-3562997507 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-3562997507 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}.Hero.jsx-3562997507 a.jsx-3562997507{font-size:17px;font-weight:600;color:white;text-transform:uppercase;background:rgba(0,0,0,0.7);padding:9px 20px;border:1px solid rgba(255,255,255,0.25);border-radius:20px;-webkit-transition:0.8s cubic-bezier(0.2,0.8,0.2,1);transition:0.8s cubic-bezier(0.2,0.8,0.2,1);}.Hero.jsx-3562997507 a.jsx-3562997507:hover{background:white;color:black;}table.jsx-3562997507{display:block;overflow-x:auto;border-collapse:collapse;text-align:left;white-space:nowrap;}table.jsx-3562997507 thead.jsx-3562997507,table.jsx-3562997507 tbody.jsx-3562997507{display:grid;}table.jsx-3562997507 tr.jsx-3562997507{display:grid;grid-template-columns:minmax(100px,200px) minmax(100px,300px) minmax(100px,1fr);grid-template-areas:\" colheight coltime colkeymr\";}table.jsx-3562997507 thead.jsx-3562997507 th.jsx-3562997507{background:#E8E8E8;font-size:60%;padding:1.5rem;font-weight:600;}.headerheight.jsx-3562997507 .bodyheight.jsx-3562997507{grid-area:colheight;padding-right:0;}.headertime.jsx-3562997507 .bodystarted.jsx-3562997507{grid-area:coltime;}.headerkeymr.jsx-3562997507{grid-area:colkeymr;}thead.jsx-3562997507 th.jsx-3562997507:not(:first-child){padding-left:0 !important;}tbody.jsx-3562997507 td.jsx-3562997507{font-size:60%;padding:1.5rem;color:#4A4A4A;border-bottom:1px solid #E9E9E9;}tbody.jsx-3562997507 td.jsx-3562997507:not(:first-child){padding-left:0 !important;}.bodykeymr.jsx-3562997507{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}@media (max-width:640px){.HeroGroup.jsx-3562997507{padding:100px 20px;}.Hero.jsx-3562997507 h1.jsx-3562997507{font-size:40px;}.Hero.jsx-3562997507 p.jsx-3562997507{font-size:24px;}}@-webkit-keyframes HeroAnimation-jsx-3562997507{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-3562997507{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG1DLEFBRytDLEFBVVIsQUFjTCxBQWFzQixBQU9oQixBQVdFLEFBSUgsQUFRRCxBQUdBLEFBS00sQUFNRSxBQUlILEFBR0MsQUFHTyxBQUdaLEFBTVksQUFHWixBQVFTLEFBSUosQUFJQSxBQUtMLEFBS0EsU0F4R1EsQ0FvR1MsQUFLRCxHQTlEbEMsQUFHdUYsQ0EzRC9ELEFBZ0RKLEFBbUNELEFBU3NCLENBM0RyQixBQXVFaEIsQUFJQSxFQWhFWSxDQThCaEIsQ0FWa0IsQUFhbEIsQUF1QkksQ0E5QmdCLEVBakZXLElBMkYvQixBQVNBLEVBL0RtQixDQW1CbkIsQUF1Q2tCLENBbkNXLENBbkNOLEFBb0JQLEVBK0JHLENBaEVGLEVBc0VqQixPQTVDb0IsQUFRUyxBQWtETyxJQW5GRixDQWdFZCxDQTVFQSxDQXlCTCxBQThFSyxLQTNDQSxJQXRCd0QsRUFaekQsR0FtRG5CLENBNUV5QixDQXVHRSxFQTFETyxHQWVYLEVBaERtQyxFQW1GMUQsQ0FyRW9CLFVBekJOLEdBdUdkLENBM0NBLEVBbENvQixDQTBDa0MsRUF2QmpDLENBNUNELElBOEhoQixHQUxBLEtBL0ZVLElBekJxQyxBQTRDSixNQWxCZCxHQWJaLHNCQXNEckIsU0F0QnVCLE1BNUNtQixhQTZDUyxXQWhDekIsYUFaMUIsS0Fhc0IsVUFZVyxRQVhqQyxpQkFtQmMsVUFDZCxzQkFXQSxTQW5CNkQsb0hBQzdEIiwiZmlsZSI6Ii9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSA9PT0gJ0JUQycgPyAnQml0Y29pbicgOiBwcm9wcy5uYW1lID09PSAnRVRIJyA/ICdFdGhlcmV1bScgOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5OiB7IG5hbWUsIGRhdGEgfSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZTogXCIsIG5hbWUpXG4gICAgICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIGRhdGE6IGRhdGEgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgZGF0YVwiLCBkYXRhKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPSdCaXRjb2luIEFuY2hvcnMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlbmRpbmcge25hbWV9IEFuY2hvcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkZ1bGxUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcmhlaWdodFwiPkhFSUdIVDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVydGltZVwiPlNUQVJUIFRJTUU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcmtleW1yXCI+S0VZTVI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGFuY2hvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YCR7YW5jaG9yLl9pZH1gfSBjbGFzc05hbWU9XCJhbmNob3Itcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLWhlaWdodGB9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEuNXJlbSAhaW1wb3J0YW50XCIgfX0gY2xhc3NOYW1lPVwiYm9keWhlaWdodFwiPnthbmNob3IuaGVpZ2h0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLXN0YXJ0ZWRfYXRgfSBjbGFzc05hbWU9XCJib2R5c3RhcnRlZFwiPnthbmNob3Iuc3RhcnRlZF9hdH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1rZXltcmB9IGNsYXNzTmFtZT1cImJvZHlrZXltclwiPnthbmNob3Iua2V5bXJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PVwidHJ1ZVwiPntgXG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDVyZW0gbWlubWF4KDMwMHB4LCA3ODBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlZm9vdGVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGFibGVoZWFkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uICAzcyA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogSGVyb0FuaW1hdGlvbiAzcyAwLjJzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjhzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVybyBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB0aGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSAgdHIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAyMDBweCkgbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDEwMHB4LCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgY29saGVpZ2h0IGNvbHRpbWUgY29sa2V5bXJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB0aGVhZCB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRThFOEU4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJoZWlnaHQgLmJvZHloZWlnaHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAgY29saGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVydGltZSAuYm9keXN0YXJ0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb2x0aW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJrZXltciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbGtleW1yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRib2R5IHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U5RTlFOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWtleW1yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIEhlcm9BbmltYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuLy8gY29uc3QgU3R5bGV6ID0gKCkgPT4gKFxuXG4vLyApIl19 */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          name = _ref$query.name,
          data = _ref$query.data;
      console.log("name: ", name);
      return {
        name: name,
        data: data
      };
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // const Stylez = () => (
// )




/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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