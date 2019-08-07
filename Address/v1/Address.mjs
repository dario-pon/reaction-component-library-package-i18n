import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.string.includes";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addressToString, applyTheme, addTypographyStyles, CustomPropTypes } from "../../utils";
var AddressElement = styled.address.withConfig({
  displayName: "Address__AddressElement",
  componentId: "sc-1a2sry4-0"
})(["", ";"], addTypographyStyles("Address", "bodyText"));
var AddressPropertyError = styled.span.withConfig({
  displayName: "Address__AddressPropertyError",
  componentId: "sc-1a2sry4-1"
})(["", ";background-color:", ";border-color:", ";border-style:", ";border-width:", ";border-radius:", ";color:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], addTypographyStyles("AddressPropertyError", "bodyTextBold"), applyTheme("Address.addressPropertyErrorBackgroundColor"), applyTheme("Address.addressPropertyErrorBorderColor"), applyTheme("Address.addressPropertyErrorBorderStyle"), applyTheme("Address.addressPropertyErrorBorderWidth"), applyTheme("Address.addressPropertyErrorBorderRadius"), applyTheme("Address.addressPropertyErrorColor"), applyTheme("Address.addressPropertyErrorPaddingBottom"), applyTheme("Address.addressPropertyErrorPaddingLeft"), applyTheme("Address.addressPropertyErrorPaddingRight"), applyTheme("Address.addressPropertyErrorPaddingTop"));
var ADDRESS_ORDER = ["fullName", "address1", "address2", "city", "region", "postal", "country"];

var Address =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Address, _Component);

    function Address() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Address);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Address)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.renderAddressProperty = function (key) {
        var _this$props = _this.props,
          address = _this$props.address,
          invalidAddressProperties = _this$props.invalidAddressProperties; // Skip empty address values

        if (!address[key]) return null; // Is the address property invalid?

        var isInvalid = invalidAddressProperties.includes(key);
        var addressProp = isInvalid ? React.createElement(AddressPropertyError, null, address[key]) : address[key]; // Formating the address

        var addressElement;

        switch (key) {
          case "city":
            addressElement = React.createElement(Fragment, null, addressProp, ", ");
            break;

          case "country":
            addressElement = addressProp;
            break;
          // case "region":
          //   addressElement = <Fragment>{addressProp} </Fragment>;
          //   break;

          default:
            addressElement = React.createElement(Fragment, null, addressProp, " ", React.createElement("br", null));
        }

        return React.createElement(Fragment, {
          key: key
        }, addressElement);
      };

      return _this;
    }

    _createClass(Address, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          address = _this$props2.address,
          addressOrder = _this$props2.addressOrder,
          className = _this$props2.className,
          isFlat = _this$props2.isFlat;
        return React.createElement(AddressElement, {
          className: className
        }, isFlat ? addressToString(address) : addressOrder.map(this.renderAddressProperty));
      }
    }]);

    return Address;
  }(Component);

Address.propTypes = {
  /**
   * Address object to render
   */
  address: CustomPropTypes.address.isRequired,

  /**
   * Order of `address` properties
   */
  addressOrder: PropTypes.arrayOf(PropTypes.string),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Array of invalid address property keys
   */
  invalidAddressProperties: PropTypes.arrayOf(PropTypes.string),

  /**
   * Render the address as a flat string.
   */
  isFlat: PropTypes.bool
};
Address.defaultProps = {
  addressOrder: ADDRESS_ORDER,
  invalidAddressProperties: [],
  isFlat: false
};
export default i18n.withTranslation()(Address); // auto-add i18n