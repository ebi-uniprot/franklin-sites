import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/message.scss';
import WarningIcon from '../svg/warning.svg';
import CloseIcon from '../svg/times.svg';

const MessageLevel = {
  warning: 'warning',
  failure: 'failure',
  success: 'success',
  info: 'info',
};

const iconSize = '1.125em';

const Message = ({
  children,
  level,
  subtitle,
  onDismiss,
  noIcon,
  'data-testid': dataTestId,
}) => (
  <div
    className={`message message--${level} ${noIcon && 'message--no-icon'}`}
    role="status"
    data-testid={dataTestId}
  >
    <div className="message__side-border" />

    {!noIcon && <WarningIcon width={iconSize} height={iconSize} />}

    <section className="message__content">
      <h3>{children}</h3>
    </section>

    {onDismiss && (
      <button type="button" className="message__dismiss" onClick={onDismiss}>
        <CloseIcon width="10" height="10" />
      </button>
    )}

    {subtitle && <div className="message__subtitle">{subtitle}</div>}
  </div>
);

Message.propTypes = {
  /**
   * The message body
   */
  children: PropTypes.node.isRequired,
  /**
   * The message level: 'warning', 'failure', 'success', 'info' (default)
   */
  level: PropTypes.oneOf(['warning', 'failure', 'success', 'info']),
  /**
   * The content to appear underneath of the main message
   */
  subtitle: PropTypes.node,
  /**
   * Whether the message can be closed or not
   */
  onDismiss: PropTypes.func,
  /**
   * Custom Test ID
   */
   'data-testid': PropTypes.string,
  /**
   * To hide the default message icon
   */
  noIcon: PropTypes.bool,
};

Message.defaultProps = {
  level: MessageLevel.info,
  subtitle: null,
  onDismiss: null,
  'data-testid': null,
  noIcon: false,
};

export default Message;
