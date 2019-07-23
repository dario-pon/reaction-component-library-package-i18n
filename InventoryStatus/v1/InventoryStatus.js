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

var _utils2 = require("./utils");

// auto-add i18n 
var SoldOutSpan = _styledComponents.default.div.withConfig({
  displayName: "InventoryStatus__SoldOutSpan",
  componentId: "sc-18fz7sn-0"
})(["", ""], (0, _utils.addTypographyStyles)("StockWarning", "labelText"));

var DefaultSpan = _styledComponents.default.div.withConfig({
  displayName: "InventoryStatus__DefaultSpan",
  componentId: "sc-18fz7sn-1"
})(["", ""], (0, _utils.addTypographyStyles)("", "labelText"));

var InventoryStatus =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InventoryStatus, _Component);

  function InventoryStatus() {
    (0, _classCallCheck2.default)(this, InventoryStatus);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InventoryStatus).apply(this, arguments));
  }

  (0, _createClass2.default)(InventoryStatus, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          components = _this$props.components,
          product = _this$props.product,
          statusLabels = _this$props.statusLabels;

      var _ref = components || {},
          StockWarning = _ref.StockWarning;

      var status = (0, _utils2.inventoryStatus)(product, statusLabels);
      if (!status) return null;

      if (status.type && status.type === "LOW_QUANTITY") {
        return _react.default.createElement(StockWarning, {
          inventoryQuantity: product.inventoryAvailableToSell,
          isLowInventoryQuantity: product.isLowQuantity
        });
      }

      if (status.type && status.type === "SOLD_OUT") {
        return _react.default.createElement(SoldOutSpan, {
          className: className
        }, status.label);
      }

      return _react.default.createElement(DefaultSpan, {
        className: className
      }, status.label);
    }
  }]);
  return InventoryStatus;
}(_react.Component);

InventoryStatus.propTypes = {
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
     * Pass either the Reaction StockWarning component or your own component that
     * accepts compatible props.
     */
    StockWarning: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * The product, whose properties determine which badge(s) to display
   */
  product: _propTypes.default.shape({
    inventoryAvailableToSell: _propTypes.default.number,
    isBackorder: _propTypes.default.bool,
    isLowQuantity: _propTypes.default.bool,
    isSoldOut: _propTypes.default.bool
  }),

  /**
   * Labels to use for the various badges
   */
  statusLabels: _propTypes.default.shape({
    BACKORDER: _propTypes.default.string,
    LOW_QUANTITY: _propTypes.default.string,
    SOLD_OUT: _propTypes.default.string
  })
};
InventoryStatus.defaultProps = {
  statusLabels: _utils2.STATUS_LABELS
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(InventoryStatus)); // auto-add i18n


exports.default = _default;