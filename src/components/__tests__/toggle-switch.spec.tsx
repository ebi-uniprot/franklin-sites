import { render, screen, fireEvent } from '@testing-library/react';

import ToggleSwitch from '../toggle-switch';

const IconStub = () => <span data-testid="toggle-icon">icon</span>;

describe('ToggleSwitch component', () => {
  const defaultProps = {
    header: 'AI annotations',
    statusOff: 'Click to enable',
    statusLoading: 'Loading…',
    statusOn: 'Showing AI predictions',
    icon: <IconStub />,
    checked: false,
    onChange: jest.fn(),
    ariaLabel: 'AI toggle',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render in the OFF state and match snapshot', () => {
    const { asFragment } = render(<ToggleSwitch {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('toggle');
    expect(button).not.toHaveClass('toggle--on');
    expect(button).not.toHaveClass('toggle--loading');
    expect(button).not.toHaveClass('toggle--disabled');

    expect(screen.getByText('AI annotations')).toBeInTheDocument();
    expect(screen.getByText('Click to enable')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-icon')).toBeInTheDocument();
  });

  it('should render ON state styling and status when checked and not loading', () => {
    render(<ToggleSwitch {...defaultProps} checked />);

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle--on');
    expect(button).not.toHaveClass('toggle--loading');

    expect(screen.getByText('Showing AI predictions')).toBeInTheDocument();

    const chip = screen.getByText('ON');
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveClass('toggle__header__chip');
  });

  it('should render loading state styling and status when isLoading is true', () => {
    render(<ToggleSwitch {...defaultProps} checked isLoading />);

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle--loading');
    expect(button).not.toHaveClass('toggle--on');

    expect(screen.getByText('Loading…')).toBeInTheDocument();

    const chip = screen.queryByText('ON');
    expect(chip).toBeNull();
  });

  it('should call onChange with toggled value when clicked and not disabled', () => {
    const onChange = jest.fn();
    render(
      <ToggleSwitch {...defaultProps} checked={false} onChange={onChange} />
    );

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    fireEvent.click(button);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('should not call onChange when disabled and clicked', () => {
    const onChange = jest.fn();
    render(
      <ToggleSwitch
        {...defaultProps}
        checked={false}
        onChange={onChange}
        disabled
      />
    );

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('toggle--disabled');

    fireEvent.click(button);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should set aria-checked according to checked prop', () => {
    const { rerender } = render(
      <ToggleSwitch {...defaultProps} checked={false} />
    );

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveAttribute('aria-checked', 'false');

    rerender(<ToggleSwitch {...defaultProps} checked />);
    expect(button).toHaveAttribute('aria-checked', 'true');
  });

  it('should apply custom className to the root button', () => {
    render(<ToggleSwitch {...defaultProps} className="extra-toggle-class" />);

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle');
    expect(button).toHaveClass('extra-toggle-class');
  });

  it('should spread additional props onto the root button', () => {
    render(
      <ToggleSwitch
        {...defaultProps}
        data-testid="toggle-root"
        aria-label="Custom label"
      />
    );

    const button = screen.getByTestId('toggle-root');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('should render the decorative switch track and slider', () => {
    const { container } = render(<ToggleSwitch {...defaultProps} />);

    const switchTrack = container.querySelector('.toggle__switch');
    expect(switchTrack).toBeInTheDocument();

    const slider = switchTrack?.querySelector('.slider');
    expect(slider).toBeInTheDocument();
  });
});
