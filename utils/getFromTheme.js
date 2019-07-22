"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFromTheme;

var _lodash = _interopRequireDefault(require("lodash.get"));

var _defaultComponentTheme = _interopRequireDefault(require("../theme/defaultComponentTheme"));

/**
 * @summary Get a value from the theme, falling back to the default theme,
 *   given the `props` and the object path.
 * @param {Object} props The props object, with `theme` prop present if
 *   there is a custom styled-components theme provided by context.
 * @param {String} objectPath The path within the theme object from which to get a value
 * @returns {any} The value. If a value was not found in a custom theme or
 *   the default theme, an error is thrown.
 */
function getFromTheme(props, objectPath) {
  if (!props) throw new Error("Error in getFromTheme. props argument is required");

  if (typeof objectPath !== "string" || objectPath.length === 0) {
    throw new Error("Error in getFromTheme. objectPath argument must be a non-empty string");
  }

  var value = (0, _lodash.default)(props, "theme.".concat(objectPath)) || (0, _lodash.default)(_defaultComponentTheme.default, objectPath, null);

  if (!value && value !== 0 && value !== false) {
    throw new Error("Error in getFromTheme. Add ".concat(objectPath, " to defaultComponentTheme"));
  }

  return value;
}