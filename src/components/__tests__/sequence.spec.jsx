import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Sequence from '../sequence';

import sequenceData from '../../mock-data/sequence-data';
import aminoAcidsProps from '../data/amino-acid-properties.json';

describe('Sequence component', () => {
  let rendered;
  beforeEach(() => {
    rendered = render(
      <Sequence
        sequence={sequenceData}
        initialTextSize={{ width: 10, height: 10 }}
        accession="P05067"
        downloadUrl="https://url-to-P05067.fasta"
      />
    );
  });

  test('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render without tools', () => {
    const { asFragment } = render(
      <Sequence sequence={sequenceData} showActionBar={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle highlight on', () => {
    const { getAllByTestId, getByText } = rendered;
    fireEvent.click(getByText('Highlight'));
    const propertyIndex = 0;
    fireEvent.click(
      getAllByTestId('sequence-highlight-checkbox')[propertyIndex]
    );
    const { aminoAcids } = aminoAcidsProps[propertyIndex];
    const re = new RegExp(aminoAcids.join('|'), 'g');
    const nAminoAcidsWithProperty = sequenceData.match(re).length;
    expect(getAllByTestId('sequence-highlight-rect')).toHaveLength(
      nAminoAcidsWithProperty
    );
  });

  test('should toggle highlight off', () => {
    const { getAllByTestId, queryByTestId, getByText } = rendered;
    fireEvent.click(getByText('Highlight'));
    const propertyIndex = 0;
    fireEvent.click(
      getAllByTestId('sequence-highlight-checkbox')[propertyIndex]
    );
    fireEvent.click(
      getAllByTestId('sequence-highlight-checkbox')[propertyIndex]
    );
    expect(queryByTestId('sequence-highlight-rect')).toBeNull();
  });
});
