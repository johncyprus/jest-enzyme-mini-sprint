// Searches a wrapper for elements with a data-test attribute that we set.
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}