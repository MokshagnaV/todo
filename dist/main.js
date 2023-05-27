/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareDesc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameMonth/index.js */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const priorityList = { 1: "danger", 2: "warning", 3: "success" };
const modalBodies = {
  addTask: (obj) => {
    const { title } = obj;
    return ` 
    <div class="myModal-content">
      <div class="myModal-header p-3">
        <h4 id="myModal-title">${title}</h4>
        <button class="btn btn-sm btn-danger" id="modal-close">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="myModal-body p-3">
        <form id="task-form">
          <div class="form-group m-2">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" name="task-title" id="title" required />
          </div>
          <div class="form-group m-2">
            <label for="desc" class="form-label">Description</label>
            <textarea class="form-control" name="task-desc" id="desc" required></textarea>
          </div>
          <div class="form-group m-2">
            <label for="dueDate" class="form-label">Due</label>
            <input type="date" class="form-control" id="dueDate" name="dueDate" required />
          </div>
          <div class="form-group m-2">
            <label for="priority" class="form-label d-block">Priority</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="high"
                value="1"
                required
              />
              <label class="form-check-label" for="high">High</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="moderate"
                value="2"
                required
              />
              <label class="form-check-label" for="moderate">Moderate</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="low"
                value="3"
                required
              />
              <label class="form-check-label" for="low">Low</label>
            </div>
          </div>
          <input class="btn btn-primary m-2" type="submit" value="Submit" />
        </form>
      </div>
    </div>`;
  },
  addProject: () => {
    return `<div class="card">
    <div class="card-header d-flex-row-reverse align-items-center">
      <span class="material-icons" id="modal-close">close</span>
      <h5 class="card-title me-auto">Add Project</h5>
    </div>
    <div class="card-body">
      <form id="add-project-form">
        <div class="form-floating">
          <input type="text" id="addProject" name="project-title" class="form-control" placeholder="Create Project">
          <label for="addProject">Create Project</label>
        </div>
        <input class="btn btn-outline-success" type="submit" value="Create">
      </form>
    </div>
  </div>`
  },
  editTask: (obj) => {
    const { title, desc, due, priority } = obj;
    return `
    <div class="task-card">
      <div class="header">
        <span class="material-icons float-end" id="modal-close">close</span>
      </div>
      <form class="form-floating" id="edit-task">
        <div class="card-header">
          <span class="material-icons">task</span>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="task-title"
              name="task-title"
              placeholder="Title"
              value="${title}"
            />
            <label for="task-title">Title</label>
          </div>
        </div>
        <div class="card-body">
          <div class="form-floating">
            <textarea
              class="form-control"
              name="task-desc"
              id="task-desc"
              placeholder="Description"
              style="height: 100px"
            >${desc}</textarea>
            <label for="task-desc">Task Description</label>
          </div>
          <div class="form-floating">
            <input
              type="date"
              class="form-control"
              value="${due}"
              name="task-due"
              placeholder="date"
              id="task-due"
            />
            <label for="task-due">Due Date</label>
          </div>
          <div class="form-floating">
            <select class="form-select" id="priority" name="priority" placeholder="priority">
              <option id="high" value="1" ${
                priority === 1 ? "selected" : ""
              }>High</option>
              <option id="moderate" value="2" ${
                priority === 2 ? "selected" : ""
              }>Moderate</option>
              <option id="low" value="3" ${
                priority === 3 ? "selected" : ""
              }>Low</option>
            </select>
            <label for="priority">Priority of the task</label>
          </div>
          <input class="btn btn-outline-success" type="submit" value="Submit">
        </div>
      </form>
    </div>
  `;
  },
  showTask: (obj) => {
    let { title, desc, due, priority } = obj;
    priority = priorityList[priority];
    return `<div class="card border-${priority} mb-3" style="max-width: 18rem;">
    <div class="card-header"> <span class="material-icons" id="modal-close">close</span> </div>
    <div class="card-body text-${priority}">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${desc}</p>
    </div>
    <div class="card-footer text-muted">
    <strong>Due by </strong> ${due}
    </div>
  </div>`;
  },
};

function get(ele) {
  return document.createElement(ele);
}

function getValueByName(name) {
  const ele = document.querySelector(`[name="${name}"]`);
  return ele.value;
}

function classAdd(ele, ...cls) {
  for (const cl of cls) {
    ele.classList.add(cl);
  }
}

class TaskHTML {
  constructor(title, priority, due, index) {
    const container = get("div");
    classAdd(container, "task", "alert", `alert-${priorityList[priority]}`);
    container.setAttribute("data-index", index);

    const titleDiv = get("span");
    classAdd(titleDiv, "title");
    titleDiv.textContent = title;

    const utilDiv = get("span");
    classAdd(utilDiv, "task-utils");
    const duediv = get("span");
    classAdd(duediv, "due");
    duediv.textContent = due.toDateString();

    const del = get("i");
    classAdd(del, "del", "material-icons", "mx-2");
    del.setAttribute("data-index", index);
    del.textContent = "delete";

    const edit = get("span");
    classAdd(edit, "edit", "material-icons");
    edit.setAttribute("data-index", index);
    edit.textContent = "edit";

    utilDiv.append(duediv, del, edit);
    container.append(titleDiv, utilDiv);

    this.getHTML = () => {
      return container;
    };
  }
}

function renderTask(taskList) {
  const container = get("div");
  classAdd(container, "tasks");

  taskList.forEach((task) => {
    const taskObject = task.get();
    const taskHtml = new TaskHTML(
      taskObject.title,
      taskObject.priority,
      taskObject.due,
      taskList.indexOf(task)
    );
    container.append(taskHtml.getHTML());
  });

  return container;
}

function modalOpen(title, purpose, task) {
  const modal = get("div");
  classAdd(modal, "myModal");
  switch (purpose) {
    case "editTask":
      modal.innerHTML = modalBodies[purpose]({
        title: task.title,
        desc: task.desc,
        due: task.due.toISOString().split("").slice(0, 10).join(""),
        priority: task.priority,
      });
      break;
    case "addTask":
      modal.innerHTML = modalBodies[purpose]({ title });
      break;
    case "showTask":
      modal.innerHTML = modalBodies[purpose]({
        title: task.title,
        desc: task.desc,
        due: task.due.toDateString(),
        priority: task.priority,
      });
      break;
    default:
      modal.innerHTML = modalBodies[purpose]();
      break;
  }
  document.body.append(modal);
}

function modalClose() {
  const modals = document.querySelectorAll(".myModal");
  modals.forEach((modal) => (modal.outerHTML = ""));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get,
  classAdd,
  modalOpen,
  modalClose,
  renderTask,
  getValueByName,
});


/***/ }),

/***/ "./src/modules/formatter.js":
/*!**********************************!*\
  !*** ./src/modules/formatter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToLocalStorage": () => (/* binding */ addTaskToLocalStorage),
/* harmony export */   "delTaskFromLocalStorage": () => (/* binding */ delTaskFromLocalStorage),
/* harmony export */   "editTaskFromLocalStorage": () => (/* binding */ editTaskFromLocalStorage),
/* harmony export */   "sortTasksBy": () => (/* binding */ sortTasksBy),
/* harmony export */   "taskJsonToObj": () => (/* binding */ taskJsonToObj),
/* harmony export */   "toLocalStorage": () => (/* binding */ toLocalStorage)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ "./src/task.js");


