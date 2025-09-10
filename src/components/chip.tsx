import {
  type FC,
  useCallback,
  useRef,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type HTMLAttributes,
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
   * click event listener on the component (except on the close button if present)
   */
  onClick?: () => void;
  /**
   * key press event listener on the component
   */
  onKeyPress?: () => void;
  innerRef?: (node: HTMLElement | null) => void;
};

export const Chip: FC<
  ChipProps & HTMLAttributes<HTMLButtonElement | HTMLSpanElement>
> = ({
  children,
  onRemove,
  className = '',
  disabled,
  compact = false,
  onClick,
  onKeyPress,
  innerRef,
  ...rest
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
      ref={innerRef}
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
