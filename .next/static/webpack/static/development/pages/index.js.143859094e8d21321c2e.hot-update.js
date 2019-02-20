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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));
    _this.state = {
      name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null
    };
    setInterval(function () {
      Main.getInitialProps;
    }, 2000);
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var name = this.state.name;
      var _this$props = this.props,
          data = _this$props.data,
          lastConf = _this$props.lastConf,
          balance = _this$props.balance;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Bitcoin Anchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "Hero"
      }, Array.isArray(data) ? data.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-621978382"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)"
        },
        className: "jsx-621978382"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        style: {
          justifySelf: "start"
        },
        className: "jsx-621978382"
      }, "Turn off notifications for: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "custom-dropdown",
        className: "jsx-621978382"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "jsx-621978382"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-621978382"
      }, "Sherlock Holmes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-621978382"
      }, "The Great Gatsby"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-621978382"
      }, "V for Vendetta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-621978382"
      }, "The Wolf of Wallstreet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        className: "jsx-621978382"
      }, "Quantum of Solace"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-621978382"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance * 0.00000001, " | Count: ", data.length, " | "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-621978382" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-621978382"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-621978382"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-621978382" + " " + "headerheight"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-621978382" + " " + "headertime"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-621978382" + " " + "headerkeymr"
      }, "KEYMR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-621978382" + " " + "headerbtchash"
      }, "BTC HASH"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-621978382"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-621978382" + " " + "anchor-row"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--height"),
          style: {
            paddingLeft: "1.5rem !important"
          },
          className: "jsx-621978382" + " " + "bodyheight"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-621978382" + " " + "bodystarted"
        }, moment__WEBPACK_IMPORTED_MODULE_3___default()(anchor.started_at).format('YYYY-MM-DD HH:mm')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-621978382" + " " + "bodykeymr"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "http://explorer.factom.com/dblocks/".concat(anchor.keymr),
          target: "_blank",
          className: "jsx-621978382"
        }, anchor.keymr)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--btchash"),
          className: "jsx-621978382" + " " + "bodybtchash"
        }, anchor.btc_hash === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          style: {
            color: "#4A4A4A"
          },
          className: "jsx-621978382"
        }, "BTC has not recieved transaction yet.") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://www.blockchain.com/btc/tx/".concat(anchor.btc_hash),
          target: "_blank",
          className: "jsx-621978382"
        }, anchor.btc_hash)));
      })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-621978382"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-621978382"
      }, "Last Anchor: ", lastConf, " | Address Balance: ", balance / 0.00000001, " | Count: ", data.length, " | ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "NoAnchors"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-621978382"
      }, "No pending Anchors!"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382" + " " + "HeroGroupHeader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-621978382"
      }, "Pending ", name, " Anchors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-621978382"
      }, data))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "621978382",
        css: ".Hero.jsx-621978382{max-width:1400px;justify-self:center;width:-webkit-fill-available;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);-webkit-animation:HeroAnimation-jsx-621978382 3s;animation:HeroAnimation-jsx-621978382 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.HeroGroup.jsx-621978382{margin:0 auto;padding:2rem 2.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:5rem minmax(300px,780px) 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.HeroGroupHeader.jsx-621978382{grid-area:tableheader;display:grid;grid-template-rows:repeat(2,1fr);}.HeroGroupHeader.jsx-621978382 small.jsx-621978382{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;font-weight:600;}.Hero.jsx-621978382 h1.jsx-621978382{margin:0;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;}.Hero.jsx-621978382 p.jsx-621978382{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-621978382 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-621978382 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}table.jsx-621978382{display:block;overflow-x:auto;border-collapse:collapse;text-align:left;white-space:nowrap;}table.jsx-621978382 thead.jsx-621978382,table.jsx-621978382 tbody.jsx-621978382{display:grid;}table.jsx-621978382 tr.jsx-621978382{display:grid;grid-template-columns:minmax(100px,170px) minmax(100px,200px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight coltime colkeymr colbtchash \";}table.jsx-621978382 thead.jsx-621978382 th.jsx-621978382{background:#E8E8E8;font-size:70%;padding:1.5rem;font-weight:600;}.headerheight.jsx-621978382 .bodyheight.jsx-621978382{grid-area:colheight;padding-right:0;}.headertime.jsx-621978382 .bodystarted.jsx-621978382{grid-area:coltime;}.headerkeymr.jsx-621978382{grid-area:colkeymr;}.headerbtchash.jsx-621978382{grid-area:colbtchash;}thead.jsx-621978382 th.jsx-621978382:not(:first-child){padding-left:0 !important;}tbody.jsx-621978382 td.jsx-621978382{font-size:70%;padding:1.5rem;-webkit-letter-spacing:1.2px;-moz-letter-spacing:1.2px;-ms-letter-spacing:1.2px;letter-spacing:1.2px;color:#4A4A4A;border-bottom:1px solid #E9E9E9;}tbody.jsx-621978382 td.jsx-621978382:not(:first-child){padding-left:0 !important;}.bodykeymr.jsx-621978382{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodykeymr.jsx-621978382 a.jsx-621978382{text-transform:none;background:none;color:#388FC9;}.bodybtchash.jsx-621978382{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}.bodybtchash.jsx-621978382 a.jsx-621978382{text-transform:none;background:none;color:#388FC9;}@media (min-width:1235px){tbody.jsx-621978382 td.jsx-621978382:first-child .headerheight.jsx-621978382{padding-left:2rem;}}@media (max-width:700px){table.jsx-621978382 tr.jsx-621978382{grid-template-columns:minmax(100px,170px) minmax(100px,1fr) minmax(100px,1fr);grid-template-areas:\" colheight colkeymr colbtchash \";}.headertime.jsx-621978382,.bodystarted.jsx-621978382{display:none;}}@media (max-width:640px){.HeroGroup.jsx-621978382{padding:30px 20px;grid-template-rows:6.5rem minmax(300px,780px) 2fr;}.Hero.jsx-621978382 h1.jsx-621978382{font-size:35px;font-weight:400;}.Hero.jsx-621978382 p.jsx-621978382{font-size:24px;}}@media (max-width:450px){.Hero.jsx-621978382 h1.jsx-621978382{font-size:25px;font-weight:400;}.Hero.jsx-621978382 p.jsx-621978382{font-size:24px;}.headertime.jsx-621978382{display:none;}}@-webkit-keyframes HeroAnimation-jsx-621978382{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-621978382{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR21DLEFBRzBDLEFBY0gsQUFhUSxBQUtMLEFBS1IsQUFRc0IsQUFPakIsQUFRRCxBQUdBLEFBS00sQUFNRSxBQUlILEFBR0MsQUFHRSxBQUlLLEFBR1osQUFPWSxBQUdaLEFBTU0sQUFLTixBQU1NLEFBVUUsQUFLNEQsQUFJakUsQUFLSyxBQUtILEFBS0EsQUFNQSxBQUtBLEFBSUYsQUFNSCxBQUtBLFNBNUlLLENBd0lZLEFBS0QsR0F0SGxDLEFBR3NHLEFBMEVsRyxBQThCQSxDQXpKb0IsQUFzQ0osQUF1Q0QsQUFVc0IsQUFXQSxDQW1DakIsQUFLcEIsQUFNb0IsQUFLcEIsRUFuS29CLEFBZ0NMLENBOENuQixBQWtESSxBQWNzRCxDQTFFeEMsQUFhbEIsQ0FQb0IsQUFpQ0EsQUFXQSxDQWpDcEIsQ0ExRGlCLElBNkRqQixBQVVBLEVBNURlLEFBT0ksQ0ErQ00sQ0F2Q0ksQ0ErRnpCLEFBV0EsRUExRmUsQ0F0REYsQ0FhcUIsQ0ErQ3RDLEFBaUNrQixBQVdBLENBdEhlLEVBc0NkLElBT0MsSUE5QmMsQ0FzRGQsRUFnQ0EsQUFPcEIsQUFJb0IsQUFPcEIsSUFoRm9CLENBY0EsSUFQd0QsS0F3QjVFLEVBckVvQixBQXFHTyxBQVdBLEVBckYzQixBQWtISSxFQXRHZ0IsQ0FjRyxFQXRDbUMsS0FxSHZELENBckdpQixHQTlCSyxJQXVDekIsR0E4REEsQUFXQSxDQTNEQSxLQXRCQSxLQWlKSSxHQS9LVSxBQTBLVixRQTlHOEQsRUEzRDlDLFFBZ0JDLFFBZjhCLENBdUZqQyxFQXlDZCxZQXhDZ0MsNkJBN0JwQyxFQTFEMEMsQ0F3RjFDLE1BekUwQixrQkFDSixZQWZXLE1BZ0JqQyxlQXdCYyxVQUNkLDJEQXhDaUMsa0VBQzRCLG9IQUM3RCIsImZpbGUiOiIvVXNlcnMvam9zaHVhYnJpZ2F0aS9nby9zcmMvZ2l0aHViLmNvbS9GYWN0b21Qcm9qZWN0L0FuY2hvck1vbml0b3IvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lID09PSAnQlRDJyA/ICdCaXRjb2luJyA6IHByb3BzLm5hbWUgPT09ICdFVEgnID8gJ0V0aGVyZXVtJyA6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIE1haW4uZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgIH0sIDIwMDApXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5OiB7IG5hbWUsIGRhdGEsIGxhc3RDb25mLCBiYWxhbmNlIH0gfSkge1xuICAgICAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBkYXRhOiBkYXRhLCBsYXN0Q29uZjogbGFzdENvbmYsIGJhbGFuY2U6IGJhbGFuY2UgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHsgZGF0YSwgbGFzdENvbmYsIGJhbGFuY2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9J0JpdGNvaW4gQW5jaG9ycyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvXCI+XG4gICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGRhdGEpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvR3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvR3JvdXBIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5QZW5kaW5nIHtuYW1lfSBBbmNob3JzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDIsYXV0bylcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3tqdXN0aWZ5U2VsZjogXCJzdGFydFwifX0+VHVybiBvZmYgbm90aWZpY2F0aW9ucyBmb3I6IDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj5cbiAgICA8c2VsZWN0PlxuICAgICAgICA8b3B0aW9uPlNoZXJsb2NrIEhvbG1lczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPlRoZSBHcmVhdCBHYXRzYnk8L29wdGlvbj4gIFxuICAgICAgICA8b3B0aW9uPlYgZm9yIFZlbmRldHRhPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+VGhlIFdvbGYgb2YgV2FsbHN0cmVldDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPlF1YW50dW0gb2YgU29sYWNlPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkxhc3QgQW5jaG9yOiB7bGFzdENvbmZ9IHwgQWRkcmVzcyBCYWxhbmNlOiB7YmFsYW5jZSAqIDAuMDAwMDAwMDF9IHwgQ291bnQ6IHtkYXRhLmxlbmd0aH0gfCA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiRnVsbFRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVyaGVpZ2h0XCI+SEVJR0hUPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcnRpbWVcIj5TVEFSVCBUSU1FPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcmtleW1yXCI+S0VZTVI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVyYnRjaGFzaFwiPkJUQyBIQVNIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGFuY2hvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgJHthbmNob3IuX2lkfWB9IGNsYXNzTmFtZT1cImFuY2hvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1oZWlnaHRgfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxLjVyZW0gIWltcG9ydGFudFwiIH19IGNsYXNzTmFtZT1cImJvZHloZWlnaHRcIj57YW5jaG9yLmhlaWdodH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLXN0YXJ0ZWRfYXRgfSBjbGFzc05hbWU9XCJib2R5c3RhcnRlZFwiPnttb21lbnQoYW5jaG9yLnN0YXJ0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbScpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0ta2V5bXJgfSBjbGFzc05hbWU9XCJib2R5a2V5bXJcIj48YSBocmVmPXtgaHR0cDovL2V4cGxvcmVyLmZhY3RvbS5jb20vZGJsb2Nrcy8ke2FuY2hvci5rZXltcn1gfSB0YXJnZXQ9XCJfYmxhbmtcIj57YW5jaG9yLmtleW1yfTwvYT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7YW5jaG9yLl9pZH0tLWJ0Y2hhc2hgfSBjbGFzc05hbWU9XCJib2R5YnRjaGFzaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3IuYnRjX2hhc2ggPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzRBNEE0QVwiIH19PntgQlRDIGhhcyBub3QgcmVjaWV2ZWQgdHJhbnNhY3Rpb24geWV0LmB9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYnRjL3R4LyR7YW5jaG9yLmJ0Y19oYXNofWB9IHRhcmdldD1cIl9ibGFua1wiPnthbmNob3IuYnRjX2hhc2h9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvR3JvdXBIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGVuZGluZyB7bmFtZX0gQW5jaG9yczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkxhc3QgQW5jaG9yOiB7bGFzdENvbmZ9IHwgQWRkcmVzcyBCYWxhbmNlOiB7YmFsYW5jZSAvIDAuMDAwMDAwMDF9IHwgQ291bnQ6IHtkYXRhLmxlbmd0aH0gfCA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vQW5jaG9yc1wiPjxoMT5ObyBwZW5kaW5nIEFuY2hvcnMhPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGVuZGluZyB7bmFtZX0gQW5jaG9yczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntkYXRhfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PVwidHJ1ZVwiPntgXG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwwLDAsIDAuMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwwLDAsIDAuOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IEhlcm9BbmltYXRpb24gIDNzIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVyb0dyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDVyZW0gbWlubWF4KDMwMHB4LCA3ODBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlZm9vdGVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXBIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YWJsZWhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXBIZWFkZXIgc21hbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IEhlcm9BbmltYXRpb24gM3MgMC4ycyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB0aGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSAgdHIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LDE3MHB4KSBtaW5tYXgoMTAwcHgsMjAwcHgpIG1pbm1heCgxMDBweCwxZnIpIG1pbm1heCgxMDBweCwxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgY29saGVpZ2h0IGNvbHRpbWUgY29sa2V5bXIgY29sYnRjaGFzaCBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB0aGVhZCB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRThFOEU4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJoZWlnaHQgLmJvZHloZWlnaHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAgY29saGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVydGltZSAuYm9keXN0YXJ0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb2x0aW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJrZXltciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbGtleW1yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJidGNoYXNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29sYnRjaGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRib2R5IHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U5RTlFOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWtleW1yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWtleW1yIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzODhGQzk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJvZHlidGNoYXNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYm9keWJ0Y2hhc2ggYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM4OEZDOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuTm9BbmNob3JzIHtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keSB0ZDpmaXJzdC1jaGlsZCAuaGVhZGVyaGVpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlICB0ciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsMTcwcHgpIG1pbm1heCgxMDBweCwxZnIpIG1pbm1heCgxMDBweCwxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGNvbGhlaWdodCBjb2xrZXltciBjb2xidGNoYXNoIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVydGltZSwgLmJvZHlzdGFydGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNi41cmVtIG1pbm1heCgzMDBweCw3ODBweCkgMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcnRpbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgSGVyb0FuaW1hdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
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
//# sourceMappingURL=index.js.143859094e8d21321c2e.hot-update.js.map