"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preventAccidentalDoubleClick;

var _lodash = _interopRequireDefault(require("lodash.debounce"));

// For most OS, it seems 600ms is the slowest you can set to be a "double click"
var DEBOUNCE_MS = 600;
/**
 * @summary Wraps a function to prevent accidental double-clicks from executing it too often.
 * @param {Function} func - The onClick function to return, debounced
 * @returns {undefined}
 */

function preventAccidentalDoubleClick(func) {
  return (0, _lodash.default)(func, DEBOUNCE_MS, {
    leading: true,
    trailing: false
  });
}