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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homePage.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homePage.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    padding: 0;\\n    width: 100vw;\\n    height: 100vh;\\n    overflow: hidden;\\n}\\n\\n#content {\\n    display: grid;\\n    grid-template-columns: min(250px, 50%) 100%;\\n    grid-template-rows: 100px 100%;\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n#header {\\n    position: fixed;\\n    width: 100%;\\n    height: 100px;\\n    grid-column: 1 / 3;\\n    grid-row: 1 / 2;\\n    background-color: rgb(141, 245, 141);\\n    display: flex;\\n    align-items: center;\\n    gap: 20px;\\n    font-size: 22px;\\n}\\n\\n#icon {\\n    width: 75px;\\n    height: 75px;\\n}\\n\\n#addButton {\\n    margin-left: auto;\\n    margin-right: 180px;\\n    width: 170px;\\n    height: 60px;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    background-color: rgb(227, 245, 227);\\n    font-size: 25px;\\n    font-weight: 600px;\\n}\\n\\n#addButton:hover {\\n    background-color: black;\\n    color: rgb(141, 245, 141);\\n    cursor: pointer;\\n}\\n\\nform {\\n    position: fixed;\\n    right: 50px;\\n    top: 120px;\\n    background-color: rgb(141, 245, 141);\\n    width: 400px;\\n    height: 400px;\\n    flex-direction: column;\\n    gap: 5px;\\n    border-radius: 10px;\\n    border: 1px solid black;\\n    padding: 20px;\\n    display: none;\\n}\\n\\nlabel {\\n    display: block;\\n    font-size: 20px;\\n}\\n\\ninput {\\n    margin-bottom: 20px;\\n    display: block;\\n    width: 100%;\\n    height: 30px;\\n    font-size: 20px;\\n}\\n\\ntextarea {\\n    margin-bottom: 20px;\\n    height: 120px;\\n    width: 100%;\\n    font-size: 20px;\\n}\\n\\n#submitButton {\\n    width: 160px;\\n    height: 50px;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    background-color: rgb(227, 245, 227);\\n    font-size: 24px;\\n    font-weight: 600px;\\n    margin: 0 auto;\\n}\\n\\n#submitButton:hover {\\n    background-color: black;\\n    color: rgb(141, 245, 141);\\n    cursor: pointer;\\n}\\n\\n#sidebar {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n    background-color: rgb(195, 247, 195);\\n    font-size: 22px;\\n    padding-top: 50px;\\n}\\n\\n#sidebar div {\\n    height: 65px;\\n    padding-left: 50px;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n#sidebar div:hover {\\n    background-color: rgb(141, 245, 141);\\n}\\n\\n#sidebar h3 {\\n    margin: 0;\\n}\\n\\n#main {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n    background-color: rgb(227, 245, 227);\\n    display: flex;\\n    padding-left: 50px;\\n    padding-top: 57px;\\n}\\n\\n#table {\\n    width: 60%;\\n    max-width: 1000px;\\n}\\n\\n#tableHead, .tableRow {\\n    display: flex;\\n    align-items: center;\\n    gap: 10px;\\n    height: 50px;\\n    border-bottom: 2px solid rgb(141, 245, 141);\\n}\\n\\n#tableHead h3:first-of-type {\\n    font-size: 26px;\\n    margin-right: auto;\\n}\\n\\n#tableHead h3:nth-of-type(2) {\\n    margin-right: 70px;\\n}\\n\\n.tableRow p:first-of-type {\\n    font-size: 24px;\\n    margin-right: auto;\\n}\\n\\n.edit, .delete, .check {\\n    width: 15px;\\n    height: 15px;\\n}\\n\\n.check {\\n    margin-top: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/homePage.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/homePage.css":
/*!**************************!*\
  !*** ./src/homePage.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./homePage.css */ \"./node_modules/css-loader/dist/cjs.js!./src/homePage.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/homePage.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTasks.js":
