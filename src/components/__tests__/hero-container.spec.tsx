import { render } from '@testing-library/react';

import HeroContainer from '../hero-container';

describe('Hero Container component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <HeroContainer title="Title">
        <p>Body content</p>
      </HeroContainer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
