import React from 'react';
import renderer from 'react-test-renderer';
import PageIntro from '../page-intro';

describe('PageIntro component', () => {
  test('should render', () => {
    const count = 1000;

    const component = renderer
      .create(
        <PageIntro title="Title" resultsCount={count}>
          <div>Some content</div>
        </PageIntro>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
