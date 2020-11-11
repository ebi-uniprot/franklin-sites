import React, { ComponentClass, FC, FunctionComponent } from 'react';

type ButtonProps = {
  /**
   * The element to use as a button
   */
  element?: 'button' | 'a' | FunctionComponent | ComponentClass;
};

export const Button: FC<ButtonProps> = ({ element = 'button', children }) => {
  return React.createElement(element, {}, children);
};

export default Button;
