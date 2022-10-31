import { render, fireEvent, screen } from '@testing-library/react';

import { HistogramFilter } from '..';

import useSize from '../../hooks/useSize';

jest.mock('../../hooks/useSize', () => jest.fn());
(useSize as jest.Mock).mockImplementation(() => [{ width: 250, height: 100 }]);

describe('HistogramFilter component', () => {
  const onChange = jest.fn();

  let rendered: ReturnType<typeof render>;

  const values = [...Array(10).keys()];

  beforeEach(() => {
    rendered = render(
      <HistogramFilter
        onChange={onChange}
        values={values}
        nBins={5}
        selectedRange={[0, 9]}
      />
    );
  });

  it('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange when text input is provided', async () => {
    const startInput = screen.getByDisplayValue('0');
    const endInput = screen.getByDisplayValue('9');
    // narrow the range from the start
    fireEvent.change(startInput, { target: { value: '1' } });
    expect(onChange).toHaveBeenLastCalledWith([1, 9]);
    rendered.rerender(
      <HistogramFilter
        onChange={onChange}
        values={values}
        nBins={5}
        selectedRange={[1, 9]}
      />
    );
    // narrow the range from the start
    fireEvent.change(endInput, { target: { value: '5' } });
    expect(onChange).toHaveBeenLastCalledWith([1, 5]);
    rendered.rerender(
      <HistogramFilter
        onChange={onChange}
        values={values}
        nBins={5}
        selectedRange={[1, 5]}
      />
    );
    // invalid value
    onChange.mockClear(); // reset on change as we don't expect it to be called
    fireEvent.change(startInput, { target: { value: '-500' } });
    fireEvent.change(endInput, { target: { value: 'abc' } });
    // display invalid value
    expect(startInput).toHaveDisplayValue('-500');
    expect(endInput).toHaveDisplayValue('abc');
    // but revert to previous valid value on blur
    fireEvent.blur(startInput);
    fireEvent.blur(endInput);
    expect(startInput).toHaveDisplayValue('1');
    expect(endInput).toHaveDisplayValue('5');
    expect(onChange).not.toHaveBeenCalled();
  });
});
