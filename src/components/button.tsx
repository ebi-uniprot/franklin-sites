import {
  createElement,
  ComponentClass,
  FC,
  FunctionComponent,
  HTMLAttributes,
} from 'react';
import cn from 'classnames';

import '../styles/common/_buttons.scss';

type PossibleElements =
  | HTMLAnchorElement // <a></a>
  | HTMLButtonElement // <button></button>
  | FunctionComponent
  | ComponentClass;

type ButtonProps = {
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
  /**
   * Any other prop to pass down to the rendered element
   */
  [key: string]: unknown;
};

export const Button: FC<ButtonProps> = ({
  element = 'button',
  className,
  variant = 'primary',
  children,
  ...props
}) => {
  const rest = props;
  if (element === 'button') {
    rest.type = props.type || 'button';
  }
  return createElement<HTMLAttributes<PossibleElements>>(
    element,
    {
      className: cn('button', variant, { disabled: props.disabled }, className),
      ...props,
    },
    children
  );
};

export default Button;
