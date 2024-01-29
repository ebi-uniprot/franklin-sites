import { ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

const renderWithHistoryRouter = (ui: ReactElement, route?: string) => {
  const history = createBrowserHistory();
  if (route) {
    history.push(route);
  }
  return {
    ...render(<HistoryRouter history={history}>{ui}</HistoryRouter>),
    history,
  };
};

export default renderWithHistoryRouter;
