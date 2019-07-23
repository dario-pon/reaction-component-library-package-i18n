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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils2 = require("./utils");

// auto-add i18n 
// font-size and line-height here are used to set the height of the badge, and not
// the badge text. Badge text typography is set in `BadgeLabel` below.
var baseBadgeStyles = (0, _styledComponents.css)(["font-size:11px;height:auto;line-height:16px;position:absolute;z-index:1200;"]);

var PrimaryBadge = _styledComponents.default.div.withConfig({
  displayName: "BadgeOverlay__PrimaryBadge",
  componentId: "m0zdpb-0"
})(["", " border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-top-left-radius:", ";border-top-right-radius:", ";bottom:", ";left:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";right:", ";top:", ";", ""], baseBadgeStyles, (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.borderBottomLeftRadius"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.borderBottomRightRadius"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.borderTopLeftRadius"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.borderTopRightRadius"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.offsetBottom"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.offsetLeft"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.paddingBottom"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.paddingLeft"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.paddingRight"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.paddingTop"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.offsetRight"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.offsetTop"), function (props) {
  var type = props.type;

  switch (type) {
    case _utils2.BADGE_TYPES.BACKORDER:
      return (0, _styledComponents.css)(["background-color:", ";color:", ";"], (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.backgroundColor_backorder"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.color_backorder"));

    case _utils2.BADGE_TYPES.BESTSELLER:
      return (0, _styledComponents.css)(["background-color:", ";color:", ";"], (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.backgroundColor_bestseller"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.color_bestseller"));

    case _utils2.BADGE_TYPES.LOW_QUANTITY:
      return (0, _styledComponents.css)(["background-color:", ";color:", ";"], (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.backgroundColor_lowQuantity"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.color_lowQuantity"));

    case _utils2.BADGE_TYPES.SOLD_OUT:
      return (0, _styledComponents.css)(["background-color:", ";color:", ";"], (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.backgroundColor_soldOut"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.color_soldOut"));

    case _utils2.BADGE_TYPES.SALE:
      return (0, _styledComponents.css)(["background-color:", ";color:", ";"], (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.backgroundColor_sale"), (0, _utils.applyTheme)("BadgeOverlayPrimaryBadge.color_sale"));

    default:
      return "";
  }
});

var SecondaryBadge = _styledComponents.default.div.withConfig({
  displayName: "BadgeOverlay__SecondaryBadge",
  componentId: "m0zdpb-1"
})(["", " border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-top-left-radius:", ";border-top-right-radius:", ";bottom:", ";color:", ";left:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";right:", ";top:", ";"], baseBadgeStyles, (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.borderBottomLeftRadius"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.borderBottomRightRadius"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.borderTopLeftRadius"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.borderTopRightRadius"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.offsetBottom"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.color"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.offsetLeft"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.paddingBottom"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.paddingLeft"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.paddingRight"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.paddingTop"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.offsetRight"), (0, _utils.applyTheme)("BadgeOverlaySecondaryBadge.offsetTop"));

var Overlay = _styledComponents.default.div.withConfig({
  displayName: "BadgeOverlay__Overlay",
  componentId: "m0zdpb-2"
})(["position:relative;", ""], function (props) {
  if (props.isFaded) {
    return "opacity: ".concat((0, _utils.applyTheme)("BadgeOverlay.fadedOpacity")(props), ";");
  }

  return "";
});

var BadgeLabel = _styledComponents.default.span.withConfig({
  displayName: "BadgeOverlay__BadgeLabel",
  componentId: "m0zdpb-3"
})(["", " padding:0;position:relative;white-space:nowrap;"], (0, _utils.addTypographyStyles)("BadgeOverlayBadgeLabel", "labelText"));

var BadgeOverlay =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BadgeOverlay, _Component);

  function BadgeOverlay() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, BadgeOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BadgeOverlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderBadges = function () {
      var _this$props = _this.props,
          badgeLabels = _this$props.badgeLabels,
          filterOnly = _this$props.filterOnly,
          product = _this$props.product,
          shouldShowPrimaryOnly = _this$props.shouldShowPrimaryOnly;
      var status = (0, _utils2.badgeStatus)(product, badgeLabels);
      if (!status) return null;
      var type = status.type,
          label = status.label;

      if (filterOnly) {
        if (type === filterOnly) {
          return _this.renderPrimaryBadge(type, label);
        }

        return null;
      } // If status type is "BACKORDER" or "SOLD_OUT", only show primary badge


      if (type === _utils2.BADGE_TYPES.BACKORDER || type === _utils2.BADGE_TYPES.SOLD_OUT || shouldShowPrimaryOnly) {
        return _this.renderPrimaryBadge(type, label);
      } // If any other status, check to see if secondary badges are needed


      return _react.default.createElement(_react.Fragment, null, _this.renderPrimaryBadge(type, label), _this.renderSecondaryBadgeIfNeeded(status.type));
    };

    _this.renderPrimaryBadge = function (type, label) {
      return _react.default.createElement(PrimaryBadge, {
        type: type
      }, _react.default.createElement(BadgeLabel, null, label));
    };

    _this.renderSecondaryBadgeIfNeeded = function (primaryBadgeType) {
      var _this$props2 = _this.props,
          badgeLabels = _this$props2.badgeLabels,
          product = _this$props2.product;

      if (primaryBadgeType === _utils2.BADGE_TYPES.SALE) {
        if ((0, _utils2.isProductLowQuantity)(product)) {
          return _this.renderSecondaryBadge(badgeLabels.LOW_QUANTITY);
        }

        if ((0, _utils2.isProductBestseller)(product)) {
          return _this.renderSecondaryBadge(badgeLabels.BESTSELLER);
        }
      }

      if (primaryBadgeType === _utils2.BADGE_TYPES.LOW_QUANTITY) {
        if ((0, _utils2.isProductBestseller)(product)) {
          return _this.renderSecondaryBadge(badgeLabels.BESTSELLER);
        }
      }

      return null;
    };

    _this.renderSecondaryBadge = function (label) {
      return _react.default.createElement(SecondaryBadge, null, _react.default.createElement(BadgeLabel, null, label));
    };

    return _this;
  }

  (0, _createClass2.default)(BadgeOverlay, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          badgeLabels = _this$props3.badgeLabels,
          children = _this$props3.children,
          product = _this$props3.product;
      var status = (0, _utils2.badgeStatus)(product, badgeLabels) || {};
      return _react.default.createElement(Overlay, {
        className: className,
        isFaded: status.type === _utils2.BADGE_TYPES.SOLD_OUT
      }, this.renderBadges(), children);
    }
  }]);
  return BadgeOverlay;
}(_react.Component);

