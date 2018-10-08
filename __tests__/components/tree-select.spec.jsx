import React from 'react';
import renderer from 'react-test-renderer';
import TreeSelect from '../../src/components/tree-select';
import treeData from '../../src/app/common/tree-data';

describe('TreeSelect component', () => {
  test('should render', () => {
    const component = renderer.create(<TreeSelect data={treeData} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should find the correct path', () => {
    const path = TreeSelect.getPath(treeData, 'Item 1b B');
    expect(path).toEqual([{ label: 'Item 1' }, { label: 'Item 1 b' }, { label: 'Item 1b B' }]);
  });

  test('should not find any paths', () => {
    const path = TreeSelect.getPath(treeData, 'The unfindable');
    expect(path).toBeUndefined();
  });
});
