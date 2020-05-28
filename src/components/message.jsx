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
  onDismiss,
  'data-testid': dataTestId,
}) => (
  <div
    className={`message message--${level}`}
    role="status"
    data-testid={dataTestId}
  >
    <section className="message__content">
      <WarningIcon width={iconSize} height={iconSize} />
      <small>{children}</small>
    </section>
    {onDismiss && (
      <button type="button" className="message__dismiss" onClick={onDismiss}>
        <CloseIcon width="10" height="10" />
      </button>
    )}
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
   * Whether the message can be closed or not
   */
  onDismiss: PropTypes.func,
  /**
   * Custom Test ID
   */
   'data-testid': PropTypes.string,
};

Message.defaultProps = {
  level: MessageLevel.info,
  onDismiss: null,
  'data-testid': null,
};

export default Message;