BadgeOverlay.propTypes = {
  /**
   * Labels to use for the various badges
   */
  badgeLabels: _propTypes.default.shape({
    BACKORDER: _propTypes.default.string,
    BESTSELLER: _propTypes.default.string,
    LOW_QUANTITY: _propTypes.default.string,
    SOLD_OUT: _propTypes.default.string,
    SALE: _propTypes.default.string
  }),

  /**
   * The contents wrapped in the overlay, such as text, icons, or any combination of React and HTML components
   */
  children: _propTypes.default.node,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Only show badge if status is of a certain type
   * Types: BACKORDER, BESTSELLER, LOW\_QUANTITY, SALE, SOLD\_OUT
   */
  filterOnly: _propTypes.default.string,

  /**
   * The product, whose properties determine which badge(s) to display
   */
  product: _propTypes.default.shape({
    isBackorder: _propTypes.default.bool,
    isBestseller: _propTypes.default.bool,
    isLowQuantity: _propTypes.default.bool,
    isOnSale: _propTypes.default.bool,
    isSoldOut: _propTypes.default.bool
  }),

  /**
   * Whether to only display the primary badge
   */
  shouldShowPrimaryOnly: _propTypes.default.bool
};
BadgeOverlay.defaultProps = {
  badgeLabels: _utils2.BADGE_LABELS,
  filterOnly: "",
  shouldShowPrimaryOnly: false
};

var _default = _utils.default.withTranslation()(BadgeOverlay); // auto-add i18n


exports.default = _default;