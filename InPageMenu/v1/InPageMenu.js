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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var InPageMenuContainer = _styledComponents.default.div.withConfig({
  displayName: "InPageMenu__InPageMenuContainer",
  componentId: "sc-9d55eg-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;flex-wrap:wrap;width:100%;"]);

var InPageMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InPageMenu, _Component);

  function InPageMenu() {
    (0, _classCallCheck2.default)(this, InPageMenu);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InPageMenu).apply(this, arguments));
  }

  (0, _createClass2.default)(InPageMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          InPageMenuItem = _this$props.components.InPageMenuItem,
          menuItems = _this$props.menuItems;
      return _react.default.createElement(InPageMenuContainer, {
        className: className
      }, menuItems.map(function (menuItem, index) {
        return _react.default.createElement(InPageMenuItem, {
          href: menuItem.href,
          isSelected: menuItem.isSelected,
          key: menuItem.id || "item-".concat(index),
          label: menuItem.label
        });
      }));
    }
  }]);
  return InPageMenu;
}(_react.Component);

InPageMenu.propTypes = {
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
     * Pass either the Reaction InPageMenuItem component or your own component that
     * accepts compatible props.
     */
    InPageMenuItem: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * An array that contains objects of label and navigational data for each InPageMenuItem
   */
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    href: _propTypes.default.string,
    id: _propTypes.default.string,
    isSelected: _propTypes.default.bool,
    label: _propTypes.default.string
  }))
};
InPageMenu.defaultProps = {
  menuItems: []
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(InPageMenu)); // auto-add i18n


exports.default = _default;