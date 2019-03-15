import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/card.scss';

const DEFAULT_LINK_BORDER_COLOR = '#fff';

const CardLink = ({ name, link, color }) => (
  <div className="card__link" style={{ borderColor: color }}>
    <a href={link}>{name}</a>
  </div>
);

const Card = ({
  title, subtitle, children, links = [],
}) => (
  <div className="card">
    <div className="card__header">
      <h3 className="card__title">{title}</h3>
      {subtitle ? <div className="card__subtitle">{subtitle}</div> : null}
    </div>
    <div className="card__content">{children}</div>
    {links.length === 0 ? null : (
      <div className="card__actions">
        {links.map(l => (
          <CardLink key={l.name} {...l} />
        ))}
      </div>
    )}
  </div>
);

CardLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
};

CardLink.defaultProps = {
  color: DEFAULT_LINK_BORDER_COLOR,
};

Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.element.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      color: PropTypes.string,
    }),
  ),
};

Card.defaultProps = {
  subtitle: '',
  links: [],
};

export default Card;
