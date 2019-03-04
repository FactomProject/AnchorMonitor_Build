webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

      _this.setState({
        pendingNoti: event.target.value
      });
    });

    _this.state = {
      name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null,
      offNotiToggle: false,
      pendingNotiToggle: false,
      lastOff: _this.props.lastOff,
      pendingNoti: _this.props.pendingNoti
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
          lastOff = _this$state.lastOff,
          pendingNoti = _this$state.pendingNoti;
      var _this$props = this.props,
          data = _this$props.data,
          lastConf = _this$props.lastConf,
          balance = _this$props.balance;
      var offHolder = "30 Minutes";

      if (lastOff !== offHolder) {
        offHolder = lastOff === "1" || lastOff === 1 ? "1 hour" : "".concat(lastOff, " hours");
      }

      var countHolder = "1 Block";
      countHolder = pendingNoti === 1 || pendingNoti === "1" ? "".concat(pendingNoti, " Block") : "".concat(pendingNoti, " Blocks");
      data = [];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Bitcoin Anchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "Hero"
      }, Array.isArray(data) ? data.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3190197109"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "tableHeaderContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "offNoti ",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-3190197109" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3190197109"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuOffNoti,
        className: "jsx-3190197109" + " " + "placeholder \n                                                            ".concat(offHolder.length === "30 Minutes".length ? "" : null, "\n                                                            ").concat(offHolder.length === "1 hour".length ? "short" : null, "\n                                                            ").concat(offHolder.length === "3 hours".length ? "singlehours" : null, "\n                                                            ").concat(offHolder.length === "12 hours".length ? "doublehours" : null, "\n                                                            ")
      }, offHolder), offNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3190197109"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "30",
        className: "jsx-3190197109"
      }, "30 Minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "1",
        className: "jsx-3190197109"
      }, "1 hour"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "3",
        className: "jsx-3190197109"
      }, "3 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "6",
        className: "jsx-3190197109"
      }, "6 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "9",
        className: "jsx-3190197109"
      }, "9 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "12",
        className: "jsx-3190197109"
      }, "12 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "24",
        className: "jsx-3190197109"
      }, "24 hours")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3190197109"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "pendingNoti",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-3190197109" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3190197109"
      }, "Pending count before notifying: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuPendingNoti,
        className: "jsx-3190197109" + " " + "placeholder \n                                                            ".concat(countHolder.length === "1 Block".length ? "small" : null, "\n                                                            ").concat(countHolder.length === "2 Blocks".length ? "doublehours" : null, "\n                                                            ").concat(countHolder.length === "18 Blocks".length ? "doubleblks" : null, "\n                                                            ").concat(countHolder.length === "144 Blocks".length ? "tripleblks" : null, "\n                                                            ")
      }, countHolder), pendingNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3190197109"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "1",
        className: "jsx-3190197109"
      }, "1 Block"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "2",
        className: "jsx-3190197109"
      }, "2 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "4",
        className: "jsx-3190197109"
      }, "4 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "9",
        className: "jsx-3190197109"
      }, "9 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "18",
        className: "jsx-3190197109"
      }, "18 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "36",
        className: "jsx-3190197109"
      }, "36 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "72",
        className: "jsx-3190197109"
      }, "72 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "144",
        className: "jsx-3190197109"
      }, "144 Blocks")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3190197109"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          gridArea: "otherHeaderInfo"
        },
        className: "jsx-3190197109"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        id: "style-7",
        className: "jsx-3190197109" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-3190197109"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-3190197109"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3190197109" + " " + "headerheight"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3190197109" + " " + "headertime"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3190197109" + " " + "headerkeymr"
      }, "KEYMR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3190197109" + " " + "headerbtchash"
      }, "BTC HASH"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-3190197109"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-3190197109" + " " + "anchor-row"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--height"),
          style: {
            paddingLeft: "1.5rem !important"
          },
          className: "jsx-3190197109" + " " + "bodyheight"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-3190197109" + " " + "bodystarted"
        }, moment__WEBPACK_IMPORTED_MODULE_3___default()(anchor.started_at).format('YYYY-MM-DD HH:mm')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-3190197109" + " " + "bodykeymr"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "http://explorer.factom.com/dblocks/".concat(anchor.keymr),
          target: "_blank",
          className: "jsx-3190197109"
        }, anchor.keymr)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--btchash"),
          className: "jsx-3190197109" + " " + "bodybtchash"
        }, anchor.btc_hash === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          style: {
            color: "#4A4A4A"
          },
          className: "jsx-3190197109"
        }, "BTC has not recieved transaction yet.") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://www.blockchain.com/btc/tx/".concat(anchor.btc_hash),
          target: "_blank",
          className: "jsx-3190197109"
        }, anchor.btc_hash)));
      })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3190197109"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "tableHeaderContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "offNoti ",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-3190197109" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3190197109"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuOffNoti,
        className: "jsx-3190197109" + " " + "placeholder \n                                                            ".concat(offHolder.length === "30 Minutes".length ? "" : null, "\n                                                            ").concat(offHolder.length === "1 hour".length ? "short" : null, "\n                                                            ").concat(offHolder.length === "3 hours".length ? "singlehours" : null, "\n                                                            ").concat(offHolder.length === "12 hours".length ? "doublehours" : null, "\n                                                            ")
      }, offHolder), offNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3190197109"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "30",
        className: "jsx-3190197109"
      }, "30 Minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "1",
        className: "jsx-3190197109"
      }, "1 hour"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "3",
        className: "jsx-3190197109"
      }, "3 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "6",
        className: "jsx-3190197109"
      }, "6 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "9",
        className: "jsx-3190197109"
      }, "9 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "12",
        className: "jsx-3190197109"
      }, "12 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "24",
        className: "jsx-3190197109"
      }, "24 hours")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3190197109"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "pendingNoti",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-3190197109" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3190197109"
      }, "Pending count before notifying: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuPendingNoti,
        className: "jsx-3190197109" + " " + "placeholder \n                                                            ".concat(countHolder.length === "1 Block".length ? "small" : null, "\n                                                            ").concat(countHolder.length === "2 Blocks".length ? "doublehours" : null, "\n                                                            ").concat(countHolder.length === "18 Blocks".length ? "doubleblks" : null, "\n                                                            ").concat(countHolder.length === "144 Blocks".length ? "tripleblks" : null, "\n                                                            ")
      }, countHolder), pendingNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3190197109"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "1",
        className: "jsx-3190197109"
      }, "1 Block"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "2",
        className: "jsx-3190197109"
      }, "2 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "4",
        className: "jsx-3190197109"
      }, "4 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "9",
        className: "jsx-3190197109"
      }, "9 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "18",
        className: "jsx-3190197109"
      }, "18 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "36",
        className: "jsx-3190197109"
      }, "36 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "72",
        className: "jsx-3190197109"
      }, "72 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "144",
        className: "jsx-3190197109"
      }, "144 Blocks")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3190197109"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          gridArea: "otherHeaderInfo"
        },
        className: "jsx-3190197109"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "NoAnchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          marginTop: "20%"
        },
        className: "jsx-3190197109"
      }, "No pending Anchors!"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3190197109"
      }, "Pending ", name, " Anchors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3190197109"
      }, data))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3190197109",
        css: ".jsx-3190197109{*/;}.Hero.jsx-3190197109{max-width:1400px;justify-self:center;width:-webkit-fill-available;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);-webkit-animation:HeroAnimation-jsx-3190197109 3s;animation:HeroAnimation-jsx-3190197109 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.HeroGroup.jsx-3190197109{margin:0 auto;padding:2rem 2.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:9rem minmax(300px,720px) 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.HeroGroupHeader.jsx-3190197109{grid-area:tableheader;display:grid;grid-template-rows:repeat(2,1fr);}.HeroGroupHeader.jsx-3190197109 small.jsx-3190197109{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;font-weight:600;}.tableHeaderContent.jsx-3190197109{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;grid-template-areas: \"pendingNoti .\" \"offNoti otherHeaderInfo\";grid-column-gap:10px;}.Hero.jsx-3190197109 h1.jsx-3190197109{margin:0;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;}.Hero.jsx-3190197109 p.jsx-3190197109{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-3190197109 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-3190197109 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}table.jsx-3190197109{display:block;overflow-x:auto;border-collapse:collapse;text-align:left;white-space:nowrap;}#style-7.jsx-3190197109::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:#F5F5F5;}#style-7.jsx-3190197109::-webkit-scrollbar{width:10px;background-color:#F5F5F5;}#style-7.jsx-3190197109::-webkit-scrollbar-thumb{background-image:-webkit-gradient(linear, 40% 0%, 75% 84%, from(#142C3C), to(#142C3C), color-stop(.7,#142c3cb8));}table.jsx-3190197109 thead.jsx-3190197109,table.jsx-3190197109 tbody.jsx-3190197109{display:grid;}table.jsx-3190197109 tr.jsx-3190197109{display:grid;grid-template-columns:minmax(100px,170px) minmax(100px,200px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight coltime colkeymr colbtchash \";}table.jsx-3190197109 thead.jsx-3190197109 th.jsx-3190197109{background:#E8E8E8;font-size:70%;padding:1.2rem;font-weight:600;}table.jsx-3190197109 thead.jsx-3190197109 th.jsx-3190197109:first-child{border-top-left-radius:0.4rem;border-bottom-left-radius:0.4rem;}.headerheight.jsx-3190197109 .bodyheight.jsx-3190197109{grid-area:colheight;padding-right:0;}.headertime.jsx-3190197109 .bodystarted.jsx-3190197109{grid-area:coltime;}.headerkeymr.jsx-3190197109{grid-area:colkeymr;}.headerbtchash.jsx-3190197109{grid-area:colbtchash;}thead.jsx-3190197109 th.jsx-3190197109:not(:first-child){padding-left:0 !important;}tbody.jsx-3190197109 td.jsx-3190197109{font-size:70%;padding:1.5rem;-webkit-letter-spacing:1.2px;-moz-letter-spacing:1.2px;-ms-letter-spacing:1.2px;letter-spacing:1.2px;color:#4A4A4A;border-bottom:1px solid #E9E9E9;}tbody.jsx-3190197109 td.jsx-3190197109:not(:first-child){padding-left:0 !important;}.bodykeymr.jsx-3190197109{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodykeymr.jsx-3190197109 a.jsx-3190197109{text-transform:none;background:none;color:#388FC9;}.bodybtchash.jsx-3190197109{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodybtchash.jsx-3190197109 a.jsx-3190197109{text-transform:none;background:none;color:#388FC9;}.custom-dropdown.jsx-3190197109 select.jsx-3190197109{background-color:#2c3e50;color:#fff;font-size:inherit;padding:.5em;padding-right:2.5em;border:0;margin:0;border-radius:3px;text-indent:0.01px;text-overflow:'';-webkit-appearance:button;}.custom-dropdown.jsx-3190197109::before,.custom-dropdown.jsx-3190197109::after{content:\"\";position:absolute;pointer-events:none;}.custom-dropdown.jsx-3190197109::after{content:\"\u25BC\";height:1em;font-size:.625em;line-height:1;right:1.2em;top:50%;margin-top:-.5em;}.custom-dropdown.jsx-3190197109::before{width:2em;right:0;top:0;bottom:0;border-radius:0 3px 3px 0;}.custom-dropdown.jsx-3190197109 select[disabled].jsx-3190197109{color:rgba(0,0,0,.3);}.custom-dropdown.jsx-3190197109 select[disabled].jsx-3190197109::after{color:rgba(0,0,0,.1);}.custom-dropdown.jsx-3190197109::before{background-color:rgba(0,0,0,.15);}.custom-dropdown.jsx-3190197109::after{color:rgba(0,0,0,.4);}.select.jsx-3190197109{position:relative;display:block;width:100%;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;}.placeholder.jsx-3190197109{position:relative;display:block;top:6px;background-color:#142C3C;z-index:1;padding:.5em;border-radius:0.4rem;cursor:pointer;font-size:70%;color:#cccccc;height:20px;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.placeholder.jsx-3190197109:hover{background:darken(#142C3C,2%);}.placeholder.jsx-3190197109:after{position:absolute;margin-left:2em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:'FontAwesome';content:'\u25BC';z-index:10;font-size:70%;}.short.jsx-3190197109:after{margin-left:5.5em;}.singlehours.jsx-3190197109:after{margin-left:4.5em;}.doublehours.jsx-3190197109:after{margin-left:3.8em;}.doubleblks.jsx-3190197109:after{margin-left:3.25em;}.tripleblks.jsx-3190197109:after{margin-left:2.3em;}.small.jsx-3190197109:after{position:absolute;margin-left:4.7em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:'FontAwesome';content:'\u25BC';z-index:10;font-size:70%;}ul.jsx-3190197109{position:absolute;overflow:hidden;overflow-y:auto;width:35%;background:#fff;border-radius:2px;top:100%;left:64.5%;list-style:none;margin:5px 0 0 0;padding:0;z-index:100;box-shadow:0 0 8px 0 rgba(0,0,0,0.9);}li.jsx-3190197109{display:block;text-align:left;padding:0.8em 1em 0.8em 1em;color:#999;cursor:pointer;font-size:70%;}li.jsx-3190197109:hover{background:#4ebbf0;color:#fff;}@media (min-width:1235px){tbody.jsx-3190197109 td.jsx-3190197109:first-child .headerheight.jsx-3190197109{padding-left:2rem;}}@media (max-width:830px){.tableHeaderContent.jsx-3190197109{display:grid;grid-template-columns:auto;grid-template-rows:auto 1fr 45px;grid-template-areas: \"offNoti\" \"pendingNoti\" \"otherHeaderInfo\";grid-column-gap:10px;grid-row-gap:10px;}.tableHeaderContent.jsx-3190197109 small.jsx-3190197109{justify-self:start;}.HeroGroup.jsx-3190197109{padding:30px 20px;grid-template-rows:10rem minmax(300px,720px) 2fr;}}@media (max-width:700px){table.jsx-3190197109 tr.jsx-3190197109{grid-template-columns:minmax(100px,170px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight colkeymr colbtchash \";}.headertime.jsx-3190197109,.bodystarted.jsx-3190197109{display:none;}}@media (max-width:686px){.HeroGroup.jsx-3190197109{padding:30px 20px;grid-template-rows:10rem minmax(300px,720px) 2fr;}}@media (max-width:644px){.tableHeaderContent.jsx-3190197109{display:grid;grid-template-columns:auto;grid-template-rows:auto 1fr 45px;grid-template-areas: \"offNoti\" \"pendingNoti\" \"otherHeaderInfo\";grid-column-gap:10px;grid-row-gap:10px;}.Hero.jsx-3190197109 h1.jsx-3190197109{font-size:35px;font-weight:400;}.Hero.jsx-3190197109 p.jsx-3190197109{font-size:24px;}}@media (max-width:506px){.Hero.jsx-3190197109 h1.jsx-3190197109{font-size:25px;font-weight:400;}.Hero.jsx-3190197109 p.jsx-3190197109{font-size:24px;}.headertime.jsx-3190197109{display:none;}}@-webkit-keyframes HeroAnimation-jsx-3190197109{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-3190197109{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnUG1DLEFBRzBDLEFBY0gsQUFhUSxBQUtMLEFBS0osQUFTSixBQVFzQixBQU9qQixBQVFtQyxBQUl0QyxBQVNFLEFBTUEsQUFHQSxBQUtNLEFBTVcsQUFJVCxBQUlILEFBR0MsQUFHRSxBQUlLLEFBR1osQUFPWSxBQUdaLEFBTU0sQUFLTixBQU1NLEFBWUssQUFjZCxBQU1DLEFBVUYsQUFRVyxBQUlBLEFBSVksQUFJWixBQUNGLEFBSUQsQUFRQSxBQWNZLEFBR1osQUFVQSxBQUdBLEFBR0EsQUFHQyxBQUdELEFBR0EsQUFXQSxBQWVKLEFBUUssQUFPRyxBQUtMLEFBV00sQUFHRCxBQU00RCxBQUlqRSxBQUtLLEFBTUwsQUFZRSxBQUtBLEFBTUEsQUFLQSxBQUlGLEFBTUgsQUFLQSxHQUl0QixNQTVWMkIsQ0FrSlgsQUFrTXVCLEFBS0QsQ0E5VEwsQUF1R1AsQ0FNUCxDQWpKb0IsQUFtRG5DLEFBR3NHLEFBOE5uRSxBQXdCL0IsQUFXK0IsQUFnQy9CLENBOVdvQixBQStDSixBQThERCxBQVVzQixBQVdBLEFBcUpyQixDQW1FSSxBQUtwQixBQU1vQixBQUtwQixFQXhYb0IsQUFnQ0wsQ0E4RW5CLEFBbUZVLEFBd0JRLEFBUUEsQUFpQkUsQUFVcEIsQUFHQSxBQUdBLEFBTUEsQUFHc0IsQUFXRixBQThCaEIsQUFtQnFELEFBZUEsQ0F0UHZDLEFBaUJsQixBQW9KQSxBQXdDZSxBQXVCWCxDQTFOZ0IsQUFpQ0EsQUFXQSxDQWpDcEIsQUFtRkEsQUFJQSxBQVFBLENBekxpQixDQTRKSSxDQVdSLENBaENFLENBMUNmLEFBVUEsRUFuRmUsQUFPSSxDQXNFTSxBQXFERCxDQW5ISyxBQXdDUSxBQXlJckMsQUF1RGdDLEFBUWhDLENBMkRJLEFBV0EsQ0ExSlcsQUFRSCxDQWpJTyxBQWtHVyxBQWE5QixDQWpNaUIsQUFvT0wsQUFvQ1EsQ0EzUGtCLENBOEN0QyxBQWlDQSxBQWlDa0IsQUFXQSxBQVlJLEFBeUdWLENBM1FxQixFQStDZCxDQXdJRCxBQTJDVyxBQXVGYSxBQW1DQSxFQXpHWCxDQTdMWCxBQW9LQSxDQXJMaUIsQUF1T04sR0E3UEcsQ0FrRmQsQ0E3QlMsQUE2RzdCLENBNUNvQixBQU9wQixBQUlvQixBQU9wQixBQWdJYyxJQXZPTSxBQW1ISCxBQXFCRCxDQTFISSxHQXdPTCxDQS9PNkQsQUE0STVFLEFBd0JxQixDQTZERCxHQWxMcEIsQ0FKQSxDQWlJYyxDQWxPTSxBQXFJTyxBQVdBLEFBd0NmLENBckJZLEFBbUtwQixBQWVBLENBMVRKLENBMlFtQixDQXRQQyxDQWNHLENBdkJVLENBeEJ3QixBQTZTNUIsQUFtQ0EsQ0EzUjdCLEFBcUhxQixDQTBDSixDQXFESyxFQW9EbkIsQ0E3U2lCLEdBOUJLLEVBc1NQLEVBdFBsQixDQW1IYSxDQWdFWSxDQTlGekIsQUFXQSxDQWxGQSxDQTJIQSxHQStGYSxDQXpQYixDQXFJYSxFQW1JYixFQThGSSxHQXBZVSxBQXdSQyxBQXVHWCxFQTNOa0IsSUErREgsRUEzSStDLEVBdkY5QyxBQThFcEIsQ0EwTW9CLE9BeFFDLEVBb0pFLENBK0RMLEtBbE9pQyxDQXVIakMsQUFpS0csRUFnRGpCLEdBcFNxQixBQTJNSyxDQTBFRCxBQW1DQSxDQXBGQyxDQXJDWixJQS9ERyxFQTVDZSxBQStGTCxHQWtFakIsS0FyREUsSUEvTGhCLENBcVBnQixBQWdDVSxBQW1DQSxFQXhMSSxFQTJFZCxFQXlCQSxDQXBDRyxLQXNEc0IsRUFuRXpDLEVBaklBLEFBMEplLEVBaFAyQixBQXlRM0IsQUFpRFgsQUFtQ0EsQ0FyT0osTUF6RzBCLEVBa09SLENBNUVsQixDQXFHa0IsWUF4QmxCLEVBbE9zQixBQTJQdEIsTUFnQkEsTUExUmlDLE1BZ0JqQyxRQW9OQSxTQW5MYyxVQUNkLDJEQWpEaUMsa0VBQzRCLG9IQUM3RCIsImZpbGUiOiIvVXNlcnMvam9zaHVhYnJpZ2F0aS9nby9zcmMvZ2l0aHViLmNvbS9GYWN0b21Qcm9qZWN0L0FuY2hvck1vbml0b3IvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lID09PSAnQlRDJyA/ICdCaXRjb2luJyA6IHByb3BzLm5hbWUgPT09ICdFVEgnID8gJ0V0aGVyZXVtJyA6IG51bGwsXG4gICAgICAgICAgICBvZmZOb3RpVG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHBlbmRpbmdOb3RpVG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RPZmY6IHRoaXMucHJvcHMubGFzdE9mZixcbiAgICAgICAgICAgIHBlbmRpbmdOb3RpOiB0aGlzLnByb3BzLnBlbmRpbmdOb3RpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93TWVudU9mZk5vdGkgPSB0aGlzLnNob3dNZW51T2ZmTm90aS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlTWVudU9mZk5vdGkgPSB0aGlzLmNsb3NlTWVudU9mZk5vdGkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vZmZOb3RpU2VsZWN0ID0gdGhpcy5vZmZOb3RpU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd01lbnVQZW5kaW5nTm90aSA9IHRoaXMuc2hvd01lbnVQZW5kaW5nTm90aS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlTWVudVBlbmRpbmdOb3RpID0gdGhpcy5jbG9zZU1lbnVQZW5kaW5nTm90aS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdOb3RpU2VsZWN0ID0gdGhpcy5wZW5kaW5nTm90aVNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIE1haW4uZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgIH0sIDIwMDApXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5OiB7IG5hbWUsIGRhdGEsIGxhc3RDb25mLCBiYWxhbmNlLCBsYXN0T2ZmLCBwZW5kaW5nTm90aSB9IH0pIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgZGF0YTogZGF0YSwgbGFzdENvbmY6IGxhc3RDb25mLCBiYWxhbmNlOiBiYWxhbmNlLCBsYXN0T2ZmOiBsYXN0T2ZmLCBwZW5kaW5nTm90aTogcGVuZGluZ05vdGkgfVxuICAgIH1cblxuICAgIHNob3dNZW51T2ZmTm90aSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb2ZmTm90aVRvZ2dsZTogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51T2ZmTm90aSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlTWVudU9mZk5vdGkgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvZmZOb3RpVG9nZ2xlOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51T2ZmTm90aSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9mZk5vdGlTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gMzApIHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9vZmZub3RpZmljYXRpb25jaGFuZ2VgLCBudWxsLCB7IHBhcmFtczogeyB0aW1lOiBcIjMwIE1pbnV0ZXNcIiB9IH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsYXN0T2ZmOiBcIjMwIE1pbnV0ZXNcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9vZmZub3RpZmljYXRpb25jaGFuZ2VgLCBudWxsLCB7IHBhcmFtczogeyB0aW1lOiBldmVudC50YXJnZXQudmFsdWUgfSB9KS50aGVuKHRoaXMuZm9yY2VVcGRhdGUoKSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxhc3RPZmY6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51UGVuZGluZ05vdGkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlbmRpbmdOb3RpVG9nZ2xlOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnVQZW5kaW5nTm90aSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlTWVudVBlbmRpbmdOb3RpID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGVuZGluZ05vdGlUb2dnbGU6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnVQZW5kaW5nTm90aSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBlbmRpbmdOb3RpU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wZW5kaW5ndGltZW5vdGlmaWNhdGlvbmAsIG51bGwsIHsgcGFyYW1zOiB7IHRpbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9IH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBlbmRpbmdOb3RpOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IG5hbWUsIHBlbmRpbmdOb3RpVG9nZ2xlLCBvZmZOb3RpVG9nZ2xlLCBsYXN0T2ZmLCBwZW5kaW5nTm90aSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHsgZGF0YSwgbGFzdENvbmYsIGJhbGFuY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBvZmZIb2xkZXIgPSBcIjMwIE1pbnV0ZXNcIjtcbiAgICAgICAgaWYgKGxhc3RPZmYgIT09IG9mZkhvbGRlcikge1xuICAgICAgICAgICAgb2ZmSG9sZGVyID0gKGxhc3RPZmYgPT09IFwiMVwiIHx8IGxhc3RPZmYgPT09IDEpID8gXCIxIGhvdXJcIiA6IGAke2xhc3RPZmZ9IGhvdXJzYFxuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudEhvbGRlciA9IFwiMSBCbG9ja1wiO1xuICAgICAgICBjb3VudEhvbGRlciA9IChwZW5kaW5nTm90aSA9PT0gMSB8fCBwZW5kaW5nTm90aSA9PT0gXCIxXCIpID8gYCR7cGVuZGluZ05vdGl9IEJsb2NrYCA6IGAke3BlbmRpbmdOb3RpfSBCbG9ja3NgO1xuXG4gICAgICAgIGRhdGEgPSBbXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZT0nQml0Y29pbiBBbmNob3JzJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YSkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlbmRpbmcge25hbWV9IEFuY2hvcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7IGdyaWRBcmVhOiBcIm9mZk5vdGkgXCIsIGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjI1NXB4IDEzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBqdXN0aWZ5U2VsZjogXCJzdGFydFwiIH19PlR1cm4gb2ZmIG5vdGlmaWNhdGlvbnMgZm9yOiA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BwbGFjZWhvbGRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIzMCBNaW51dGVzXCIubGVuZ3RoID8gXCJcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29mZkhvbGRlci5sZW5ndGggPT09IFwiMSBob3VyXCIubGVuZ3RoID8gXCJzaG9ydFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIzIGhvdXJzXCIubGVuZ3RoID8gXCJzaW5nbGVob3Vyc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIxMiBob3Vyc1wiLmxlbmd0aCA/IFwiZG91YmxlaG91cnNcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfSBvbkNsaWNrPXt0aGlzLnNob3dNZW51T2ZmTm90aX0+e29mZkhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvZmZOb3RpVG9nZ2xlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMzBcIj4zMCBNaW51dGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjFcIj4xIGhvdXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiM1wiPjMgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiNlwiPjYgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiOVwiPjkgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMTJcIj4xMiBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIyNFwiPjI0IGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYW5nZW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7IGdyaWRBcmVhOiBcInBlbmRpbmdOb3RpXCIsIGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjI1NXB4IDEzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBqdXN0aWZ5U2VsZjogXCJzdGFydFwiIH19PlBlbmRpbmcgY291bnQgYmVmb3JlIG5vdGlmeWluZzogPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcGxhY2Vob2xkZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NvdW50SG9sZGVyLmxlbmd0aCA9PT0gXCIxIEJsb2NrXCIubGVuZ3RoID8gXCJzbWFsbFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y291bnRIb2xkZXIubGVuZ3RoID09PSBcIjIgQmxvY2tzXCIubGVuZ3RoID8gXCJkb3VibGVob3Vyc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y291bnRIb2xkZXIubGVuZ3RoID09PSBcIjE4IEJsb2Nrc1wiLmxlbmd0aCA/IFwiZG91YmxlYmxrc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y291bnRIb2xkZXIubGVuZ3RoID09PSBcIjE0NCBCbG9ja3NcIi5sZW5ndGggPyBcInRyaXBsZWJsa3NcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfSBvbkNsaWNrPXt0aGlzLnNob3dNZW51UGVuZGluZ05vdGl9Pntjb3VudEhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZW5kaW5nTm90aVRvZ2dsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxXCI+MSBCbG9jazwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMlwiPjIgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI0XCI+NCBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjlcIj45IEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMThcIj4xOCBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjM2XCI+MzYgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI3MlwiPjcyIEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMTQ0XCI+MTQ0IEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjaGFuZ2VtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGdyaWRBcmVhOiBcIm90aGVySGVhZGVySW5mb1wiIH19Pkxhc3QgQW5jaG9yOiB7bGFzdENvbmZ9IHwgQWRkcmVzcyBCYWxhbmNlOiB7YmFsYW5jZSAqIDAuMDAwMDAwMDF9IHwgQ291bnQ6IHtkYXRhLmxlbmd0aH0gfCA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiRnVsbFRhYmxlXCIgaWQ9XCJzdHlsZS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVyaGVpZ2h0XCI+SEVJR0hUPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcnRpbWVcIj5TVEFSVCBUSU1FPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcmtleW1yXCI+S0VZTVI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVyYnRjaGFzaFwiPkJUQyBIQVNIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGFuY2hvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgJHthbmNob3IuX2lkfWB9IGNsYXNzTmFtZT1cImFuY2hvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1oZWlnaHRgfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxLjVyZW0gIWltcG9ydGFudFwiIH19IGNsYXNzTmFtZT1cImJvZHloZWlnaHRcIj57YW5jaG9yLmhlaWdodH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLXN0YXJ0ZWRfYXRgfSBjbGFzc05hbWU9XCJib2R5c3RhcnRlZFwiPnttb21lbnQoYW5jaG9yLnN0YXJ0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbScpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0ta2V5bXJgfSBjbGFzc05hbWU9XCJib2R5a2V5bXJcIj48YSBocmVmPXtgaHR0cDovL2V4cGxvcmVyLmZhY3RvbS5jb20vZGJsb2Nrcy8ke2FuY2hvci5rZXltcn1gfSB0YXJnZXQ9XCJfYmxhbmtcIj57YW5jaG9yLmtleW1yfTwvYT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLWJ0Y2hhc2hgfSBjbGFzc05hbWU9XCJib2R5YnRjaGFzaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3IuYnRjX2hhc2ggPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzRBNEE0QVwiIH19PntgQlRDIGhhcyBub3QgcmVjaWV2ZWQgdHJhbnNhY3Rpb24geWV0LmB9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYnRjL3R4LyR7YW5jaG9yLmJ0Y19oYXNofWB9IHRhcmdldD1cIl9ibGFua1wiPnthbmNob3IuYnRjX2hhc2h9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvR3JvdXBIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGVuZGluZyB7bmFtZX0gQW5jaG9yczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RcIiBzdHlsZT17eyBncmlkQXJlYTogXCJvZmZOb3RpIFwiLCBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyNTVweCAxMzBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGp1c3RpZnlTZWxmOiBcInN0YXJ0XCIgfX0+VHVybiBvZmYgbm90aWZpY2F0aW9ucyBmb3I6IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BwbGFjZWhvbGRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIzMCBNaW51dGVzXCIubGVuZ3RoID8gXCJcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29mZkhvbGRlci5sZW5ndGggPT09IFwiMSBob3VyXCIubGVuZ3RoID8gXCJzaG9ydFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIzIGhvdXJzXCIubGVuZ3RoID8gXCJzaW5nbGVob3Vyc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIxMiBob3Vyc1wiLmxlbmd0aCA/IFwiZG91YmxlaG91cnNcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfSBvbkNsaWNrPXt0aGlzLnNob3dNZW51T2ZmTm90aX0+e29mZkhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2ZmTm90aVRvZ2dsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMzBcIj4zMCBNaW51dGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIxXCI+MSBob3VyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIzXCI+MyBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiNlwiPjYgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjlcIj45IGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIxMlwiPjEyIGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIyNFwiPjI0IGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYW5nZW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0XCIgc3R5bGU9e3sgZ3JpZEFyZWE6IFwicGVuZGluZ05vdGlcIiwgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMjU1cHggMTMwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBqdXN0aWZ5U2VsZjogXCJzdGFydFwiIH19PlBlbmRpbmcgY291bnQgYmVmb3JlIG5vdGlmeWluZzogPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHBsYWNlaG9sZGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb3VudEhvbGRlci5sZW5ndGggPT09IFwiMSBCbG9ja1wiLmxlbmd0aCA/IFwic21hbGxcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NvdW50SG9sZGVyLmxlbmd0aCA9PT0gXCIyIEJsb2Nrc1wiLmxlbmd0aCA/IFwiZG91YmxlaG91cnNcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NvdW50SG9sZGVyLmxlbmd0aCA9PT0gXCIxOCBCbG9ja3NcIi5sZW5ndGggPyBcImRvdWJsZWJsa3NcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NvdW50SG9sZGVyLmxlbmd0aCA9PT0gXCIxNDQgQmxvY2tzXCIubGVuZ3RoID8gXCJ0cmlwbGVibGtzXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0gb25DbGljaz17dGhpcy5zaG93TWVudVBlbmRpbmdOb3RpfT57Y291bnRIb2xkZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlbmRpbmdOb3RpVG9nZ2xlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMVwiPjEgQmxvY2s8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIyXCI+MiBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI0XCI+NCBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI5XCI+OSBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxOFwiPjE4IEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjM2XCI+MzYgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiNzJcIj43MiBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxNDRcIj4xNDQgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYW5nZW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBncmlkQXJlYTogXCJvdGhlckhlYWRlckluZm9cIiB9fT5MYXN0IEFuY2hvcjoge2xhc3RDb25mfSB8IEFkZHJlc3MgQmFsYW5jZToge2JhbGFuY2UgKiAwLjAwMDAwMDAxfSB8IENvdW50OiB7ZGF0YS5sZW5ndGh9IHwgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOb0FuY2hvcnNcIj48aDEgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwJVwifX0+Tm8gcGVuZGluZyBBbmNob3JzITwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlbmRpbmcge25hbWV9IEFuY2hvcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZGF0YX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIj57YFxuICAgICAgICAgICAgICAgICAgICAuSGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uICAzcyA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA5cmVtIG1pbm1heCgzMDBweCw3MjBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlZm9vdGVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXBIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YWJsZWhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXBIZWFkZXIgc21hbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50YWJsZUhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgYXV0byAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZW5kaW5nTm90aSAuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9mZk5vdGkgb3RoZXJIZWFkZXJJbmZvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogSGVyb0FuaW1hdGlvbiAzcyAwLjJzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI3N0eWxlLTc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNzdHlsZS03Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI3N0eWxlLTc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgNDAlIDAlLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgNzUlIDg0JSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZyb20oIzE0MkMzQyksXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB0bygjMTQyQzNDKSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbG9yLXN0b3AoLjcsIzE0MmMzY2I4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyQzNDOyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGhlYWQsXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwxNzBweCkgbWlubWF4KDEwMHB4LDIwMHB4KSBtaW5tYXgoMTAwcHgsMWZyKSBtaW5tYXgoMTAwcHgsMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGNvbGhlaWdodCBjb2x0aW1lIGNvbGtleW1yIGNvbGJ0Y2hhc2ggXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGhlYWQgdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcmhlaWdodCAuYm9keWhlaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6ICBjb2xoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJ0aW1lIC5ib2R5c3RhcnRlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcmtleW1yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29sa2V5bXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcmJ0Y2hhc2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb2xidGNoYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhlYWQgdGg6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGJvZHkgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTlFOUU5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRib2R5IHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5a2V5bXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5a2V5bXIgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM4OEZDOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWJ0Y2hhc2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5YnRjaGFzaCBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg4RkM5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiAuY3VzdG9tLWRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7IC8qIGRlbW8gb25seSAqL1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93biBzZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNWVtO1x0XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMC4wMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogaGlkZSBkZWZhdWx0IGFycm93IGluIGNocm9tZSBPU1ggKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjpiZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmFmdGVyIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcdTI1YmNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNjI1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLS41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjpiZWZvcmUgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93biBzZWxlY3RbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd24gc2VsZWN0W2Rpc2FibGVkXTo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93bjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MkMzQztcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjY2NjYzsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCMxNDJDM0MsMiUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXHUyNWJjJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNob3J0OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1LjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xlaG91cnM6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQuNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kb3VibGVob3VyczphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMy44ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRvdWJsZWJsa3M6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudHJpcGxlYmxrczphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMi4zZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYWxsOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0LjdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFx1MjViYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY0LjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC44ZW0gMWVtIDAuOGVtIDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRlYmJmMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpmaXJzdC1jaGlsZCAuaGVhZGVyaGVpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJsZUhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIGF1dG8gMWZyIDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2ZmTm90aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ05vdGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm90aGVySGVhZGVySW5mb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudGFibGVIZWFkZXJDb250ZW50IHNtYWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gbWlubWF4KDMwMHB4LDcyMHB4KSAyZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZSAgdHIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LDE3MHB4KSBtaW5tYXgoMTAwcHgsMWZyKSBtaW5tYXgoMTAwcHgsMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIiBjb2xoZWlnaHQgY29sa2V5bXIgY29sYnRjaGFzaCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcnRpbWUsIC5ib2R5c3RhcnRlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjg2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcmVtIG1pbm1heCgzMDBweCw3MjBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDRweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlSGVhZGVyQ29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgYXV0byAxZnIgNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZOb3RpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZW5kaW5nTm90aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3RoZXJIZWFkZXJJbmZvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDZweCkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJ0aW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIEhlcm9BbmltYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
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
          lastOff = _ref$query.lastOff,
          pendingNoti = _ref$query.pendingNoti;
      return {
        name: name,
        data: data,
        lastConf: lastConf,
        balance: balance,
        lastOff: lastOff,
        pendingNoti: pendingNoti
      };
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
//# sourceMappingURL=index.js.e469e330c124200643ae.hot-update.js.map