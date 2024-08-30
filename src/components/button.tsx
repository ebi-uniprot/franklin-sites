import {
  forwardRef,
  ComponentClass,
  FunctionComponent,
  PropsWithChildren,
  HTMLAttributes,
} from 'react';
import cn from 'classnames';

import '../styles/common/_buttons.scss';

type PossibleElements =
  | HTMLAnchorElement // <a></a>
  | HTMLButtonElement // <button></button>
  | FunctionComponent
  | ComponentClass;

export type ButtonProps = {
  /**
   * The element to use as a button
   */
  element?: 'button' | 'a' | FunctionComponent | ComponentClass;
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
} & HTMLAttributes<PossibleElements>;

export const Button = forwardRef<
  PossibleElements,
  PropsWithChildren<ButtonProps>
>(
  (
    { element = 'button', className, variant = 'primary', children, ...props },
    ref
  ) => {
    const rest = props;

    if (element === 'button') {
      rest.type = props.type || 'button';
    }

    const Element = element;
    return (
      <Element
        className={cn(
          'button',
          variant,
          { disabled: props.disabled },
          className
        )}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

export default Button;
