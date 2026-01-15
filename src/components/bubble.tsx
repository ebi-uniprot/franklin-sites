import { type HTMLAttributes, type ReactNode } from 'react';
import cn from 'classnames';
import type { Except } from 'type-fest';

import '../styles/components/bubble.scss';

type Props = {
  /**
   * The number to display
   */
  children?: number;
  /**
   * The bubble size (default is medium)
   */
  size?: 'small' | 'medium' | 'large';
};

const Bubble = ({
  children,
  size = 'medium',
  className,
  ...props
}: Props & Except<HTMLAttributes<HTMLSpanElement>, 'children'>) => {
  let displayValue: ReactNode | undefined;
  if (children !== undefined && Number.isFinite(children)) {
    displayValue = Math.round(children * 10) / 10;
  }
  if (children !== undefined && children > 99) {
    displayValue = '99+';
  }
  return (
    <span className={cn(className, `bubble--${size}`)} {...props}>
      {displayValue}
    </span>
  );
};

export default Bubble;
