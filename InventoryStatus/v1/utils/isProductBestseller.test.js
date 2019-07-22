"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _isProductBestseller = _interopRequireDefault(require("./isProductBestseller"));

var isBestseller = {
  isBestseller: true
};
var isNotBestseller = {
  isBestseller: false
};
test("isProductBestseller should return false", function () {
  var callFunction = (0, _isProductBestseller.default)(isNotBestseller);
  expect((0, _typeof2.default)(_isProductBestseller.default)).toBe("function");
  expect(callFunction).toEqual(false);
});
test("isProductBestseller should return true", function () {
  var callFunction = (0, _isProductBestseller.default)(isBestseller);
  expect((0, _typeof2.default)(_isProductBestseller.default)).toBe("function");
  expect(callFunction).toEqual(true);
});