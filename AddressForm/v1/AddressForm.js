"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _lodash2 = _interopRequireDefault(require("lodash.isempty"));

var _reactoForm = require("reacto-form");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var Grid = _styledComponents.default.div.withConfig({
  displayName: "AddressForm__Grid",
  componentId: "xewrev-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]);

var ColFull = _styledComponents.default.div.withConfig({
  displayName: "AddressForm__ColFull",
  componentId: "xewrev-1"
})(["flex:1 1 100%;"]);

var ColHalf = _styledComponents.default.div.withConfig({
  displayName: "AddressForm__ColHalf",
  componentId: "xewrev-2"
})(["flex:1 1 100%;@media (min-width:", "px){flex:0 1 calc(50% - 9px);}"], (0, _utils.applyTheme)("sm", "breakpoints"));

var AddressForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AddressForm, _Component);

  function AddressForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AddressForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddressForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      // if the form has a value then try to use the value.country
      // if that is not set check to see if any locales are provided and use the first one
      // if no locales use "US"
      activeCountry: // eslint-disable-next-line
      _this.props.value && _this.props.value.country !== "" ? _this.props.value.country : (0, _lodash2.default)(_this.props.locales) ? "US" : Object.keys(_this.props.locales)[0]
    };
    _this._form = null;
    _this.uniqueInstanceIdentifier = (0, _lodash.default)("AddressForm_");

    _this.handleCountryChange = function (country) {
      if (!country) return;

      _this.setState({
        activeCountry: country
      });
    };

    _this.handleCancel = function () {
      var onCancel = _this.props.onCancel;
      onCancel();
    };

    _this.getValue = function () {
      return _this._form.getValue();
    };

    _this.submit = function () {
      _this._form.submit();
    };

    _this.validate = function () {
      return _this._form.validate();
    };

    return _this;
  }

  (0, _createClass2.default)(AddressForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevLocales = prevProps.locales;
      var _this$props = this.props,
          nextLocales = _this$props.locales,
          nextValue = _this$props.value;
      var prevCountry = this.state.activeCountry; // Sometimes the AddressForm will render before locales are provided.
      // This is often the case when dynamically importing locales via a JSON file.
      // Once the file loads and the locales are provided the form needs to check
      // and correct the active country.

      if ((0, _lodash2.default)(prevLocales) && !(0, _lodash2.default)(nextLocales) && prevLocales !== nextLocales) {
        var nextCountry = Object.keys(nextLocales)[0];

        if (nextValue && nextValue.country === prevCountry) {
          return;
        } else if (nextCountry !== prevCountry) {
          // eslint-disable-next-line
          this.setState({
            activeCountry: nextCountry
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          addressNamePlaceholder = _this$props2.addressNamePlaceholder,
          value = _this$props2.value,
          className = _this$props2.className,
          _this$props2$componen = _this$props2.components,
          Checkbox = _this$props2$componen.Checkbox,
          ErrorsBlock = _this$props2$componen.ErrorsBlock,
          Field = _this$props2$componen.Field,
          TextInput = _this$props2$componen.TextInput,
          Select = _this$props2$componen.Select,
          PhoneNumberInput = _this$props2$componen.PhoneNumberInput,
          RegionInput = _this$props2$componen.RegionInput,
          errors = _this$props2.errors,
          isOnDarkBackground = _this$props2.isOnDarkBackground,
          isReadOnly = _this$props2.isReadOnly,
          isSaving = _this$props2.isSaving,
          name = _this$props2.name,
          onChange = _this$props2.onChange,
          shouldShowAddressNameField = _this$props2.shouldShowAddressNameField,
          shouldShowIsCommercialField = _this$props2.shouldShowIsCommercialField,
          validator = _this$props2.validator;
      var addressNameInputId = "addressName_".concat(this.uniqueInstanceIdentifier);
      var countryInputId = "country_".concat(this.uniqueInstanceIdentifier);
      var fullNameInputId = "fullName_".concat(this.uniqueInstanceIdentifier);
      var address1InputId = "address1_".concat(this.uniqueInstanceIdentifier);
      var address2InputId = "address2_".concat(this.uniqueInstanceIdentifier);
      var cityInputId = "city_".concat(this.uniqueInstanceIdentifier);
      var regionInputId = "region_".concat(this.uniqueInstanceIdentifier);
      var postalInputId = "postal_".concat(this.uniqueInstanceIdentifier);
      var phoneInputId = "phone_".concat(this.uniqueInstanceIdentifier);
      var isCommercialInputId = "isCommercial_".concat(this.uniqueInstanceIdentifier);
      return _react.default.createElement(_reactoForm.Form, {
        className: className,
        ref: function ref(formEl) {
          _this2._form = formEl;
        },
        errors: errors,
        name: name,
        onChange: onChange,
        onSubmit: this.props.onSubmit,
        validator: validator,
        revalidateOn: "changed",
        value: value
      }, _react.default.createElement(Grid, null, shouldShowAddressNameField && _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "addressName",
        label: t('Address Name'),
        labelFor: addressNameInputId,
        isOptional: true
      }, _react.default.createElement(TextInput, {
        id: addressNameInputId,
        name: "addressName",
        placeholder: addressNamePlaceholder,
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }))), _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "country",
        label: t('Country'),
        labelFor: countryInputId,
        isRequired: true
      }, this.countryOptions && this.countryOptions.length > 1 ? _react.default.createElement(Select, {
        id: countryInputId,
        alphabetize: true,
        isSearchable: true,
        name: "country",
        onChange: this.handleCountryChange,
        options: this.countryOptions,
        placeholder: t('Country'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }) : _react.default.createElement(TextInput, {
        id: countryInputId,
        name: "country",
        placeholder: t('Country'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), _react.default.createElement(ErrorsBlock, {
        names: ["country"]
      }))), _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "fullName",
        label: t('Name'),
        labelFor: fullNameInputId,
        isRequired: true
      }, _react.default.createElement(TextInput, {
        id: fullNameInputId,
        name: "fullName",
        placeholder: t('Name'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), _react.default.createElement(ErrorsBlock, {
        names: ["fullName"]
      }))), _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "address1",
        label: t('Address'),
        labelFor: address1InputId,
        isRequired: true
      }, _react.default.createElement(TextInput, {
        id: address1InputId,
        name: "address1",
        placeholder: t('Address'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), _react.default.createElement(ErrorsBlock, {
        names: ["address1"]
      }))), _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "address2",
        label: t('Address Line 2'),
        labelFor: address2InputId,
        isOptional: true
      }, _react.default.createElement(TextInput, {
        id: address2InputId,
        name: "address2",
        placeholder: t('Address Line 2 (Optional)'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }))), _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "city",
        label: t('City'),
        labelFor: cityInputId
      }, _react.default.createElement(TextInput, {
        id: cityInputId,
        name: "city",
        placeholder: t('City'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), _react.default.createElement(ErrorsBlock, {
        names: ["city"]
      }))), _react.default.createElement(ColHalf, null, _react.default.createElement(Field, {
        name: "region",
        label: t('Region'),
        labelFor: regionInputId,
        isRequired: true
      }, _react.default.createElement(RegionInput, {
        id: regionInputId,
        options: this.regionOptions,
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly,
        name: "region",
        placeholder: t('Region')
      }), _react.default.createElement(ErrorsBlock, {
        names: ["region"]
      }))), _react.default.createElement(ColHalf, null, _react.default.createElement(Field, {
        name: "postal",
        label: t('Postal Code'),
        labelFor: postalInputId,
        isRequired: true
      }, _react.default.createElement(TextInput, {
        id: postalInputId,
        name: "postal",
        placeholder: t('Postal Code'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), _react.default.createElement(ErrorsBlock, {
        names: ["postal"]
      }))), _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "phone",
        label: t('Phone'),
        labelFor: phoneInputId,
        isRequired: true
      }, _react.default.createElement(PhoneNumberInput, {
        id: phoneInputId,
        name: "phone",
        placeholder: t('Phone'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), _react.default.createElement(ErrorsBlock, {
        names: ["phone"]
      }))), shouldShowIsCommercialField && _react.default.createElement(ColFull, null, _react.default.createElement(Field, {
        name: "isCommercial",
        labelFor: isCommercialInputId
      }, _react.default.createElement(Checkbox, {
        id: isCommercialInputId,
        name: "isCommercial",
        label: t('This is a commercial address.'),
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      })))));
    }
  }, {
    key: "countryOptions",
    get: function get() {
      var locales = this.props.locales;
      if (!locales) return [];
      var options = Object.keys(locales).map(function (key) {
        return {
          value: key,
          label: locales[key].name
        };
      });
      return options;
    }
  }, {
    key: "regionOptions",
    get: function get() {
      var locales = this.props.locales;
      var activeCountry = this.state.activeCountry;
      var options = [];

      if (locales && locales[activeCountry] && locales[activeCountry].states) {
        Object.keys(locales[activeCountry].states).forEach(function (key) {
          options.push({
            value: key,
            label: locales[activeCountry].states[key].name
          });
        });
      }

      return options;
    }
  }]);
  return AddressForm;
}(_react.Component);

