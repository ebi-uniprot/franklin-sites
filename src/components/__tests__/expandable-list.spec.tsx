import { Fragment } from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import ExpandableList, { ExpandableMessage } from '../expandable-list';

const descriptionString = 'foo';

describe('ExpandableMessage', () => {
  let setExpanded: () => void;
  beforeEach(() => {
    setExpanded = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(
      <ExpandableMessage
        expanded={false}
        setExpanded={setExpanded}
        descriptionString={descriptionString}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call setExpanded when button is clicked and button text be "More descriptionString"', () => {
    render(
      <ExpandableMessage
        expanded={false}
        setExpanded={setExpanded}
        descriptionString={descriptionString}
      />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setExpanded).toHaveBeenCalled();
    expect(button.textContent).toEqual(`More ${descriptionString}`);
  });

  describe('button text', () => {
    it('should be "Less descriptionString"', () => {
      render(
        <ExpandableMessage
          expanded
          setExpanded={setExpanded}
          descriptionString={descriptionString}
        />
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(setExpanded).toHaveBeenCalled();
      expect(button.textContent).toEqual(`Less ${descriptionString}`);
    });

    it('should include the number of hidden items', () => {
      render(
        <ExpandableMessage
          setExpanded={setExpanded}
          descriptionString={descriptionString}
          nHiddenItems={4}
        />
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(setExpanded).toHaveBeenCalled();
      expect(button.textContent).toEqual(`4 more ${descriptionString}`);
    });
  });
});

describe('ExpandableList', () => {
  const numberItems = 10;
  const numberCollapsedItems = 5;
  const items = Array.from({ length: numberItems }, (_, index) => (
    <Fragment key={index}>some content {index}</Fragment>
  ));

  it('should render', () => {
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

  it('should not render when no children', () => {
    const { container } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('should not render when empty list as children', () => {
    const { container } = render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {[]}
      </ExpandableList>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('should not show more button if numberItems <= numberCollapsedItems + 1', () => {
    render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items.slice(0, numberCollapsedItems + 1)}
      </ExpandableList>
    );
    expect(screen.queryByTestId('expandable-message')).toBeNull();
  });

  it('should not show more button if numberItems > numberCollapsedItems + 1', () => {
    render(
      <ExpandableList
        numberCollapsedItems={numberCollapsedItems}
        descriptionString={descriptionString}
      >
        {items}
      </ExpandableList>
    );
    expect(screen.getByTestId('expandable-message')).toBeInTheDocument();
  });

  it('should initially have numberCollapsedItems and then total number of items after More button click', () => {
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
    const button = screen.getByRole('button');
    fireEvent.click(button);
    listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(numberItems + 1);
  });
});
