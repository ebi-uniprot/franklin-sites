import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import DisplayMenu from '../display-menu';
import displayMenuData from '../__mocks__/displayMenu';

let rendered;
const content1 = 'Page 1 main content';
const content2 = 'Page 2 main content';
const itemContent1 = 'Something';
const itemContent2 = 'Something else';

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
    expect(getByText(content1)).toBeTruthy();
    expect(queryByText(content2)).toBeNull();
    fireEvent.click(getByText(displayMenuData[1].name));
    const newContent2 = await waitForElement(() => getByText(content2));
    expect(newContent2).toBeTruthy();
  });

  test('should toggle item content', async () => {
    const { getByText, getAllByText } = rendered;
    expect(getAllByText(itemContent1)[0]).toBeVisible();

    expect(
      getAllByText(itemContent1)[0].closest('.display-menu__item_content')
    ).toHaveClass('display-menu__item_content--visible');

    expect(
      getByText(itemContent2).closest('.display-menu__item_content')
    ).not.toHaveClass('display-menu__item_content--visible');

    fireEvent.click(getByText(displayMenuData[1].name));
    const newContent2 = await waitForElement(() => getByText(itemContent2));
    expect(newContent2.closest('.display-menu__item_content')).toHaveClass(
      'display-menu__item_content--visible'
    );
  });
});
