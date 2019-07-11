import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpandableList, { ExpandableMessage } from '../expandable-list';
import { fillArray } from '../../utils';

const descriptionString = 'foo';

describe('ExpandableMessage', () => {
  let setExpanded;
  beforeEach(() => {
    setExpanded = jest.fn();
  });

  test('should render', () => {
    const { asFragment } = render(
      <ExpandableMessage
        expanded={false}
        setExpanded={setExpanded}
        descriptionString={descriptionString}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should call setExpanded when button is clicked and button text be "More descriptionString"', () => {
    const { container } = render(
      <ExpandableMessage
        expanded={false}
        setExpanded={setExpanded}
        descriptionString={descriptionString}
      />,
    );
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(setExpanded).toHaveBeenCalled();
    expect(button.textContent).toEqual(`More ${descriptionString}`);
  });

  test('button text should be "Less descriptionString"', () => {
    const { container } = render(
      <ExpandableMessage
        expanded
        setExpanded={setExpanded}
        descriptionString={descriptionString}
      />,
    );
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(setExpanded).toHaveBeenCalled();
    expect(button.textContent).toEqual(`Less ${descriptionString}`);
  });
});

describe('ExpandableList', () => {
  const numberItems = 10;
  const numberCollapsedItems = 5;
  const items = fillArray(numberItems, (element, index) => ({
    id: `id${index}`,
    content: `some content ${index}`,
  }));

  test('should render', () => {
    const { asFragment } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items}
      </ExpandableList>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should initially have numberCollapsedItems and then total number of items after More button click ', () => {
    const { container } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items}
      </ExpandableList>,
    );
    let listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(numberCollapsedItems);
    const button = container.querySelector('button');
    fireEvent.click(button);
    listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(numberItems);
  });
});
