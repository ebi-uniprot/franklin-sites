import { render } from '@testing-library/react';

import HeroHeader from '../hero-header';

describe('Hero Header component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <HeroHeader title="Title" footer={<span>Footer</span>}>
        <input type="text" />
      </HeroHeader>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
