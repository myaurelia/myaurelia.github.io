(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~f075b844"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"debug\\\":true,\\\"testing\\\":true}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkVQTy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///BEPO\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\nvar App = (function () {\r\n    function App() {\r\n        this.heading = 'Todos';\r\n        this.todos = [];\r\n        this.todoDescription = '';\r\n    }\r\n    App.prototype.addTodo = function () {\r\n        if (this.todoDescription) {\r\n            var todo = {\r\n                description: this.todoDescription,\r\n                done: false\r\n            };\r\n            this.todos.push(todo);\r\n            this.todoDescription = '';\r\n        }\r\n    };\r\n    App.prototype.removeTodo = function (todo) {\r\n        var index = this.todos.indexOf(todo);\r\n        if (index !== -1) {\r\n            this.todos.splice(index, 1);\r\n        }\r\n    };\r\n    return App;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvRG8gfSBmcm9tIFwidG9kb1wiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICB0b2RvczogVG9Eb1tdO1xuICB0b2RvRGVzY3JpcHRpb246IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWFkaW5nID0gJ1RvZG9zJztcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy50b2RvRGVzY3JpcHRpb24gPSAnJztcbiAgfVxuXG4gIGFkZFRvZG8oKSB7XG4gICAgaWYgKHRoaXMudG9kb0Rlc2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgdGhpcy50b2RvRGVzY3JpcHRpb24gPSAnJztcbiAgICB9XG4gIH1cblxuICByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<template>\\n  <h1>${heading}</h1>\\n\\n  <form submit.trigger=\\\"addTodo()\\\">\\n    <input type=\\\"text\\\" value.bind=\\\"todoDescription\\\">\\n    <button type=\\\"submit\\\" disabled.bind=\\\"!todoDescription\\\">Add Todo</button>\\n  </form>\\n\\n  <ul>\\n    <li repeat.for=\\\"todo of todos\\\">\\n      <input type=\\\"checkbox\\\" checked.bind=\\\"todo.done\\\">\\n      <span css=\\\"text-decoration: ${todo.done ? 'line-through' : 'none'}\\\">\\n        ${todo.description}\\n      </span>\\n      <button click.trigger=\\\"removeTodo(todo)\\\">Remove</button>\\n    </li>\\n  </ul>\\n</template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/MmY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8dGVtcGxhdGU+XFxuICA8aDE+JHtoZWFkaW5nfTwvaDE+XFxuXFxuICA8Zm9ybSBzdWJtaXQudHJpZ2dlcj1cXFwiYWRkVG9kbygpXFxcIj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHZhbHVlLmJpbmQ9XFxcInRvZG9EZXNjcmlwdGlvblxcXCI+XFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhdG9kb0Rlc2NyaXB0aW9uXFxcIj5BZGQgVG9kbzwvYnV0dG9uPlxcbiAgPC9mb3JtPlxcblxcbiAgPHVsPlxcbiAgICA8bGkgcmVwZWF0LmZvcj1cXFwidG9kbyBvZiB0b2Rvc1xcXCI+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjaGVja2VkLmJpbmQ9XFxcInRvZG8uZG9uZVxcXCI+XFxuICAgICAgPHNwYW4gY3NzPVxcXCJ0ZXh0LWRlY29yYXRpb246ICR7dG9kby5kb25lID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZSd9XFxcIj5cXG4gICAgICAgICR7dG9kby5kZXNjcmlwdGlvbn1cXG4gICAgICA8L3NwYW4+XFxuICAgICAgPGJ1dHRvbiBjbGljay50cmlnZ2VyPVxcXCJyZW1vdmVUb2RvKHRvZG8pXFxcIj5SZW1vdmU8L2J1dHRvbj5cXG4gICAgPC9saT5cXG4gIDwvdWw+XFxuPC90ZW1wbGF0ZT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\r\n\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .feature('resources/index');\r\n    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn');\r\n    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgKiBhcyBlbnZpcm9ubWVudCBmcm9tICcuLi9jb25maWcvZW52aXJvbm1lbnQuanNvbic7XG5pbXBvcnQge1BMQVRGT1JNfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSk6IHZvaWQge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3Jlc291cmNlcy9pbmRleCcpKTtcblxuICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoZW52aXJvbm1lbnQuZGVidWcgPyAnZGVidWcnIDogJ3dhcm4nKTtcblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbihQTEFURk9STS5tb2R1bGVOYW1lKCdhdXJlbGlhLXRlc3RpbmcnKSk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoUExBVEZPUk0ubW9kdWxlTmFtZSgnYXBwJykpKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbik6IHZvaWQge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~2a42e354","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~ecff2e3d","vendors~9e0f4621"]]]);