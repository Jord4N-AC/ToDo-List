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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _modules_create_append_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/create_append.js */ \"./src/modules/create_append.js\");\n/* harmony import */ var _modules_save_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/save_data.js */ \"./src/modules/save_data.js\");\n/* harmony import */ var _modules_remove_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/remove_task.js */ \"./src/modules/remove_task.js\");\n/* harmony import */ var _modules_remove_completed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/remove_completed.js */ \"./src/modules/remove_completed.js\");\n/* harmony import */ var _modules_alert_messages_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/alert_messages.js */ \"./src/modules/alert_messages.js\");\n/* harmony import */ var _modules_clear_field_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/clear_field.js */ \"./src/modules/clear_field.js\");\n/* harmony import */ var _modules_load_content_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/load_content.js */ \"./src/modules/load_content.js\");\n/* harmony import */ var _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/task_status.js */ \"./src/modules/task_status.js\");\n/* harmony import */ var _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/edit_task.js */ \"./src/modules/edit_task.js\");\n/* harmony import */ var _modules_clearall_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/clearall.js */ \"./src/modules/clearall.js\");\n/* harmony import */ var _modules_undo_clearall_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/undo_clearall.js */ \"./src/modules/undo_clearall.js\");\n/* harmony import */ var _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/counters.js */ \"./src/modules/counters.js\");\n/* harmony import */ var _modules_show_hide_tasks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/show_hide_tasks.js */ \"./src/modules/show_hide_tasks.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst taskArr = (0,_modules_load_content_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\n  _modules_create_append_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput, _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkStatus, _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.completedStyle,\n  _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkTask, _modules_remove_task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.saveOldContent, _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.updateContent,\n  _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter,\n);\n\nconst oldArr = [];\n\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n});\n\n// Hide Messages when type on input\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.addEventListener('input', () => {\n  if (document.getElementsByClassName('task-repeated').length > 0) {\n    document.getElementsByClassName('task-repeated')[0].removeAttribute('title');\n    document.getElementsByClassName('task-repeated')[0].classList.toggle('task-repeated');\n  }\n  if (document.getElementsByClassName('show').length > 0) {\n    document.getElementsByClassName('show')[0].classList.toggle('show');\n  }\n});\n\n// Add Task when pressing 'enter' on input\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.addEventListener('keydown', (event, inputTrimed = _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value.trim().replace(/\\s+/g, ' ')) => {\n  if (\n    event.key === 'Enter'\n    && taskArr.find((task) => task.description.toLowerCase() === inputTrimed.toLowerCase())\n  ) {\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value = inputTrimed;\n    (0,_modules_alert_messages_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.repeatedMessage,\n      document.getElementById(taskArr.findIndex((task) => task.description.toLowerCase()\n        === inputTrimed.toLowerCase()) + 1),\n      'task-repeated',\n      'Repeated Tasks',\n      'highlight-repeated',\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n    );\n  } else if (inputTrimed !== '' && event.key === 'Enter') {\n    (0,_modules_undo_clearall_js__WEBPACK_IMPORTED_MODULE_12__.deletedOldContent)(oldArr, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.redoIcon, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearAllIcon);\n    (0,_modules_save_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(inputTrimed, taskArr);\n    (0,_modules_create_append_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value, taskArr, taskArr.length, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n      _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkStatus, _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkTask, _modules_remove_task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.saveOldContent, _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.updateContent,\n      _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n    (0,_modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n    (0,_modules_alert_messages_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.successMessage,\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList.children[_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList.childElementCount - 1],\n      'recent-added',\n      'Recent added',\n      'highlight-recent',\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n    );\n    (0,_modules_clear_field_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput);\n  }\n});\n\n// Add Task when clicking Add Button\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.addBtn.addEventListener('click', () => {\n  _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value = _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value.trim().replace(/\\s+/g, ' ');\n  if (\n    taskArr.find((task) => task.description.toLowerCase() === _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value.toLowerCase())\n  ) {\n    (0,_modules_alert_messages_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.repeatedMessage,\n      document.getElementById(taskArr.findIndex((task) => task.description.toLowerCase()\n        === _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value.toLowerCase()) + 1),\n      'task-repeated',\n      'Repeated Tasks',\n      'highlight-repeated',\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n    );\n  } else if (_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value !== '') {\n    (0,_modules_undo_clearall_js__WEBPACK_IMPORTED_MODULE_12__.deletedOldContent)(oldArr, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.redoIcon, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearAllIcon);\n    (0,_modules_save_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value, taskArr);\n    (0,_modules_create_append_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value, taskArr, taskArr.length, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n      _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkStatus, _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkTask, _modules_remove_task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.saveOldContent, _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.updateContent,\n      _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n    (0,_modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n    (0,_modules_alert_messages_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.successMessage,\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList.children[_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList.childElementCount - 1],\n      'recent-added',\n      'Recent added',\n      'highlight-recent',\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n    );\n    (0,_modules_clear_field_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput);\n  }\n});\n\n// Add Task when pressing 'enter' on Add Button\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.addBtn.addEventListener('keydown', (event, inputTrimed = _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value.trim().replace(/\\s+/g, ' ')) => {\n  if (\n    taskArr.find((task) => task.description.toLowerCase() === inputTrimed.toLowerCase())\n    && event.key === 'Enter'\n  ) {\n    (0,_modules_alert_messages_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.repeatedMessage,\n      document.getElementById(taskArr.findIndex((task) => task.description.toLowerCase()\n        === inputTrimed.toLowerCase()) + 1),\n      'task-repeated',\n      'Repeated Tasks',\n      'highlight-repeated',\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n    );\n  } else if (inputTrimed !== '' && event.key === 'Enter') {\n    // taskInput.value = inputTrimed;\n    (0,_modules_undo_clearall_js__WEBPACK_IMPORTED_MODULE_12__.deletedOldContent)(oldArr, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.redoIcon, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearAllIcon);\n    (0,_modules_save_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(inputTrimed, taskArr);\n    (0,_modules_create_append_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(inputTrimed, taskArr, taskArr.length, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n      _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkStatus, _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkTask, _modules_remove_task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.saveOldContent, _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.updateContent,\n      _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n    (0,_modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n    (0,_modules_alert_messages_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.successMessage,\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList.children[_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList.childElementCount - 1],\n      'recent-added',\n      'Recent added',\n      'highlight-recent',\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput,\n    );\n    (0,_modules_clear_field_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput);\n  }\n});\n\n// Remove All Complete Tasks\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearBtn.addEventListener('click', () => {\n  (0,_modules_remove_completed_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(taskArr, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList,\n    _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n});\n\n// Remove all tasks when clicking refresh icon\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearAllIcon[0].addEventListener('click', (event) => {\n  (0,_modules_clearall_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(event, oldArr, taskArr, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.redoIcon,\n    _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n});\n\n// Retieve all removed tasks when clicking undo icon\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.redoIcon[0].addEventListener('click', (event) => {\n  (0,_modules_undo_clearall_js__WEBPACK_IMPORTED_MODULE_12__.undoClearAll)(event, _modules_create_append_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.completedStyle, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearAllIcon, oldArr, taskArr,\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskInput, _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkStatus, _modules_task_status_js__WEBPACK_IMPORTED_MODULE_9__.checkTask, _modules_remove_task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.saveOldContent, _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_10__.updateContent,\n    _modules_counters_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.allCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.pendingCounter, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.completedCounter);\n});\n\n// Show Tasks when clicking eye icon\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.eyeIcons.forEach((icon, i) => {\n  icon.addEventListener('click', (event) => {\n    if (i === 0) (0,_modules_show_hide_tasks_js__WEBPACK_IMPORTED_MODULE_14__.showAllTasks)(event, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.eyeIcons);\n    else if (i === 1) (0,_modules_show_hide_tasks_js__WEBPACK_IMPORTED_MODULE_14__.showPendingTasks)(event, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.eyeIcons);\n    else if (i === 2) (0,_modules_show_hide_tasks_js__WEBPACK_IMPORTED_MODULE_14__.showCompleteTasks)(event, _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.eyeIcons);\n  });\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/alert_messages.js":
/*!***************************************!*\
  !*** ./src/modules/alert_messages.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showMessage)\n/* harmony export */ });\nfunction showMessage(\n  message, element, elementClass, titleAttribute, highlightClass, taskInput,\n) {\n  if (message.classList.contains('show')) {\n    message.classList.toggle('show');\n  }\n\n  message.classList.toggle('show');\n  element.classList.toggle(highlightClass);\n\n  setTimeout(() => { message.classList.toggle('show'); }, 1000);\n\n  if (document.getElementsByClassName(elementClass).length > 0) {\n    document.getElementsByClassName(elementClass)[0].removeAttribute('title');\n    document.getElementsByClassName(elementClass)[0].classList.toggle(elementClass);\n  }\n\n  element.classList.toggle(elementClass);\n  element.title = titleAttribute;\n\n  taskInput.blur();\n\n  setTimeout(() => {\n    element.scrollIntoView();\n  }, 80);\n\n  setTimeout(() => {\n    element.classList.toggle(highlightClass);\n    taskInput.focus();\n    document.body.scrollTop = 0;\n  }, 900);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/alert_messages.js?");

/***/ }),

