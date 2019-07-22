"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/es6.array.find-index");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

require("core-js/modules/es6.array.find");

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Action = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActions__Action",
  componentId: "sc-1rn7obm-0"
})(["border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:0;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";&:first-of-type{border-top-width:", ";}&:last-of-type{border-bottom-width:0;}"], (0, _utils.applyTheme)("CheckoutActions.borderBetweenColor"), (0, _utils.applyTheme)("CheckoutActions.borderBetweenWidth"), (0, _utils.applyTheme)("CheckoutActions.borderLeftColor"), (0, _utils.applyTheme)("CheckoutActions.borderLeftWidth"), (0, _utils.applyTheme)("CheckoutActions.borderRightColor"), (0, _utils.applyTheme)("CheckoutActions.borderRightWidth"), (0, _utils.applyTheme)("CheckoutActions.borderBetweenColor"), (0, _utils.applyTheme)("CheckoutActions.itemPaddingBottom"), (0, _utils.applyTheme)("CheckoutActions.itemPaddingLeft"), (0, _utils.applyTheme)("CheckoutActions.itemPaddingRight"), (0, _utils.applyTheme)("CheckoutActions.itemPaddingTop"), (0, _utils.applyTheme)("CheckoutActions.borderBetweenWidth"));

var FormActions = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActions__FormActions",
  componentId: "sc-1rn7obm-1"
})(["display:flex;justify-content:flex-end;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";> div:last-of-type{margin-left:", ";}"], (0, _utils.applyTheme)("CheckoutActions.itemPaddingBottom"), (0, _utils.applyTheme)("CheckoutActions.itemPaddingLeft"), (0, _utils.applyTheme)("CheckoutActions.itemPaddingRight"), (0, _utils.applyTheme)("CheckoutActions.itemPaddingTop"), (0, _utils.applyTheme)("CheckoutActions.spaceBetweenActiveActionButtons"));

var PlaceOrderButtonContainer = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActions__PlaceOrderButtonContainer",
  componentId: "sc-1rn7obm-2"
})(["margin:0 auto !important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:", ";width:", ";"], (0, _utils.applyTheme)("CheckoutActions.spaceAbovePlaceOrderButton"), (0, _utils.applyTheme)("CheckoutActions.placeOrderButtonWidth"));

