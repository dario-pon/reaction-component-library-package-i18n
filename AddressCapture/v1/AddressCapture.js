"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var ENTRY = "entry";
var EDIT = "edit";
var REVIEW = "review";

var AddressCapture =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AddressCapture, _Component);

  function AddressCapture() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AddressCapture);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddressCapture)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(address) {
        var _this$props, onAddressValidation, onSubmit;

        return _regenerator.default.wrap(function _callee$(_context) {
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

  (0, _createClass2.default)(AddressCapture, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevAddressSuggestion = _ref2.addressReviewProps.addressSuggestion;

      if (!(0, _lodash.default)(prevAddressSuggestion, this.addressSuggestion) && this.hasAddressSuggestion) {
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
      return _react.default.createElement(AddressForm, (0, _extends2.default)({}, addressFormProps, {
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
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(AddressReview, (0, _extends2.default)({}, addressReviewProps, {
        ref: this.formRef,
        isSaving: isSaving,
        onSubmit: this.handleSubmit
      })), _react.default.createElement(Button, {
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
      return _react.default.createElement("div", {
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
}(_react.Component);

AddressCapture.propTypes = {
  /**
   * AddressForm component props
   */
  addressFormProps: _propTypes.default.shape({
    /**
     * Place holder for Address Name field.
     */
    addressNamePlaceholder: _propTypes.default.string,

    /**
     * Errors array
     */
    errors: _propTypes.default.arrayOf(_propTypes.default.shape({
      /**
       * Error message
       */
      message: _propTypes.default.string.isRequired,

      /**
       * Error name
       */
      name: _propTypes.default.string.isRequired
    })),

    /**
     * OnChange event callback
     */
    onChange: _propTypes.default.func,

    /**
     * Should the AddressForm show the "Address Names" field.
     */
    shouldShowAddressNameField: _propTypes.default.bool,

    /**
     * Should the AddressForm show the "Is Commercial Address" field.
     */
    shouldShowIsCommercialField: _propTypes.default.bool,

    /**
     * Address object to be edited
     */
    value: _utils.CustomPropTypes.address
  }),

  /**
   * AddressReview component props
   */
  addressReviewProps: _propTypes.default.shape({
    /**
     * Address entered
     */
    addressEntered: _utils.CustomPropTypes.address,

    /**
     * Address validations address suggestion
     */
    addressSuggestion: _utils.CustomPropTypes.address,

    /**
     * Address validation error object
     */
    validationError: _propTypes.default.object,

    /**
     * The selected address option
     */
    value: _propTypes.default.string
  }),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction AddressForm component or your own component that is
     * compatible with the AddressForm spec.
     */
    AddressForm: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction AddressReview component or your own component that is
     * compatible with AddressReview spec.
     */
    AddressReview: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Is data being saved
   */
  isSaving: _propTypes.default.bool,

  /**
   * Form name
   */
  name: _propTypes.default.string,

  /**
   * Address validation event callback.
   */
  onAddressValidation: _propTypes.default.func,

  /**
   * Form submit event callback
   */
  onSubmit: _propTypes.default.func
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

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(AddressCapture)); // auto-add i18n


exports.default = _default;