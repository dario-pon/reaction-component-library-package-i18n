"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var AddNewItemAction = _styledComponents.default.div.withConfig({
  displayName: "AccordionFormList__AddNewItemAction",
  componentId: "dore4o-0"
})(["border-color:", ";border-style:", ";border-width:", ";border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-top-width:", ";box-sizing:border-box;color:inherit;overflow:hidden;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.applyTheme)("Accordion.borderColor"), (0, _utils.applyTheme)("Accordion.borderStyle"), (0, _utils.applyTheme)("Accordion.borderWidth"), (0, _utils.applyTheme)("Accordion.borderRadius"), (0, _utils.applyTheme)("Accordion.borderRadius"), function (props) {
  return props.listCount > 0 ? 0 : (0, _utils.applyTheme)("Accordion.borderWidth")(props);
}, (0, _utils.applyTheme)("AccordionFormList.addActionPaddingBottom"), (0, _utils.applyTheme)("AccordionFormList.addActionPaddingLeft"), (0, _utils.applyTheme)("AccordionFormList.addActionPaddingRight"), (0, _utils.applyTheme)("AccordionFormList.addActionPaddingTop"));

var AddNewItemActionButton = _styledComponents.default.div.withConfig({
  displayName: "AccordionFormList__AddNewItemActionButton",
  componentId: "dore4o-1"
})(["", ";color:", ";cursor:pointer;display:table;&:hover{color:", ";svg{color:inherit !important;}}"], (0, _utils.addTypographyStyles)("ActionButton", "labelText"), (0, _utils.applyTheme)("AccordionFormList.actionButtonColor"), (0, _utils.applyTheme)("AccordionFormList.actionButtonHoverColor"));

var AddNewItemActionIcon = _styledComponents.default.span.withConfig({
  displayName: "AccordionFormList__AddNewItemActionIcon",
  componentId: "dore4o-2"
})(["color:inherit;height:", ";margin:0;margin-right:", ";width:", ";svg{color:", ";fill:currentColor;height:1em;width:1em;vertical-align:middle;}"], (0, _utils.applyTheme)("AccordionFormList.actionButtonIconHeight"), (0, _utils.applyTheme)("AccordionFormList.actionButtonIconMarginRight"), (0, _utils.applyTheme)("AccordionFormList.actionButtonIconWidth"), (0, _utils.applyTheme)("AccordionFormList.actionButtonIconColor"));

