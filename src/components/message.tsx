import { FC, ReactNode, HTMLAttributes, MouseEvent } from 'react';
import cn from 'classnames';

import {
  InformationIcon,
  SuccessIcon,
  WarningTriangleIcon,
  ErrorIcon,
  CloseIcon,
} from '.';

import '../styles/components/message.scss';

const iconSize = '1.125em';

type Props = {
  /**
   * The message level: 'warning', 'failure', 'success', 'info' (default)
   */
  level?: 'warning' | 'failure' | 'success' | 'info';
  /**
   * The title of the message
   */
  heading?: ReactNode;
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
};

const Message: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  children,
  level = 'info',
  heading,
  subtitle,
  onDismiss,
  noIcon,
  noShadow,
  className,
  ...props
}) => {
  let maybeIcon = null;
  const iconAlign = heading
    ? 'message--icon-align-center'
    : 'message--icon-align-top';

  if (!noIcon) {
    maybeIcon = (
      <InformationIcon
        width={iconSize}
        height={iconSize}
        className={iconAlign}
      />
    );
    if (level === 'warning') {
      maybeIcon = (
        <WarningTriangleIcon
          width={iconSize}
          height={iconSize}
          className={iconAlign}
        />
      );
    } else if (level === 'failure') {
      maybeIcon = (
        <ErrorIcon width={iconSize} height={iconSize} className={iconAlign} />
      );
    } else if (level === 'success') {
      maybeIcon = (
        <SuccessIcon width={iconSize} height={iconSize} className={iconAlign} />
      );
    }
  }

  return (
    <div
      className={cn(className, 'message', `message--${level}`, {
        'message--no-shadow': noShadow,
      })}
      role="status"
      {...props}
    >
      <div className="message__side-border" />

      {maybeIcon}

      {heading ? (
        <>
          <div
            className={cn('message__title', {
              'message__title--no-icon': noIcon,
            })}
          >
            {heading}
          </div>
          <div className="message__text">{children}</div>
        </>
      ) : (
        <div className="message__title">{children}</div>
      )}

      {onDismiss && (
        <button
          type="button"
          aria-label="dismiss"
          className="message__dismiss"
          onClick={onDismiss}
        >
          <CloseIcon width="10" height="10" />
        </button>
      )}

      {subtitle && <div className="message__subtitle">{subtitle}</div>}
    </div>
  );
};

export default Message;
