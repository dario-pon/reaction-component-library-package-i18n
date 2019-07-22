"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isProductBestseller;

/**
 * Determines if a product is a best seller.
 * TODO: this is a placeholder, as we don't have "Best Seller" at this moment
 * https://github.com/reactioncommerce/reaction-next-starterkit/issues/130
 *
 * @param {Object} product - The product
 * @returns {Boolean} - Indicates whether the product is a best seller
 */
function isProductBestseller(product) {
  return product.isBestseller || false;
}