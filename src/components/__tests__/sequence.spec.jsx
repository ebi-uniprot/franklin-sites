import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sequenceData from '../../app/common/sequence-data';
import aminoAcidsProps from '../data/amino-acid-properties.json';
import Sequence from '../sequence';

describe('Sequence component', () => {
  let rendered;
  beforeEach(() => {
    rendered = render(
      <Sequence sequence={sequenceData} textSize={{ width: 10, height: 10 }} id="isoformId-1" />,
    );
  });

  test('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle highlight on', () => {
    const { getAllByTestId } = rendered;
    const propertyIndex = 0;
    fireEvent.click(getAllByTestId('sequence-highlight-checkbox')[propertyIndex]);
    const { aminoAcids } = aminoAcidsProps[propertyIndex];
    const re = new RegExp(aminoAcids.join('|'), 'g');
    const nAminoAcidsWithProperty = sequenceData.match(re).length;
    expect(getAllByTestId('sequence-highlight-rect')).toHaveLength(nAminoAcidsWithProperty);
  });

  test('should toggle highlight off', () => {
    const { getAllByTestId, queryByTestId } = rendered;
    const propertyIndex = 0;
    fireEvent.click(getAllByTestId('sequence-highlight-checkbox')[propertyIndex]);
    fireEvent.click(getAllByTestId('sequence-highlight-checkbox')[propertyIndex]);
    expect(queryByTestId('sequence-highlight-rect')).toBeNull();
  });
});
