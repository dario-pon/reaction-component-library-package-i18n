import _typeof from "@babel/runtime/helpers/esm/typeof";
import badgeStatus from "./badgeStatus";
import BADGE_TYPES from "./badgeTypes";
import BADGE_LABELS from "./badgeLabels";
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
  var callFunction = badgeStatus(backorderProduct, BADGE_LABELS);
  expect(_typeof(badgeStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: BADGE_TYPES.BACKORDER,
    label: "Backorder"
  });
});
test("badgeStatus util should return `sold out` status", function () {
  var callFunction = badgeStatus(soldOutProduct, BADGE_LABELS);
  expect(_typeof(badgeStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: BADGE_TYPES.SOLD_OUT,
    label: "Sold Out"
  });
});
test("badgeStatus util should return `low inventory` status", function () {
  var callFunction = badgeStatus(isLowQuantity, BADGE_LABELS);
  expect(_typeof(badgeStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: BADGE_TYPES.LOW_QUANTITY,
    label: "Low Inventory"
  });
});
test("badgeStatus util should return `on sale` status", function () {
  var callFunction = badgeStatus(isOnSale, BADGE_LABELS);
  expect(_typeof(badgeStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: BADGE_TYPES.SALE,
    label: "Sale"
  });
});
test("badgeStatus util should return `bestseller` status", function () {
  var callFunction = badgeStatus(isBestseller, BADGE_LABELS);
  expect(_typeof(badgeStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: BADGE_TYPES.BESTSELLER,
    label: "Best Seller"
  });
});