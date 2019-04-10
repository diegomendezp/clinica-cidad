webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tratamientos.js":
/*!************************************!*\
  !*** ./components/Tratamientos.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tratamientos; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PagesStyles_TratamientosStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PagesStyles/TratamientosStyle */ "./PagesStyles/TratamientosStyle.js");
/* harmony import */ var react_scroll_percentage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll-percentage */ "./node_modules/react-scroll-percentage/dist/react-scroll-percentage.esm.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_imgs_home_imgHome2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/imgs/home/imgHome2.jpg */ "./static/imgs/home/imgHome2.jpg");
/* harmony import */ var _static_imgs_home_imgHome2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_home_imgHome2_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_imgs_home_imghome2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/imgs/home/imghome2.png */ "./static/imgs/home/imghome2.png");
/* harmony import */ var _static_imgs_home_imghome2_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_home_imghome2_png__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/albertosoler/Desktop/TaylorHUB/Proyectos/Clients/ClinicaCiudad/components/Tratamientos.js";








var Tratamientos =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Tratamientos, _Component);

  function Tratamientos() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tratamientos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tratamientos).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_makeAnimation", function () {
      Object(popmotion__WEBPACK_IMPORTED_MODULE_10__["tween"])({
        from: {
          transalteX: -200,
          transalteY: 0,
          rotate: -10
        },
        to: {
          transalteX: 200,
          transalteY: 0,
          rotate: 20
        },
        duration: 2800,
        ease: popmotion__WEBPACK_IMPORTED_MODULE_10__["easing"].easeInOut
      }).start(function (v) {
        if (document.getElementById('image2') !== null) {
          document.getElementById('image2').style.webkitTransform = "translate(".concat(v.transalteX, "px, ").concat(v.transalteY, "px)");
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_checkVisible", function () {
      if (_this.state.animation && !_this.animationDone) {
        console.log("hola");
        document.getElementById('image1').style.display = "block";

        _this._makeAnimation();
      }
    });

    _this.state = {
      animation: false,
      animationDone: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tratamientos, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._makeAnimation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_div_100vh__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          height: "100rvh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TratamientosStyle__WEBPACK_IMPORTED_MODULE_8__["TratamientosWrapperStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_div_100vh__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          height: '100rvh'
        },
        className: "tratamientosContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: "100vw",
          height: "15vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll_percentage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onChange: function onChange(percentage, inView) {
          !inView ? _this2.setState({
            animation: inView,
            animationDone: true
          }) : _this2.setState({
            animation: inView
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        id: "image1",
        className: "upImage",
        src: _static_imgs_home_imgHome2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        id: "image2",
        className: "downImage",
        src: _static_imgs_home_imghome2_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))))));
    }
  }]);

  return Tratamientos;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.122a09dd431e565072c8.hot-update.js.map