import _extends from "@babel/runtime/helpers/esm/extends";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEqual from "lodash.isequal";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, CustomPropTypes } from "../../utils";
var Title = styled.h3.withConfig({
  displayName: "ShippingAddressCheckoutAction__Title",
  componentId: "sc-10bmvip-0"
})(["", ";"], addTypographyStyles("ShippingAddressCheckoutActionTitle", "subheadingTextBold"));
var Address = styled.address.withConfig({
  displayName: "ShippingAddressCheckoutAction__Address",
  componentId: "sc-10bmvip-1"
})(["", ";"], addTypographyStyles("ShippingAddressCheckoutActionAddress", "bodyText"));
var ENTRY = "entry";
var EDIT = "edit";
var REVIEW = "review";
var FORM_ERRORS = [{
  message: "",
  name: "country"
}, {
  message: "",
  name: "fullName"
}, {
  message: "",
  name: "address1"
}, {
  message: "",
  name: "city"
}, {
  message: "",
  name: "region"
}, {
  message: "",
  name: "postal"
}];

var ShippingAddressCheckoutAction =
/*#__PURE__*/
function (_Component) {
  _inherits(ShippingAddressCheckoutAction, _Component);

  function ShippingAddressCheckoutAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShippingAddressCheckoutAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShippingAddressCheckoutAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      status: !_this.hasShippingAddressOnCart && _this.hasValidationResults ? REVIEW : ENTRY,
      formErrors: _this.hasValidationResults ? FORM_ERRORS : []
    };
    _this._form = null;

    _this.isFormFilled = function (values) {
      return Object.keys(values).every(function (key) {
        return key === "address2" || key === "company" ? true : values[key] !== null;
      });
    };

    _this.submit = function () {
      _this._form.submit();
    };

    _this.ready = function () {
      var onReadyForSaveChange = _this.props.onReadyForSaveChange;
      onReadyForSaveChange(true);
    };

    _this.handleChange = function (values) {
      var formErrors = _this.state.formErrors;
      if (formErrors.length) _this.setFormErrors = [];
      if (_this.isFormFilled(values)) _this.ready();
    };

    return _this;
  }

  _createClass(ShippingAddressCheckoutAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.inReview) this.ready();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevValidationResults = _ref.addressValidationResults;
      var addressValidationResults = this.props.addressValidationResults;

      if (!isEqual(prevValidationResults, addressValidationResults) && this.hasValidationResults) {
        this.setFormErrors = FORM_ERRORS;
        this.toggleStatus = EDIT;
      }
    }
  }, {
    key: "renderAddressCapture",
    value: function renderAddressCapture() {
      var _this2 = this;

      var _this$props = this.props,
          addressValidationResults = _this$props.addressValidationResults,
          AddressCapture = _this$props.components.AddressCapture,
          isSaving = _this$props.isSaving,
          onSubmit = _this$props.onSubmit,
          onAddressValidation = _this$props.onAddressValidation;
      var formErrors = this.state.formErrors;
      var captureProps = {
        addressFormProps: {
          onChange: this.handleChange,
          shouldShowIsCommercialField: true,
          value: this.inEdit ? this.getSubmittedAddress : this.getShippingAddress,
          errors: formErrors
        },
        addressReviewProps: {
          addressEntered: this.getSubmittedAddress,
          addressSuggestion: this.hasValidationResults ? addressValidationResults.suggestedAddresses[0] : null,
          validationError: this.hasValidationResults ? addressValidationResults.validationErrors[0] : null
        },
        isSaving: isSaving,
        onAddressValidation: onAddressValidation,
        onSubmit: onSubmit
      };
      return React.createElement(AddressCapture, _extends({
        ref: function ref(formEl) {
          _this2._form = formEl;
        }
      }, captureProps));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          alert = _this$props2.alert,
          InlineAlert = _this$props2.components.InlineAlert,
          label = _this$props2.label,
          stepNumber = _this$props2.stepNumber;
      return React.createElement(Fragment, null, React.createElement(Title, null, stepNumber, ". ", label), alert ? React.createElement(InlineAlert, alert) : "", this.renderAddressCapture());
    }
  }, {
    key: "hasShippingAddressOnCart",
    get: function get() {
      var fulfillmentGroup = this.props.fulfillmentGroup;
      return !!(fulfillmentGroup && fulfillmentGroup.data.shippingAddress);
    }
  }, {
    key: "hasValidationResults",
    get: function get() {
      var addressValidationResults = this.props.addressValidationResults;
      return !!(addressValidationResults && addressValidationResults.validationErrors.length);
    }
  }, {
    key: "getSubmittedAddress",
    get: function get() {
      if (!this.hasValidationResults) return null;
      var submittedAddress = this.props.addressValidationResults.submittedAddress;
      return submittedAddress;
    }
  }, {
    key: "getShippingAddress",
    get: function get() {
      if (!this.hasShippingAddressOnCart) return null;
      var shippingAddress = this.props.fulfillmentGroup.data.shippingAddress;
      return shippingAddress;
    }
  }, {
    key: "inEntry",
    get: function get() {
      var status = this.state.status;
      return status === ENTRY;
    }
  }, {
    key: "inEdit",
    get: function get() {
      var status = this.state.status;
      return status === EDIT;
    }
  }, {
    key: "inReview",
    get: function get() {
      var status = this.state.status;
      return status === REVIEW;
    }
  }, {
    key: "toggleStatus",
    set: function set(status) {
      this.setState({
        status: status
      });
    }
  }, {
    key: "setFormErrors",
    set: function set(formErrors) {
      this.setState({
        formErrors: formErrors
      });
    }
  }], [{
    key: "renderComplete",
    value: function renderComplete(_ref2) {
      var shippingAddress = _ref2.fulfillmentGroup.data.shippingAddress;
      return React.createElement(Address, null, shippingAddress.fullName, React.createElement("br", null), shippingAddress.address1, React.createElement("br", null), shippingAddress.address2 !== null && shippingAddress.address2 !== "" ? React.createElement("span", null, shippingAddress.address2, " ", React.createElement("br", null)) : null, shippingAddress.city, ", ", shippingAddress.region, " ", shippingAddress.postal, " ", React.createElement("br", null), shippingAddress.country);
    }
  }]);

  return ShippingAddressCheckoutAction;
}(Component);

