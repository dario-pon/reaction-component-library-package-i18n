import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles, CustomPropTypes } from "../../utils";
var AddNewItemAction = styled.div.withConfig({
  displayName: "AccordionFormList__AddNewItemAction",
  componentId: "dore4o-0"
})(["border-color:", ";border-style:", ";border-width:", ";border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-top-width:", ";box-sizing:border-box;color:inherit;overflow:hidden;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], applyTheme("Accordion.borderColor"), applyTheme("Accordion.borderStyle"), applyTheme("Accordion.borderWidth"), applyTheme("Accordion.borderRadius"), applyTheme("Accordion.borderRadius"), function (props) {
  return props.listCount > 0 ? 0 : applyTheme("Accordion.borderWidth")(props);
}, applyTheme("AccordionFormList.addActionPaddingBottom"), applyTheme("AccordionFormList.addActionPaddingLeft"), applyTheme("AccordionFormList.addActionPaddingRight"), applyTheme("AccordionFormList.addActionPaddingTop"));
var AddNewItemActionButton = styled.div.withConfig({
  displayName: "AccordionFormList__AddNewItemActionButton",
  componentId: "dore4o-1"
})(["", ";color:", ";cursor:pointer;display:table;&:hover{color:", ";svg{color:inherit !important;}}"], addTypographyStyles("ActionButton", "labelText"), applyTheme("AccordionFormList.actionButtonColor"), applyTheme("AccordionFormList.actionButtonHoverColor"));
var AddNewItemActionIcon = styled.span.withConfig({
  displayName: "AccordionFormList__AddNewItemActionIcon",
  componentId: "dore4o-2"
})(["color:inherit;height:", ";margin:0;margin-right:", ";width:", ";svg{color:", ";fill:currentColor;height:1em;width:1em;vertical-align:middle;}"], applyTheme("AccordionFormList.actionButtonIconHeight"), applyTheme("AccordionFormList.actionButtonIconMarginRight"), applyTheme("AccordionFormList.actionButtonIconWidth"), applyTheme("AccordionFormList.actionButtonIconColor"));
var FormActions = styled.div.withConfig({
  displayName: "AccordionFormList__FormActions",
  componentId: "dore4o-3"
})(["display:flex;justify-content:flex-end;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";> div:last-of-type{margin-left:", ";}"], applyTheme("AccordionFormList.actionPaddingBottom"), applyTheme("AccordionFormList.actionPaddingLeft"), applyTheme("AccordionFormList.actionPaddingRight"), applyTheme("AccordionFormList.actionPaddingTop"), applyTheme("AccordionFormList.spaceBetweenActiveActionButtons"));
var FormActionDelete = styled.div.withConfig({
  displayName: "AccordionFormList__FormActionDelete",
  componentId: "dore4o-4"
})(["flex:1 1 auto;> div{border:none;&:hover{background-color:transparent;color:", ";}}"], applyTheme("AccordionFormList.actionDeleteButtonHoverColor"));
var ENTRY = "entry";
var LIST = "list";

var AccordionFormList =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionFormList, _Component);

  function AccordionFormList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionFormList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionFormList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      status: LIST
    };
    _this._refs = {};

    _this.handleDeleteItem = function (itemId) {
      var onItemDeleted = _this.props.onItemDeleted;
      onItemDeleted(itemId);
    };

    _this.handleAddClick = function () {
      _this.showEntryForm();
    };

    _this.handleEntryFormCancel = function () {
      _this.showList();
    };

    return _this;
  }

  _createClass(AccordionFormList, [{
    key: "showEntryForm",
    value: function showEntryForm() {
      this.setState({
        status: ENTRY
      });
    }
  }, {
    key: "showList",
    value: function showList() {
      this.setState({
        status: LIST
      });
    }
  }, {
    key: "toggleAccordionForItem",
    value: function toggleAccordionForItem(itemId) {
      this._refs["accordion_".concat(itemId)].toggle();
    } //
    // Render Methods
    //

  }, {
    key: "renderAccordion",
    value: function renderAccordion() {
      var _this2 = this;

      var _this$props = this.props,
          addNewItemButtonText = _this$props.addNewItemButtonText,
          _this$props$component = _this$props.components,
          Accordion = _this$props$component.Accordion,
          Button = _this$props$component.Button,
          iconPlus = _this$props$component.iconPlus,
          ItemEditForm = _this$props$component.ItemEditForm,
          deleteItemButtonText = _this$props.deleteItemButtonText,
          isWaiting = _this$props.isWaiting,
          items = _this$props.items;
      return React.createElement(Fragment, null, items && items.map(function (_ref) {
        var detail = _ref.detail,
            id = _ref.id,
            itemEditFormProps = _ref.itemEditFormProps,
            label = _ref.label;
        return React.createElement(Accordion, {
          key: id,
          label: label,
          detail: detail,
          ref: function ref(el) {
            _this2._refs["accordion_".concat(id)] = el;
          }
        }, React.createElement(ItemEditForm, _extends({}, itemEditFormProps, {
          ref: function ref(el) {
            _this2._refs["editForm_".concat(id)] = el;
          }
        })), React.createElement(FormActions, null, React.createElement(FormActionDelete, null, React.createElement(Button, {
          actionType: "secondaryDanger",
          isTextOnlyNoPadding: true,
          isShortHeight: true,
          onClick: function onClick() {
            _this2.handleDeleteItem(id);
          }
        }, deleteItemButtonText)), React.createElement(Button, {
          actionType: "secondary",
          isShortHeight: true,
          onClick: function onClick() {
            _this2.toggleAccordionForItem(id);
          }
        }, "Cancel"), React.createElement(Button, {
          onClick: function onClick() {
            return _this2._refs["editForm_".concat(id)].submit();
          },
          isShortHeight: true,
          isWaiting: isWaiting
        }, "Save Changes")));
      }), React.createElement(AddNewItemAction, {
        listCount: items && items.length
      }, React.createElement(AddNewItemActionButton, {
        onClick: this.handleAddClick,
        tabIndex: 0
      }, React.createElement(AddNewItemActionIcon, null, iconPlus), addNewItemButtonText)));
    }
  }, {
    key: "renderEntryForm",
    value: function renderEntryForm() {
      var _this3 = this;

      var _this$props2 = this.props,
          _this$props2$componen = _this$props2.components,
          Button = _this$props2$componen.Button,
          ItemAddForm = _this$props2$componen.ItemAddForm,
          entryFormSubmitButtonText = _this$props2.entryFormSubmitButtonText,
          isWaiting = _this$props2.isWaiting,
          itemAddFormProps = _this$props2.itemAddFormProps;
      return React.createElement(Fragment, null, React.createElement(ItemAddForm, _extends({}, itemAddFormProps, {
        ref: function ref(el) {
          _this3._addItemForm = el;
        }
      })), React.createElement(FormActions, null, React.createElement(Button, {
        actionType: "secondary",
        onClick: this.handleEntryFormCancel
      }, "Cancel"), React.createElement(Button, {
        onClick: function onClick() {
          return _this3._addItemForm.submit();
        },
        isWaiting: isWaiting
      }, entryFormSubmitButtonText)));
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var status = this.state.status;
      return React.createElement("div", {
        className: className
      }, status === LIST ? this.renderAccordion() : this.renderEntryForm());
    }
  }]);

  return AccordionFormList;
}(Component);

