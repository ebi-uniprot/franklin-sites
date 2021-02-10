import { forwardRef, FC, ReactNode, HTMLAttributes } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import '../styles/components/card.scss';

type CardLinkProps = {
  name: string;
  link: LinkProps['to'];
  color?: string;
};

const CardLink: FC<CardLinkProps> = ({ name, link, color }) => (
  <NavLink
    to={link}
    className="card__link"
    activeClassName="card__link--active"
    style={color ? { borderBottom: `0.125rem solid ${color}` } : undefined}
  >
    {name}
  </NavLink>
);

type Props = {
  /**
   * The card title (can be an Element)
   */
  title?: ReactNode;
  /**
   * The subtitle (can be an Element)
   */
  subtitle?: ReactNode;
  /**
   * Links to be displayed at the bottom of the card
   */
  links?: Array<CardLinkProps>;
  /**
   * Should the card styling show it as active or not
   */
  active?: boolean;
};

const Card = forwardRef<HTMLElement, Props & HTMLAttributes<HTMLElement>>(
  (
    {
      title,
      subtitle,
      children,
      links,
      onClick,
      onKeyDown,
      active,
      className,
      ...props
    },
    ref
  ) => {
    const containerAttributes = onClick
      ? {
          className: 'card--has-hover',
          onClick,
          onKeyDown,
          role: 'button',
          tabIndex: 0,
        }
      : {};
    return (
      <section
        className={cn(className, 'card', { 'card--active': active })}
        ref={ref}
        {...props}
      >
        <div {...containerAttributes}>
          {title && (
            <div className="card__header">
              <h2 className="card__title">{title}</h2>
              {subtitle && <div className="card__subtitle">{subtitle}</div>}
            </div>
          )}
          <div className="card__content">{children}</div>
        </div>
        {links?.length ? (
          <div className="card__actions">
            {links.map((link) => (
              <CardLink key={link.name} {...link} />
            ))}
          </div>
        ) : undefined}
      </section>
    );
  }
);

export default Card;
