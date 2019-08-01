import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Tabs from '../tabs';

afterEach(cleanup);

const props = {
  tabData: [
    {
      title: <div>Title 1</div>,
      content: 'blah',
      id: 'id1',
    },
    {
      title: 'Title 2',
      content: 'blaher',
      id: 'id2',
    },
    {
      title: 'Title 3',
      content: 'blahest',
      id: 'id3',
    },
  ],
};

describe('Tabs', () => {
  test('should render', () => {
    const { asFragment } = render(<Tabs {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should show corresponding content when 2nd tab title is clicked', () => {
    const { queryAllByTestId } = render(<Tabs {...props} />);
    const title = queryAllByTestId('tab-title');
    fireEvent.click(title[1]);
    const content = queryAllByTestId('tab-content');
    const firstTabClasses = Object.values(content[0].classList);
    const secondTabClasses = Object.values(content[1].classList);
    const thirdTabClasses = Object.values(content[2].classList);
    expect(firstTabClasses).toEqual(['tabs__content']);
    expect(secondTabClasses).toEqual(['tabs__content', 'tabs__content--active']);
    expect(thirdTabClasses).toEqual(['tabs__content']);
  });
});
