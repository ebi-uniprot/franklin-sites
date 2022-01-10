import { render, fireEvent, screen } from '@testing-library/react';

import { HistogramFilter } from '..';

describe('HistogramFilter component', () => {
  const onChange = jest.fn();

  let rendered;

  beforeEach(async () => {
    rendered = render(
      <HistogramFilter
        onChange={onChange}
        values={[...Array(10).keys()]}
        nBins={5}
        selectedRange={[0, 9]}
      />
    );
    await screen.findByTestId('histogram');
  });

  it('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange when text input is provided', () => {
    const startInput = screen.getByDisplayValue('0');
    fireEvent.change(startInput, { target: { value: '1' } });
    expect(onChange).toHaveBeenCalledWith([1, 9]);
  });
});
