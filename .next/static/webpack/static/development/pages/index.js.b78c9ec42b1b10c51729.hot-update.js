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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        className: "jsx-721079808" + " " + "Hero"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-721079808" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-721079808"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-721079808" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-721079808"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-721079808"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-721079808" + " " + "headerheight"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-721079808" + " " + "headertime"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-721079808"
      }, "KEYMR"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-721079808"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-721079808" + " " + "anchor-row"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--height"),
          style: {
            paddingLeft: "1.5rem !important"
          },
          className: "jsx-721079808" + " " + "bodyheight"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-721079808" + " " + "bodystarted"
        }, anchor.started_at), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-721079808" + " " + "bodykeymr"
        }, anchor.keymr));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "721079808",
        css: ".Hero.jsx-721079808{background-size:cover;background-position:center;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);}.HeroGroup.jsx-721079808{margin:0 auto;padding:2rem;display:grid;grid-template-columns:1fr;grid-template-rows:5rem 65vh 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.Hero.jsx-721079808 h1.jsx-721079808{margin:0;grid-area:tableheader;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;opacity:0;-webkit-animation:HeroAnimation-jsx-721079808 3s;animation:HeroAnimation-jsx-721079808 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.Hero.jsx-721079808 p.jsx-721079808{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-721079808 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-721079808 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}.Hero.jsx-721079808 a.jsx-721079808{font-size:17px;font-weight:600;color:white;text-transform:uppercase;background:rgba(0,0,0,0.7);padding:9px 20px;border:1px solid rgba(255,255,255,0.25);border-radius:20px;-webkit-transition:0.8s cubic-bezier(0.2,0.8,0.2,1);transition:0.8s cubic-bezier(0.2,0.8,0.2,1);}.Hero.jsx-721079808 a.jsx-721079808:hover{background:white;color:black;}table.jsx-721079808{display:block;overflow-x:auto;border-collapse:collapse;text-align:left;white-space:nowrap;}table.jsx-721079808 thead.jsx-721079808{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas:\" colheight colstart colheight\";}table.jsx-721079808 thead.jsx-721079808 th.jsx-721079808{background:#E8E8E8;grid-area:colheight;font-size:60%;padding:1.5rem;font-weight:600;}thead.jsx-721079808 th.jsx-721079808:not(:first-child){padding-left:0 !important;}tbody.jsx-721079808 td.jsx-721079808{font-size:60%;padding:1.5rem;}tbody.jsx-721079808 td.jsx-721079808:not(:first-child){padding-left:0 !important;}.bodykeymr.jsx-721079808{display:block;font-family:'Roboto Mono',monospace;overflow:hidden;text-overflow:ellipsis;}@media (max-width:640px){.HeroGroup.jsx-721079808{padding:100px 20px;}.Hero.jsx-721079808 h1.jsx-721079808{font-size:40px;}.Hero.jsx-721079808 p.jsx-721079808{font-size:24px;}}@-webkit-keyframes HeroAnimation-jsx-721079808{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-721079808{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG1DLEFBRytDLEFBVVIsQUFjTCxBQWFzQixBQU9oQixBQVdFLEFBSUgsQUFPRCxBQUtNLEFBT08sQUFHWixBQUlZLEFBR1osQUFRUyxBQUlKLEFBSUEsQUFLTCxBQUtBLFNBekZRLENBcUZTLEFBS0QsR0FoREksQ0F2RHJCLEFBZ0RHLEFBc0JELEFBT3NCLENBNUNyQixBQXdEaEIsQUFJQSxFQWpEWSxFQWdCUyxBQXlCckIsR0FoRzJCLElBOEUvQixBQU9BLENBekVpQixDQXlCRSxDQW1CbkIsQUEwQkEsQ0F0QjZCLENBbkNOLEFBb0JQLFFBMkJFLENBM0RnQixHQXlCZCxBQVFTLElBcUIyQixFQWxFcEMsQ0F5QkwsQUErREssR0FoQkQsRUFaQyxJQXRCd0QsRUFaekQsSUF6Qk0sQ0FZaUIsQUE0RWYsRUEzQ08sQUEyQmQsR0FaRyxLQWxDSCxRQStDcEIsRUF4RWMsR0F3RmQsQ0E1QkEsRUFsQ29CLEdBbUJDLENBNUNELEdBY0MsQUFrRHJCLENBK0NJLEdBTEEsS0FoRlUsSUF6QnFDLEFBNENKLE1BbEJkLGtDQW1CVixNQTVDbUIsRUFhaEIsV0FnQ3lCLE9BL0I3QixpQkFidEIsQ0FjQSxZQVdpQyx5QkFRbkIsVUFDZCx3QkFXQSxPQW5CNkQsb0hBQzdEIiwiZmlsZSI6Ii9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSA9PT0gJ0JUQycgPyAnQml0Y29pbicgOiBwcm9wcy5uYW1lID09PSAnRVRIJyA/ICdFdGhlcmV1bScgOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5OiB7IG5hbWUsIGRhdGEgfSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZTogXCIsIG5hbWUpXG4gICAgICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIGRhdGE6IGRhdGEgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgZGF0YVwiLCBkYXRhKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPSdCaXRjb2luIEFuY2hvcnMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Hcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlbmRpbmcge25hbWV9IEFuY2hvcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkZ1bGxUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlcmhlaWdodFwiPkhFSUdIVDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVydGltZVwiPlNUQVJUIFRJTUU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPktFWU1SPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChhbmNob3IpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Ake2FuY2hvci5faWR9YH0gY2xhc3NOYW1lPVwiYW5jaG9yLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1oZWlnaHRgfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxLjVyZW0gIWltcG9ydGFudFwiIH19IGNsYXNzTmFtZT1cImJvZHloZWlnaHRcIj57YW5jaG9yLmhlaWdodH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2FuY2hvci5faWR9LS1zdGFydGVkX2F0YH0gY2xhc3NOYW1lPVwiYm9keXN0YXJ0ZWRcIj57YW5jaG9yLnN0YXJ0ZWRfYXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHthbmNob3IuX2lkfS0ta2V5bXJgfSBjbGFzc05hbWU9XCJib2R5a2V5bXJcIj57YW5jaG9yLmtleW1yfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIj57YFxuICAgICAgICAgICAgICAgICAgICAuSGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLDAsMCwgMC4xMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLDAsMCwgMC45KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVyb0dyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDVyZW0gNjV2aCAyZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVmb290ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YWJsZWhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDs7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IEhlcm9BbmltYXRpb24gIDNzIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uIDNzIDAuMnMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVybyBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuOHMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRoZWFkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgY29saGVpZ2h0IGNvbHN0YXJ0IGNvbGhlaWdodFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6ICBjb2xoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhlYWQgdGg6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGJvZHkgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGJvZHkgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJvZHlrZXltciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBIZXJvQW5pbWF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbi8vIGNvbnN0IFN0eWxleiA9ICgpID0+IChcblxuLy8gKSJdfQ== */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
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
//# sourceMappingURL=index.js.b78c9ec42b1b10c51729.hot-update.js.map