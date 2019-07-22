"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _badgeStatus = _interopRequireDefault(require("./badgeStatus"));

var _badgeTypes = _interopRequireDefault(require("./badgeTypes"));

var _badgeLabels = _interopRequireDefault(require("./badgeLabels"));

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
var isOnSale = {
  isOnSale: true
};
var isBestseller = {
  isBestseller: true
};
test("badgeStatus util should return `backorder` status", function () {
  var callFunction = (0, _badgeStatus.default)(backorderProduct, _badgeLabels.default);
  expect((0, _typeof2.default)(_badgeStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _badgeTypes.default.BACKORDER,
    label: "Backorder"
  });
});
test("badgeStatus util should return `sold out` status", function () {
  var callFunction = (0, _badgeStatus.default)(soldOutProduct, _badgeLabels.default);
  expect((0, _typeof2.default)(_badgeStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _badgeTypes.default.SOLD_OUT,
    label: "Sold Out"
  });
});
test("badgeStatus util should return `low inventory` status", function () {
  var callFunction = (0, _badgeStatus.default)(isLowQuantity, _badgeLabels.default);
  expect((0, _typeof2.default)(_badgeStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _badgeTypes.default.LOW_QUANTITY,
    label: "Low Inventory"
  });
});
test("badgeStatus util should return `on sale` status", function () {
  var callFunction = (0, _badgeStatus.default)(isOnSale, _badgeLabels.default);
  expect((0, _typeof2.default)(_badgeStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _badgeTypes.default.SALE,
    label: "Sale"
  });
});
test("badgeStatus util should return `bestseller` status", function () {
  var callFunction = (0, _badgeStatus.default)(isBestseller, _badgeLabels.default);
  expect((0, _typeof2.default)(_badgeStatus.default)).toBe("function");
  expect(callFunction).toEqual({
    type: _badgeTypes.default.BESTSELLER,
    label: "Best Seller"
  });
});