import { scaleLinear } from 'd3';
import { render, screen } from '@testing-library/react';
import YAxis from '../histogram-y-axis';

describe('XAxis component', () => {
  it('should render with correct tickmarks', () => {
    const max = 10;
    const scale = scaleLinear().domain([0, max]).range([100, 0]);
    const { asFragment } = render(<YAxis scale={scale} height={100} />);
    expect(asFragment()).toMatchSnapshot();
    const labels = screen
      .getAllByText(/\d+/)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .map(({ __data__: label }) => label);
    expect(labels).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
