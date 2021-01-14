import React, { Fragment } from 'react';
import { render, fireEvent } from '@testing-library/react';

import ExpandableList, { ExpandableMessage } from '../expandable-list';

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
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should call setExpanded when button is clicked and button text be "More descriptionString"', () => {
    const { container } = render(
      <ExpandableMessage
        expanded={false}
        setExpanded={setExpanded}
        descriptionString={descriptionString}
      />
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
      />
    );
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(setExpanded).toHaveBeenCalled();
    expect(button.textContent).toEqual(`Less ${descriptionString}`);
  });

  test('button text should include the number of hidden items', () => {
    const { container } = render(
      <ExpandableMessage
        setExpanded={setExpanded}
        descriptionString={descriptionString}
        nHiddenItems={4}
      />
    );
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(setExpanded).toHaveBeenCalled();
    expect(button.textContent).toEqual(`4 more ${descriptionString}`);
  });
});

describe('ExpandableList', () => {
  const numberItems = 10;
  const numberCollapsedItems = 5;
  const items = Array.from({ length: numberItems }, (_, index) => (
    <Fragment key={index}>some content {index}</Fragment>
  ));

  test('should render', () => {
    const { asFragment } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items}
      </ExpandableList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should not show more button if numberItems <= numberCollapsedItems + 1', () => {
    const { queryByTestId } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items.slice(0, numberCollapsedItems + 1)}
      </ExpandableList>
    );
    expect(queryByTestId('expandable-message')).toBeNull();
  });

  test('should not show more button if numberItems > numberCollapsedItems + 1', () => {
    const { getByTestId } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items}
      </ExpandableList>
    );
    expect(getByTestId('expandable-message')).toBeTruthy();
  });

  test('should initially have numberCollapsedItems and then total number of items after More button click', () => {
    const { container } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items}
      </ExpandableList>
    );
    let listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(numberCollapsedItems + 1);
    const button = container.querySelector('button');
    fireEvent.click(button);
    listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(numberItems + 1);
  });
});
