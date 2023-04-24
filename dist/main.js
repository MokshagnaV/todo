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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareDesc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareDesc\n * @category Common Helpers\n * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return -1 if the first date is after the second,\n * 1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:\n * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> 1\n *\n * @example\n * // Sort the array of dates in reverse chronological order:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareDesc)\n * //=> [\n * //   Sun Jul 02 1995 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Wed Feb 11 1987 00:00:00\n * // ]\n */\n\nfunction compareDesc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff > 0) {\n    return -1;\n  } else if (diff < 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/compareDesc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction get(ele){\n    return document.createElement(ele);\n}\n\nfunction getValueByName(name){\n    const ele = document.querySelector(`[name=\"${name}\"]`);\n    return ele.value;\n}\n\nfunction classAdd(ele, ...cls){\n    for(const cl of cls){\n        ele.classList.add(cl);\n    }    \n}\nconst priorityList = {\"1\":\"high\", \"2\": \"moderate\", \"3\": \"low\"};\nclass TaskHTML{\n    constructor(title, priority, due, index){\n        const container = get(\"div\");\n        classAdd(container, \"task\", priorityList[priority]);\n\n        const titleDiv = get(\"div\");\n        classAdd(titleDiv, \"title\");\n        titleDiv.textContent = title;\n\n        const utilDiv = get(\"div\"); \n        const duediv = get(\"due\");\n        classAdd(duediv, \"due\");\n        duediv.textContent = due;\n\n        const del = get(\"i\");\n        classAdd(del, \"del\", \"material-icons\");\n        del.setAttribute(\"data-index\", index);\n        del.textContent = \"delete\";\n\n        utilDiv.append(duediv, del);\n        container.append(titleDiv, utilDiv);\n\n        this.getHTML = () =>{\n            return container;\n        }\n    }\n}\n\nconst container = document.querySelector(\"#container\");\nfunction renderTask(taskList){\n    container.innerHTML = \"\";\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Home\";\n    container.append(h1);\n    taskList.forEach(task => {\n        const taskObject = task.getTask();\n        const taskHtml = new TaskHTML(taskObject.title, taskObject.priority, taskObject.due, taskList.indexOf(task));\n        container.append(taskHtml.getHTML());\n    });\n}\n\n\nfunction modalOpen(title){\n    const modal = document.querySelector(\".modal\");\n    const modalHead = document.querySelector(\".modal-header\");\n    if(modalHead.children.length < 2){\n        const head = document.createElement(\"h1\");\n        head.textContent = title;\n        modalHead.appendChild(head);\n    }else{\n        modalHead.children[1].textContent = title;\n    }\n    modal.classList.add(\"modal-open\");\n}\nfunction modalClose(){\n    const modal = document.querySelector(\".modal\");\n            modal.classList.remove(\"modal-open\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({modalOpen, modalClose, renderTask, getValueByName});\n\n//# sourceURL=webpack://todo/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _tasks_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks.json */ \"./tasks.json\");\n/* harmony import */ var _notes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notes.json */ \"./notes.json\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst taskList = []\nfor(const key in _tasks_json__WEBPACK_IMPORTED_MODULE_4__){\n    const task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_tasks_json__WEBPACK_IMPORTED_MODULE_4__[key].title,\n                            _tasks_json__WEBPACK_IMPORTED_MODULE_4__[key].desc,\n                            _tasks_json__WEBPACK_IMPORTED_MODULE_4__[key].due,\n                            _tasks_json__WEBPACK_IMPORTED_MODULE_4__[key].priority);\n    taskList.push(task);\n}\n\nconst addTask = document.querySelector(\"#addTask\");\naddTask.addEventListener(\"click\", () => {\n    _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].modalOpen(\"Add Task\");\n    const addTask = document.querySelector(\"#task-add\");\n    addTask.addEventListener(\"click\", ()=>{\n        const title = _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getValueByName(\"task-title\");\n        const desc = _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getValueByName(\"task-desc\");\n        const due = _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getValueByName(\"dueDate\");\n        const prio = _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getValueByName(\"priority\");\n\n        const task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, desc, due, prio);\n        taskList.push(task);\n        _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderTask(taskList);\n        deleteEvent();\n        _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].modalClose();\n    })\n})\nconst close = document.querySelectorAll(\"#close\");\nclose.forEach(c => {\n    c.addEventListener(\"click\", ()=>{\n        _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].modalClose();\n    })\n})\n\n_DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderTask(taskList);\nlet deletes = document.querySelectorAll(\".del\");\n\nfunction deleteEvent(){\n    deletes = document.querySelectorAll(\".del\");\n    deletes.forEach(del => {\n        del.addEventListener(\"click\", ()=>{\n            deleteTask(del);\n        })\n})}\nfunction deleteTask(del){\n        const index = del.getAttribute(\"data-index\");\n        taskList.splice(index, 1);\n        _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderTask(taskList);\n        deleteEvent();\n}\ndeleteEvent();\n\nconst addProject = document.querySelector(\"#add-project\");\naddProject.addEventListener(\"click\", ()=>{\n    _DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].modalOpen(\"Add Project\");\n});\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Note)\n/* harmony export */ });\nclass Note{\n    constructor(title, note = null, lastEdit){\n        this.title = title;\n        this.note = note;\n        this.createdOn = new Date();\n        this.lastEdit = new Date();\n    }\n\n    editTitle(title){\n        this.title = title;\n        this.lastEdit = new Date();\n    }\n    editNote(note){\n        this.note = note;\n        this.lastEdit = new Date();\n    }\n}\n\n//# sourceURL=webpack://todo/./src/notes.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/compareDesc/index.js\");\n\n\nclass Project{\n    constructor(title){\n        this.title = title;\n        const _todos = {};\n\n        this.addTodo = function(todo){\n            _todos[`${todo.getTask().title}`]= todo.getTask();\n        }\n\n        this.showAllTodos = function() { \n            return _todos;\n        }\n\n        this.delTodo = function(todo){\n            delete _todos[todo];\n        }\n        //if order is true => Ascending order else => Descending order\n        this.sortByPriority = function(order){ \n            let result;\n            if(order){\n                result = Object.keys(_todos).sort((a,b)=>_todos[a].priority - _todos[b].priority)\n            }else{\n                result = Object.keys(_todos).sort((a,b)=>_todos[b].priority - _todos[a].priority)\n            }\n            return result;\n        }\n        this.sortByDueDate = function(order){\n            let result;\n            if(order){\n                result = Object.keys(_todos).sort((a,b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_todos[a].due, _todos[b].due));\n            }else{\n                result = Object.keys(_todos).sort((a,b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_todos[a].due, _todos[b].due));\n            }\n            return result;\n        }\n    }\n\n    \n}\n\n//# sourceURL=webpack://todo/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority) {\n       let _title = title;\n       let _description = description;\n       let _dueDate = dueDate;\n       let _priority = priority;\n       this.editTitle = function(title) {\n           _title = title;\n       }\n       this.editDescription = function(desc){\n            _description = desc;\n       }\n       this.editDueDate = function(due){\n            _dueDate = due;\n       }\n       this.editPriority = function(prio){\n            _priority = prio;\n       }\n       this.getTask = function() {\n           return {\n               title: _title, desc: _description, due: _dueDate, priority: _priority\n           }\n       }\n    }\n}\n\n//# sourceURL=webpack://todo/./src/task.js?");

