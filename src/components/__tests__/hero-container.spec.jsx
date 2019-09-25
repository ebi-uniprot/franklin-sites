import React from 'react';
import renderer from 'react-test-renderer';
import HeroContainer from '../hero-container';

describe('Hero Container component', () => {
  test('should render', () => {
    const component = renderer.create(
      <HeroContainer title="Title">
        <p>Body content</p>
      </HeroContainer>,
    );
    expect(component).toMatchSnapshot();
  });
});
