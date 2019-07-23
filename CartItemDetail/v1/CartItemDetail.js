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

// auto-add i18n 
var Detail = _styledComponents.default.div.withConfig({
  displayName: "CartItemDetail__Detail",
  componentId: "om1nev-0"
})(["flex:0 0 fit;"]);

var Title = _styledComponents.default.h3.withConfig({
  displayName: "CartItemDetail__Title",
  componentId: "om1nev-1"
})(["", " margin-top:", ";margin-bottom:", ";margin-left:", ";margin-right:", ";a{", " text-decoration:none;&:focus,&:hover{color:", ";}}"], (0, _utils.addTypographyStyles)("CartItemDetailTitle", "headingTextBold"), (0, _utils.applyTheme)("CartItemDetailTitle.marginTop"), (0, _utils.applyTheme)("CartItemDetailTitle.marginBottom"), (0, _utils.applyTheme)("CartItemDetailTitle.marginLeft"), (0, _utils.applyTheme)("CartItemDetailTitle.marginRight"), (0, _utils.addTypographyStyles)("CartItemDetailTitle", "headingTextBold"), (0, _utils.applyTheme)("CartItemDetailTitle.color_focus"));

var Text = _styledComponents.default.p.withConfig({
  displayName: "CartItemDetail__Text",
  componentId: "om1nev-2"
})(["", " margin:0;"], (0, _utils.addTypographyStyles)("CartItemDetailAttributes", "labelText"));

var Attributes = _styledComponents.default.div.withConfig({
  displayName: "CartItemDetail__Attributes",
  componentId: "om1nev-3"
})(["margin-bottom:0.5rem;"]);

var Attr = _styledComponents.default.p.withConfig({
  displayName: "CartItemDetail__Attr",
  componentId: "om1nev-4"
})(["", " margin:0;"], (0, _utils.addTypographyStyles)("CartItemDetailAttributes", "labelText"));

var CartItemDetail =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CartItemDetail, _Component);

  function CartItemDetail() {
    (0, _classCallCheck2.default)(this, CartItemDetail);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CartItemDetail).apply(this, arguments));
  }

  (0, _createClass2.default)(CartItemDetail, [{
    key: "renderBlockAttributes",
    value: function renderBlockAttributes() {
      var attributes = this.props.attributes;
      return (attributes || []).map(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        if (!label && !value) return null; // For now, due to strange implementation of attributes/options in the product data,
        // we allow labels without values and values without labels.

        return _react.default.createElement(Attr, {
          key: label || value
        }, label ? _react.default.createElement("span", null, label, ":") : null, " ", value);
      });
    }
  }, {
    key: "renderInlineAttributes",
    value: function renderInlineAttributes() {
      var attributes = this.props.attributes;
      if (!attributes || !attributes.length) return null;
      var values = attributes.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      }).filter(function (value) {
        return !!value;
      });
      return _react.default.createElement(Attr, null, values.join(", "));
    }
  }, {
    key: "renderAttributes",
    value: function renderAttributes() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          isMiniCart = _this$props.isMiniCart,
          productVendor = _this$props.productVendor,
          quantity = _this$props.quantity;
      if ((!attributes || attributes.length === 0) && !productVendor) return null;
      return _react.default.createElement(Attributes, {
        isMiniCart: isMiniCart
      }, productVendor ? _react.default.createElement(Text, null, productVendor) : null, isMiniCart ? this.renderInlineAttributes() : this.renderBlockAttributes(), quantity ? _react.default.createElement(Text, null, "Quantity: ", quantity) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          productURLPath = _this$props2.productURLPath,
          productSlug = _this$props2.productSlug,
          title = _this$props2.title;
      return _react.default.createElement(Detail, {
        className: className
      }, _react.default.createElement(Title, null, _react.default.createElement("a", {
        href: [productURLPath, productSlug].join("")
      }, title)), this.renderAttributes());
    }
  }]);
  return CartItemDetail;
}(_react.Component);

CartItemDetail.propTypes = {
  /**
   * Array of additional attributes of the chosen item.
   */
  attributes: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * Attribute label (i.e. "Color").
     */
    label: _propTypes.default.string,

    /**
     * Attribute value (i.e. "Red").
     */
    value: _propTypes.default.string
  })),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Is in a MiniCart component
   */
  isMiniCart: _propTypes.default.bool,

  /**
   * Product slug of chosen item.
   */
  productSlug: _propTypes.default.string,

  /**
   * Product URL path to be prepended before the slug
   */
  productURLPath: _propTypes.default.string,

  /**
   * Product vendor of chosen item.
   */
  productVendor: _propTypes.default.string,

  /**
   * Item quantity
   */
  quantity: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Product title of chosen item.
   */
  title: _propTypes.default.string
};

var _default = _utils.default.withTranslation()(CartItemDetail); // auto-add i18n


exports.default = _default;