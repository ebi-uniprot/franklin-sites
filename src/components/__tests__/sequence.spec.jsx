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

describe('Sequence component show/hide', () => {
  const handleSequenceLoad = jest.fn();

  test('should toggle view/hide on loaded sequence', () => {
    const { getByText, queryByText } = render(
      <Sequence sequence={sequenceData} accession="P05067" isCollapsible />
    );
    // Look for 'M' as it's used to measure
    expect(queryByText('M')).toBeNull();
    fireEvent.click(getByText(/Show sequence/));
    expect('M').toBeTruthy();
    fireEvent.click(getByText(/Hide sequence/));
    expect(queryByText('M')).toBeNull();
  });

  test('should be collapsed and trigger loading of sequence', () => {
    const { getByText } = render(
      <Sequence onShowSequence={handleSequenceLoad} accession="P05067" />
    );
    fireEvent.click(getByText(/Show/));
    expect(handleSequenceLoad).toBeCalled();
  });
});