AccordionFormList.propTypes = {
  /**
   * Text to show on the button for adding a new item to the list
   */
  addNewItemButtonText: PropTypes.string,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * If you've set up a components context using @reactioncommerce/components-context
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction Accordion component or your own component that
     * accepts compatible props.
     */
    Accordion: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction iconPlus component or your own component that
     * accepts compatible props.
     */
    iconPlus: PropTypes.node.isRequired,

    /**
     * The form component to render when adding a new item. It must have a
     * "submit" method on the instance or forward "ref" to a component that does.
     */
    ItemAddForm: CustomPropTypes.component.isRequired,

    /**
     * The form component to render when editing an item. It must have a
     * "submit" method on the instance or forward "ref" to a component that does.
     */
    ItemEditForm: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Text to show on the button for deleting an item from the list
   */
  deleteItemButtonText: PropTypes.string,

  /**
   * Text to show on the button for submitting the new item entry form
   */
  entryFormSubmitButtonText: PropTypes.string,

  /**
   * Is some async operation happening? Puts buttons into waiting state
   */
  isWaiting: PropTypes.bool,

  /**
   * Arbitrary props to pass to ItemAddForm instance
   */
  itemAddFormProps: PropTypes.object,

  /**
   * The list of items to show accordion edit forms for
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Accordion detail
     */
    detail: PropTypes.string,

    /**
     * A unique ID
     */
    id: PropTypes.string.isRequired,

    /**
     * Arbitrary props to pass to ItemEditForm instance
     */
    itemEditFormProps: PropTypes.object,

    /**
     * Accordion label
     */
    label: PropTypes.string.isRequired
  })),

  /**
   * Handles item deletion from list
   */
  onItemDeleted: PropTypes.func
};
AccordionFormList.defaultProps = {
  addNewItemButtonText: "Add an item",
  deleteItemButtonText: "Delete this item",
  entryFormSubmitButtonText: "Add item",
  isWaiting: false,
  onItemDeleted: function onItemDeleted() {}
};
export default i18n.withTranslation()(withComponents(AccordionFormList)); // auto-add i18n