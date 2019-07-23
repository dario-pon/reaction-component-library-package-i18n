import _regeneratorRuntime from "@babel/runtime/regenerator";
import "core-js/modules/es6.array.find";
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
import { Form } from "reacto-form";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, CustomPropTypes } from "../../utils";
var Title = styled.h3.withConfig({
  displayName: "FulfillmentOptionsCheckoutAction__Title",
  componentId: "sc-1539sll-0"
})(["", ""], addTypographyStyles("FulfillmentOptionsCheckoutActionTitle", "subheadingTextBold"));
var FulfillmentOption = styled.span.withConfig({
  displayName: "FulfillmentOptionsCheckoutAction__FulfillmentOption",
  componentId: "sc-1539sll-1"
})(["", ""], addTypographyStyles("FulfillmentOptionsCheckoutActionSelectedOption", "bodyText"));
var EmptyMessage = styled.span.withConfig({
  displayName: "FulfillmentOptionsCheckoutAction__EmptyMessage",
  componentId: "sc-1539sll-2"
})(["", ""], addTypographyStyles("FulfillmentOptionsCheckoutActionEmptyMessage", "bodyText"));
var FulfillmentOptionShape = PropTypes.shape({
  fulfillmentMethod: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }),
  price: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    displayAmount: PropTypes.string.isRequired
  })
});

var FulfillmentOptionsCheckoutAction =
/*#__PURE__*/
function (_Component) {
  _inherits(FulfillmentOptionsCheckoutAction, _Component);

  function FulfillmentOptionsCheckoutAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FulfillmentOptionsCheckoutAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FulfillmentOptionsCheckoutAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    _this._fulfillmentOptionForm = null;

    _this.getValue = function () {
      return _this._fulfillmentOptionForm.getValue();
    };

    _this.submit = function () {
      _this._fulfillmentOptionForm.submit();
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(_ref) {
        var selectedFulfillmentOptionId, availableFulfillmentOptions, selectedFulfillmentOption, onSubmit;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectedFulfillmentOptionId = _ref.selectedFulfillmentOptionId;
                availableFulfillmentOptions = _this.props.fulfillmentGroup.availableFulfillmentOptions; // We get the ID, but we want to pass the whole fulfillment option to onSubmit

                selectedFulfillmentOption = availableFulfillmentOptions.find(function (option) {
                  return option.fulfillmentMethod._id === selectedFulfillmentOptionId;
                });
                onSubmit = _this.props.onSubmit;
                _context.next = 6;
                return onSubmit({
                  selectedFulfillmentOption: selectedFulfillmentOption
                });

              case 6:
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

    _this.handleChange = function (selectedValue) {
      var onReadyForSaveChange = _this.props.onReadyForSaveChange;
      onReadyForSaveChange(!!selectedValue);
    };

    _this.mapFulfillmentOptions = function (availableFulfillmentOptions) {
      return availableFulfillmentOptions.map(function (option) {
        return {
          id: option.fulfillmentMethod._id,
          label: option.fulfillmentMethod.displayName,
          detail: option.price.displayAmount,
          value: option.fulfillmentMethod._id
        };
      });
    };

    return _this;
  }

  _createClass(FulfillmentOptionsCheckoutAction, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          alert = _this$props.alert,
          _this$props$component = _this$props.components,
          InlineAlert = _this$props$component.InlineAlert,
          SelectableList = _this$props$component.SelectableList,
          isSaving = _this$props.isSaving,
          label = _this$props.label,
          availableFulfillmentOptions = _this$props.fulfillmentGroup.availableFulfillmentOptions,
          stepNumber = _this$props.stepNumber;
      return React.createElement(Fragment, null, React.createElement(Title, null, stepNumber, ". ", label), alert ? React.createElement(InlineAlert, alert) : "", availableFulfillmentOptions && availableFulfillmentOptions.length ? React.createElement(Form, {
        ref: function ref(formEl) {
          _this2._fulfillmentOptionForm = formEl;
        },
        onSubmit: this.handleSubmit,
        value: {
          selectedFulfillmentOptionId: this.selectedOptionId
        }
      }, React.createElement(SelectableList, {
        isBordered: true,
        isSaving: isSaving,
        name: "selectedFulfillmentOptionId",
        onChange: this.handleChange,
        options: this.mapFulfillmentOptions(availableFulfillmentOptions)
      })) : React.createElement(EmptyMessage, null, "No fulfillment methods"));
    }
  }, {
    key: "selectedOptionId",
    get: function get() {
      var _this$props$fulfillme = this.props.fulfillmentGroup,
          selectedFulfillmentOption = _this$props$fulfillme.selectedFulfillmentOption,
          availableFulfillmentOptions = _this$props$fulfillme.availableFulfillmentOptions;

      if (selectedFulfillmentOption) {
        return selectedFulfillmentOption.fulfillmentMethod._id;
      } // If a selection has not been made yet, default to cheapest


      var cheapestOption = availableFulfillmentOptions.reduce(function (cheapest, option) {
        if (!cheapest || option.price.amount < cheapest.price.amount) {
          return option;
        }

        return cheapest;
      }, null);
      return cheapestOption.fulfillmentMethod._id;
    }
  }], [{
    key: "renderComplete",
    value: function renderComplete(_ref3) {
      var selectedFulfillmentOption = _ref3.fulfillmentGroup.selectedFulfillmentOption;
      return React.createElement(FulfillmentOption, null, selectedFulfillmentOption.fulfillmentMethod.displayName, " \u2022 ", selectedFulfillmentOption.price.displayAmount);
    }
  }]);

  return FulfillmentOptionsCheckoutAction;
}(Component);

FulfillmentOptionsCheckoutAction.propTypes = {
  /**
   * Alert object provides alert into to InlineAlert.
   */
  alert: CustomPropTypes.alert,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction [`SelectableList`](#!/SelectableList) component or your own component that
     * accepts compatible props.
     */
    SelectableList: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction InlineAlert component or your own component that
     * accepts compatible props.
     */
    InlineAlert: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Checkout data needed for form
   */
  fulfillmentGroup: PropTypes.shape({
    availableFulfillmentOptions: PropTypes.arrayOf(FulfillmentOptionShape).isRequired,
    selectedFulfillmentOption: FulfillmentOptionShape
  }).isRequired,

  /**
   * Is the fulfillment option being saved
   */
  isSaving: PropTypes.bool,

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
   * this function needs to return a Promise
   * if being used with reacto-form
   */
  onSubmit: PropTypes.func,

  /**
   * Checkout process step number
   */
  stepNumber: PropTypes.number.isRequired
};
FulfillmentOptionsCheckoutAction.defaultProps = {
  isSaving: false,
  onReadyForSaveChange: function onReadyForSaveChange() {}
};
export default i18n.withTranslation()(withComponents(FulfillmentOptionsCheckoutAction)); // auto-add i18n