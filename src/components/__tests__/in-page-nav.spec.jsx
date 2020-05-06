import React from 'react';
import renderWithRouter from '../../testHelpers/renderWithRouter';
import InPageNav from '../in-page-nav';

describe('InPageNav component', () => {
  beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
      // eslint-disable-next-line class-methods-use-this
      observe() {
        return null;
      }

      // eslint-disable-next-line class-methods-use-this
      unobserve() {
        return null;
      }
    };
  });
  test('should render', () => {
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
        disabled: true,
      },
    ];

    const { asFragment } = renderWithRouter(<InPageNav sections={sections} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
