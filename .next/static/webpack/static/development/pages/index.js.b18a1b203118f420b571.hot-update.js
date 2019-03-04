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
      console.log("pendingNoti: ", pendingNoti);
      var offHolder = "30 Minutes";

      if (lastOff !== offHolder) {
        offHolder = lastOff === "1" || lastOff === 1 ? "1 hour" : "".concat(lastOff, " hours");
      }

      var countHolder = "1 Block";
      countHolder = pendingNoti !== 1 || pendingNoti !== "1" ? "".concat(pendingNoti, " Blocks") : "".concat(pendingNoti, " Block");
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Bitcoin Anchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "Hero"
      }, Array.isArray(data) ? data.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4294043827"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "tableHeaderContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "offNoti ",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-4294043827" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-4294043827"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuOffNoti,
        className: "jsx-4294043827" + " " + "placeholder \n                                                            ".concat(offHolder.length === "30 Minutes".length ? "" : null, "\n                                                            ").concat(offHolder.length === "1 hour".length ? "short" : null, "\n                                                            ").concat(offHolder.length === "3 hours".length ? "singlehours" : null, "\n                                                            ").concat(offHolder.length === "12 hours".length ? "doublehours" : null, "\n                                                            ")
      }, offHolder), offNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-4294043827"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "30",
        className: "jsx-4294043827"
      }, "30 Minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "1",
        className: "jsx-4294043827"
      }, "1 hour"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "3",
        className: "jsx-4294043827"
      }, "3 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "6",
        className: "jsx-4294043827"
      }, "6 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "9",
        className: "jsx-4294043827"
      }, "9 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "12",
        className: "jsx-4294043827"
      }, "12 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "24",
        className: "jsx-4294043827"
      }, "24 hours")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-4294043827"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "pendingNoti",
          display: "grid",
          gridTemplateColumns: "255px 130px"
        },
        className: "jsx-4294043827" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-4294043827"
      }, "Pending count before notifying: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuPendingNoti,
        className: "jsx-4294043827" + " " + "placeholder \n                                                            ".concat(countHolder.length === "1 Block".length ? "small" : null, "\n                                                            ").concat(countHolder.length === "2 Blocks".length ? "doublehours" : null, "\n                                                            ").concat(countHolder.length === "18 Blocks".length ? "doubleblks" : null, "\n                                                            ").concat(countHolder.length === "144 Blocks".length ? "tripleblks" : null, "\n                                                            ")
      }, countHolder), pendingNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-4294043827"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "1",
        className: "jsx-4294043827"
      }, "1 Block"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "2",
        className: "jsx-4294043827"
      }, "2 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "4",
        className: "jsx-4294043827"
      }, "4 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "9",
        className: "jsx-4294043827"
      }, "9 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "18",
        className: "jsx-4294043827"
      }, "18 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "36",
        className: "jsx-4294043827"
      }, "36 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "72",
        className: "jsx-4294043827"
      }, "72 Blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "144",
        className: "jsx-4294043827"
      }, "144 Blocks")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-4294043827"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          gridArea: "otherHeaderInfo"
        },
        className: "jsx-4294043827"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        id: "style-7",
        className: "jsx-4294043827" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-4294043827"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-4294043827"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-4294043827" + " " + "headerheight"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-4294043827" + " " + "headertime"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-4294043827" + " " + "headerkeymr"
      }, "KEYMR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-4294043827" + " " + "headerbtchash"
      }, "BTC HASH"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-4294043827"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-4294043827" + " " + "anchor-row"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--height"),
          style: {
            paddingLeft: "1.5rem !important"
          },
          className: "jsx-4294043827" + " " + "bodyheight"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-4294043827" + " " + "bodystarted"
        }, moment__WEBPACK_IMPORTED_MODULE_3___default()(anchor.started_at).format('YYYY-MM-DD HH:mm')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-4294043827" + " " + "bodykeymr"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "http://explorer.factom.com/dblocks/".concat(anchor.keymr),
          target: "_blank",
          className: "jsx-4294043827"
        }, anchor.keymr)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--btchash"),
          className: "jsx-4294043827" + " " + "bodybtchash"
        }, anchor.btc_hash === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          style: {
            color: "#4A4A4A"
          },
          className: "jsx-4294043827"
        }, "BTC has not recieved transaction yet.") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://www.blockchain.com/btc/tx/".concat(anchor.btc_hash),
          target: "_blank",
          className: "jsx-4294043827"
        }, anchor.btc_hash)));
      })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4294043827"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "tableHeaderContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "offNoti ",
          display: "grid",
          gridTemplateColumns: "230px 130px"
        },
        className: "jsx-4294043827" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-4294043827"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuOffNoti,
        className: "jsx-4294043827" + " " + "placeholder"
      }, holder), offNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-4294043827"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "30",
        className: "jsx-4294043827"
      }, "30 Minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "1",
        className: "jsx-4294043827"
      }, "1 hour"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "3",
        className: "jsx-4294043827"
      }, "3 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "6",
        className: "jsx-4294043827"
      }, "6 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "9",
        className: "jsx-4294043827"
      }, "9 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "12",
        className: "jsx-4294043827"
      }, "12 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.offNotiSelect,
        value: "24",
        className: "jsx-4294043827"
      }, "1 Day")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-4294043827"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          gridArea: "pendingNoti",
          display: "grid",
          gridTemplateColumns: "230px 130px"
        },
        className: "jsx-4294043827" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-4294043827"
      }, "# of blocks before notifying: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenuPendingNoti,
        className: "jsx-4294043827" + " " + "placeholder"
      }, holder), pendingNotiToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-4294043827"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "1",
        className: "jsx-4294043827"
      }, "1 block"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "2",
        className: "jsx-4294043827"
      }, "2 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "4",
        className: "jsx-4294043827"
      }, "4 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "9",
        className: "jsx-4294043827"
      }, "9 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "18",
        className: "jsx-4294043827"
      }, "18 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "36",
        className: "jsx-4294043827"
      }, "36 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "72",
        className: "jsx-4294043827"
      }, "72 blocks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.pendingNotiSelect,
        value: "144",
        className: "jsx-4294043827"
      }, "144 blocks")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-4294043827"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          gridArea: "otherHeaderInfo"
        },
        className: "jsx-4294043827"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "NoAnchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4294043827"
      }, "No pending Anchors!"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4294043827"
      }, "Pending ", name, " Anchors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4294043827"
      }, data))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4294043827",
        css: ".jsx-4294043827{*/;}.Hero.jsx-4294043827{max-width:1400px;justify-self:center;width:-webkit-fill-available;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);-webkit-animation:HeroAnimation-jsx-4294043827 3s;animation:HeroAnimation-jsx-4294043827 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.HeroGroup.jsx-4294043827{margin:0 auto;padding:2rem 2.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:9rem minmax(300px,720px) 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.HeroGroupHeader.jsx-4294043827{grid-area:tableheader;display:grid;grid-template-rows:repeat(2,1fr);}.HeroGroupHeader.jsx-4294043827 small.jsx-4294043827{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;font-weight:600;}.tableHeaderContent.jsx-4294043827{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;grid-template-areas: \"pendingNoti .\" \"offNoti otherHeaderInfo\";grid-column-gap:10px;}.Hero.jsx-4294043827 h1.jsx-4294043827{margin:0;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;}.Hero.jsx-4294043827 p.jsx-4294043827{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-4294043827 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-4294043827 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}table.jsx-4294043827{display:block;overflow-x:auto;border-collapse:collapse;text-align:left;white-space:nowrap;}#style-7.jsx-4294043827::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:#F5F5F5;}#style-7.jsx-4294043827::-webkit-scrollbar{width:10px;background-color:#F5F5F5;}#style-7.jsx-4294043827::-webkit-scrollbar-thumb{background-image:-webkit-gradient(linear, 40% 0%, 75% 84%, from(#142C3C), to(#142C3C), color-stop(.7,#142c3cb8));}table.jsx-4294043827 thead.jsx-4294043827,table.jsx-4294043827 tbody.jsx-4294043827{display:grid;}table.jsx-4294043827 tr.jsx-4294043827{display:grid;grid-template-columns:minmax(100px,170px) minmax(100px,200px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight coltime colkeymr colbtchash \";}table.jsx-4294043827 thead.jsx-4294043827 th.jsx-4294043827{background:#E8E8E8;font-size:70%;padding:1.2rem;font-weight:600;}table.jsx-4294043827 thead.jsx-4294043827 th.jsx-4294043827:first-child{border-top-left-radius:0.4rem;border-bottom-left-radius:0.4rem;}.headerheight.jsx-4294043827 .bodyheight.jsx-4294043827{grid-area:colheight;padding-right:0;}.headertime.jsx-4294043827 .bodystarted.jsx-4294043827{grid-area:coltime;}.headerkeymr.jsx-4294043827{grid-area:colkeymr;}.headerbtchash.jsx-4294043827{grid-area:colbtchash;}thead.jsx-4294043827 th.jsx-4294043827:not(:first-child){padding-left:0 !important;}tbody.jsx-4294043827 td.jsx-4294043827{font-size:70%;padding:1.5rem;-webkit-letter-spacing:1.2px;-moz-letter-spacing:1.2px;-ms-letter-spacing:1.2px;letter-spacing:1.2px;color:#4A4A4A;border-bottom:1px solid #E9E9E9;}tbody.jsx-4294043827 td.jsx-4294043827:not(:first-child){padding-left:0 !important;}.bodykeymr.jsx-4294043827{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodykeymr.jsx-4294043827 a.jsx-4294043827{text-transform:none;background:none;color:#388FC9;}.bodybtchash.jsx-4294043827{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodybtchash.jsx-4294043827 a.jsx-4294043827{text-transform:none;background:none;color:#388FC9;}.custom-dropdown.jsx-4294043827 select.jsx-4294043827{background-color:#2c3e50;color:#fff;font-size:inherit;padding:.5em;padding-right:2.5em;border:0;margin:0;border-radius:3px;text-indent:0.01px;text-overflow:'';-webkit-appearance:button;}.custom-dropdown.jsx-4294043827::before,.custom-dropdown.jsx-4294043827::after{content:\"\";position:absolute;pointer-events:none;}.custom-dropdown.jsx-4294043827::after{content:\"\u25BC\";height:1em;font-size:.625em;line-height:1;right:1.2em;top:50%;margin-top:-.5em;}.custom-dropdown.jsx-4294043827::before{width:2em;right:0;top:0;bottom:0;border-radius:0 3px 3px 0;}.custom-dropdown.jsx-4294043827 select[disabled].jsx-4294043827{color:rgba(0,0,0,.3);}.custom-dropdown.jsx-4294043827 select[disabled].jsx-4294043827::after{color:rgba(0,0,0,.1);}.custom-dropdown.jsx-4294043827::before{background-color:rgba(0,0,0,.15);}.custom-dropdown.jsx-4294043827::after{color:rgba(0,0,0,.4);}.select.jsx-4294043827{position:relative;display:block;width:100%;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;}.placeholder.jsx-4294043827{position:relative;display:block;top:6px;background-color:#142C3C;z-index:1;padding:.5em;border-radius:0.4rem;cursor:pointer;font-size:70%;color:#cccccc;height:20px;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.placeholder.jsx-4294043827:hover{background:darken(#142C3C,2%);}.placeholder.jsx-4294043827:after{position:absolute;margin-left:2em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:'FontAwesome';content:'\u25BC';z-index:10;font-size:70%;}.short.jsx-4294043827:after{margin-left:5.5em;}.singlehours.jsx-4294043827:after{margin-left:4.5em;}.doublehours.jsx-4294043827:after{margin-left:3.8em;}.doubleblks.jsx-4294043827:after{margin-left:3.25em;}.tripleblks.jsx-4294043827:after{margin-left:2.3em;}.small.jsx-4294043827:after{position:absolute;margin-left:4.7em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:'FontAwesome';content:'\u25BC';z-index:10;font-size:70%;}ul.jsx-4294043827{position:absolute;overflow:hidden;overflow-y:auto;width:35%;background:#fff;border-radius:2px;top:100%;left:64.5%;list-style:none;margin:5px 0 0 0;padding:0;z-index:100;box-shadow:0 0 8px 0 rgba(0,0,0,0.9);}li.jsx-4294043827{display:block;text-align:left;padding:0.8em 1em 0.8em 1em;color:#999;cursor:pointer;font-size:70%;}li.jsx-4294043827:hover{background:#4ebbf0;color:#fff;}@media (min-width:1235px){tbody.jsx-4294043827 td.jsx-4294043827:first-child .headerheight.jsx-4294043827{padding-left:2rem;}}@media (max-width:830px){.tableHeaderContent.jsx-4294043827{display:grid;grid-template-columns:auto;grid-template-rows:auto 1fr 45px;grid-template-areas: \"offNoti\" \"pendingNoti\" \"otherHeaderInfo\";grid-column-gap:10px;grid-row-gap:10px;}.tableHeaderContent.jsx-4294043827 small.jsx-4294043827{justify-self:start;}.HeroGroup.jsx-4294043827{padding:30px 20px;grid-template-rows:10rem minmax(300px,720px) 2fr;}}@media (max-width:700px){table.jsx-4294043827 tr.jsx-4294043827{grid-template-columns:minmax(100px,170px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight colkeymr colbtchash \";}.headertime.jsx-4294043827,.bodystarted.jsx-4294043827{display:none;}}@media (max-width:686px){.HeroGroup.jsx-4294043827{padding:30px 20px;grid-template-rows:10rem minmax(300px,720px) 2fr;}}@media (max-width:644px){.tableHeaderContent.jsx-4294043827{display:grid;grid-template-columns:auto;grid-template-rows:auto 1fr 45px;grid-template-areas: \"offNoti\" \"pendingNoti\" \"otherHeaderInfo\";grid-column-gap:10px;grid-row-gap:10px;}.Hero.jsx-4294043827 h1.jsx-4294043827{font-size:35px;font-weight:400;}.Hero.jsx-4294043827 p.jsx-4294043827{font-size:24px;}}@media (max-width:506px){.Hero.jsx-4294043827 h1.jsx-4294043827{font-size:25px;font-weight:400;}.Hero.jsx-4294043827 p.jsx-4294043827{font-size:24px;}.headertime.jsx-4294043827{display:none;}}@-webkit-keyframes HeroAnimation-jsx-4294043827{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-4294043827{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxT21DLEFBRzBDLEFBY0gsQUFhUSxBQUtMLEFBS0osQUFTSixBQVFzQixBQU9qQixBQVFtQyxBQUl0QyxBQVNFLEFBTUEsQUFHQSxBQUtNLEFBTVcsQUFJVCxBQUlILEFBR0MsQUFHRSxBQUlLLEFBR1osQUFPWSxBQUdaLEFBTU0sQUFLTixBQU1NLEFBWUssQUFjZCxBQU1DLEFBVUYsQUFRVyxBQUlBLEFBSVksQUFJWixBQUNGLEFBSUQsQUFRQSxBQWNZLEFBR1osQUFVQSxBQUdBLEFBR0EsQUFHQyxBQUl4QixBQUV1QixBQVdBLEFBZUosQUFRSyxBQU9HLEFBS0wsQUFXTSxBQUdELEFBTTRELEFBSWpFLEFBS0ssQUFNTCxBQVlFLEFBS0EsQUFNQSxBQUtBLEFBSUYsQUFNSCxBQUtBLEdBSXRCLE1BNVYyQixDQWtKWCxBQWtNdUIsQUFLRCxDQTlUTCxBQXVHUCxDQU1QLENBakpvQixBQW1EbkMsQUFHc0csQUE4Tm5FLEFBd0IvQixBQVcrQixBQWdDL0IsQ0E5V29CLEFBK0NKLEFBOERELEFBVXNCLEFBV0EsQUFxSnJCLENBbUVJLEFBS3BCLEFBTW9CLEFBS3BCLEVBeFhvQixBQWdDTCxDQThFbkIsQUFtRlUsQUF3QlEsQUFRQSxBQWlCRSxBQVVwQixBQUdBLEFBR0EsQUFNQSxBQUdzQixBQVdGLEFBOEJoQixBQW1CcUQsQUFlQSxDQXRQdkMsQUFpQmxCLEFBb0pBLEFBd0NlLEFBdUJYLENBMU5nQixBQWlDQSxBQVdBLENBakNwQixBQW1GQSxBQUlBLEFBUUEsQ0F6TGlCLENBNEpJLENBV1IsQ0FoQ0UsQ0ExQ2YsQUFVQSxFQW5GZSxBQU9JLENBc0VNLEFBcURELENBbkhLLEFBd0NRLEFBeUlyQyxBQXVEZ0MsQUFRaEMsQ0EyREksQUFXQSxDQTFKVyxBQVFILENBaklPLEFBa0dXLEFBYTlCLENBak1pQixBQW9PTCxBQW9DUSxDQTNQa0IsQ0E4Q3RDLEFBaUNBLEFBaUNrQixBQVdBLEFBWUksQUF5R1YsQ0EzUXFCLEVBK0NkLENBd0lELEFBMkNXLEFBdUZhLEFBbUNBLEVBekdYLENBN0xYLEFBb0tBLENBckxpQixBQXVPTixHQTdQRyxDQWtGZCxDQTdCUyxBQTZHN0IsQ0E1Q29CLEFBT3BCLEFBSW9CLEFBT3BCLEFBZ0ljLElBdk9NLEFBbUhILEFBcUJELENBMUhJLEdBd09MLENBL082RCxBQTRJNUUsQUF3QnFCLENBNkRELEdBbExwQixDQUpBLENBaUljLENBbE9NLEFBcUlPLEFBV0EsQUF3Q2YsQ0FyQlksQUFtS3BCLEFBZUEsQ0ExVEosQ0EyUW1CLENBdFBDLENBY0csQ0F2QlUsQ0F4QndCLEFBNlM1QixBQW1DQSxDQTNSN0IsQUFxSHFCLENBMENKLENBcURLLEVBb0RuQixDQTdTaUIsR0E5QkssRUFzU1AsRUF0UGxCLENBbUhhLENBZ0VZLENBOUZ6QixBQVdBLENBbEZBLENBMkhBLEdBK0ZhLENBelBiLENBcUlhLEVBbUliLEVBOEZJLEdBcFlVLEFBd1JDLEFBdUdYLEVBM05rQixJQStESCxFQTNJK0MsRUF2RjlDLEFBOEVwQixDQTBNb0IsT0F4UUMsRUFvSkUsQ0ErREwsS0FsT2lDLENBdUhqQyxBQWlLRyxFQWdEakIsR0FwU3FCLEFBMk1LLENBMEVELEFBbUNBLENBcEZDLENBckNaLElBL0RHLEVBNUNlLEFBK0ZMLEdBa0VqQixLQXJERSxJQS9MaEIsQ0FxUGdCLEFBZ0NVLEFBbUNBLEVBeExJLEVBMkVkLEVBeUJBLENBcENHLEtBc0RzQixFQW5FekMsRUFqSUEsQUEwSmUsRUFoUDJCLEFBeVEzQixBQWlEWCxBQW1DQSxDQXJPSixNQXpHMEIsRUFrT1IsQ0E1RWxCLENBcUdrQixZQXhCbEIsRUFsT3NCLEFBMlB0QixNQWdCQSxNQTFSaUMsTUFnQmpDLFFBb05BLFNBbkxjLFVBQ2QsMkRBakRpQyxrRUFDNEIsb0hBQzdEIiwiZmlsZSI6Ii9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUgPT09ICdCVEMnID8gJ0JpdGNvaW4nIDogcHJvcHMubmFtZSA9PT0gJ0VUSCcgPyAnRXRoZXJldW0nIDogbnVsbCxcbiAgICAgICAgICAgIG9mZk5vdGlUb2dnbGU6IGZhbHNlLFxuICAgICAgICAgICAgcGVuZGluZ05vdGlUb2dnbGU6IGZhbHNlLFxuICAgICAgICAgICAgbGFzdE9mZjogdGhpcy5wcm9wcy5sYXN0T2ZmLFxuICAgICAgICAgICAgcGVuZGluZ05vdGk6IHRoaXMucHJvcHMucGVuZGluZ05vdGksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dNZW51T2ZmTm90aSA9IHRoaXMuc2hvd01lbnVPZmZOb3RpLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VNZW51T2ZmTm90aSA9IHRoaXMuY2xvc2VNZW51T2ZmTm90aS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9mZk5vdGlTZWxlY3QgPSB0aGlzLm9mZk5vdGlTZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93TWVudVBlbmRpbmdOb3RpID0gdGhpcy5zaG93TWVudVBlbmRpbmdOb3RpLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VNZW51UGVuZGluZ05vdGkgPSB0aGlzLmNsb3NlTWVudVBlbmRpbmdOb3RpLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGVuZGluZ05vdGlTZWxlY3QgPSB0aGlzLnBlbmRpbmdOb3RpU2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgTWFpbi5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgfSwgMjAwMClcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnk6IHsgbmFtZSwgZGF0YSwgbGFzdENvbmYsIGJhbGFuY2UsIGxhc3RPZmYsIHBlbmRpbmdOb3RpIH0gfSkge1xuICAgICAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBkYXRhOiBkYXRhLCBsYXN0Q29uZjogbGFzdENvbmYsIGJhbGFuY2U6IGJhbGFuY2UsIGxhc3RPZmY6IGxhc3RPZmYsIHBlbmRpbmdOb3RpOiBwZW5kaW5nTm90aSB9XG4gICAgfVxuXG4gICAgc2hvd01lbnVPZmZOb3RpID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvZmZOb3RpVG9nZ2xlOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnVPZmZOb3RpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VNZW51T2ZmTm90aSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9mZk5vdGlUb2dnbGU6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnVPZmZOb3RpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2ZmTm90aVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAzMCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDAwL29mZm5vdGlmaWNhdGlvbmNoYW5nZWAsIG51bGwsIHsgcGFyYW1zOiB7IHRpbWU6IFwiMzAgTWludXRlc1wiIH0gfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxhc3RPZmY6IFwiMzAgTWludXRlc1wiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDAwL29mZm5vdGlmaWNhdGlvbmNoYW5nZWAsIG51bGwsIHsgcGFyYW1zOiB7IHRpbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9IH0pLnRoZW4odGhpcy5mb3JjZVVwZGF0ZSgpKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGFzdE9mZjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd01lbnVQZW5kaW5nTm90aSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGVuZGluZ05vdGlUb2dnbGU6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudVBlbmRpbmdOb3RpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VNZW51UGVuZGluZ05vdGkgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZW5kaW5nTm90aVRvZ2dsZTogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudVBlbmRpbmdOb3RpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGVuZGluZ05vdGlTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3BlbmRpbmd0aW1lbm90aWZpY2F0aW9uYCwgbnVsbCwgeyBwYXJhbXM6IHsgdGltZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0gfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGVuZGluZ05vdGk6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgbmFtZSwgcGVuZGluZ05vdGlUb2dnbGUsIG9mZk5vdGlUb2dnbGUsIGxhc3RPZmYsIHBlbmRpbmdOb3RpIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgeyBkYXRhLCBsYXN0Q29uZiwgYmFsYW5jZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coXCJwZW5kaW5nTm90aTogXCIsIHBlbmRpbmdOb3RpKTtcbiAgICAgICAgbGV0IG9mZkhvbGRlciA9IFwiMzAgTWludXRlc1wiO1xuICAgICAgICBpZiAobGFzdE9mZiAhPT0gb2ZmSG9sZGVyKSB7XG4gICAgICAgICAgICBvZmZIb2xkZXIgPSAobGFzdE9mZiA9PT0gXCIxXCIgfHwgbGFzdE9mZiA9PT0gMSkgPyBcIjEgaG91clwiIDogYCR7bGFzdE9mZn0gaG91cnNgXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50SG9sZGVyID0gXCIxIEJsb2NrXCI7XG4gICAgICAgIGNvdW50SG9sZGVyID0gKHBlbmRpbmdOb3RpICE9PSAxIHx8IHBlbmRpbmdOb3RpICE9PSBcIjFcIikgPyBgJHtwZW5kaW5nTm90aX0gQmxvY2tzYCA6IGAke3BlbmRpbmdOb3RpfSBCbG9ja2BcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZT0nQml0Y29pbiBBbmNob3JzJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YSkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlbmRpbmcge25hbWV9IEFuY2hvcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7IGdyaWRBcmVhOiBcIm9mZk5vdGkgXCIsIGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjI1NXB4IDEzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBqdXN0aWZ5U2VsZjogXCJzdGFydFwiIH19PlR1cm4gb2ZmIG5vdGlmaWNhdGlvbnMgZm9yOiA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BwbGFjZWhvbGRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIzMCBNaW51dGVzXCIubGVuZ3RoID8gXCJcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29mZkhvbGRlci5sZW5ndGggPT09IFwiMSBob3VyXCIubGVuZ3RoID8gXCJzaG9ydFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIzIGhvdXJzXCIubGVuZ3RoID8gXCJzaW5nbGVob3Vyc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2ZmSG9sZGVyLmxlbmd0aCA9PT0gXCIxMiBob3Vyc1wiLmxlbmd0aCA/IFwiZG91YmxlaG91cnNcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfSBvbkNsaWNrPXt0aGlzLnNob3dNZW51T2ZmTm90aX0+e29mZkhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvZmZOb3RpVG9nZ2xlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMzBcIj4zMCBNaW51dGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjFcIj4xIGhvdXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiM1wiPjMgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiNlwiPjYgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiOVwiPjkgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiMTJcIj4xMiBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIyNFwiPjI0IGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYW5nZW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7IGdyaWRBcmVhOiBcInBlbmRpbmdOb3RpXCIsIGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjI1NXB4IDEzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBqdXN0aWZ5U2VsZjogXCJzdGFydFwiIH19PlBlbmRpbmcgY291bnQgYmVmb3JlIG5vdGlmeWluZzogPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcGxhY2Vob2xkZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NvdW50SG9sZGVyLmxlbmd0aCA9PT0gXCIxIEJsb2NrXCIubGVuZ3RoID8gXCJzbWFsbFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y291bnRIb2xkZXIubGVuZ3RoID09PSBcIjIgQmxvY2tzXCIubGVuZ3RoID8gXCJkb3VibGVob3Vyc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y291bnRIb2xkZXIubGVuZ3RoID09PSBcIjE4IEJsb2Nrc1wiLmxlbmd0aCA/IFwiZG91YmxlYmxrc1wiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y291bnRIb2xkZXIubGVuZ3RoID09PSBcIjE0NCBCbG9ja3NcIi5sZW5ndGggPyBcInRyaXBsZWJsa3NcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfSBvbkNsaWNrPXt0aGlzLnNob3dNZW51UGVuZGluZ05vdGl9Pntjb3VudEhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZW5kaW5nTm90aVRvZ2dsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIxXCI+MSBCbG9jazwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMlwiPjIgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI0XCI+NCBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjlcIj45IEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMThcIj4xOCBCbG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjM2XCI+MzYgQmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCI3MlwiPjcyIEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMTQ0XCI+MTQ0IEJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjaGFuZ2VtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGdyaWRBcmVhOiBcIm90aGVySGVhZGVySW5mb1wiIH19Pkxhc3QgQW5jaG9yOiB7bGFzdENvbmZ9IHwgQWRkcmVzcyBCYWxhbmNlOiB7YmFsYW5jZSAqIDAuMDAwMDAwMDF9IHwgQ291bnQ6IHtkYXRhLmxlbmd0aH0gfCA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiRnVsbFRhYmxlXCIgaWQ9XCJzdHlsZS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVyaGVpZ2h0XCI+SEVJR0hUPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcnRpbWVcIj5TVEFSVCBUSU1FPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcmtleW1yXCI+S0VZTVI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVyYnRjaGFzaFwiPkJUQyBIQVNIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGFuY2hvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgJHthbmNob3IuX2lkfWB9IGNsYXNzTmFtZT1cImFuY2hvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1oZWlnaHRgfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxLjVyZW0gIWltcG9ydGFudFwiIH19IGNsYXNzTmFtZT1cImJvZHloZWlnaHRcIj57YW5jaG9yLmhlaWdodH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLXN0YXJ0ZWRfYXRgfSBjbGFzc05hbWU9XCJib2R5c3RhcnRlZFwiPnttb21lbnQoYW5jaG9yLnN0YXJ0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbScpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0ta2V5bXJgfSBjbGFzc05hbWU9XCJib2R5a2V5bXJcIj48YSBocmVmPXtgaHR0cDovL2V4cGxvcmVyLmZhY3RvbS5jb20vZGJsb2Nrcy8ke2FuY2hvci5rZXltcn1gfSB0YXJnZXQ9XCJfYmxhbmtcIj57YW5jaG9yLmtleW1yfTwvYT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLWJ0Y2hhc2hgfSBjbGFzc05hbWU9XCJib2R5YnRjaGFzaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3IuYnRjX2hhc2ggPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzRBNEE0QVwiIH19PntgQlRDIGhhcyBub3QgcmVjaWV2ZWQgdHJhbnNhY3Rpb24geWV0LmB9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYnRjL3R4LyR7YW5jaG9yLmJ0Y19oYXNofWB9IHRhcmdldD1cIl9ibGFua1wiPnthbmNob3IuYnRjX2hhc2h9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvR3JvdXBIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGVuZGluZyB7bmFtZX0gQW5jaG9yczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RcIiBzdHlsZT17eyBncmlkQXJlYTogXCJvZmZOb3RpIFwiLCBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyMzBweCAxMzBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGp1c3RpZnlTZWxmOiBcInN0YXJ0XCIgfX0+VHVybiBvZmYgbm90aWZpY2F0aW9ucyBmb3I6IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlclwiIG9uQ2xpY2s9e3RoaXMuc2hvd01lbnVPZmZOb3RpfT57aG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvZmZOb3RpVG9nZ2xlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCIzMFwiPjMwIE1pbnV0ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjFcIj4xIGhvdXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjNcIj4zIGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub2ZmTm90aVNlbGVjdH0gdmFsdWU9XCI2XCI+NiBob3VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9mZk5vdGlTZWxlY3R9IHZhbHVlPVwiOVwiPjkgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjEyXCI+MTIgaG91cnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vZmZOb3RpU2VsZWN0fSB2YWx1ZT1cIjI0XCI+MSBEYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2hhbmdlbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RcIiBzdHlsZT17eyBncmlkQXJlYTogXCJwZW5kaW5nTm90aVwiLCBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyMzBweCAxMzBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGp1c3RpZnlTZWxmOiBcInN0YXJ0XCIgfX0+IyBvZiBibG9ja3MgYmVmb3JlIG5vdGlmeWluZzogPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyXCIgb25DbGljaz17dGhpcy5zaG93TWVudVBlbmRpbmdOb3RpfT57aG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZW5kaW5nTm90aVRvZ2dsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjFcIj4xIGJsb2NrPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMlwiPjIgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiNFwiPjQgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiOVwiPjkgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMThcIj4xOCBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5wZW5kaW5nTm90aVNlbGVjdH0gdmFsdWU9XCIzNlwiPjM2IGJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLnBlbmRpbmdOb3RpU2VsZWN0fSB2YWx1ZT1cIjcyXCI+NzIgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMucGVuZGluZ05vdGlTZWxlY3R9IHZhbHVlPVwiMTQ0XCI+MTQ0IGJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjaGFuZ2VtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgZ3JpZEFyZWE6IFwib3RoZXJIZWFkZXJJbmZvXCIgfX0+TGFzdCBBbmNob3I6IHtsYXN0Q29uZn0gfCBBZGRyZXNzIEJhbGFuY2U6IHtiYWxhbmNlICogMC4wMDAwMDAwMX0gfCBDb3VudDoge2RhdGEubGVuZ3RofSB8IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTm9BbmNob3JzXCI+PGgxPk5vIHBlbmRpbmcgQW5jaG9ycyE8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvR3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvR3JvdXBIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5QZW5kaW5nIHtuYW1lfSBBbmNob3JzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2RhdGF9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgICAgICAgICAgICAgLkhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLDAsMCwgMC4xMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLDAsMCwgMC45KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogSGVyb0FuaW1hdGlvbiAgM3MgO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgOXJlbSBtaW5tYXgoMzAwcHgsNzIwcHgpIDJmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlYm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZWZvb3RlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVyb0dyb3VwSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGFibGVoZWFkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVyb0dyb3VwSGVhZGVyIHNtYWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGFibGVIZWFkZXJDb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIGF1dG8gMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ05vdGkgLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZOb3RpIG90aGVySGVhZGVySW5mb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IEhlcm9BbmltYXRpb24gM3MgMC4ycyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICNzdHlsZS03Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjc3R5bGUtNzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNzdHlsZS03Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixcblx0XHRcdFx0XHRcdFx0XHRcdCAgIDQwJSAwJSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgIDc1JSA4NCUsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmcm9tKCMxNDJDM0MpLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgdG8oIzE0MkMzQyksXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBjb2xvci1zdG9wKC43LCMxNDJjM2NiOCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzE0MkMzQzsgKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRoZWFkLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB0Ym9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlICB0ciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsMTcwcHgpIG1pbm1heCgxMDBweCwyMDBweCkgbWlubWF4KDEwMHB4LDFmcikgbWlubWF4KDEwMHB4LDFmcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIiBjb2xoZWlnaHQgY29sdGltZSBjb2xrZXltciBjb2xidGNoYXNoIFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJoZWlnaHQgLmJvZHloZWlnaHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAgY29saGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVydGltZSAuYm9keXN0YXJ0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb2x0aW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJrZXltciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbGtleW1yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJidGNoYXNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29sYnRjaGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRib2R5IHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U5RTlFOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWtleW1yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWtleW1yIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzODhGQzk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJvZHlidGNoYXNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWJ0Y2hhc2ggYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM4OEZDOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7LyogLmN1c3RvbS1kcm9wZG93biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4OyAvKiBkZW1vIG9ubHkgKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd24gc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjVlbTtcdFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIGhpZGUgZGVmYXVsdCBhcnJvdyBpbiBjaHJvbWUgT1NYICovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93bjo6YmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjphZnRlciB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXHUyNWJjXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjYyNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMS4yZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0uNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93bjo6YmVmb3JlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd24gc2VsZWN0W2Rpc2FibGVkXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duIHNlbGVjdFtkaXNhYmxlZF06OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC4xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4xNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAqL31cblxuXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDJDM0M7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2NjY2M7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjMTQyQzNDLDIlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFx1MjViYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zaG9ydDphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNS41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZWhvdXJzOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0LjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZG91YmxlaG91cnM6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuOGVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kb3VibGVibGtzOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzLjI1ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRyaXBsZWJsa3M6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuM2VtXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYWxsOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0LjdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFx1MjViYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY0LjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC44ZW0gMWVtIDAuOGVtIDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRlYmJmMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpmaXJzdC1jaGlsZCAuaGVhZGVyaGVpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJsZUhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIGF1dG8gMWZyIDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2ZmTm90aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ05vdGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm90aGVySGVhZGVySW5mb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudGFibGVIZWFkZXJDb250ZW50IHNtYWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gbWlubWF4KDMwMHB4LDcyMHB4KSAyZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZSAgdHIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LDE3MHB4KSBtaW5tYXgoMTAwcHgsMWZyKSBtaW5tYXgoMTAwcHgsMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIiBjb2xoZWlnaHQgY29sa2V5bXIgY29sYnRjaGFzaCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcnRpbWUsIC5ib2R5c3RhcnRlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjg2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcmVtIG1pbm1heCgzMDBweCw3MjBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDRweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlSGVhZGVyQ29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgYXV0byAxZnIgNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZOb3RpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZW5kaW5nTm90aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3RoZXJIZWFkZXJJbmZvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDZweCkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXJ0aW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIEhlcm9BbmltYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
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
//# sourceMappingURL=index.js.b18a1b203118f420b571.hot-update.js.map