var CheckoutActions =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CheckoutActions, _Component);

  function CheckoutActions() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CheckoutActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CheckoutActions)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    _this._refs = {};

    _this.handleActionSubmit =
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(id, onSubmit, actionValue) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setStateForAction(id, {
                  isActive: false,
                  isSaving: true
                });

                _context.next = 3;
                return onSubmit(actionValue);

              case 3:
                _this.setStateForAction(id, {
                  isSaving: false
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.actionSubmit = function (label) {
      _this._refs[label].submit();
    };

    _this.determineActiveActions = function () {
      var actions = _this.props.actions;
      var currentActions = _this.state.currentActions;
      var currentActiveActions = actions.reduce(function (activeList, _ref2) {
        var id = _ref2.id,
            status = _ref2.status;
        var currentAction = currentActions.find(function (action) {
          return action.id === id;
        });
        var isActive = currentAction.isActive;

        if (!activeList.length && status === "incomplete") {
          isActive = true;
        }

        if (isActive) {
          activeList.push(id);
        }

        return activeList;
      }, []);
      return currentActiveActions;
    };

    _this.renderCompleteAction = function (_ref3) {
      var id = _ref3.id,
          status = _ref3.status,
          completeLabel = _ref3.completeLabel,
          component = _ref3.component,
          props = _ref3.props;
      var CheckoutActionComplete = _this.props.components.CheckoutActionComplete;
      return status === "complete" ? _react.default.createElement(CheckoutActionComplete, {
        key: id,
        label: completeLabel,
        content: component.renderComplete(props),
        onClickChangeButton: function onClickChangeButton() {
          _this.setStateForAction(id, {
            isActive: true
          });
        }
      }) : _react.default.createElement("span", null);
    };

    _this.renderFormActions = function (action) {
      var _this$props = _this.props,
          actions = _this$props.actions,
          Button = _this$props.components.Button;

      var _this$getCurrentActio = _this.getCurrentActionByID(action.id),
          readyForSave = _this$getCurrentActio.readyForSave,
          isSaving = _this$getCurrentActio.isSaving;

      var lastStep = actions.length - 1 === _this.getCurrentActionIndex(action.id);

      var saveAndContinueButtons = _react.default.createElement(_react.default.Fragment, null, action.props.fulfillmentGroup && action.props.fulfillmentGroup.data.shippingAddress || action.id !== "1" ? _react.default.createElement(Button, {
        actionType: "secondary",
        onClick: function onClick() {
          _this.setStateForAction(action.id, {
            isActive: false
          });
        }
      }, "Cancel") : "", _react.default.createElement(Button, {
        onClick: function onClick() {
          return _this.actionSubmit(action.id);
        },
        isDisabled: !readyForSave,
        isWaiting: isSaving
      }, "Save and continue"));

      var placeOrderButton = _react.default.createElement(PlaceOrderButtonContainer, null, _react.default.createElement(Button, {
        onClick: function onClick() {
          return _this.actionSubmit(action.id);
        },
        actionType: "important",
        isWaiting: isSaving,
        isFullWidth: true
      }, isSaving ? "Placing your order..." : "Place your order"));

      return _react.default.createElement(FormActions, null, lastStep ? placeOrderButton : saveAndContinueButtons);
    };

    _this.renderActiveAction = function (_ref4) {
      var Comp = _ref4.component,
          action = (0, _objectWithoutProperties2.default)(_ref4, ["component"]);

      var _this$getCurrentActio2 = _this.getCurrentActionByID(action.id),
          isSaving = _this$getCurrentActio2.isSaving;

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Comp, (0, _extends2.default)({}, action.props, {
        onReadyForSaveChange: function onReadyForSaveChange(ready) {
          _this.setStateForAction(action.id, {
            readyForSave: ready
          });
        },
        isSaving: isSaving,
        ref: function ref(el) {
          _this._refs[action.id] = el;
        },
        label: action.activeLabel,
        stepNumber: _this.getCurrentActionIndex(action.id) + 1,
        onSubmit: function onSubmit(value) {
          return _this.handleActionSubmit(action.id, action.onSubmit, value);
        }
      })), _this.renderFormActions(action));
    };

    _this.renderAction = function (action, currentActiveActions) {
      var _this$props$component = _this.props.components,
          CheckoutAction = _this$props$component.CheckoutAction,
          CheckoutActionIncomplete = _this$props$component.CheckoutActionIncomplete;
      var isActive = currentActiveActions.find(function (_id) {
        return _id === action.id;
      });
      var actionStatus = isActive ? "active" : action.status;
      var activeLabel = action.activeLabel,
          completeLabel = action.completeLabel,
          incompleteLabel = action.incompleteLabel;
      return _react.default.createElement(Action, {
        key: action.id
      }, _react.default.createElement(CheckoutAction, {
        activeLabel: activeLabel,
        activeStepElement: _this.renderActiveAction(action),
        completeLabel: completeLabel,
        completeStepElement: _this.renderCompleteAction(action),
        incompleteLabel: incompleteLabel,
        incompleteStepElement: _react.default.createElement(CheckoutActionIncomplete, null),
        status: actionStatus,
        stepNumber: _this.getCurrentActionIndex(action.id) + 1
      }));
    };

    return _this;
  }

  (0, _createClass2.default)(CheckoutActions, [{
    key: "getCurrentActionIndex",
    value: function getCurrentActionIndex(id) {
      var currentActions = this.state.currentActions;
      return currentActions.findIndex(function (action) {
        return action.id === id;
      });
    }
  }, {
    key: "getCurrentActionByID",
    value: function getCurrentActionByID(id) {
      var currentActions = this.state.currentActions;
      return currentActions[this.getCurrentActionIndex(id)];
    }
  }, {
    key: "setStateForAction",
    value: function setStateForAction(id, stateChanges) {
      var currentActions = this.state.currentActions; // We are being careful to create a new array with new objects here to prevent
      // strange errors due to unintentional mutation of current state.

      var newCurrentActions = currentActions.map(function (currentAction) {
        var updates = currentAction.id === id ? stateChanges : {};
        return _objectSpread({}, currentAction, {}, updates);
      });
      this.setState({
        currentActions: newCurrentActions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          actions = _this$props2.actions;
      var activeActions = this.determineActiveActions();
      return _react.default.createElement("div", {
        className: className
      }, actions.map(function (action) {
        return _this2.renderAction(action, activeActions);
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!(0, _lodash.default)(props.actions, state.previousActionsProp)) {
        var _state$currentActions = state.currentActions,
            currentActions = _state$currentActions === void 0 ? [] : _state$currentActions;
        var actions = props.actions.map(function (_ref5) {
          var id = _ref5.id;
          var currentAction = currentActions.find(function (action) {
            return action.id === id;
          });

          var _ref6 = currentAction || {},
              _ref6$isActive = _ref6.isActive,
              isActive = _ref6$isActive === void 0 ? false : _ref6$isActive,
              _ref6$readyForSave = _ref6.readyForSave,
              readyForSave = _ref6$readyForSave === void 0 ? false : _ref6$readyForSave,
              _ref6$isSaving = _ref6.isSaving,
              isSaving = _ref6$isSaving === void 0 ? false : _ref6$isSaving;

          return {
            id: id,
            readyForSave: readyForSave,
            isSaving: isSaving,
            isActive: isActive
          };
        });
        return {
          currentActions: actions,
          previousActionsProp: props.actions
        };
      }

      return null;
    }
  }]);
  return CheckoutActions;
}(_react.Component);

CheckoutActions.propTypes = {
  /**
   * Checkout actions is an array of action objects, the order of this array
   * will be the render order.
   */
  actions: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * Action id
       */
    id: _propTypes.default.string.isRequired,

    /**
       * Action label when active
       */
    activeLabel: _propTypes.default.string.isRequired,

    /**
       * The checkout action's active  component
       */
    component: _utils.CustomPropTypes.component.isRequired,

    /**
       * Action label when completed
       */
    completeLabel: _propTypes.default.string.isRequired,

    /**
       * Action label when incomplete
       */
    incompleteLabel: _propTypes.default.string.isRequired,

    /**
       * Callback function called after the active action submits.
       */
    onSubmit: _propTypes.default.func.isRequired,

    /**
       * Cart checkout data that the action needs to display.
       */
    props: _propTypes.default.object
  })),

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
     * Pass either the Reaction Button component or your own component that
     * accepts compatible props.
     */
    Button: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CheckoutAction component or your own component that
     * accepts compatible props.
     */
    CheckoutAction: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CheckoutActionComplete component or your own component that
     * accepts compatible props.
     */
    CheckoutActionComplete: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CheckoutActionIncomplete component or your own component that
     * accepts compatible props.
     */
    CheckoutActionIncomplete: _utils.CustomPropTypes.component.isRequired
  }).isRequired
};
CheckoutActions.defaultProps = {};

var _default = (0, _componentsContext.withComponents)(CheckoutActions);

exports.default = _default;