/***/ "./src/modules/clear_field.js":
/*!************************************!*\
  !*** ./src/modules/clear_field.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearField)\n/* harmony export */ });\n// Clears input filed\nfunction clearField(element) {\n  element.value = '';\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/clear_field.js?");

/***/ }),

/***/ "./src/modules/clearall.js":
/*!*********************************!*\
  !*** ./src/modules/clearall.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearAllTask)\n/* harmony export */ });\n// Remove all tasks, save content to retrieve it before add a new book\n\nfunction clearAllTask(\n  event, oldArr, taskArr, taskList, taskInput, redoIcon,\n  updateCounters, allCounter, pendingCounter, completedCounter,\n  tasks = document.querySelectorAll('.task-item'),\n) {\n  if (taskList.childElementCount) {\n    redoIcon[0].classList.remove('fade-undo-icon');\n    event.target.style.transform += 'rotate(360deg)';\n    event.target.classList.add('disable-refesh-icon');\n\n    oldArr.push(...taskArr);\n\n    tasks.forEach((task) => {\n      task.remove();\n    });\n\n    taskArr.length = 0;\n    localStorage.setItem('taskArray', JSON.stringify(taskArr));\n\n    redoIcon[0].style.display = 'initial';\n\n    updateCounters(allCounter, pendingCounter, completedCounter);\n    taskInput.focus();\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/clearall.js?");

