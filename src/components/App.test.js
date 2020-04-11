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

  /* TO DO: Write a test to assert that the App component rendered */

  /* TO DO: Write a test to assert that the SearchBar component rendered inside App */

  /* TO DO: Write a test to assert that the ImageList component rendered inside App */
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
    expect(instance.onSearchSubmit).FILL_ME_IN;
  });

  test("should call onSearchSubmit with 'random' on componentDidMount", () => {
    expect(instance.onSearchSubmit).FILL_ME_IN;
  });
});

describe("Unsplash API call", () => {
  let wrapper;
  let mockResp = { data: results };

  /* unsplashMock is a mock of the asynchronous axios function called inside App */
  let unsplashMock = jest.fn(unsplash.get);

  beforeEach(() => {
    wrapper = setup();

    /* TO DO: Make unsplashMock resolve with some mock data to mimic the actual function */
    unsplashMock.FILL_ME_IN;
  });

  test("should respond with promised data", () => {
    return unsplashMock().then((response) => {
      expect(response.data).toEqual("FILL_ME_IN");
    });
  });
});