ShippingAddressCheckoutAction.propTypes = {
  /**
   * Address validation results object
   */
  addressValidationResults: PropTypes.object,

  /**
   * Alert object provides alert into to InlineAlert.
   */
  alert: CustomPropTypes.alert,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction AddressCapture component or your own component that
     * accepts compatible props.
     */
    AddressCapture: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction InlineAlert component or your own component that
     * accepts compatible props.
     */
    InlineAlert: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Checkout data needed for form
   */
  fulfillmentGroup: PropTypes.shape({
    data: PropTypes.shape({
      shippingAddress: CustomPropTypes.address
    })
  }),

  /**
   * Is the shipping address being saved
   */
  isSaving: PropTypes.bool,

  /**
   * Label of workflow step
   */
  label: PropTypes.string.isRequired,

  /**
   * Address validation function.
   */
  onAddressValidation: PropTypes.func,

  /**
   * When action is ready for save call this prop method to
   * enable the save button with in the `CheckoutActions`
   */
  onReadyForSaveChange: PropTypes.func,

  /**
   * When an action form passes validation and submits
   * the value will be passed to this callback
   * this function needs to return a Promise
   * if being used with reacto-form
   */
  onSubmit: PropTypes.func,

  /**
   * Checkout process step number
   */
  stepNumber: PropTypes.number.isRequired
};
ShippingAddressCheckoutAction.defaultProps = {
  isSaving: false,
  onReadyForSaveChange: function onReadyForSaveChange() {}
};
export default withComponents(ShippingAddressCheckoutAction);