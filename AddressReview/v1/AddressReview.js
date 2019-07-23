"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _reactoForm = require("reacto-form");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormWrapper = _styledComponents.default.div.withConfig({
  displayName: "AddressReview__FormWrapper",
  componentId: "sc-1nprza2-0"
})(["margin-top:", ";"], (0, _utils.applyTheme)("AddressReview.formSpacingTop"));

var ENTERED = "entered";
var SUGGESTED = "suggested";

var AddressReview =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AddressReview, _Component);

  function AddressReview() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AddressReview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddressReview)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this._form = null;
    _this.uniqueInstanceIdentifier = (0, _lodash.default)("AddressReviewForm_");

    _this.submit = function () {
      _this._form.submit();
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var value, _this$props, addressEntered, addressSuggestion, onSubmit, selectedAddress;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = _ref.AddressReview;
                _this$props = _this.props, addressEntered = _this$props.addressEntered, addressSuggestion = _this$props.addressSuggestion, onSubmit = _this$props.onSubmit;
                selectedAddress = value === ENTERED ? _this.xformAddress(addressEntered) : _this.xformAddress(addressSuggestion);
                _context.next = 5;
                return onSubmit(selectedAddress);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  (0, _createClass2.default)(AddressReview, [{
    key: "xformAddress",

    /**
     *
     * @method xformAddress
     * @summary If missing adds the entered addresses `fullName`, `phone` & `isCommercial` property to a suggested address.
     * This is needed since most validation service results will not have these Reaction expected properties.
     * @param {Object} address - An address object
     * @return {Object} Address - complete Reaction `Address` object
     */
    value: function xformAddress(address) {
      var _this$props$addressEn = this.props.addressEntered,
          enteredFullName = _this$props$addressEn.fullName,
          enteredPhone = _this$props$addressEn.phone,
          enteredIsCommercial = _this$props$addressEn.isCommercial;
      var fullName = address.fullName,
          phone = address.phone,
          isCommercial = address.isCommercial;
      return _objectSpread({
        fullName: fullName || enteredFullName,
        phone: phone || enteredPhone,
        isCommercial: isCommercial || enteredIsCommercial
      }, address);
    }
    /**
     *
     * @name handleSubmit
     * @summary Form `onSubmit` callback that check the submitted value
     * and passes the correct address object to the `props.onSubmit` function.
     * @param {String} value - "entered" or "seggested"
     * @return {Undefined} - Nothing
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          addressEntered = _this$props2.addressEntered,
          addressSuggestion = _this$props2.addressSuggestion,
          className = _this$props2.className,
          _this$props2$componen = _this$props2.components,
          Address = _this$props2$componen.Address,
          SelectableList = _this$props2$componen.SelectableList,
          isSaving = _this$props2.isSaving,
          value = _this$props2.value;
      var options = [{
        id: "".concat(ENTERED, "_").concat(this.uniqueInstanceIdentifier),
        detail: _react.default.createElement(Address, {
          address: this.xformAddress(addressEntered),
          invalidAddressProperties: this.invalidAddressProperties
        }),
        label: "Entered Address:",
        value: ENTERED
      }, {
        id: "".concat(SUGGESTED, "_").concat(this.uniqueInstanceIdentifier),
        detail: _react.default.createElement(Address, {
          address: this.xformAddress(addressSuggestion)
        }),
        label: "Suggested Address:",
        value: SUGGESTED
      }];
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(FormWrapper, null, _react.default.createElement(_reactoForm.Form, {
        ref: function ref(formEl) {
          _this2._form = formEl;
        },
        onSubmit: this.handleSubmit
      }, _react.default.createElement(SelectableList, {
        isHorizontal: true,
        isStacked: true,
        options: options,
        name: "AddressReview",
        value: value,
        isReadOnly: isSaving
      }))));
    }
  }, {
    key: "invalidAddressProperties",

    /**
     *
     * @name invalidAddressProperties
     * @summary Creates an array of invalid address property keys.
     * @return {Array} - `["address1", "postal"]`
     */
    get: function get() {
      var _this$props3 = this.props,
          addressEntered = _this$props3.addressEntered,
          addressSuggestion = _this$props3.addressSuggestion;
      return addressEntered && Object.keys(addressEntered).filter(function (key) {
        if (key === "fullName") return null;
        return addressEntered[key] !== addressSuggestion[key] ? key : null;
      });
    }
  }]);
  return AddressReview;
}(_react.Component);

AddressReview.propTypes = {
  /**
   * Address entered
   */
  addressEntered: _utils.CustomPropTypes.address.isRequired,

  /**
   * Address validations address suggestion
   */
  addressSuggestion: _utils.CustomPropTypes.address.isRequired,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * If you've set up a components context using @reactioncommerce/components-context
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction Address component or your own component that
     * accepts compatible props.
     */
    Address: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction SelectableList component or your own component that
     * accepts compatible props.
     */
    SelectableList: _utils.CustomPropTypes.component.isRequired
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
   * Form submit event callback
   */
  onSubmit: _propTypes.default.func,

  /**
   * The selected address option
   */
  value: _propTypes.default.string
};
AddressReview.defaultProps = {
  isSaving: false,
  value: SUGGESTED
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(AddressReview)); // auto-add i18n


exports.default = _default;