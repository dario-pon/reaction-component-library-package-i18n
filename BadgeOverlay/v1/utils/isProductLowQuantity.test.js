"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _isProductLowQuantity = _interopRequireDefault(require("./isProductLowQuantity"));

var isLowQuantity = {
  isLowQuantity: true,
  isSoldOut: false
};
var isNotLowQuantity = {
  isLowQuantity: false,
  isSoldOut: false
};
test("isProductLowQuantity should return false", function () {
  var callFunction = (0, _isProductLowQuantity.default)(isNotLowQuantity);
  expect((0, _typeof2.default)(_isProductLowQuantity.default)).toBe("function");
  expect(callFunction).toEqual(false);
});
test("isProductLowQuantity should return true", function () {
  var callFunction = (0, _isProductLowQuantity.default)(isLowQuantity);
  expect((0, _typeof2.default)(_isProductLowQuantity.default)).toBe("function");
  expect(callFunction).toEqual(true);
});