import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "reacto-form";
import { uniqueId } from "lodash";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../utils";
/**
 * Convert the form document to the object structure
 * expected by `PaymentsCheckoutAction`
 * @param {Object} Form object
 * @returns {Object} Transformed object
 */

function buildResult(_ref) {
  var amount = _ref.amount,
      fullName = _ref.fullName;
  var floatAmount = amount ? parseFloat(amount) : null;
  if (isNaN(floatAmount)) floatAmount = null;
  return {
    amount: floatAmount,
    data: {
      fullName: fullName
    },
    displayName: fullName ? "IOU from ".concat(fullName) : null
  };
}

var ExampleIOUPaymentForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ExampleIOUPaymentForm, _Component);

  function ExampleIOUPaymentForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExampleIOUPaymentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExampleIOUPaymentForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.uniqueInstanceIdentifier = uniqueId("ExampleIOUPaymentForm");

    _this.handleChange = function (doc) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onReadyForSaveChange = _this$props.onReadyForSaveChange;
      var resultDoc = buildResult(doc);
      var stringDoc = JSON.stringify(resultDoc);

      if (stringDoc !== _this.lastDoc) {
        onChange(resultDoc);
      }

      _this.lastDoc = stringDoc;
      var isReady = !!doc.fullName;

      if (isReady !== _this.lastIsReady) {
        onReadyForSaveChange(isReady);
      }

      _this.lastIsReady = isReady;
    };

    _this.handleSubmit = function (doc) {
      var onSubmit = _this.props.onSubmit;
      return onSubmit(buildResult(doc));
    };

    return _this;
  }

  _createClass(ExampleIOUPaymentForm, [{
    key: "submit",
    value: function submit() {
      if (this.form) this.form.submit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          _this$props2$componen = _this$props2.components,
          ErrorsBlock = _this$props2$componen.ErrorsBlock,
          Field = _this$props2$componen.Field,
          TextInput = _this$props2$componen.TextInput,
          isSaving = _this$props2.isSaving;
      var fullNameInputId = "fullName_".concat(this.uniqueInstanceIdentifier);
      var amountInputId = "amount_".concat(this.uniqueInstanceIdentifier);
      return React.createElement(Form, {
        className: className,
        isReadOnly: isSaving,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        ref: function ref(formRef) {
          _this2.form = formRef;
        }
      }, React.createElement(Field, {
        name: "fullName",
        label: t('Full name'),
        labelFor: fullNameInputId
      }, React.createElement(TextInput, {
        id: fullNameInputId,
        name: "fullName"
      }), React.createElement(ErrorsBlock, {
        names: ["fullName"]
      })), React.createElement(Field, {
        name: "amount",
        label: t('Amount (optional)'),
        labelFor: amountInputId
      }, React.createElement(TextInput, {
        id: amountInputId,
        name: "amount"
      }), React.createElement(ErrorsBlock, {
        names: ["amount"]
      })));
    }
  }]);

  return ExampleIOUPaymentForm;
}(Component);

ExampleIOUPaymentForm.propTypes = {
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
     * Pass either the Reaction ErrorsBlock component or your own component that
     * accepts compatible props.
     */
    ErrorsBlock: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Field component or your own component that
     * accepts compatible props.
     */
    Field: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction TextInput component or your own component that
     * accepts compatible props.
     */
    TextInput: CustomPropTypes.component.isRequired
  }),

  /**
   * Pass true while the input data is in the process of being saved.
   * While true, the form fields are disabled.
   */
  isSaving: PropTypes.bool,

  /**
   * Called as the form fields are changed
   */
  onChange: PropTypes.func,

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
ExampleIOUPaymentForm.defaultProps = {
  onChange: function onChange() {},
  onReadyForSaveChange: function onReadyForSaveChange() {},
  onSubmit: function onSubmit() {}
};
export default withComponents(ExampleIOUPaymentForm);