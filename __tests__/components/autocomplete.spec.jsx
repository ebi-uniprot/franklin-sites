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

test('should filter options', () => {
  const options = [
    {
      label: 'Find this',
    },
    {
      label: 'Also find this',
    },
    {
      label: 'You FIND this?!',
    },
    {
      label: 'Found nothing',
    },
    {
      label: '',
    },
  ];
  const filtered = Autocomplete.filterOptions(options, 'find');
  const expected = [
    {
      label: 'Find this',
    },
    {
      label: 'Also find this',
    },
    {
      label: 'You FIND this?!',
    },
  ];
  expect(filtered).toEqual(expected);
});
