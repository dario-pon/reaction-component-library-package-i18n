"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var IconLockSvg = _styledComponents.default.svg.withConfig({
  displayName: "iconLock__IconLockSvg",
  componentId: "sc-1aaqkzz-0"
})(["vertical-align:baseline;"]);

var IconLock = _react.default.createElement(IconLockSvg, {
  viewBox: "0 0 24 24"
}, _react.default.createElement("path", {
  fill: "currentColor" // eslint-disable-next-line
  ,
  d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
}));

var _default = IconLock;
exports.default = _default;