"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addressToString;

/**
 *
 * @method addressToString
 * @summary Converts an `address` object to a string
 * @param {Object} address - Address object to be converted
 * @param {Object} [options] - Options that affect the resulting string
 * @param {Boolean} [options.includeFullName] - If true, the string will begin with address.fullName.
 * @return {String} - address as a flat string
 */
function addressToString(_ref) {
  var address1 = _ref.address1,
      address2 = _ref.address2,
      city = _ref.city,
      country = _ref.country,
      fullName = _ref.fullName,
      postal = _ref.postal,
      region = _ref.region;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var result = "".concat(address1).concat(address2 ? ", ".concat(address2) : "", ", ").concat(city, ", ").concat(region, " ").concat(postal, " ").concat(country);

  if (options.includeFullName && fullName) {
    return "".concat(fullName, ", ").concat(result);
  }

  return result;
}