AddressForm.propTypes = {
  /**
   * Place holder for Address Name field.
   */
  addressNamePlaceholder: _propTypes.default.string,

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
     * Pass either the Reaction Checkbox component or your own component that is
     * compatible with ReactoForm.
     */
    Checkbox: _utils.CustomPropTypes.component.isRequired,

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
    TextInput: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Select component or your own component that is
     * compatible with ReactoForm.
     */
    Select: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction PhoneNumberInput component or your own component that is
     * compatible with ReactoForm.
     */
    PhoneNumberInput: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction RegionInput component or your own component that is
     * compatible with ReactoForm.
     */
    RegionInput: _utils.CustomPropTypes.component.isRequired
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
   * Enable when using the form on a dark background, disabled by default
   */
  isOnDarkBackground: _propTypes.default.bool,

  /**
   * If true, typing in address fields is disabled
   */
  isReadOnly: _propTypes.default.bool,

  /**
   * Pass true if the address is in the process of being saved.
   * While true, typing in address fields is disabled.
   */
  isSaving: _propTypes.default.bool,

  /**
   * Locale options to populate the forms country and region fields
   */
  locales: _propTypes.default.objectOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    native: _propTypes.default.string,
    phone: _propTypes.default.string,
    continent: _propTypes.default.string,
    capital: _propTypes.default.string,
    currency: _propTypes.default.string,
    languages: _propTypes.default.string,
    states: _propTypes.default.objectOf(_propTypes.default.shape({
      name: _propTypes.default.string
    }))
  })),

  /**
   * Form name
   */
  name: _propTypes.default.string,

  /**
   * Cancel event callback
   */
  onCancel: _propTypes.default.func,

  /**
   * OnChange event callback
   */
  onChange: _propTypes.default.func,

  /**
   * Form submit event callback
   */
  onSubmit: _propTypes.default.func,

  /**
   * Should the AddressForm show the "Address Names" field.
   */
  shouldShowAddressNameField: _propTypes.default.bool,

  /**
   * Should the AddressForm show the "Is Commercial Address" field.
   */
  shouldShowIsCommercialField: _propTypes.default.bool,

  /**
   * Validator method
   */
  validator: _propTypes.default.func,

  /**
   * Address object to be edited
   */
  value: _utils.CustomPropTypes.address
};
AddressForm.defaultProps = {
  addressNamePlaceholder: "Address Name",
  errors: [],
  locales: {},
  isOnDarkBackground: false,
  isReadOnly: false,
  isSaving: false,
  name: "address",
  onCancel: function onCancel() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  shouldShowAddressNameField: false,
  shouldShowIsCommercialField: false,
  validator: (0, _utils.getRequiredValidator)("country", "fullName", "address1", "city", "phone", "postal", "region"),
  value: {
    addressName: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    fullName: "",
    postal: "",
    region: "",
    phone: "",
    isCommercial: false
  }
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(AddressForm)); // auto-add i18n


exports.default = _default;