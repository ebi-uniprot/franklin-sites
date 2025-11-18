import { useId, type ChangeEvent, type FC } from 'react';
import '../styles/components/toggle-switch.scss';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
};

const ToggleSwitch: FC<Props> = ({
  checked,
  onChange,
  ariaLabel = 'Toggle',
  disabled = false,
  className = '',
  id,
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(event.target.checked);
  };

  return (
    <label
      className={`switch ${disabled ? 'switch--disabled' : ''} ${className}`}
      htmlFor={inputId}
    >
      <input
        id={inputId}
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
