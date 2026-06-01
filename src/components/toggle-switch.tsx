import { type FC } from 'react';
import cn from 'classnames';

import '../styles/components/toggle-switch.scss';

type Props = {
  header: string;
  /**
   * Icon rendered in a circular badge to the left of the header. Optional —
   * omit for a text-only toggle.
   */
  icon?: React.ReactNode;
  checked: boolean;
  isLoading?: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
  className?: string;
  /**
   * Compact variant: shrinks the knob and label proportionally so the toggle
   * fits in cramped contexts (sticky toolbars, dense forms).
   * @default false
   */
  compact?: boolean;
  /**
   * Stretch the toggle to fill its container's available width. Defaults to
   * `false` so the toggle hugs its content — the more predictable behaviour
   * for buttons. Set to `true` for full-bleed layouts (eg. settings panels).
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Invisible decoy used to peg the toggle's intrinsic width to a stable
   * string. Useful when `header` swaps between values of different widths
   * (eg. "AI Annotations" ↔ "Loading…") and you want to avoid layout reflow
   * during the swap. Pass the longest string the consumer expects to swap to.
   *
   * Has no effect when combined with `fullWidth` — there the parent's width
   * dominates and the decoy can't shrink-wrap anything.
   */
  stableWidthLabel?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>;

const ToggleSwitch: FC<Props> = ({
  header,
  icon,
  checked,
  isLoading = false,
  onChange,
  ariaLabel = 'Toggle',
  disabled = false,
  compact = false,
  fullWidth = false,
  stableWidthLabel,
  className = '',
  ...rest
}) => {
  const isOn = checked && !isLoading;

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        'toggle',
        {
          'toggle--on': isOn,
          'toggle--loading': isLoading,
          'toggle--disabled': disabled,
          'toggle--compact': compact,
          'toggle--full-width': fullWidth,
        },
        className
      )}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleToggle}
      {...rest}
    >
      <div className="toggle__content">
        {icon && <div className="toggle__icon">{icon}</div>}
        <div className="toggle__header">
          {header}
          {stableWidthLabel && (
            <div className="toggle__header__stable" aria-hidden="true">
              {stableWidthLabel}
            </div>
          )}
        </div>
        <div className="toggle__switch" aria-hidden="true">
          <span className="slider" />
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
