import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";
import { withComponents } from "@reactioncommerce/components-context";
import { addressToString, CustomPropTypes } from "../../utils";
var NORMAL = "normal";
var REVIEW = "review";

var AddressBook =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AddressBook, _Component);

    function AddressBook() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, AddressBook);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddressBook)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        status: _this.currentStatus
      };
      _this._addressReview = null;
      _this._accordionFormList = null;

      _this.handleAddAddress =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee(value) {
              var onAddressAdded;
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onAddressAdded = _this.props.onAddressAdded;
                      _context.next = 3;
                      return onAddressAdded(value);

                    case 3:
                      if (_this._accordionFormList) {
                        _this._accordionFormList.showList();
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();

      _this.handleDeleteAddress =
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee2(id) {
              var onAddressDeleted;
              return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onAddressDeleted = _this.props.onAddressDeleted;
                      _context2.next = 3;
                      return onAddressDeleted(id);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }();

      _this.handleEditAddress =
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee3(value, _id) {
              var onAddressEdited;
              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      onAddressEdited = _this.props.onAddressEdited;
                      _context3.next = 3;
                      return onAddressEdited(_id, value);

                    case 3:
                      if (_this._accordionFormList) {
                        _this._accordionFormList.toggleAccordionForItem(_id);
                      }

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

          return function (_x3, _x4) {
            return _ref3.apply(this, arguments);
          };
        }();

      return _this;
    }

    _createClass(AddressBook, [{
      key: "renderAccordionFormList",
      //
      // Render Methods
      //
      value: function renderAccordionFormList() {
        var _this2 = this;

        var _this$props = this.props,
          addressBook = _this$props.account.addressBook,
          _this$props$component = _this$props.components,
          AccordionFormList = _this$props$component.AccordionFormList,
          AddressForm = _this$props$component.AddressForm,
          isSaving = _this$props.isSaving;
        var items = addressBook.map(function (_ref4) {
          var _id = _ref4._id,
            address = _objectWithoutProperties(_ref4, ["_id"]);

          return {
            id: _id,
            detail: addressToString(address),
            itemEditFormProps: {
              isOnDarkBackground: true,
              isSaving: isSaving,
              onSubmit: function onSubmit(value) {
                _this2.handleEditAddress(value, _id);
              },
              value: address
            },
            label: address.fullName
          };
        });
        var itemAddFormProps = {
          isSaving: isSaving,
          onSubmit: this.handleAddAddress
        };
        return React.createElement(AccordionFormList, {
          addNewItemButtonText: "Add a new address",
          components: {
            ItemAddForm: AddressForm,
            ItemEditForm: AddressForm
          },
          deleteItemButtonText: "Delete address",
          entryFormSubmitButtonText: "Save Changes",
          itemAddFormProps: itemAddFormProps,
          items: items,
          onItemDeleted: this.handleDeleteAddress,
          ref: function ref(instance) {
            _this2._accordionFormList = instance;
          }
        });
      }
    }, {
      key: "renderAddressReview",
      value: function renderAddressReview() {
        var _this3 = this;

        var _this$props2 = this.props,
          AddressReview = _this$props2.components.AddressReview,
          value = _this$props2.value,
          validatedValue = _this$props2.validatedValue;
        return React.createElement(AddressReview, {
          ref: function ref(el) {
            _this3._addressReview = el;
          },
          addressEntered: value,
          addressSuggestion: validatedValue
        });
      }
    }, {
      key: "render",
      value: function render() {
        var className = this.props.className;
        var status = this.state.status;
        return React.createElement("div", {
          className: className
        }, status === REVIEW ? this.renderAddressReview() : this.renderAccordionFormList());
      }
    }, {
      key: "currentStatus",
      //
      // Helper Methods
      //
      get: function get() {
        // eslint-disable-next-line
        return isEmpty(this.props.validatedValue) ? NORMAL : REVIEW;
      }
    }, {
      key: "hasAddress",
      get: function get() {
        var addressBook = this.props.account.addressBook;
        return !isEmpty(addressBook);
      } //
      // Handler Methods
      //

    }]);

    return AddressBook;
  }(Component);

AddressBook.propTypes = {
  /**
   * User account data.
   */
  account: PropTypes.shape({
    /**
     * Users saved addresses
     */
    addressBook: CustomPropTypes.addressBook
  }),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * If you've set up a components context using @reactioncommerce/components-context
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction AccordionFormList component or your own component that
     * accepts compatible props.
     */
    AccordionFormList: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction AddressForm component or your own component that
     * accepts compatible props.
     */
    AddressForm: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction AddressReview component or your own component that
     * accepts compatible props.
     */
    AddressReview: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Is data being saved
   */
  isSaving: PropTypes.bool,

  /**
   * Handles new address added to address book
   */
  onAddressAdded: PropTypes.func,

  /**
   * Handles address deletion from address book
   */
  onAddressDeleted: PropTypes.func,

  /**
   * Handles editing address in address book
   */
  onAddressEdited: PropTypes.func,

  /**
   * Validated entered value for the AddressReview
   */
  validatedValue: PropTypes.object,

  /**
   * Value for the AddressFrom
   */
  value: PropTypes.object
};
AddressBook.defaultProps = {
  account: {
    addressBook: []
  },
  isSaving: false,
  onAddressAdded: function onAddressAdded() { },
  onAddressDeleted: function onAddressDeleted() { },
  onAddressEdited: function onAddressEdited() { },
  validatedValue: {},
  value: {}
};
export default i18n.withTranslation()(withComponents(AddressBook)); // auto-add i18n