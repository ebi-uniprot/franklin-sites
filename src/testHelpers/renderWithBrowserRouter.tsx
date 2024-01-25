import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

// Inspired by https://testing-library.com/docs/example-react-router/

const renderWithBrowserRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export default renderWithBrowserRouter;
