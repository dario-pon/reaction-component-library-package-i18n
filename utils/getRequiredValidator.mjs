import _regeneratorRuntime from "@babel/runtime/regenerator";
import "core-js/modules/web.dom.iterable";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import get from "lodash.get";
/**
 *
 * @method getRequiredValidator
 * @summary check if a inputs value is undefined, null or empty string and creates an errors array
 * @param {String} requiredFields - name of required field you want to validate
 * @return {Object[]} errors - array of field error objects
 */

export default function getRequiredValidator() {
  for (var _len = arguments.length, requiredFields = new Array(_len), _key = 0; _key < _len; _key++) {
    requiredFields[_key] = arguments[_key];
  }

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
                requiredFields.forEach(function (requiredField) {
                  var value = get(obj, requiredField);

                  if (value === null || value === undefined || value === "") {
                    errors.push({
                      name: requiredField,
                      message: "".concat(requiredField, " is required")
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