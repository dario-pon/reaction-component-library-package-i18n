import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement, injectStripe } from "react-stripe-elements";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, withStripeElements } from "../../utils";
/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a value from the theme
 *   based on the current focused state reflected in `props`.
 *   If `isFocused` is `true`, uses theme prop with "focus" appended; otherwise
 *   uses theme prop with "default" appended.
 * @param {String} themeProp The name of the theme variable to get the value for
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */

function fieldBorderColor(themeProp) {
  return function (props) {
    var status = "default";

    if (props.isFocused) {
      status = "focus";
    }

    return applyTheme("".concat(themeProp, "_").concat(status));
  };
}

var Field = styled.div.withConfig({
  displayName: "StripeForm__Field",
  componentId: "phbkxv-0"
})(["-webkit-font-smoothing:antialiased;background-color:", ";border-color:", ";border-style:solid;border-width:1px;box-sizing:border-box;color:", ";line-height:", ";border-radius:2px;margin-bottom:20px;outline:none;padding:", " ", ";"], applyTheme("Input.backgroundColor_default"), fieldBorderColor("Input.borderColor"), applyTheme("Input.color_default"), applyTheme("Input.lineHeight"), applyTheme("Input.verticalPadding"), applyTheme("Input.horizontalPadding"));
var AcceptedPaymentMethods = styled.div.withConfig({
  displayName: "StripeForm__AcceptedPaymentMethods",
  componentId: "phbkxv-1"
})(["display:flex;justify-content:flex-end;margin:20px 0;"]);
var Span = styled.span.withConfig({
  displayName: "StripeForm__Span",
  componentId: "phbkxv-2"
})(["margin-left:5px;"]);
var FlexContainer = styled.div.withConfig({
  displayName: "StripeForm__FlexContainer",
  componentId: "phbkxv-3"
})(["display:flex;"]);

