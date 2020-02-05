import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
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

  //   test('should toggle item content', async () => {
  //     const { findAllBygetByText, getAllByText, queryByText } = rendered;
  //     console.log(getByText(displayMenuData[1].name).children);
  //     expect(getAllByText(itemContent1)).toBeTruthy();
  //     expect(queryByText(itemContent2)).toBeNull();
  //     fireEvent.click(getByText(displayMenuData[1].name));
  //     const newContent2 = await waitForElement(() => getByText(itemContent2));
  //     expect(newContent2).toBeTruthy();
  //   });

  test('should toggle main content', async () => {
    const { getByText, queryByText } = rendered;
    expect(getByText(content1)).toBeTruthy();
    expect(queryByText(content2)).toBeNull();
    fireEvent.click(getByText(displayMenuData[1].name));
    const newContent2 = await waitForElement(() => getByText(content2));
    expect(newContent2).toBeTruthy();
  });
});
