import "core-js/modules/es6.function.name";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
import { Form } from "reacto-form";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes, getRequiredValidator } from "../../utils";
var FormAction = styled.div.withConfig({
  displayName: "GuestForm__FormAction",
  componentId: "sc-1ibny27-0"
})(["display:flex;justify-content:flex-end;padding:1rem 0 0 0;> *{width:100%;@media (min-width:", "px){width:auto;}}"], applyTheme("sm", "breakpoints"));

var GuestForm =
/*#__PURE__*/
function (_Component) {
  _inherits(GuestForm, _Component);

  function GuestForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GuestForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GuestForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this._form = null;
    _this.uniqueInstanceIdentifier = uniqueId("GuestForm_");
    return _this;
  }

  _createClass(GuestForm, [{
    key: "submit",
    value: function submit() {
      this._form.submit();
    }
  }, {
    key: "validate",
    value: function validate() {
      return this._form.validate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          buttonText = _this$props.buttonText,
          className = _this$props.className,
          _this$props$component = _this$props.components,
          Button = _this$props$component.Button,
          ErrorsBlock = _this$props$component.ErrorsBlock,
          Field = _this$props$component.Field,
          TextInput = _this$props$component.TextInput,
          errors = _this$props.errors,
          helpText = _this$props.helpText,
          isSaving = _this$props.isSaving,
          name = _this$props.name,
          onSubmit = _this$props.onSubmit,
          validator = _this$props.validator,
          value = _this$props.value;
      var emailInputId = "email_".concat(this.uniqueInstanceIdentifier);
      return React.createElement(Form, {
        className: className,
        ref: function ref(formEl) {
          _this2._form = formEl;
        },
        errors: errors,
        name: name,
        onSubmit: onSubmit,
        validator: validator,
        value: value
      }, React.createElement(Field, {
        name: "email",
        label: t('Email Address'),
        isRequired: true,
        helpText: helpText
      }, React.createElement(TextInput, {
        id: emailInputId,
        isReadOnly: isSaving,
        name: "email",
        placeholder: t('Email address'),
        type: "email"
      }), React.createElement(ErrorsBlock, {
        names: ["email"]
      })), React.createElement(FormAction, null, React.createElement(Button, {
        actionType: "secondary",
        isWaiting: isSaving,
        onClick: function onClick() {
          _this2.submit();
        }
      }, buttonText)));
    }
  }]);

  return GuestForm;
}(Component);

GuestForm.propTypes = {
  /**
   * Button text
   */
  buttonText: PropTypes.string,

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
     * Pass either the Reaction Button component or your own component that is
     * compatible.
     */
    Button: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction ErrorsBlock component or your own component that is
     * compatible with ReactoForm.
     */
    ErrorsBlock: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Field component or your own component that is
     * compatible with ReactoForm.
     */
    Field: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction TextInput component or your own component that is
     * compatible with ReactoForm.
     */
    TextInput: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Errors array
   */
  errors: PropTypes.arrayOf(PropTypes.shape({
    /**
       * Error message
       */
    message: PropTypes.string.isRequired,

    /**
       * Error name
       */
    name: PropTypes.string.isRequired
  })),

  /**
   * Help Test message
   */
  helpText: PropTypes.string,

  /**
   * Is the shipping address being saved
   */
  isSaving: PropTypes.bool,

  /**
   * Form name
   */
  name: PropTypes.string,

  /**
   * Form submit event callback
   */
  onSubmit: PropTypes.func,

  /**
   * Validator method
   */
  validator: PropTypes.func,

  /**
   * Guest email address
   */
  value: PropTypes.shape({
    email: PropTypes.string
  })
};
GuestForm.defaultProps = {
  buttonText: "Continue as guest",
  errors: [],
  helpText: "You will have the option to create an account and save your details after checkout.",
  isSaving: false,
  name: "address",
  onSubmit: function onSubmit() {},
  validator: getRequiredValidator("email"),
  value: {
    email: ""
  }
};
export default withComponents(GuestForm);