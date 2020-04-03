import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/message.scss';
import MessageIcon from '../svg/warning.svg';

const MessageLevel = {
  warning: 'warning',
  failure: 'failure',
  success: 'success',
  info: 'info',
};

const iconSize = '1.125em';

const Message = ({ children, level }) => (
  <section className={`alert alert--${level}`}>
    <section className="alert__content">
      <MessageIcon width={iconSize} height={iconSize} />
      <small>{children}</small>
    </section>
  </section>
);

Message.propTypes = {
  children: PropTypes.element.isRequired,
  level: PropTypes.oneOf('warning', 'failure', 'success', 'info'),
};

Message.defaultProps = {
  level: MessageLevel.info,
};

export default Message;
