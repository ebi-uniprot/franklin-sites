import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/components/card.scss';

const CardLink = ({ name, link, color }) => (
  <div className="card__link" style={color ? { borderColor: color } : {}}>
    <Link to={link}>{name}</Link>
  </div>
);

CardLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
};

CardLink.defaultProps = {
  color: '',
};

const Card = ({
  title, subtitle, children, links, backgroundColor,
}) => (
  <div className="card" style={backgroundColor ? { backgroundColor } : {}}>
    {title && (
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        {subtitle && <div className="card__subtitle">{subtitle}</div>}
      </div>
    )}
    <div className="card__content">{children}</div>
    {links.length > 0 && (
      <div className="card__actions">
        {links.map(l => (
          <CardLink key={l.name} {...l} />
        ))}
      </div>
    )}
  </div>
);

Card.propTypes = {
  /**
   * The card title (can be an Element)
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * The subtitle (can be an Element)
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * The main content of the card
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  /**
   * The colour of the line displayed under the title (default is $colour-seashell-grey)
   */
  backgroundColor: PropTypes.string,
  /**
   * Links to be displayed at the bottom of the card
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      color: PropTypes.string,
    }),
  ),
};

Card.defaultProps = {
  backgroundColor: '',
  title: '',
  subtitle: '',
  links: [],
};

export default Card;
