"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inventoryStatus;

var _ = require("./");

/**
 * Determines a product's badge status
 *
 * @param {Object} product - The product
 * @param {Object} statusLabels - Labels to use for badges
 * @returns {Object} - The computed product status
 */
function inventoryStatus(product, statusLabels) {
  var status;

  if (product.isSoldOut && product.isBackorder) {
    status = {
      type: _.STATUS_TYPES.BACKORDER,
      label: statusLabels.BACKORDER
    };
  } else if (product.isSoldOut && !product.isBackorder) {
    status = {
      type: _.STATUS_TYPES.SOLD_OUT,
      label: statusLabels.SOLD_OUT
    };
  } else if (product.isLowQuantity && !product.isSoldOut) {
    status = {
      type: _.STATUS_TYPES.LOW_QUANTITY,
      label: statusLabels.LOW_QUANTITY
    };
  }

  return status;
}