import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../testUtils";
import unsplash from "../api/unsplash.js";
import App from "./App";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const setup = () => {
  return shallow(<App />);
};

let example = "image";
let results = [{ example }, { example }, { example }, { example }, { example }];

describe("Renders", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("component without error", () => {
    let component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  });

  test("SearchBar without error", () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });

  test("ImageList without error", () => {
    expect(wrapper.find(ImageList).length).toBe(1);
  });
});

describe("On componentDidMount", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = setup();
    instance = wrapper.instance();
    spyOn(instance, "onSearchSubmit");
    instance.componentDidMount();
  });

  test("should run onSearchSubmit on componentDidMount", () => {
    expect(instance.onSearchSubmit).toHaveBeenCalled();
  });

  test("should call onSearchSubmit with 'random' on componentDidMount", () => {
    expect(instance.onSearchSubmit).toHaveBeenCalledWith("random");
  });
});

describe("Unsplash API call", () => {
  let wrapper;
  let mockResp = { data: results };
  let unsplashMock = jest.fn(unsplash.get);

  beforeEach(() => {
    wrapper = setup();
    unsplashMock.mockResolvedValue(mockResp);
  });

  test("should respond with promised data", () => {
    return unsplashMock().then((response) => {
      expect(response.data).toEqual(mockResp.data);
    });
  });
});
