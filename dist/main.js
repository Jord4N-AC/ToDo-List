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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const taskList = document.getElementById('list-tasks');\r\n\r\nconst taskArr = [\r\n    { description: 'Task 1', completed: true, index: 0 },\r\n    { description: 'Task 2', completed: true, index: 1 },\r\n    { description: 'Task 3', completed: true, index: 2 },\r\n];\r\n\r\nfunction appendTask(taskContent) {\r\n    const taskElement = `\r\n            <li class=\"task-item\">\r\n                <div class=\"task-content\">\r\n                    <input type=\"checkbox\" >\r\n                    <label>${taskContent}</label>\r\n                </div>\r\n                <div class=\"task-icons\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                    <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n            </li>\r\n    `;\r\n    taskList.insertAdjacentHTML('beforeend', taskElement);\r\n}\r\n\r\nfunction loadContent() {\r\n    taskArr.forEach((task) => {\r\n        appendTask(task.description);\r\n    });\r\n}\r\n\r\nloadContent();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;