var StripeForm =
/*#__PURE__*/
function (_Component) {
  _inherits(StripeForm, _Component);

  function StripeForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StripeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StripeForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      cardNumberComplete: false,
      cardNumberIsFocused: false,
      cardExpiryComplete: false,
      cardExpiryIsFocused: false,
      cardCvcComplete: false,
      cardCvcIsFocused: false,
      postalCodeComplete: false,
      postalCodeIsFocused: false
    };

    _this.componentDidUpdate = function () {
      if (_this.props.stripe) {
        _this.props.stripeRef(_this.props.stripe);
      }
    };

    _this.handleOnFocus = function (event) {
      _this.setState(_defineProperty({}, "".concat(event.elementType, "IsFocused"), true));
    };

    _this.handleOnBlur = function (event) {
      _this.setState(_defineProperty({}, "".concat(event.elementType, "IsFocused"), false));
    };

    _this.handleOnChange = function (event) {
      var complete = event.complete,
          elementType = event.elementType;

      _this.setState(_defineProperty({}, "".concat(elementType, "Complete"), complete), _this.isComplete);
    };

    _this.isComplete = function () {
      var _this$state = _this.state,
          cardNumberComplete = _this$state.cardNumberComplete,
          cardExpiryComplete = _this$state.cardExpiryComplete,
          cardCvcComplete = _this$state.cardCvcComplete,
          postalCodeComplete = _this$state.postalCodeComplete; // console.log("isComplete", this.state);

      if (cardNumberComplete && cardExpiryComplete && cardCvcComplete && postalCodeComplete) {
        _this.props.isComplete(true);
      } else {
        _this.props.isComplete(false);
      }
    };

    _this.renderIcons = function (ccIcons) {
      return React.createElement("div", null, ccIcons.map(function (icon, index) {
        return React.createElement(Span, {
          key: index
        }, icon);
      }));
    };

    return _this;
  }

  _createClass(StripeForm, [{
    key: "render",
    value: function render() {
      var ccIcons = [this.props.components.iconVisa, this.props.components.iconAmericanExpress, this.props.components.iconMastercard, this.props.components.iconDiscover];
      var _this$props = this.props,
          cardNumberPlaceholder = _this$props.cardNumberPlaceholder,
          cardExpiryPlaceholder = _this$props.cardExpiryPlaceholder,
          cardCvcPlaceholder = _this$props.cardCvcPlaceholder,
          postalCodePlaceholder = _this$props.postalCodePlaceholder;
      var _this$state2 = this.state,
          cardNumberIsFocused = _this$state2.cardNumberIsFocused,
          cardExpiryIsFocused = _this$state2.cardExpiryIsFocused,
          cardCvcIsFocused = _this$state2.cardCvcIsFocused,
          postalCodeIsFocused = _this$state2.postalCodeIsFocused;
      var commonProps = {
        style: {
          base: {
            "fontSize": applyTheme("Input.fontSize")(this.props),
            "color": applyTheme("Input.color_default")(this.props),
            "fontFamily": applyTheme("Input.fontFamily")(this.props),
            "::placeholder": {
              color: applyTheme("Input.placeholderColor")(this.props)
            }
          }
        },
        onFocus: this.handleOnFocus,
        onBlur: this.handleOnBlur
      };
      return React.createElement(Fragment, null, React.createElement(AcceptedPaymentMethods, null, this.renderIcons(ccIcons)), React.createElement(Field, {
        isFocused: cardNumberIsFocused
      }, React.createElement(CardNumberElement, _extends({
        onChange: this.handleOnChange,
        placeholder: cardNumberPlaceholder
      }, commonProps))), React.createElement(FlexContainer, null, React.createElement(Field, {
        isFocused: cardExpiryIsFocused,
        style: {
          flexGrow: 1,
          marginRight: "1rem"
        }
      }, React.createElement(CardExpiryElement, _extends({
        onChange: this.handleOnChange,
        placeholder: cardExpiryPlaceholder
      }, commonProps))), React.createElement(Field, {
        isFocused: cardCvcIsFocused,
        style: {
          flexGrow: 1
        }
      }, React.createElement(CardCVCElement, _extends({
        onChange: this.handleOnChange,
        placeholder: cardCvcPlaceholder
      }, commonProps)))), React.createElement(Field, {
        isFocused: postalCodeIsFocused
      }, React.createElement(PostalCodeElement, _extends({
        onChange: this.handleOnChange,
        placeholder: postalCodePlaceholder
      }, commonProps))));
    }
  }]);

  return StripeForm;
}(Component); // We should be using `withTheme` here, but it seems to cause serious errors in the
// deployed app, and does not work anyway. Need to investigate why `withComponents`
// works and does not cause errors but `withTheme` does not work. It is surely
// something related to the iframes that Stripe uses.


StripeForm.propTypes = {
  /**
   * Card's CVV text placeholder
   */
  cardCvcPlaceholder: PropTypes.string,

  /**
   * Card's expiry date text placeholder
   */
  cardExpiryPlaceholder: PropTypes.string,

  /**
   * Card's Number text placeholder
   */
  cardNumberPlaceholder: PropTypes.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Visa icon as SVG
     */
    iconVisa: PropTypes.node,

    /**
     * American Express icon as SVG
     */
    iconAmericanExpress: PropTypes.node,

    /**
     * Discover icon as SVG
     */
    iconDiscover: PropTypes.node,

    /**
     * Mastercard icon as SVG
     */
    iconMastercard: PropTypes.node
  }).isRequired,

  /**
   *  Used to determined if all form fields have been completed
  */
  isComplete: PropTypes.func.isRequired,

  /**
   * Card's billing postal code text placeholder
   */
  postalCodePlaceholder: PropTypes.string,

  /**
   * The stripe object which provides methods for tokenizing data, it's
   * provided by the StripeProvider component.
   * See https://stripe.com/docs/stripe-js/reference#the-stripe-object for more details.
   */
  stripe: PropTypes.object,

  /**
   * Used to pass a reference of the stripe object to the containing component.
   * The containing component will handle tokenizing payment data and sending data to server.
   */
  stripeRef: PropTypes.func.isRequired
};
StripeForm.defaultProps = {
  cardNumberPlaceholder: "Card Number",
  cardExpiryPlaceholder: "Expiry Date MM/YY",
  cardCvcPlaceholder: "CVV",
  postalCodePlaceholder: "Postal Code",
  stripeRef: function stripeRef() {
    return true;
  }
};
export default i18n.withTranslation()(withComponents(withStripeElements(injectStripe(StripeForm)))); // auto-add i18n