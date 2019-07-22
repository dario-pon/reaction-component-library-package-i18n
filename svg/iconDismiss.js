"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var IconDismissSvg = _styledComponents.default.svg.withConfig({
  displayName: "iconDismiss__IconDismissSvg",
  componentId: "qrhym9-0"
})(["height:100%;max-height:100%;vertical-align:middle;"]);

var IconDismiss = // credit: https://material.io/tools/icons/?icon=clear&style=baseline
_react.default.createElement(IconDismissSvg, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _react.default.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), _react.default.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}));

var _default = IconDismiss;
exports.default = _default;