import _typeof from "@babel/runtime/helpers/esm/typeof";
import STATUS_TYPES from "./statusTypes";
var STATUS_TYPES_VALUES = {
  BACKORDER: "BACKORDER",
  LOW_QUANTITY: "LOW_QUANTITY",
  SOLD_OUT: "SOLD_OUT"
};
test("badge types values", function () {
  expect(_typeof(STATUS_TYPES)).toBe("object");
  expect(STATUS_TYPES).toEqual(STATUS_TYPES_VALUES);
});