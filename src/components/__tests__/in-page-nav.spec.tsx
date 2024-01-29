/* eslint-disable class-methods-use-this, lines-between-class-members */
import { act, screen, waitFor } from '@testing-library/react';

import renderWithBrowserRouter from '../../testHelpers/renderWithBrowserRouter';

import InPageNav from '../in-page-nav';
import renderWithHistoryRouter from '../../testHelpers/renderWithHistoryRouter';

describe('InPageNav component', () => {
  beforeAll(() => {
    global.IntersectionObserver = class FakeIntersectionObserver {
      root = null;
      rootMargin = '0px';
      thresholds = [];
      observe() {
        return null;
      }
      unobserve() {
        return null;
      }
      disconnect() {
        return null;
      }
      takeRecords() {
        return [];
      }
    };
  });

  beforeEach(() => jest.resetAllMocks());

  const sections = [
    {
      id: 'id1',
      label: 'First link',
    },
    {
      id: 'id2',
      label: 'Second link',
    },
    {
      id: 'id3',
      label: 'Third link',
    },
  ];

  it('should render', () => {
    const { asFragment } = renderWithBrowserRouter(
      <InPageNav sections={sections} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should scroll the default target element into view', async () => {
    renderWithBrowserRouter(
      <div>
        <InPageNav sections={sections} />
        <div id="id3" data-testid="target" />
      </div>,
      { route: '/#id3' }
    );
    const target = screen.getByTestId('target');
    target.scrollIntoView = jest.fn();
    await waitFor(() => expect(target.scrollIntoView).toHaveBeenCalledTimes(1));
  });

  it('should scroll the target element into view after hash change', async () => {
    const { history } = renderWithHistoryRouter(
      <div>
        <InPageNav sections={sections} />
        <div id="id3" data-testid="target" />
      </div>
    );
    const target = screen.getByTestId('target');
    target.scrollIntoView = jest.fn();
    act(() => {
      history.push({ ...history.location, hash: '#id3' });
    });
    await waitFor(() => expect(target.scrollIntoView).toHaveBeenCalledTimes(1));
  });

  it('should scroll to top of rootElement after hash removed', async () => {
    const { history } = renderWithHistoryRouter(
      <div>
        <InPageNav sections={sections} rootElement={document.body} />
        <div id="id3" data-testid="target" />
      </div>,
      '/#id3'
    );
    document.body.scrollTo = jest.fn();
    act(() => {
      history.push({ ...history.location, hash: '' });
    });
    await waitFor(() =>
      expect(document.body.scrollTo).toHaveBeenCalledTimes(1)
    );
  });
});
