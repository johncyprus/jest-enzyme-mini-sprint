// Utility that returns an error instead of displaying a warning (the default behavior of prop-types)
import checkPropTypes from "check-prop-types";

// Searches a wrapper for elements with a data-test attribute that we set.
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// Checks component proptypes using checkPropTypes utility. Expected return value of propError is undefined if there is no error.
export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
