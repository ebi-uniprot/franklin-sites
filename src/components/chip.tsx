import {
  useCallback,
  useRef,
  ReactNode,
  MouseEvent as ReactMouseEvent,
  HTMLAttributes,
} from 'react';
import cn from 'classnames';

import RemoveIcon from '../svg/times.svg';

import '../styles/components/chip.scss';

type ChipProps = {
  /**
   * What is displayed within the chip
   */
  children: ReactNode;
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
   * key press event listener on the component
   */
  onKeyPress?: () => void;
};

export const Chip = ({
  children,
  onRemove,
  className = '',
  disabled,
  compact = false,
  title,
  onClick,
  onKeyPress,
  ...rest
}: ChipProps & HTMLAttributes<HTMLButtonElement | HTMLSpanElement>) => {
  const onRemoveRef = useRef(onRemove);
  onRemoveRef.current = onRemove;

  const handleRemove = useCallback(
    (event: ReactMouseEvent<SVGElement, MouseEvent>) => {
      event.stopPropagation();
      onRemoveRef.current?.(event);
    },
    []
  );
  const props = { ...rest };
  let element: 'button' | 'span' = 'button';
  if (onRemove) {
    element = 'span';
    if (onClick || onKeyPress) {
      props.role = 'button';
      props.tabIndex = 0;
    }
  }

  const Element = element;
  return (
    <Element
      className={cn(
        'chip',
        { 'chip--disabled': disabled, 'chip--compact': compact },
        className
      )}
      type={element === 'button' ? 'button' : undefined}
      onKeyPress={onKeyPress}
      onClick={onClick}
      {...props}
    >
      {children}
      {onRemove && !disabled && (
        <RemoveIcon data-testid="remove-icon" onClick={handleRemove} />
      )}
    </Element>
  );
};

export default Chip;
