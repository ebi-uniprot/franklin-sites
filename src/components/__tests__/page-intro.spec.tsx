import { render, screen } from '@testing-library/react';
import type { HeadingLevels } from '../../types/common';

import PageIntro from '../page-intro';

describe('PageIntro component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <PageIntro heading="Title" resultsCount={1000}>
        <div>Some content</div>
      </PageIntro>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with heading level', () => {
    const level = 5;
    const headingLevel = `h${level}` as HeadingLevels;
    render(
      <PageIntro
        heading="Title"
        resultsCount={1000}
        headingLevel={headingLevel}
      >
        <div>Some content</div>
      </PageIntro>
    );
    expect(screen.getByRole('heading', { level })).toBeInTheDocument();
  });

  it('should render 1 singular result', () => {
    render(
      <PageIntro heading="Title" resultsCount={1}>
        <div>Some content</div>
      </PageIntro>
    );
    expect(
      screen.getByRole('heading', { name: /Title 1 result/ })
    ).toBeInTheDocument();
  });

  it('should render title postscript', () => {
    render(
      <PageIntro
        heading="Title"
        resultsCount={1000}
        headingPostscript={<i>from job ID123</i>}
      />
    );
    expect(
      screen.getByRole('heading', {
        name: /Title 1,000 results from job ID123/i,
      })
    ).toBeInTheDocument();
  });
});
