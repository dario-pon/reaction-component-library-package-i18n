"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _padding = _interopRequireDefault(require("./padding"));

var _typography = _interopRequireWildcard(require("./typography"));

/* eslint-disable camelcase */

/* eslint-disable no-unused-vars */

/**
 * Default Theme Shadows
 */
var depth0 = "none";
var depth1 = "0 0 1rem -0.5rem ".concat(_colors.default.black50);
var depth2 = "0 0 1rem ".concat(_colors.default.black50);
/**
 * Default Theme Breakpoints
 */

var breakpoint_xs = 320;
var breakpoint_sm = 600;
var breakpoint_md = 960;
var breakpoint_lg = 1280;
var breakpoint_xl = 1920;
/**
 * Default Theme
 */

var standardBorderRadius = "2px";
var duration = "250ms";
var ease = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
/**
 * Default Theme Elements
 */

var rui_components = {
  Accordion: {
    borderColor: _colors.default.black10,
    borderRadius: standardBorderRadius,
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "10px 15px",
    paddingBottom: _padding.default.fourteen,
    paddingLeft: _padding.default.sixteen,
    paddingRight: _padding.default.sixteen,
    paddingTop: _padding.default.fourteen,
    iconHeight: "24px",
    iconLeft: "30px",
    iconSpacingToLabel: "10px",
    iconWidth: "38px",
    headerHeight: "50px",
    headerHeightMobile: "60px",
    contentBackgroundColor: _colors.default.black02,
    openTransition: "max-height ".concat(duration, " ").concat(ease, ", padding 0ms ").concat(ease),
    closeTransition: "max-height ".concat(duration, " ").concat(ease, ", padding 0ms ").concat(ease, " ").concat(duration, ", border 0ms ").concat(ease, " ").concat(duration),
    iconTransition: "transform ".concat(duration, " ").concat(ease)
  },
  AccordionFormList: {
    actionButtonColor: _colors.default.coolGreyActive,
    actionButtonHoverColor: _colors.default.coolGreyHover,
    actionButtonIconColor: _colors.default.coolGrey500,
    actionButtonIconHeight: "20px",
    actionButtonIconMarginRight: "10px",
    actionButtonIconWidth: "20px",
    actionPaddingBottom: _padding.default.sixteen,
    actionPaddingLeft: "0px",
    actionPaddingRight: "0px",
    actionPaddingTop: _padding.default.sixteen,
    addActionPaddingBottom: _padding.default.sixteen,
    addActionPaddingLeft: _padding.default.sixteen,
    addActionPaddingRight: _padding.default.sixteen,
    addActionPaddingTop: _padding.default.sixteen,
    actionDeleteButtonHoverColor: _colors.default.redHover,
    spaceBetweenActiveActionButtons: _padding.default.sixteen
  },
  AccountProfileInfo: {
    spacingAfterEmail: "4px",
    spacingAfterName: "4px",
    spacingBetweenImageAndContent: "16px"
  },
  Address: {
    addressPropertyErrorBackgroundColor: _colors.default.red100,
    addressPropertyErrorBorderColor: _colors.default.red400,
    addressPropertyErrorBorderRadius: standardBorderRadius,
    addressPropertyErrorBorderStyle: "solid",
    addressPropertyErrorBorderWidth: "1px",
    addressPropertyErrorColor: _colors.default.red400,
    addressPropertyErrorPaddingBottom: "0",
    addressPropertyErrorPaddingLeft: _padding.default.four,
    addressPropertyErrorPaddingRight: _padding.default.four,
    addressPropertyErrorPaddingTop: "0"
  },
  AddressReview: {
    formSpacingTop: "40px"
  },
  BadgeOverlay: {
    fadedOpacity: "0.5"
  },
  BadgeOverlayBadgeLabel: {
    typography: {
      color: "inherit",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.5px"
    }
  },
  BadgeOverlayPrimaryBadge: {
    backgroundColor_backorder: _colors.default.coolGrey,
    backgroundColor_bestseller: _colors.default.teal,
    backgroundColor_lowQuantity: _colors.default.coolGrey,
    backgroundColor_sale: _colors.default.red300,
    backgroundColor_soldOut: _colors.default.coolGrey,
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    color_backorder: _colors.default.white,
    color_bestseller: _colors.default.white,
    color_lowQuantity: _colors.default.white,
    color_sale: _colors.default.white,
    color_soldOut: _colors.default.white,
    offsetBottom: "auto",
    offsetLeft: "8px",
    offsetRight: "auto",
    offsetTop: "8px",
    paddingBottom: _padding.default.four,
    paddingLeft: _padding.default.eight,
    paddingRight: _padding.default.eight,
    paddingTop: _padding.default.four
  },
  BadgeOverlaySecondaryBadge: {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: _colors.default.coolGrey,
    offsetBottom: "auto",
    offsetLeft: "auto",
    offsetRight: _padding.default.eight,
    offsetTop: "8px",
    paddingBottom: _padding.default.four,
    paddingLeft: _padding.default.eight,
    paddingRight: _padding.default.eight,
    paddingTop: _padding.default.four
  },
  Button: {
    backgroundColor_danger_active: _colors.default.red400,
    backgroundColor_danger_disabled: _colors.default.coolGrey200,
    backgroundColor_danger_hover: _colors.default.redHover,
    backgroundColor_danger: _colors.default.red,
    backgroundColor_default_active: _colors.default.coolGreyActive,
    backgroundColor_default_disabled: _colors.default.coolGrey200,
    backgroundColor_default_hover: _colors.default.coolGreyHover,
    backgroundColor_default: _colors.default.coolGrey,
    backgroundColor_important_active: _colors.default.reactionBlueActive,
    backgroundColor_important_disabled: _colors.default.coolGrey200,
    backgroundColor_important_hover: _colors.default.reactionBlueHover,
    backgroundColor_important: _colors.default.reactionBlue,
    backgroundColor_secondary_active: _colors.default.coolGreyActiveLight,
    backgroundColor_secondary_disabled: _colors.default.coolGrey200,
    backgroundColor_secondary_hover: _colors.default.coolGreyHoverLight,
    backgroundColor_secondary: "transparent",
    backgroundColor_secondaryDanger_active: _colors.default.red400,
    backgroundColor_secondaryDanger_disabled: _colors.default.coolGrey200,
    backgroundColor_secondaryDanger_hover: _colors.default.redHover,
    backgroundColor_secondaryDanger: "transparent",
    backgroundColor_textOnly_active: _colors.default.lightBlueGrey,
    backgroundColor_textOnly_disabled: "transparent",
    backgroundColor_textOnly_hover: _colors.default.paleGrey,
    backgroundColor_textOnly: "transparent",
    borderColor_danger_active: _colors.default.red400,
    borderColor_danger_disabled: _colors.default.coolGrey200,
    borderColor_danger_hover: _colors.default.redHover,
    borderColor_danger: _colors.default.red,
    borderColor_default_active: _colors.default.coolGreyActive,
    borderColor_default_disabled: _colors.default.coolGrey200,
    borderColor_default_hover: _colors.default.coolGreyHover,
    borderColor_default: _colors.default.coolGrey,
    borderColor_important_active: _colors.default.reactionBlueActive,
    borderColor_important_disabled: _colors.default.coolGrey200,
    borderColor_important_hover: _colors.default.reactionBlueHover,
    borderColor_important: _colors.default.reactionBlue,
    borderColor_secondary_active: _colors.default.coolGrey,
    borderColor_secondary_disabled: _colors.default.coolGrey200,
    borderColor_secondary_hover: _colors.default.coolGrey,
    borderColor_secondary: _colors.default.coolGrey,
    borderColor_secondaryDanger_active: _colors.default.red400,
    borderColor_secondaryDanger_disabled: _colors.default.coolGrey200,
    borderColor_secondaryDanger_hover: _colors.default.redHover,
    borderColor_secondaryDanger: _colors.default.red,
    borderColor_textOnly_active: _colors.default.lightBlueGrey,
    borderColor_textOnly_disabled: "transparent",
    borderColor_textOnly_hover: _colors.default.paleGrey,
    borderColor_textOnly: "transparent",
    borderRadius: standardBorderRadius,
    foregroundColor_danger_active: _colors.default.white,
    foregroundColor_danger_disabled: _colors.default.white,
    foregroundColor_danger_hover: _colors.default.white,
    foregroundColor_danger: _colors.default.white,
    foregroundColor_default_active: _colors.default.white,
    foregroundColor_default_disabled: _colors.default.white,
    foregroundColor_default_hover: _colors.default.white,
    foregroundColor_default: _colors.default.white,
    foregroundColor_important_active: _colors.default.white,
    foregroundColor_important_disabled: _colors.default.white,
    foregroundColor_important_hover: _colors.default.white,
    foregroundColor_important: _colors.default.white,
    foregroundColor_secondary_active: _colors.default.coolGrey500,
    foregroundColor_secondary_disabled: _colors.default.white,
    foregroundColor_secondary_hover: _colors.default.coolGrey500,
    foregroundColor_secondary: _colors.default.coolGrey500,
    foregroundColor_secondaryDanger_active: _colors.default.white,
    foregroundColor_secondaryDanger_disabled: _colors.default.white,
    foregroundColor_secondaryDanger_hover: _colors.default.white,
    foregroundColor_secondaryDanger: _colors.default.red,
    foregroundColor_textOnly_active: _colors.default.coolGrey400,
    foregroundColor_textOnly_disabled: _colors.default.coolGrey200,
    foregroundColor_textOnly_hover: _colors.default.coolGrey400,
    foregroundColor_textOnly: _colors.default.coolGrey400,
    horizontalPadding: _padding.default.twenty,
    minimumWidth: "100px",
    verticalPadding: _padding.default.ten,
    verticalPaddingShort: _padding.default.five
  },
  CartEmptyMessage: {
    textToButtonSpacing: "54px"
  },
  CartItem: {
    borderBottomColor: _colors.default.black05,
    borderBottomWidth: "1px",
    borderLeftColor: _colors.default.black05,
    borderLeftWidth: 0,
    borderRightColor: _colors.default.black05,
    borderRightWidth: 0,
    borderTopColor: _colors.default.black05,
    borderTopWidth: 0,
    imageContentSpacing: _padding.default.sixteen,
    paddingBottom: _padding.default.sixteen,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: _padding.default.sixteen,
    subtotalDisplaySpacingAbove: _padding.default.ten,
    quantityInputSpacingAbove: _padding.default.twelve,
    quantityInputSpacingBelow: _padding.default.eight,
    removeButtonColor_focus: _colors.default.coolGrey,
    removeButtonColor: _colors.default.coolGrey400,
    removeButtonSpacingAbove: _padding.default.eight,
    removeButtonSpacingBelow: 0
  },
  CartSummaryLeftColumnHeader: {
    typography: {
      color: _colors.default.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryRightColumnHeader: {
    typography: {
      color: _colors.default.black30,
      lineHeight: 1
    }
  },
  CartSummaryLeftColumn: {
    typography: {
      color: _colors.default.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryRightColumn: {
    typography: {
      color: _colors.default.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryTitle: {
    typography: {
      color: _colors.default.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryDiscount: {
    typography: {
      color: _colors.default.forestGreen300,
      lineHeight: 1
    }
  },
  CartSummarySurcharge: {
    typography: {
      color: _colors.default.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryTotal: {
    typography: {
      color: _colors.default.coolGrey500,
      lineHeight: 1
    }
  },
  CartItemDetailAttributes: {
    typography: {
      color: _colors.default.black65
    }
  },
  CartItemDetailTitle: {
    color_focus: _colors.default.coolGrey300,
    marginTop: 0,
    marginBottom: _padding.default.ten,
    marginLeft: 0,
    marginRight: 0,
    typography: {
      lineHeight: 1
    }
  },
  CartSummary: {
    backgroundColor: _colors.default.black02,
    borderColor: _colors.default.black10,
    borderWidth: "1px",
    denseBackgroundColor: "transparent",
    paddingBottom: 0,
    paddingLeft: _padding.default.sixteen,
    paddingRight: _padding.default.sixteen,
    paddingTop: _padding.default.sixteen,
    rowDensePaddingBottom: _padding.default.eight,
    rowDensePaddingTop: _padding.default.eight,
    rowPaddingBottom: _padding.default.sixteen,
    rowPaddingTop: _padding.default.sixteen
  },
  CatalogGrid: {
    fourPerRowMinWidth: breakpoint_md,
    threePerRowMinWidth: breakpoint_sm
  },
  CatalogGridItem: {
    mediaBackgroundColor: _colors.default.white,
    verticalSpacingBetweenImageAndInfo: _padding.default.ten
  },
  Checkbox: {
    borderColor: _colors.default.coolGrey500,
    borderRadius: standardBorderRadius,
    borderWidth: "2px",
    disabledColor: _colors.default.black10,
    disabledOpacity: ".5",
    focusStyle: "rgb(59, 153, 252) auto 5px",
    iconColor: _colors.default.coolGrey500,
    iconLeftOffset: "0.3em",
    iconSize: "0.875em",
    iconTopOffset: "0.25em",
    labelSpacing: "2.2em",
    leftSpacing: "0",
    size: "1.4em",
    topSpacing: "0",
    verticalSpacing: "17px"
  },
  CheckoutActionComplete: {
    mobileMargin: _padding.default.ten,
    paddingBottom: _padding.default.sixteen,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: _padding.default.sixteen
  },
  CheckoutActions: {
    borderBetweenColor: _colors.default.black10,
    borderBetweenWidth: "1px",
    borderLeftColor: _colors.default.black10,
    borderLeftWidth: 0,
    borderRightColor: _colors.default.black10,
    borderRightWidth: 0,
    itemPaddingBottom: _padding.default.sixteen,
    itemPaddingLeft: 0,
    itemPaddingRight: 0,
    itemPaddingTop: _padding.default.sixteen,
    placeOrderButtonWidth: "252px",
    spaceAbovePlaceOrderButton: _padding.default.sixteen,
    spaceBetweenActiveActionButtons: _padding.default.sixteen
  },
  CheckoutEmailAddress: {
    borderBottomColor: _colors.default.black10,
    borderBottomWidth: "2px",
    borderLeftColor: _colors.default.black10,
    borderLeftWidth: 0,
    borderRightColor: _colors.default.black10,
    borderRightWidth: 0,
    borderTopColor: _colors.default.black10,
    borderTopWidth: 0,
    paddingBottom: _padding.default.sixteen,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: _padding.default.sixteen,
    typography: {
      color: _colors.default.coolGrey500
    }
  },
  CheckoutTopHat: {
    backgroundColor: _colors.default.black05,
    height: "35px"
  },
  CheckoutTopHatMessage: {
    typography: {
      color: _colors.default.coolGrey500
    }
  },
  ErrorsBlock: {
    iconColor: _colors.default.red,
    iconSpacingToLabel: _padding.default.five,
    spacingAbove: _padding.default.ten,
    spacingBelow: _padding.default.ten,
    typography: {
      color: _colors.default.red
    }
  },
  Field: {
    spacingAbove: _padding.default.fifteen,
    spacingBelow: _padding.default.fifteen
  },
  FieldHelp: {
    spacingToInput: _padding.default.ten
  },
  FieldLabel: {
    color_default: _colors.default.black55,
    color_error: _colors.default.red,
    color_focus: _colors.default.teal,
    color_success: _colors.default.black55,
    spacingToInput: _padding.default.ten
  },
  FinalReviewCheckoutAction: {
    borderColor: _colors.default.black10,
    borderWidth: "1px",
    itemsWrapperPaddingBottom: 0,
    itemsWrapperPaddingLeft: _padding.default.sixteen,
    itemsWrapperPaddingRight: _padding.default.sixteen,
    itemsWrapperPaddingTop: 0,
    summaryWrapperPaddingBottom: 0,
    summaryWrapperPaddingLeft: _padding.default.sixteen,
    summaryWrapperPaddingRight: _padding.default.sixteen,
    summaryWrapperPaddingTop: 0
  },
  InlineAlert: {
    backgroundColor_error: _colors.default.redBackground,
    backgroundColor_information: _colors.default.reactionBlueBackground,
    backgroundColor_success: _colors.default.forestGreenBackground,
    backgroundColor_warning: _colors.default.yellowBackground,
    borderColor_error: _colors.default.redBorder,
    borderColor_information: _colors.default.reactionBlueBorder,
    borderColor_success: _colors.default.forestGreenBorder,
    borderColor_warning: _colors.default.yellowBorder,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: standardBorderRadius,
    buttonHeight: "15px",
    buttonPositionRight: "15px",
    buttonPositionTop: "15px",
    buttonWidth: "15px",
    color_error: _colors.default.red600,
    color_information: _colors.default.reactionBlue500,
    color_success: _colors.default.forestGreen600,
    color_warning: _colors.default.yellow600,
    paddingBottom: _padding.default.fifteen,
    paddingLeft: _padding.default.fifteen,
    paddingRight: _padding.default.fifteen,
    paddingTop: _padding.default.fifteen,
    transition: "border 0s ".concat(ease, " ").concat(duration, ", max-height 0s ").concat(ease, " ").concat(duration, ", padding 0s ").concat(ease, " ").concat(duration, ", opacity ").concat(duration, " ").concat(ease),
    titlePaddingBottom: "10px"
  },
  InPageMenuItemContainer: {
    backgroundColor_default: _colors.default.black05,
    backgroundColor_selected: _colors.default.reactionBlue100,
    marginBottom: "4px",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "0px",
    paddingBottom: "13px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "13px",
    typography: {
      lineHeight: 1
    }
  },
  InPageMenuItemIcon: {
    height: "24px",
    marginBottom: "0px",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "0px",
    typography: {
      lineHeight: 1
    },
    width: "24px"
  },
  InPageMenuItemText: {
    typography: {
      lineHeight: 1
    }
  },
  Input: {
    backgroundColor_dark: _colors.default.white,
    backgroundColor_default: _colors.default.black02,
    borderColor_default: _colors.default.black20,
    borderColor_error: _colors.default.red,
    borderColor_focus: _colors.default.teal,
    borderColor_success: _colors.default.teal,
    borderRadius: standardBorderRadius,
    clearButtonColor: _colors.default.coolGrey,
    clearButtonLargeBackgroundColor: _colors.default.white,
    clearButtonLargeBorderColor: _colors.default.coolGrey,
    color_default: _colors.default.coolGrey500,
    color_disabled: _colors.default.black25,
    color_error: _colors.default.red,
    color_focus: _colors.default.coolGrey500,
    color_success: _colors.default.black55,
    fontFamily: _typography.fontFamily,
    fontSize: "14px",
    horizontalPadding: _padding.default.ten,
    iconColor_default: _colors.default.black55,
    iconColor_disabled: _colors.default.black25,
    iconColor_error: _colors.default.red,
    iconColor_success: _colors.default.forestGreen,
    iconWrapperSize: "1.429em",
    lineHeight: 1,
    placeholderColor: _colors.default.black20,
    verticalPadding: _padding.default.eight
  },
  MiniCart: {
    borderBottomColor: _colors.default.black10,
    borderBottomWidth: "1px",
    borderLeftColor: _colors.default.black10,
    borderLeftWidth: "1px",
    borderRightColor: _colors.default.black10,
    borderRightWidth: "1px",
    borderTopColor: _colors.default.black10,
    borderTopWidth: "1px",
    listHeightToBeginScrolling: "420px",
    listPaddingBottom: 0,
    listPaddingLeft: _padding.default.ten,
    listPaddingRight: _padding.default.ten,
    listPaddingTop: 0,
    maxWidth: "360px"
  },
  MiniCartFooter: {
    borderTopColor: _colors.default.black10,
    borderTopWidth: "1px",
    boxShadow_overflow: depth1,
    boxShadow: depth0,
    paddingBottom: _padding.default.sixteen,
    paddingLeft: _padding.default.sixteen,
    paddingRight: _padding.default.sixteen,
    paddingTop: 0
  },
  MiniCartFooterMessage: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: _padding.default.eight
  },
  MiniCartSummary: {
    paddingBottom: _padding.default.eight,
    paddingLeft: _padding.default.eight,
    paddingRight: _padding.default.eight,
    paddingTop: _padding.default.eight
  },
  MiniCartSummaryLeft: {
    cellPaddingBottom: _padding.default.eight,
    cellPaddingLeft: _padding.default.eight,
    cellPaddingRight: _padding.default.five,
    cellPaddingTop: _padding.default.eight
  },
  MiniCartSummaryRight: {
    cellPaddingBottom: _padding.default.eight,
    cellPaddingLeft: _padding.default.five,
    cellPaddingRight: _padding.default.eight,
    cellPaddingTop: _padding.default.eight
  },
  MultiSelect: {
    borderBottomLeftRadius: standardBorderRadius,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: standardBorderRadius,
    indicatorColor: _colors.default.coolGrey500,
    letterSpacing: "0.3px",
    optionHoverColor: _colors.default.reactionBlue100,
    paddingLeft: _padding.default.two,
    paddingRight: _padding.default.two,
    selectedOptionBackgroundColor: _colors.default.reactionBlue200,
    textColor: _colors.default.coolGrey500,
    multiValueBackgroundColor: _colors.default.reactionBlue100,
    multiValueBorderColor: _colors.default.coolGrey300,
    multiValueBorderStyle: "solid",
    multiValueBorderWidth: "1px",
    multiValueBorderRadius: standardBorderRadius,
    multiValueLabelColor: _colors.default.black65,
    multiValueRemoveHoverBackgroundColor: _colors.default.coolGrey300,
    multiValueRemoveHoverColor: _colors.default.reactionBlue100,
    multiValueRemoveLeftSpacing: "5px"
  },
  PriceCompare: {
    typography: {
      color: _colors.default.black25
    }
  },
  ProfileImage: {
    backgroundColor: _colors.default.teal
  },
  ProfileImageInitials: {
    typography: {
      color: _colors.default.white
    }
  },
  ProgressiveImage: {
    backgroundColor: _colors.default.white
  },
  Select: {
    borderBottomLeftRadius: standardBorderRadius,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: standardBorderRadius,
    indicatorColor: _colors.default.coolGrey500,
    letterSpacing: "0.3px",
    optionHoverColor: _colors.default.reactionBlue100,
    selectedOptionBackgroundColor: _colors.default.reactionBlue200,
    textColor: _colors.default.coolGrey500,
    multiValueBackgroundColor: _colors.default.reactionBlue100,
    multiValueBorderColor: _colors.default.coolGrey300,
    multiValueBorderStyle: "solid",
    multiValueBorderWidth: "1px",
    multiValueBorderRadius: standardBorderRadius,
    multiValueLabelColor: _colors.default.black65,
    multiValueRemoveHoverBackgroundColor: _colors.default.coolGrey300,
    multiValueRemoveHoverColor: _colors.default.reactionBlue100,
    multiValueRemoveLeftSpacing: "5px"
  },
  SelectableItemRadioButton: {
    backgroundColor: _colors.default.white,
    borderColor: _colors.default.coolGrey500,
    borderWidth: "2px",
    checkSize: "10px",
    color: _colors.default.coolGrey500,
    disabledCursor: "not-allowed",
    disabledFillColor: _colors.default.black10,
    disabledOpacity: ".5",
    focus: "0 0 0 2px ".concat(_colors.default.teal),
    focusOutline: "1px solid transparent",
    size: "20px",
    spacingToLabel: "10px"
  },
  SelectableList: {
    borderColor: _colors.default.black10,
    borderRadius: standardBorderRadius,
    borderStyle: "solid",
    borderWidth: "1px",
    height: "50px",
    heightMobile: "60px",
    iconHeight: "24px",
    iconLeft: "30px",
    iconSpacingToLabel: "10px",
    iconWidth: "38px",
    itemPaddingBottom: "0",
    itemPaddingLeft: "10px",
    itemPaddingRight: "10px",
    itemPaddingTop: "0",
    leftAlignedLabelFontWeight: 700,
    leftAlignedDetailSpacingToLabel: "2px",
    horizontalItemPaddingBottom: _padding.default.twenty,
    horizontalItemPaddingLeft: _padding.default.twenty,
    horizontalItemPaddingRight: _padding.default.twenty,
    horizontalItemPaddingTop: _padding.default.twenty,
    horizontalFirstItemPaddingRight: "40px",
    horizontalLastItemPaddingLeft: "40px",
    stackedSpacingToLabel: "30px",
    stackedSpacingBelowLabel: "10px"
  },
  SelectMenu: {
    borderBottomColor: _colors.default.black20,
    borderBottomLeftRadius: standardBorderRadius,
    borderBottomRightRadius: 0,
    borderBottomWidth: "1px",
    borderLeftColor: _colors.default.black20,
    borderLeftWidth: "1px",
    borderRightColor: _colors.default.black20,
    borderRightWidth: "1px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: standardBorderRadius
  },
  ShopLogo: {
    height: "auto"
  },
  StockWarning: {
    typography: {
      color: _colors.default.red
    }
  },
  Textarea: {
    clearButtonFontSize: "12px",
    clearButtonPadding: "10px",
    height: "60px",
    iconRight: 0,
    iconTop: _padding.default.ten,
    lineHeight: "1.5"
  }
};
var _default = {
  rui_breakpoints: {
    xs: breakpoint_xs,
    sm: breakpoint_sm,
    md: breakpoint_md,
    lg: breakpoint_lg,
    xl: breakpoint_xl
  },
  rui_components: rui_components,
  rui_typography: _typography.default
};
exports.default = _default;