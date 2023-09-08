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

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\n/**\n * 全体の処理の管理を行うコントローラーのクラス\n */\nclass Controller {\n    /**\n     * constructorは利用させないようにする\n     */\n    constructor() {\n        this.latest = new Date().valueOf();\n        this.durationList = [];\n        /**\n         * 1フレーム単位で実行される更新処理\n         */\n        this.update = () => {\n            const current = new Date().valueOf();\n            const duration = current - this.latest;\n            this.latest = current;\n            this.durationList.push(duration);\n            // ここに更新処理を記載する、暫定的にカウントをconsoleに吐き出す処理を記載\n            this.cnt = this.cnt + 1;\n            console.log(\"start update alert, cnt = \" + this.cnt + \", duration: \" + duration + \", avarage: \" + (this.durationList.reduce((a, b) => a + b, 0) / this.durationList.length));\n            if (this.durationList.length > 10000) {\n                this.durationList.length = 0;\n            }\n        };\n        this.cnt = 0;\n    }\n}\nexports.Controller = Controller;\n/**\n * インスタンス化時には、このstaticな関数を呼ぶようにする\n * (テストのモックが簡易化できるようにする)\n */\nController.createInstance = () => new Controller();\n\n\n//# sourceURL=webpack://mario-game-refactor-001/./src/controller.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst controller_1 = __webpack_require__(/*! ./controller */ \"./src/controller.ts\");\n/**\n * 1フレームあたりの処理をまとめて行ってくれる\n * Controllerの初期化を行う\n */\nconst instance = controller_1.Controller.createInstance();\n/**\n * 1フレームあたりの更新処理の定義\n */\nfunction update() {\n    /**\n     * Controllerの更新処理を実行する\n     */\n    instance.update();\n    /**\n     * 毎フレームごとに更新処理が実行されるように\n     * 更新処理内で再帰的に呼び出しを行う\n     * (予め決められた呪文のようなもの)\n     */\n    //   window.requestAnimationFrame(update);\n}\n/**\n * 初期ロード時に、更新処理が実行されるようにする\n */\nwindow.addEventListener(\"load\", update);\nsetInterval(update, 20);\n\n\n//# sourceURL=webpack://mario-game-refactor-001/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;