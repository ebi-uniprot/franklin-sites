import React from 'react';
import renderer from 'react-test-renderer';
import TreeSelect from '../tree-select';
import { treeData } from '../../mock-data/tree-data';

describe('TreeSelect component', () => {
  test('should render', () => {
    const component = renderer
      .create(<TreeSelect data={treeData} onSelect={d => d} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('TreeSelect component with filter', () => {
  test('should render', () => {
    const component = renderer
      .create(<TreeSelect data={treeData} onSelect={d => d} autocomplete />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
