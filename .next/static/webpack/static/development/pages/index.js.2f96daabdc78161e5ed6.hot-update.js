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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showMenu", function (event) {
      event.preventDefault();

      _this.setState({
        showMenu: true
      }, function () {
        document.addEventListener('click', _this.closeMenu);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
      _this.setState({
        showMenu: false
      }, function () {
        document.removeEventListener('click', _this.closeMenu);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "menuSelect", function (event) {
      console.log(event.target);
    });

    _this.state = {
      name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null,
      showMenu: false
    };
    _this.showMenu = _this.showMenu.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeMenu = _this.closeMenu.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
          showMenu = _this$state.showMenu;
      var _this$props = this.props,
          data = _this$props.data,
          lastConf = _this$props.lastConf,
          balance = _this$props.balance;
      var holder = "30 Min";
      console.log(showMenu);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Bitcoin Anchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "Hero"
      }, Array.isArray(data) ? data.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3654015905"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)"
        },
        className: "jsx-3654015905"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)"
        },
        className: "jsx-3654015905" + " " + "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3654015905"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.showMenu,
        className: "jsx-3654015905" + " " + "placeholder"
      }, holder), showMenu ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3654015905"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        "data-value": "es",
        onClick: this.menuSelect,
        className: "jsx-3654015905"
      }, "Espa\xF1a- Espa\xF1ol"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        "data-value": "en",
        onClick: this.menuSelect,
        className: "jsx-3654015905"
      }, "United States - English"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        "data-value": "fr",
        onClick: this.menuSelect,
        className: "jsx-3654015905"
      }, "France - Fran\xE7ais"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        "data-value": "de",
        onClick: this.menuSelect,
        className: "jsx-3654015905"
      }, "Deutschland - Deutsch")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: "changeme",
        className: "jsx-3654015905"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-3654015905"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-3654015905" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-3654015905"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-3654015905"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3654015905" + " " + "headerheight"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3654015905" + " " + "headertime"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3654015905" + " " + "headerkeymr"
      }, "KEYMR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3654015905" + " " + "headerbtchash"
      }, "BTC HASH"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-3654015905"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-3654015905" + " " + "anchor-row"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--height"),
          style: {
            paddingLeft: "1.5rem !important"
          },
          className: "jsx-3654015905" + " " + "bodyheight"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-3654015905" + " " + "bodystarted"
        }, moment__WEBPACK_IMPORTED_MODULE_3___default()(anchor.started_at).format('YYYY-MM-DD HH:mm')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-3654015905" + " " + "bodykeymr"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "http://explorer.factom.com/dblocks/".concat(anchor.keymr),
          target: "_blank",
          className: "jsx-3654015905"
        }, anchor.keymr)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--btchash"),
          className: "jsx-3654015905" + " " + "bodybtchash"
        }, anchor.btc_hash === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          style: {
            color: "#4A4A4A"
          },
          className: "jsx-3654015905"
        }, "BTC has not recieved transaction yet.") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://www.blockchain.com/btc/tx/".concat(anchor.btc_hash),
          target: "_blank",
          className: "jsx-3654015905"
        }, anchor.btc_hash)));
      })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3654015905"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)"
        },
        className: "jsx-3654015905"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-3654015905"
      }, "Turn off notifications for:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3654015905" + " " + "custom-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "jsx-3654015905"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-3654015905"
      }, "Sherlock Holmes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-3654015905"
      }, "The Great Gatsby"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-3654015905"
      }, "V for Vendetta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-3654015905"
      }, "The Wolf of Wallstreet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-3654015905"
      }, "Quantum of Solace")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-3654015905"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "NoAnchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3654015905"
      }, "No pending Anchors!"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3654015905"
      }, "Pending ", name, " Anchors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3654015905"
      }, data))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3654015905",
        css: ".jsx-3654015905{*/;}.Hero.jsx-3654015905{max-width:1400px;justify-self:center;width:-webkit-fill-available;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);-webkit-animation:HeroAnimation-jsx-3654015905 3s;animation:HeroAnimation-jsx-3654015905 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.HeroGroup.jsx-3654015905{margin:0 auto;padding:2rem 2.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:5rem minmax(300px,780px) 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.HeroGroupHeader.jsx-3654015905{grid-area:tableheader;display:grid;grid-template-rows:repeat(2,1fr);}.HeroGroupHeader.jsx-3654015905 small.jsx-3654015905{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;font-weight:600;}.Hero.jsx-3654015905 h1.jsx-3654015905{margin:0;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;}.Hero.jsx-3654015905 p.jsx-3654015905{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-3654015905 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-3654015905 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}table.jsx-3654015905{display:block;overflow-x:auto;border-collapse:collapse;text-align:left;white-space:nowrap;}table.jsx-3654015905 thead.jsx-3654015905,table.jsx-3654015905 tbody.jsx-3654015905{display:grid;}table.jsx-3654015905 tr.jsx-3654015905{display:grid;grid-template-columns:minmax(100px,170px) minmax(100px,200px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight coltime colkeymr colbtchash \";}table.jsx-3654015905 thead.jsx-3654015905 th.jsx-3654015905{background:#E8E8E8;font-size:70%;padding:1.5rem;font-weight:600;}.headerheight.jsx-3654015905 .bodyheight.jsx-3654015905{grid-area:colheight;padding-right:0;}.headertime.jsx-3654015905 .bodystarted.jsx-3654015905{grid-area:coltime;}.headerkeymr.jsx-3654015905{grid-area:colkeymr;}.headerbtchash.jsx-3654015905{grid-area:colbtchash;}thead.jsx-3654015905 th.jsx-3654015905:not(:first-child){padding-left:0 !important;}tbody.jsx-3654015905 td.jsx-3654015905{font-size:70%;padding:1.5rem;-webkit-letter-spacing:1.2px;-moz-letter-spacing:1.2px;-ms-letter-spacing:1.2px;letter-spacing:1.2px;color:#4A4A4A;border-bottom:1px solid #E9E9E9;}tbody.jsx-3654015905 td.jsx-3654015905:not(:first-child){padding-left:0 !important;}.bodykeymr.jsx-3654015905{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodykeymr.jsx-3654015905 a.jsx-3654015905{text-transform:none;background:none;color:#388FC9;}.bodybtchash.jsx-3654015905{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodybtchash.jsx-3654015905 a.jsx-3654015905{text-transform:none;background:none;color:#388FC9;}.custom-dropdown.jsx-3654015905 select.jsx-3654015905{background-color:#2c3e50;color:#fff;font-size:inherit;padding:.5em;padding-right:2.5em;border:0;margin:0;border-radius:3px;text-indent:0.01px;text-overflow:'';-webkit-appearance:button;}.custom-dropdown.jsx-3654015905::before,.custom-dropdown.jsx-3654015905::after{content:\"\";position:absolute;pointer-events:none;}.custom-dropdown.jsx-3654015905::after{content:\"\u25BC\";height:1em;font-size:.625em;line-height:1;right:1.2em;top:50%;margin-top:-.5em;}.custom-dropdown.jsx-3654015905::before{width:2em;right:0;top:0;bottom:0;border-radius:0 3px 3px 0;}.custom-dropdown.jsx-3654015905 select[disabled].jsx-3654015905{color:rgba(0,0,0,.3);}.custom-dropdown.jsx-3654015905 select[disabled].jsx-3654015905::after{color:rgba(0,0,0,.1);}.custom-dropdown.jsx-3654015905::before{background-color:rgba(0,0,0,.15);}.custom-dropdown.jsx-3654015905::after{color:rgba(0,0,0,.4);}.select.jsx-3654015905{position:relative;display:block;margin:0 auto;width:100%;max-width:325px;color:#cccccc;vertical-align:middle;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;}.placeholder.jsx-3654015905{position:relative;display:block;top:6px;background-color:#142C3C;z-index:1;padding:.5em;border-radius:0.4rem;cursor:pointer;font-size:70%;height:20px;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.placeholder.jsx-3654015905:hover{background:darken(#142C3C,2%);}.placeholder.jsx-3654015905:after{position:absolute;right:1em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:'FontAwesome';content:'\u25BC';z-index:10;font-size:70%;}ul.jsx-3654015905{position:absolute;overflow:hidden;overflow-y:auto;width:100%;background:#fff;border-radius:2px;top:100%;left:0;list-style:none;margin:5px 0 0 0;padding:0;z-index:100;max-height:120px;}li.jsx-3654015905{display:block;text-align:left;padding:0.8em 1em 0.8em 1em;color:#999;cursor:pointer;}li.jsx-3654015905:hover{background:#4ebbf0;color:#fff;}@media (min-width:1235px){tbody.jsx-3654015905 td.jsx-3654015905:first-child .headerheight.jsx-3654015905{padding-left:2rem;}}@media (max-width:700px){table.jsx-3654015905 tr.jsx-3654015905{grid-template-columns:minmax(100px,170px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight colkeymr colbtchash \";}.headertime.jsx-3654015905,.bodystarted.jsx-3654015905{display:none;}}@media (max-width:640px){.HeroGroup.jsx-3654015905{padding:30px 20px;grid-template-rows:6.5rem minmax(300px,780px) 2fr;}.Hero.jsx-3654015905 h1.jsx-3654015905{font-size:35px;font-weight:400;}.Hero.jsx-3654015905 p.jsx-3654015905{font-size:24px;}}@media (max-width:450px){.Hero.jsx-3654015905 h1.jsx-3654015905{font-size:25px;font-weight:400;}.Hero.jsx-3654015905 p.jsx-3654015905{font-size:24px;}.headertime.jsx-3654015905{display:none;}}@-webkit-keyframes HeroAnimation-jsx-3654015905{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-3654015905{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSm1DLEFBRzBDLEFBY0gsQUFhUSxBQUtMLEFBS1IsQUFRc0IsQUFPakIsQUFRRCxBQUdBLEFBS00sQUFNRSxBQUlILEFBR0MsQUFHRSxBQUlLLEFBR1osQUFPWSxBQUdaLEFBTU0sQUFLTixBQU1NLEFBWUssQUFjZCxBQU1DLEFBVUYsQUFRVyxBQUlBLEFBSVksQUFJWixBQUNGLEFBSUQsQUFZQSxBQWFZLEFBR1osQUFnQkEsQUFlSixBQU9LLEFBT0csQUFLNEQsQUFJakUsQUFLSyxBQUtILEFBS0EsQUFNQSxBQUtBLEFBSUYsQUFNSCxBQUtBLEdBSXJCLE1BbFIwQixDQTJIWCxBQStJdUIsQUFLRCxDQXBLWixDQU1QLENBMUZmLEFBR3NHLEFBNE1sRyxBQThCQSxDQTNSb0IsQUFzQ0osQUF1Q0QsQUFVc0IsQUFXQSxBQW9JckIsQ0FpQ0ksQUFLcEIsQUFNb0IsQUFLcEIsRUFyU29CLEFBZ0NMLENBOENuQixBQW1GVSxBQXdCUSxBQVlBLEFBZ0JKLEFBZ0JNLEFBNkJoQixBQWNzRCxDQTVNeEMsQUFhbEIsQUEwS2UsQ0FqTEssQUFpQ0EsQUFXQSxDQWpDcEIsQUFtRkEsQUFJQSxBQVFBLENBekppQixDQTRISSxDQVdSLENBaENFLENBMUNmLEFBVUEsRUE1RGUsQUFPSSxBQXlLUCxDQTFIYSxBQXFERCxDQTVGSyxBQTZKN0IsQUFtQ2dDLEFBT2hDLENBMEJJLEFBV0EsQ0F2R2MsQUFZTixDQWpJTyxBQThGVyxBQWE5QixDQWpLaUIsQUF1TkcsQ0ExTWtCLENBK0N0QyxBQWlDa0IsQUFXQSxBQVlJLEFBb0ZTLENBdE5FLEVBc0NkLENBaUhELEFBK0NXLEdBekpULEdBNklMLENBM0ttQixDQXNEZCxDQTRFcEIsQ0E1Q29CLEFBT3BCLEFBSW9CLEFBT3BCLEFBK0dlLElBL0xLLEFBNEZILEFBcUJELENBbkdJLEVBc0lBLENBMERMLENBdk02RCxBQXFINUUsRUFvRW9CLEdBaktwQixDQWlJYyxDQXRNTSxBQXFHTyxBQVdBLEFBd0NmLENBckJZLENBeEd4QixBQW9QSSxDQTFCZSxDQTlNQyxDQWNHLEVBdENtQyxBQTRLeEMsQ0FsQ0csQ0E4Q0osRUFnQ0ssQ0ErQm5CLENBdk9pQixHQTlCSyxFQXFQekIsRUE5TUEsQ0E0RmEsQUF3RGEsQ0FZRCxDQWxHekIsQUFXQSxDQTNEQSxDQW9HQSxJQTFIQSxBQXdNYSxDQW5HQSxJQThLVCxHQWpUVSxBQTRTVixDQXJFTyxDQW5HVyxJQXVERixBQVlELEVBM0krQyxBQTRLOUMsRUF2T0EsUUFnQkMsRUFvSEUsQ0FtRUwsQ0FaRyxFQTZDQSxFQXZPOEIsQUFrTnJCLENBM0haLEVBMktkLE1BM0RZLElBbkVLLEVBNUNlLEFBZ0p0QixNQWhDSyxJQWlDSCxDQXRCQSxJQTlFYyxPQXFHVCxDQXRCTixNQXpKZixFQTFEMEMsQ0F3RjFDLEVBNEhrQixJQXJNUSxDQTJOMUIsRUFyR0EsT0FnRkEsUUFyTXNCLFVBMEtTLEVBekxFLEFBdU1qQyxNQXZMQSxpQkF3QmMsRUFrSmQsUUFqSkEsMkRBeENpQyxrRUFDNEIsb0hBQzdEIiwiZmlsZSI6Ii9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUgPT09ICdCVEMnID8gJ0JpdGNvaW4nIDogcHJvcHMubmFtZSA9PT0gJ0VUSCcgPyAnRXRoZXJldW0nIDogbnVsbCxcbiAgICAgICAgICAgIHNob3dNZW51OiBmYWxzZSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd01lbnUgPSB0aGlzLnNob3dNZW51LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKTtcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBNYWluLmdldEluaXRpYWxQcm9wc1xuICAgICAgICB9LCAyMDAwKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeTogeyBuYW1lLCBkYXRhLCBsYXN0Q29uZiwgYmFsYW5jZSB9IH0pIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgZGF0YTogZGF0YSwgbGFzdENvbmY6IGxhc3RDb25mLCBiYWxhbmNlOiBiYWxhbmNlIH1cbiAgICB9XG5cbiAgICBzaG93TWVudSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01lbnU6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZW51OiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWVudVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBuYW1lLCBzaG93TWVudSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHsgZGF0YSwgbGFzdENvbmYsIGJhbGFuY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBob2xkZXIgPSBcIjMwIE1pblwiXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3dNZW51KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPSdCaXRjb2luIEFuY2hvcnMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShkYXRhKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoICE9PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGVuZGluZyB7bmFtZX0gQW5jaG9yczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCgyLGF1dG8pXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzbWFsbCBzdHlsZT17eyBqdXN0aWZ5U2VsZjogXCJzdGFydFwiIH19PlR1cm4gb2ZmIG5vdGlmaWNhdGlvbnMgZm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNoZXJsb2NrIEhvbG1lczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VGhlIEdyZWF0IEdhdHNieTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ViBmb3IgVmVuZGV0dGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlRoZSBXb2xmIG9mIFdhbGxzdHJlZXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlF1YW50dW0gb2YgU29sYWNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0XCIgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDIsYXV0bylcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGp1c3RpZnlTZWxmOiBcInN0YXJ0XCIgfX0+VHVybiBvZmYgbm90aWZpY2F0aW9ucyBmb3I6IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyXCIgb25DbGljaz17dGhpcy5zaG93TWVudX0+e2hvbGRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TWVudSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS12YWx1ZT1cImVzXCIgb25DbGljaz17dGhpcy5tZW51U2VsZWN0fT5Fc3Bhw7FhLSBFc3Bhw7FvbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdmFsdWU9XCJlblwiIG9uQ2xpY2s9e3RoaXMubWVudVNlbGVjdH0+VW5pdGVkIFN0YXRlcyAtIEVuZ2xpc2g8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXZhbHVlPVwiZnJcIiBvbkNsaWNrPXt0aGlzLm1lbnVTZWxlY3R9PkZyYW5jZSAtIEZyYW7Dp2FpczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdmFsdWU9XCJkZVwiIG9uQ2xpY2s9e3RoaXMubWVudVNlbGVjdH0+RGV1dHNjaGxhbmQgLSBEZXV0c2NoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYW5nZW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+TGFzdCBBbmNob3I6IHtsYXN0Q29uZn0gfCBBZGRyZXNzIEJhbGFuY2U6IHtiYWxhbmNlICogMC4wMDAwMDAwMX0gfCBDb3VudDoge2RhdGEubGVuZ3RofSB8IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJGdWxsVGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoZWFkZXJoZWlnaHRcIj5IRUlHSFQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVydGltZVwiPlNUQVJUIFRJTUU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVya2V5bXJcIj5LRVlNUjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoZWFkZXJidGNoYXNoXCI+QlRDIEhBU0g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoYW5jaG9yKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Ake2FuY2hvci5faWR9YH0gY2xhc3NOYW1lPVwiYW5jaG9yLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLWhlaWdodGB9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEuNXJlbSAhaW1wb3J0YW50XCIgfX0gY2xhc3NOYW1lPVwiYm9keWhlaWdodFwiPnthbmNob3IuaGVpZ2h0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0tc3RhcnRlZF9hdGB9IGNsYXNzTmFtZT1cImJvZHlzdGFydGVkXCI+e21vbWVudChhbmNob3Iuc3RhcnRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJyl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1rZXltcmB9IGNsYXNzTmFtZT1cImJvZHlrZXltclwiPjxhIGhyZWY9e2BodHRwOi8vZXhwbG9yZXIuZmFjdG9tLmNvbS9kYmxvY2tzLyR7YW5jaG9yLmtleW1yfWB9IHRhcmdldD1cIl9ibGFua1wiPnthbmNob3Iua2V5bXJ9PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0tYnRjaGFzaGB9IGNsYXNzTmFtZT1cImJvZHlidGNoYXNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvci5idGNfaGFzaCA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCIjNEE0QTRBXCIgfX0+e2BCVEMgaGFzIG5vdCByZWNpZXZlZCB0cmFuc2FjdGlvbiB5ZXQuYH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5ibG9ja2NoYWluLmNvbS9idGMvdHgvJHthbmNob3IuYnRjX2hhc2h9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+e2FuY2hvci5idGNfaGFzaH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5QZW5kaW5nIHtuYW1lfSBBbmNob3JzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCgyLGF1dG8pXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBqdXN0aWZ5U2VsZjogXCJzdGFydFwiIH19PlR1cm4gb2ZmIG5vdGlmaWNhdGlvbnMgZm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2hlcmxvY2sgSG9sbWVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VGhlIEdyZWF0IEdhdHNieTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlYgZm9yIFZlbmRldHRhPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VGhlIFdvbGYgb2YgV2FsbHN0cmVldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlF1YW50dW0gb2YgU29sYWNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5MYXN0IEFuY2hvcjoge2xhc3RDb25mfSB8IEFkZHJlc3MgQmFsYW5jZToge2JhbGFuY2UgKiAwLjAwMDAwMDAxfSB8IENvdW50OiB7ZGF0YS5sZW5ndGh9IHwgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOb0FuY2hvcnNcIj48aDE+Tm8gcGVuZGluZyBBbmNob3JzITwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlbmRpbmcge25hbWV9IEFuY2hvcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZGF0YX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIj57YFxuICAgICAgICAgICAgICAgICAgICAuSGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLCAwLjkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uICAzcyA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA1cmVtIG1pbm1heCgzMDBweCwgNzgwcHgpIDJmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlYm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZWZvb3RlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVyb0dyb3VwSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGFibGVoZWFkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVyb0dyb3VwSGVhZGVyIHNtYWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uIDNzIDAuMnMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGhlYWQsXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwxNzBweCkgbWlubWF4KDEwMHB4LDIwMHB4KSBtaW5tYXgoMTAwcHgsMWZyKSBtaW5tYXgoMTAwcHgsMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGNvbGhlaWdodCBjb2x0aW1lIGNvbGtleW1yIGNvbGJ0Y2hhc2ggXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGhlYWQgdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyaGVpZ2h0IC5ib2R5aGVpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogIGNvbGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcnRpbWUgLmJvZHlzdGFydGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29sdGltZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVya2V5bXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb2xrZXltcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyYnRjaGFzaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbGJ0Y2hhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGVhZCB0aDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOUU5RTk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGJvZHkgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJvZHlrZXltciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJvZHlrZXltciBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg4RkM5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ib2R5YnRjaGFzaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJvZHlidGNoYXNoIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzODhGQzk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgey8qIC5jdXN0b20tZHJvcGRvd24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDsgLyogZGVtbyBvbmx5ICovXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duIHNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMi41ZW07XHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAwLjAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiBoaWRlIGRlZmF1bHQgYXJyb3cgaW4gY2hyb21lIE9TWCAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93bjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93bjo6YWZ0ZXIgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFx1MjViY1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC42MjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEuMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tZHJvcGRvd246OmJlZm9yZSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duIHNlbGVjdFtkaXNhYmxlZF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93biBzZWxlY3RbZGlzYWJsZWRdOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWRyb3Bkb3duOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMTUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbS1kcm9wZG93bjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgKi99XG5cblxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjY2NjYztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyQzNDO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCMxNDJDM0MsMiUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXHUyNWJjJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgey8qIC5pcy1vcGVue1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwNzcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhlbSAxZW0gMC44ZW0gMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRlYmJmMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpmaXJzdC1jaGlsZCAuaGVhZGVyaGVpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlICB0ciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsMTcwcHgpIG1pbm1heCgxMDBweCwxZnIpIG1pbm1heCgxMDBweCwxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGNvbGhlaWdodCBjb2xrZXltciBjb2xidGNoYXNoIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVydGltZSwgLmJvZHlzdGFydGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNi41cmVtIG1pbm1heCgzMDBweCw3ODBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcnRpbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgSGVyb0FuaW1hdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          name = _ref$query.name,
          data = _ref$query.data,
          lastConf = _ref$query.lastConf,
          balance = _ref$query.balance;
      return {
        name: name,
        data: data,
        lastConf: lastConf,
        balance: balance
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
//# sourceMappingURL=index.js.2f96daabdc78161e5ed6.hot-update.js.map