import React from 'react';
import { render } from '@testing-library/react';

import AutocompleteItem from '../autocomplete-item';

describe('AutocompleteItem component', () => {
  test('should render', () => {
    const item = {
      pathLabel: 'A path to > some item',
      itemLabel: 'some item',
      value: 'item',
    };
    const { asFragment } = render(
      <AutocompleteItem
        item={item}
        active={false}
        substringToHighlight="item"
        key="key"
        handleOnClick={(d) => d}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
