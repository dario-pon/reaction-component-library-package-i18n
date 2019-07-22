"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _inventoryStatus = _interopRequireDefault(require("./inventoryStatus"));

var _statusTypes = _interopRequireDefault(require("./statusTypes"));

var _statusLabels = _interopRequireDefault(require("./statusLabels"));

var backorderProduct = {
  isSoldOut: true,
  isBackorder: true
};
var soldOutProduct = {
  isSoldOut: true,
  isBackorder: false
};
var isLowQuantity = {
  isLowQuantity: true
};
test("inventoryStatus util should return `backorder` status", function () {
  var callFunction = (0, _inventoryStatus.default)(backorderProduct, _statusLabels.default);
  expect((0, _typeof2.default)(_inventoryStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _statusTypes.default.BACKORDER,
    label: "Backordered - ships when available"
  });
});
test("inventoryStatus util should return `sold out` status", function () {
  var callFunction = (0, _inventoryStatus.default)(soldOutProduct, _statusLabels.default);
  expect((0, _typeof2.default)(_inventoryStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _statusTypes.default.SOLD_OUT,
    label: "Out of stock"
  });
});
test("inventoryStatus util should return `low inventory` status", function () {
  var callFunction = (0, _inventoryStatus.default)(isLowQuantity, _statusLabels.default);
  expect((0, _typeof2.default)(_inventoryStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _statusTypes.default.LOW_QUANTITY,
    label: "Low Inventory"
  });
});