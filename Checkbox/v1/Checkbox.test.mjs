import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "./Checkbox";
test("renders with props", function () {
  var component = renderer.create(React.createElement(Checkbox, {
    label: t('Label')
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders disabled", function () {
  var component = renderer.create(React.createElement(Checkbox, {
    label: t('Disabled'),
    isReadOnly: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});