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
  title, subtitle, children, links, selectable, selected, onSelect, onClick,
}) => {
  const checkbox = <input type="checkbox" checked={selected} onChange={onSelect} />;
  const containerAttributes = {
    className: `card ${selected ? 'card--selected' : ''} ${onClick ? 'card--hashover' : ''}`,
  };
  if (onClick) {
    containerAttributes.onClick = onClick;
    containerAttributes.onKeyDown = onClick;
    containerAttributes.role = 'button';
    containerAttributes.tabIndex = 0;
  }
  return (
    <div {...containerAttributes}>
      {title && (
        <div className="card__header">
          {selectable && <div className="card__header__checkbox">{checkbox}</div>}
          <h3 className="card__title">{title}</h3>
          {subtitle && <div className="card__subtitle">{subtitle}</div>}
        </div>
      )}
      <div className="card__content">
        {selectable && !title && <div className="card__content__checkbox">{checkbox}</div>}
        {children}
      </div>
      {links.length > 0 && (
        <div className="card__actions">
          {links.map(l => (
            <CardLink key={l.name} {...l} />
          ))}
        </div>
      )}
    </div>
  );
};

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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
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
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: '',
  subtitle: '',
  links: [],
  selectable: false,
  selected: false,
  onSelect: null,
  onClick: null,
};

export default Card;
