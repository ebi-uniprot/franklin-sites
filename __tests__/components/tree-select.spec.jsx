import React from 'react';
import renderer from 'react-test-renderer';
import TreeSelect from '../../src/components/tree-select';
import { treeData } from '../../src/app/common/tree-data';

describe('TreeSelect component', () => {
  test('should render', () => {
    const component = renderer.create(<TreeSelect data={treeData} onSelect={d => d} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('TreeSelect component with filter', () => {
  test('should render', () => {
    const component = renderer.create(
      <TreeSelect
        data={treeData}
        onSelect={d => d}
        autocomplete
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