var FormActions = _styledComponents.default.div.withConfig({
  displayName: "AccordionFormList__FormActions",
  componentId: "dore4o-3"
})(["display:flex;justify-content:flex-end;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";> div:last-of-type{margin-left:", ";}"], (0, _utils.applyTheme)("AccordionFormList.actionPaddingBottom"), (0, _utils.applyTheme)("AccordionFormList.actionPaddingLeft"), (0, _utils.applyTheme)("AccordionFormList.actionPaddingRight"), (0, _utils.applyTheme)("AccordionFormList.actionPaddingTop"), (0, _utils.applyTheme)("AccordionFormList.spaceBetweenActiveActionButtons"));

var FormActionDelete = _styledComponents.default.div.withConfig({
  displayName: "AccordionFormList__FormActionDelete",
  componentId: "dore4o-4"
})(["flex:1 1 auto;> div{border:none;&:hover{background-color:transparent;color:", ";}}"], (0, _utils.applyTheme)("AccordionFormList.actionDeleteButtonHoverColor"));

var ENTRY = "entry";
var LIST = "list";

var AccordionFormList =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AccordionFormList, _Component);

  function AccordionFormList() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AccordionFormList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AccordionFormList)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  (0, _createClass2.default)(AccordionFormList, [{
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
      return _react.default.createElement(_react.Fragment, null, items && items.map(function (_ref) {
        var detail = _ref.detail,
            id = _ref.id,
            itemEditFormProps = _ref.itemEditFormProps,
            label = _ref.label;
        return _react.default.createElement(Accordion, {
          key: id,
          label: label,
          detail: detail,
          ref: function ref(el) {
            _this2._refs["accordion_".concat(id)] = el;
          }
        }, _react.default.createElement(ItemEditForm, (0, _extends2.default)({}, itemEditFormProps, {
          ref: function ref(el) {
            _this2._refs["editForm_".concat(id)] = el;
          }
        })), _react.default.createElement(FormActions, null, _react.default.createElement(FormActionDelete, null, _react.default.createElement(Button, {
          actionType: "secondaryDanger",
          isTextOnlyNoPadding: true,
          isShortHeight: true,
          onClick: function onClick() {
            _this2.handleDeleteItem(id);
          }
        }, deleteItemButtonText)), _react.default.createElement(Button, {
          actionType: "secondary",
          isShortHeight: true,
          onClick: function onClick() {
            _this2.toggleAccordionForItem(id);
          }
        }, "Cancel"), _react.default.createElement(Button, {
          onClick: function onClick() {
            return _this2._refs["editForm_".concat(id)].submit();
          },
          isShortHeight: true,
          isWaiting: isWaiting
        }, "Save Changes")));
      }), _react.default.createElement(AddNewItemAction, {
        listCount: items && items.length
      }, _react.default.createElement(AddNewItemActionButton, {
        onClick: this.handleAddClick,
        tabIndex: 0
      }, _react.default.createElement(AddNewItemActionIcon, null, iconPlus), addNewItemButtonText)));
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
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(ItemAddForm, (0, _extends2.default)({}, itemAddFormProps, {
        ref: function ref(el) {
          _this3._addItemForm = el;
        }
      })), _react.default.createElement(FormActions, null, _react.default.createElement(Button, {
        actionType: "secondary",
        onClick: this.handleEntryFormCancel
      }, "Cancel"), _react.default.createElement(Button, {
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
      return _react.default.createElement("div", {
        className: className
      }, status === LIST ? this.renderAccordion() : this.renderEntryForm());
    }
  }]);
  return AccordionFormList;
}(_react.Component);

AccordionFormList.propTypes = {
  /**
   * Text to show on the button for adding a new item to the list
   */
  addNewItemButtonText: _propTypes.default.string,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * If you've set up a components context using @reactioncommerce/components-context
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction Accordion component or your own component that
     * accepts compatible props.
     */
    Accordion: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction iconPlus component or your own component that
     * accepts compatible props.
     */
    iconPlus: _propTypes.default.node.isRequired,

    /**
     * The form component to render when adding a new item. It must have a
     * "submit" method on the instance or forward "ref" to a component that does.
     */
    ItemAddForm: _utils.CustomPropTypes.component.isRequired,

    /**
     * The form component to render when editing an item. It must have a
     * "submit" method on the instance or forward "ref" to a component that does.
     */
    ItemEditForm: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Text to show on the button for deleting an item from the list
   */
  deleteItemButtonText: _propTypes.default.string,

  /**
   * Text to show on the button for submitting the new item entry form
   */
  entryFormSubmitButtonText: _propTypes.default.string,

  /**
   * Is some async operation happening? Puts buttons into waiting state
   */
  isWaiting: _propTypes.default.bool,

  /**
   * Arbitrary props to pass to ItemAddForm instance
   */
  itemAddFormProps: _propTypes.default.object,

  /**
   * The list of items to show accordion edit forms for
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * Accordion detail
     */
    detail: _propTypes.default.string,

    /**
     * A unique ID
     */
    id: _propTypes.default.string.isRequired,

    /**
     * Arbitrary props to pass to ItemEditForm instance
     */
    itemEditFormProps: _propTypes.default.object,

    /**
     * Accordion label
     */
    label: _propTypes.default.string.isRequired
  })),

  /**
   * Handles item deletion from list
   */
  onItemDeleted: _propTypes.default.func
};
AccordionFormList.defaultProps = {
  addNewItemButtonText: "Add an item",
  deleteItemButtonText: "Delete this item",
  entryFormSubmitButtonText: "Add item",
  isWaiting: false,
  onItemDeleted: function onItemDeleted() {}
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(AccordionFormList)); // auto-add i18n


exports.default = _default;