/***/ }),

/***/ "./src/modules/counters.js":
/*!*********************************!*\
  !*** ./src/modules/counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateCounters)\n/* harmony export */ });\nfunction updateCounters(\n  allCounter, pendingCounter, completedCounter,\n  allTasks = document.getElementsByClassName('task-item').length,\n  completedTasks = document.getElementsByClassName('completed-container').length,\n) {\n  allCounter.innerHTML = allTasks;\n  pendingCounter.innerHTML = allTasks - completedTasks;\n  completedCounter.innerHTML = completedTasks;\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/counters.js?");

/***/ }),

/***/ "./src/modules/create_append.js":
/*!**************************************!*\
  !*** ./src/modules/create_append.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAppendTask)\n/* harmony export */ });\n// Create a Book and Add event listeners\nfunction createAppendTask(\n  task, taskArr, i, taskList, taskInput,\n  // events\n  checkStatus, checkTask, removeTask, saveOldContent, updateContent,\n  updateCounters, allCounter, pendingCounter, completedCounter,\n) {\n  const taskElement = `\n            <li id=\"${i}\" class=\"task-item box-format\">\n                <div class=\"task-content\">\n                    <input class=\"pointer task-input\" type=\"checkbox\">\n                    <label class=\"task-label\" contenteditable=\"true\">${task}</label>\n                </div>\n                <div class=\"task-icons\">\n                    <i class=\"fa fa-trash-o pointer\" title=\"Remove task\"></i>\n                    <i class=\"fa fa-ellipsis-v\"></i>\n                </div>\n            </li>`;\n\n  taskList.insertAdjacentHTML('beforeend', taskElement);\n\n  taskList.lastChild.children[0].children[0].checked = taskArr[i - 1].completed;\n\n  taskList.lastChild.children[0].children[0].addEventListener('change', (event) => {\n    checkStatus(event, taskArr, updateCounters, allCounter, pendingCounter, completedCounter);\n  });\n  taskList.lastChild.children[0].children[0].addEventListener('keydown', checkTask);\n\n  taskList.lastChild.children[1].children[0].addEventListener('click', (event) => {\n    removeTask(event, taskArr, taskList, updateCounters, allCounter, pendingCounter,\n      completedCounter);\n  });\n\n  taskList.lastChild.children[0].children[1].addEventListener('focus', saveOldContent);\n  taskList.lastChild.children[0].children[1].addEventListener('blur', (event) => {\n    updateContent(event, taskArr);\n  });\n\n  taskList.lastChild.children[0].children[1].addEventListener('keydown', (event) => {\n    if (event.key === 'Enter'\n      && event.target.closest('.task-item').nextElementSibling\n    ) {\n      updateContent(event, taskArr);\n\n      event.target.closest('.task-item').nextElementSibling\n        .getElementsByClassName('task-label')[0].focus();\n\n      event.preventDefault();\n    } else if (event.key === 'Enter'\n      && !event.target.closest('.task-item').nextElementSibling\n    ) {\n      taskInput.focus();\n      event.preventDefault();\n    }\n  });\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/create_append.js?");

