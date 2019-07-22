import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
import { BADGE_TYPES, BADGE_LABELS, badgeStatus, isProductBestseller, isProductLowQuantity } from "./utils"; // font-size and line-height here are used to set the height of the badge, and not
// the badge text. Badge text typography is set in `BadgeLabel` below.

var baseBadgeStyles = css(["font-size:11px;height:auto;line-height:16px;position:absolute;z-index:1200;"]);
var PrimaryBadge = styled.div.withConfig({
  displayName: "BadgeOverlay__PrimaryBadge",
  componentId: "m0zdpb-0"
})(["", " border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-top-left-radius:", ";border-top-right-radius:", ";bottom:", ";left:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";right:", ";top:", ";", ""], baseBadgeStyles, applyTheme("BadgeOverlayPrimaryBadge.borderBottomLeftRadius"), applyTheme("BadgeOverlayPrimaryBadge.borderBottomRightRadius"), applyTheme("BadgeOverlayPrimaryBadge.borderTopLeftRadius"), applyTheme("BadgeOverlayPrimaryBadge.borderTopRightRadius"), applyTheme("BadgeOverlayPrimaryBadge.offsetBottom"), applyTheme("BadgeOverlayPrimaryBadge.offsetLeft"), applyTheme("BadgeOverlayPrimaryBadge.paddingBottom"), applyTheme("BadgeOverlayPrimaryBadge.paddingLeft"), applyTheme("BadgeOverlayPrimaryBadge.paddingRight"), applyTheme("BadgeOverlayPrimaryBadge.paddingTop"), applyTheme("BadgeOverlayPrimaryBadge.offsetRight"), applyTheme("BadgeOverlayPrimaryBadge.offsetTop"), function (props) {
  var type = props.type;

  switch (type) {
    case BADGE_TYPES.BACKORDER:
      return css(["background-color:", ";color:", ";"], applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_backorder"), applyTheme("BadgeOverlayPrimaryBadge.color_backorder"));

    case BADGE_TYPES.BESTSELLER:
      return css(["background-color:", ";color:", ";"], applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_bestseller"), applyTheme("BadgeOverlayPrimaryBadge.color_bestseller"));

    case BADGE_TYPES.LOW_QUANTITY:
      return css(["background-color:", ";color:", ";"], applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_lowQuantity"), applyTheme("BadgeOverlayPrimaryBadge.color_lowQuantity"));

    case BADGE_TYPES.SOLD_OUT:
      return css(["background-color:", ";color:", ";"], applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_soldOut"), applyTheme("BadgeOverlayPrimaryBadge.color_soldOut"));

    case BADGE_TYPES.SALE:
      return css(["background-color:", ";color:", ";"], applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_sale"), applyTheme("BadgeOverlayPrimaryBadge.color_sale"));

    default:
      return "";
  }
});
var SecondaryBadge = styled.div.withConfig({
  displayName: "BadgeOverlay__SecondaryBadge",
  componentId: "m0zdpb-1"
})(["", " border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-top-left-radius:", ";border-top-right-radius:", ";bottom:", ";color:", ";left:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";right:", ";top:", ";"], baseBadgeStyles, applyTheme("BadgeOverlaySecondaryBadge.borderBottomLeftRadius"), applyTheme("BadgeOverlaySecondaryBadge.borderBottomRightRadius"), applyTheme("BadgeOverlaySecondaryBadge.borderTopLeftRadius"), applyTheme("BadgeOverlaySecondaryBadge.borderTopRightRadius"), applyTheme("BadgeOverlaySecondaryBadge.offsetBottom"), applyTheme("BadgeOverlaySecondaryBadge.color"), applyTheme("BadgeOverlaySecondaryBadge.offsetLeft"), applyTheme("BadgeOverlaySecondaryBadge.paddingBottom"), applyTheme("BadgeOverlaySecondaryBadge.paddingLeft"), applyTheme("BadgeOverlaySecondaryBadge.paddingRight"), applyTheme("BadgeOverlaySecondaryBadge.paddingTop"), applyTheme("BadgeOverlaySecondaryBadge.offsetRight"), applyTheme("BadgeOverlaySecondaryBadge.offsetTop"));
var Overlay = styled.div.withConfig({
  displayName: "BadgeOverlay__Overlay",
  componentId: "m0zdpb-2"
})(["position:relative;", ""], function (props) {
  if (props.isFaded) {
    return "opacity: ".concat(applyTheme("BadgeOverlay.fadedOpacity")(props), ";");
  }

  return "";
});
var BadgeLabel = styled.span.withConfig({
  displayName: "BadgeOverlay__BadgeLabel",
  componentId: "m0zdpb-3"
})(["", " padding:0;position:relative;white-space:nowrap;"], addTypographyStyles("BadgeOverlayBadgeLabel", "labelText"));

var BadgeOverlay =
/*#__PURE__*/
function (_Component) {
  _inherits(BadgeOverlay, _Component);

  function BadgeOverlay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BadgeOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BadgeOverlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderBadges = function () {
      var _this$props = _this.props,
          badgeLabels = _this$props.badgeLabels,
          filterOnly = _this$props.filterOnly,
          product = _this$props.product,
          shouldShowPrimaryOnly = _this$props.shouldShowPrimaryOnly;
      var status = badgeStatus(product, badgeLabels);
      if (!status) return null;
      var type = status.type,
          label = status.label;

      if (filterOnly) {
        if (type === filterOnly) {
          return _this.renderPrimaryBadge(type, label);
        }

        return null;
      } // If status type is "BACKORDER" or "SOLD_OUT", only show primary badge


      if (type === BADGE_TYPES.BACKORDER || type === BADGE_TYPES.SOLD_OUT || shouldShowPrimaryOnly) {
        return _this.renderPrimaryBadge(type, label);
      } // If any other status, check to see if secondary badges are needed


      return React.createElement(Fragment, null, _this.renderPrimaryBadge(type, label), _this.renderSecondaryBadgeIfNeeded(status.type));
    };

    _this.renderPrimaryBadge = function (type, label) {
      return React.createElement(PrimaryBadge, {
        type: type
      }, React.createElement(BadgeLabel, null, label));
    };

    _this.renderSecondaryBadgeIfNeeded = function (primaryBadgeType) {
      var _this$props2 = _this.props,
          badgeLabels = _this$props2.badgeLabels,
          product = _this$props2.product;

      if (primaryBadgeType === BADGE_TYPES.SALE) {
        if (isProductLowQuantity(product)) {
          return _this.renderSecondaryBadge(badgeLabels.LOW_QUANTITY);
        }

        if (isProductBestseller(product)) {
          return _this.renderSecondaryBadge(badgeLabels.BESTSELLER);
        }
      }

      if (primaryBadgeType === BADGE_TYPES.LOW_QUANTITY) {
        if (isProductBestseller(product)) {
          return _this.renderSecondaryBadge(badgeLabels.BESTSELLER);
        }
      }

      return null;
    };

    _this.renderSecondaryBadge = function (label) {
      return React.createElement(SecondaryBadge, null, React.createElement(BadgeLabel, null, label));
    };

    return _this;
  }

  _createClass(BadgeOverlay, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          badgeLabels = _this$props3.badgeLabels,
          children = _this$props3.children,
          product = _this$props3.product;
      var status = badgeStatus(product, badgeLabels) || {};
      return React.createElement(Overlay, {
        className: className,
        isFaded: status.type === BADGE_TYPES.SOLD_OUT
      }, this.renderBadges(), children);
    }
  }]);

  return BadgeOverlay;
}(Component);

BadgeOverlay.propTypes = {
  /**
   * Labels to use for the various badges
   */
  badgeLabels: PropTypes.shape({
    BACKORDER: PropTypes.string,
    BESTSELLER: PropTypes.string,
    LOW_QUANTITY: PropTypes.string,
    SOLD_OUT: PropTypes.string,
    SALE: PropTypes.string
  }),

  /**
   * The contents wrapped in the overlay, such as text, icons, or any combination of React and HTML components
   */
  children: PropTypes.node,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Only show badge if status is of a certain type
   * Types: BACKORDER, BESTSELLER, LOW\_QUANTITY, SALE, SOLD\_OUT
   */
  filterOnly: PropTypes.string,

  /**
   * The product, whose properties determine which badge(s) to display
   */
  product: PropTypes.shape({
    isBackorder: PropTypes.bool,
    isBestseller: PropTypes.bool,
    isLowQuantity: PropTypes.bool,
    isOnSale: PropTypes.bool,
    isSoldOut: PropTypes.bool
  }),

  /**
   * Whether to only display the primary badge
   */
  shouldShowPrimaryOnly: PropTypes.bool
};
BadgeOverlay.defaultProps = {
  badgeLabels: BADGE_LABELS,
  filterOnly: "",
  shouldShowPrimaryOnly: false
};
export default BadgeOverlay;