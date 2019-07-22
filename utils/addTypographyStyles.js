"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addTypographyStyles;

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _styledComponents = require("styled-components");

var _defaultComponentTheme = _interopRequireDefault(require("../theme/defaultComponentTheme"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var validTextTypes = ["bodyText", "bodyTextBold", "bodyTextSemiBold", "captionText", "captionTextBold", "headingText", "headingTextBold", "labelText", "labelTextBold", "subheadingText", "subheadingTextBold", "titleText", "titleTextBold"];
/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns CSS for proper typography styling
 * @param {String} componentName The component name, for finding component-specific
 *   typography style overrides in the theme
 * @param {String} textType One of `validTextTypes`, such as "bodyText"
 * @returns {Function} A function that takes `props` argument and returns
 *   CSS for proper typography styling.
 */

function addTypographyStyles(componentName, textType) {
  if (validTextTypes.indexOf(textType) === -1) {
    throw new Error("Error in addTypographyStyles. Expected textType argument to be one of ".concat(validTextTypes, ". Got ").concat(textType));
  }

  return function (props) {
    var typographyStylesFromTheme = (0, _lodash.default)(props, "theme.rui_typography.".concat(textType)) || {};
    var typographyStylesPerComponentFromTheme = (0, _lodash.default)(props, "theme.rui_components.".concat(componentName, ".typography")) || {};
    var defaultTypographyStyles = (0, _lodash.default)(_defaultComponentTheme.default, "rui_typography.".concat(textType)) || {};
    var defaultTypographyStylesPerComponent = (0, _lodash.default)(_defaultComponentTheme.default, "rui_components.".concat(componentName, ".typography")) || {}; // Combine from all theme levels into a single set of style variables

    var typographyStyles = _objectSpread({}, defaultTypographyStyles, {}, defaultTypographyStylesPerComponent, {}, typographyStylesFromTheme, {}, typographyStylesPerComponentFromTheme);

    var color = typographyStyles.color,
        fontFamily = typographyStyles.fontFamily,
        fontSize = typographyStyles.fontSize,
        fontStyle = typographyStyles.fontStyle,
        fontWeight = typographyStyles.fontWeight,
        letterSpacing = typographyStyles.letterSpacing,
        lineHeight = typographyStyles.lineHeight; // Warn if the default theme is missing any. We must always have some value.

    if (!color && color !== 0) throw new Error("Error in addTypographyStyles. Add rui_typography.".concat(textType, ".color to defaultComponentTheme"));
    if (!fontFamily && fontFamily !== 0) throw new Error("Error in addTypographyStyles. Add rui_typography.".concat(textType, ".fontFamily to defaultComponentTheme"));
    if (!fontSize && fontSize !== 0) throw new Error("Error in addTypographyStyles. Add rui_typography.".concat(textType, ".fontSize to defaultComponentTheme"));
    if (!fontStyle && fontStyle !== 0) throw new Error("Error in addTypographyStyles. Add rui_typography.".concat(textType, ".fontStyle to defaultComponentTheme"));
    if (!fontWeight && fontWeight !== 0) throw new Error("Error in addTypographyStyles. Add rui_typography.".concat(textType, ".fontWeight to defaultComponentTheme"));

    if (!letterSpacing && letterSpacing !== 0) {
      throw new Error("Error in addTypographyStyles. Add rui_typography.".concat(textType, ".letterSpacing to defaultComponentTheme"));
    }

    if (!lineHeight && lineHeight !== 0) throw new Error("Error in addTypographyStyles. Add rui_typography.".concat(textType, ".lineHeight to defaultComponentTheme"));
    return (0, _styledComponents.css)(["-webkit-font-smoothing:antialiased;color:", ";font-family:", ";font-size:", ";font-style:", ";font-stretch:normal;font-weight:", ";letter-spacing:", ";line-height:", ";"], color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight);
  };
}