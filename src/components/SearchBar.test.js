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
    onSearchSubmitMock = jest.fn();
    wrapper = setup({ onSearchSubmit: onSearchSubmitMock });
  });

  test("main component without error", () => {
    const component = findByTestAttr(wrapper, "component-search-bar");
    expect(component.length).toBe(1);
  });

  test("input field without error", () => {
    const inputElement = findByTestAttr(wrapper, "input-field");
    expect(inputElement.length).toBe(1);
  });

  test("submit button without error", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.length).toBe(1);
  });

  test("warning message if form submitted without text", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", {
      preventDefault: () => {},
    });

    const warningMessage = findByTestAttr(wrapper, "warning-message");
    expect(warningMessage.text().length).not.toBe(0);
  });
});

describe("If search term is submitted", () => {
  let wrapper;
  let onSearchSubmitMock;
  let submitButton;

  beforeEach(() => {
    onSearchSubmitMock = jest.fn();
    wrapper = setup({ onSearchSubmit: onSearchSubmitMock });
    submitButton = findByTestAttr(wrapper, "submit-button");

    const inputElement = findByTestAttr(wrapper, "input-field");
    const eventObj = { target: { value: "some-search" } };

    inputElement.simulate("change", eventObj);
  });

  test("search term in state should be updated", () => {
    const updatedStateTerm = wrapper.state("term");
    expect(updatedStateTerm).toBe("some-search");
  });

  test("should call onSearchSubmit function from props", () => {
    submitButton.simulate("click", { preventDefault() {} });
    const onSearchSubmitCallCount = onSearchSubmitMock.mock.calls.length;
    expect(onSearchSubmitCallCount).toBe(1);
  });

  test("should call onSearchSubmit with input value as argument", () => {
    submitButton.simulate("click", { preventDefault() {} });
    const searchTermArg = onSearchSubmitMock.mock.calls[0][0];
    expect(searchTermArg).toBe("some-search");
  });

  test("should clear input field after search submit", () => {
    submitButton.simulate("click", { preventDefault() {} });
    expect(wrapper.state("term")).toBe("");
  });
});
