import React from 'react';
import renderer from 'react-test-renderer';
import HeroHeader from '../hero-header';

describe('Hero Header component', () => {
  test('should render', () => {
    const component = renderer.create(
      <HeroHeader
        topLeft={<i>Top Left</i>}
        topRight={<b>Top Right</b>}
        title="Title"
        footer={<span>Footer</span>}
      >
        <input type="text" />
      </HeroHeader>
    );
    expect(component).toMatchSnapshot();
  });
});
