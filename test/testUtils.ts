/**
 * Function to find tests by attribute
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - shallow enzyme wrapper
 * @param {string} val - name to find attribute
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
