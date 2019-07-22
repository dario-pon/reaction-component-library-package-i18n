"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = require("@reactioncommerce/components-context");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var SecureCaption = _styledComponents.default.div.withConfig({
  displayName: "StripePaymentInput__SecureCaption",
  componentId: "sc-1xa92tw-0"
})(["", ""], (0, _utils.addTypographyStyles)("StripePaymentInputCaption", "captionText"));

var IconLockSpan = _styledComponents.default.span.withConfig({
  displayName: "StripePaymentInput__IconLockSpan",
  componentId: "sc-1xa92tw-1"
})(["display:inline-block;height:20px;width:20px;"]);

var Span = _styledComponents.default.span.withConfig({
  displayName: "StripePaymentInput__Span",
  componentId: "sc-1xa92tw-2"
})(["vertical-align:super;"]);

var StripePaymentInput =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(StripePaymentInput, _Component);

  function StripePaymentInput() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, StripePaymentInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StripePaymentInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleChangeReadyState = function (isReady) {
      var onReadyForSaveChange = _this.props.onReadyForSaveChange;

      if (isReady !== _this.lastIsReady) {
        onReadyForSaveChange(isReady);
      }

      _this.lastIsReady = isReady;
    };

    return _this;
  }

  (0, _createClass2.default)(StripePaymentInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onReadyForSaveChange = this.props.onReadyForSaveChange;
      onReadyForSaveChange(false);
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var onSubmit, _ref, token;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                onSubmit = this.props.onSubmit;
                _context.next = 3;
                return this._stripe.createToken();

              case 3:
                _ref = _context.sent;
                token = _ref.token;
                _context.next = 7;
                return onSubmit({
                  displayName: "".concat(token.card.brand, " ending in ").concat(token.card.last4),
                  data: {
                    stripeTokenId: token.id
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          _this$props$component = _this$props.components,
          iconLock = _this$props$component.iconLock,
          StripeForm = _this$props$component.StripeForm;
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(StripeForm, {
        isComplete: this.handleChangeReadyState,
        stripeRef: function stripeRef(stripe) {
          _this2._stripe = stripe;
        }
      }), _react.default.createElement(SecureCaption, null, _react.default.createElement(IconLockSpan, null, iconLock), " ", _react.default.createElement(Span, null, "Your Information is private and secure.")));
    }
  }]);
  return StripePaymentInput;
}(_react.Component);

StripePaymentInput.propTypes = {
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
     * Secured lock icon
     */
    iconLock: _propTypes.default.node,

    /**
     * Pass either the Reaction StripeForm component or your own component that
     * accepts compatible props.
     */
    StripeForm: _utils.CustomPropTypes.component.isRequired
  }),

  /**
   * Pass true while the input data is in the process of being saved.
   * While true, the form fields are disabled.
   */
  isSaving: _propTypes.default.bool,

  /**
   * When this action's input data switches between being
   * ready for saving and not ready for saving, this will
   * be called with `true` (ready) or `false`
   */
  onReadyForSaveChange: _propTypes.default.func,

  /**
   * Called with an object value when this component's `submit`
   * method is called. The object may have `data`, `displayName`,
   * and `amount` properties.
   */
  onSubmit: _propTypes.default.func
};
StripePaymentInput.defaultProps = {
  onReadyForSaveChange: function onReadyForSaveChange() {},
  onSubmit: function onSubmit() {}
};

var _default = (0, _componentsContext.withComponents)(StripePaymentInput);

exports.default = _default;