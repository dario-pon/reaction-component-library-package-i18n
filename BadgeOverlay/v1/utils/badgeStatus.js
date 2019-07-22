"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = badgeStatus;

var _ = require("./");

/**
 * Determines a product's badge status
 *
 * @param {Object} product - The product
 * @param {Object} badgeLabels - Labels to use for badges
 * @returns {Object} - The computed product status
 */
function badgeStatus(product, badgeLabels) {
  var status;

  if (product.isSoldOut && product.isBackorder) {
    status = {
      type: _.BADGE_TYPES.BACKORDER,
      label: badgeLabels.BACKORDER
    };
  } else if (product.isSoldOut && !product.isBackorder) {
    status = {
      type: _.BADGE_TYPES.SOLD_OUT,
      label: badgeLabels.SOLD_OUT
    };
  } else if (product.isOnSale) {
    status = {
      type: _.BADGE_TYPES.SALE,
      label: badgeLabels.SALE
    };
  } else if (product.isLowQuantity && !product.isSoldOut) {
    status = {
      type: _.BADGE_TYPES.LOW_QUANTITY,
      label: badgeLabels.LOW_QUANTITY
    };
  } else if (product.isBestseller) {
    status = {
      type: _.BADGE_TYPES.BESTSELLER,
      label: badgeLabels.BESTSELLER
    };
  }

  return status;
}