/***/ }),

/***/ "./notes.json":
/*!********************!*\
  !*** ./notes.json ***!
  \********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"1\":{\"title\":\"React\",\"note\":\"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.\"},\"2\":{\"title\":\"Node.js\",\"note\":\"Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.\"},\"3\":{\"title\":\"JavaScript\",\"note\":\"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.\"}}');\n\n//# sourceURL=webpack://todo/./notes.json?");

/***/ }),

/***/ "./tasks.json":
/*!********************!*\
  !*** ./tasks.json ***!
  \********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"1\":{\"title\":\"Walking\",\"desc\":\"Walk 2km a day\",\"due\":\"2023-02-19\",\"priority\":1},\"2\":{\"title\":\"watering\",\"desc\":\"Water the plants\",\"due\":\"2023-01-01\",\"priority\":3},\"3\":{\"title\":\"Learn React\",\"desc\":\"read for an hour\",\"due\":\"2023-03-01\",\"priority\":1},\"4\":{\"title\":\"Practice react \",\"desc\":\"practice/code for an hour\",\"due\":\"2023-03-30\",\"priority\":2},\"5\":{\"title\":\"Feed fishes\",\"desc\":\"feed two times a day\",\"due\":\"2023-03-10\",\"priority\":2}}');\n\n//# sourceURL=webpack://todo/./tasks.json?");

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