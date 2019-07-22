import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import styled from "styled-components";
import { addTypographyStyles, CustomPropTypes } from "../../utils";
var SecureCaption = styled.div.withConfig({
  displayName: "StripePaymentInput__SecureCaption",
  componentId: "sc-1xa92tw-0"
})(["", ""], addTypographyStyles("StripePaymentInputCaption", "captionText"));
var IconLockSpan = styled.span.withConfig({
  displayName: "StripePaymentInput__IconLockSpan",
  componentId: "sc-1xa92tw-1"
})(["display:inline-block;height:20px;width:20px;"]);
var Span = styled.span.withConfig({
  displayName: "StripePaymentInput__Span",
  componentId: "sc-1xa92tw-2"
})(["vertical-align:super;"]);

var StripePaymentInput =
/*#__PURE__*/
function (_Component) {
  _inherits(StripePaymentInput, _Component);

  function StripePaymentInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StripePaymentInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StripePaymentInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleChangeReadyState = function (isReady) {
      var onReadyForSaveChange = _this.props.onReadyForSaveChange;

      if (isReady !== _this.lastIsReady) {
        onReadyForSaveChange(isReady);
      }

      _this.lastIsReady = isReady;
    };

    return _this;
  }

  _createClass(StripePaymentInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onReadyForSaveChange = this.props.onReadyForSaveChange;
      onReadyForSaveChange(false);
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var onSubmit, _ref, token;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
      return React.createElement("div", {
        className: className
      }, React.createElement(StripeForm, {
        isComplete: this.handleChangeReadyState,
        stripeRef: function stripeRef(stripe) {
          _this2._stripe = stripe;
        }
      }), React.createElement(SecureCaption, null, React.createElement(IconLockSpan, null, iconLock), " ", React.createElement(Span, null, "Your Information is private and secure.")));
    }
  }]);

  return StripePaymentInput;
}(Component);

StripePaymentInput.propTypes = {
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
     * Secured lock icon
     */
    iconLock: PropTypes.node,

    /**
     * Pass either the Reaction StripeForm component or your own component that
     * accepts compatible props.
     */
    StripeForm: CustomPropTypes.component.isRequired
  }),

  /**
   * Pass true while the input data is in the process of being saved.
   * While true, the form fields are disabled.
   */
  isSaving: PropTypes.bool,

  /**
   * When this action's input data switches between being
   * ready for saving and not ready for saving, this will
   * be called with `true` (ready) or `false`
   */
  onReadyForSaveChange: PropTypes.func,

  /**
   * Called with an object value when this component's `submit`
   * method is called. The object may have `data`, `displayName`,
   * and `amount` properties.
   */
  onSubmit: PropTypes.func
};
StripePaymentInput.defaultProps = {
  onReadyForSaveChange: function onReadyForSaveChange() {},
  onSubmit: function onSubmit() {}
};
export default withComponents(StripePaymentInput);