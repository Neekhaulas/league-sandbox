webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/nroy/league-sandbox/renderer/pages/home.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 50px;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n@font-face {\n  font-family:\"Beaufort for LOL\";\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.eot?#iefix\");\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.eot?#iefix\") format(\"eot\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.woff\") format(\"woff\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.ttf\") format(\"truetype\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.svg#\") format(\"svg\");\n  font-weight: 1 699;\n}\n@font-face {\n  font-family:\"Beaufort for LOL\";\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.eot?#iefix\");\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.eot?#iefix\") format(\"eot\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.woff\") format(\"woff\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.ttf\") format(\"truetype\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.svg#\") format(\"svg\");\n  font-weight: 700 999;\n}\n@font-face {\n  font-family:\"Spiegel\";\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.eot?#iefix\");\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.eot?#iefix\") format(\"eot\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.woff\") format(\"woff\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.ttf\") format(\"truetype\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.svg#\") format(\"svg\");\n}\n\nbody {\n  @import url('https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.woff');\n  font-family: Beaufort for LOL,serif;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject3());

var Home = function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Home - Nextron (with-javascript)")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "PLAY LEAGUE SANDBOX NOW"), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "DOWNLOAD")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.6a6e934d53c5374e6f5d.hot-update.js.map