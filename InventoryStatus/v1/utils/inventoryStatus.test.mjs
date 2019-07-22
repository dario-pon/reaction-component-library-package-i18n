import _typeof from "@babel/runtime/helpers/esm/typeof";
import inventoryStatus from "./inventoryStatus";
import STATUS_TYPES from "./statusTypes";
import STATUS_LABELS from "./statusLabels";
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
  var callFunction = inventoryStatus(backorderProduct, STATUS_LABELS);
  expect(_typeof(inventoryStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: STATUS_TYPES.BACKORDER,
    label: "Backordered - ships when available"
  });
});
test("inventoryStatus util should return `sold out` status", function () {
  var callFunction = inventoryStatus(soldOutProduct, STATUS_LABELS);
  expect(_typeof(inventoryStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: STATUS_TYPES.SOLD_OUT,
    label: "Out of stock"
  });
});
test("inventoryStatus util should return `low inventory` status", function () {
  var callFunction = inventoryStatus(isLowQuantity, STATUS_LABELS);
  expect(_typeof(inventoryStatus)).toBe("function");
  expect(callFunction).toEqual({
    type: STATUS_TYPES.LOW_QUANTITY,
    label: "Low Inventory"
  });
});