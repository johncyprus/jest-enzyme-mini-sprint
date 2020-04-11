import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../testUtils";
import ImageCard from "./ImageCard";

/*
 - ImageCard expects a prop object named "image" that is structured this way.
*/
const defaultProps = {
  image: {
    description: "Blorange",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjcwNH0",
      full:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjExMjcwNH0",
      regular:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMjcwNH0",
      small:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExMjcwNH0",
      thumb:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjExMjcwNH0",
    },
  },
};

const setup = () => {
  return shallow(<ImageCard {...defaultProps} />);
};

let wrapper;

beforeEach(() => {
  /*FILL_ME_IN*/
});

test("should render component without error", () => {
  const component = "FILL_ME_IN";
  expect("FILL_ME_IN").toBe("FILL_ME_IN_TOO");
});

test("should render img element when image prop is provided", () => {
  const imgElement = "FILL_ME_IN";
  expect("FILL_ME_IN").toBe("FILL_ME_IN_TOO");
});

test("should have spans count of 0 in initial state", () => {
  const initialSpansState = "FILL_ME_IN";
  expect("FILL_ME_IN").toBe("FILL_ME_IN_TOO");
});

test("should not throw warning with expected props", () => {
  /*FILL_ME_IN*/
});
