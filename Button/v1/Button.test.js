"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _Button = _interopRequireDefault(require("./Button"));

// auto-add i18n 
var fakeEvent = {
  preventDefault: function preventDefault() {}
};
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Button.default, {
    components: _mockComponents.default,
    title: "title",
    className: "a b"
  }, "Submit"));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onClick when clicked", function () {
  var clickSpy = jest.fn();
  var item = (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
    components: _mockComponents.default,
    onClick: clickSpy
  }));
  item.simulate("click", fakeEvent);
  expect(clickSpy).toHaveBeenCalled();
});
test("calls onClick only once when double-clicked before timeout", function () {
  var clickSpy = jest.fn();
  var item = (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
    components: _mockComponents.default,
    onClick: clickSpy
  }));
  item.simulate("click", fakeEvent);
  item.simulate("click", fakeEvent);
  expect(clickSpy.mock.calls.length).toBe(1);
});
test("calls onClick twice when double-clicked after timeout", function (done) {
  var clickSpy = jest.fn();
  var item = (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
    components: _mockComponents.default,
    onClick: clickSpy
  }));
  item.simulate("click", fakeEvent); // The debounce timeout for double clicking the button is 600ms
  // so we must wait until that is over before clicking it again.

  setTimeout(function () {
    item.simulate("click", fakeEvent);
    expect(clickSpy.mock.calls.length).toBe(2);
    done();
  }, 750);
});