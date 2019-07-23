"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

// auto-add i18n 
var AddressElement = _styledComponents.default.address.withConfig({
  displayName: "Address__AddressElement",
  componentId: "sc-1a2sry4-0"
})(["", ";"], (0, _utils.addTypographyStyles)("Address", "bodyText"));

var AddressPropertyError = _styledComponents.default.span.withConfig({
  displayName: "Address__AddressPropertyError",
  componentId: "sc-1a2sry4-1"
})(["", ";background-color:", ";border-color:", ";border-style:", ";border-width:", ";border-radius:", ";color:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.addTypographyStyles)("AddressPropertyError", "bodyTextBold"), (0, _utils.applyTheme)("Address.addressPropertyErrorBackgroundColor"), (0, _utils.applyTheme)("Address.addressPropertyErrorBorderColor"), (0, _utils.applyTheme)("Address.addressPropertyErrorBorderStyle"), (0, _utils.applyTheme)("Address.addressPropertyErrorBorderWidth"), (0, _utils.applyTheme)("Address.addressPropertyErrorBorderRadius"), (0, _utils.applyTheme)("Address.addressPropertyErrorColor"), (0, _utils.applyTheme)("Address.addressPropertyErrorPaddingBottom"), (0, _utils.applyTheme)("Address.addressPropertyErrorPaddingLeft"), (0, _utils.applyTheme)("Address.addressPropertyErrorPaddingRight"), (0, _utils.applyTheme)("Address.addressPropertyErrorPaddingTop"));

var ADDRESS_ORDER = ["fullName", "address1", "address2", "city", "region", "postal", "country"];

var Address =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Address, _Component);

  function Address() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Address);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Address)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderAddressProperty = function (key) {
      var _this$props = _this.props,
          address = _this$props.address,
          invalidAddressProperties = _this$props.invalidAddressProperties; // Skip empty address values

      if (!address[key]) return null; // Is the address property invalid?

      var isInvalid = invalidAddressProperties.includes(key);
      var addressProp = isInvalid ? _react.default.createElement(AddressPropertyError, null, address[key]) : address[key]; // Formating the address

      var addressElement;

      switch (key) {
        case "city":
          addressElement = _react.default.createElement(_react.Fragment, null, addressProp, ", ");
          break;

        case "country":
          addressElement = addressProp;
          break;
        // case "region":
        //   addressElement = <Fragment>{addressProp} </Fragment>;
        //   break;

        default:
          addressElement = _react.default.createElement(_react.Fragment, null, addressProp, " ", _react.default.createElement("br", null));
      }

      return _react.default.createElement(_react.Fragment, {
        key: key
      }, addressElement);
    };

    return _this;
  }

  (0, _createClass2.default)(Address, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          address = _this$props2.address,
          addressOrder = _this$props2.addressOrder,
          className = _this$props2.className,
          isFlat = _this$props2.isFlat;
      return _react.default.createElement(AddressElement, {
        className: className
      }, isFlat ? (0, _utils.addressToString)(address) : addressOrder.map(this.renderAddressProperty));
    }
  }]);
  return Address;
}(_react.Component);

Address.propTypes = {
  /**
   * Address object to render
   */
  address: _utils.CustomPropTypes.address.isRequired,

  /**
   * Order of `address` properties
   */
  addressOrder: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Array of invalid address property keys
   */
  invalidAddressProperties: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Render the address as a flat string.
   */
  isFlat: _propTypes.default.bool
};
Address.defaultProps = {
  addressOrder: ADDRESS_ORDER,
  invalidAddressProperties: [],
  isFlat: false
};

var _default = _utils.default.withTranslation()(Address); // auto-add i18n


exports.default = _default;