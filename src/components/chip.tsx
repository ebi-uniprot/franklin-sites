import {
  FC,
  useCallback,
  useRef,
  ReactNode,
  MouseEvent as ReactMouseEvent,
} from 'react';
import cn from 'classnames';

import RemoveIcon from '../svg/times.svg';

import '../styles/components/chip.scss';

type ChipProps = {
  /**
   * What is displayed within the chip
   */
  children: string | ReactNode;
  /**
   * Call back which, if present, will display a remove icon and is fired when this is clicked
   */
  onRemove?: (event: ReactMouseEvent<SVGElement, MouseEvent>) => void;
  /**
   * If true will opacify the chip and prevent the remove from being clickable
   */
  disabled?: boolean;
  /**
   * Additional CSS classnames to apply (eg secondary, tertiary)
   */
  className?: string;
  /**
   * Compact styling for chip
   */
  compact?: boolean;
  /**
   * Title to display on mouse over
   */
  title?: string;
  /**
   * click event listener on the component (except on the close button if present)
   */
  onClick?: () => void;
  /**
   * Optional extra props to pass to the chip
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<PropertyKey, any>;
};

export const Chip: FC<ChipProps> = ({
  children,
  onRemove,
  className = '',
  disabled,
  compact = false,
  title,
  onClick,
  ...props
}) => {
  const onRemoveRef = useRef(onRemove);
  onRemoveRef.current = onRemove;

  const handleRemove = useCallback(
    (event: ReactMouseEvent<SVGElement, MouseEvent>) => {
      event.stopPropagation();
      onRemoveRef.current?.(event);
    },
    []
  );

  return (
    <button
      type="button"
      className={cn(
        'chip',
        { 'chip--disabled': disabled, 'chip--compact': compact },
        className
      )}
      title={title}
      onClick={onClick}
      disabled={typeof disabled === 'boolean' ? disabled : !onClick}
      {...props}
    >
      {children}
      {onRemove && !disabled && (
        <RemoveIcon data-testid="remove-icon" onClick={handleRemove} />
      )}
    </button>
  );
};

export default Chip;
