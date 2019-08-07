import "core-js/modules/es6.number.constructor";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import isEqual from "lodash.isequal";
import { withComponents } from "@reactioncommerce/components-context";
import { addressToString, CustomPropTypes } from "../../utils";

var AddressChoice =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AddressChoice, _Component);

    function AddressChoice(props) {
      var _this;

      _classCallCheck(this, AddressChoice);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AddressChoice).call(this, props));

      _this.handleChangeAddress = function (address) {
        _this.props.onChange(address);
      };

      _this.handleChangeSelection = function (selectedOption) {
        var addresses = _this.props.addresses;

        _this.setState({
          selectedOption: selectedOption
        });

        if (selectedOption !== "OTHER" && Array.isArray(addresses)) {
          _this.props.onChange(addresses[Number(selectedOption)]);
        }
      };

      var _selectedOption = "OTHER";

      if (Array.isArray(props.addresses) && props.addresses.length > 0) {
        _selectedOption = "0";
      }

      _this.state = {
        selectedOption: _selectedOption
      };
      return _this;
    }

    _createClass(AddressChoice, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(_ref) {
        var addresses = _ref.addresses;
        var selectedOption = this.state.selectedOption;

        if (selectedOption === "0" && !isEqual(addresses[0], this.props.addresses[0])) {
          this.handleChangeSelection(selectedOption);
        }
      }
    }, {
      key: "renderSelectList",
      value: function renderSelectList() {
        var _this$props = this.props,
          addresses = _this$props.addresses,
          SelectableList = _this$props.components.SelectableList,
          isReadOnly = _this$props.isReadOnly,
          otherAddressLabel = _this$props.otherAddressLabel;
        var selectedOption = this.state.selectedOption;
        if (!Array.isArray(addresses) || addresses.length === 0) return null;
        var listOptions = addresses.map(function (address, index) {
          return {
            id: String(index),
            label: addressToString(address, {
              includeFullName: true
            }),
            value: String(index)
          };
        });
        listOptions.push({
          id: "OTHER",
          label: otherAddressLabel,
          value: "OTHER"
        });
        return React.createElement(SelectableList, {
          name: "addressList",
          isReadOnly: isReadOnly,
          onChange: this.handleChangeSelection,
          options: listOptions,
          value: selectedOption
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          className = _this$props2.className,
          AddressForm = _this$props2.components.AddressForm,
          isReadOnly = _this$props2.isReadOnly;
        var selectedOption = this.state.selectedOption;
        return React.createElement("div", {
          className: className
        }, this.renderSelectList(), selectedOption === "OTHER" && React.createElement(AddressForm, {
          isReadOnly: isReadOnly,
          onChange: this.handleChangeAddress
        }));
      }
    }]);

    return AddressChoice;
  }(Component);

AddressChoice.propTypes = {
  /**
   * A list of addresses to show for selection
   */
  addresses: CustomPropTypes.addressBook,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction AddressForm component or your own component that
     * accepts compatible props.
     */
    AddressForm: CustomPropTypes.component.isRequired,

    /**
     * A reaction SelectableList component or compatible component.
     */
    SelectableList: CustomPropTypes.component.isRequired
  }),

  /**
   * If true, choosing an address and typing in address fields is disabled
   */
  isReadOnly: PropTypes.bool,

  /**
   * Called with an address whenever the selected or entered
   * address changes. If they selected one, it will be the
   * complete address that was passed in `addresses`. If they're
   * entering one, it will be whatever they have entered so far
   * and may be partial.
   */
  onChange: PropTypes.func,

  /**
   * The label for the "Use a different address" selection item, if it
   * is shown.
   */
  otherAddressLabel: PropTypes.string
};
AddressChoice.defaultProps = {
  isReadOnly: false,
  onChange: function onChange() { },
  otherAddressLabel: "Use a different address"
};
export default i18n.withTranslation()(withComponents(AddressChoice)); // auto-add i18n