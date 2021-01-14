import { render } from '@testing-library/react';

import PageIntro from '../page-intro';

describe('PageIntro component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <PageIntro title="Title" resultsCount={1000}>
        <div>Some content</div>
      </PageIntro>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
