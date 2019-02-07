webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Bitcoin Anchors"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Hero"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "START TIME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "KEYMR"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stylez, null));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var name = _ref.query.name;
      return {
        name: name
      };
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var Stylez = function Stylez() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true
  }, "\n        .Hero {\n            background-size: cover;\n            background-position: center;\n            grid-area: table;\n            border-radius: 0.4rem;\n            z-index: 1;\n            background: #FFF;\n            -webkit-box-shadow: 0 0 8px 0 rgba(0,0,0, 0.12);\n            box-shadow: 0 0 8px 0 rgba(0,0,0, 0.9);\n        }\n        .HeroGroup {\n            margin: 0 auto;\n            // max-width: 500px;\n            // padding: 150px 50px;\n            display: grid;\n                grid-template-columns: 1fr;\n                grid-template-rows:  4rem 65vh 2fr;\n                grid-template-areas: \n                \"tableheader\"\n                \"tablebody\"\n                \"tablefooter\";\n                grid-row-gap: 15px;\n            text-align: center;\n        }\n        .Hero h1 {\n            margin: 0;\n            color: #000;;\n            font-size: 60px;\n            line-height: 1.2;\n            opacity: 0;\n            animation: HeroAnimation  3s ;\n            animation-fill-mode: forwards; \n            animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);\n        }\n        .Hero p {\n            color: rgba(255, 255, 255, 0.8);\n            font-size: 30px;\n            line-height: 1.5;\n            animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);\n            opacity: 0;\n        }\n        .Hero a {\n            font-size: 17px;\n            font-weight: 600;\n            color: white;\n            text-transform: uppercase;\n            background: rgba(0, 0, 0, 0.7);\n            padding: 9px 20px;\n            border: 1px solid rgba(255, 255, 255, 0.25);\n            border-radius: 20px;\n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        }\n        .Hero a:hover {\n            background: white;\n            color: black;\n        }\n        @media (max-width: 640px) {\n            .HeroGroup {\n                padding: 100px 20px;\n            }\n        \n            .Hero h1 {\n                font-size: 40px;\n            }\n        \n            .Hero p {\n                font-size: 24px;\n            }\n        }\n        @keyframes HeroAnimation {\n            0% {\n                opacity: 0;\n                transform: translateY(20px);\n            }\n        \n            100% {\n                opacity: 1;\n                transform: translateY(0px);\n            }\n        }\n    ");
};
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.323ae92617aad09936da.hot-update.js.map