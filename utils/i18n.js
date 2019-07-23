"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nextI18next = _interopRequireDefault(require("next-i18next"));

var NextI18NextInstance = new _nextI18next.default({
  defaultLanguage: 'en',
  otherLanguages: ['en']
});
var _default = NextI18NextInstance;
exports.default = _default;