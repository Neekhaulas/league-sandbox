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

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    transform: translateX(-50%);\n    opacity: 1;\n    bottom: calc(100% + 25px);\n    width: 18px;\n    height: 50vh;\n    background-repeat: no-repeat;\n    background-position: bottom;\n    background-size: cover;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n\n  & > img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  font-family: Beaufort for LOL,serif;\n  min-width: 280px;\n  padding: 24px 20px;\n  margin: 54px 0;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(180deg,#0596aa 0,#005a82);\n\n  font-family: Beaufort for LOL,serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #cdfafa;\n\n  cursor: pointer;\n  line-height: 1;\n  border: none;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 0 25px rgba(0,0,0,.11);\n  transition: color .2s;\n  min-width: 240px;\n  max-width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    background: url(https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_GB/004b1dd2a516e1436a86d42ed703aa621803918c/assets/en_GB/assets/button-bg-pattern.png) repeat-x 0 0;\n    background-size: auto 100%;\n    background-position: 0 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: .3;\n    animation: button-background 60s linear infinite;\n    animation-play-state: paused;\n    will-change: background-position;\n    transition: .4s ease\n  }\n\n  &:hover:after {\n    opacity: .5;\n    animation-play-state: running\n  }\n\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    background: #111;\n    z-index: -1\n    top: 4px;\n    left: 4px;\n    right: 4px;\n    bottom: 4px\n  }\n\n  @-webkit-keyframes button-background {\n    0% {\n        background-position: 0 0\n    }\n    to {\n        background-position: 100% 0\n    }\n  }\n\n  @keyframes button-background {\n    0% {\n        background-position: 0 0\n    }\n    to {\n        background-position: 100% 0\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -100;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: -9999px;\n  right: -9999px;\n  bottom: -9999px;\n  left: -9999px;\n  margin: auto;\n  min-width: 100%;\n  min-height: 100%;\n  filter: blur(4px);\n  opacity: .2;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 50px;\n  color: #fff;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n@font-face {\n  font-family:\"Beaufort for LOL\";\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.eot?#iefix\");\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.eot?#iefix\") format(\"eot\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.woff\") format(\"woff\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.ttf\") format(\"truetype\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.svg#\") format(\"svg\");\n  font-weight: 1 699;\n}\n@font-face {\n  font-family:\"Beaufort for LOL\";\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.eot?#iefix\");\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.eot?#iefix\") format(\"eot\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.woff\") format(\"woff\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.ttf\") format(\"truetype\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.svg#\") format(\"svg\");\n  font-weight: 700 999;\n}\n@font-face {\n  font-family:\"Spiegel\";\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.eot?#iefix\");\n  src:url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.eot?#iefix\") format(\"eot\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.woff\") format(\"woff\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.ttf\") format(\"truetype\"),url(\"https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.svg#\") format(\"svg\");\n}\n\nbody {\n  background-color: #111;\n  font-family: Beaufort for LOL,serif;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject2());
var BackgroundVideo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].video(_templateObject3());
var BackgroundComponent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject5());
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
var SceneContent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject7());

var Home = function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Home - Nextron (with-javascript)")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(SceneContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(BackgroundComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(BackgroundVideo, {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("source", {
    src: "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_GB/004b1dd2a516e1436a86d42ed703aa621803918c/assets/en_GB/assets/summoners-rift.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }))), __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "PLAY LEAGUE SANDBOX NOW"), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("img", {
    src: "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_GB/004b1dd2a516e1436a86d42ed703aa621803918c/assets/en_GB/assets/divider-download.png",
    alt: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "DOWNLOAD"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.e88687884f2960d2ebc0.hot-update.js.map