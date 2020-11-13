import { createElement, ComponentClass, FC, FunctionComponent } from 'react';
import cn from 'classnames';

import '../styles/common/_buttons.scss';

type ButtonProps = {
  /**
   * The element to use as a button
   */
  element?: 'button' | 'a' | FunctionComponent | ComponentClass;
  /**
   * Classnames to be added to the button
   */
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  element = 'button',
  className,
  children,
}) => {
  const newClassName = cn('button', className);
  return createElement(element, { className: newClassName }, children);
};

export default Button;
