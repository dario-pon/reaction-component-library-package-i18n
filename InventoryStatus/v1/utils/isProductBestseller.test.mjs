import _typeof from "@babel/runtime/helpers/esm/typeof";
import isProductBestseller from "./isProductBestseller";
var isBestseller = {
  isBestseller: true
};
var isNotBestseller = {
  isBestseller: false
};
test("isProductBestseller should return false", function () {
  var callFunction = isProductBestseller(isNotBestseller);
  expect(_typeof(isProductBestseller)).toBe("function");
  expect(callFunction).toEqual(false);
});
test("isProductBestseller should return true", function () {
  var callFunction = isProductBestseller(isBestseller);
  expect(_typeof(isProductBestseller)).toBe("function");
  expect(callFunction).toEqual(true);
});