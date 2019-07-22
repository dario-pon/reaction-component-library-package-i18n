import _typeof from "@babel/runtime/helpers/esm/typeof";
import BADGE_LABELS from "./badgeLabels";
var BADGE_LABELS_VALUES = {
  BACKORDER: "Backorder",
  BESTSELLER: "Best Seller",
  LOW_QUANTITY: "Low Inventory",
  SOLD_OUT: "Sold Out",
  SALE: "Sale"
};
test("badge label values", function () {
  expect(_typeof(BADGE_LABELS)).toBe("object");
  expect(BADGE_LABELS).toEqual(BADGE_LABELS_VALUES);
});