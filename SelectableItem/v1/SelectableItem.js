"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "SelectableItem__StyledLabel",
  componentId: "sc-1mpw4vb-0"
})(["align-items:center;cursor:pointer;display:flex;", ""], function (props) {
  if (props.isStacked) {
    return (0, _utils.addTypographyStyles)("SelectableItemLabel", "labelTextBold");
  }

  return (0, _utils.addTypographyStyles)("SelectableItemLabel", "labelText");
});

var StyledRadioButton = _styledComponents.default.span.withConfig({
  displayName: "SelectableItem__StyledRadioButton",
  componentId: "sc-1mpw4vb-1"
})(["align-items:center;background-color:", ";border-radius:50%;border-color:", ";border-style:solid;border-width:", ";box-sizing:border-box;display:flex;flex-shrink:0;height:", ";justify-content:center;margin-bottom:0;margin-left:0;margin-right:", ";margin-top:0;width:", ";"], (0, _utils.applyTheme)("SelectableItemRadioButton.backgroundColor"), (0, _utils.applyTheme)("SelectableItemRadioButton.borderColor"), (0, _utils.applyTheme)("SelectableItemRadioButton.borderWidth"), (0, _utils.applyTheme)("SelectableItemRadioButton.size"), (0, _utils.applyTheme)("SelectableItemRadioButton.spacingToLabel"), (0, _utils.applyTheme)("SelectableItemRadioButton.size"));

var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "SelectableItem__StyledInput",
  componentId: "sc-1mpw4vb-2"
})(["border:0;clip:rect(0,0,0,0);cursor:pointer;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:visible;white-space:nowrap;width:1px;&:checked + ", " ", "::before{content:\" \";display:inline-block;position:relative;width:", ";height:", ";border-radius:50%;background-color:", ";}&:focus + ", " ", "{box-shadow:", ";outline:", "}&:disabled + ", " ", "{background-color:", ";}&:disabled + ", "{opacity:", ";}&:disabled + ", ":hover{cursor:", ";}"], StyledLabel, StyledRadioButton, (0, _utils.applyTheme)("SelectableItemRadioButton.checkSize"), (0, _utils.applyTheme)("SelectableItemRadioButton.checkSize"), (0, _utils.applyTheme)("SelectableItemRadioButton.color"), StyledLabel, StyledRadioButton, (0, _utils.applyTheme)("SelectableItemRadioButton.focus"), (0, _utils.applyTheme)("SelectableItemRadioButton.focusOutline"), StyledLabel, StyledRadioButton, (0, _utils.applyTheme)("SelectableItemRadioButton.disabledFillColor"), StyledLabel, (0, _utils.applyTheme)("SelectableItemRadioButton.disabledOpacity"), StyledLabel, (0, _utils.applyTheme)("SelectableItemRadioButton.disabledCursor"));

var StyledDetail = _styledComponents.default.div.withConfig({
  displayName: "SelectableItem__StyledDetail",
  componentId: "sc-1mpw4vb-3"
})(["", " align-items:center;display:", ";height:auto;justify-content:", ";margin-left:", ";margin-top:", ";"], (0, _utils.addTypographyStyles)("SelectableItemDetail", "bodyText"), function (props) {
  return props.isStacked ? "block" : "flex";
}, function (props) {
  return props.isStacked ? "flex-start" : "center";
}, function (props) {
  return props.isStacked ? (0, _utils.applyTheme)("SelectableList.stackedSpacingToLabel")(props) : "0";
}, function (props) {
  return props.isStacked ? (0, _utils.applyTheme)("SelectableList.stackedSpacingBelowLabel")(props) : "0";
});

