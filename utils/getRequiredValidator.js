"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRequiredValidator;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _lodash = _interopRequireDefault(require("lodash.get"));

/**
 *
 * @method getRequiredValidator
 * @summary check if a inputs value is undefined, null or empty string and creates an errors array
 * @param {String} requiredFields - name of required field you want to validate
 * @return {Object[]} errors - array of field error objects
 */
function getRequiredValidator() {
  for (var _len = arguments.length, requiredFields = new Array(_len), _key = 0; _key < _len; _key++) {
    requiredFields[_key] = arguments[_key];
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(obj) {
        var errors;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                errors = [];
                requiredFields.forEach(function (requiredField) {
                  var value = (0, _lodash.default)(obj, requiredField);

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