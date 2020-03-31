import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../testUtils";
import ImageList from "./ImageList";

const defaultProps = {
  images: [
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 },
    { image: "image", id: 0 }
  ]
};

const setup = () => {
  return shallow(<ImageList {...defaultProps} />);
};

test("should render component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-image-list");
  expect(component.length).toBe(1);
});

test("should render 10 child components when passed an images prop", () => {
  const wrapper = setup();
  expect(wrapper.children().length).toBe(10);
});

test("should not throw warning with expected props", () => {
  checkProps(ImageList, defaultProps);
});
