import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import get from "lodash.get";
import { css } from "styled-components";
import defaultComponentTheme from "../theme/defaultComponentTheme";
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

export default function addTypographyStyles(componentName, textType) {
  if (validTextTypes.indexOf(textType) === -1) {
    throw new Error("Error in addTypographyStyles. Expected textType argument to be one of ".concat(validTextTypes, ". Got ").concat(textType));
  }

  return function (props) {
    var typographyStylesFromTheme = get(props, "theme.rui_typography.".concat(textType)) || {};
    var typographyStylesPerComponentFromTheme = get(props, "theme.rui_components.".concat(componentName, ".typography")) || {};
    var defaultTypographyStyles = get(defaultComponentTheme, "rui_typography.".concat(textType)) || {};
    var defaultTypographyStylesPerComponent = get(defaultComponentTheme, "rui_components.".concat(componentName, ".typography")) || {}; // Combine from all theme levels into a single set of style variables

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
    return css(["-webkit-font-smoothing:antialiased;color:", ";font-family:", ";font-size:", ";font-style:", ";font-stretch:normal;font-weight:", ";letter-spacing:", ";line-height:", ";"], color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight);
  };
}