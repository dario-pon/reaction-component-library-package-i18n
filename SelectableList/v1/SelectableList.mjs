import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes, applyTheme } from "../../utils";
var StyledListAction = styled.div.withConfig({
  displayName: "SelectableList__StyledListAction",
  componentId: "jnbusj-0"
})(["align-options:center;box-sizing:border-box;display:flex;height:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";@media (max-width:768px){height:", ";}"], applyTheme("SelectableList.height"), applyTheme("SelectableList.itemPaddingBottom"), applyTheme("SelectableList.itemPaddingLeft"), applyTheme("SelectableList.itemPaddingRight"), applyTheme("SelectableList.itemPaddingTop"), applyTheme("SelectableList.heightMobile"));
var BorderedListAction = styled(StyledListAction).withConfig({
  displayName: "SelectableList__BorderedListAction",
  componentId: "jnbusj-1"
})(["border-bottom-color:", ";border-bottom-style:", ";border-bottom-width:", ";border-left-color:", ";border-left-style:", ";border-left-width:", ";border-right-color:", ";border-right-style:", ";border-right-width:", ";"], applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"));
var StyledWrapper = styled.div.withConfig({
  displayName: "SelectableList__StyledWrapper",
  componentId: "jnbusj-2"
})(["padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], applyTheme("SelectableList.itemPaddingBottom"), applyTheme("SelectableList.itemPaddingLeft"), applyTheme("SelectableList.itemPaddingRight"), applyTheme("SelectableList.itemPaddingTop"));
var StyledList = styled.div.withConfig({
  displayName: "SelectableList__StyledList",
  componentId: "jnbusj-3"
})(["width:100%;fieldset{border-color:transparent;margin:0;padding:0;}"]);
var BorderedList = styled(StyledList).withConfig({
  displayName: "SelectableList__BorderedList",
  componentId: "jnbusj-4"
})(["fieldset{border-bottom:none;border-left:none;border-right:none;border-top-color:", ";border-top-left-radius:", ";border-top-right-radius:", ";border-top-style:", ";border-top-width:", ";}> *:last-child{border-bottom-right-radius:", ";border-bottom-left-radius:", ";div:last-child{border-bottom-right-radius:", ";border-bottom-left-radius:", ";}}"], applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderRadius"), applyTheme("SelectableList.borderRadius"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.borderRadius"), applyTheme("SelectableList.borderRadius"), applyTheme("SelectableList.borderRadius"), applyTheme("SelectableList.borderRadius"));
var BorderedWrapper = styled.div.withConfig({
  displayName: "SelectableList__BorderedWrapper",
  componentId: "jnbusj-5"
})(["border-bottom-color:", ";border-bottom-style:", ";border-bottom-width:", ";border-left-color:", ";border-left-style:", ";border-left-width:", ";border-right-color:", ";border-right-style:", ";border-right-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";> *:last-child{border-bottom-left-radius:", ";border-bottom-right-radius:", ";}"], applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.itemPaddingBottom"), applyTheme("SelectableList.itemPaddingLeft"), applyTheme("SelectableList.itemPaddingRight"), applyTheme("SelectableList.itemPaddingTop"), applyTheme("SelectableList.borderRadius"), applyTheme("SelectableList.borderRadius"));
var HorizontalList = styled.div.withConfig({
  displayName: "SelectableList__HorizontalList",
  componentId: "jnbusj-6"
})(["display:flex;"]);
var HorizontalWrapper = styled.div.withConfig({
  displayName: "SelectableList__HorizontalWrapper",
  componentId: "jnbusj-7"
})(["border-left-color:", ";border-left-style:", ";border-left-width:", ";flex:1 1 auto;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";&:first-of-type{border-left:none;padding-right:", ";}&:last-of-type{padding-left:", ";}"], applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.horizontalItemPaddingBottom"), applyTheme("SelectableList.horizontalItemPaddingLeft"), applyTheme("SelectableList.horizontalItemPaddingRight"), applyTheme("SelectableList.horizontalItemPaddingTop"), applyTheme("SelectableList.horizontalFirstItemPaddingRight"), applyTheme("SelectableList.horizontalLastItemPaddingLeft"));

var SelectableList =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectableList, _Component);

  function SelectableList(props) {
    var _this;

    _classCallCheck(this, SelectableList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectableList).call(this, props));

    _this.onChange = function (isChecked, value) {
      if (isChecked) {
        _this.setValue(value);
      }
    };

    _this.state = {
      value: props.value || ""
    };
    return _this;
  } // eslint-disable-next-line camelcase


  _createClass(SelectableList, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.handleChange(this.props.value || "");
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = this.props.value;
      var nextValue = nextProps.value; // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.

      if (nextValue && value !== nextValue) {
        this.setState({
          value: nextValue || ""
        });
        this.handleChange(nextValue || "");
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value
      });
      this.handleChange(value);
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      this.setValue(this.props.value || "");
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      if (this.lastValue === value) return;
      this.lastValue = value;
      var _this$props = this.props,
          onChanging = _this$props.onChanging,
          onChange = _this$props.onChange;
      onChanging(value);
      onChange(value);
    } // Input is dirty if value prop doesn't match value state. Whenever a changed
    // value prop comes in, we reset state to that, thus becoming clean.

  }, {
    key: "isDirty",
    value: function isDirty() {
      return this.state.value !== this.props.value;
    }
  }, {
    key: "renderBorderedList",
    value: function renderBorderedList() {
      var _this2 = this;

      var _this$props2 = this.props,
          options = _this$props2.options,
          listAction = _this$props2.listAction,
          isLeftAligned = _this$props2.isLeftAligned,
          isReadOnly = _this$props2.isReadOnly,
          SelectableItem = _this$props2.components.SelectableItem;
      return React.createElement(BorderedList, null, React.createElement("fieldset", null, options.map(function (option) {
        return React.createElement(BorderedWrapper, {
          key: option.id
        }, React.createElement(SelectableItem, {
          detail: option.detail,
          icon: option.icon,
          isChecked: option.value === _this2.state.value,
          isLeftAligned: isLeftAligned,
          isReadOnly: isReadOnly,
          label: option.label,
          onChange: _this2.onChange,
          value: option.value
        }));
      })), listAction ? React.createElement(BorderedListAction, null, listAction) : null);
    }
  }, {
    key: "renderVerticalList",
    value: function renderVerticalList() {
      var _this3 = this;

      var _this$props3 = this.props,
          options = _this$props3.options,
          listAction = _this$props3.listAction,
          isLeftAligned = _this$props3.isLeftAligned,
          isReadOnly = _this$props3.isReadOnly,
          SelectableItem = _this$props3.components.SelectableItem;
      return React.createElement(StyledList, null, React.createElement("fieldset", null, options.map(function (option) {
        return React.createElement(StyledWrapper, {
          key: option.id
        }, React.createElement(SelectableItem, {
          detail: option.detail,
          icon: option.icon,
          isChecked: option.value === _this3.state.value,
          isLeftAligned: isLeftAligned,
          isReadOnly: isReadOnly,
          label: option.label,
          onChange: _this3.onChange,
          value: option.value
        }));
      })), listAction ? React.createElement(StyledListAction, null, listAction) : null);
    }
  }, {
    key: "renderHorizontalList",
    value: function renderHorizontalList() {
      var _this4 = this;

      var _this$props4 = this.props,
          options = _this$props4.options,
          listAction = _this$props4.listAction,
          isHorizontal = _this$props4.isHorizontal,
          isReadOnly = _this$props4.isReadOnly,
          SelectableItem = _this$props4.components.SelectableItem;
      return React.createElement(HorizontalList, null, options.map(function (option) {
        return React.createElement(HorizontalWrapper, {
          key: option.id
        }, React.createElement(SelectableItem, {
          detail: option.detail,
          icon: option.icon,
          isChecked: option.value === _this4.state.value,
          isStacked: isHorizontal,
          isReadOnly: isReadOnly,
          label: option.label,
          onChange: _this4.onChange,
          value: option.value
        }));
      }), listAction ? React.createElement(StyledListAction, null, listAction) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          className = _this$props5.className,
          isBordered = _this$props5.isBordered,
          isHorizontal = _this$props5.isHorizontal;
      return React.createElement("div", {
        className: className
      }, // eslint-disable-next-line
      isHorizontal ? this.renderHorizontalList() : isBordered ? this.renderBorderedList() : this.renderVerticalList());
    }
  }]);

  return SelectableList;
}(Component);

