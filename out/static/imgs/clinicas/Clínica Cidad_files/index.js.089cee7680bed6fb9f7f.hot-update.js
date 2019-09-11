webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _PagesStyles_NavBarStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PagesStyles/NavBarStyle */ "./PagesStyles/NavBarStyle.js");
/* harmony import */ var _PagesStyles_TextStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PagesStyles/TextStyles/NavTextStyle */ "./PagesStyles/TextStyles/NavTextStyle.js");
/* harmony import */ var _PagesStyles_TextStyles_NavLinkStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../PagesStyles/TextStyles/NavLinkStyle */ "./PagesStyles/TextStyles/NavLinkStyle.js");
/* harmony import */ var _static_imgs_home_logoMenu_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/imgs/home/logoMenu.jpg */ "./static/imgs/home/logoMenu.jpg");
/* harmony import */ var _static_imgs_home_logoMenu_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_home_logoMenu_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_imgs_tailorBlackLogo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/imgs/tailorBlackLogo.svg */ "./static/imgs/tailorBlackLogo.svg");
/* harmony import */ var _static_imgs_tailorBlackLogo_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_tailorBlackLogo_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/albertosoler/Desktop/TaylorHUB/Proyectos/Clients/ClinicaCiudad/components/NavBar.js";








var Box = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({
  up: {
    y: function y(_ref) {
      var _y = _ref.y;
      return _y;
    },
    transition: {
      duration: 400,
      ease: 'linear'
    }
  },
  down: {
    y: function y(_ref2) {
      var y2 = _ref2.y2;
      return y2;
    },
    transition: {
      duration: 400,
      ease: 'linear'
    }
  }
});

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavBar, _React$Component);

  function NavBar() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_manageResize", function () {
      switch (true) {
        case window.innerWidth < 376:
          return {
            y: -window.innerHeight * 1.20,
            y2: 70
          };

        case window.innerWidth < 415:
          return {
            y: -window.innerHeight * 1.20,
            y2: 0
          };

        case window.innerWidth < 769:
          return {
            y: -window.innerHeight * 1.20,
            y2: 0
          };

        default:
          return {
            y: -window.innerHeight * 1.20,
            y2: 0
          };
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hamburgerEffect", function () {
      var el = _this.state.hamburger;

      if (el.classList) {
        el.classList.toggle('is-active');
      } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf('is-active');
        if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push('is-active');
        el.className = classes.join(' ');
      }

      if (_this.state.visible) {
        setTimeout(function () {
          _this.setState({
            visible: !_this.state.visible
          });
        }, 400);
      } else {
        _this.setState({
          visible: !_this.state.visible
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_managePositionNav", function () {
      if (_this.state.pos) {
        _this.setState({
          position: !_this.state.position,
          pos: !_this.state.pos
        }, function () {
          return _this.hamburgerEffect();
        });
      } else {
        _this.setState({
          position: !_this.state.position
        }, function () {
          _this.hamburgerEffect();

          setTimeout(function () {
            _this.setState({
              pos: !_this.state.pos
            });
          }, 400);
        });
      }
    });

    _this.state = {
      hamburger: undefined,
      position: true,
      pos: true,
      menuSizes: {
        y: -1000,
        y2: 0
      },
      visible: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        hamburger: document.getElementsByClassName("hamburger")[0],
        menuSizes: this._manageResize()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_NavBarStyle__WEBPACK_IMPORTED_MODULE_9__["NavWrapperStyle"], {
        position: this.state.pos,
        visible: this.state.visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menuIcon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        href: "/static/css/hamburger.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "hamburger hamburger--spin",
        type: "button",
        onClick: function onClick() {
          return _this2._managePositionNav();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "hamburger-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "hamburger-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Box, {
        pose: this.state.position ? "up" : "down",
        className: "menu",
        y: this.state.menuSizes !== undefined && this.state.menuSizes.y,
        y2: this.state.menuSizes !== undefined && this.state.menuSizes.y2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menuSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "leftSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "logoSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "logo",
        src: _static_imgs_home_logoMenu_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subMenuSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Citas: 600 000 000 \u2013 91 000 000\u2028"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Calle Alcal\xE1 590 1A"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Citas: 600 000 000 \u2013 91 000 000\u2028"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Calle Machupichu 25"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "info@clinicacidad.es"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rightSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subMenuSection2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/clinicas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavLinkStyle__WEBPACK_IMPORTED_MODULE_11__["NavLinkStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Cl\xEDnicas")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/tratamientos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavLinkStyle__WEBPACK_IMPORTED_MODULE_11__["NavLinkStyle"], {
        title: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Tratamientos")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavLinkStyle__WEBPACK_IMPORTED_MODULE_11__["NavLinkStyle"], {
        top: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "- Medicina est\xE9tica"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavLinkStyle__WEBPACK_IMPORTED_MODULE_11__["NavLinkStyle"], {
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "- Ortodoncia y odeontolog\xEDa"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/equipo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavLinkStyle__WEBPACK_IMPORTED_MODULE_11__["NavLinkStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Equipo")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavLinkStyle__WEBPACK_IMPORTED_MODULE_11__["NavLinkStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Blog"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menuFooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_TextStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "\xA9 2019 by Tailor"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_imgs_tailorBlackLogo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.089cee7680bed6fb9f7f.hot-update.js.map