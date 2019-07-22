"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIs = require("react-is");

/**
 * @class PropTypeError
 * @summary We use an Error-like object for backward compatibility as people may call
 *   PropTypes directly and inspect their output. However, we don't use real
 *   Errors anymore. We don't inspect their stack anyway, and creating them
 *   is prohibitively expensive if they are created too often, such as what
 *   happens in oneOfType() for any type before the one that matched.
 * @param {String} message The error message
 */
function PropTypeError(message) {
  this.message = message;
  this.stack = "";
} // Make `instanceof Error` still work for returned errors.


PropTypeError.prototype = Error.prototype; // These follow the composable form specification
// http://forms.dairystatedesigns.com/user/input/#selection-inputs

var optionsSyntax = _propTypes.default.arrayOf(_propTypes.default.shape({
  id: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]).isRequired
}));
/**
 * @summary Get a prop type validator for all valid "components" (element types)
 *   See https://github.com/facebook/prop-types/issues/200.
 *   If that gets added to prop-types package, we won't need this.
 * @returns {Function} Validator
 */


function getComponentValidator() {
  /**
   * @summary Prop type validator
   * @param {Boolean} isRequired Is the prop required?
   * @param {Object} props The full props object
   * @param {String} propName The name of the prop to validate
   * @param {String} componentName The name of the component
   * @param {String} location The location of the component
   * @param {String} propFullName The full name of the prop being validated
   * @returns {PropTypeError|null} PropTypeError instance if invalid
   */
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var val = props[propName];

    if (val === null || val === undefined) {
      if (isRequired) {
        if (val === null) {
          return new PropTypeError("The ".concat(location, " '").concat(propFullName, "' is marked as required in '").concat(componentName, "', but its value is 'null'."));
        }

        return new PropTypeError("The ".concat(location, " '").concat(propFullName, "' is marked as required in '").concat(componentName, "', but its value is 'undefined'."));
      }
    } else if (!(0, _reactIs.isValidElementType)(val)) {
      return new PropTypeError("Invalid ".concat(location, " '").concat(propFullName, "' supplied to ").concat(componentName, ". ") + "Expected a string (for built-in components) or a class/function (for composite components).");
    }

    return null;
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // address prop type


var addressSyntax = _propTypes.default.shape({
  /**
   * Address ID (not all addresses will have an ID)
   */
  _id: _propTypes.default.string,

  /**
   * Name identifier for address (example: "Mom's House", "Work")
   */
  addressName: _propTypes.default.string,

  /**
   * Street information for address
   */
  address1: _propTypes.default.string,

  /**
   * Additional street information for address
   */
  address2: _propTypes.default.string,

  /**
   * Country code for address
   */
  country: _propTypes.default.string,

  /**
   * City information for address
   */
  city: _propTypes.default.string,

  /**
   * User's name
   */
  fullName: _propTypes.default.string,

  /**
   * Is this address a commercial property
   */
  isCommercial: _propTypes.default.bool,

  /**
   * Postal code information for address
   */
  postal: _propTypes.default.string,

  /**
   * Region information for address
   */
  region: _propTypes.default.string,

  /**
   * User's associated phone number
   */
  phone: _propTypes.default.string
}); // address book prop type


var addressBookSyntax = _propTypes.default.arrayOf(addressSyntax); // alert prop type


var alertSyntax = _propTypes.default.shape({
  /**
   * The type of alert: Error, Information, Success or Warning
   */
  alertType: _propTypes.default.oneOf(["error", "information", "success", "warning"]),

  /**
   * isAutoClosing: Closes automatically in 10 seconds
   */
  isAutoClosing: _propTypes.default.bool,

  /**
   * isClosed: Whether the alert is closed or open
   */
  isClosed: _propTypes.default.bool,

  /**
   * isDismissable: Display a Close/Dismiss button
   */
  isDismissable: _propTypes.default.bool,

  /**
   * Alert message
   */
  message: _propTypes.default.string,

  /**
   * Alert title, optional
   */
  title: _propTypes.default.string
});

var _default = {
  address: addressSyntax,
  addressBook: addressBookSyntax,
  alert: alertSyntax,
  component: getComponentValidator(),
  options: _propTypes.default.oneOfType([optionsSyntax, _propTypes.default.arrayOf(_propTypes.default.shape({
    optgroup: _propTypes.default.string,
    options: optionsSyntax
  }))])
};
exports.default = _default;