"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _badgeTypes = _interopRequireDefault(require("./badgeTypes"));

var BADGE_TYPES_VALUES = {
  BACKORDER: "BACKORDER",
  BESTSELLER: "BESTSELLER",
  LOW_QUANTITY: "LOW_QUANTITY",
  SOLD_OUT: "SOLD_OUT",
  SALE: "SALE"
};
test("badge types values", function () {
  expect((0, _typeof2.default)(_badgeTypes.default)).toBe("object");
  expect(_badgeTypes.default).toEqual(BADGE_TYPES_VALUES);
});