"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es6.array.find");

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactoForm = require("reacto-form");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var Title = _styledComponents.default.h3.withConfig({
  displayName: "FulfillmentOptionsCheckoutAction__Title",
  componentId: "sc-1539sll-0"
})(["", ""], (0, _utils.addTypographyStyles)("FulfillmentOptionsCheckoutActionTitle", "subheadingTextBold"));

var FulfillmentOption = _styledComponents.default.span.withConfig({
  displayName: "FulfillmentOptionsCheckoutAction__FulfillmentOption",
  componentId: "sc-1539sll-1"
})(["", ""], (0, _utils.addTypographyStyles)("FulfillmentOptionsCheckoutActionSelectedOption", "bodyText"));

var EmptyMessage = _styledComponents.default.span.withConfig({
  displayName: "FulfillmentOptionsCheckoutAction__EmptyMessage",
  componentId: "sc-1539sll-2"
})(["", ""], (0, _utils.addTypographyStyles)("FulfillmentOptionsCheckoutActionEmptyMessage", "bodyText"));

var FulfillmentOptionShape = _propTypes.default.shape({
  fulfillmentMethod: _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    displayName: _propTypes.default.string.isRequired
  }),
  price: _propTypes.default.shape({
    amount: _propTypes.default.number.isRequired,
    displayAmount: _propTypes.default.string.isRequired
  })
});

var FulfillmentOptionsCheckoutAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FulfillmentOptionsCheckoutAction, _Component);

  function FulfillmentOptionsCheckoutAction() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FulfillmentOptionsCheckoutAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FulfillmentOptionsCheckoutAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var selectedFulfillmentOptionId, availableFulfillmentOptions, selectedFulfillmentOption, onSubmit;
        return _regenerator.default.wrap(function _callee$(_context) {
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

  (0, _createClass2.default)(FulfillmentOptionsCheckoutAction, [{
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
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Title, null, stepNumber, ". ", label), alert ? _react.default.createElement(InlineAlert, alert) : "", availableFulfillmentOptions && availableFulfillmentOptions.length ? _react.default.createElement(_reactoForm.Form, {
        ref: function ref(formEl) {
          _this2._fulfillmentOptionForm = formEl;
        },
        onSubmit: this.handleSubmit,
        value: {
          selectedFulfillmentOptionId: this.selectedOptionId
        }
      }, _react.default.createElement(SelectableList, {
        isBordered: true,
        isSaving: isSaving,
        name: "selectedFulfillmentOptionId",
        onChange: this.handleChange,
        options: this.mapFulfillmentOptions(availableFulfillmentOptions)
      })) : _react.default.createElement(EmptyMessage, null, "No fulfillment methods"));
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
      return _react.default.createElement(FulfillmentOption, null, selectedFulfillmentOption.fulfillmentMethod.displayName, " \u2022 ", selectedFulfillmentOption.price.displayAmount);
    }
  }]);
  return FulfillmentOptionsCheckoutAction;
}(_react.Component);

FulfillmentOptionsCheckoutAction.propTypes = {
  /**
   * Alert object provides alert into to InlineAlert.
   */
  alert: _utils.CustomPropTypes.alert,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction [`SelectableList`](#!/SelectableList) component or your own component that
     * accepts compatible props.
     */
    SelectableList: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction InlineAlert component or your own component that
     * accepts compatible props.
     */
    InlineAlert: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Checkout data needed for form
   */
  fulfillmentGroup: _propTypes.default.shape({
    availableFulfillmentOptions: _propTypes.default.arrayOf(FulfillmentOptionShape).isRequired,
    selectedFulfillmentOption: FulfillmentOptionShape
  }).isRequired,

  /**
   * Is the fulfillment option being saved
   */
  isSaving: _propTypes.default.bool,

  /**
   * Label of workflow step
   */
  label: _propTypes.default.string.isRequired,

  /**
   * When action is ready for save call this prop method to
   * enable the save button with in the `CheckoutActions`
   */
  onReadyForSaveChange: _propTypes.default.func,

  /**
   * When an action form passes validation and submits
   * the value will be passed to this callback
   * this function needs to return a Promise
   * if being used with reacto-form
   */
  onSubmit: _propTypes.default.func,

  /**
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number.isRequired
};
FulfillmentOptionsCheckoutAction.defaultProps = {
  isSaving: false,
  onReadyForSaveChange: function onReadyForSaveChange() {}
};

var _default = (0, _componentsContext.withComponents)(FulfillmentOptionsCheckoutAction);

exports.default = _default;