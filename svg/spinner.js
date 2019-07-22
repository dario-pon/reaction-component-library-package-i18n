"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SpinnerSvg = _styledComponents.default.svg.withConfig({
  displayName: "spinner__SpinnerSvg",
  componentId: "sc-77vu9-0"
})(["width:1.125em;height:1.125em;"]);

var spinner = _react.default.createElement(SpinnerSvg, {
  version: "1.1",
  x: "0px",
  y: "0px",
  width: "40px",
  height: "40px",
  viewBox: "0 0 50 50",
  style: {
    enableBackground: "new 0 0 50 50"
  }
}, _react.default.createElement("path", {
  fill: "#000",
  d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" // eslint-disable-line

}, _react.default.createElement("animateTransform", {
  attributeType: "xml",
  attributeName: "transform",
  type: "rotate",
  from: "0 25 25",
  to: "360 25 25",
  dur: "1s",
  repeatCount: "indefinite"
})));

var _default = spinner;
exports.default = _default;