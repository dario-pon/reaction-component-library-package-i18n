"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var Title = _styledComponents.default.h3.withConfig({
  displayName: "ShippingAddressCheckoutAction__Title",
  componentId: "sc-10bmvip-0"
})(["", ";"], (0, _utils.addTypographyStyles)("ShippingAddressCheckoutActionTitle", "subheadingTextBold"));

var Address = _styledComponents.default.address.withConfig({
  displayName: "ShippingAddressCheckoutAction__Address",
  componentId: "sc-10bmvip-1"
})(["", ";"], (0, _utils.addTypographyStyles)("ShippingAddressCheckoutActionAddress", "bodyText"));

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
  (0, _inherits2.default)(ShippingAddressCheckoutAction, _Component);

  function ShippingAddressCheckoutAction() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ShippingAddressCheckoutAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ShippingAddressCheckoutAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  (0, _createClass2.default)(ShippingAddressCheckoutAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.inReview) this.ready();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevValidationResults = _ref.addressValidationResults;
      var addressValidationResults = this.props.addressValidationResults;

      if (!(0, _lodash.default)(prevValidationResults, addressValidationResults) && this.hasValidationResults) {
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
      return _react.default.createElement(AddressCapture, (0, _extends2.default)({
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
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Title, null, stepNumber, ". ", label), alert ? _react.default.createElement(InlineAlert, alert) : "", this.renderAddressCapture());
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
      return _react.default.createElement(Address, null, shippingAddress.fullName, _react.default.createElement("br", null), shippingAddress.address1, _react.default.createElement("br", null), shippingAddress.address2 !== null && shippingAddress.address2 !== "" ? _react.default.createElement("span", null, shippingAddress.address2, " ", _react.default.createElement("br", null)) : null, shippingAddress.city, ", ", shippingAddress.region, " ", shippingAddress.postal, " ", _react.default.createElement("br", null), shippingAddress.country);
    }
  }]);
  return ShippingAddressCheckoutAction;
}(_react.Component);

ShippingAddressCheckoutAction.propTypes = {
  /**
   * Address validation results object
   */
  addressValidationResults: _propTypes.default.object,

  /**
   * Alert object provides alert into to InlineAlert.
   */
  alert: _utils.CustomPropTypes.alert,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction AddressCapture component or your own component that
     * accepts compatible props.
     */
    AddressCapture: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction InlineAlert component or your own component that
     * accepts compatible props.
     */
    InlineAlert: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Checkout data needed for form
   */
  fulfillmentGroup: _propTypes.default.shape({
    data: _propTypes.default.shape({
      shippingAddress: _utils.CustomPropTypes.address
    })
  }),

  /**
   * Is the shipping address being saved
   */
  isSaving: _propTypes.default.bool,

  /**
   * Label of workflow step
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Address validation function.
   */
  onAddressValidation: _propTypes.default.func,

  /**
   * When action is ready for save call this prop method to
   * enable the save button with in the `CheckoutActions`
   */
  onReadyForSaveChange: _propTypes.default.func,

  /**
   * When an action form passes validation and submits
   * the value will be passed to this callback
   * this function needs to return a Promise
   * if being used with reacto-form
   */
  onSubmit: _propTypes.default.func,

  /**
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number.isRequired
};
ShippingAddressCheckoutAction.defaultProps = {
  isSaving: false,
  onReadyForSaveChange: function onReadyForSaveChange() {}
};

var _default = (0, _componentsContext.withComponents)(ShippingAddressCheckoutAction);

exports.default = _default;