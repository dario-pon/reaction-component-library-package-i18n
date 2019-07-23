"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
var StyledDiv = _styledComponents.default.div.withConfig({
  displayName: "CheckoutEmailAddress__StyledDiv",
  componentId: "sc-1vg3525-0"
})(["", " border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.addTypographyStyles)("CheckoutEmailAddress", "labelText"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderBottomColor"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderBottomWidth"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderLeftColor"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderLeftWidth"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderRightColor"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderRightWidth"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderTopColor"), (0, _utils.applyTheme)("CheckoutEmailAddress.borderTopWidth"), (0, _utils.applyTheme)("CheckoutEmailAddress.paddingBottom"), (0, _utils.applyTheme)("CheckoutEmailAddress.paddingLeft"), (0, _utils.applyTheme)("CheckoutEmailAddress.paddingRight"), (0, _utils.applyTheme)("CheckoutEmailAddress.paddingTop"));

var StyledSpan = _styledComponents.default.span.withConfig({
  displayName: "CheckoutEmailAddress__StyledSpan",
  componentId: "sc-1vg3525-1"
})(["", ""], (0, _utils.addTypographyStyles)("CheckoutEmailAddressEmphasis", "labelTextBold"));

var CheckoutEmailAddress =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CheckoutEmailAddress, _Component);

  function CheckoutEmailAddress() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CheckoutEmailAddress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CheckoutEmailAddress)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderAccountEmail = function () {
      var isAccountEmail = _this.props.isAccountEmail;

      if (isAccountEmail) {
        return "Signed in as";
      }

      return null;
    };

    return _this;
  }

  (0, _createClass2.default)(CheckoutEmailAddress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          emailAddress = _this$props.emailAddress;
      return _react.default.createElement(StyledDiv, {
        className: className
      }, this.renderAccountEmail(), " ", _react.default.createElement(StyledSpan, null, emailAddress));
    }
  }]);
  return CheckoutEmailAddress;
}(_react.Component);

CheckoutEmailAddress.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,
  emailAddress: _propTypes.default.string.isRequired,
  isAccountEmail: _propTypes.default.bool.isRequired
};

var _default = _utils.default.withTranslation()(CheckoutEmailAddress); // auto-add i18n


exports.default = _default;