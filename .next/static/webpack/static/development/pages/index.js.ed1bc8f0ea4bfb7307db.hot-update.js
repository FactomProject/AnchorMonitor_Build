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
        className: "jsx-3197642548" + " " + "Hero"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3197642548" + " " + "HeroGroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3197642548"
      }, "Pending ", name, " Anchors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-3197642548" + " " + "FullTable"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-3197642548"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-3197642548"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3197642548"
      }, "HEIGHT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3197642548"
      }, "START TIME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-3197642548"
      }, "KEYMR"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-3197642548"
      }, data.map(function (anchor) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          key: "".concat(anchor._id),
          className: "jsx-3197642548"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: "".concat(anchor._id, "--height"),
          className: "jsx-3197642548"
        }, anchor.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: "".concat(anchor._id, "--started_at"),
          className: "jsx-3197642548"
        }, anchor.started_at), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: "".concat(anchor._id, "--keymr"),
          className: "jsx-3197642548"
        }, anchor.keymr));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3197642548",
        css: ".Hero.jsx-3197642548{background-size:cover;background-position:center;grid-area:table;border-radius:0.4rem;z-index:1;background:#FFF;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.12);box-shadow:0 0 8px 0 rgba(0,0,0,0.9);}.HeroGroup.jsx-3197642548{margin:0 auto;padding:2rem;display:grid;grid-template-columns:1fr;grid-template-rows:5rem 65vh 2fr;grid-template-areas: \"tableheader\" \"tablebody\" \"tablefooter\";grid-row-gap:15px;text-align:center;}.Hero.jsx-3197642548 h1.jsx-3197642548{margin:0;grid-area:tableheader;justify-self:start;color:#000;font-size:2rem;font-weight:700;line-height:1.2;opacity:0;-webkit-animation:HeroAnimation-jsx-3197642548 3s;animation:HeroAnimation-jsx-3197642548 3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);animation-timing-function:cubic-bezier(0.2,0.8,0.2,1);}.Hero.jsx-3197642548 p.jsx-3197642548{color:rgba(255,255,255,0.8);font-size:30px;line-height:1.5;-webkit-animation:HeroAnimation-jsx-3197642548 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:HeroAnimation-jsx-3197642548 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);opacity:0;}.Hero.jsx-3197642548 a.jsx-3197642548{font-size:17px;font-weight:600;color:white;text-transform:uppercase;background:rgba(0,0,0,0.7);padding:9px 20px;border:1px solid rgba(255,255,255,0.25);border-radius:20px;-webkit-transition:0.8s cubic-bezier(0.2,0.8,0.2,1);transition:0.8s cubic-bezier(0.2,0.8,0.2,1);}.Hero.jsx-3197642548 a.jsx-3197642548:hover{background:white;color:black;}table.jsx-3197642548{display:block;overflow-x:auto;width:100%;border-collapse:collapse;text-align:left;white-space:nowrap;}table.jsx-3197642548 thead.jsx-3197642548 th.jsx-3197642548{background:#E8E8E8;font-size:90%;padding:1.5rem;font-weight:600;}thead.jsx-3197642548 th.jsx-3197642548:not(:first-child){padding-left:0;}@media (max-width:640px){.HeroGroup.jsx-3197642548{padding:100px 20px;}.Hero.jsx-3197642548 h1.jsx-3197642548{font-size:40px;}.Hero.jsx-3197642548 p.jsx-3197642548{font-size:24px;}}@-webkit-keyframes HeroAnimation-jsx-3197642548{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes HeroAnimation-jsx-3197642548{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodWFicmlnYXRpL2dvL3NyYy9naXRodWIuY29tL0ZhY3RvbVByb2plY3QvQW5jaG9yTW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG1DLEFBRytDLEFBVVIsQUFjTCxBQWFzQixBQU9oQixBQVdFLEFBSUgsQUFRSyxBQVNKLEFBS1EsQUFJSixBQUlBLEFBS0wsQUFLQSxTQTFFUSxDQXNFUyxBQUtELElBeEZqQixBQWdERyxDQWZBLEFBZ0NwQixBQVNJLEFBSUEsRUFsQ1ksRUFZRSxBQWNkLEdBakYyQixLQVlkLENBeUJFLENBbUJuQixDQUllLENBbkNRLEFBb0JQLEVBdUJHLE9BdkRlLENBZ0RMLEVBdkJULEFBUVMsS0F1QlQsQ0FwRUEsQ0F5QkwsU0FhNkQsRUFaekQsR0EyQ25CLENBcEV5QixDQVlpQixBQWdEdEIsRUFmYyxRQW5CZCxNQW1DRyxJQTVEVCxNQTBCTSxHQW1CQyxDQTVDRCxHQWNDLENBa0ZqQixDQXBDSixFQStCSSxLQWpFVSxJQXpCcUMsQUE0Q0osTUFsQmQsa0NBbUJWLE1BNUNtQixFQWFoQixXQWdDeUIsT0EvQjdCLGlCQWJ0QixDQWNBLGNBV2lDLHlCQVFuQixVQUNkLHNCQVdBLFNBbkI2RCxvSEFDN0QiLCJmaWxlIjoiL1VzZXJzL2pvc2h1YWJyaWdhdGkvZ28vc3JjL2dpdGh1Yi5jb20vRmFjdG9tUHJvamVjdC9BbmNob3JNb25pdG9yL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lID09PSAnQlRDJyA/ICdCaXRjb2luJyA6IHByb3BzLm5hbWUgPT09ICdFVEgnID8gJ0V0aGVyZXVtJyA6IG51bGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnk6IHsgbmFtZSwgZGF0YSB9IH0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lOiBcIiwgbmFtZSlcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgZGF0YTogZGF0YSB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBuYW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWVudCBkYXRhXCIsIGRhdGEpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9J0JpdGNvaW4gQW5jaG9ycyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGVuZGluZyB7bmFtZX0gQW5jaG9yczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiRnVsbFRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SEVJR0hUPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TVEFSVCBUSU1FPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5LRVlNUjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoYW5jaG9yKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgJHthbmNob3IuX2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2Ake2FuY2hvci5faWR9LS1oZWlnaHRgfT57YW5jaG9yLmhlaWdodH08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2Ake2FuY2hvci5faWR9LS1zdGFydGVkX2F0YH0+e2FuY2hvci5zdGFydGVkX2F0fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17YCR7YW5jaG9yLl9pZH0tLWtleW1yYH0+e2FuY2hvci5rZXltcn08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgICAgICAgICAgICAgLkhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwwLDAsIDAuMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwwLDAsIDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm9Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA1cmVtIDY1dmggMmZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlZm9vdGVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGFibGVoZWFkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBIZXJvQW5pbWF0aW9uICAzcyA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogSGVyb0FuaW1hdGlvbiAzcyAwLjJzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkhlcm8gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjhzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSGVybyBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhlYWQgdGg6KDpmaXJzdC1jaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhlYWQgdGg6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuSGVyb0dyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLkhlcm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgSGVyb0FuaW1hdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG4vLyBjb25zdCBTdHlsZXogPSAoKSA9PiAoXG5cbi8vICkiXX0= */\n/*@ sourceURL=/Users/joshuabrigati/go/src/github.com/FactomProject/AnchorMonitor/pages/index.js */"
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
//# sourceMappingURL=index.js.ed1bc8f0ea4bfb7307db.hot-update.js.map