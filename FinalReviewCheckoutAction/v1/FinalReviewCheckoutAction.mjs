import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import styled from "styled-components";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../utils";
var Title = styled.h3.withConfig({
  displayName: "FinalReviewCheckoutAction__Title",
  componentId: "x3j0ce-0"
})(["", ""], addTypographyStyles("FinalReviewCheckoutActionTitle", "subheadingTextBold")); // NOTE: We intentionally break from our convention of using separate border
// theme variables for each side here. Because various borders intersect, it
// could lead to strangeness to separate them.

var Summary = styled.div.withConfig({
  displayName: "FinalReviewCheckoutAction__Summary",
  componentId: "x3j0ce-1"
})(["border-color:", ";border-style:solid;border-width:", ";"], applyTheme("FinalReviewCheckoutAction.borderColor"), applyTheme("FinalReviewCheckoutAction.borderWidth"));
var CartSummaryWrapper = styled.div.withConfig({
  displayName: "FinalReviewCheckoutAction__CartSummaryWrapper",
  componentId: "x3j0ce-2"
})(["padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingBottom"), applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingLeft"), applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingRight"), applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingTop"));
var Items = styled.div.withConfig({
  displayName: "FinalReviewCheckoutAction__Items",
  componentId: "x3j0ce-3"
})(["border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], applyTheme("FinalReviewCheckoutAction.borderColor"), applyTheme("FinalReviewCheckoutAction.borderWidth"), applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingBottom"), applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingLeft"), applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingRight"), applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingTop"));

var FinalReviewCheckoutAction =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FinalReviewCheckoutAction, _Component);

    function FinalReviewCheckoutAction() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, FinalReviewCheckoutAction);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FinalReviewCheckoutAction)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.submit = function () {
        var onSubmit = _this.props.onSubmit;
        onSubmit();
      };

      return _this;
    }

    _createClass(FinalReviewCheckoutAction, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var onReadyForSaveChange = this.props.onReadyForSaveChange;
        onReadyForSaveChange(true);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          _this$props$checkoutS = _this$props.checkoutSummary,
          displayDiscount = _this$props$checkoutS.displayDiscount,
          displayShipping = _this$props$checkoutS.displayShipping,
          displaySubtotal = _this$props$checkoutS.displaySubtotal,
          displaySurcharge = _this$props$checkoutS.displaySurcharge,
          displayTax = _this$props$checkoutS.displayTax,
          displayTotal = _this$props$checkoutS.displayTotal,
          items = _this$props$checkoutS.items,
          _this$props$component = _this$props.components,
          CartItems = _this$props$component.CartItems,
          CartSummary = _this$props$component.CartSummary,
          label = _this$props.label,
          stepNumber = _this$props.stepNumber,
          props = _objectWithoutProperties(_this$props, ["checkoutSummary", "components", "label", "stepNumber"]);

        return React.createElement(Fragment, null, React.createElement(Title, null, stepNumber, ". ", label), React.createElement(Summary, null, React.createElement(Items, null, React.createElement(CartItems, _extends({
          isReadOnly: true,
          items: items
        }, props))), React.createElement(CartSummaryWrapper, null, React.createElement(CartSummary, {
          isDense: true,
          displayDiscount: displayDiscount,
          displayShipping: displayShipping,
          displaySubtotal: displaySubtotal,
          displaySurcharge: displaySurcharge,
          displayTax: displayTax,
          displayTotal: displayTotal
        }))));
      }
    }]);

    return FinalReviewCheckoutAction;
  }(Component);

FinalReviewCheckoutAction.renderComplete = function () {
  return null;
};

FinalReviewCheckoutAction.propTypes = {
  /**
   * Cart data
   */
  checkoutSummary: PropTypes.shape({
    /**
     * Discount amount associated with promo code
     */
    displayDiscount: PropTypes.string,

    /**
     * Shipping cost
     */
    displayShipping: PropTypes.string,

    /**
     * Subtotal amount
     */
    displaySubtotal: PropTypes.string.isRequired,

    /**
     * Surcharges added to this cart
     */
    displaySurcharge: PropTypes.string,

    /**
     * Calculated tax amount
     */
    displayTax: PropTypes.string,

    /**
     * Total amount
     */
    displayTotal: PropTypes.string.isRequired,

    /**
     * If a product qualifies for free shipping, display "FREE" for shipping method
     */
    isFreeShipping: PropTypes.bool,

    /**
     * CartItem data. This is passed to CartItems, which may require some props.
     */
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }),

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction CartItems component or your own component that
     * accepts compatible props.
     */
    CartItems: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CartSummary component or your own component that
     * accepts compatible props.
     */
    CartSummary: CustomPropTypes.component.isRequired
  }),

  /**
   * Label of workflow step
   */
  label: PropTypes.string.isRequired,

  /**
   * When action is ready for save call this prop method to
   * enable the save button with in the `CheckoutActions`
   */
  onReadyForSaveChange: PropTypes.func,

  /**
   * When an action form passes validation and submits
   * the value will be passed to this callback
   * this function.
   */
  onSubmit: PropTypes.func,

  /**
   * Product URL path to be prepended before the slug
  */
  productURLPath: PropTypes.string,

  /**
   * Checkout process step number
   */
  stepNumber: PropTypes.number.isRequired
};
FinalReviewCheckoutAction.defaultProps = {
  onReadyForSaveChange: function onReadyForSaveChange() { }
};
export default i18n.withTranslation()(withComponents(FinalReviewCheckoutAction)); // auto-add i18n