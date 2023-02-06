import { ReactNode } from 'react';
import cn from 'classnames';

import CloseIcon from '../../svg/times.svg';

type WindowActionButtonProps = {
  icon?: ReactNode;
  text?: string;
  onClick: () => void;
  primary?: boolean;
  className?: string;
};
export const WindowActionButton = ({
  icon,
  text,
  onClick,
  primary = false,
  className,
}: WindowActionButtonProps) => {
  const baseClassName = 'window__action-button';
  const iconOnly = icon && !text;

  return (
    <button
      className={cn(baseClassName, className, {
        [`${baseClassName}--icon-only`]: !!iconOnly,
        button: !iconOnly,
        secondary: !iconOnly && !primary,
      })}
      onClick={onClick}
      type="button"
    >
      {icon && icon}
      {text && text}
    </button>
  );
};

type DefaultCloseButtonProps = {
  iconOnly?: boolean;
  text?: string;
  onClick: () => void;
};

export const DefaultCloseButton = ({
  iconOnly = false,
  text,
  onClick,
  ...otherProps
}: DefaultCloseButtonProps) => {
  const baseClassName = 'window__default-close-button';
  const iconOnlyClass = `${baseClassName}--icon-only`;

  return (
    <WindowActionButton
      className={cn(baseClassName, { [iconOnlyClass]: !!iconOnly })}
      icon={iconOnly ? <CloseIcon width="10" height="10" /> : null}
      text={iconOnly ? undefined : 'Close'}
      primary={!iconOnly}
      onClick={onClick}
      {...otherProps}
    />
  );
};

export default {
  WindowActionButton,
  DefaultCloseButton,
};
