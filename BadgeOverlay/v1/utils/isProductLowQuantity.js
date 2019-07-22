"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isProductLowQuantity;

/**
 * Determines if a product has low inventory.
 *
 * @param {Object} product - The product
 * @returns {Boolean} - Indicates whether the product has low inventory
 */
function isProductLowQuantity(product) {
  return product.isLowQuantity && !product.isSoldOut;
}