/***/ }),

/***/ "./src/modules/edit_task.js":
/*!**********************************!*\
  !*** ./src/modules/edit_task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveOldContent\": () => (/* binding */ saveOldContent),\n/* harmony export */   \"updateContent\": () => (/* binding */ updateContent)\n/* harmony export */ });\nlet oldText;\n\n// Save text to use it if you try to add empty text\nfunction saveOldContent() {\n  oldText = this.textContent;\n}\n\n// Updates task and trims it (remove extra spaces)\nfunction updateContent(event, taskArr) {\n  event.target.innerText = event.target.innerText.trim().replace(/\\s+/g, ' ');\n  if (event.target.innerText === '') {\n    event.target.innerText = oldText;\n  }\n\n  taskArr[event.target.parentElement.parentElement.id - 1].description = event.target.innerText;\n  localStorage.setItem('taskArray', JSON.stringify(taskArr));\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/edit_task.js?");

/***/ }),

/***/ "./src/modules/load_content.js":
/*!*************************************!*\
  !*** ./src/modules/load_content.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContent)\n/* harmony export */ });\n// Load content from localStorage and return an Array\nfunction loadContent(\n  createAppendTask, taskList, taskInput, checkStatus, completedStyle,\n  checkTask, removeTask, saveOldContent, updateContent,\n  updateCounters, allCounter, pendingCounter, completedCounter,\n  taskArr = [],\n  localData = JSON.parse(localStorage.getItem('taskArray')),\n) {\n  if (localData) {\n    taskArr = localData;\n    taskArr.forEach((task, i, arr) => {\n      createAppendTask(task.description, arr, (i + 1), taskList, taskInput,\n        checkStatus, checkTask, removeTask, saveOldContent, updateContent,\n        updateCounters, allCounter, pendingCounter, completedCounter);\n      completedStyle(task, i);\n    });\n  } else {\n    localStorage.setItem('taskArray', JSON.stringify(taskArr));\n  }\n\n  updateCounters(allCounter, pendingCounter, completedCounter);\n  return taskArr;\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/load_content.js?");

/***/ }),

/***/ "./src/modules/remove_completed.js":
/*!*****************************************!*\
  !*** ./src/modules/remove_completed.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeAllCompleted)\n/* harmony export */ });\n// Remove all completed items and update ids\n\nfunction removeAllCompleted(\n  taskArr, taskList,\n  updateCounters, allCounter, pendingCounter, completedCounter,\n  newArr,\n) {\n  newArr = taskArr.filter((task, i) => {\n    if (task.completed) {\n      document.getElementById(i + 1).remove();\n    }\n    return task.completed !== true;\n  });\n\n  taskArr.length = 0;\n  taskArr.push(...newArr);\n\n  taskArr.forEach((task, i) => {\n    task.index = i + 1;\n    taskList.children[i].id = i + 1;\n  });\n\n  localStorage.setItem('taskArray', JSON.stringify(taskArr));\n\n  updateCounters(allCounter, pendingCounter, completedCounter);\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/remove_completed.js?");

/***/ }),

/***/ "./src/modules/remove_task.js":
/*!************************************!*\
  !*** ./src/modules/remove_task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeTask)\n/* harmony export */ });\n// Remove a task and update ids\n\nfunction removeTask(\n  event, taskArr, taskList,\n  updateCounters, allCounter, pendingCounter, completedCounter,\n) {\n  taskArr.splice(event.target.parentElement.parentElement.getAttribute('id') - 1, 1);\n\n  event.target.parentElement.parentElement.remove();\n\n  taskArr.forEach((task, i) => {\n    taskList.children[i].id = i + 1;\n    task.index = i + 1;\n  });\n\n  localStorage.setItem('taskArray', JSON.stringify(taskArr));\n\n  updateCounters(allCounter, pendingCounter, completedCounter);\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/remove_task.js?");

/***/ }),

/***/ "./src/modules/save_data.js":
/*!**********************************!*\
  !*** ./src/modules/save_data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveData)\n/* harmony export */ });\n// Push data to Array and localStorage\nfunction saveData(value, taskArr) {\n  taskArr.push({ description: value, completed: false, index: taskArr.length + 1 });\n  localStorage.setItem('taskArray', JSON.stringify(taskArr));\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/save_data.js?");

