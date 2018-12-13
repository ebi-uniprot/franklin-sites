import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../header';

describe('Header component', () => {
  test('should render', () => {
    const component = renderer
      .create(
        <Router>
          <Header links={[{ path: '/there', label: 'there' }]} />
        </Router>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
