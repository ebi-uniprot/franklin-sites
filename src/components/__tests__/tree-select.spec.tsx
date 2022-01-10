import { render } from '@testing-library/react';

import TreeSelect from '../tree-select';

import { treeData } from '../../mock-data/tree-data';

describe('TreeSelect component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <TreeSelect data={treeData} onSelect={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('TreeSelect component with filter', () => {
  it('should render', () => {
    const { asFragment } = render(
      <TreeSelect data={treeData} onSelect={jest.fn()} autocomplete />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