var StyledIcon = _styledComponents.default.span.withConfig({
  displayName: "SelectableItem__StyledIcon",
  componentId: "sc-1mpw4vb-4"
})(["border-radius:", ";border-color:", ";border-style:", ";border-width:", ";height:", ";margin-bottom:0;margin-left:0;margin-right:", ";margin-top:0;width:", ";svg{height:", ";width:", ";}"], (0, _utils.applyTheme)("SelectableList.borderRadius"), (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.iconHeight"), (0, _utils.applyTheme)("SelectableList.iconSpacingToLabel"), (0, _utils.applyTheme)("SelectableList.iconWidth"), (0, _utils.applyTheme)("SelectableList.iconHeight"), (0, _utils.applyTheme)("SelectableList.iconWidth"));

var StyledItem = _styledComponents.default.div.withConfig({
  displayName: "SelectableItem__StyledItem",
  componentId: "sc-1mpw4vb-5"
})(["display:flex;justify-content:", ";flex-direction:", ";height:", ";@media (max-width:768px){height:", ";}"], function (props) {
  return props.isStacked ? "none" : "space-between";
}, function (props) {
  return props.isStacked ? "column" : "row";
}, function (props) {
  return props.isStacked ? "inherit" : (0, _utils.applyTheme)("SelectableList.height");
}, (0, _utils.applyTheme)("SelectableList.heightMobile"));

var LeftAlignedItem = _styledComponents.default.div.withConfig({
  displayName: "SelectableItem__LeftAlignedItem",
  componentId: "sc-1mpw4vb-6"
})(["display:flex;justify-content:flex-start;height:", ";@media (max-width:768px){height:", ";}", "{position:relative;font-weight:", ";}", "{", " margin-left:", ";}"], (0, _utils.applyTheme)("SelectableList.height"), (0, _utils.applyTheme)("SelectableList.heightMobile"), StyledLabel, (0, _utils.applyTheme)("SelectableList.leftAlignedLabelFontWeight"), StyledDetail, (0, _utils.addTypographyStyles)("SelectableItemDetailLeft", "labelText"), (0, _utils.applyTheme)("SelectableList.leftAlignedDetailSpacingToLabel"));

var SelectableItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SelectableItem, _Component);

  function SelectableItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SelectableItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SelectableItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.uniqueInstanceIdentifier = (0, _lodash.default)("SelectableItem_");

    _this.handleChange = function (event) {
      var value = _this.props.value;

      _this.props.onChange(event.target.checked, value);
    };

    return _this;
  }

  (0, _createClass2.default)(SelectableItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          detail = _this$props.detail,
          icon = _this$props.icon,
          isChecked = _this$props.isChecked,
          isLeftAligned = _this$props.isLeftAligned,
          isReadOnly = _this$props.isReadOnly,
          isStacked = _this$props.isStacked,
          label = _this$props.label,
          value = _this$props.value;
      var id = "radio_".concat(this.uniqueInstanceIdentifier);

      var input = _react.default.createElement(StyledInput, {
        id: id,
        checked: isChecked,
        value: value,
        onChange: this.handleChange,
        type: "radio",
        disabled: isReadOnly
      });

      var labelAndButton = _react.default.createElement(StyledLabel, {
        htmlFor: id,
        isStacked: isStacked
      }, _react.default.createElement(StyledRadioButton, null), icon ? _react.default.createElement(StyledIcon, null, icon) : null, label);

      return _react.default.createElement("div", {
        className: className
      }, isLeftAligned ? _react.default.createElement(LeftAlignedItem, {
        isStacked: isStacked
      }, input, labelAndButton, detail ? _react.default.createElement(StyledDetail, {
        isStacked: isStacked
      }, detail) : null) : _react.default.createElement(StyledItem, {
        isStacked: isStacked
      }, input, labelAndButton, detail ? _react.default.createElement(StyledDetail, {
        isStacked: isStacked
      }, detail) : null));
    }
  }]);
  return SelectableItem;
}(_react.Component);

SelectableItem.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Optional text, SVG or element displayed on the right-hand side
   */
  detail: _propTypes.default.node,

  /**
   * Optional icon (SVG) displayed on the left-hand side
   */
  icon: _propTypes.default.node,

  /**
   * `true` if the item is checked
   */
  isChecked: _propTypes.default.bool,

  /**
   * Left-aligned style
   */
  isLeftAligned: _propTypes.default.bool,

  /**
   * Read only and disabled state
   */
  isReadOnly: _propTypes.default.bool,

  /**
   * Stacked style, designed to be used with isHorizontal SelectableList
   */
  isStacked: _propTypes.default.bool,

  /**
   * Label
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Called whenever this item becomes selected or unselected. Two arguments are provided,
   * `isChecked` and the `value` prop that was passed in.
   */
  onChange: _propTypes.default.func,

  /**
   * A value to be passed to `onChange`
   */
  value: _propTypes.default.string.isRequired
};
SelectableItem.defaultProps = {
  onChange: function onChange() {},
  isChecked: false,
  isLeftAligned: false,
  isReadOnly: false,
  isStacked: false
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(SelectableItem)); // auto-add i18n


exports.default = _default;