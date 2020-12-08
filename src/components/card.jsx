import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';

import '../styles/components/card.scss';

const CardLink = ({ name, link, color, includeSeparator }) => {
  const match = useRouteMatch(link);
  return (
    <span
      className={classNames('card__link', {
        'card__link--separator': includeSeparator,
        'card__link--active': match,
      })}
      style={color ? { borderBottom: `0.125rem solid ${color}` } : {}}
    >
      <Link to={link}>{name}</Link>
    </span>
  );
};

CardLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  includeSeparator: PropTypes.bool,
};

CardLink.defaultProps = {
  color: null,
  includeSeparator: false,
};

const Card = forwardRef(
  (
    { title, subtitle, children, links, onClick, onKeyDown, active, ...props },
    ref
  ) => {
    const containerAttributes = onClick
      ? {
          className: ' card--has-hover',
          onClick,
          onKeyDown,
          role: 'button',
          tabIndex: 0,
        }
      : {};
    return (
      <div
        className={classNames('card', { 'card--active': active })}
        ref={ref}
        {...props}
      >
        <section {...containerAttributes}>
          {title && (
            <div className="card__header">
              <h2 className="card__title">{title}</h2>
              {subtitle && <div className="card__subtitle">{subtitle}</div>}
            </div>
          )}
          <div className="card__content">{children}</div>
        </section>
        {links.length > 0 && (
          <section className="card__actions">
            {links.map((l, i) => (
              <CardLink key={l.name} {...l} includeSeparator={i > 0} />
            ))}
          </section>
        )}
      </div>
    );
  }
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
    })
  ),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  /**
   * Should the card styling show it as active or not
   */
  active: PropTypes.bool,
};

Card.defaultProps = {
  title: '',
  subtitle: '',
  links: [],
  onClick: null,
  onKeyDown: null,
  active: false,
};

export default Card;
