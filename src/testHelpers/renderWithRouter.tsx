import { ReactElement, ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History, InitialEntry } from 'history';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

export default (
  ui: ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: {
    route?: InitialEntry;
    history?: History<unknown>;
  } = {}
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};