SelectableList.isFormInput = true;
SelectableList.propTypes = {
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
     * Pass either the Reaction `SelectableItem` component or your own component
     * that takes `options` props and uses them to render a single item.
     */
    SelectableItem: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Adds borders to the list and each item
   */
  isBordered: PropTypes.bool,

  /**
   * Displays SelectableList horizontaly
   */
  isHorizontal: PropTypes.bool,

  /**
   * Is Left Aligned
   */
  isLeftAligned: PropTypes.bool,

  /**
   * Adds styles and blocks users from selecting items
   */
  isReadOnly: PropTypes.bool,

  /**
   * An extra row at the bottom of the list for an action, like Add an address
   */
  listAction: PropTypes.node,

  /**
   * The name for the SelectableList radio group. Each radio group on a page should have a unique name.
   */
  name: PropTypes.string.isRequired,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChange: PropTypes.func,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChanging: PropTypes.func,

  /**
   * Options, an Array of SelectableItems
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    /**
       * Optional text, SVG or element displayed on the right-hand side
       */
    detail: PropTypes.node,

    /**
       * Optional icon (SVG) displayed on the left-hand side
       */
    icon: PropTypes.node,

    /**
       * The item ID. Each option must have a unique ID
       */
    id: PropTypes.string.isRequired,

    /**
       * Label
       */
    label: PropTypes.string.isRequired,

    /**
       * Value of this option, which will be the value passed back from SelectableList if
       * this option is selected.
       */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
  })).isRequired,

  /**
   * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
   * the Composable Forms spec will pass this automatically.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};
SelectableList.defaultProps = {
  isBordered: false,
  isHorizontal: false,
  isLeftAligned: false,
  isReadOnly: false,
  onChange: function onChange() {},
  onChanging: function onChanging() {}
};
export default withComponents(SelectableList);