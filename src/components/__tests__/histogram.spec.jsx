import React from 'react';
import { render } from '@testing-library/react';
import { Histogram } from '..';

describe('HistogramFilter component', () => {
  it('should render when nBins prop is provided and with the correct number of bins', async () => {
    const { asFragment, findByTestId, getAllByTestId } = render(
      <Histogram values={[...Array(10).keys()]} nBins={2} />
    );
    await findByTestId('histogram');
    expect(asFragment()).toMatchSnapshot();
    expect(getAllByTestId('histogram-bar')).toHaveLength(2);
  });

  it('should render when binSize prop is provided and with the correct number of bins', async () => {
    const { asFragment, findByTestId, getAllByTestId } = render(
      <Histogram values={[...Array(10).keys()]} binSize={2} />
    );
    await findByTestId('histogram');
    expect(asFragment()).toMatchSnapshot();
    expect(getAllByTestId('histogram-bar')).toHaveLength(5);
  });

  it('should shade bins that are in range', async () => {
    const { findByTestId, getAllByTestId } = render(
      <Histogram
        values={[...Array(10).keys()]}
        binSize={2}
        selectedRange={[3, 7]}
      />
    );
    await findByTestId('histogram');
    const bars = getAllByTestId('histogram-bar');
    expect(
      bars.filter(({ className }) =>
        className.includes('histogram__bar--within-range')
      )
    ).toHaveLength(3);
  });
});
