import { forwardRef, type PropsWithChildren, type HTMLAttributes } from 'react';
import cn from 'classnames';

import '../styles/common/_buttons.scss';

export type ButtonProps = {
  /**
   * Flag to disable the button
   */
  disabled?: boolean;
  /**
   * Type to pass to the underlying <button></button>
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Variant of the button
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Classnames to be added to the button
   */
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    { className, variant = 'primary', type = 'button', children, ...props },
    ref
  ) => (
    <button
      className={cn('button', variant, { disabled: props.disabled }, className)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
