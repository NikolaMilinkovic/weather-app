/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*  <<< CSS RESET FILE >>>  */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n margin: 0;\n padding: 0;\n border: 0;\n font-size: 100%;\n font: inherit;\n vertical-align: baseline;\n}\nHTML5 display-role reset for older browsers \narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n display: block;\n}\nbody {\n line-height: 1;\n box-sizing: border-box;\n padding-top: 15vh;\n}\nol, ul {\n list-style: none;\n}\nblockquote, q {\n quotes: none;\n}\nblockquotebefore, blockquoteafter,\nqbefore, qafter {\n content: '';\n content: none;\n}\ntable {\n border-collapse: collapse;\n border-spacing: 0;\n}\na:hover, a:active {\n    text-decoration: none;\n}\na {\n    color: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n/*  <<< \\\\CSS RESET FILE >>>  */\n\n\n:root{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    --primary: #116e99;\n    --secondary: #38ef7d;\n    --white: #fff;\n    --gray: #9b9b9b;\n}\nbody{\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    background: linear-gradient(to bottom, #4682B4, #87CEFA);\n}\n#main-weather-container{\n    padding-left: 10vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    color: var(--white);\n    align-self: self-start;\n    margin-top: 15vh;\n}\n#weather-data-container{\n    margin: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n#weather-img-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n#city{\n    font-size: clamp(34px, 3vw, 5vw);\n    margin-bottom: 0.5rem;\n}\n#country{\n    font-size: clamp(26px, 2vw, 3vw);\n    margin-bottom: 1rem;\n}\n#weekday{\n    font-size: clamp(26px, 1vw, 2vw);\n    margin-bottom: 0.5rem;\n}\n#temperature, #feels-like{\n    font-size: clamp(26px, 1.5vw, 1.8vw);\n    margin-bottom: 0.5rem;\n}\n#weather-img{\n    height: clamp(120px, 9vw, 12vw);\n    width: clamp(120px, 9vw, 12vw);\n}\n#weather-text{\n    font-size: clamp(20px, 1vw, 31vw);\n}\n\n\n\n\n#forecast-section{\n    padding-right: 10vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    justify-items: center;\n    color: var(--white);\n    text-align: center;\n    align-self: self-start;\n    margin-top: 15vh;\n}\n.forecast-div{\n    display: flex;\n    flex-direction: column;\n    width: 140px;\n    height: 130px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid rgba(227, 244, 254, 0.3);\n    margin: 1rem;\n    padding: 10px;\n}\n.temperature{\n    font-size: clamp(22px, 1.5vw, 1.8vw);\n}\n.forecast-img{\n    height: 50px;\n    width: 50px;\n}\n.condition{\n    text-align: center;\n}\n\n\n.navbar{\n    display: flex;\n    box-sizing: border-box;\n    justify-content: center;\n    padding: 1rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    max-width: 100vw;\n    height: 10vh;\n    min-height: 80px;\n    background-color: rgba(227, 244, 254, 0.3);\n}\n\ninput{\n    color: var(--primary);\n    font-size: 16px;\n    font-weight: 600;\n    border: none;\n    border-bottom: 2px solid var(--primary);\n    font-size: 20px;\n    padding: 0 16px;\n    background-color: transparent;\n    box-sizing: border-box;\n    margin: 0 1rem;\n}\n\n\n\n\n\ninput:focus{\n    outline: none;\n}\ninput::placeholder{\n    color: var(--primary);\n}\n#btn-search{\n    border: none;\n    font-size: 16px;\n}\n.form-btn {\n    appearance: none;\n    background-color: rgba(17, 110, 153, 0.7);\n    border: 2px solid rgb(15, 95, 133);\n    border-radius: 15px;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n    font-size: 16px;\n    font-weight: 600;\n    line-height: normal;\n    min-width: 0;\n    outline: none;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    text-decoration: none;\n    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    width: 120px;\n    will-change: transform;\n}\n  \n.form-btn:disabled {\n    pointer-events: none;\n}\n  \n.form-btn:hover {\n    color: #fff;\n    background-color: rgb(15, 95, 133);\n    box-shadow: rgba(17, 110, 153, 0.7) 0 8px 15px;\n    transform: translateY(-2px);\n}\n  \n.form-btn:active {\n    box-shadow: none;\n    transform: translateY(0);\n}\n\n/* FOOTER */\n#footer-container{\n    color: var(--primary);\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 15vh;\n    grid-column: span 2;\n    align-self: self-end;\n    background-color: rgba(227, 244, 254, 0.3);\n    box-sizing: border-box;\n    padding: 2rem 0rem;\n}\n#footer-info-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n}\n.footer-label{\n    font-size: 14px;\n    margin-bottom: 6px;\n}\n#git-para{\n    font-size: 18px;\n}\n\n\n\n/* RESPONSIVE @MEDIA CODE */\n@media screen and (max-width: 400px) {\n    body{\n        grid-template-columns: 1fr;\n    }\n    #main-weather-container{\n        margin-top: 7vh;\n        padding: 0vw 0vw;\n    }\n    #forecast-section{\n        grid-template-columns: 1fr 1fr;\n        margin-bottom: 10vh;\n        margin-top: 0vh;\n        padding: 0vw 0vw;\n        gap: 1rem;\n    }\n    .forecast-div{\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        margin: 1rem;\n        padding: 10px;\n    }\n    input{\n        width: clamp(100px, 150px, 200px);\n    }\n    #footer-container{\n        grid-column: span 1;\n    }\n}\n\n\n@media screen and (max-width: 600px) {\n    body{\n        grid-template-columns: 1fr;\n    }\n    #main-weather-container{\n        margin-top: 7vh;\n        padding: 0vw 5vw;\n    }\n    #forecast-section{\n        grid-template-columns: 1fr 1fr;\n        margin-bottom: 10vh;\n        margin-top: 0vh;\n        padding: 0vw 5vw;\n        gap: 1rem;\n    }\n    .forecast-div{\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        margin: 1rem;\n        padding: 10px;\n    }\n    input{\n        width: clamp(100px, 150px, 200px);\n    }\n    #footer-container{\n        grid-column: span 1;\n    }\n}\n@media screen and (min-width: 601px) and (max-width: 1400px) {\n    body{\n        grid-template-columns: 1fr;\n    }\n    #main-weather-container{\n        margin-top: 10vh;\n        align-self: self-start;\n        padding: 0vw 10vw;\n    }\n    #forecast-section{\n        grid-template-columns: 1fr 1fr 1fr;\n        margin-bottom: 10vh;\n        gap: 1rem;\n        margin-top: 0vh;\n        padding: 0vw 10vw;\n    }\n    .forecast-div{\n        box-sizing: border-box;\n        min-width: 120px;\n        min-height: 120px;\n        width: 100%;\n        height: 100%;\n        margin: 1rem;\n        padding: 10px;\n    }\n    #weather-img{\n        height: clamp(160px, 9vw, 12vw);\n        width: clamp(160px, 9vw, 12vw);\n    }\n    #weather-text{\n        font-size: clamp(26px, 1vw, 31vw);\n    }\n    #footer-container{\n        grid-column: span 1;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",c=\"month\",f=\"quarter\",h=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=\"$isDayjsObject\",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=f+\"Date\",n[d]=f+\"Date\",n[c]=f+\"Month\",n[h]=f+\"FullYear\",n[u]=f+\"Hours\",n[s]=f+\"Minutes\",n[i]=f+\"Seconds\",n[r]=f+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,\"0\")},$=f||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return b.s(e.$y,4,\"0\");case\"M\":return a+1;case\"MM\":return b.s(a+1,2,\"0\");case\"MMM\":return h(n.monthsShort,a,c,3);case\"MMMM\":return h(c,a);case\"D\":return e.$D;case\"DD\":return b.s(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return h(n.weekdaysMin,e.$W,o,2);case\"ddd\":return h(n.weekdaysShort,e.$W,o,3);case\"dddd\":return o[e.$W];case\"H\":return String(s);case\"HH\":return b.s(s,2,\"0\");case\"h\":return d(1);case\"hh\":return d(2);case\"a\":return $(s,u,!0);case\"A\":return $(s,u,!1);case\"m\":return String(u);case\"mm\":return b.s(u,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return b.s(e.$s,2,\"0\");case\"SSS\":return b.s(e.$ms,3,\"0\");case\"Z\":return i}return null}(t)||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",c],[\"$y\",h],[\"$D\",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));\n\n//# sourceURL=webpack://weather-app/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./node_modules/dayjs/locale/en.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/locale/en.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(e,n){ true?module.exports=n():0}(this,(function(){\"use strict\";return{name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(e){var n=[\"th\",\"st\",\"nd\",\"rd\"],t=e%100;return\"[\"+e+(n[(t-20)%10]||n[t]||n[0])+\"]\"}}}));\n\n//# sourceURL=webpack://weather-app/./node_modules/dayjs/locale/en.js?");

/***/ }),

