import { screen, render, fireEvent } from '@testing-library/react';

import AccordionSearch, {
  filterAccordionData,
  getLeafKeys,
} from '../accordion-search';

jest.mock('lodash-es', () => ({
  debounce: (fn: unknown) => fn,
}));

const props = {
  placeholder: 'Filter',
  onSelect: jest.fn(),
  selected: [],
  accordionData: [
    {
      label: 'Gene',
      id: '1',
      items: [
        {
          label: 'BRCA1',
          id: '1-1',
        },
        {
          label: 'BRCA2',
          id: '1-2',
        },
        {
          label: 'TP53',
          id: '1-3',
        },
      ],
    },
    {
      label: 'Organelle',
      id: '2',
      items: [
        {
          label: 'Ribosome',
          id: '2-1',
        },
        {
          label: 'Nucleus',
          id: '2-2',
        },
      ],
    },
  ],
};

describe('AccordionSearch', () => {
  it('should render', () => {
    const { asFragment } = render(<AccordionSearch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('filterAccordionData', () => {
    it('should return filtered data with matching query', () => {
      const filteredAccordionData = filterAccordionData(
        props.accordionData,
        'nucleus'
      );
      expect(filteredAccordionData).toHaveLength(1);
      expect(filteredAccordionData[0].items?.[0].id).toBe('2-2');
    });

    it('should return no data with nonmatching query', () => {
      const filteredAccordionData = filterAccordionData(
        props.accordionData,
        'zap'
      );
      expect(filteredAccordionData).toHaveLength(0);
    });
  });

  it('should find correct number of items when input is entered', async () => {
    render(<AccordionSearch {...props} />);
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Nucleus' } });
    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes).toHaveLength(1);
  });

  it('should call onSelect when item clicked', () => {
    render(<AccordionSearch {...props} />);
    const checkboxes = screen.getAllByRole('checkbox');
    if (checkboxes.length) {
      fireEvent.click(checkboxes[0]);
    }
    expect(props.onSelect).toHaveBeenCalled();
  });

  describe('getLeafKeys', () => {
    it('should get all of the leaf keys', () => {
      expect(getLeafKeys(props.accordionData)).toEqual([
        '1-1',
        '1-2',
        '1-3',
        '2-1',
        '2-2',
      ]);
    });
  });
});
