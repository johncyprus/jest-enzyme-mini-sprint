import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../testUtils";
import SearchBar from "./SearchBar";

const setup = (props = {}) => {
  return shallow(<SearchBar {...props} />);
};

describe("Renders", () => {
  let wrapper;
  let onSearchSubmitMock;

  beforeEach(() => {
    /* We mock a prop function called onSearchSubmit with jest.fn() and pass it to our shallow render of SearchBar */
    onSearchSubmitMock = jest.fn();
    wrapper = setup({ onSearchSubmit: onSearchSubmitMock });
  });

  test("main component without error", () => {
    /*FILL_ME_IN*/
  });

  test("input field without error", () => {
    /*FILL_ME_IN*/
  });

  test("submit button without error", () => {
    /*FILL_ME_IN*/
  });

  test("warning message if form submitted without text", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("FILL_ME_IN");

    const warningMessage = findByTestAttr("FILL_ME_IN");
    expect(warningMessage.text().length).not.toBe(0);
  });
});

describe("If search term is submitted", () => {
  let wrapper;
  let onSearchSubmitMock;
  let submitButton;

  beforeEach(() => {
    /* TO DO:
      1. Assign a mock function to onSearchSubmitMock
      2. Create wrapper
      3. Find the submit button
      4. Find the text input field
      5. Fill out eventObj
    */
    const inputElement = "FILL ME IN";
    const eventObj = {};

    inputElement.simulate("FILL_ME_IN");
  });

  test("search term in state should be updated", () => {
    /*FILL_ME_IN*/
  });

  test("should call onSearchSubmit function from props", () => {
    submitButton.simulate("click", { preventDefault() {} });
    const onSearchSubmitCallCount = "FILL_ME_IN";
    expect(onSearchSubmitCallCount).toBe(1);
  });

  test("should call onSearchSubmit with input value as argument", () => {
    submitButton.simulate("click", { preventDefault() {} });
    const searchTermArg = "FILL_ME_IN";
    expect(searchTermArg).toBe("FILL_ME_IN_TOO");
  });

  test("should clear input field after search submit", () => {
    submitButton.simulate("click", { preventDefault() {} });
    expect("FILL_ME_IN").toBe("");
  });
});
