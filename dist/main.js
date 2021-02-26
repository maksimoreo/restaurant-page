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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\n\n(0,_page__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _tab_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-main */ \"./src/tab-main.js\");\n/* harmony import */ var _tab_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-menu */ \"./src/tab-menu.js\");\n\n\n\nlet currentTabObject = null;\n\nfunction initTabs(tabContent) {\n    for (let tabModule of [_tab_main__WEBPACK_IMPORTED_MODULE_0__, _tab_menu__WEBPACK_IMPORTED_MODULE_1__]) {\n        console.log(tabModule);\n        tabModule.init();\n        let tabObject = tabModule.getTabObject();\n        console.log(tabObject);\n\n        tabObject.tabLink.onclick = () => {\n            setCurrentTab(tabObject);\n        };\n\n        tabObject.tab.classList.add('tab-hidden');\n        tabContent.appendChild(tabObject.tab);\n\n        console.log(tabObject);\n    }\n}\n\nfunction generatePage() {\n\n    let nav = document.createElement('nav');\n    nav.classList.add('navbar');\n    content.appendChild(nav);\n\n    let h1 = document.createElement('h1');\n    h1.classList.add('align-center');\n    h1.textContent = \"Restaurant Page\";\n    nav.appendChild(h1);\n\n    let p = document.createElement('p');\n    p.classList.add('sub-h');\n    p.classList.add('align-center');\n    p.textContent = \"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\";\n    nav.appendChild(p);\n\n    let ul = document.createElement('ul');\n    ul.classList.add('navbar-list');\n    nav.appendChild(ul);\n\n    for (let tabName of ['Main', 'Menu', 'Contact']) {\n        let li = document.createElement('li');\n        ul.appendChild(li);\n\n        let a = document.createElement('a');\n        a.textContent = tabName;\n        a.id = 'link-' + tabName.toLowerCase();\n        a.setAttribute('href', '#');\n        li.appendChild(a);\n    }\n\n    ul.querySelector('li').classList.add('navbar-list-active');\n\n    let tabContent = document.createElement('div');\n    tabContent.id = '#tab-content';\n    content.appendChild(tabContent);\n\n    return tabContent;\n}\n\nfunction init() {\n    let content = document.querySelector('#content');\n    let tabContent = generatePage(content);\n    initTabs(tabContent);\n    setCurrentTab(_tab_main__WEBPACK_IMPORTED_MODULE_0__.getTabObject());\n}\n\nfunction setCurrentTab(tabObject) {\n    if (currentTabObject) {\n        currentTabObject.tab.classList.add('tab-hidden');\n        currentTabObject.tabListItem.classList.remove('navbar-list-active');\n    }\n\n    currentTabObject = tabObject;\n    currentTabObject.tab.classList.remove('tab-hidden');\n    currentTabObject.tabListItem.classList.add('navbar-list-active');\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page.js?");

/***/ }),

/***/ "./src/tab-main.js":
/*!*************************!*\
  !*** ./src/tab-main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"getTabObject\": () => (/* binding */ getTabObject)\n/* harmony export */ });\nlet tab;\nlet tabListItem;\nlet tabLink;\n\nfunction generateTab() {\n    tab = document.createElement('div');\n    tab.classList.add('tab');\n\n    let p = document.createElement('p');\n    p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem illum ratione porro et maxime obcaecati aut in adipisci? Repudiandae similique in, officiis ea nobis quidem iure, exercitationem qui beatae distinctio quod minus laboriosam dolorem. Quibusdam alias, amet repellendus temporibus distinctio cumque ex assumenda fuga? Necessitatibus eveniet maxime, ipsum iste enim quis quibusdam amet earum at ea, vero perspiciatis eligendi. Similique, facere magni sed voluptatem deleniti fugit nostrum minima. Delectus ullam nostrum debitis saepe et a, illo corrupti quaerat facere? Nam aperiam doloribus ea molestiae necessitatibus porro, voluptas nobis dolorum, tempore possimus vitae soluta, sit distinctio aliquid nostrum repudiandae nisi pariatur?';\n    tab.appendChild(p);\n\n    p = document.createElement('p');\n    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dicta, sunt aliquid incidunt maxime necessitatibus aperiam nostrum odit autem quidem hic dolore ducimus beatae dolor, quisquam ipsam mollitia. Inventore aut cumque dicta! Nostrum nesciunt nobis tempore aspernatur magnam maxime cupiditate?';\n    tab.appendChild(p);\n}\n\nfunction findTabLink() {\n    tabLink = document.querySelector('#link-main');\n    tabListItem = tabLink.parentNode;\n}\n\nfunction init() {\n    generateTab();\n    findTabLink();\n    return getTabObject();\n}\n\nfunction getTabObject() {\n    return { tab, tabListItem, tabLink };\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab-main.js?");

/***/ }),

/***/ "./src/tab-menu.js":
/*!*************************!*\
  !*** ./src/tab-menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"getTabObject\": () => (/* binding */ getTabObject)\n/* harmony export */ });\nlet tab;\nlet tabListItem;\nlet tabLink;\n\nfunction generateTab() {\n    tab = document.createElement('div');\n    tab.classList.add('tab');\n\n    let p = document.createElement('p');\n    p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem illum ratione porro et maxime obcaecati aut in adipisci? Repudiandae similique in, officiis ea nobis quidem iure, exercitationem qui beatae distinctio quod minus laboriosam dolorem. Quibusdam alias, amet repellendus temporibus distinctio cumque ex assumenda fuga? Necessitatibus eveniet maxime, ipsum iste enim quis quibusdam amet earum at ea, vero perspiciatis eligendi. Similique, facere magni sed voluptatem deleniti fugit nostrum minima. Delectus ullam nostrum debitis saepe et a, illo corrupti quaerat facere? Nam aperiam doloribus ea molestiae necessitatibus porro, voluptas nobis dolorum, tempore possimus vitae soluta, sit distinctio aliquid nostrum repudiandae nisi pariatur?';\n    tab.appendChild(p);\n}\n\nfunction findTabLink() {\n    tabLink = document.querySelector('#link-menu');\n    tabListItem = tabLink.parentNode;\n}\n\nfunction init() {\n    generateTab();\n    findTabLink();\n    return getTabObject();\n}\n\nfunction getTabObject() {\n    return { tab, tabListItem, tabLink };\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab-menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;