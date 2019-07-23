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

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var InPageMenuItemContainer = _styledComponents.default.div.withConfig({
  displayName: "InPageMenuItem__InPageMenuItemContainer",
  componentId: "sc-1w1505b-0"
})(["align-items:center;", " cursor:pointer;display:flex;flex-direction:row;padding-left:", ";padding-right:", ";padding-top:", ";padding-bottom:", ";margin-bottom:", ";"], function (props) {
  if (props.isSelected) {
    return "background-color: ".concat((0, _utils.applyTheme)("InPageMenuItemContainer.backgroundColor_selected")(props), ";");
  }

  return "background-color: ".concat((0, _utils.applyTheme)("InPageMenuItemContainer.backgroundColor_default")(props), ";");
}, (0, _utils.applyTheme)("InPageMenuItemContainer.paddingLeft"), (0, _utils.applyTheme)("InPageMenuItemContainer.paddingRight"), (0, _utils.applyTheme)("InPageMenuItemContainer.paddingTop"), (0, _utils.applyTheme)("InPageMenuItemContainer.paddingBottom"), (0, _utils.applyTheme)("InPageMenuItemContainer.marginBottom"));

var InPageMenuItemText = _styledComponents.default.div.withConfig({
  displayName: "InPageMenuItem__InPageMenuItemText",
  componentId: "sc-1w1505b-1"
})(["", " display:flex;flex:1 1 auto;"], (0, _utils.addTypographyStyles)("InPageMenuItemText", "headingTextBold"));

var InPageMenuItemIcon = _styledComponents.default.span.withConfig({
  displayName: "InPageMenuItem__InPageMenuItemIcon",
  componentId: "sc-1w1505b-2"
})(["display:flex;flex:0 0 auto;height:", ";margin:0;width:", ";svg{height:", ";transform:rotateZ(270deg);width:", ";}"], (0, _utils.applyTheme)("InPageMenuItemIcon.height"), (0, _utils.applyTheme)("InPageMenuItemIcon.width"), (0, _utils.applyTheme)("InPageMenuItemIcon.height"), (0, _utils.applyTheme)("InPageMenuItemIcon.width"));

var InPageMenuItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InPageMenuItem, _Component);

  function InPageMenuItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InPageMenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InPageMenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.handleClick = (0, _utils.preventAccidentalDoubleClick)(function (event) {
      event.preventDefault();
      var onClick = _this.props.onClick;

      if (onClick) {
        return onClick();
      }

      return null;
    });
    return _this;
  }

  (0, _createClass2.default)(InPageMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$component = _this$props.components,
          iconExpand = _this$props$component.iconExpand,
          Link = _this$props$component.Link,
          href = _this$props.href,
          isSelected = _this$props.isSelected,
          label = _this$props.label;
      return _react.default.createElement(Link, {
        href: href,
        onClick: this.handleClick
      }, _react.default.createElement(InPageMenuItemContainer, {
        className: className,
        isSelected: isSelected
      }, _react.default.createElement(InPageMenuItemText, null, label), _react.default.createElement(InPageMenuItemIcon, null, iconExpand)));
    }
  }]);
  return InPageMenuItem;
}(_react.Component);

InPageMenuItem.propTypes = {
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
     * Pass either the Reaction iconExpand component or your own component that
     * accepts compatible props.
     */
    iconExpand: _propTypes.default.node.isRequired,

    /**
     * Pass either the Reaction Link component or your own component that
     * accepts compatible props.
     */
    Link: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * URL to provide to MenuItem
   */
  href: _propTypes.default.string,

  /**
   * Render selected style
   */
  isSelected: _propTypes.default.bool,

  /**
   * Menu Item label
   */
  label: _propTypes.default.node.isRequired,

  /**
   * Function to pass to button onClick
   */
  onClick: _propTypes.default.func
};
InPageMenuItem.defaultProps = {
  isSelected: false
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(InPageMenuItem)); // auto-add i18n


exports.default = _default;