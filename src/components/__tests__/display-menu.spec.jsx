import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import DisplayMenu from '../display-menu';
import displayMenuData, {
  displayMenuDummyLeft1,
  displayMenuDummyLeft2,
  displayMenuDummyContent2,
  displayMenuDummyContent1,
} from '../__mocks__/displayMenu';

let rendered;

describe('Publication component', () => {
  beforeEach(() => {
    rendered = render(
      <Router>
        <DisplayMenu data={displayMenuData} />
      </Router>
    );
  });

  test('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle main content', async () => {
    const { getByText, queryByText } = rendered;
    expect(getByText(displayMenuDummyContent1)).toBeTruthy();
    expect(queryByText(displayMenuDummyContent2)).toBeNull();
    fireEvent.click(getByText(displayMenuData[1].name));
    const newContent2 = await waitForElement(() =>
      getByText(displayMenuDummyContent2)
    );
    expect(newContent2).toBeTruthy();
  });

  test('should toggle item content', async () => {
    const { getByText, getAllByText } = rendered;
    expect(
      getAllByText(displayMenuDummyLeft1)[0].closest(
        '.display-menu__item_content'
      )
    ).toHaveClass('display-menu__item_content--visible');

    expect(
      getByText(displayMenuDummyLeft2).closest('.display-menu__item_content')
    ).not.toHaveClass('display-menu__item_content--visible');

    fireEvent.click(getByText(displayMenuData[1].name));
    const newContent2 = await waitForElement(() =>
      getByText(displayMenuDummyLeft2)
    );
    expect(newContent2.closest('.display-menu__item_content')).toHaveClass(
      'display-menu__item_content--visible'
    );
  });
});
