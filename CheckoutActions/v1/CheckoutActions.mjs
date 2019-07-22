import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import "core-js/modules/es6.array.find-index";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import "core-js/modules/es6.array.find";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import isEqual from "lodash.isequal";
import { applyTheme, CustomPropTypes } from "../../utils";
var Action = styled.div.withConfig({
  displayName: "CheckoutActions__Action",
  componentId: "sc-1rn7obm-0"
})(["border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:0;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";&:first-of-type{border-top-width:", ";}&:last-of-type{border-bottom-width:0;}"], applyTheme("CheckoutActions.borderBetweenColor"), applyTheme("CheckoutActions.borderBetweenWidth"), applyTheme("CheckoutActions.borderLeftColor"), applyTheme("CheckoutActions.borderLeftWidth"), applyTheme("CheckoutActions.borderRightColor"), applyTheme("CheckoutActions.borderRightWidth"), applyTheme("CheckoutActions.borderBetweenColor"), applyTheme("CheckoutActions.itemPaddingBottom"), applyTheme("CheckoutActions.itemPaddingLeft"), applyTheme("CheckoutActions.itemPaddingRight"), applyTheme("CheckoutActions.itemPaddingTop"), applyTheme("CheckoutActions.borderBetweenWidth"));
var FormActions = styled.div.withConfig({
  displayName: "CheckoutActions__FormActions",
  componentId: "sc-1rn7obm-1"
})(["display:flex;justify-content:flex-end;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";> div:last-of-type{margin-left:", ";}"], applyTheme("CheckoutActions.itemPaddingBottom"), applyTheme("CheckoutActions.itemPaddingLeft"), applyTheme("CheckoutActions.itemPaddingRight"), applyTheme("CheckoutActions.itemPaddingTop"), applyTheme("CheckoutActions.spaceBetweenActiveActionButtons"));
var PlaceOrderButtonContainer = styled.div.withConfig({
  displayName: "CheckoutActions__PlaceOrderButtonContainer",
  componentId: "sc-1rn7obm-2"
})(["margin:0 auto !important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:", ";width:", ";"], applyTheme("CheckoutActions.spaceAbovePlaceOrderButton"), applyTheme("CheckoutActions.placeOrderButtonWidth"));

var CheckoutActions =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckoutActions, _Component);

  function CheckoutActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckoutActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckoutActions)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    _this._refs = {};

    _this.handleActionSubmit =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(id, onSubmit, actionValue) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
      return status === "complete" ? React.createElement(CheckoutActionComplete, {
        key: id,
        label: completeLabel,
        content: component.renderComplete(props),
        onClickChangeButton: function onClickChangeButton() {
          _this.setStateForAction(id, {
            isActive: true
          });
        }
      }) : React.createElement("span", null);
    };

    _this.renderFormActions = function (action) {
      var _this$props = _this.props,
          actions = _this$props.actions,
          Button = _this$props.components.Button;

      var _this$getCurrentActio = _this.getCurrentActionByID(action.id),
          readyForSave = _this$getCurrentActio.readyForSave,
          isSaving = _this$getCurrentActio.isSaving;

      var lastStep = actions.length - 1 === _this.getCurrentActionIndex(action.id);

      var saveAndContinueButtons = React.createElement(React.Fragment, null, action.props.fulfillmentGroup && action.props.fulfillmentGroup.data.shippingAddress || action.id !== "1" ? React.createElement(Button, {
        actionType: "secondary",
        onClick: function onClick() {
          _this.setStateForAction(action.id, {
            isActive: false
          });
        }
      }, "Cancel") : "", React.createElement(Button, {
        onClick: function onClick() {
          return _this.actionSubmit(action.id);
        },
        isDisabled: !readyForSave,
        isWaiting: isSaving
      }, "Save and continue"));
      var placeOrderButton = React.createElement(PlaceOrderButtonContainer, null, React.createElement(Button, {
        onClick: function onClick() {
          return _this.actionSubmit(action.id);
        },
        actionType: "important",
        isWaiting: isSaving,
        isFullWidth: true
      }, isSaving ? "Placing your order..." : "Place your order"));
      return React.createElement(FormActions, null, lastStep ? placeOrderButton : saveAndContinueButtons);
    };

    _this.renderActiveAction = function (_ref4) {
      var Comp = _ref4.component,
          action = _objectWithoutProperties(_ref4, ["component"]);

      var _this$getCurrentActio2 = _this.getCurrentActionByID(action.id),
          isSaving = _this$getCurrentActio2.isSaving;

      return React.createElement(Fragment, null, React.createElement(Comp, _extends({}, action.props, {
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
      return React.createElement(Action, {
        key: action.id
      }, React.createElement(CheckoutAction, {
        activeLabel: activeLabel,
        activeStepElement: _this.renderActiveAction(action),
        completeLabel: completeLabel,
        completeStepElement: _this.renderCompleteAction(action),
        incompleteLabel: incompleteLabel,
        incompleteStepElement: React.createElement(CheckoutActionIncomplete, null),
        status: actionStatus,
        stepNumber: _this.getCurrentActionIndex(action.id) + 1
      }));
    };

    return _this;
  }

  _createClass(CheckoutActions, [{
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
      return React.createElement("div", {
        className: className
      }, actions.map(function (action) {
        return _this2.renderAction(action, activeActions);
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!isEqual(props.actions, state.previousActionsProp)) {
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
}(Component);

CheckoutActions.propTypes = {
  /**
   * Checkout actions is an array of action objects, the order of this array
   * will be the render order.
   */
  actions: PropTypes.arrayOf(PropTypes.shape({
    /**
       * Action id
       */
    id: PropTypes.string.isRequired,

    /**
       * Action label when active
       */
    activeLabel: PropTypes.string.isRequired,

    /**
       * The checkout action's active  component
       */
    component: CustomPropTypes.component.isRequired,

    /**
       * Action label when completed
       */
    completeLabel: PropTypes.string.isRequired,

    /**
       * Action label when incomplete
       */
    incompleteLabel: PropTypes.string.isRequired,

    /**
       * Callback function called after the active action submits.
       */
    onSubmit: PropTypes.func.isRequired,

    /**
       * Cart checkout data that the action needs to display.
       */
    props: PropTypes.object
  })),

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
     * Pass either the Reaction Button component or your own component that
     * accepts compatible props.
     */
    Button: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CheckoutAction component or your own component that
     * accepts compatible props.
     */
    CheckoutAction: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CheckoutActionComplete component or your own component that
     * accepts compatible props.
     */
    CheckoutActionComplete: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CheckoutActionIncomplete component or your own component that
     * accepts compatible props.
     */
    CheckoutActionIncomplete: CustomPropTypes.component.isRequired
  }).isRequired
};
CheckoutActions.defaultProps = {};
export default withComponents(CheckoutActions);