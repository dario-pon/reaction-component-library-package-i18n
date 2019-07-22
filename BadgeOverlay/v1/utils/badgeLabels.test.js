"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _badgeLabels = _interopRequireDefault(require("./badgeLabels"));

var BADGE_LABELS_VALUES = {
  BACKORDER: "Backorder",
  BESTSELLER: "Best Seller",
  LOW_QUANTITY: "Low Inventory",
  SOLD_OUT: "Sold Out",
  SALE: "Sale"
};
test("badge label values", function () {
  expect((0, _typeof2.default)(_badgeLabels.default)).toBe("object");
  expect(_badgeLabels.default).toEqual(BADGE_LABELS_VALUES);
});