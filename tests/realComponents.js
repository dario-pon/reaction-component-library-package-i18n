"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iconClear = _interopRequireDefault(require("../svg/iconClear"));

var _iconDismiss = _interopRequireDefault(require("../svg/iconDismiss"));

var _iconError = _interopRequireDefault(require("../svg/iconError"));

var _iconValid = _interopRequireDefault(require("../svg/iconValid"));

var _iconExpand = _interopRequireDefault(require("../svg/iconExpand"));

var _iconPlus = _interopRequireDefault(require("../svg/iconPlus"));

var _iconAmericanExpress = _interopRequireDefault(require("../svg/iconAmericanExpress"));

var _iconDiscover = _interopRequireDefault(require("../svg/iconDiscover"));

var _iconLock = _interopRequireDefault(require("../svg/iconLock"));

var _iconMastercard = _interopRequireDefault(require("../svg/iconMastercard"));

var _iconVisa = _interopRequireDefault(require("../svg/iconVisa"));

var _spinner = _interopRequireDefault(require("../svg/spinner"));

var _v = _interopRequireDefault(require("../components/Accordion/v1"));

var _v2 = _interopRequireDefault(require("../components/AccordionFormList/v1"));

var _v3 = _interopRequireDefault(require("../components/Address/v1"));

var _v4 = _interopRequireDefault(require("../components/AddressBook/v1"));

var _v5 = _interopRequireDefault(require("../components/AddressCapture/v1"));

var _v6 = _interopRequireDefault(require("../components/AddressChoice/v1"));

var _v7 = _interopRequireDefault(require("../components/AddressForm/v1"));

var _v8 = _interopRequireDefault(require("../components/AddressReview/v1"));

var _v9 = _interopRequireDefault(require("../components/BadgeOverlay/v1"));

var _v10 = _interopRequireDefault(require("../components/Button/v1"));

var _v11 = _interopRequireDefault(require("../components/CartItem/v1"));

var _v12 = _interopRequireDefault(require("../components/CartItemDetail/v1"));

var _v13 = _interopRequireDefault(require("../components/CartItems/v1"));

var _v14 = _interopRequireDefault(require("../components/CartSummary/v1"));

var _v15 = _interopRequireDefault(require("../components/CatalogGrid/v1"));

var _v16 = _interopRequireDefault(require("../components/CatalogGridItem/v1"));

var _v17 = _interopRequireDefault(require("../components/Checkbox/v1"));

var _v18 = _interopRequireDefault(require("../components/CheckoutAction/v1"));

var _v19 = _interopRequireDefault(require("../components/CheckoutActionComplete/v1"));

var _v20 = _interopRequireDefault(require("../components/CheckoutActionIncomplete/v1"));

var _v21 = _interopRequireDefault(require("../components/ErrorsBlock/v1"));

var _v22 = _interopRequireDefault(require("../components/Field/v1"));

var _v23 = _interopRequireDefault(require("../components/InlineAlert/v1"));

var _v24 = _interopRequireDefault(require("../components/InPageMenuItem/v1"));

var _v25 = _interopRequireDefault(require("../components/InventoryStatus/v1"));

var _v26 = _interopRequireDefault(require("../components/Link/v1"));

var _v27 = _interopRequireDefault(require("../components/MiniCartSummary/v1"));

var _v28 = _interopRequireDefault(require("../components/MultiSelect/v1"));

var _v29 = _interopRequireDefault(require("../components/PhoneNumberInput/v1"));

var _v30 = _interopRequireDefault(require("../components/Price/v1"));

var _v31 = _interopRequireDefault(require("../components/ProfileImage/v1"));

var _v32 = _interopRequireDefault(require("../components/ProgressiveImage/v1"));

var _v33 = _interopRequireDefault(require("../components/QuantityInput/v1"));

var _v34 = _interopRequireDefault(require("../components/RegionInput/v1"));

var _v35 = _interopRequireDefault(require("../components/Select/v1"));

var _v36 = _interopRequireDefault(require("../components/StockWarning/v1"));

var _v37 = _interopRequireDefault(require("../components/StripeForm/v1"));

var _v38 = _interopRequireDefault(require("../components/SelectableItem/v1"));

var _v39 = _interopRequireDefault(require("../components/SelectableList/v1"));

var _v40 = _interopRequireDefault(require("../components/TextInput/v1"));

/**
 * This components context is for tests that need the real components
 * available, in order to test event handling and such.
 */
var _default = {
  Accordion: _v.default,
  AccordionFormList: _v2.default,
  Address: _v3.default,
  AddressBook: _v4.default,
  AddressCapture: _v5.default,
  AddressChoice: _v6.default,
  AddressForm: _v7.default,
  AddressReview: _v8.default,
  BadgeOverlay: _v9.default,
  Button: _v10.default,
  CartItem: _v11.default,
  CartItemDetail: _v12.default,
  CartItems: _v13.default,
  CartSummary: _v14.default,
  CatalogGrid: _v15.default,
  CatalogGridItem: _v16.default,
  Checkbox: _v17.default,
  CheckoutAction: _v18.default,
  CheckoutActionComplete: _v19.default,
  CheckoutActionIncomplete: _v20.default,
  ErrorsBlock: _v21.default,
  Field: _v22.default,
  iconClear: _iconClear.default,
  iconDismiss: _iconDismiss.default,
  iconError: _iconError.default,
  iconExpand: _iconExpand.default,
  iconPlus: _iconPlus.default,
  iconValid: _iconValid.default,
  iconAmericanExpress: _iconAmericanExpress.default,
  iconDiscover: _iconDiscover.default,
  iconLock: _iconLock.default,
  iconMastercard: _iconMastercard.default,
  iconVisa: _iconVisa.default,
  InlineAlert: _v23.default,
  InPageMenuItem: _v24.default,
  InventoryStatus: _v25.default,
  Link: _v26.default,
  MiniCartSummary: _v27.default,
  MultiSelect: _v28.default,
  PhoneNumberInput: _v29.default,
  Price: _v30.default,
  ProfileImage: _v31.default,
  ProgressiveImage: _v32.default,
  QuantityInput: _v33.default,
  RegionInput: _v34.default,
  Select: _v35.default,
  spinner: _spinner.default,
  StockWarning: _v36.default,
  StripeForm: _v37.default,
  SelectableItem: _v38.default,
  SelectableList: _v39.default,
  TextInput: _v40.default
};
exports.default = _default;