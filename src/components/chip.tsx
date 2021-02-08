import {
  FC,
  useCallback,
  useRef,
  ReactNode,
  MouseEvent as ReactMouseEvent,
} from 'react';
import cn from 'classnames';

import { Button, ButtonProps } from './button';

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
   * Additional CSS classnames to apply
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
};

export const Chip: FC<ChipProps & ButtonProps> = ({
  children,
  onRemove,
  className,
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
    <Button
      className={cn(
        'chip',
        { 'chip--disabled': disabled, 'chip--compact': compact },
        className
      )}
      title={title}
      onClick={onClick}
      disabled={
        typeof disabled === 'boolean' ? disabled : !(onClick || onRemove)
      }
      {...props}
    >
      {children}
      {onRemove && !disabled && (
        <RemoveIcon
          className="chip__remove-icon"
          data-testid="remove-icon"
          onClick={handleRemove}
        />
      )}
    </Button>
  );
};

export default Chip;
