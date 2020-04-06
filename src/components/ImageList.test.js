import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../testUtils";
import ImageList from "./ImageList";

/*
 - ImageList expects a prop array named "images"
 - We provide a default prop to the shallow component so that it may mimic our original component
*/
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
    { image: "image", id: 0 },
  ],
};

/* 'setup' is a helper function that returns a shallow render of ImageList */
const setup = () => {
  return shallow(<ImageList {...defaultProps} />);
};

/* Will contain the shallow component returned from 'setup' for each test */
let wrapper;

/* We use a beforeEach so that we won't have to write wrapper repeatedly on each test */
beforeEach(() => {
  wrapper = setup();
});

test("should render component without error", () => {
  /* 'findByTestAttr' searches the wrapper for an element with a specific attribute */
  const component = findByTestAttr(wrapper, "component-image-list");

  // console.log("what is component?:", component.debug());
  expect(component.length).toBe(1);
});

test("should render 10 child components when passed an images prop", () => {
  expect(wrapper.children().length).toBe(10);
});

test("should not throw warning with expected props", () => {
  /* 'checkProps' will make sure that ImageList is receiving the appropriate type of props */
  checkProps(ImageList, defaultProps);
});
