"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _statusLabels = _interopRequireDefault(require("./statusLabels"));

var STATUS_LABELS_VALUES = {
  BACKORDER: "Backordered - ships when available",
  LOW_QUANTITY: "Low Inventory",
  SOLD_OUT: "Out of stock"
};
test("badge label values", function () {
  expect((0, _typeof2.default)(_statusLabels.default)).toBe("object");
  expect(_statusLabels.default).toEqual(STATUS_LABELS_VALUES);
});