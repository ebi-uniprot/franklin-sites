import { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

export default (ui: ReactElement) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter>{children}</MemoryRouter>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
  };
};