/***/ }),

/***/ "./src/modules/show_hide_tasks.js":
/*!****************************************!*\
  !*** ./src/modules/show_hide_tasks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showAllTasks\": () => (/* binding */ showAllTasks),\n/* harmony export */   \"showCompleteTasks\": () => (/* binding */ showCompleteTasks),\n/* harmony export */   \"showPendingTasks\": () => (/* binding */ showPendingTasks)\n/* harmony export */ });\n// Toggle fa-eye-slash class for icons that are different that the current clicked\nfunction toggleEyeSlash(eyeIcons, event) {\n  eyeIcons.forEach((icon) => {\n    if (icon !== event.target && !icon.classList.contains('fa-eye-slash')) {\n      icon.classList.toggle('fa-eye-slash');\n    }\n  });\n}\n\n// Set display propery for a group of tasks\nfunction setDisplay(task, display) {\n  task.forEach((task) => {\n    task.style.display = display;\n  });\n}\n\n// Show All Tasks when clicking eye icon\nfunction showAllTasks(\n  event, eyeIcons,\n  allTasks = document.querySelectorAll('.task-item'),\n) {\n  if (allTasks.length) {\n    toggleEyeSlash(eyeIcons, event);\n\n    event.target.classList.remove('fa-eye-slash');\n\n    setDisplay(allTasks, 'flex');\n  }\n}\n\n// Show Pending when clicking eye icon\nfunction showPendingTasks(\n  event, eyeIcons,\n  allTasks = document.querySelectorAll('.task-item'),\n  completeTasks = document.querySelectorAll('.completed-container'),\n) {\n  if (\n    allTasks.length - completeTasks.length > 0\n    && allTasks.length !== completeTasks.length\n  ) {\n    toggleEyeSlash(eyeIcons, event);\n\n    event.target.classList.toggle('fa-eye-slash');\n\n    setDisplay(allTasks, 'flex');\n\n    if (event.target.classList.contains('fa-eye-slash')) {\n      setDisplay(completeTasks, 'flex');\n      eyeIcons[0].classList.toggle('fa-eye-slash');\n    } else {\n      setDisplay(completeTasks, 'none');\n    }\n  }\n}\n\n// Show Complete Tasks when clicking eye icon\nfunction showCompleteTasks(\n  event, eyeIcons,\n  allTasks = document.querySelectorAll('.task-item'),\n  completeTasks = document.querySelectorAll('.completed-container'),\n) {\n  if (completeTasks.length) {\n    toggleEyeSlash(eyeIcons, event);\n\n    event.target.classList.toggle('fa-eye-slash');\n\n    setDisplay(allTasks, 'flex');\n\n    if (event.target.classList.contains('fa-eye-slash')) {\n      allTasks.forEach((task) => {\n        if (!task.classList.contains('completed-container')) {\n          task.style.display = 'flex';\n        }\n      });\n      eyeIcons[0].classList.toggle('fa-eye-slash');\n    } else {\n      allTasks.forEach((task) => {\n        if (!task.classList.contains('completed-container')) {\n          task.style.display = 'none';\n        }\n      });\n    }\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/show_hide_tasks.js?");

/***/ }),

/***/ "./src/modules/task_status.js":
/*!************************************!*\
  !*** ./src/modules/task_status.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkStatus\": () => (/* binding */ checkStatus),\n/* harmony export */   \"checkTask\": () => (/* binding */ checkTask),\n/* harmony export */   \"completedStyle\": () => (/* binding */ completedStyle)\n/* harmony export */ });\n// if check-box is marked it adds a completed style to the task\nfunction checkStatus(\n  event, taskArr,\n  updateCounters, allCounter, pendingCounter, completedCounter,\n) {\n  if (event.target.checked) {\n    event.target.nextElementSibling.classList.toggle('completed');\n    event.target.parentElement.parentElement.classList.toggle('completed-container');\n  } else {\n    event.target.nextElementSibling.classList.toggle('completed');\n    event.target.parentElement.parentElement.classList.toggle('completed-container');\n  }\n\n  taskArr[event.target.parentElement.parentElement.id - 1].completed = event.target.checked;\n  localStorage.setItem('taskArray', JSON.stringify(taskArr));\n\n  updateCounters(allCounter, pendingCounter, completedCounter);\n}\n\n// If completed property on object is true it adds completed style (when loading content)\nfunction completedStyle(status, i) {\n  if (status.completed) {\n    document.getElementsByClassName('task-label')[i].classList.toggle('completed');\n    document.getElementById(i + 1).classList.toggle('completed-container');\n  }\n}\n\n// Function to check a check-box using keys (tab, enter)\nfunction checkTask(event) {\n  if (event.key === 'Enter') {\n    this.click();\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task_status.js?");

