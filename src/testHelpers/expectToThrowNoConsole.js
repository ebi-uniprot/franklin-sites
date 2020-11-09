/* eslint-disable no-console */
import { noop } from 'lodash-es';

const expectToThrowNoConsole = (func) => {
  // The error still gets printed to the console
  // so mock it before throwing the error
  jest.spyOn(console, 'error');
  console.error.mockImplementation(noop);

  expect(func).toThrow();

  console.error.mockRestore();
};

export default expectToThrowNoConsole;