function toLocalStorage(dataList, dataType) {
  const res = {};
  res[dataType] = dataList.map((data) => data.get());
  if (dataType === "tasks") localStorage.setItem("todos", JSON.stringify(res));
  else if (dataType === "projects")
    localStorage.setItem("projects", JSON.stringify(res));
}

function addTaskToLocalStorage(task) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  localTask.tasks.push(task.get());
  localStorage.setItem("todos", JSON.stringify(localTask));
}

function delTaskFromLocalStorage(index) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  localTask.tasks.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(localTask));
}

function editTaskFromLocalStorage(task, index) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  localTask.tasks[index] = task.get();
  localStorage.setItem("todos", JSON.stringify(localTask));
}

function taskJsonToObj(jsonTask) {
  return jsonTask.map((task) => {
    return new _task__WEBPACK_IMPORTED_MODULE_0__["default"](task.title, task.desc, new Date(task.due), task.priority);
  });
}

function sortTasksBy(taskList, sortBy, order) {
  const res = [...taskList];
  res.sort((task1, task2) => {
    const [a, b] = [task1.get()[sortBy], task2.get()[sortBy]];
    if (order) {
      return a === b ? 0 : a < b ? -1 : 1;
    } else {
      return a === b ? 0 : a < b ? 1 : -1;
    }
  });
  return res;
}




/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/DOM.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");



function noTasks() {
  const res = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");
  res.innerHTML =
    '<div class="alert alert-primary" role="alert"> No Tasks! </div>';
  return res;
}

const Banner = (function () {
  const cont = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");
  cont.setAttribute("id", "main-content-head");
  const label = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("span");
  _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].classAdd(label, "badge", "text-bg-info");
  const h1 = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("h1");
  _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].classAdd(h1, "title");

  const sort = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");
  _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].classAdd(sort, "d-flex", "align-items-center", "g-2");
  sort.innerHTML = `<div class="form-floating">
  <select class="form-select" name="sort-by" id="sort-by">
    <option value="0">Select</option>
    <option value="priority">Priority</option>
    <option value="due">Due date</option>
    <option value="title">Title</option>
  </select>
  <label for="sort-by">Sort by</label>
</div>`;
  const order = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("button");
  order.setAttribute("title", "Order By")
  _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].classAdd(order, "btn", "btn-light", "mx-2", "order-by");
  order.innerHTML = `<span class="material-icons">
  filter_list
  </span>
  `;
  sort.append(order);
  const leftPart = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");
  _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].classAdd(leftPart, "d-flex", "align-items-center");
  return {
    get: (title, count) => {
      h1.textContent = title;
      label.textContent = count;
      leftPart.append(h1, label);
      cont.append(leftPart, sort);
      return cont;
    },
  };
})();

function renderHome(taskList) {
  const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");

  container.append(
    Banner.get("Home", taskList.length),
    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderTask(taskList)
  );
  return container;
}

function renderToday(taskList) {
  const tasks = [];
  taskList.forEach((task) => {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(task.get().due)) {
      tasks.push(task);
    }
  });

  const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");

  let content = noTasks();
  if (tasks.length != 0) {
    content = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderTask(tasks);
  }
  container.append(Banner.get("Today's tasks", tasks.length), content);
  return container;
}

function renderMonth(taskList) {
  const tasks = [];
  taskList.forEach((task) => {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(task.get().due)) {
      tasks.push(task);
    }
  });

  const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");

  let content = noTasks();
  if (tasks.length != 0) {
    content = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderTask(tasks);
  }

  container.append(Banner.get("This month's tasks", tasks.length), content);
  return container;
}

function renderWeek(taskList) {
  const tasks = [];
  taskList.forEach((task) => {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(task.get().due)) {
      tasks.push(task);
    }
  });

  const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");

  let content = noTasks();
  if (tasks.length != 0) {
    content = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderTask(tasks);
  }
  container.append(Banner.get("This Week's tasks", tasks.length), content);
  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ renderHome, renderToday, renderMonth, renderWeek, Banner });


/***/ }),

/***/ "./src/modules/projectPage.js":
/*!************************************!*\
  !*** ./src/modules/projectPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/DOM.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");



function projectItem(title) {
  return `<span class="item-icon material-icons"> checklist </span><span>${title}</span>`;
}

function renderSidebar(list) {
  const proSide = document.querySelector(".projects-list");
  proSide.innerHTML = ""; 
  list.forEach((pro) => {
    const div = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");
    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].classAdd(div, "item", "project-item");
    div.innerHTML = projectItem(pro.title);
    proSide.append(div)
  });
}

function renderProject(project) {
  const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");
  const tasks = project.showAllTodos();
  const taskList = Object.values(tasks);
  container.append(
    _home__WEBPACK_IMPORTED_MODULE_1__["default"].Banner.get("Tasks", taskList.length),
    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderTask(taskList)
  );
  
  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  renderSidebar,
  renderProject
});


/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Note)
/* harmony export */ });
class Note{
    constructor(title, note = null, lastEdit){
        this.title = title;
        this.note = note;
        this.createdOn = new Date();
        this.lastEdit = new Date();
    }

    editTitle(title){
        this.title = title;
        this.lastEdit = new Date();
    }
    editNote(note){
        this.note = note;
        this.lastEdit = new Date();
    }
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareDesc/index.js");


class Project{
    constructor(title){
        this.title = title;
        const _todos = {};

        this.addTodo = function(todo){
            _todos[`${todo.get().title}`]= todo;
        }

        this.showAllTodos = function() { 
            return _todos;
        }

        this.delTodo = function(todo){
            delete _todos[todo];
        }
        //if order is true => Ascending order else => Descending order
        this.sortByPriority = function(order){ 
            let result;
            if(order){
                result = Object.keys(_todos).sort((a,b)=>_todos[a].priority - _todos[b].priority)
            }else{
                result = Object.keys(_todos).sort((a,b)=>_todos[b].priority - _todos[a].priority)
            }
            return result;
        }
        this.sortByDueDate = function(order){
            let result;
            if(order){
                result = Object.keys(_todos).sort((a,b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(_todos[a].due, _todos[b].due));
            }else{
                result = Object.keys(_todos).sort((a,b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(_todos[a].due, _todos[b].due));
            }
            return result;
        }
    }

    
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority) {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    this.editTitle = function (title) {
      _title = title;
    };
    this.editDescription = function (desc) {
      _description = desc;
    };
    this.editDueDate = function (due) {
      _dueDate = due;
    };
    this.editPriority = function (prio) {
      _priority = prio;
    };
    this.get = function () {
      return {
        title: _title,
        desc: _description,
        due: _dueDate,
        priority: _priority,
      };
    };
  }
}


/***/ }),

/***/ "./notes.json":
/*!********************!*\
  !*** ./notes.json ***!
  \********************/
/***/ ((module) => {

module.exports = JSON.parse('{"1":{"title":"React","note":"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies."},"2":{"title":"Node.js","note":"Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser."},"3":{"title":"JavaScript","note":"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."}}');

/***/ }),

