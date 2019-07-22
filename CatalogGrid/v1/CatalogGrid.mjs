import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerQuery } from "react-container-query";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes, preventAccidentalDoubleClick } from "../../utils";
var GridContainer = styled.div.withConfig({
  displayName: "CatalogGrid__GridContainer",
  componentId: "lw06dl-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;width:100%;"]);
var GridItem = styled.div.withConfig({
  displayName: "CatalogGrid__GridItem",
  componentId: "lw06dl-1"
})(["box-sizing:border-box;flex-basis:100%;flex-grow:0;margin:0;max-width:100%;padding:12px;", ""], function (_ref) {
  var containerParams = _ref.containerParams;
  var is2PerRowWidth = containerParams.is2PerRowWidth,
      is3PerRowWidth = containerParams.is3PerRowWidth,
      is4PerRowWidth = containerParams.is4PerRowWidth;

  if (is2PerRowWidth) {
    return "\n        max-width: 50%;\n        flex-basis: 50%;\n      ";
  } else if (is3PerRowWidth) {
    return "\n        max-width: 33.33333%;\n        flex-basis: 33.33333%;\n      ";
  } else if (is4PerRowWidth) {
    return "\n        max-width: 25%;\n        flex-basis: 25%;\n      ";
  }

  return "";
});

var CatalogGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(CatalogGrid, _Component);

  function CatalogGrid() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CatalogGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CatalogGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.handleOnClick = preventAccidentalDoubleClick(function (event, product) {
      _this.props.onItemClick(event, product);
    });
    return _this;
  }

  _createClass(CatalogGrid, [{
    key: "getContainerQueries",
    value: function getContainerQueries() {
      var threePerRowMinWidth = applyTheme("CatalogGrid.threePerRowMinWidth")(this.props);
      var fourPerRowMinWidth = applyTheme("CatalogGrid.fourPerRowMinWidth")(this.props);
      return {
        is2PerRowWidth: {
          minWidth: 450,
          // Min width that item w/ 2 badges renders appropriately
          maxWidth: threePerRowMinWidth - 1
        },
        is3PerRowWidth: {
          minWidth: threePerRowMinWidth,
          maxWidth: fourPerRowMinWidth - 1
        },
        is4PerRowWidth: {
          minWidth: fourPerRowMinWidth
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          badgeLabels = _this$props.badgeLabels,
          className = _this$props.className,
          CatalogGridItem = _this$props.components.CatalogGridItem,
          currencyCode = _this$props.currencyCode,
          initialSize = _this$props.initialSize,
          onItemClick = _this$props.onItemClick,
          placeholderImageURL = _this$props.placeholderImageURL,
          products = _this$props.products;
      var gridItemProps = {
        currencyCode: currencyCode,
        placeholderImageURL: placeholderImageURL,
        onClick: onItemClick
      };

      if (badgeLabels) {
        gridItemProps.badgeLabels = badgeLabels;
      }

      return React.createElement(ContainerQuery, {
        className: className,
        query: this.getContainerQueries(),
        initialSize: initialSize
      }, function (params) {
        return React.createElement(GridContainer, null, products.map(function (product, index) {
          return React.createElement(GridItem, _extends({
            containerParams: params,
            key: "grid-item-".concat(index)
          }, _this2.props), React.createElement(CatalogGridItem, _extends({
            product: product
          }, gridItemProps)));
        }));
      });
    }
  }]);

  return CatalogGrid;
}(Component);

CatalogGrid.propTypes = {
  /**
   * Labels to use for the various badges. Refer to `BadgeOverlay`'s prop documentation.
   */
  badgeLabels: PropTypes.shape({
    BACKORDER: PropTypes.string,
    BESTSELLER: PropTypes.string,
    LOW_QUANTITY: PropTypes.string,
    SOLD_OUT: PropTypes.string,
    SALE: PropTypes.string
  }),

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
    CatalogGridItem: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Currency code to display the price for. Product must include a pricing object with the code in `product.pricing`
   */
  currencyCode: PropTypes.string,

  /**
   * The inital size the grid should render at. Use to set grid width during SSR.
   */
  initialSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  }),

  /**
   * Item click handler
   */
  onItemClick: PropTypes.func,

  /**
   * Image to display when product doesn't have a primary image
   */
  placeholderImageURL: PropTypes.string,

  /**
   * Products to display in the grid. Refer to `CatalogGridItem`'s documentation
   */
  products: PropTypes.arrayOf(PropTypes.object)
};
CatalogGrid.defaultProps = {
  badgeLabels: null,
  currencyCode: "USD",
  initialSize: {
    width: 325
  },
  onItemClick: function onItemClick() {},
  placeholderImageURL: "/resources/placeholder.gif",
  products: []
};
export default withComponents(CatalogGrid);