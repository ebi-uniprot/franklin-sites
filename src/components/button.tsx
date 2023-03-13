import {
  forwardRef,
  ComponentClass,
  FunctionComponent,
  ReactNode,
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
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Any other prop to pass down to the rendered element
   */
  [key: string]: unknown;
};

const Button = ({
  element = 'button',
  className,
  variant = 'primary',
  children,
  type,
  ...props
}: ButtonProps) => {
  // eslint-disable-next-line no-underscore-dangle
  let _type = type;

  if (element === 'button') {
    _type = type || 'button';
  }

  const Element = element;
  return (
    <Element
      className={cn('button', variant, { disabled: props.disabled }, className)}
      type={_type}
      {...props}
    >
      {children}
    </Element>
  );
};

export default forwardRef<PossibleElements, ButtonProps>((props, ref) => (
  <Button {...props} ref={ref} />
));
