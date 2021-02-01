import { forwardRef, FC, ReactNode, HTMLAttributes } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import '../styles/components/card.scss';

type CardLinkProps = {
  name: string;
  link: LinkProps['to'];
  color?: string;
  includeSeparator?: boolean;
};

const CardLink: FC<CardLinkProps> = ({
  name,
  link,
  color,
  includeSeparator,
}) => (
  <span
    className={cn('card__link', {
      'card__link--separator': includeSeparator,
    })}
    style={color ? { borderBottom: `0.125rem solid ${color}` } : {}}
  >
    <NavLink to={link} activeClassName="card__link--active">
      {name}
    </NavLink>
  </span>
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
  links?: Array<Omit<CardLinkProps, 'includeSeparator'>>;
  /**
   * Should the card styling show it as active or not
   */
  active?: boolean;
};

const Card = forwardRef<HTMLDivElement, Props & HTMLAttributes<HTMLDivElement>>(
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
      <div
        className={cn(className, 'card', { 'card--active': active })}
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
        {links?.length ? (
          <section className="card__actions">
            {links.map((l, i) => (
              <CardLink key={l.name} {...l} includeSeparator={i > 0} />
            ))}
          </section>
        ) : undefined}
      </div>
    );
  }
);

export default Card;
