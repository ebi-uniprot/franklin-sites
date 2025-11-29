import { FC } from 'react';

import Chip from './chip';

import '../styles/components/toggle.scss';

type Props = {
  header: string;
  statusOff: string;
  statusLoading: string;
  statusOn: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
};

const ToggleSwitch: FC<Props> = ({
  header,
  statusOff,
  statusLoading,
  statusOn,
  icon,
  checked,
  onChange,
  ariaLabel = 'Toggle',
  disabled = false,
  className = '',
}) => {
  const handleToggle = () => {
    if (!disabled) onChange(!checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) onChange(e.target.checked);
  };

  return (
    <section
      className={`toggle ${checked ? 'toggle--on' : ''} ${disabled ? 'toggle--disabled' : ''} ${className}`}
      aria-disabled={disabled}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div className="toggle__content">
        <div className="toggle__icon">{icon}</div>

        <div className="toggle__text">
          <div className="toggle__header">
            {header}
            {checked && (
              <Chip compact className="toggle__header__chip">
                ON
              </Chip>
            )}
          </div>
          <div className="toggle__status">{checked ? statusOn : statusOff}</div>
        </div>
        <label className="toggle__switch" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            role="switch"
            aria-checked={checked}
            aria-label={ariaLabel}
            checked={checked}
            disabled={disabled}
            onChange={handleInputChange}
          />
          <span className="slider round" />
        </label>
      </div>
    </section>
  );
};

export default ToggleSwitch;
