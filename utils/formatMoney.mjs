import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import accounting from "accounting-js";
import currencyDefinitions from "./currencyDefinitions";
/**
 * A wrapper around accounting.formatMoney that handles minor differences between Reaction
 * API and accounting.js API.
 * @param {Number} price - A price (float)
 * @param {String} [currencyCode] A currency code, case insensitive. Defaults to "USD".
 * @returns {String} Formatted currency string such as "$15.99". If a matching currency is not provided,
 *   returns `accounting.toFixed(price, 2)`.
 */

export default function formatMoney(price) {
  var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "USD";
  var currencyInfo = currencyDefinitions[currencyCode.toUpperCase()]; // Implementation of toFixed() that treats floats more like decimal values than binary,
  // fixing inconsistent precision rounding in JavaScript (where some .05 values round up,
  // while others round down):

  if (!currencyInfo) return accounting.toFixed(price, 2); // If there are no decimal places, in the case of the Japanese Yen, we adjust it here.

  var priceToFormat = price;

  if (currencyInfo.scale === 0) {
    priceToFormat = price * 100;
  }

  var currencyFormatSettings = _objectSpread({}, currencyInfo); // Precision is mis-used in accounting js. Scale is the proper term for number
  // of decimal places. Let's adjust it here so accounting.js does not break.


  if (typeof currencyInfo.scale === "number") {
    currencyFormatSettings.precision = currencyInfo.scale;
  }

  return accounting.formatMoney(priceToFormat, currencyFormatSettings);
}