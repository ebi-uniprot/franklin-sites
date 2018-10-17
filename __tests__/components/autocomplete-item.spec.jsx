import React from 'react';
import renderer from 'react-test-renderer';
import AutocompleteItem from '../../src/components/autocomplete-item';

describe('AutocompleteItem component', () => {
  test('should render', () => {
    const item = {
      pathLabel: 'A path to > some item',
      itemLabel: 'some item',
      value: 'item',
    };
    const active = false;
    const component = renderer.create(
      <AutocompleteItem
        item={item}
        active={active}
        substringToHighlight="item"
        key="key"
        handleOnClick={d => d}
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
