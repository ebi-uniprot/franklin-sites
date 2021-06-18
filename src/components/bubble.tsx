import { HTMLAttributes } from 'react';
import cn from 'classnames';

import '../styles/components/bubble.scss';

type Props = {
  /**
   * The number to display
   */
  children: number;
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
}: Props & HTMLAttributes<HTMLSpanElement>) => {
  let displayValue: string | number = Math.round(children * 10) / 10;
  if (children > 99) {
    displayValue = '99+';
  }
  return (
    <span className={cn(className, `bubble--${size}`)} {...props}>
      {displayValue}
    </span>
  );
};

export default Bubble;
