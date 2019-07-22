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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var EmptyButton = _styledComponents.default.div.withConfig({
  displayName: "CartEmptyMessage__EmptyButton",
  componentId: "e1n47h-0"
})(["display:flex;justify-content:center;"]);

var EmptyMessage = _styledComponents.default.div.withConfig({
  displayName: "CartEmptyMessage__EmptyMessage",
  componentId: "e1n47h-1"
})(["", " display:flex;justify-content:center;margin-bottom:", ";"], (0, _utils.addTypographyStyles)("CartEmptyMessage", "bodyText"), (0, _utils.applyTheme)("CartEmptyMessage.textToButtonSpacing"));

var CartEmptyMessage =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CartEmptyMessage, _Component);

  function CartEmptyMessage() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CartEmptyMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CartEmptyMessage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleOnClick = function () {
      _this.props.onClick();
    };

    return _this;
  }

  (0, _createClass2.default)(CartEmptyMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttonText = _this$props.buttonText,
          components = _this$props.components,
          messageText = _this$props.messageText;
      var Button = components.Button;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(EmptyMessage, null, t(messageText)), _react.default.createElement(EmptyButton, null, _react.default.createElement(Button, {
        actionType: "important",
        onClick: this.handleOnClick
      }, t(buttonText))));
    }
  }]);
  return CartEmptyMessage;
}(_react.Component);

CartEmptyMessage.propTypes = {
  /**
   * Text to display inside the button
   */
  buttonText: _propTypes.default.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction Button component or your own component that
     * accepts compatible props.
     */
    Button: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Text to display inside the message area
   */
  messageText: _propTypes.default.string,

  /**
   * Onclick function to pass to the Button component. Not handled internally, directly passed
   */
  onClick: _propTypes.default.func.isRequired
};
CartEmptyMessage.defaultProps = {
  buttonText: "Continue shopping",
  messageText: "Your shopping cart is empty."
};

var _default = (0, _componentsContext.withComponents)(CartEmptyMessage);

exports.default = _default;