/***/ "./tasks.json":
/*!********************!*\
  !*** ./tasks.json ***!
  \********************/
/***/ ((module) => {

module.exports = JSON.parse('{"1":{"title":"Walking","desc":"Walk 2km a day","due":"2023-02-19","priority":1},"2":{"title":"watering","desc":"Water the plants","due":"2023-01-01","priority":3},"3":{"title":"Learn React","desc":"read for an hour","due":"2023-03-01","priority":1},"4":{"title":"Practice react ","desc":"practice/code for an hour","due":"2023-03-30","priority":2},"5":{"title":"Feed fishes","desc":"feed two times a day","due":"2023-03-10","priority":2},"6":{"title":"Today is happy today fishes","desc":"feed two times a day","due":"2023-04-24","priority":2}}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes */ "./src/notes.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/formatter */ "./src/modules/formatter.js");
/* harmony import */ var _modules_projectPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/projectPage */ "./src/modules/projectPage.js");
/* harmony import */ var _tasks_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tasks.json */ "./tasks.json");
/* harmony import */ var _notes_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notes.json */ "./notes.json");













const container = document.querySelector("#container");
let deletes = document.querySelectorAll(".del");
let edits = document.querySelectorAll(".edit");
let tasks = document.querySelectorAll(".task");
let projects = document.querySelector(".project-item");
let sort = document.querySelector("#sort-by");
let order = document.querySelector(".order-by");
let modalClose = document.querySelectorAll("#modal-close");

let orderDown = true;
let sortBy = "0";

function renderContainer(content) {
  container.innerHTML = "";
  container.append(content);
  deleteEvent();
  editEvent();
  showTaskEvent();
  sortEvent();
  orderEvent();
  projectsEvent();
}

function deleteEvent() {
  deletes = document.querySelectorAll(".del");
  deletes.forEach((del) => {
    del.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const index = del.getAttribute("data-index");
      deleteTask(index);
    });
  });
}

function editEvent() {
  edits = document.querySelectorAll(".edit");
  edits.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const index = edit.getAttribute("data-index");
      editTask(taskList[index], index);
    });
  });
}

function showTaskEvent() {
  tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.addEventListener("click", (e) => {
      showTask(task.getAttribute("data-index"));
    });
  });
}

function sortEvent() {
  sort = document.querySelector("#sort-by");
  sort.addEventListener("change", () => {
    sortBy = sort.value;
    sortTasks(sort.value);
  });
}

function orderEvent() {
  order = document.querySelector(".order-by");
  order.addEventListener("click", () => {
    orderTasks(order);
  });
}

function closeEvent() {
  modalClose = document.querySelectorAll("#modal-close");
  modalClose.forEach((modal) =>
    modal.addEventListener("click", () => {
      _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalClose();
    })
  );
}

function projectsEvent() {
  try {
    projects = document.querySelectorAll(".project-item");
    projects.forEach((project) => {
      project.addEventListener("click", (e) => {
        const projectTitle = project.childNodes[1].textContent;
        renderContainer(_modules_projectPage__WEBPACK_IMPORTED_MODULE_6__["default"].renderProject(projectsList.find(pro=>pro.title === projectTitle)))
      });
    });
  } catch (ex) {}
}

const primItems = document.querySelectorAll(".primary-items");
primItems.forEach((item) => {
  item.addEventListener("click", () => {
    switch (item.childNodes[2].textContent.trim()) {
      case "Home":
        renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderHome(taskList));
        break;
      case "Today":
        renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderToday(taskList));
        break;
      case "This Month":
        renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderMonth(taskList));
        break;
      case "This Week":
        renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderWeek(taskList));
        break;
      default:
        renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderHome(taskList));
    }
  });
});

function addTaskForm() {
  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](
      data["task-title"],
      data["task-desc"],
      new Date(data["dueDate"]),
      data["priority"]
    );
    taskList.push(task);
    _modules_formatter__WEBPACK_IMPORTED_MODULE_5__.addTaskToLocalStorage(task);
    renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderHome(taskList));
    _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalClose();
  });
}

function addProjectForm() {
  const projectForm = document.getElementById("add-project-form");
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    projectsList.push(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](data["project-title"]));
    _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalClose();
    _modules_projectPage__WEBPACK_IMPORTED_MODULE_6__["default"].renderSidebar(projectsList);
    projectsEvent();
  });
}

function editTaskForm(task, index) {
  const taskForm = document.querySelector("#edit-task");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    task.editTitle(data["task-title"]);
    task.editDescription(data["task-desc"]);
    task.editDueDate(new Date(data["task-due"]));
    task.editPriority(data["priority"]);
    renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderHome(taskList));
    _modules_formatter__WEBPACK_IMPORTED_MODULE_5__.editTaskFromLocalStorage(task, index);
    _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalClose();
  });
}

function deleteTask(index) {
  taskList.splice(index, 1);
  _modules_formatter__WEBPACK_IMPORTED_MODULE_5__.delTaskFromLocalStorage(index);
  renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderHome(taskList));
}

function editTask(task, index) {
  _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalOpen(task.get().title, "editTask", task.get());
  closeEvent();
  editTaskForm(task, index);
}

function showTask(index) {
  _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalOpen(taskList[index].get().title, "showTask", taskList[index].get());
  closeEvent();
}

function sortTasks(sortBy) {
  const tasksContainer = document.querySelector(".tasks");
  tasksContainer.innerHTML = "";
  tasksContainer.append(
    _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderTask(_modules_formatter__WEBPACK_IMPORTED_MODULE_5__.sortTasksBy(taskList, sortBy, orderDown))
  );
}

function orderTasks(order) {
  if (order.classList.contains("order-down")) {
    orderDown = true;
    order.classList.remove("order-down");
  } else {
    orderDown = false;
    order.classList.add("order-down");
  }
  const tasksContainer = document.querySelector(".tasks");
  tasksContainer.innerHTML = "";
  tasksContainer.append(
    _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderTask(_modules_formatter__WEBPACK_IMPORTED_MODULE_5__.sortTasksBy(taskList, sortBy, orderDown))
  );
}

let taskList = [];
if (localStorage.getItem("todos")) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  taskList.push(...localTask.tasks);
  taskList = _modules_formatter__WEBPACK_IMPORTED_MODULE_5__.taskJsonToObj(taskList);
} else {
  for (const key in _tasks_json__WEBPACK_IMPORTED_MODULE_7__) {
    const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](
      _tasks_json__WEBPACK_IMPORTED_MODULE_7__[key].title,
      _tasks_json__WEBPACK_IMPORTED_MODULE_7__[key].desc,
      new Date(_tasks_json__WEBPACK_IMPORTED_MODULE_7__[key].due),
      _tasks_json__WEBPACK_IMPORTED_MODULE_7__[key].priority
    );
    taskList.push(task);
  }
  _modules_formatter__WEBPACK_IMPORTED_MODULE_5__.toLocalStorage(taskList, "tasks");
}
// taskList.push(
//   new Task("Today is testing task", "Testing the tasks list", new Date(), 3)
// );

