import { render, screen } from '@testing-library/react';
import { HeadingLevels } from '../../types/common';

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

  test('should render with heading level', () => {
    const level = 5;
    const headingLevel = `h${level}` as HeadingLevels;
    render(
      <PageIntro title="Title" resultsCount={1000} headingLevel={headingLevel}>
        <div>Some content</div>
      </PageIntro>
    );
    expect(screen.getByRole('heading', { level })).toBeInTheDocument();
  });

  test('should render 1 singular result', () => {
    render(
      <PageIntro title="Title" resultsCount={1}>
        <div>Some content</div>
      </PageIntro>
    );
    expect(
      screen.getByRole('heading', { name: /Title 1 result/ })
    ).toBeInTheDocument();
  });

  test('should render title postscript', () => {
    render(
      <PageIntro
        title="Title"
        resultsCount={1000}
        titlePostscript={<i>from job ID123</i>}
      />
    );
    expect(
      screen.getByRole('heading', {
        name: /Title 1,000 results from job ID123/i,
      })
    ).toBeInTheDocument();
  });
});
