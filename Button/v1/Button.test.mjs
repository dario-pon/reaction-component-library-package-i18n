import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import mockComponents from "../../../tests/mockComponents";
import Button from "./Button";
var fakeEvent = {
  preventDefault: function preventDefault() {}
};
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(Button, {
    components: mockComponents,
    title: "title",
    className: "a b"
  }, "Submit"));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onClick when clicked", function () {
  var clickSpy = jest.fn();
  var item = mount(React.createElement(Button, {
    components: mockComponents,
    onClick: clickSpy
  }));
  item.simulate("click", fakeEvent);
  expect(clickSpy).toHaveBeenCalled();
});
test("calls onClick only once when double-clicked before timeout", function () {
  var clickSpy = jest.fn();
  var item = mount(React.createElement(Button, {
    components: mockComponents,
    onClick: clickSpy
  }));
  item.simulate("click", fakeEvent);
  item.simulate("click", fakeEvent);
  expect(clickSpy.mock.calls.length).toBe(1);
});
test("calls onClick twice when double-clicked after timeout", function (done) {
  var clickSpy = jest.fn();
  var item = mount(React.createElement(Button, {
    components: mockComponents,
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