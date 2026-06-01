import { render, screen, fireEvent } from '@testing-library/react';

import ToggleSwitch from '../toggle-switch';

const IconStub = () => <span data-testid="toggle-icon">icon</span>;

describe('ToggleSwitch component', () => {
  const defaultProps = {
    header: 'AI annotations',
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
    expect(screen.getByTestId('toggle-icon')).toBeInTheDocument();
  });

  it('should not render the icon wrapper when icon prop is omitted', () => {
    const { icon, ...propsWithoutIcon } = defaultProps;
    const { container } = render(<ToggleSwitch {...propsWithoutIcon} />);

    expect(container.querySelector('.toggle__icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('toggle-icon')).not.toBeInTheDocument();
  });

  it('should render ON state styling when checked and not loading', () => {
    render(<ToggleSwitch {...defaultProps} checked />);

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle--on');
    expect(button).not.toHaveClass('toggle--loading');
  });

  it('should render loading state styling when isLoading is true', () => {
    render(<ToggleSwitch {...defaultProps} checked isLoading />);

    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle--loading');
    expect(button).not.toHaveClass('toggle--on');
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

  it('should add the compact modifier class when `compact` is set', () => {
    render(<ToggleSwitch {...defaultProps} compact />);
    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle--compact');
  });

  it('should not add the compact modifier class by default', () => {
    render(<ToggleSwitch {...defaultProps} />);
    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).not.toHaveClass('toggle--compact');
  });

  it('should add the full-width modifier class when `fullWidth` is set', () => {
    render(<ToggleSwitch {...defaultProps} fullWidth />);
    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle--full-width');
  });

  it('should default to hugging content (no full-width class)', () => {
    render(<ToggleSwitch {...defaultProps} />);
    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).not.toHaveClass('toggle--full-width');
  });

  it('should render a hidden stable-width decoy when `stableWidthLabel` is set', () => {
    const { container } = render(
      <ToggleSwitch {...defaultProps} stableWidthLabel="AI Annotations" />
    );
    const decoy = container.querySelector('.toggle__header__stable');
    expect(decoy).toBeInTheDocument();
    expect(decoy).toHaveTextContent('AI Annotations');
    expect(decoy).toHaveAttribute('aria-hidden', 'true');
  });

  it('should not render the stable-width decoy by default', () => {
    const { container } = render(<ToggleSwitch {...defaultProps} />);
    expect(
      container.querySelector('.toggle__header__stable')
    ).not.toBeInTheDocument();
  });

  it('should mark the decoy as aria-hidden', () => {
    render(
      <ToggleSwitch
        {...defaultProps}
        header="AI"
        stableWidthLabel="AI Annotations"
      />
    );
    const decoy = screen.getByText('AI Annotations');
    expect(decoy).toHaveAttribute('aria-hidden', 'true');
  });

  it('should still render the decoy when combined with fullWidth', () => {
    // The decoy is a no-op for width when fullWidth is on (the parent's
    // width dominates), but the DOM element should still be present so
    // toggling fullWidth at runtime doesn't tear down/recreate the node.
    const { container } = render(
      <ToggleSwitch
        {...defaultProps}
        fullWidth
        stableWidthLabel="AI Annotations"
      />
    );
    const button = screen.getByRole('switch', { name: 'AI toggle' });
    expect(button).toHaveClass('toggle--full-width');

    const decoy = container.querySelector('.toggle__header__stable');
    expect(decoy).toBeInTheDocument();
    expect(decoy).toHaveTextContent('AI Annotations');
    expect(decoy).toHaveAttribute('aria-hidden', 'true');
  });

  it('should match snapshot for compact + stableWidthLabel', () => {
    const { asFragment } = render(
      <ToggleSwitch
        {...defaultProps}
        compact
        stableWidthLabel="AI Annotations"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
