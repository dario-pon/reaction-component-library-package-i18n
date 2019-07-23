import _extends from "@babel/runtime/helpers/esm/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import isEqual from "lodash.isequal";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../utils";
var ENTRY = "entry";
var EDIT = "edit";
var REVIEW = "review";

var AddressCapture =
/*#__PURE__*/
function (_Component) {
  _inherits(AddressCapture, _Component);

  function AddressCapture() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddressCapture);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddressCapture)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      status: _this.hasAddressSuggestion ? REVIEW : ENTRY
    };
    _this._form = null;

    _this.formRef = function (form) {
      _this._form = form;
    };

    _this.submit = function () {
      _this._form.submit();
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(address) {
        var _this$props, onAddressValidation, onSubmit;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, onAddressValidation = _this$props.onAddressValidation, onSubmit = _this$props.onSubmit;

                if (!(onAddressValidation && !address.isValid)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 4;
                return onAddressValidation(address);

              case 4:
                if (!(!_this.hasAddressSuggestion && !_this.hasValidationError)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return onSubmit(address);

              case 7:
                _context.next = 11;
                break;

              case 9:
                _context.next = 11;
                return onSubmit(address);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return _this;
  }

  _createClass(AddressCapture, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevAddressSuggestion = _ref2.addressReviewProps.addressSuggestion;

      if (!isEqual(prevAddressSuggestion, this.addressSuggestion) && this.hasAddressSuggestion) {
        this.toggleStatus = REVIEW;
      }
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      var _this$props2 = this.props,
          addressFormProps = _this$props2.addressFormProps,
          AddressForm = _this$props2.components.AddressForm,
          isSaving = _this$props2.isSaving;
      return React.createElement(AddressForm, _extends({}, addressFormProps, {
        ref: this.formRef,
        isSaving: isSaving,
        onSubmit: this.handleSubmit,
        value: this.inEdit ? this.addressEntered : this.addressProvided
      }));
    }
  }, {
    key: "renderReview",
    value: function renderReview() {
      var _this2 = this;

      var _this$props3 = this.props,
          addressReviewProps = _this$props3.addressReviewProps,
          _this$props3$componen = _this$props3.components,
          AddressReview = _this$props3$componen.AddressReview,
          Button = _this$props3$componen.Button,
          isSaving = _this$props3.isSaving;
      return React.createElement(Fragment, null, React.createElement(AddressReview, _extends({}, addressReviewProps, {
        ref: this.formRef,
        isSaving: isSaving,
        onSubmit: this.handleSubmit
      })), React.createElement(Button, {
        isTextOnly: true,
        onClick: function onClick() {
          _this2.toggleStatus = EDIT;
        }
      }, "Edit entered address"));
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return React.createElement("div", {
        className: className
      }, this.inReview ? this.renderReview() : this.renderForm());
    }
  }, {
    key: "hasAddressSuggestion",

    /**
     * @summary returns true if we have a suggested address from a address validation service
     * @return {Boolean} True if address suggestion on props
     */
    get: function get() {
      var addressSuggestion = this.props.addressReviewProps.addressSuggestion;
      return !!addressSuggestion;
    }
    /**
     * @summary returns true if we have any validation errors from a address validation service
     * @return {Boolean} True if validation errors on props
     */

  }, {
    key: "hasValidationError",
    get: function get() {
      var validationError = this.props.addressReviewProps.validationError;
      return !!validationError;
    }
    /**
     * @summary getter that returns the entered address
     * @return {Object} Address object
     */

  }, {
    key: "addressEntered",
    get: function get() {
      var addressEntered = this.props.addressReviewProps.addressEntered;
      return addressEntered && addressEntered;
    }
    /**
     * @summary getter that returns the suggested address
     * @return {Object} Address object
     */

  }, {
    key: "addressSuggestion",
    get: function get() {
      var addressSuggestion = this.props.addressReviewProps.addressSuggestion;
      return addressSuggestion && addressSuggestion;
    }
    /**
     * @summary getter that returns the provided address form value
     * @return {Object} Address object
     */

  }, {
    key: "addressProvided",
    get: function get() {
      var value = this.props.addressFormProps.value;
      return value && value;
    }
    /**
     * @summary getter that returns true if in entry mode
     * @return {Boolean} True if currently in entry status
     */

  }, {
    key: "inEntry",
    get: function get() {
      var status = this.state.status;
      return status === ENTRY;
    }
    /**
     * @summary getter that returns true if in edit mode
     * @return {Boolean} True if currently in edit status
     */

  }, {
    key: "inEdit",
    get: function get() {
      var status = this.state.status;
      return status === EDIT;
    }
    /**
     * @summary getter that returns true if in review mode
     * @return {Boolean} True if currently in review status
     */

  }, {
    key: "inReview",
    get: function get() {
      var status = this.state.status;
      return status === REVIEW;
    }
    /**
     * @summary setter that toggles the Component's status.
     * @param {String} status The new status
     */

  }, {
    key: "toggleStatus",
    set: function set(status) {
      this.setState({
        status: status
      });
    }
    /* eslint-disable valid-jsdoc */

    /**
     * @method formRef
     * @summary binds the active form element to the `_form` property
     * @param {Object} form React ref element
     * Can't include "return {undefined}" because react-docgen doesn't support it.
     */

    /* eslint-enable valid-jsdoc */

  }]);

  return AddressCapture;
}(Component);

AddressCapture.propTypes = {
  /**
   * AddressForm component props
   */
  addressFormProps: PropTypes.shape({
    /**
     * Place holder for Address Name field.
     */
    addressNamePlaceholder: PropTypes.string,

    /**
     * Errors array
     */
    errors: PropTypes.arrayOf(PropTypes.shape({
      /**
       * Error message
       */
      message: PropTypes.string.isRequired,

      /**
       * Error name
       */
      name: PropTypes.string.isRequired
    })),

    /**
     * OnChange event callback
     */
    onChange: PropTypes.func,

    /**
     * Should the AddressForm show the "Address Names" field.
     */
    shouldShowAddressNameField: PropTypes.bool,

    /**
     * Should the AddressForm show the "Is Commercial Address" field.
     */
    shouldShowIsCommercialField: PropTypes.bool,

    /**
     * Address object to be edited
     */
    value: CustomPropTypes.address
  }),

  /**
   * AddressReview component props
   */
  addressReviewProps: PropTypes.shape({
    /**
     * Address entered
     */
    addressEntered: CustomPropTypes.address,

    /**
     * Address validations address suggestion
     */
    addressSuggestion: CustomPropTypes.address,

    /**
     * Address validation error object
     */
    validationError: PropTypes.object,

    /**
     * The selected address option
     */
    value: PropTypes.string
  }),

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
     * Pass either the Reaction AddressForm component or your own component that is
     * compatible with the AddressForm spec.
     */
    AddressForm: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction AddressReview component or your own component that is
     * compatible with AddressReview spec.
     */
    AddressReview: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Is data being saved
   */
  isSaving: PropTypes.bool,

  /**
   * Form name
   */
  name: PropTypes.string,

  /**
   * Address validation event callback.
   */
  onAddressValidation: PropTypes.func,

  /**
   * Form submit event callback
   */
  onSubmit: PropTypes.func
};
AddressCapture.defaultProps = {
  addressFormProps: {
    value: null
  },
  addressReviewProps: {
    addressEntered: null,
    addressSuggestion: null
  },
  isSaving: false
};
export default i18n.withTranslation()(withComponents(AddressCapture)); // auto-add i18n