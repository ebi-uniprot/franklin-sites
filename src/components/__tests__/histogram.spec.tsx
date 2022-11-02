import { render, screen } from '@testing-library/react';

import { Histogram } from '..';

import useSize from '../../hooks/useSize';

jest.mock('../../hooks/useSize', () => jest.fn());
(useSize as jest.Mock).mockImplementation(() => [{ width: 250, height: 100 }]);

describe('Histogram component', () => {
  it('should render when nBins prop is provided and with the correct number of bins', () => {
    const { asFragment } = render(
      <Histogram
        values={[...Array(10).keys()]}
        nBins={2}
        xLabel="x axis"
        yLabel="y axis"
      />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByTestId('histogram-bar')).toHaveLength(2);
    expect(screen.getByText('x axis')).toBeInTheDocument();
    expect(screen.getByText('y axis')).toBeInTheDocument();
  });

  it('should render without axes if no label provided', () => {
    const { asFragment } = render(
      <Histogram values={[...Array(10).keys()]} nBins={2} />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByTestId('histogram-bar')).toHaveLength(2);
    expect(screen.queryByText('x axis')).not.toBeInTheDocument();
    expect(screen.queryByText('y axis')).not.toBeInTheDocument();
  });

  it('should render when binSize prop is provided and with the correct number of bins', () => {
    const { asFragment } = render(
      <Histogram
        values={[...Array(10).keys()]}
        binSize={2}
        xLabel="x axis"
        yLabel="y axis"
      />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByTestId('histogram-bar')).toHaveLength(5);
  });

  it('should shade bins that are in range', () => {
    render(
      <Histogram
        values={[...Array(10).keys()]}
        binSize={2}
        selectedRange={[3, 7]}
        xLabel="x axis"
        yLabel="y axis"
      />
    );
    const bars = screen.getAllByTestId('histogram-bar');
    expect(
      bars.filter((bar) =>
        bar.classList.contains('histogram__bar--within-range')
      )
    ).toHaveLength(3);
  });
});
