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

const Message = ({ children, level, onDismiss }) => (
  <section className={`alert alert--${level}`}>
    <section className="alert__content">
      <WarningIcon width={iconSize} height={iconSize} />
      <small>{children}</small>
    </section>
    {onDismiss && (
      <button type="button" className="alert__dismiss" onClick={onDismiss}>
        <CloseIcon width="10" height="10" />
      </button>
    )}
  </section>
);

Message.propTypes = {
  /**
   * The message body
   */
  children: PropTypes.element.isRequired,
  /**
   * The message level: 'warning', 'failure', 'success', 'info' (default)
   */
  level: PropTypes.oneOf(['warning', 'failure', 'success', 'info']),
  /**
   * Whether the message can be closed or not
   */
  onDismiss: PropTypes.func,
};

Message.defaultProps = {
  level: MessageLevel.info,
  onDismiss: null,
};

export default Message;
