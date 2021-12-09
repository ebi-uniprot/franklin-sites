import { screen, render, fireEvent } from '@testing-library/react';

import Sequence from '../sequence';

import sequenceData from '../../mock-data/sequence-data';

describe('Sequence component', () => {
  let rendered: ReturnType<typeof render>;

  beforeEach(() => {
    rendered = render(
      <Sequence
        sequence={sequenceData}
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
});

describe('Sequence component show/hide', () => {
  const handleSequenceLoad = jest.fn();

  test('should toggle view/hide on loaded sequence', () => {
    render(
      <Sequence sequence={sequenceData} accession="P05067" isCollapsible />
    );
    // Look for 'MFNFPHPAID' as it's the first chunk of 10 in the mock sequence
    expect(screen.queryByText('MFNFPHPAID')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Show sequence/ }));
    expect(screen.getByText('MFNFPHPAID')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Hide sequence/ }));
    expect(screen.queryByText('MFNFPHPAID')).not.toBeInTheDocument();
  });

  test('should be collapsed and trigger loading of sequence', () => {
    render(<Sequence onShowSequence={handleSequenceLoad} accession="P05067" />);
    fireEvent.click(screen.getByRole('button', { name: /Show/ }));
    expect(handleSequenceLoad).toBeCalled();
  });
});
