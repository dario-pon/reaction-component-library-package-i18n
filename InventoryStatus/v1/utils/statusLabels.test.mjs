import _typeof from "@babel/runtime/helpers/esm/typeof";
import STATUS_LABELS from "./statusLabels";
var STATUS_LABELS_VALUES = {
  BACKORDER: "Backordered - ships when available",
  LOW_QUANTITY: "Low Inventory",
  SOLD_OUT: "Out of stock"
};
test("badge label values", function () {
  expect(_typeof(STATUS_LABELS)).toBe("object");
  expect(STATUS_LABELS).toEqual(STATUS_LABELS_VALUES);
});