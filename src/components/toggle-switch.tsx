import type { ChangeEvent, FC } from 'react';
import '../styles/components/toggle-switch.scss';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
};

const ToggleSwitch: FC<Props> = ({
  checked,
  onChange,
  id,
  ariaLabel = 'Toggle',
  disabled = false,
  className = '',
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    onChange(event.target.checked);
  };

  return (
    <label
      className={`switch ${disabled ? 'switch--disabled' : ''} ${className}`}
      htmlFor={id}
    >
      <input
        id={id}
        type="checkbox"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="slider round" />
    </label>
  );
};

export default ToggleSwitch;
