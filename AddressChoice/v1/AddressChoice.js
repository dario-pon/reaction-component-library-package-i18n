"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.number.constructor");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var AddressChoice =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AddressChoice, _Component);

  function AddressChoice(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AddressChoice);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddressChoice).call(this, props));

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

  (0, _createClass2.default)(AddressChoice, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var addresses = _ref.addresses;
      var selectedOption = this.state.selectedOption;

      if (selectedOption === "0" && !(0, _lodash.default)(addresses[0], this.props.addresses[0])) {
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
          label: (0, _utils.addressToString)(address, {
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
      return _react.default.createElement(SelectableList, {
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
      return _react.default.createElement("div", {
        className: className
      }, this.renderSelectList(), selectedOption === "OTHER" && _react.default.createElement(AddressForm, {
        isReadOnly: isReadOnly,
        onChange: this.handleChangeAddress
      }));
    }
  }]);
  return AddressChoice;
}(_react.Component);

AddressChoice.propTypes = {
  /**
   * A list of addresses to show for selection
   */
  addresses: _utils.CustomPropTypes.addressBook,

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
     * Pass either the Reaction AddressForm component or your own component that
     * accepts compatible props.
     */
    AddressForm: _utils.CustomPropTypes.component.isRequired,

    /**
     * A reaction SelectableList component or compatible component.
     */
    SelectableList: _utils.CustomPropTypes.component.isRequired
  }),

  /**
   * If true, choosing an address and typing in address fields is disabled
   */
  isReadOnly: _propTypes.default.bool,

  /**
   * Called with an address whenever the selected or entered
   * address changes. If they selected one, it will be the
   * complete address that was passed in `addresses`. If they're
   * entering one, it will be whatever they have entered so far
   * and may be partial.
   */
  onChange: _propTypes.default.func,

  /**
   * The label for the "Use a different address" selection item, if it
   * is shown.
   */
  otherAddressLabel: _propTypes.default.string
};
AddressChoice.defaultProps = {
  isReadOnly: false,
  onChange: function onChange() {},
  otherAddressLabel: "Use a different address"
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(AddressChoice)); // auto-add i18n


exports.default = _default;