"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _reactoForm = require("reacto-form");

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var FormAction = _styledComponents.default.div.withConfig({
  displayName: "GuestForm__FormAction",
  componentId: "sc-1ibny27-0"
})(["display:flex;justify-content:flex-end;padding:1rem 0 0 0;> *{width:100%;@media (min-width:", "px){width:auto;}}"], (0, _utils.applyTheme)("sm", "breakpoints"));

var GuestForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GuestForm, _Component);

  function GuestForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, GuestForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(GuestForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this._form = null;
    _this.uniqueInstanceIdentifier = (0, _lodash.default)("GuestForm_");
    return _this;
  }

  (0, _createClass2.default)(GuestForm, [{
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
      return _react.default.createElement(_reactoForm.Form, {
        className: className,
        ref: function ref(formEl) {
          _this2._form = formEl;
        },
        errors: errors,
        name: name,
        onSubmit: onSubmit,
        validator: validator,
        value: value
      }, _react.default.createElement(Field, {
        name: "email",
        label: t('Email Address'),
        isRequired: true,
        helpText: helpText
      }, _react.default.createElement(TextInput, {
        id: emailInputId,
        isReadOnly: isSaving,
        name: "email",
        placeholder: t('Email address'),
        type: "email"
      }), _react.default.createElement(ErrorsBlock, {
        names: ["email"]
      })), _react.default.createElement(FormAction, null, _react.default.createElement(Button, {
        actionType: "secondary",
        isWaiting: isSaving,
        onClick: function onClick() {
          _this2.submit();
        }
      }, buttonText)));
    }
  }]);
  return GuestForm;
}(_react.Component);

GuestForm.propTypes = {
  /**
   * Button text
   */
  buttonText: _propTypes.default.string,

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
     * Pass either the Reaction Button component or your own component that is
     * compatible.
     */
    Button: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction ErrorsBlock component or your own component that is
     * compatible with ReactoForm.
     */
    ErrorsBlock: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Field component or your own component that is
     * compatible with ReactoForm.
     */
    Field: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction TextInput component or your own component that is
     * compatible with ReactoForm.
     */
    TextInput: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Errors array
   */
  errors: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * Error message
       */
    message: _propTypes.default.string.isRequired,

    /**
       * Error name
       */
    name: _propTypes.default.string.isRequired
  })),

  /**
   * Help Test message
   */
  helpText: _propTypes.default.string,

  /**
   * Is the shipping address being saved
   */
  isSaving: _propTypes.default.bool,

  /**
   * Form name
   */
  name: _propTypes.default.string,

  /**
   * Form submit event callback
   */
  onSubmit: _propTypes.default.func,

  /**
   * Validator method
   */
  validator: _propTypes.default.func,

  /**
   * Guest email address
   */
  value: _propTypes.default.shape({
    email: _propTypes.default.string
  })
};
GuestForm.defaultProps = {
  buttonText: "Continue as guest",
  errors: [],
  helpText: "You will have the option to create an account and save your details after checkout.",
  isSaving: false,
  name: "address",
  onSubmit: function onSubmit() {},
  validator: (0, _utils.getRequiredValidator)("email"),
  value: {
    email: ""
  }
};

var _default = (0, _componentsContext.withComponents)(GuestForm);

exports.default = _default;