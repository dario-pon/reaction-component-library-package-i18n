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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactContainerQuery = require("react-container-query");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var GridContainer = _styledComponents.default.div.withConfig({
  displayName: "CatalogGrid__GridContainer",
  componentId: "lw06dl-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;width:100%;"]);

var GridItem = _styledComponents.default.div.withConfig({
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
  (0, _inherits2.default)(CatalogGrid, _Component);

  function CatalogGrid() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CatalogGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CatalogGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.handleOnClick = (0, _utils.preventAccidentalDoubleClick)(function (event, product) {
      _this.props.onItemClick(event, product);
    });
    return _this;
  }

  (0, _createClass2.default)(CatalogGrid, [{
    key: "getContainerQueries",
    value: function getContainerQueries() {
      var threePerRowMinWidth = (0, _utils.applyTheme)("CatalogGrid.threePerRowMinWidth")(this.props);
      var fourPerRowMinWidth = (0, _utils.applyTheme)("CatalogGrid.fourPerRowMinWidth")(this.props);
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

      return _react.default.createElement(_reactContainerQuery.ContainerQuery, {
        className: className,
        query: this.getContainerQueries(),
        initialSize: initialSize
      }, function (params) {
        return _react.default.createElement(GridContainer, null, products.map(function (product, index) {
          return _react.default.createElement(GridItem, (0, _extends2.default)({
            containerParams: params,
            key: "grid-item-".concat(index)
          }, _this2.props), _react.default.createElement(CatalogGridItem, (0, _extends2.default)({
            product: product
          }, gridItemProps)));
        }));
      });
    }
  }]);
  return CatalogGrid;
}(_react.Component);

CatalogGrid.propTypes = {
  /**
   * Labels to use for the various badges. Refer to `BadgeOverlay`'s prop documentation.
   */
  badgeLabels: _propTypes.default.shape({
    BACKORDER: _propTypes.default.string,
    BESTSELLER: _propTypes.default.string,
    LOW_QUANTITY: _propTypes.default.string,
    SOLD_OUT: _propTypes.default.string,
    SALE: _propTypes.default.string
  }),

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
    CatalogGridItem: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Currency code to display the price for. Product must include a pricing object with the code in `product.pricing`
   */
  currencyCode: _propTypes.default.string,

  /**
   * The inital size the grid should render at. Use to set grid width during SSR.
   */
  initialSize: _propTypes.default.shape({
    height: _propTypes.default.number,
    width: _propTypes.default.number
  }),

  /**
   * Item click handler
   */
  onItemClick: _propTypes.default.func,

  /**
   * Image to display when product doesn't have a primary image
   */
  placeholderImageURL: _propTypes.default.string,

  /**
   * Products to display in the grid. Refer to `CatalogGridItem`'s documentation
   */
  products: _propTypes.default.arrayOf(_propTypes.default.object)
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

var _default = (0, _componentsContext.withComponents)(CatalogGrid);

exports.default = _default;