let projectsList = [];
const test = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Test1")
test.addTodo(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("p1", "uhefh uesfh u erfus ", new Date(), 1));
projectsList.push(test);
const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
  _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalOpen("Add Task", "addTask");
  closeEvent();
  addTaskForm();
});

renderContainer(_modules_home__WEBPACK_IMPORTED_MODULE_4__["default"].renderHome(taskList));
_modules_projectPage__WEBPACK_IMPORTED_MODULE_6__["default"].renderSidebar(projectsList);
projectsEvent();

const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", () => {
  _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalOpen("Add Project", "addProject");
  closeEvent();
  addProjectForm();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQWE7QUFDZjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQkFBZ0IsZ0VBQWU7QUFDL0IsMEVBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHNEQUFhO0FBQ2Y7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZURlc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZU1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9mb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVEZXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyByZXZlcnNlIGNocm9ub2xvZ2ljYWxseSBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5IHJldmVyc2UgY2hyb25vbG9naWNhbGx5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZURlc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IDFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXMgaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlRGVzYylcbiAqIC8vPT4gW1xuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZURlc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE0LCA4LCAyNSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE1IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTUsIDgsIDI1KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVNb250aChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgPT09IGRhdGVSaWdodC5nZXRGdWxsWWVhcigpICYmIGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IGRhdGVSaWdodC5nZXRNb250aCgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lTW9udGggZnJvbSBcIi4uL2lzU2FtZU1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAxNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMTUpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lTW9udGgoRGF0ZS5ub3coKSwgZGlydHlEYXRlKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiY29uc3QgcHJpb3JpdHlMaXN0ID0geyAxOiBcImRhbmdlclwiLCAyOiBcIndhcm5pbmdcIiwgMzogXCJzdWNjZXNzXCIgfTtcbmNvbnN0IG1vZGFsQm9kaWVzID0ge1xuICBhZGRUYXNrOiAob2JqKSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSB9ID0gb2JqO1xuICAgIHJldHVybiBgIFxuICAgIDxkaXYgY2xhc3M9XCJteU1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJteU1vZGFsLWhlYWRlciBwLTNcIj5cbiAgICAgICAgPGg0IGlkPVwibXlNb2RhbC10aXRsZVwiPiR7dGl0bGV9PC9oND5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiIGlkPVwibW9kYWwtY2xvc2VcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXlNb2RhbC1ib2R5IHAtM1wiPlxuICAgICAgICA8Zm9ybSBpZD1cInRhc2stZm9ybVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG0tMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidGFzay10aXRsZVwiIGlkPVwidGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG0tMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidGFzay1kZXNjXCIgaWQ9XCJkZXNjXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtLTJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RHVlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkdWVEYXRlXCIgbmFtZT1cImR1ZURhdGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG0tMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJmb3JtLWxhYmVsIGQtYmxvY2tcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInByaW9yaXR5XCJcbiAgICAgICAgICAgICAgICBpZD1cImhpZ2hcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcmlvcml0eVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJtb2RlcmF0ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwibW9kZXJhdGVcIj5Nb2RlcmF0ZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJpb3JpdHlcIlxuICAgICAgICAgICAgICAgIGlkPVwibG93XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tMlwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH0sXG4gIGFkZFByb2plY3Q6ICgpID0+IHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGQtZmxleC1yb3ctcmV2ZXJzZSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBpZD1cIm1vZGFsLWNsb3NlXCI+Y2xvc2U8L3NwYW4+XG4gICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIG1lLWF1dG9cIj5BZGQgUHJvamVjdDwvaDU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgPGZvcm0gaWQ9XCJhZGQtcHJvamVjdC1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGRQcm9qZWN0XCIgbmFtZT1cInByb2plY3QtdGl0bGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIFByb2plY3RcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkUHJvamVjdFwiPkNyZWF0ZSBQcm9qZWN0PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlXCI+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmBcbiAgfSxcbiAgZWRpdFRhc2s6IChvYmopID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5IH0gPSBvYmo7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmxvYXQtZW5kXCIgaWQ9XCJtb2RhbC1jbG9zZVwiPmNsb3NlPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIiBpZD1cImVkaXQtdGFza1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+dGFzazwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cInRhc2stdGl0bGVcIlxuICAgICAgICAgICAgICBuYW1lPVwidGFzay10aXRsZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGl0bGV9XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay10aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRhc2stZGVzY1wiXG4gICAgICAgICAgICAgIGlkPVwidGFzay1kZXNjXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweFwiXG4gICAgICAgICAgICA+JHtkZXNjfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kZXNjXCI+VGFzayBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIke2R1ZX1cIlxuICAgICAgICAgICAgICBuYW1lPVwidGFzay1kdWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRhdGVcIlxuICAgICAgICAgICAgICBpZD1cInRhc2stZHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kdWVcIj5EdWUgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIGlkPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiBwbGFjZWhvbGRlcj1cInByaW9yaXR5XCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gaWQ9XCJoaWdoXCIgdmFsdWU9XCIxXCIgJHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9PT0gMSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfT5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gaWQ9XCJtb2RlcmF0ZVwiIHZhbHVlPVwiMlwiICR7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPT09IDIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH0+TW9kZXJhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiBpZD1cImxvd1wiIHZhbHVlPVwiM1wiICR7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPT09IDMgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH0+TG93PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5IG9mIHRoZSB0YXNrPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgfSxcbiAgc2hvd1Rhc2s6IChvYmopID0+IHtcbiAgICBsZXQgeyB0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSB9ID0gb2JqO1xuICAgIHByaW9yaXR5ID0gcHJpb3JpdHlMaXN0W3ByaW9yaXR5XTtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjYXJkIGJvcmRlci0ke3ByaW9yaXR5fSBtYi0zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDE4cmVtO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgaWQ9XCJtb2RhbC1jbG9zZVwiPmNsb3NlPC9zcGFuPiA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRleHQtJHtwcmlvcml0eX1cIj5cbiAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke3RpdGxlfTwvaDU+XG4gICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiR7ZGVzY308L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIHRleHQtbXV0ZWRcIj5cbiAgICA8c3Ryb25nPkR1ZSBieSA8L3N0cm9uZz4gJHtkdWV9XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBnZXQoZWxlKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlQnlOYW1lKG5hbWUpIHtcbiAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke25hbWV9XCJdYCk7XG4gIHJldHVybiBlbGUudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsYXNzQWRkKGVsZSwgLi4uY2xzKSB7XG4gIGZvciAoY29uc3QgY2wgb2YgY2xzKSB7XG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoY2wpO1xuICB9XG59XG5cbmNsYXNzIFRhc2tIVE1MIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBkdWUsIGluZGV4KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0KFwiZGl2XCIpO1xuICAgIGNsYXNzQWRkKGNvbnRhaW5lciwgXCJ0YXNrXCIsIFwiYWxlcnRcIiwgYGFsZXJ0LSR7cHJpb3JpdHlMaXN0W3ByaW9yaXR5XX1gKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGdldChcInNwYW5cIik7XG4gICAgY2xhc3NBZGQodGl0bGVEaXYsIFwidGl0bGVcIik7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IHV0aWxEaXYgPSBnZXQoXCJzcGFuXCIpO1xuICAgIGNsYXNzQWRkKHV0aWxEaXYsIFwidGFzay11dGlsc1wiKTtcbiAgICBjb25zdCBkdWVkaXYgPSBnZXQoXCJzcGFuXCIpO1xuICAgIGNsYXNzQWRkKGR1ZWRpdiwgXCJkdWVcIik7XG4gICAgZHVlZGl2LnRleHRDb250ZW50ID0gZHVlLnRvRGF0ZVN0cmluZygpO1xuXG4gICAgY29uc3QgZGVsID0gZ2V0KFwiaVwiKTtcbiAgICBjbGFzc0FkZChkZWwsIFwiZGVsXCIsIFwibWF0ZXJpYWwtaWNvbnNcIiwgXCJteC0yXCIpO1xuICAgIGRlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcbiAgICBkZWwudGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgY29uc3QgZWRpdCA9IGdldChcInNwYW5cIik7XG4gICAgY2xhc3NBZGQoZWRpdCwgXCJlZGl0XCIsIFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG5cbiAgICB1dGlsRGl2LmFwcGVuZChkdWVkaXYsIGRlbCwgZWRpdCk7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZURpdiwgdXRpbERpdik7XG5cbiAgICB0aGlzLmdldEhUTUwgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayh0YXNrTGlzdCkge1xuICBjb25zdCBjb250YWluZXIgPSBnZXQoXCJkaXZcIik7XG4gIGNsYXNzQWRkKGNvbnRhaW5lciwgXCJ0YXNrc1wiKTtcblxuICB0YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza09iamVjdCA9IHRhc2suZ2V0KCk7XG4gICAgY29uc3QgdGFza0h0bWwgPSBuZXcgVGFza0hUTUwoXG4gICAgICB0YXNrT2JqZWN0LnRpdGxlLFxuICAgICAgdGFza09iamVjdC5wcmlvcml0eSxcbiAgICAgIHRhc2tPYmplY3QuZHVlLFxuICAgICAgdGFza0xpc3QuaW5kZXhPZih0YXNrKVxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0YXNrSHRtbC5nZXRIVE1MKCkpO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBtb2RhbE9wZW4odGl0bGUsIHB1cnBvc2UsIHRhc2spIHtcbiAgY29uc3QgbW9kYWwgPSBnZXQoXCJkaXZcIik7XG4gIGNsYXNzQWRkKG1vZGFsLCBcIm15TW9kYWxcIik7XG4gIHN3aXRjaCAocHVycG9zZSkge1xuICAgIGNhc2UgXCJlZGl0VGFza1wiOlxuICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxCb2RpZXNbcHVycG9zZV0oe1xuICAgICAgICB0aXRsZTogdGFzay50aXRsZSxcbiAgICAgICAgZGVzYzogdGFzay5kZXNjLFxuICAgICAgICBkdWU6IHRhc2suZHVlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJcIikuc2xpY2UoMCwgMTApLmpvaW4oXCJcIiksXG4gICAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYWRkVGFza1wiOlxuICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxCb2RpZXNbcHVycG9zZV0oeyB0aXRsZSB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzaG93VGFza1wiOlxuICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxCb2RpZXNbcHVycG9zZV0oe1xuICAgICAgICB0aXRsZTogdGFzay50aXRsZSxcbiAgICAgICAgZGVzYzogdGFzay5kZXNjLFxuICAgICAgICBkdWU6IHRhc2suZHVlLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG1vZGFsLmlubmVySFRNTCA9IG1vZGFsQm9kaWVzW3B1cnBvc2VdKCk7XG4gICAgICBicmVhaztcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG59XG5cbmZ1bmN0aW9uIG1vZGFsQ2xvc2UoKSB7XG4gIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXlNb2RhbFwiKTtcbiAgbW9kYWxzLmZvckVhY2goKG1vZGFsKSA9PiAobW9kYWwub3V0ZXJIVE1MID0gXCJcIikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgY2xhc3NBZGQsXG4gIG1vZGFsT3BlbixcbiAgbW9kYWxDbG9zZSxcbiAgcmVuZGVyVGFzayxcbiAgZ2V0VmFsdWVCeU5hbWUsXG59O1xuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4uL3Rhc2tcIjtcblxuZnVuY3Rpb24gdG9Mb2NhbFN0b3JhZ2UoZGF0YUxpc3QsIGRhdGFUeXBlKSB7XG4gIGNvbnN0IHJlcyA9IHt9O1xuICByZXNbZGF0YVR5cGVdID0gZGF0YUxpc3QubWFwKChkYXRhKSA9PiBkYXRhLmdldCgpKTtcbiAgaWYgKGRhdGFUeXBlID09PSBcInRhc2tzXCIpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gIGVsc2UgaWYgKGRhdGFUeXBlID09PSBcInByb2plY3RzXCIpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvTG9jYWxTdG9yYWdlKHRhc2spIHtcbiAgY29uc3QgbG9jYWxUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgbG9jYWxUYXNrLnRhc2tzLnB1c2godGFzay5nZXQoKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUYXNrKSk7XG59XG5cbmZ1bmN0aW9uIGRlbFRhc2tGcm9tTG9jYWxTdG9yYWdlKGluZGV4KSB7XG4gIGNvbnN0IGxvY2FsVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gIGxvY2FsVGFzay50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsVGFzaykpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza0Zyb21Mb2NhbFN0b3JhZ2UodGFzaywgaW5kZXgpIHtcbiAgY29uc3QgbG9jYWxUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgbG9jYWxUYXNrLnRhc2tzW2luZGV4XSA9IHRhc2suZ2V0KCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUYXNrKSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tKc29uVG9PYmooanNvblRhc2spIHtcbiAgcmV0dXJuIGpzb25UYXNrLm1hcCgodGFzaykgPT4ge1xuICAgIHJldHVybiBuZXcgVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIG5ldyBEYXRlKHRhc2suZHVlKSwgdGFzay5wcmlvcml0eSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0VGFza3NCeSh0YXNrTGlzdCwgc29ydEJ5LCBvcmRlcikge1xuICBjb25zdCByZXMgPSBbLi4udGFza0xpc3RdO1xuICByZXMuc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG4gICAgY29uc3QgW2EsIGJdID0gW3Rhc2sxLmdldCgpW3NvcnRCeV0sIHRhc2syLmdldCgpW3NvcnRCeV1dO1xuICAgIGlmIChvcmRlcikge1xuICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPCBiID8gMSA6IC0xO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCB7XG4gIHRvTG9jYWxTdG9yYWdlLFxuICBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UsXG4gIHRhc2tKc29uVG9PYmosXG4gIGRlbFRhc2tGcm9tTG9jYWxTdG9yYWdlLFxuICBlZGl0VGFza0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIHNvcnRUYXNrc0J5LFxufTtcbiIsImltcG9ydCBET00gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IHsgaXNUaGlzTW9udGgsIGlzVGhpc1dlZWssIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZnVuY3Rpb24gbm9UYXNrcygpIHtcbiAgY29uc3QgcmVzID0gRE9NLmdldChcImRpdlwiKTtcbiAgcmVzLmlubmVySFRNTCA9XG4gICAgJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1wcmltYXJ5XCIgcm9sZT1cImFsZXJ0XCI+IE5vIFRhc2tzISA8L2Rpdj4nO1xuICByZXR1cm4gcmVzO1xufVxuXG5jb25zdCBCYW5uZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ID0gRE9NLmdldChcImRpdlwiKTtcbiAgY29udC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudC1oZWFkXCIpO1xuICBjb25zdCBsYWJlbCA9IERPTS5nZXQoXCJzcGFuXCIpO1xuICBET00uY2xhc3NBZGQobGFiZWwsIFwiYmFkZ2VcIiwgXCJ0ZXh0LWJnLWluZm9cIik7XG4gIGNvbnN0IGgxID0gRE9NLmdldChcImgxXCIpO1xuICBET00uY2xhc3NBZGQoaDEsIFwidGl0bGVcIik7XG5cbiAgY29uc3Qgc29ydCA9IERPTS5nZXQoXCJkaXZcIik7XG4gIERPTS5jbGFzc0FkZChzb3J0LCBcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcImctMlwiKTtcbiAgc29ydC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIj5cbiAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0XCIgbmFtZT1cInNvcnQtYnlcIiBpZD1cInNvcnQtYnlcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPlNlbGVjdDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImR1ZVwiPkR1ZSBkYXRlPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIDxsYWJlbCBmb3I9XCJzb3J0LWJ5XCI+U29ydCBieTwvbGFiZWw+XG48L2Rpdj5gO1xuICBjb25zdCBvcmRlciA9IERPTS5nZXQoXCJidXR0b25cIik7XG4gIG9yZGVyLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiT3JkZXIgQnlcIilcbiAgRE9NLmNsYXNzQWRkKG9yZGVyLCBcImJ0blwiLCBcImJ0bi1saWdodFwiLCBcIm14LTJcIiwgXCJvcmRlci1ieVwiKTtcbiAgb3JkZXIuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgZmlsdGVyX2xpc3RcbiAgPC9zcGFuPlxuICBgO1xuICBzb3J0LmFwcGVuZChvcmRlcik7XG4gIGNvbnN0IGxlZnRQYXJ0ID0gRE9NLmdldChcImRpdlwiKTtcbiAgRE9NLmNsYXNzQWRkKGxlZnRQYXJ0LCBcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQ6ICh0aXRsZSwgY291bnQpID0+IHtcbiAgICAgIGgxLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvdW50O1xuICAgICAgbGVmdFBhcnQuYXBwZW5kKGgxLCBsYWJlbCk7XG4gICAgICBjb250LmFwcGVuZChsZWZ0UGFydCwgc29ydCk7XG4gICAgICByZXR1cm4gY29udDtcbiAgICB9LFxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gcmVuZGVySG9tZSh0YXNrTGlzdCkge1xuICBjb25zdCBjb250YWluZXIgPSBET00uZ2V0KFwiZGl2XCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgQmFubmVyLmdldChcIkhvbWVcIiwgdGFza0xpc3QubGVuZ3RoKSxcbiAgICBET00ucmVuZGVyVGFzayh0YXNrTGlzdClcbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kYXkodGFza0xpc3QpIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmIChpc1RvZGF5KHRhc2suZ2V0KCkuZHVlKSkge1xuICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IERPTS5nZXQoXCJkaXZcIik7XG5cbiAgbGV0IGNvbnRlbnQgPSBub1Rhc2tzKCk7XG4gIGlmICh0YXNrcy5sZW5ndGggIT0gMCkge1xuICAgIGNvbnRlbnQgPSBET00ucmVuZGVyVGFzayh0YXNrcyk7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZChCYW5uZXIuZ2V0KFwiVG9kYXkncyB0YXNrc1wiLCB0YXNrcy5sZW5ndGgpLCBjb250ZW50KTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTW9udGgodGFza0xpc3QpIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmIChpc1RoaXNNb250aCh0YXNrLmdldCgpLmR1ZSkpIHtcbiAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250YWluZXIgPSBET00uZ2V0KFwiZGl2XCIpO1xuXG4gIGxldCBjb250ZW50ID0gbm9UYXNrcygpO1xuICBpZiAodGFza3MubGVuZ3RoICE9IDApIHtcbiAgICBjb250ZW50ID0gRE9NLnJlbmRlclRhc2sodGFza3MpO1xuICB9XG5cbiAgY29udGFpbmVyLmFwcGVuZChCYW5uZXIuZ2V0KFwiVGhpcyBtb250aCdzIHRhc2tzXCIsIHRhc2tzLmxlbmd0aCksIGNvbnRlbnQpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJXZWVrKHRhc2tMaXN0KSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAoaXNUaGlzV2Vlayh0YXNrLmdldCgpLmR1ZSkpIHtcbiAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250YWluZXIgPSBET00uZ2V0KFwiZGl2XCIpO1xuXG4gIGxldCBjb250ZW50ID0gbm9UYXNrcygpO1xuICBpZiAodGFza3MubGVuZ3RoICE9IDApIHtcbiAgICBjb250ZW50ID0gRE9NLnJlbmRlclRhc2sodGFza3MpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmQoQmFubmVyLmdldChcIlRoaXMgV2VlaydzIHRhc2tzXCIsIHRhc2tzLmxlbmd0aCksIGNvbnRlbnQpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IHJlbmRlckhvbWUsIHJlbmRlclRvZGF5LCByZW5kZXJNb250aCwgcmVuZGVyV2VlaywgQmFubmVyIH07XG4iLCJpbXBvcnQgRE9NIGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gcHJvamVjdEl0ZW0odGl0bGUpIHtcbiAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIml0ZW0taWNvbiBtYXRlcmlhbC1pY29uc1wiPiBjaGVja2xpc3QgPC9zcGFuPjxzcGFuPiR7dGl0bGV9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIobGlzdCkge1xuICBjb25zdCBwcm9TaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICBwcm9TaWRlLmlubmVySFRNTCA9IFwiXCI7IFxuICBsaXN0LmZvckVhY2goKHBybykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IERPTS5nZXQoXCJkaXZcIik7XG4gICAgRE9NLmNsYXNzQWRkKGRpdiwgXCJpdGVtXCIsIFwicHJvamVjdC1pdGVtXCIpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBwcm9qZWN0SXRlbShwcm8udGl0bGUpO1xuICAgIHByb1NpZGUuYXBwZW5kKGRpdilcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBjb250YWluZXIgPSBET00uZ2V0KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrcyA9IHByb2plY3Quc2hvd0FsbFRvZG9zKCk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gT2JqZWN0LnZhbHVlcyh0YXNrcyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgaG9tZS5CYW5uZXIuZ2V0KFwiVGFza3NcIiwgdGFza0xpc3QubGVuZ3RoKSxcbiAgICBET00ucmVuZGVyVGFzayh0YXNrTGlzdClcbiAgKTtcbiAgXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyU2lkZWJhcixcbiAgcmVuZGVyUHJvamVjdFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgbm90ZSA9IG51bGwsIGxhc3RFZGl0KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLmNyZWF0ZWRPbiA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMubGFzdEVkaXQgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGVkaXRUaXRsZSh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5sYXN0RWRpdCA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIGVkaXROb3RlKG5vdGUpe1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLmxhc3RFZGl0ID0gbmV3IERhdGUoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtjb21wYXJlQXNjLCBjb21wYXJlRGVzYyB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgY29uc3QgX3RvZG9zID0ge307XG5cbiAgICAgICAgdGhpcy5hZGRUb2RvID0gZnVuY3Rpb24odG9kbyl7XG4gICAgICAgICAgICBfdG9kb3NbYCR7dG9kby5nZXQoKS50aXRsZX1gXT0gdG9kbztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd0FsbFRvZG9zID0gZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgcmV0dXJuIF90b2RvcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsVG9kbyA9IGZ1bmN0aW9uKHRvZG8pe1xuICAgICAgICAgICAgZGVsZXRlIF90b2Rvc1t0b2RvXTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIG9yZGVyIGlzIHRydWUgPT4gQXNjZW5kaW5nIG9yZGVyIGVsc2UgPT4gRGVzY2VuZGluZyBvcmRlclxuICAgICAgICB0aGlzLnNvcnRCeVByaW9yaXR5ID0gZnVuY3Rpb24ob3JkZXIpeyBcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICBpZihvcmRlcil7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmtleXMoX3RvZG9zKS5zb3J0KChhLGIpPT5fdG9kb3NbYV0ucHJpb3JpdHkgLSBfdG9kb3NbYl0ucHJpb3JpdHkpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPYmplY3Qua2V5cyhfdG9kb3MpLnNvcnQoKGEsYik9Pl90b2Rvc1tiXS5wcmlvcml0eSAtIF90b2Rvc1thXS5wcmlvcml0eSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3J0QnlEdWVEYXRlID0gZnVuY3Rpb24ob3JkZXIpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgIGlmKG9yZGVyKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPYmplY3Qua2V5cyhfdG9kb3MpLnNvcnQoKGEsYikgPT4gY29tcGFyZUFzYyhfdG9kb3NbYV0uZHVlLCBfdG9kb3NbYl0uZHVlKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPYmplY3Qua2V5cyhfdG9kb3MpLnNvcnQoKGEsYikgPT4gY29tcGFyZURlc2MoX3RvZG9zW2FdLmR1ZSwgX3RvZG9zW2JdLmR1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmVkaXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgX3RpdGxlID0gdGl0bGU7XG4gICAgfTtcbiAgICB0aGlzLmVkaXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChkZXNjKSB7XG4gICAgICBfZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIH07XG4gICAgdGhpcy5lZGl0RHVlRGF0ZSA9IGZ1bmN0aW9uIChkdWUpIHtcbiAgICAgIF9kdWVEYXRlID0gZHVlO1xuICAgIH07XG4gICAgdGhpcy5lZGl0UHJpb3JpdHkgPSBmdW5jdGlvbiAocHJpbykge1xuICAgICAgX3ByaW9yaXR5ID0gcHJpbztcbiAgICB9O1xuICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IF90aXRsZSxcbiAgICAgICAgZGVzYzogX2Rlc2NyaXB0aW9uLFxuICAgICAgICBkdWU6IF9kdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogX3ByaW9yaXR5LFxuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL25vdGVzXCI7XG5pbXBvcnQgRE9NIGZyb20gXCIuL0RPTVwiO1xuXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcbmltcG9ydCAqIGFzIGZvcm1hdHRlciBmcm9tIFwiLi9tb2R1bGVzL2Zvcm1hdHRlclwiO1xuaW1wb3J0IHByb2plY3RQYWdlIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFBhZ2VcIjtcblxuaW1wb3J0IHRhc2tzSlNPTiBmcm9tIFwiLi4vdGFza3MuanNvblwiO1xuaW1wb3J0IG5vdGVzIGZyb20gXCIuLi9ub3Rlcy5qc29uXCI7XG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5sZXQgZGVsZXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsXCIpO1xubGV0IGVkaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpO1xubGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xubGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1cIik7XG5sZXQgc29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydC1ieVwiKTtcbmxldCBvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JkZXItYnlcIik7XG5sZXQgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9kYWwtY2xvc2VcIik7XG5cbmxldCBvcmRlckRvd24gPSB0cnVlO1xubGV0IHNvcnRCeSA9IFwiMFwiO1xuXG5mdW5jdGlvbiByZW5kZXJDb250YWluZXIoY29udGVudCkge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcbiAgZGVsZXRlRXZlbnQoKTtcbiAgZWRpdEV2ZW50KCk7XG4gIHNob3dUYXNrRXZlbnQoKTtcbiAgc29ydEV2ZW50KCk7XG4gIG9yZGVyRXZlbnQoKTtcbiAgcHJvamVjdHNFdmVudCgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVFdmVudCgpIHtcbiAgZGVsZXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsXCIpO1xuICBkZWxldGVzLmZvckVhY2goKGRlbCkgPT4ge1xuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBpbmRleCA9IGRlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuICAgICAgZGVsZXRlVGFzayhpbmRleCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0RXZlbnQoKSB7XG4gIGVkaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpO1xuICBlZGl0cy5mb3JFYWNoKChlZGl0KSA9PiB7XG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBpbmRleCA9IGVkaXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcbiAgICAgIGVkaXRUYXNrKHRhc2tMaXN0W2luZGV4XSwgaW5kZXgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tFdmVudCgpIHtcbiAgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgc2hvd1Rhc2sodGFzay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRFdmVudCgpIHtcbiAgc29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydC1ieVwiKTtcbiAgc29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBzb3J0QnkgPSBzb3J0LnZhbHVlO1xuICAgIHNvcnRUYXNrcyhzb3J0LnZhbHVlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyRXZlbnQoKSB7XG4gIG9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlci1ieVwiKTtcbiAgb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcmRlclRhc2tzKG9yZGVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRXZlbnQoKSB7XG4gIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vZGFsLWNsb3NlXCIpO1xuICBtb2RhbENsb3NlLmZvckVhY2goKG1vZGFsKSA9PlxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBET00ubW9kYWxDbG9zZSgpO1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RzRXZlbnQoKSB7XG4gIHRyeSB7XG4gICAgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaXRlbVwiKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG4gICAgICAgIHJlbmRlckNvbnRhaW5lcihwcm9qZWN0UGFnZS5yZW5kZXJQcm9qZWN0KHByb2plY3RzTGlzdC5maW5kKHBybz0+cHJvLnRpdGxlID09PSBwcm9qZWN0VGl0bGUpKSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChleCkge31cbn1cblxuY29uc3QgcHJpbUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmltYXJ5LWl0ZW1zXCIpO1xucHJpbUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN3aXRjaCAoaXRlbS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgcmVuZGVyQ29udGFpbmVyKGhvbWUucmVuZGVySG9tZSh0YXNrTGlzdCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUb2RheVwiOlxuICAgICAgICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJUb2RheSh0YXNrTGlzdCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUaGlzIE1vbnRoXCI6XG4gICAgICAgIHJlbmRlckNvbnRhaW5lcihob21lLnJlbmRlck1vbnRoKHRhc2tMaXN0KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlRoaXMgV2Vla1wiOlxuICAgICAgICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJXZWVrKHRhc2tMaXN0KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVuZGVyQ29udGFpbmVyKGhvbWUucmVuZGVySG9tZSh0YXNrTGlzdCkpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpKTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICBkYXRhW1widGFzay10aXRsZVwiXSxcbiAgICAgIGRhdGFbXCJ0YXNrLWRlc2NcIl0sXG4gICAgICBuZXcgRGF0ZShkYXRhW1wiZHVlRGF0ZVwiXSksXG4gICAgICBkYXRhW1wicHJpb3JpdHlcIl1cbiAgICApO1xuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgZm9ybWF0dGVyLmFkZFRhc2tUb0xvY2FsU3RvcmFnZSh0YXNrKTtcbiAgICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJIb21lKHRhc2tMaXN0KSk7XG4gICAgRE9NLm1vZGFsQ2xvc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtZm9ybVwiKTtcbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkpO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKG5ldyBQcm9qZWN0KGRhdGFbXCJwcm9qZWN0LXRpdGxlXCJdKSk7XG4gICAgRE9NLm1vZGFsQ2xvc2UoKTtcbiAgICBwcm9qZWN0UGFnZS5yZW5kZXJTaWRlYmFyKHByb2plY3RzTGlzdCk7XG4gICAgcHJvamVjdHNFdmVudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tGb3JtKHRhc2ssIGluZGV4KSB7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2tcIik7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpKTtcbiAgICB0YXNrLmVkaXRUaXRsZShkYXRhW1widGFzay10aXRsZVwiXSk7XG4gICAgdGFzay5lZGl0RGVzY3JpcHRpb24oZGF0YVtcInRhc2stZGVzY1wiXSk7XG4gICAgdGFzay5lZGl0RHVlRGF0ZShuZXcgRGF0ZShkYXRhW1widGFzay1kdWVcIl0pKTtcbiAgICB0YXNrLmVkaXRQcmlvcml0eShkYXRhW1wicHJpb3JpdHlcIl0pO1xuICAgIHJlbmRlckNvbnRhaW5lcihob21lLnJlbmRlckhvbWUodGFza0xpc3QpKTtcbiAgICBmb3JtYXR0ZXIuZWRpdFRhc2tGcm9tTG9jYWxTdG9yYWdlKHRhc2ssIGluZGV4KTtcbiAgICBET00ubW9kYWxDbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICBmb3JtYXR0ZXIuZGVsVGFza0Zyb21Mb2NhbFN0b3JhZ2UoaW5kZXgpO1xuICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJIb21lKHRhc2tMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIGluZGV4KSB7XG4gIERPTS5tb2RhbE9wZW4odGFzay5nZXQoKS50aXRsZSwgXCJlZGl0VGFza1wiLCB0YXNrLmdldCgpKTtcbiAgY2xvc2VFdmVudCgpO1xuICBlZGl0VGFza0Zvcm0odGFzaywgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBzaG93VGFzayhpbmRleCkge1xuICBET00ubW9kYWxPcGVuKHRhc2tMaXN0W2luZGV4XS5nZXQoKS50aXRsZSwgXCJzaG93VGFza1wiLCB0YXNrTGlzdFtpbmRleF0uZ2V0KCkpO1xuICBjbG9zZUV2ZW50KCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRUYXNrcyhzb3J0QnkpIHtcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgRE9NLnJlbmRlclRhc2soZm9ybWF0dGVyLnNvcnRUYXNrc0J5KHRhc2tMaXN0LCBzb3J0QnksIG9yZGVyRG93bikpXG4gICk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyVGFza3Mob3JkZXIpIHtcbiAgaWYgKG9yZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm9yZGVyLWRvd25cIikpIHtcbiAgICBvcmRlckRvd24gPSB0cnVlO1xuICAgIG9yZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmRlci1kb3duXCIpO1xuICB9IGVsc2Uge1xuICAgIG9yZGVyRG93biA9IGZhbHNlO1xuICAgIG9yZGVyLmNsYXNzTGlzdC5hZGQoXCJvcmRlci1kb3duXCIpO1xuICB9XG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza3NDb250YWluZXIuYXBwZW5kKFxuICAgIERPTS5yZW5kZXJUYXNrKGZvcm1hdHRlci5zb3J0VGFza3NCeSh0YXNrTGlzdCwgc29ydEJ5LCBvcmRlckRvd24pKVxuICApO1xufVxuXG5sZXQgdGFza0xpc3QgPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB7XG4gIGNvbnN0IGxvY2FsVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gIHRhc2tMaXN0LnB1c2goLi4ubG9jYWxUYXNrLnRhc2tzKTtcbiAgdGFza0xpc3QgPSBmb3JtYXR0ZXIudGFza0pzb25Ub09iaih0YXNrTGlzdCk7XG59IGVsc2Uge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXNrc0pTT04pIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICB0YXNrc0pTT05ba2V5XS50aXRsZSxcbiAgICAgIHRhc2tzSlNPTltrZXldLmRlc2MsXG4gICAgICBuZXcgRGF0ZSh0YXNrc0pTT05ba2V5XS5kdWUpLFxuICAgICAgdGFza3NKU09OW2tleV0ucHJpb3JpdHlcbiAgICApO1xuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIH1cbiAgZm9ybWF0dGVyLnRvTG9jYWxTdG9yYWdlKHRhc2tMaXN0LCBcInRhc2tzXCIpO1xufVxuLy8gdGFza0xpc3QucHVzaChcbi8vICAgbmV3IFRhc2soXCJUb2RheSBpcyB0ZXN0aW5nIHRhc2tcIiwgXCJUZXN0aW5nIHRoZSB0YXNrcyBsaXN0XCIsIG5ldyBEYXRlKCksIDMpXG4vLyApO1xuXG5sZXQgcHJvamVjdHNMaXN0ID0gW107XG5jb25zdCB0ZXN0ID0gbmV3IFByb2plY3QoXCJUZXN0MVwiKVxudGVzdC5hZGRUb2RvKG5ldyBUYXNrKFwicDFcIiwgXCJ1aGVmaCB1ZXNmaCB1IGVyZnVzIFwiLCBuZXcgRGF0ZSgpLCAxKSk7XG5wcm9qZWN0c0xpc3QucHVzaCh0ZXN0KTtcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRhc2tcIik7XG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIERPTS5tb2RhbE9wZW4oXCJBZGQgVGFza1wiLCBcImFkZFRhc2tcIik7XG4gIGNsb3NlRXZlbnQoKTtcbiAgYWRkVGFza0Zvcm0oKTtcbn0pO1xuXG5yZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJIb21lKHRhc2tMaXN0KSk7XG5wcm9qZWN0UGFnZS5yZW5kZXJTaWRlYmFyKHByb2plY3RzTGlzdCk7XG5wcm9qZWN0c0V2ZW50KCk7XG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBET00ubW9kYWxPcGVuKFwiQWRkIFByb2plY3RcIiwgXCJhZGRQcm9qZWN0XCIpO1xuICBjbG9zZUV2ZW50KCk7XG4gIGFkZFByb2plY3RGb3JtKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==