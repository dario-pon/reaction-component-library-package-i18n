"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _statusTypes = _interopRequireDefault(require("./statusTypes"));

var STATUS_TYPES_VALUES = {
  BACKORDER: "BACKORDER",
  LOW_QUANTITY: "LOW_QUANTITY",
  SOLD_OUT: "SOLD_OUT"
};
test("badge types values", function () {
  expect((0, _typeof2.default)(_statusTypes.default)).toBe("object");
  expect(_statusTypes.default).toEqual(STATUS_TYPES_VALUES);
});