import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../testUtils";
import ImageCard from "./ImageCard";

/*
 - ImageCard is expecting a prop object named "image"
 - We provide a default prop to the shallow component so that it may act as our original component
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
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjExMjcwNH0"
    }
  }
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ImageCard {...setupProps} />);
};

test("should render component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-image-card");
  expect(component.length).toBe(1);
});

test("should render img element when image prop is provided", () => {
  const wrapper = setup();
  const imgElement = findByTestAttr(wrapper, "image");
  expect(imgElement.length).toBe(1);
});

test("should have spans count of 0 in initial state", () => {
  const wrapper = setup();
  const initialSpansState = wrapper.state("spans");
  expect(initialSpansState).toBe(0);
});

test("should not throw warning with expected props", () => {
  checkProps(ImageCard, defaultProps);
});

/*
 - Currently unable to create this test. 
 - Cannot invoke componentDidMount() on the instance because enzyme does not recognize .addEventListener as a function
 - Come back later and see how we can mock this test better.
*/

// test('should update spans count in state on componentDidMount', () => {
//     const map = {};
//     window.addEventListener = jest.fn((event, callback) => {
//         map[event] = callback;
//     });

//     const wrapper = setup();
//     const mockRef = findByTestAttr(wrapper, 'image');
//     wrapper.instance().imageRef.current = mockRef;

//     // Invoking componentDidMount
//     wrapper.instance().componentDidMount();

//     // Checking spans after componentDidMount
//     const updatedSpansState = wrapper.state('spans');
//     expect(updatedSpansState).notToBe(0);
// });
