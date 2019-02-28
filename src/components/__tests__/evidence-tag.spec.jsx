import React from 'react';
import renderer from 'react-test-renderer';

import EvidenceTag from '../evidence-tag';

describe('EvidenceTag component', () => {
  test('should render unreviewed tag', () => {
    const component = renderer
      .create(<EvidenceTag label="My evidence" title="My title" />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
  test('should render reviewed tag', () => {
    const component = renderer
      .create(<EvidenceTag label="My evidence" title="My title" reviewed />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
