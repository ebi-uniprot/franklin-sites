import { render, screen } from '@testing-library/react';
import XAxis from '../histogram-x-axis';

describe('XAxis component', () => {
  it('should render with correct tickmarks', () => {
    const { asFragment } = render(
      <XAxis min={0} max={10} interval={5} yPos={0} width={100} />
    );
    expect(asFragment()).toMatchSnapshot();
    const labels = screen
      .getAllByText(/\d+/)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .map(({ __data__: label }) => label);
    expect(labels).toEqual([0, 5, 10]);
  });
});
