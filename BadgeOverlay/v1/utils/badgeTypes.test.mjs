import _typeof from "@babel/runtime/helpers/esm/typeof";
import BADGE_TYPES from "./badgeTypes";
var BADGE_TYPES_VALUES = {
  BACKORDER: "BACKORDER",
  BESTSELLER: "BESTSELLER",
  LOW_QUANTITY: "LOW_QUANTITY",
  SOLD_OUT: "SOLD_OUT",
  SALE: "SALE"
};
test("badge types values", function () {
  expect(_typeof(BADGE_TYPES)).toBe("object");
  expect(BADGE_TYPES).toEqual(BADGE_TYPES_VALUES);
});