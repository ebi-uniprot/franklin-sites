import { FC } from 'react';
import cn from 'classnames';

import Chip from './chip';

import '../styles/components/toggle.scss';

type Props = {
  header: string;
  statusOff: string;
  statusLoading: string;
  statusOn: string;
  icon: React.ReactNode;
  checked: boolean;
  isLoading?: boolean;
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
  isLoading = false,
  onChange,
  ariaLabel = 'Toggle',
  disabled = false,
  className = '',
}) => {
  const isOn = checked && !isLoading;
  const status =
    (isLoading && statusLoading) || (checked && statusOn) || statusOff;

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
        },
        className
      )}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleToggle}
    >
      <div className="toggle__content">
        <div className="toggle__icon">{icon}</div>
        <div className="toggle__text">
          <div className="toggle__header">
            {header}
            {isOn && (
              <Chip
                compact
                className="toggle__header__chip"
                tabIndex={-1}
                aria-hidden="true"
                asSpan
              >
                ON
              </Chip>
            )}
          </div>
          <div className="toggle__status">{status}</div>
        </div>
        <div className="toggle__switch" aria-hidden="true">
          <span className="slider" />
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
