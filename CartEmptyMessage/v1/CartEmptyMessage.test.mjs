import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import Button from "../../Button/v1";
import CartEmptyMessage from "./CartEmptyMessage";
test("default cart empty button", function () {
  var onClick = function onClick() {};

  var component = renderer.create(React.createElement(CartEmptyMessage, {
    components: {
      Button: Button
    },
    onClick: onClick
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("custom cart empty button", function () {
  var onClick = function onClick() {};

  var component = renderer.create(React.createElement(CartEmptyMessage, {
    buttonText: "Custom button text",
    components: {
      Button: Button
    },
    messageText: "Custom message text",
    onClick: onClick
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});