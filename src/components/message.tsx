import { FC, ReactNode, HTMLAttributes, MouseEvent } from 'react';
import cn from 'classnames';

import WarningIcon from '../svg/warning.svg';
import SuccessIcon from '../svg/success.svg';
import WarningTriangleIcon from '../svg/warning-triangle.svg';
import ErrorIcon from '../svg/error.svg';
import CloseIcon from '../svg/times.svg';

import '../styles/components/message.scss';

const iconSize = '1.125em';

type Props = {
  /**
   * The message level: 'warning', 'failure', 'success', 'info' (default)
   */
  level?: 'warning' | 'failure' | 'success' | 'info';
  /**
   * The content to appear underneath of the main message
   */
  subtitle?: ReactNode;
  /**
   * Whether the message can be closed or not
   */
  onDismiss?: (event: MouseEvent) => void;
  /**
   * To hide the default message icon
   */
  noIcon?: boolean;
  /**
   * To hide the default box shadow
   */
  noShadow?: boolean;
  /**
   * To apply any specific styles required for messages shown in
   * full-page error pages
   */
  forFullPage?: boolean;
};

const Message: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  children,
  level = 'info',
  subtitle,
  onDismiss,
  noIcon,
  noShadow,
  forFullPage,
  className,
  ...props
}) => {
  let maybeIcon = null;
  if (!noIcon && !forFullPage) {
    maybeIcon = <WarningIcon width={iconSize} height={iconSize} />;
    if (level === 'warning') {
      maybeIcon = <WarningTriangleIcon width={iconSize} height={iconSize} />;
    } else if (level === 'failure') {
      maybeIcon = <ErrorIcon width={iconSize} height={iconSize} />;
    } else if (level === 'success') {
      maybeIcon = <SuccessIcon width={iconSize} height={iconSize} />;
    }
  }

  return (
    <div
      className={cn(className, 'message', `message--${level}`, {
        'message--no-shadow': noShadow || forFullPage,
        'message--for-full-page': forFullPage,
      })}
      role="status"
      {...props}
    >
      <div className="message__side-border" />

      {maybeIcon}

      <section className="message__content">
        {forFullPage ? <h3>{children}</h3> : <small>{children}</small>}
      </section>

      {onDismiss && (
        <button type="button" className="message__dismiss" onClick={onDismiss}>
          <CloseIcon width="10" height="10" />
        </button>
      )}

      {subtitle && <div className="message__subtitle">{subtitle}</div>}
    </div>
  );
};

export default Message;
