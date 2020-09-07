import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "#test/testUtils";
import App from "&components/App";

/**
 * Function to setup wrapper
 * @function setup
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (props: Object = {}) => {
  return shallow(<App {...props} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "appComponent");
  expect(appComponent.length).toBe(1);
});
