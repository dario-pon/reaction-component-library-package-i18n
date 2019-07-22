import "core-js/modules/es6.array.find";

/**
 * Determines the pricing a product given a currency code.
 *
 * @param {String} currencyCode - the shop's set currency code, i.e. "USD"
 * @param {Array} pricing - An array of pricing objects with different currencies.
 * @returns {Object} - pricing object, or null if none found.
 */
export default function priceByCurrencyCode(currencyCode, pricing) {
  var _pricing = pricing.find(function (price) {
    return price.currency.code === currencyCode;
  });

  return _pricing || null;
}