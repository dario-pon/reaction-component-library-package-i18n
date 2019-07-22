import _regeneratorRuntime from "@babel/runtime/regenerator";
import "core-js/modules/web.dom.iterable";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import get from "lodash.get";
/**
 *
 * @method getPhoneNumberValidator
 * @summary
 * @param {String} phoneFields - name of phone number field you want to validate
 * @return {Object[]} errors - array of field error objects
 */

export default function getPhoneNumberValidator() {
  for (var _len = arguments.length, phoneFields = new Array(_len), _key = 0; _key < _len; _key++) {
    phoneFields[_key] = arguments[_key];
  }

  // eslint-disable-next-line
  var phoneRegx = /^[\s()+-]*([0-9][\s()+-]*){6,20}(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(obj) {
        var errors;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                errors = [];
                phoneFields.forEach(function (phoneField) {
                  var value = get(obj, phoneField);

                  if (!phoneRegx.test(String(value).toLowerCase())) {
                    errors.push({
                      name: phoneField,
                      message: "".concat(phoneField, " is invalid")
                    });
                  }
                });
                return _context.abrupt("return", errors);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}