import React from 'react';
import renderer from 'react-test-renderer';
import Autocomplete from '../../src/components/autocomplete';
import { flattenedPaths } from '../../src/app/common/tree-data';

describe('Autocomplete component', () => {
  test('should render', () => {
    const component = renderer.create(
      <Autocomplete data={flattenedPaths} onSelect={d => d} />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Autocomplete component with props: showDropwdownUpdated & clearOnSelect', () => {
  test('should render', () => {
    const component = renderer.create(
      <Autocomplete
        data={flattenedPaths}
        onSelect={d => d}
        showDropwdownUpdated={d => d}
        clearOnSelect
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

test('should filter options', () => {
  const options = [
    {
      pathLabel: 'Find this',
    },
    {
      pathLabel: 'Also find this',
    },
    {
      pathLabel: 'You FIND this?!',
    },
    {
      pathLabel: 'Found nothing',
    },
    {
      pathLabel: '',
    },
  ];
  const filtered = Autocomplete.filterOptions(options, 'find');
  const expected = [
    {
      pathLabel: 'Find this',
    },
    {
      pathLabel: 'Also find this',
    },
    {
      pathLabel: 'You FIND this?!',
    },
  ];
  expect(filtered).toEqual(expected);
});
