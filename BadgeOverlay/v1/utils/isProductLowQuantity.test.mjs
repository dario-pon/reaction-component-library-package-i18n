import _typeof from "@babel/runtime/helpers/esm/typeof";
import isProductLowQuantity from "./isProductLowQuantity";
var isLowQuantity = {
  isLowQuantity: true,
  isSoldOut: false
};
var isNotLowQuantity = {
  isLowQuantity: false,
  isSoldOut: false
};
test("isProductLowQuantity should return false", function () {
  var callFunction = isProductLowQuantity(isNotLowQuantity);
  expect(_typeof(isProductLowQuantity)).toBe("function");
  expect(callFunction).toEqual(false);
});
test("isProductLowQuantity should return true", function () {
  var callFunction = isProductLowQuantity(isLowQuantity);
  expect(_typeof(isProductLowQuantity)).toBe("function");
  expect(callFunction).toEqual(true);
});