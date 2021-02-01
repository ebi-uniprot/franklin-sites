import { screen, render, fireEvent } from '@testing-library/react';

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
    fireEvent.click(screen.getByText('Highlight'));
    const propertyIndex = 0;
    fireEvent.click(
      screen.getAllByTestId('sequence-highlight-checkbox')[propertyIndex]
    );
    const { aminoAcids } = aminoAcidsProps[propertyIndex];
    const re = new RegExp(aminoAcids.join('|'), 'g');
    const nAminoAcidsWithProperty = sequenceData.match(re).length;
    expect(screen.getAllByTestId('sequence-highlight-rect')).toHaveLength(
      nAminoAcidsWithProperty
    );
  });

  test('should toggle highlight off', () => {
    fireEvent.click(screen.getByText('Highlight'));
    const propertyIndex = 0;
    fireEvent.click(
      screen.getAllByTestId('sequence-highlight-checkbox')[propertyIndex]
    );
    fireEvent.click(
      screen.getAllByTestId('sequence-highlight-checkbox')[propertyIndex]
    );
    expect(screen.queryByTestId('sequence-highlight-rect')).toBeNull();
  });
});

describe('Sequence component show/hide', () => {
  const handleSequenceLoad = jest.fn();

  test('should toggle view/hide on loaded sequence', () => {
    render(
      <Sequence sequence={sequenceData} accession="P05067" isCollapsible />
    );
    // Look for 'M' as it's used to measure
    expect(screen.queryByText('M')).toBeNull();
    fireEvent.click(screen.getByText(/Show sequence/));
    expect(screen.queryByText('M')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Hide sequence/));
    expect(screen.queryByText('M')).toBeNull();
  });

  test('should be collapsed and trigger loading of sequence', () => {
    render(<Sequence onShowSequence={handleSequenceLoad} accession="P05067" />);
    fireEvent.click(screen.getByText(/Show/));
    expect(handleSequenceLoad).toBeCalled();
  });
});
