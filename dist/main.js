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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContainer": () => (/* binding */ renderContainer)
/* harmony export */ });
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
        renderContainer(
          _modules_projectPage__WEBPACK_IMPORTED_MODULE_6__["default"].renderProject(
            projectsList.find((pro) => pro.title === projectTitle)
          )
        );
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
const test = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Test1");
test.addTodo(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("p1", "uhefh uesfh u erfus ", new Date(), 1));
projectsList.push(test);
const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
  _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].modalOpen("Add Task", "addTask");
  closeEvent();
  if (addTask.getAttribute("data-pro-name")) {
    _modules_projectPage__WEBPACK_IMPORTED_MODULE_6__["default"].addTask(addTask.getAttribute("data-pro-name"), projectsList);
  } else {
    addTaskForm();
  }
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



function handleAdd() {
  const addButton = document.querySelector("#addTask");
  addButton.removeAttribute("data-pro-name");
}

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
  _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].classAdd(label, "badge", "bg-info", "text-dark");
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
  order.setAttribute("title", "Order By");
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
  handleAdd();
  container.append(
    Banner.get("Home", taskList.length),
    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderTask(taskList)
  );
  return container;
}

function renderToday(taskList) {
  handleAdd();
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
  handleAdd();
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
  handleAdd();
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/task.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/index.js");





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
  const addButton = document.querySelector("#addTask");
  addButton.setAttribute("data-pro-name", project.title);
  const container = _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].get("div");
  const tasks = project.showAllTodos();
  const taskList = Object.values(tasks);
  container.append(
    _home__WEBPACK_IMPORTED_MODULE_1__["default"].Banner.get("Tasks", taskList.length),
    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderTask(taskList)
  );
  
  return container;
}

