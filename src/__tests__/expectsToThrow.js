/* eslint-disable no-console */
const expectToThrow = (func) => {
  // The error still gets printed to the console
  // so mock it before throwing the error
  jest.spyOn(console, 'error');
  console.error.mockImplementation(() => {});

  expect(func).toThrow();

  console.error.mockRestore();
};

export default expectToThrow;