/***/ "./src/dataDisplay.js":
/*!****************************!*\
  !*** ./src/dataDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst body = document.querySelector('body');\nconst createElements = () => {\n    const city = document.createElement('h1');\n    city.setAttribute('id', 'city');\n    const country = document.createElement('para');\n    country.setAttribute('id', 'country');\n    const weekday = document.createElement('para');\n    weekday.setAttribute('id', 'weekday');\n    const temperature = document.createElement('para');\n    temperature.setAttribute('id', 'temperature');\n    const feelsLike = document.createElement('para');\n    feelsLike.setAttribute('id', 'feels-like');\n\n\n    return [city, country, weekday, temperature, feelsLike];\n};\n\nconst createImgElements = () => {\n    const img = document.createElement('img');\n    img.setAttribute('id', 'weather-img');\n    const text = document.createElement('para');\n    text.setAttribute('id', 'weather-text');\n\n    return [img, text];\n};\n\nconst appendElements = (elementsArray, imgElementsArray) => {\n    const parentDiv = document.createElement('div');\n    const dataDiv = document.createElement('div');\n    const divImg = document.createElement('div');\n    parentDiv.setAttribute('id', 'main-weather-container');\n    dataDiv.setAttribute('id', 'weather-data-container');\n    divImg.setAttribute('id', 'weather-img-container');\n\n    // Handles appending data via arrays\n    elementsArray.forEach((element) => {\n        dataDiv.appendChild(element);\n    });\n    imgElementsArray.forEach((element) => {\n        divImg.appendChild(element);\n    });\n\n    // Handles appending divs to body\n    parentDiv.appendChild(dataDiv);\n    parentDiv.appendChild(divImg);\n    body.insertBefore(parentDiv, body.firstChild);\n};\n\nconst displayWeatherToday = () => {\n    appendElements(createElements(), createImgElements());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeatherToday);\n\n\n//# sourceURL=webpack://weather-app/./src/dataDisplay.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst body = document.querySelector('body');\n\nconst crateFooterElements = () => {\n    const gitLabel = document.createElement('para');\n    const gitPara = document.createElement('a');\n\n    gitLabel.setAttribute('class', 'footer-label');\n    gitPara.setAttribute('id', 'git-para');\n    gitPara.setAttribute('href', 'https://github.com/NikolaMilinkovic');\n    gitPara.setAttribute('target', '_blank');\n    gitPara.setAttribute('rel', 'noopener noreferrer');\n\n    gitLabel.innerHTML = 'Made by';\n    gitPara.innerHTML = 'Nikola Milinkovic';\n\n    return [gitLabel, gitPara];\n};\n\nconst createFooter = () => {\n    const footerDiv = document.createElement('div');\n    const footerChildDiv = document.createElement('div');\n    footerDiv.setAttribute('id', 'footer-container');\n    footerChildDiv.setAttribute('id', 'footer-info-container');\n\n    const els = crateFooterElements();\n    els.forEach((element) => {\n        footerChildDiv.appendChild(element);\n    });\n\n    footerDiv.appendChild(footerChildDiv);\n\n    return footerDiv;\n};\n\nconst displayFooter = () => {\n    body.appendChild(createFooter());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFooter);\n\n\n//# sourceURL=webpack://weather-app/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _dataDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataDisplay */ \"./src/dataDisplay.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n(0,_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_dataDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n\n\n\nconst body = document.querySelector('body');\n\n\nconst createNavbarDiv = () => {\n    const nav = document.createElement('div');\n    nav.setAttribute('class', 'navbar');\n    return nav;\n};\n\nconst createNavbarElements = () => {\n    const input = document.createElement('input');\n    input.setAttribute('id', 'input-city');\n    input.setAttribute('type', 'text');\n    input.setAttribute('placeholder', 'City name');\n\n    const button = document.createElement('button');\n    button.setAttribute('id', 'btn-search');\n    button.setAttribute('class', 'form-btn');\n    button.innerHTML = 'Search';\n    button.addEventListener('click', async () => {\n        (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    return [input, button];\n};\n\nconst createNavbar = () => {\n    const nav = createNavbarDiv();\n    const navEls = createNavbarElements();\n\n    navEls.forEach((element) => {\n        nav.appendChild(element);\n    });\n\n    return nav;\n};\n\nconst displayNavbar = () => {\n    const nav = createNavbar();\n    body.appendChild(nav);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNavbar);\n\n\n//# sourceURL=webpack://weather-app/./src/navbar.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs_locale_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/locale/en */ \"./node_modules/dayjs/locale/en.js\");\n/* harmony import */ var dayjs_locale_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_en__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// Cache each element on the page\nlet city = document.getElementById('city');\nlet country = document.getElementById('country');\nlet weekday = document.getElementById('weekday');\nlet temperature = document.getElementById('temperature');\nlet feelsLike = document.getElementById('feels-like');\nlet weatherImg = document.getElementById('weather-img');\nlet weatherText = document.getElementById('weather-text');\nconst getElements = () => {\n    city = document.getElementById('city');\n    country = document.getElementById('country');\n    weekday = document.getElementById('weekday');\n    temperature = document.getElementById('temperature');\n    feelsLike = document.getElementById('feels-like');\n    weatherImg = document.getElementById('weather-img');\n    weatherText = document.getElementById('weather-text');\n};\n\nlet inputField = document.getElementById('input-city');\n// Innitialize required values\nlet inputData = '';\nlet latitude = '';\nlet longitude = '';\nlet response = '';\nlet responseData = '';\n\n// Method for taking user input\nconst getCity = () => {\n    inputField = document.getElementById('input-city');\n    inputData = inputField.value;\n};\nconst clearField = () => {\n    inputField.value = '';\n};\n\n// Method for retrieving the API JSON data\nconst fetchWeatherData = async () => {\n    try {\n        if (inputData === '' && latitude !== '' && longitude !== '') {\n            console.log('Running coords');\n            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=' + `${latitude}` + ',' + `${longitude}` + '&days=8&aqi=no&alerts=no', { mode: 'cors' });\n        } else if (inputData !== '') {\n            console.log('Running inputData !== empty');\n            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=' + `${inputData}` + '&days=8&aqi=no&alerts=no', { mode: 'cors' });\n        } else {\n            console.log('Running else statement');\n            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=Zemun&days=8&aqi=no&alerts=no', { mode: 'cors' });\n        }\n\n        const awaitJSON = await response.json();\n        console.log(awaitJSON);\n        return awaitJSON;\n    } catch (error) {\n        console.error(`Oops! Something went wrong.. ${error}`);\n    }\n};\n\n// Method for processing JSON data, returns an object with needed information\nconst processJSON = (JSON) => {\n    const fetchedData = JSON;\n    return {\n        country: fetchedData.location.country,\n        city: fetchedData.location.name,\n        localTime: fetchedData.location.localtime,\n        feelsLikeC: fetchedData.current.feelslike_c,\n        feelsLikeF: fetchedData.current.feelslike_f,\n        temperatureC: fetchedData.current.temp_c,\n        temperatureF: fetchedData.current.temp_f,\n        text: fetchedData.current.condition.text,\n        img: fetchedData.current.condition.icon,\n        forecast: fetchedData.forecast.forecastday\n            .map((day) => ({\n                date: day.date,\n                avgTempC: day.day.avgtemp_c,\n                avgTempF: day.day.avgtemp_f,\n                text: day.day.condition.text,\n                icon: day.day.condition.icon,\n            })),\n    };\n};\n\n// Method for display weekly forecast\nconst displayWeeklyForcast = (JSONdata) => {\n    const displayData = JSONdata;\n\n    displayData.forecast.forEach((day) => {\n        const div = document.createElement('div');\n        div.setAttribute('class', 'forecast-div');\n\n        const weekday = document.createElement('para');\n        const avgTempC = document.createElement('para');\n        avgTempC.setAttribute('class', 'temperature');\n        const condition = document.createElement('para');\n        condition.setAttribute('class', 'condition');\n        const icon = document.createElement('img');\n\n        weekday.innerHTML = `${dayjs__WEBPACK_IMPORTED_MODULE_1___default()(day.date).locale('en').format('ddd')}`;\n        avgTempC.innerHTML = `${day.avgTempC}°`;\n        condition.innerHTML = day.text;\n        const imgPath = day.icon;\n        icon.setAttribute('src', imgPath);\n        icon.setAttribute('class', 'forecast-img');\n\n        div.appendChild(weekday);\n        div.appendChild(avgTempC);\n        div.appendChild(condition);\n        div.appendChild(icon);\n\n\n        document.getElementById('forecast-section').appendChild(div);\n    });\n};\n\n// Removes all forecast data\nconst removeForecastData = () => {\n    const divElement = document.getElementById('forecast-section');\n    divElement.innerHTML = '';\n};\n\n// Method for displaying the weather data\nconst display = (JSONdata) => {\n    const displayData = JSONdata;\n    removeForecastData();\n    getElements();\n\n\n    city.innerHTML = displayData.city;\n    country.innerHTML = displayData.country;\n    weekday.innerHTML = `${dayjs__WEBPACK_IMPORTED_MODULE_1___default()(displayData.localTime).locale('en').format('dddd')}`;\n    temperature.innerHTML = `Temperature: ${displayData.temperatureC}°`;\n    feelsLike.innerHTML = `Feels like: ${displayData.feelsLikeC}°`;\n    weatherImg.src = displayData.img;\n    weatherText.innerHTML = displayData.text;\n    displayWeeklyForcast(displayData);\n};\n\n// Logic for getting user location\nconst successCallback = async (position) => {\n    latitude = parseFloat(position.coords.latitude.toFixed(4));\n    longitude = parseFloat(position.coords.longitude.toFixed(4));\n\n    // Fetch and display weather data after getting the location\n    const data = await fetchWeatherData();\n    const processedData = processJSON(data);\n    display(processedData);\n};\nconst errorCallback = async (error) => {\n    console.error(error);\n    const data = await fetchWeatherData();\n    const processedData = processJSON(data);\n    display(processedData);\n};\nnavigator.geolocation.getCurrentPosition(successCallback, errorCallback);\n\n// Main method that is run upon button click\nconst runCitySearch = async () => {\n    getCity();\n    clearField();\n\n    // retrieves JSON data\n    responseData = await fetchWeatherData();\n\n    // Feeds object with data to display method\n    // Displays the values on the screen\n    display(processJSON(responseData));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runCitySearch);\n\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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