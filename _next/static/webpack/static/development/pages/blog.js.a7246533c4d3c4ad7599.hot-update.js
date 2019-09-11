webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_pageSections_BlogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pageSections/BlogCard */ "./components/pageSections/BlogCard.js");
/* harmony import */ var _PagesStyles_BlogMainPageStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PagesStyles/BlogMainPageStyle */ "./PagesStyles/BlogMainPageStyle.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_FloatingMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FloatingMenu */ "./components/FloatingMenu.js");
/* harmony import */ var react_div_100vh_lib_Div100vh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-div-100vh/lib/Div100vh */ "./node_modules/react-div-100vh/lib/Div100vh.js");
/* harmony import */ var react_div_100vh_lib_Div100vh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh_lib_Div100vh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _content_blog_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content/blog.json */ "./content/blog.json");
var _content_blog_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/blog.json */ "./content/blog.json", 1);

var _jsxFileName = "/Users/Diegomendez1997/Tailor/clinica-cidad/ClinicaCiudad/pages/blog.js";











var displayPosts = function displayPosts() {
  var images = ["/static/imgs/blog/post1.jpg", "/static/imgs/blog/post2.jpg", "/static/imgs/blog/post3.jpg", "/static/imgs/blog/post4.jpg"];
  return _content_blog_json__WEBPACK_IMPORTED_MODULE_10__.map(function (post, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_pageSections_BlogCard__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      blog: post,
      key: i,
      imagen: images[Math.floor(Math.random() * images.length)],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  });
};

var Blog = function Blog(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FloatingMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PagesStyles_BlogMainPageStyle__WEBPACK_IMPORTED_MODULE_4__["BlogMainPageStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Main, {
    img: "/static/imgs/tratamientos/imgTratamientos.jpg",
    imgPosition: -551,
    title: "Clínica Cidad",
    subtitle: "nuestros tratamientos",
    footer: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "blogsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, displayPosts())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.a7246533c4d3c4ad7599.hot-update.js.map