import { render } from '@testing-library/react';

import HeroContainer from '../hero-container';

describe('Hero Container component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <HeroContainer headingContent="Title">
        <p>Body content</p>
      </HeroContainer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
