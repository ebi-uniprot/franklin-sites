import { ReactElement, ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

// Inspired by https://testing-library.com/docs/example-react-router/

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

const getWithLocation =
  (route: string) =>
  ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[route]}>
      {children}
      <LocationDisplay />
    </MemoryRouter>
  );

const renderWithMemoryRouter = (ui: ReactElement, { route = '/' } = {}) =>
  render(ui, { wrapper: getWithLocation(route) });

export default renderWithMemoryRouter;
