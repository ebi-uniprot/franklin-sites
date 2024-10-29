// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

/**
 * React useId mock, to make sure ids are reset between each test and not
 * dependent on order of tests and IDs are stable even when more tests are added
 */
let id = 0;

beforeEach(() => {
  id = 0;
});

// eslint-disable-next-line no-plusplus
const mockedUseId = () => ++id;

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useId: mockedUseId,
}));