/***/ }),

/***/ "./src/modules/undo_clearall.js":
/*!**************************************!*\
  !*** ./src/modules/undo_clearall.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deletedOldContent\": () => (/* binding */ deletedOldContent),\n/* harmony export */   \"undoClearAll\": () => (/* binding */ undoClearAll)\n/* harmony export */ });\n// Render all Tasks deleted from clear all icon\n\nfunction undoClearAll(\n  event, createAppendTask, completedStyle, clearAllIcon, oldArr, taskArr, taskList,\n  taskInput, checkStatus, checkTask, removeTask, saveOldContent, updateContent,\n  updateCounters, allCounter, pendingCounter, completedCounter,\n) {\n  if (oldArr.length) {\n    taskArr.push(...oldArr);\n    localStorage.setItem('taskArray', JSON.stringify(taskArr));\n\n    taskArr.forEach((task) => {\n      createAppendTask(\n        task.description, taskArr, task.index, taskList, taskInput,\n        checkStatus, checkTask, removeTask, saveOldContent, updateContent,\n        updateCounters, allCounter, pendingCounter, completedCounter,\n      );\n      completedStyle(task, task.index - 1);\n    });\n\n    oldArr.length = 0;\n    event.target.style.transform += 'rotate(-360deg)';\n    event.target.classList.add('fade-undo-icon');\n    clearAllIcon[0].classList.remove('disable-refesh-icon');\n\n    setTimeout(() => {\n      event.target.style.display = 'none';\n    }, 400);\n\n    updateCounters(allCounter, pendingCounter, completedCounter);\n  }\n  taskInput.focus();\n}\n\nfunction deletedOldContent(oldArr, redoIcon, clearAllIcon) {\n  if (oldArr.length) {\n    redoIcon[0].classList.remove('fade-undo-icon');\n    redoIcon[0].style.display = 'none';\n    clearAllIcon[0].classList.remove('disable-refesh-icon');\n\n    oldArr.length = 0;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/undo_clearall.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"allCounter\": () => (/* binding */ allCounter),\n/* harmony export */   \"clearAllIcon\": () => (/* binding */ clearAllIcon),\n/* harmony export */   \"clearBtn\": () => (/* binding */ clearBtn),\n/* harmony export */   \"completedCounter\": () => (/* binding */ completedCounter),\n/* harmony export */   \"eyeIcons\": () => (/* binding */ eyeIcons),\n/* harmony export */   \"pendingCounter\": () => (/* binding */ pendingCounter),\n/* harmony export */   \"redoIcon\": () => (/* binding */ redoIcon),\n/* harmony export */   \"repeatedMessage\": () => (/* binding */ repeatedMessage),\n/* harmony export */   \"successMessage\": () => (/* binding */ successMessage),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm),\n/* harmony export */   \"taskInput\": () => (/* binding */ taskInput),\n/* harmony export */   \"taskList\": () => (/* binding */ taskList)\n/* harmony export */ });\nconst taskList = document.getElementById('list-tasks');\nconst taskInput = document.getElementById('list-input-text');\nconst addBtn = document.getElementById('list-input-btn');\nconst taskForm = document.getElementById('list-input-group');\nconst clearBtn = document.getElementById('clear-btn');\n// export const completedElements = document.getElementsByClassName('completed-container');\n\n// Mesagges\nconst successMessage = document.getElementById('success-msg');\nconst repeatedMessage = document.getElementById('repeated-msg');\n\nconst redoIcon = document.getElementsByClassName('fa-undo');\nconst clearAllIcon = document.getElementsByClassName('fa-refresh');\n\n// Counters\nconst allCounter = document.getElementById('all-counter');\nconst pendingCounter = document.getElementById('pending-counter');\nconst completedCounter = document.getElementById('completed-counter');\n\n// Eye Icon\nconst eyeIcons = document.querySelectorAll('.fa-eye');\n// export const eyeIcons = document.getElementsByClassName('fa-eye');\n\n\n//# sourceURL=webpack://todo-list/./src/modules/variables.js?");

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