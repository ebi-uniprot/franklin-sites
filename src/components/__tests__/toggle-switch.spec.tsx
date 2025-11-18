import { render, fireEvent } from '@testing-library/react';

import ToggleSwitch from '../toggle-switch';

describe('ToggleSwitch component', () => {
  it('should render when checked', () => {
    const { asFragment } = render(
      <ToggleSwitch checked onChange={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when not checked', () => {
    const { asFragment } = render(
      <ToggleSwitch checked={false} onChange={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when disabled', () => {
    const { asFragment } = render(
      <ToggleSwitch checked={false} disabled onChange={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with custom aria label and className', () => {
    const { asFragment } = render(
      <ToggleSwitch
        checked={false}
        onChange={jest.fn()}
        ariaLabel="Enable notifications"
        className="my-toggle"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange when toggled', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <ToggleSwitch checked={false} onChange={onChange} />
    );

    const switchInput = getByRole('switch');
    fireEvent.click(switchInput);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('should not call onChange when disabled', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <ToggleSwitch checked={false} disabled onChange={onChange} />
    );

    const switchInput = getByRole('switch');
    fireEvent.click(switchInput);

    expect(onChange).not.toHaveBeenCalled();
  });
});
