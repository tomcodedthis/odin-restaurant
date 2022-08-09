/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*-----\\nGlobal\\n-----*/\\n:root {\\n  font-size: 18px;\\n  --black: #212121;\\n  --white: #fefefe;\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n}\\nbody {\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n  height: 100vh;\\n  width: 100vw;\\n  align-items: center;\\n  grid-template-rows: 150px 1fr 75px;\\n  background-color: var(--white);\\n}\\nheader {\\n  justify-content: center;\\n}\\nmain {\\n  color: var(--black);\\n  overflow: scroll;\\n  justify-content: center;\\n  height: 100%;\\n}\\nfooter {\\n  align-items: center;\\n  justify-content: center;\\n}\\nbutton {\\n  font-size: 2rem;\\n  border: none;\\n  padding: 20px;\\n  background-color: var(--white);\\n  border: 5px solid var(--black);\\n}\\n  button:hover {\\n    box-shadow: 10px 10px 0 0 var(--black);\\n    cursor: pointer;\\n  }\\na {\\n  text-decoration: none;\\n  color: var(--white)\\n}\\nimg {\\n  width: 400px;\\n  border: 10px solid var(--black);\\n}\\n/*-----\\nTypography\\n-----*/\\nh1 {\\n  font-size: 3.6rem;\\n  font-weight: 700;\\n  letter-spacing: 0.4rem;\\n}\\nh2 {\\n  font-size: 2.4rem;\\n}\\nh3 {\\n  font-size: 1.8rem;\\n}\\nh4 {\\n  font-size: 1.6rem;\\n  font-weight: 500;\\n}\\n/*-----\\nPage\\n-----*/\\n.header-cont {\\n  justify-content: space-between;\\n  justify-self: center;\\n  align-items: flex-end;\\n  padding: 25px;\\n  gap: 25px;\\n}\\n  .nav {\\n    font-size: 2rem;\\n  }\\n    .nav-list {\\n      gap: 10px;\\n    }\\n    .nav-link {\\n      font-style: italic;\\n      padding: 10px 20px;\\n      border: solid var(--black);\\n      border-width: 5px 0 0 0;\\n    }\\n      .nav-link:hover {\\n        cursor: pointer;\\n      }\\n\\n.section-cont {\\n  height: max-content;\\n  padding: 40px;\\n  grid-template-columns: 68% 32%;\\n  align-items: center;\\n  box-shadow: -15px -15px 0 0 var(--black);\\n  margin: 75px 50px 25px 50px;\\n  border: 10px solid var(--black);\\n}\\n  .section-left {\\n    width: 90%;\\n    gap: 40px;\\n    align-items: flex-start;\\n  }\\n    .section-btn {\\n      font-weight: 900;\\n      text-transform: uppercase;\\n      align-self: center;\\n    }\\n  .section-right {\\n    align-items:stretch;\\n  }\\n    .section-title {\\n      font-size: 3.2rem;\\n      justify-self: left;\\n    }\\n    .section-text {\\n      line-height: 2.4rem;\\n    }\\n\\n.menu-cont {\\n  margin-top: 30px;\\n}\\n  .menu-title {\\n    font-style: italic;\\n  }\\n  .item-cont {\\n    grid-template-columns: 85% 10%;\\n    gap: 15px;\\n    padding: 20px 0;\\n  }\\n    .item-title {\\n      grid-area: 1 / 1 / span 1 / span 1;\\n    }\\n    .item-info {\\n      grid-area: 2 / 1 / span 1 / span 1;\\n      line-height: 2.4rem;\\n    }\\n    .item-price {\\n      grid-area: 1 / 2 / span 3 / span 1;\\n    }\\n\\n.contact-cont {\\n  gap: 40px;\\n}\\n  .contact-form {\\n    grid-template-columns: repeat(2, 1fr);\\n    gap: 20px 10px;\\n    align-items: center;\\n    justify-items: center;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n    .form-label {\\n      font-size: 1.4rem;\\n      width: 90%;\\n    }\\n    .form-input {\\n      font-size: 1.6rem;\\n      border: 3px solid var(--black);\\n      padding: 10px 15px;\\n      margin-top: 10px;\\n      width: 100%;\\n      height: 50%;\\n    }\\n      .message-label {\\n        grid-area: 2 / 1 / span 1 / span 3;\\n      }\\n      .contact-submit {\\n        height: 100px;\\n        grid-area: 3 / 1 / span 1 / span 3;\\n      }\\n\\n.credit {\\n  justify-content: center;\\n  font-size: 1.4rem;\\n  font-weight: 700;\\n  padding: 5px;\\n}\\n/*-----\\nRe-useable\\n-----*/\\n.flex {\\n  display: flex;\\n}\\n.center {\\n  justify-content: center;\\n}\\n.column {\\n  flex-direction: column;\\n}\\n.grid {\\n  display: grid;\\n}\\n.page-width {\\n  width: clamp(1000px, 100%, 1500px);\\n}\\n.full-size {\\n  width: 100%;\\n  height: 100%;\\n}\\n.reversed-color {\\n  color: var(--white);\\n  background-color: var(--black);\\n}\\n.support-color {\\n  background-color: aliceblue;\\n}\\n.overline {\\n  border-color: var(--white);\\n}\\n.item-line {\\n  width: 90%;\\n  height: 3px;\\n  background-color: var(--black);\\n  align-self: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n\n    const newSection = document.createElement('section');\n    newSection.classList.add('section-cont', 'flex', 'column', 'support-color', 'page-width', 'contact-cont');\n\n    const sectionTitle = document.createElement('h2');\n    sectionTitle.classList.add('section-title');\n    sectionTitle.innerText = sectionData.title;\n\n    const sectionText = document.createElement('h4');\n    sectionText.classList.add('section-text');\n    sectionText.innerText = sectionData.text;\n\n    function createForm() {\n\n        const form = document.createElement('form');\n        form.classList.add('contact-form', 'grid');\n    \n        const nameLabel = document.createElement('legend');\n        nameLabel.classList.add('name-label', 'form-label');\n        nameLabel.name = 'name';\n        nameLabel.textContent = 'Name:';\n\n        const formName = document.createElement('input');\n        formName.classList.add('contact-name', 'form-input');\n        formName.type = 'text';\n        formName.name = 'name';\n\n        nameLabel.append(formName)\n\n        const emailLabel = document.createElement('legend');\n        emailLabel.classList.add('email-label', 'form-label');\n        emailLabel.name = 'email';\n        emailLabel.textContent = 'Email:';\n\n        const formEmail = document.createElement('input');\n        formEmail.classList.add('contact-email', 'form-input');\n        formEmail.type = 'email';\n        formEmail.name = 'email';\n\n        emailLabel.append(formEmail)\n\n        const messageLabel = document.createElement('legend');\n        messageLabel.classList.add('message-label', 'form-label');\n        messageLabel.name = 'message';\n        messageLabel.textContent = 'Message:';\n\n        const formMessage = document.createElement('textarea');\n        formMessage.classList.add('contact-message', 'form-input');\n        formMessage.name = 'message';\n  \n        messageLabel.append(formMessage)\n\n        const submitBtn = document.createElement('button');\n        submitBtn.classList.add('contact-submit', 'section-btn');\n        submitBtn.innerText = 'SEND';\n\n        form.append(nameLabel, emailLabel, messageLabel, submitBtn)\n\n        return form\n\n    }\n\n    newSection.append(sectionTitle, sectionText, createForm())\n\n    return newSection\n\n}\n\nconst sectionData = {\n    title: \"CONTACT\",\n    text: \"Send us a message by filling the form out below.\",\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ section)\n/* harmony export */ });\n/* harmony import */ var _images_food_dish_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food-dish.jpeg */ \"./src/images/food-dish.jpeg\");\n\n\nfunction section() {\n\n    const newSection = document.createElement('section');\n    newSection.classList.add('section-cont', 'grid', 'support-color', 'page-width');\n\n    const sectionLeft = document.createElement('div');\n    sectionLeft.classList.add('section-left', 'column', 'flex');\n\n    const sectionTitle = document.createElement('h2');\n    sectionTitle.classList.add('section-title');\n    sectionTitle.innerText = sectionData.title;\n\n    const sectionText = document.createElement('h4');\n    sectionText.classList.add('section-text');\n    sectionText.innerText = sectionData.text;\n\n    const sectionBtn = document.createElement('button');\n    sectionBtn.classList.add('section-btn');\n    sectionBtn.innerText = 'Explore Menu';\n    sectionBtn.id = 'explore';\n\n    const sectionRight = document.createElement('div');\n    sectionRight.classList.add('section-right', 'flex', 'column');\n\n    const sectionImg = document.createElement('img');\n    sectionImg.classList.add('section-img');\n    sectionImg.src = sectionData.image;\n    sectionImg.alt = sectionData.imgAlt;\n\n    sectionLeft.append(sectionTitle, sectionText, sectionBtn)\n    sectionRight.appendChild(sectionImg)\n    newSection.append(sectionLeft, sectionRight)\n\n    return newSection\n\n}\n\nconst sectionData = {\n    title: \"Treat your tastebuds\",\n    text: \"A daily menu, all freshly prepared in the pub kitchen. Including fresh fish, pies, steaks and chef's daily specials with main course prices ranging from £11.50 - £19.50.\",\n    image: _images_food_dish_jpeg__WEBPACK_IMPORTED_MODULE_0__,\n    imgAlt: 'Chicken and Rice Dish'\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nfunction header() {\n\n    const head = document.createElement('header');\n    head.classList.add('flex', 'reversed-color', 'full-size');\n\n    const headerCont = document.createElement('div');\n    headerCont.classList.add('header-cont', 'flex', 'page-width', 'reversed-color');\n\n    const title = document.createElement('h1');\n    title.classList.add('title');\n    title.innerText = 'Restaurant';\n\n    const nav = document.createElement('nav');\n    nav.classList.add('nav', 'flex');\n\n    const navList = document.createElement('div');\n    navList.classList.add('nav-list', 'flex');\n\n    const homeLink = document.createElement('a');\n    homeLink.classList.add('nav-link', 'border');\n    homeLink.id = 'home';\n    homeLink.innerText = 'HOME';\n\n    const menuLink = document.createElement('a');\n    menuLink.classList.add('nav-link');\n    menuLink.id = 'menu';\n    menuLink.innerText = 'MENU';\n\n    const contactLink = document.createElement('a');\n    contactLink.classList.add('nav-link', 'border');\n    contactLink.id = 'contact';\n    contactLink.innerText = 'CONTACT';\n\n    navList.appendChild(homeLink);\n    navList.appendChild(menuLink);\n    navList.appendChild(contactLink);\n    nav.appendChild(navList);\n    headerCont.append(title, nav);\n    head.appendChild(headerCont);\n\n    return head\n\n}\n\nfunction main() {\n\n    const mainCont = document.createElement('main');\n    mainCont.classList.add('flex', 'full-size');\n    \n    return mainCont\n\n}\n\nfunction footer() {\n\n    const foot = document.createElement('footer');\n    foot.classList.add('flex','center', 'reversed-color', 'full-size');\n\n    const credit = document.createElement('div');\n    credit.classList.add('credit', 'flex');\n\n    const creditText = document.createElement('a');\n    creditText.classList.add('credit-text');\n    creditText.innerText = 'Made with 🔥 by @tomcodedthis';\n    creditText.href = 'https://github.com/tomcodedthis';\n\n    credit.appendChild(creditText);\n    foot.appendChild(credit);\n\n    return foot\n\n}\n\nfunction changePages(e) {\n\n    e.preventDefault();\n    navLinks.forEach(link => link.classList.remove('overline'))\n\n    if (this.id === 'home') {\n\n        document.querySelector('#home').classList.add('overline')\n        document.querySelector('main').replaceChildren((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n    } else if (this.id === 'menu') {\n\n        document.querySelector('#menu').classList.add('overline')\n        document.querySelector('main').replaceChildren((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n\n    } else if (this.id === 'contact') {\n\n        document.querySelector('#contact').classList.add('overline')\n        document.querySelector('main').replaceChildren((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\n\n    }\n\n}\n\nfunction processBtns(e) {\n\n    e.preventDefault();\n\n    if (e.target.id === 'explore') {\n\n        document.querySelector('#menu').click()\n\n    }\n\n}\n\ndocument.body.classList.add('grid');\ndocument.body.appendChild(header());\ndocument.body.appendChild(main());\ndocument.body.appendChild(footer());\n\ndocument.querySelector('main').appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ndocument.querySelector('#home').classList.add('overline');\n\nconst navLinks = document.body.querySelectorAll('.nav-link');\nconst buttons = document.body.querySelectorAll('.section-btn');\n\nnavLinks.forEach(link => link.addEventListener('click', changePages));\nbuttons.forEach(btn => btn.addEventListener('click', processBtns));\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n\n    const newSection = document.createElement('section');\n    newSection.classList.add('section-cont', 'flex', 'column', 'support-color', 'page-width');\n\n    const sectionTitle = document.createElement('h3');\n    sectionTitle.classList.add('section-title');\n    sectionTitle.innerText = 'MENU';\n\n    const startersCont = document.createElement('div');\n    startersCont.classList.add('menu-cont', 'full-size', 'flex', 'column');\n\n    const starterTitle = subtitle('STARTERS');\n    startersCont.append(starterTitle);\n    sectionData.starters.forEach(starter => {\n\n        let line = document.createElement('div');\n        line.classList.add('item-line');\n\n        let item = menuItem(starter.item, starter.description, starter.price);\n\n        if (sectionData.starters.indexOf(starter) === (sectionData.starters.length - 1)) {\n            \n            startersCont.append(item)\n\n        } else {\n\n            startersCont.append(item, line)\n\n        }\n\n    })\n\n    const mainsCont = document.createElement('div');\n    mainsCont.classList.add('menu-cont', 'full-size', 'flex', 'column');\n\n    const mainTitle = subtitle('MAINS');\n    mainsCont.append(mainTitle);\n    sectionData.mains.forEach(main => {\n\n        let line = document.createElement('div');\n        line.classList.add('item-line');\n\n        let item = menuItem(main.item, main.description, main.price);\n\n        if (sectionData.mains.indexOf(main) === (sectionData.mains.length - 1)) {\n            \n            mainsCont.append(item)\n\n        } else {\n\n            mainsCont.append(item, line)\n\n        }\n\n    })\n\n    const dessertsCont = document.createElement('div');\n    dessertsCont.classList.add('menu-cont', 'full-size', 'flex', 'column');\n\n    const desertsTitle = subtitle('DESSERTS');\n    dessertsCont.append(desertsTitle);\n    sectionData.desserts.forEach(dessert => {\n\n        let line = document.createElement('div');\n        line.classList.add('item-line');\n\n        let item = menuItem(dessert.item, dessert.description, dessert.price);\n\n        if (sectionData.desserts.indexOf(dessert) === (sectionData.desserts.length - 1)) {\n            \n            dessertsCont.append(item)\n\n        } else {\n\n            dessertsCont.append(item, line)\n\n        }\n\n    })\n\n    newSection.append(sectionTitle, startersCont, mainsCont, dessertsCont)\n\n    function subtitle(title) {\n\n        const tempTitle = document.createElement('h2');\n        tempTitle.classList.add('menu-title');\n        tempTitle.innerText = title;\n\n        return tempTitle\n\n    }\n\n    function menuItem(item, info, price) {\n\n        const itemCont = document.createElement('div');\n        itemCont.classList.add('item-cont', 'grid', 'border');\n\n        const itemName = document.createElement('h3');\n        itemName.classList.add('item-title', 'item-data');\n        itemName.innerText = item;\n\n        const itemInfo = document.createElement('h4');\n        itemInfo.classList.add('item-info', 'item-data');\n        itemInfo.innerText = info;\n\n        const itemPrice = document.createElement('h3');\n        itemPrice.classList.add('item-price', 'item-data');\n        itemPrice.innerText = price;\n\n        itemCont.append(itemName, itemInfo, itemPrice);\n\n        return itemCont\n\n    }\n\n\n    return newSection\n\n}\n\nconst sectionData = {\n    starters: [\n        {\n            item: 'Sticky Beef Brisket',\n            description: 'Served with horseradish cream mayonnaise.',\n            price: '£5.99'\n        },\n        {\n            item: 'Smoked Salmon',\n            description: 'Served with sourdough bread.',\n            price: '£6.49'\n        },\n        {\n            item: 'Soup of the Day (V)',\n            description: 'Served with sourdough bread. Vegan serve available.',\n            price: '£4.99'\n        }\n    ],\n    mains: [\n        {\n            item: '10OZ RIBEYE STEAK',\n            description: '21-day-aged ribeye steak with garlic butter, a roasted flat mushroom, beef tomato and triple-cooked chips.',\n            price: '£11.99'\n        },\n        {\n            item: 'GRILLED SEA BASS',\n            description: 'Two sea bass fillets with chorizo, chargrilled peppers, baby potatoes and long stem broccoli.',\n            price: '£10.49'\n        },\n        {\n            item: 'NOURISH BOWL (VE)',\n            description: 'A tabbouleh salad on a houmous base, with chargrilled long stem broccoli, topped with pumpkin seeds.',\n            price: '£9.99'\n        },\n        {\n            item: 'OCEAN FISH & CHIPS',\n            description: 'A combination of hand-battered haddock and breaded wholetail Scottish scampi served with triple-cooked chips, mushy peas and tartare sauce.',\n            price: '£11.49'\n        },\n        {\n            item: 'TOAD IN THE HOLE',\n            description: 'Outdoor-bred British pork sausages, in a Yorkshire pudding. Served with mash, seasonal vegetables and crispy onions. Vegetarian serve available.',\n            price: '£10.99'\n        },\n    ],\n    desserts: [\n        {\n            item: 'BELGIAN CHOCOLATE BROWNIE (V)',\n            description: 'With vanilla pod ice cream.',\n            price: '£6.99'\n        },\n        {\n            item: 'STICKY TOFFEE PUDDING (V)',\n            description: 'With your choice of vanilla pod ice cream or custard.',\n            price: '£5.49'\n        },\n        {\n            item: 'BRAMLEY APPLE PIE (V)',\n            description: 'With a choice of vanilla pod ice cream or custard. Vegan serve available.',\n            price: '£4.99'\n        },\n    ],\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/images/food-dish.jpeg":
/*!***********************************!*\
  !*** ./src/images/food-dish.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa414484aeade2edda8d.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/food-dish.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;