/*!*************************!*\
  !*** ./src/addTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.png */ \"./src/edit.png\");\n/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ \"./src/delete.png\");\n\n\n\nlet taskArray = [];\n\nconst Task = (name, date, des) => {\n\tconst taskName = name;\n\tconst taskDate = date;\n\tconst taskDes = des;\n\n\tconst addRow = function () {\n\t\tconst table = document.getElementById('table');\n\n\t\tconst tableRow = document.createElement('div');\n\t\ttable.appendChild(tableRow);\n\t\ttableRow.setAttribute('class', 'tableRow');\n\n\t\tconst check = document.createElement('input');\n\t\ttableRow.appendChild(check);\n\t\tcheck.setAttribute('type', 'checkbox');\n\t\tcheck.setAttribute('class', 'check');\n\n\t\tconst rowName = document.createElement('p');\n\t\ttableRow.appendChild(rowName);\n\t\trowName.innerHTML = taskName;\n\t\tconst due = document.createElement('p');\n\t\ttableRow.appendChild(due);\n\t\tdue.innerHTML = taskDate;\n\n\t\tconst attrEdit = document.createElement('a');\n\t\ttableRow.appendChild(attrEdit);\n\t\tattrEdit.setAttribute(\n\t\t\t'href',\n\t\t\t'https://www.flaticon.com/free-icons/edit'\n\t\t);\n\t\tattrEdit.setAttribute('title', 'edit icons');\n\n\t\tconst editIcon = new Image();\n\t\teditIcon.src = _edit_png__WEBPACK_IMPORTED_MODULE_0__;\n\t\teditIcon.setAttribute('class', 'edit');\n\t\ttableRow.appendChild(editIcon);\n\n\t\tconst attrDel = document.createElement('a');\n\t\ttableRow.appendChild(attrDel);\n\t\tattrDel.setAttribute(\n\t\t\t'href',\n\t\t\t'https://www.flaticon.com/free-icons/delete'\n\t\t);\n\t\tattrDel.setAttribute('title', 'delete icons');\n\n\t\tconst delIcon = new Image();\n\t\tdelIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__;\n\t\tdelIcon.setAttribute('class', 'delete');\n\t\ttableRow.appendChild(delIcon);\n\t};\n\n\treturn { taskName, taskDate, taskDes, addRow };\n};\n\nconst openForm = function () {\n\tdocument.getElementById('taskForm').style.display = 'flex';\n};\n\nconst closeForm = function () {\n\tdocument.getElementById('taskForm').style.display = 'none';\n};\n\nconst addTask = function () {\n\tconst addButton = document.getElementById('addButton');\n\n\taddButton.addEventListener('click', openForm);\n};\n\nconst submitTask = function () {\n\tconst submitButton = document.getElementById('submitButton');\n\n\tsubmitButton.addEventListener('click', function (event) {\n\t\tevent.preventDefault();\n\t\tconst formName = document.getElementById('formName').value;\n\t\tconst formDate = document.getElementById('formDate').value;\n\t\tconst formDes = document.getElementById('formDes').value;\n\n\t\tconst task = Task(formName, formDate, formDes);\n\t\ttaskArray.push(task);\n\n\t\ttask.addRow();\n\t\tcloseForm();\n\t});\n\n\tconst sampleTask = Task(\n\t\t'Clean Room',\n\t\t'2022-07-30',\n\t\t'Vacuum and mop the room today'\n\t);\n\ttaskArray.push(sampleTask);\n\tsampleTask.addRow();\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/addTasks.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerLayout\": () => (/* binding */ headerLayout),\n/* harmony export */   \"homeLayout\": () => (/* binding */ homeLayout),\n/* harmony export */   \"pageLayout\": () => (/* binding */ pageLayout),\n/* harmony export */   \"sidebarLayout\": () => (/* binding */ sidebarLayout)\n/* harmony export */ });\n/* harmony import */ var _to_do_list_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list.png */ \"./src/to-do-list.png\");\n\n\nconst pageLayout = function () {\n\tconst content = document.getElementById('content');\n\n\tconst header = document.createElement('div');\n\tcontent.appendChild(header);\n\theader.setAttribute('id', 'header');\n\n\tconst sidebar = document.createElement('div');\n\tcontent.appendChild(sidebar);\n\tsidebar.setAttribute('id', 'sidebar');\n\n\tconst main = document.createElement('div');\n\tcontent.appendChild(main);\n\tmain.setAttribute('id', 'main');\n\n\theaderLayout();\n\tsidebarLayout();\n\thomeLayout();\n};\n\nconst headerLayout = function () {\n\tconst header = document.getElementById('header');\n\n\tconst attr = document.createElement('a');\n\theader.appendChild(attr);\n\tattr.setAttribute('href', 'https://www.flaticon.com/free-icons/list');\n\tattr.setAttribute('title', 'list icons');\n\n\tconst myIcon = new Image();\n\tmyIcon.src = _to_do_list_png__WEBPACK_IMPORTED_MODULE_0__;\n\tmyIcon.setAttribute('id', 'icon');\n\theader.appendChild(myIcon);\n\n\tconst toDo = document.createElement('h1');\n\theader.appendChild(toDo);\n\ttoDo.innerHTML = 'To-Do List';\n\n\tconst addButton = document.createElement('button');\n\taddButton.setAttribute('id', 'addButton');\n\theader.appendChild(addButton);\n\taddButton.innerHTML = 'Add Task';\n};\n\nconst sidebarLayout = function () {\n\tconst sidebar = document.getElementById('sidebar');\n\n\tconst homeDiv = document.createElement('div');\n\tsidebar.appendChild(homeDiv);\n\tconst home = document.createElement('h3');\n\thomeDiv.appendChild(home);\n\thome.innerHTML = 'Home';\n\n\tconst todayDiv = document.createElement('div');\n\tsidebar.appendChild(todayDiv);\n\tconst today = document.createElement('h3');\n\ttodayDiv.appendChild(today);\n\ttoday.innerHTML = 'Today';\n\n\tconst weekDiv = document.createElement('div');\n\tsidebar.appendChild(weekDiv);\n\tconst week = document.createElement('h3');\n\tweekDiv.appendChild(week);\n\tweek.innerHTML = 'Week';\n\n\tconst projectsDiv = document.createElement('div');\n\tsidebar.appendChild(projectsDiv);\n\tconst projects = document.createElement('h3');\n\tprojectsDiv.appendChild(projects);\n\tprojects.innerHTML = 'Projects';\n};\n\nconst homeLayout = function () {\n\tconst main = document.getElementById('main');\n\n\tconst table = document.createElement('div');\n\tmain.appendChild(table);\n\ttable.setAttribute('id', 'table');\n\n\tconst tableHead = document.createElement('div');\n\ttable.appendChild(tableHead);\n\ttableHead.setAttribute('id', 'tableHead');\n\n\tconst home = document.createElement('h3');\n\ttableHead.appendChild(home);\n\thome.innerHTML = 'Home';\n\tconst due = document.createElement('h3');\n\ttableHead.appendChild(due);\n\tdue.innerHTML = 'Due Date';\n\n\tcreateForm();\n};\n\nconst createForm = function () {\n\tconst main = document.getElementById('main');\n\n\tconst form = document.createElement('form');\n\tmain.appendChild(form);\n\tform.setAttribute('id', 'taskForm');\n\tform.setAttribute('action', '');\n\n\tconst nameLabel = document.createElement('label');\n\tform.appendChild(nameLabel);\n\tnameLabel.innerHTML = 'Task Name';\n\tconst nameInput = document.createElement('input');\n\tform.appendChild(nameInput);\n\tnameInput.setAttribute('type', 'text');\n\tnameInput.setAttribute('required', '');\n\tnameInput.setAttribute('id', 'formName');\n\n\tconst dateLabel = document.createElement('label');\n\tform.appendChild(dateLabel);\n\tdateLabel.innerHTML = 'Task Date';\n\tconst dateInput = document.createElement('input');\n\tform.appendChild(dateInput);\n\tdateInput.setAttribute('type', 'date');\n\tdateInput.setAttribute('required', '');\n\tdateInput.setAttribute('id', 'formDate');\n\n\tconst desLabel = document.createElement('label');\n\tform.appendChild(desLabel);\n\tdesLabel.innerHTML = 'Task Description';\n\tconst desInput = document.createElement('textarea');\n\tform.appendChild(desInput);\n\tdesInput.setAttribute('id', 'formDes');\n\n\tconst submitButton = document.createElement('button');\n\tform.appendChild(submitButton);\n\tsubmitButton.innerHTML = 'Submit Task';\n\tsubmitButton.setAttribute('type', 'submit');\n\tsubmitButton.setAttribute('id', 'submitButton');\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.css */ \"./src/homePage.css\");\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _addTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTasks.js */ \"./src/addTasks.js\");\n\n\n\n\n(0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.pageLayout)();\n(0,_addTasks_js__WEBPACK_IMPORTED_MODULE_2__.addTask)();\n(0,_addTasks_js__WEBPACK_IMPORTED_MODULE_2__.submitTask)();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee4b58337bd3477db466.png\";\n\n//# sourceURL=webpack://todolist/./src/delete.png?");

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f46e2728eb984e21ce8.png\";\n\n//# sourceURL=webpack://todolist/./src/edit.png?");

/***/ }),

/***/ "./src/to-do-list.png":
/*!****************************!*\
  !*** ./src/to-do-list.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed7b1c334a2d2a8073db.png\";\n\n//# sourceURL=webpack://todolist/./src/to-do-list.png?");

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