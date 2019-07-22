"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var IconExpandSVG = _styledComponents.default.svg.withConfig({
  displayName: "iconExpand__IconExpandSVG",
  componentId: "sc-6r8egr-0"
})(["path{fill:inherit;}"]);

var IconExpand = _react.default.createElement(IconExpandSVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14"
}, _react.default.createElement("path", {
  d: "M9.68 5.004l0.82 0.82-3.5 3.5-3.5-3.5 0.82-0.82 2.68 2.68z"
}));

var _default = IconExpand;
exports.default = _default;