function addTask(projectTitle, projectList) {
  const pro = projectList.find(pro=>pro.title === projectTitle);
  const taskForm = document.getElementById("task-form");
  console.log(taskForm)
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const task = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](
      data["task-title"],
      data["task-desc"],
      new Date(data["dueDate"]),
      data["priority"]
    );
    pro.addTodo(task);
    (0,___WEBPACK_IMPORTED_MODULE_3__.renderContainer)(renderProject(pro));
    _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].modalClose();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  renderSidebar,
  renderProject,
  addTask
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
    let _title = title.toLowerCase();
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVEZXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc01vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9mb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZURlc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIHJldmVyc2UgY2hyb25vbG9naWNhbGx5IGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODkgcmV2ZXJzZSBjaHJvbm9sb2dpY2FsbHk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlRGVzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlcyBpbiByZXZlcnNlIGNocm9ub2xvZ2ljYWwgb3JkZXI6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVEZXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlRGVzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTQsIDgsIDI1KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTUgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNSwgOCwgMjUpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVNb250aCBmcm9tIFwiLi4vaXNTYW1lTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc01vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDE1IFNlcHRlbWJlciAyMDE0IGluIHRoaXMgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVNb250aChEYXRlLm5vdygpLCBkaXJ0eURhdGUpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJjb25zdCBwcmlvcml0eUxpc3QgPSB7IDE6IFwiZGFuZ2VyXCIsIDI6IFwid2FybmluZ1wiLCAzOiBcInN1Y2Nlc3NcIiB9O1xuY29uc3QgbW9kYWxCb2RpZXMgPSB7XG4gIGFkZFRhc2s6IChvYmopID0+IHtcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBvYmo7XG4gICAgcmV0dXJuIGAgXG4gICAgPGRpdiBjbGFzcz1cIm15TW9kYWwtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm15TW9kYWwtaGVhZGVyIHAtM1wiPlxuICAgICAgICA8aDQgaWQ9XCJteU1vZGFsLXRpdGxlXCI+JHt0aXRsZX08L2g0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgaWQ9XCJtb2RhbC1jbG9zZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJteU1vZGFsLWJvZHkgcC0zXCI+XG4gICAgICAgIDxmb3JtIGlkPVwidGFzay1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbS0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0YXNrLXRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbS0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY1wiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0YXNrLWRlc2NcIiBpZD1cImRlc2NcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG0tMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5EdWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbS0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImZvcm0tbGFiZWwgZC1ibG9ja1wiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJpb3JpdHlcIlxuICAgICAgICAgICAgICAgIGlkPVwiaGlnaFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInByaW9yaXR5XCJcbiAgICAgICAgICAgICAgICBpZD1cIm1vZGVyYXRlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJtb2RlcmF0ZVwiPk1vZGVyYXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcmlvcml0eVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3dcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiM1wiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS0yXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfSxcbiAgYWRkUHJvamVjdDogKCkgPT4ge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgZC1mbGV4LXJvdy1yZXZlcnNlIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGlkPVwibW9kYWwtY2xvc2VcIj5jbG9zZTwvc3Bhbj5cbiAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgbWUtYXV0b1wiPkFkZCBQcm9qZWN0PC9oNT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8Zm9ybSBpZD1cImFkZC1wcm9qZWN0LWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZFByb2plY3RcIiBuYW1lPVwicHJvamVjdC10aXRsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDcmVhdGUgUHJvamVjdFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRQcm9qZWN0XCI+Q3JlYXRlIFByb2plY3Q8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGVcIj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YFxuICB9LFxuICBlZGl0VGFzazogKG9iaikgPT4ge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHkgfSA9IG9iajtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmbG9hdC1lbmRcIiBpZD1cIm1vZGFsLWNsb3NlXCI+Y2xvc2U8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiIGlkPVwiZWRpdC10YXNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj50YXNrPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwidGFzay10aXRsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0YXNrLXRpdGxlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiJHt0aXRsZX1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBuYW1lPVwidGFzay1kZXNjXCJcbiAgICAgICAgICAgICAgaWQ9XCJ0YXNrLWRlc2NcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4XCJcbiAgICAgICAgICAgID4ke2Rlc2N9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NcIj5UYXNrIERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7ZHVlfVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWR1ZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGlkPVwidGFzay1kdWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWR1ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0XCIgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHBsYWNlaG9sZGVyPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiBpZD1cImhpZ2hcIiB2YWx1ZT1cIjFcIiAke1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID09PSAxID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgICAgICAgICAgICB9PkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiBpZD1cIm1vZGVyYXRlXCIgdmFsdWU9XCIyXCIgJHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9PT0gMiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfT5Nb2RlcmF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwibG93XCIgdmFsdWU9XCIzXCIgJHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9PT0gMyA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfT5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHkgb2YgdGhlIHRhc2s8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgO1xuICB9LFxuICBzaG93VGFzazogKG9iaikgPT4ge1xuICAgIGxldCB7IHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5IH0gPSBvYmo7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eUxpc3RbcHJpb3JpdHldO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNhcmQgYm9yZGVyLSR7cHJpb3JpdHl9IG1iLTNcIiBzdHlsZT1cIm1heC13aWR0aDogMThyZW07XCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBpZD1cIm1vZGFsLWNsb3NlXCI+Y2xvc2U8L3NwYW4+IDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGV4dC0ke3ByaW9yaXR5fVwiPlxuICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7dGl0bGV9PC9oNT5cbiAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+JHtkZXNjfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZFwiPlxuICAgIDxzdHJvbmc+RHVlIGJ5IDwvc3Ryb25nPiAke2R1ZX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGdldChlbGUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVCeU5hbWUobmFtZSkge1xuICBjb25zdCBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7bmFtZX1cIl1gKTtcbiAgcmV0dXJuIGVsZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xhc3NBZGQoZWxlLCAuLi5jbHMpIHtcbiAgZm9yIChjb25zdCBjbCBvZiBjbHMpIHtcbiAgICBlbGUuY2xhc3NMaXN0LmFkZChjbCk7XG4gIH1cbn1cblxuY2xhc3MgVGFza0hUTUwge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGR1ZSwgaW5kZXgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXQoXCJkaXZcIik7XG4gICAgY2xhc3NBZGQoY29udGFpbmVyLCBcInRhc2tcIiwgXCJhbGVydFwiLCBgYWxlcnQtJHtwcmlvcml0eUxpc3RbcHJpb3JpdHldfWApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZ2V0KFwic3BhblwiKTtcbiAgICBjbGFzc0FkZCh0aXRsZURpdiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29uc3QgdXRpbERpdiA9IGdldChcInNwYW5cIik7XG4gICAgY2xhc3NBZGQodXRpbERpdiwgXCJ0YXNrLXV0aWxzXCIpO1xuICAgIGNvbnN0IGR1ZWRpdiA9IGdldChcInNwYW5cIik7XG4gICAgY2xhc3NBZGQoZHVlZGl2LCBcImR1ZVwiKTtcbiAgICBkdWVkaXYudGV4dENvbnRlbnQgPSBkdWUudG9EYXRlU3RyaW5nKCk7XG5cbiAgICBjb25zdCBkZWwgPSBnZXQoXCJpXCIpO1xuICAgIGNsYXNzQWRkKGRlbCwgXCJkZWxcIiwgXCJtYXRlcmlhbC1pY29uc1wiLCBcIm14LTJcIik7XG4gICAgZGVsLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xuICAgIGRlbC50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cbiAgICBjb25zdCBlZGl0ID0gZ2V0KFwic3BhblwiKTtcbiAgICBjbGFzc0FkZChlZGl0LCBcImVkaXRcIiwgXCJtYXRlcmlhbC1pY29uc1wiKTtcbiAgICBlZGl0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSBcImVkaXRcIjtcblxuICAgIHV0aWxEaXYuYXBwZW5kKGR1ZWRpdiwgZGVsLCBlZGl0KTtcbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlRGl2LCB1dGlsRGl2KTtcblxuICAgIHRoaXMuZ2V0SFRNTCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrKHRhc2tMaXN0KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGdldChcImRpdlwiKTtcbiAgY2xhc3NBZGQoY29udGFpbmVyLCBcInRhc2tzXCIpO1xuXG4gIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrT2JqZWN0ID0gdGFzay5nZXQoKTtcbiAgICBjb25zdCB0YXNrSHRtbCA9IG5ldyBUYXNrSFRNTChcbiAgICAgIHRhc2tPYmplY3QudGl0bGUsXG4gICAgICB0YXNrT2JqZWN0LnByaW9yaXR5LFxuICAgICAgdGFza09iamVjdC5kdWUsXG4gICAgICB0YXNrTGlzdC5pbmRleE9mKHRhc2spXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHRhc2tIdG1sLmdldEhUTUwoKSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIG1vZGFsT3Blbih0aXRsZSwgcHVycG9zZSwgdGFzaykge1xuICBjb25zdCBtb2RhbCA9IGdldChcImRpdlwiKTtcbiAgY2xhc3NBZGQobW9kYWwsIFwibXlNb2RhbFwiKTtcbiAgc3dpdGNoIChwdXJwb3NlKSB7XG4gICAgY2FzZSBcImVkaXRUYXNrXCI6XG4gICAgICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbEJvZGllc1twdXJwb3NlXSh7XG4gICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxuICAgICAgICBkZXNjOiB0YXNrLmRlc2MsXG4gICAgICAgIGR1ZTogdGFzay5kdWUudG9JU09TdHJpbmcoKS5zcGxpdChcIlwiKS5zbGljZSgwLCAxMCkuam9pbihcIlwiKSxcbiAgICAgICAgcHJpb3JpdHk6IHRhc2sucHJpb3JpdHksXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJhZGRUYXNrXCI6XG4gICAgICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbEJvZGllc1twdXJwb3NlXSh7IHRpdGxlIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNob3dUYXNrXCI6XG4gICAgICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbEJvZGllc1twdXJwb3NlXSh7XG4gICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxuICAgICAgICBkZXNjOiB0YXNrLmRlc2MsXG4gICAgICAgIGR1ZTogdGFzay5kdWUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxCb2RpZXNbcHVycG9zZV0oKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1vZGFsKTtcbn1cblxuZnVuY3Rpb24gbW9kYWxDbG9zZSgpIHtcbiAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5teU1vZGFsXCIpO1xuICBtb2RhbHMuZm9yRWFjaCgobW9kYWwpID0+IChtb2RhbC5vdXRlckhUTUwgPSBcIlwiKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBjbGFzc0FkZCxcbiAgbW9kYWxPcGVuLFxuICBtb2RhbENsb3NlLFxuICByZW5kZXJUYXNrLFxuICBnZXRWYWx1ZUJ5TmFtZSxcbn07XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgTm90ZSBmcm9tIFwiLi9ub3Rlc1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9ET01cIjtcblxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgKiBhcyBmb3JtYXR0ZXIgZnJvbSBcIi4vbW9kdWxlcy9mb3JtYXR0ZXJcIjtcbmltcG9ydCBwcm9qZWN0UGFnZSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RQYWdlXCI7XG5cbmltcG9ydCB0YXNrc0pTT04gZnJvbSBcIi4uL3Rhc2tzLmpzb25cIjtcbmltcG9ydCBub3RlcyBmcm9tIFwiLi4vbm90ZXMuanNvblwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xubGV0IGRlbGV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbFwiKTtcbmxldCBlZGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdFwiKTtcbmxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbmxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtXCIpO1xubGV0IHNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvcnQtYnlcIik7XG5sZXQgb3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yZGVyLWJ5XCIpO1xubGV0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vZGFsLWNsb3NlXCIpO1xuXG5sZXQgb3JkZXJEb3duID0gdHJ1ZTtcbmxldCBzb3J0QnkgPSBcIjBcIjtcblxuZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKGNvbnRlbnQpIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XG4gIGRlbGV0ZUV2ZW50KCk7XG4gIGVkaXRFdmVudCgpO1xuICBzaG93VGFza0V2ZW50KCk7XG4gIHNvcnRFdmVudCgpO1xuICBvcmRlckV2ZW50KCk7XG4gIHByb2plY3RzRXZlbnQoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRXZlbnQoKSB7XG4gIGRlbGV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbFwiKTtcbiAgZGVsZXRlcy5mb3JFYWNoKChkZWwpID0+IHtcbiAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgaW5kZXggPSBkZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcbiAgICAgIGRlbGV0ZVRhc2soaW5kZXgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdEV2ZW50KCkge1xuICBlZGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdFwiKTtcbiAgZWRpdHMuZm9yRWFjaCgoZWRpdCkgPT4ge1xuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgaW5kZXggPSBlZGl0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG4gICAgICBlZGl0VGFzayh0YXNrTGlzdFtpbmRleF0sIGluZGV4KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRXZlbnQoKSB7XG4gIHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNob3dUYXNrKHRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0RXZlbnQoKSB7XG4gIHNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvcnQtYnlcIik7XG4gIHNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgc29ydEJ5ID0gc29ydC52YWx1ZTtcbiAgICBzb3J0VGFza3Moc29ydC52YWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlckV2ZW50KCkge1xuICBvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JkZXItYnlcIik7XG4gIG9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3JkZXJUYXNrcyhvcmRlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUV2ZW50KCkge1xuICBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2RhbC1jbG9zZVwiKTtcbiAgbW9kYWxDbG9zZS5mb3JFYWNoKChtb2RhbCkgPT5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgRE9NLm1vZGFsQ2xvc2UoKTtcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0c0V2ZW50KCkge1xuICB0cnkge1xuICAgIHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWl0ZW1cIik7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuICAgICAgICByZW5kZXJDb250YWluZXIoXG4gICAgICAgICAgcHJvamVjdFBhZ2UucmVuZGVyUHJvamVjdChcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5maW5kKChwcm8pID0+IHByby50aXRsZSA9PT0gcHJvamVjdFRpdGxlKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChleCkge31cbn1cblxuY29uc3QgcHJpbUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmltYXJ5LWl0ZW1zXCIpO1xucHJpbUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN3aXRjaCAoaXRlbS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgcmVuZGVyQ29udGFpbmVyKGhvbWUucmVuZGVySG9tZSh0YXNrTGlzdCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUb2RheVwiOlxuICAgICAgICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJUb2RheSh0YXNrTGlzdCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUaGlzIE1vbnRoXCI6XG4gICAgICAgIHJlbmRlckNvbnRhaW5lcihob21lLnJlbmRlck1vbnRoKHRhc2tMaXN0KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlRoaXMgV2Vla1wiOlxuICAgICAgICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJXZWVrKHRhc2tMaXN0KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVuZGVyQ29udGFpbmVyKGhvbWUucmVuZGVySG9tZSh0YXNrTGlzdCkpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpKTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICBkYXRhW1widGFzay10aXRsZVwiXSxcbiAgICAgIGRhdGFbXCJ0YXNrLWRlc2NcIl0sXG4gICAgICBuZXcgRGF0ZShkYXRhW1wiZHVlRGF0ZVwiXSksXG4gICAgICBkYXRhW1wicHJpb3JpdHlcIl1cbiAgICApO1xuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgZm9ybWF0dGVyLmFkZFRhc2tUb0xvY2FsU3RvcmFnZSh0YXNrKTtcbiAgICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJIb21lKHRhc2tMaXN0KSk7XG4gICAgRE9NLm1vZGFsQ2xvc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtZm9ybVwiKTtcbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkpO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKG5ldyBQcm9qZWN0KGRhdGFbXCJwcm9qZWN0LXRpdGxlXCJdKSk7XG4gICAgRE9NLm1vZGFsQ2xvc2UoKTtcbiAgICBwcm9qZWN0UGFnZS5yZW5kZXJTaWRlYmFyKHByb2plY3RzTGlzdCk7XG4gICAgcHJvamVjdHNFdmVudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tGb3JtKHRhc2ssIGluZGV4KSB7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2tcIik7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpKTtcbiAgICB0YXNrLmVkaXRUaXRsZShkYXRhW1widGFzay10aXRsZVwiXSk7XG4gICAgdGFzay5lZGl0RGVzY3JpcHRpb24oZGF0YVtcInRhc2stZGVzY1wiXSk7XG4gICAgdGFzay5lZGl0RHVlRGF0ZShuZXcgRGF0ZShkYXRhW1widGFzay1kdWVcIl0pKTtcbiAgICB0YXNrLmVkaXRQcmlvcml0eShkYXRhW1wicHJpb3JpdHlcIl0pO1xuICAgIHJlbmRlckNvbnRhaW5lcihob21lLnJlbmRlckhvbWUodGFza0xpc3QpKTtcbiAgICBmb3JtYXR0ZXIuZWRpdFRhc2tGcm9tTG9jYWxTdG9yYWdlKHRhc2ssIGluZGV4KTtcbiAgICBET00ubW9kYWxDbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICBmb3JtYXR0ZXIuZGVsVGFza0Zyb21Mb2NhbFN0b3JhZ2UoaW5kZXgpO1xuICByZW5kZXJDb250YWluZXIoaG9tZS5yZW5kZXJIb21lKHRhc2tMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIGluZGV4KSB7XG4gIERPTS5tb2RhbE9wZW4odGFzay5nZXQoKS50aXRsZSwgXCJlZGl0VGFza1wiLCB0YXNrLmdldCgpKTtcbiAgY2xvc2VFdmVudCgpO1xuICBlZGl0VGFza0Zvcm0odGFzaywgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBzaG93VGFzayhpbmRleCkge1xuICBET00ubW9kYWxPcGVuKHRhc2tMaXN0W2luZGV4XS5nZXQoKS50aXRsZSwgXCJzaG93VGFza1wiLCB0YXNrTGlzdFtpbmRleF0uZ2V0KCkpO1xuICBjbG9zZUV2ZW50KCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRUYXNrcyhzb3J0QnkpIHtcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgRE9NLnJlbmRlclRhc2soZm9ybWF0dGVyLnNvcnRUYXNrc0J5KHRhc2tMaXN0LCBzb3J0QnksIG9yZGVyRG93bikpXG4gICk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyVGFza3Mob3JkZXIpIHtcbiAgaWYgKG9yZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm9yZGVyLWRvd25cIikpIHtcbiAgICBvcmRlckRvd24gPSB0cnVlO1xuICAgIG9yZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmRlci1kb3duXCIpO1xuICB9IGVsc2Uge1xuICAgIG9yZGVyRG93biA9IGZhbHNlO1xuICAgIG9yZGVyLmNsYXNzTGlzdC5hZGQoXCJvcmRlci1kb3duXCIpO1xuICB9XG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza3NDb250YWluZXIuYXBwZW5kKFxuICAgIERPTS5yZW5kZXJUYXNrKGZvcm1hdHRlci5zb3J0VGFza3NCeSh0YXNrTGlzdCwgc29ydEJ5LCBvcmRlckRvd24pKVxuICApO1xufVxuXG5sZXQgdGFza0xpc3QgPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB7XG4gIGNvbnN0IGxvY2FsVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gIHRhc2tMaXN0LnB1c2goLi4ubG9jYWxUYXNrLnRhc2tzKTtcbiAgdGFza0xpc3QgPSBmb3JtYXR0ZXIudGFza0pzb25Ub09iaih0YXNrTGlzdCk7XG59IGVsc2Uge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXNrc0pTT04pIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICB0YXNrc0pTT05ba2V5XS50aXRsZSxcbiAgICAgIHRhc2tzSlNPTltrZXldLmRlc2MsXG4gICAgICBuZXcgRGF0ZSh0YXNrc0pTT05ba2V5XS5kdWUpLFxuICAgICAgdGFza3NKU09OW2tleV0ucHJpb3JpdHlcbiAgICApO1xuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIH1cbiAgZm9ybWF0dGVyLnRvTG9jYWxTdG9yYWdlKHRhc2tMaXN0LCBcInRhc2tzXCIpO1xufVxuLy8gdGFza0xpc3QucHVzaChcbi8vICAgbmV3IFRhc2soXCJUb2RheSBpcyB0ZXN0aW5nIHRhc2tcIiwgXCJUZXN0aW5nIHRoZSB0YXNrcyBsaXN0XCIsIG5ldyBEYXRlKCksIDMpXG4vLyApO1xuXG5sZXQgcHJvamVjdHNMaXN0ID0gW107XG5jb25zdCB0ZXN0ID0gbmV3IFByb2plY3QoXCJUZXN0MVwiKTtcbnRlc3QuYWRkVG9kbyhuZXcgVGFzayhcInAxXCIsIFwidWhlZmggdWVzZmggdSBlcmZ1cyBcIiwgbmV3IERhdGUoKSwgMSkpO1xucHJvamVjdHNMaXN0LnB1c2godGVzdCk7XG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBET00ubW9kYWxPcGVuKFwiQWRkIFRhc2tcIiwgXCJhZGRUYXNrXCIpO1xuICBjbG9zZUV2ZW50KCk7XG4gIGlmIChhZGRUYXNrLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvLW5hbWVcIikpIHtcbiAgICBwcm9qZWN0UGFnZS5hZGRUYXNrKGFkZFRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm8tbmFtZVwiKSwgcHJvamVjdHNMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICBhZGRUYXNrRm9ybSgpO1xuICB9XG59KTtcblxucmVuZGVyQ29udGFpbmVyKGhvbWUucmVuZGVySG9tZSh0YXNrTGlzdCkpO1xucHJvamVjdFBhZ2UucmVuZGVyU2lkZWJhcihwcm9qZWN0c0xpc3QpO1xucHJvamVjdHNFdmVudCgpO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgRE9NLm1vZGFsT3BlbihcIkFkZCBQcm9qZWN0XCIsIFwiYWRkUHJvamVjdFwiKTtcbiAgY2xvc2VFdmVudCgpO1xuICBhZGRQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbmV4cG9ydCB7IHJlbmRlckNvbnRhaW5lciB9O1xuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4uL3Rhc2tcIjtcblxuZnVuY3Rpb24gdG9Mb2NhbFN0b3JhZ2UoZGF0YUxpc3QsIGRhdGFUeXBlKSB7XG4gIGNvbnN0IHJlcyA9IHt9O1xuICByZXNbZGF0YVR5cGVdID0gZGF0YUxpc3QubWFwKChkYXRhKSA9PiBkYXRhLmdldCgpKTtcbiAgaWYgKGRhdGFUeXBlID09PSBcInRhc2tzXCIpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gIGVsc2UgaWYgKGRhdGFUeXBlID09PSBcInByb2plY3RzXCIpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvTG9jYWxTdG9yYWdlKHRhc2spIHtcbiAgY29uc3QgbG9jYWxUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgbG9jYWxUYXNrLnRhc2tzLnB1c2godGFzay5nZXQoKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUYXNrKSk7XG59XG5cbmZ1bmN0aW9uIGRlbFRhc2tGcm9tTG9jYWxTdG9yYWdlKGluZGV4KSB7XG4gIGNvbnN0IGxvY2FsVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gIGxvY2FsVGFzay50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsVGFzaykpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza0Zyb21Mb2NhbFN0b3JhZ2UodGFzaywgaW5kZXgpIHtcbiAgY29uc3QgbG9jYWxUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgbG9jYWxUYXNrLnRhc2tzW2luZGV4XSA9IHRhc2suZ2V0KCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUYXNrKSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tKc29uVG9PYmooanNvblRhc2spIHtcbiAgcmV0dXJuIGpzb25UYXNrLm1hcCgodGFzaykgPT4ge1xuICAgIHJldHVybiBuZXcgVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIG5ldyBEYXRlKHRhc2suZHVlKSwgdGFzay5wcmlvcml0eSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0VGFza3NCeSh0YXNrTGlzdCwgc29ydEJ5LCBvcmRlcikge1xuICBjb25zdCByZXMgPSBbLi4udGFza0xpc3RdO1xuICByZXMuc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG4gICAgY29uc3QgW2EsIGJdID0gW3Rhc2sxLmdldCgpW3NvcnRCeV0sIHRhc2syLmdldCgpW3NvcnRCeV1dO1xuICAgIGlmIChvcmRlcikge1xuICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPCBiID8gMSA6IC0xO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCB7XG4gIHRvTG9jYWxTdG9yYWdlLFxuICBhZGRUYXNrVG9Mb2NhbFN0b3JhZ2UsXG4gIHRhc2tKc29uVG9PYmosXG4gIGRlbFRhc2tGcm9tTG9jYWxTdG9yYWdlLFxuICBlZGl0VGFza0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIHNvcnRUYXNrc0J5LFxufTtcbiIsImltcG9ydCBET00gZnJvbSBcIi4uL0RPTVwiO1xuaW1wb3J0IHsgaXNUaGlzTW9udGgsIGlzVGhpc1dlZWssIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZnVuY3Rpb24gaGFuZGxlQWRkKCkge1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRhc2tcIik7XG4gIGFkZEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXByby1uYW1lXCIpO1xufVxuXG5mdW5jdGlvbiBub1Rhc2tzKCkge1xuICBjb25zdCByZXMgPSBET00uZ2V0KFwiZGl2XCIpO1xuICByZXMuaW5uZXJIVE1MID1cbiAgICAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIiByb2xlPVwiYWxlcnRcIj4gTm8gVGFza3MhIDwvZGl2Pic7XG4gIHJldHVybiByZXM7XG59XG5cbmNvbnN0IEJhbm5lciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnQgPSBET00uZ2V0KFwiZGl2XCIpO1xuICBjb250LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50LWhlYWRcIik7XG4gIGNvbnN0IGxhYmVsID0gRE9NLmdldChcInNwYW5cIik7XG4gIERPTS5jbGFzc0FkZChsYWJlbCwgXCJiYWRnZVwiLCBcImJnLWluZm9cIiwgXCJ0ZXh0LWRhcmtcIik7XG4gIGNvbnN0IGgxID0gRE9NLmdldChcImgxXCIpO1xuICBET00uY2xhc3NBZGQoaDEsIFwidGl0bGVcIik7XG5cbiAgY29uc3Qgc29ydCA9IERPTS5nZXQoXCJkaXZcIik7XG4gIERPTS5jbGFzc0FkZChzb3J0LCBcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCBcImctMlwiKTtcbiAgc29ydC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIj5cbiAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0XCIgbmFtZT1cInNvcnQtYnlcIiBpZD1cInNvcnQtYnlcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPlNlbGVjdDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImR1ZVwiPkR1ZSBkYXRlPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIDxsYWJlbCBmb3I9XCJzb3J0LWJ5XCI+U29ydCBieTwvbGFiZWw+XG48L2Rpdj5gO1xuICBjb25zdCBvcmRlciA9IERPTS5nZXQoXCJidXR0b25cIik7XG4gIG9yZGVyLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiT3JkZXIgQnlcIik7XG4gIERPTS5jbGFzc0FkZChvcmRlciwgXCJidG5cIiwgXCJidG4tbGlnaHRcIiwgXCJteC0yXCIsIFwib3JkZXItYnlcIik7XG4gIG9yZGVyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gIGZpbHRlcl9saXN0XG4gIDwvc3Bhbj5cbiAgYDtcbiAgc29ydC5hcHBlbmQob3JkZXIpO1xuICBjb25zdCBsZWZ0UGFydCA9IERPTS5nZXQoXCJkaXZcIik7XG4gIERPTS5jbGFzc0FkZChsZWZ0UGFydCwgXCJkLWZsZXhcIiwgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIik7XG4gIHJldHVybiB7XG4gICAgZ2V0OiAodGl0bGUsIGNvdW50KSA9PiB7XG4gICAgICBoMS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICAgIGxlZnRQYXJ0LmFwcGVuZChoMSwgbGFiZWwpO1xuICAgICAgY29udC5hcHBlbmQobGVmdFBhcnQsIHNvcnQpO1xuICAgICAgcmV0dXJuIGNvbnQ7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWUodGFza0xpc3QpIHtcbiAgY29uc3QgY29udGFpbmVyID0gRE9NLmdldChcImRpdlwiKTtcbiAgaGFuZGxlQWRkKCk7XG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgQmFubmVyLmdldChcIkhvbWVcIiwgdGFza0xpc3QubGVuZ3RoKSxcbiAgICBET00ucmVuZGVyVGFzayh0YXNrTGlzdClcbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kYXkodGFza0xpc3QpIHtcbiAgaGFuZGxlQWRkKCk7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAoaXNUb2RheSh0YXNrLmdldCgpLmR1ZSkpIHtcbiAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250YWluZXIgPSBET00uZ2V0KFwiZGl2XCIpO1xuXG4gIGxldCBjb250ZW50ID0gbm9UYXNrcygpO1xuICBpZiAodGFza3MubGVuZ3RoICE9IDApIHtcbiAgICBjb250ZW50ID0gRE9NLnJlbmRlclRhc2sodGFza3MpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmQoQmFubmVyLmdldChcIlRvZGF5J3MgdGFza3NcIiwgdGFza3MubGVuZ3RoKSwgY29udGVudCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1vbnRoKHRhc2tMaXN0KSB7XG4gIGhhbmRsZUFkZCgpO1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICB0YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKGlzVGhpc01vbnRoKHRhc2suZ2V0KCkuZHVlKSkge1xuICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IERPTS5nZXQoXCJkaXZcIik7XG5cbiAgbGV0IGNvbnRlbnQgPSBub1Rhc2tzKCk7XG4gIGlmICh0YXNrcy5sZW5ndGggIT0gMCkge1xuICAgIGNvbnRlbnQgPSBET00ucmVuZGVyVGFzayh0YXNrcyk7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kKEJhbm5lci5nZXQoXCJUaGlzIG1vbnRoJ3MgdGFza3NcIiwgdGFza3MubGVuZ3RoKSwgY29udGVudCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcldlZWsodGFza0xpc3QpIHtcbiAgaGFuZGxlQWRkKCk7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAoaXNUaGlzV2Vlayh0YXNrLmdldCgpLmR1ZSkpIHtcbiAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250YWluZXIgPSBET00uZ2V0KFwiZGl2XCIpO1xuXG4gIGxldCBjb250ZW50ID0gbm9UYXNrcygpO1xuICBpZiAodGFza3MubGVuZ3RoICE9IDApIHtcbiAgICBjb250ZW50ID0gRE9NLnJlbmRlclRhc2sodGFza3MpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmQoQmFubmVyLmdldChcIlRoaXMgV2VlaydzIHRhc2tzXCIsIHRhc2tzLmxlbmd0aCksIGNvbnRlbnQpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IHJlbmRlckhvbWUsIHJlbmRlclRvZGF5LCByZW5kZXJNb250aCwgcmVuZGVyV2VlaywgQmFubmVyIH07XG4iLCJpbXBvcnQgRE9NIGZyb20gXCIuLi9ET01cIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrXCI7XG5pbXBvcnQgeyByZW5kZXJDb250YWluZXIgfSBmcm9tIFwiLi5cIjtcblxuZnVuY3Rpb24gcHJvamVjdEl0ZW0odGl0bGUpIHtcbiAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIml0ZW0taWNvbiBtYXRlcmlhbC1pY29uc1wiPiBjaGVja2xpc3QgPC9zcGFuPjxzcGFuPiR7dGl0bGV9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIobGlzdCkge1xuICBjb25zdCBwcm9TaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICBwcm9TaWRlLmlubmVySFRNTCA9IFwiXCI7IFxuICBsaXN0LmZvckVhY2goKHBybykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IERPTS5nZXQoXCJkaXZcIik7XG4gICAgRE9NLmNsYXNzQWRkKGRpdiwgXCJpdGVtXCIsIFwicHJvamVjdC1pdGVtXCIpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBwcm9qZWN0SXRlbShwcm8udGl0bGUpO1xuICAgIHByb1NpZGUuYXBwZW5kKGRpdilcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRhc2tcIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByby1uYW1lXCIsIHByb2plY3QudGl0bGUpO1xuICBjb25zdCBjb250YWluZXIgPSBET00uZ2V0KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrcyA9IHByb2plY3Quc2hvd0FsbFRvZG9zKCk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gT2JqZWN0LnZhbHVlcyh0YXNrcyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgaG9tZS5CYW5uZXIuZ2V0KFwiVGFza3NcIiwgdGFza0xpc3QubGVuZ3RoKSxcbiAgICBET00ucmVuZGVyVGFzayh0YXNrTGlzdClcbiAgKTtcbiAgXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2socHJvamVjdFRpdGxlLCBwcm9qZWN0TGlzdCkge1xuICBjb25zdCBwcm8gPSBwcm9qZWN0TGlzdC5maW5kKHBybz0+cHJvLnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xuICBjb25zb2xlLmxvZyh0YXNrRm9ybSlcbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkpO1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgIGRhdGFbXCJ0YXNrLXRpdGxlXCJdLFxuICAgICAgZGF0YVtcInRhc2stZGVzY1wiXSxcbiAgICAgIG5ldyBEYXRlKGRhdGFbXCJkdWVEYXRlXCJdKSxcbiAgICAgIGRhdGFbXCJwcmlvcml0eVwiXVxuICAgICk7XG4gICAgcHJvLmFkZFRvZG8odGFzayk7XG4gICAgcmVuZGVyQ29udGFpbmVyKHJlbmRlclByb2plY3QocHJvKSk7XG4gICAgRE9NLm1vZGFsQ2xvc2UoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyU2lkZWJhcixcbiAgcmVuZGVyUHJvamVjdCxcbiAgYWRkVGFza1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgbm90ZSA9IG51bGwsIGxhc3RFZGl0KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLmNyZWF0ZWRPbiA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMubGFzdEVkaXQgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGVkaXRUaXRsZSh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5sYXN0RWRpdCA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIGVkaXROb3RlKG5vdGUpe1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLmxhc3RFZGl0ID0gbmV3IERhdGUoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtjb21wYXJlQXNjLCBjb21wYXJlRGVzYyB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgY29uc3QgX3RvZG9zID0ge307XG5cbiAgICAgICAgdGhpcy5hZGRUb2RvID0gZnVuY3Rpb24odG9kbyl7XG4gICAgICAgICAgICBfdG9kb3NbYCR7dG9kby5nZXQoKS50aXRsZX1gXT0gdG9kbztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd0FsbFRvZG9zID0gZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgcmV0dXJuIF90b2RvcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsVG9kbyA9IGZ1bmN0aW9uKHRvZG8pe1xuICAgICAgICAgICAgZGVsZXRlIF90b2Rvc1t0b2RvXTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIG9yZGVyIGlzIHRydWUgPT4gQXNjZW5kaW5nIG9yZGVyIGVsc2UgPT4gRGVzY2VuZGluZyBvcmRlclxuICAgICAgICB0aGlzLnNvcnRCeVByaW9yaXR5ID0gZnVuY3Rpb24ob3JkZXIpeyBcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICBpZihvcmRlcil7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmtleXMoX3RvZG9zKS5zb3J0KChhLGIpPT5fdG9kb3NbYV0ucHJpb3JpdHkgLSBfdG9kb3NbYl0ucHJpb3JpdHkpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPYmplY3Qua2V5cyhfdG9kb3MpLnNvcnQoKGEsYik9Pl90b2Rvc1tiXS5wcmlvcml0eSAtIF90b2Rvc1thXS5wcmlvcml0eSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3J0QnlEdWVEYXRlID0gZnVuY3Rpb24ob3JkZXIpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgIGlmKG9yZGVyKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPYmplY3Qua2V5cyhfdG9kb3MpLnNvcnQoKGEsYikgPT4gY29tcGFyZUFzYyhfdG9kb3NbYV0uZHVlLCBfdG9kb3NbYl0uZHVlKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPYmplY3Qua2V5cyhfdG9kb3MpLnNvcnQoKGEsYikgPT4gY29tcGFyZURlc2MoX3RvZG9zW2FdLmR1ZSwgX3RvZG9zW2JdLmR1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZWRpdFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICBfdGl0bGUgPSB0aXRsZTtcbiAgICB9O1xuICAgIHRoaXMuZWRpdERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2MpIHtcbiAgICAgIF9kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgfTtcbiAgICB0aGlzLmVkaXREdWVEYXRlID0gZnVuY3Rpb24gKGR1ZSkge1xuICAgICAgX2R1ZURhdGUgPSBkdWU7XG4gICAgfTtcbiAgICB0aGlzLmVkaXRQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvKSB7XG4gICAgICBfcHJpb3JpdHkgPSBwcmlvO1xuICAgIH07XG4gICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogX3RpdGxlLFxuICAgICAgICBkZXNjOiBfZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZTogX2R1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBfcHJpb3JpdHksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=