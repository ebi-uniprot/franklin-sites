import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/card.scss';

const Card = ({ title, children }) => (
  <div className="card">
    <h3 className="card__title">{title}</h3>
    <div className="card__content">{children}</div>
  </div>
);
Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
};

export default Card;
