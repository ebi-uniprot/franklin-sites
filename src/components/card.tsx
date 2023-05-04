import { forwardRef, ReactNode, HTMLAttributes, ReactText } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import '../styles/components/card.scss';

type CardActionProps = {
  link: LinkProps['to'];
  color?: string;
} & (
  | {
      key?: ReactText;
      name: string;
    }
  | {
      key: ReactText;
      name: ReactNode;
    }
);

const CardAction = ({ name, link, color }: CardActionProps) => (
  <NavLink
    to={link}
    className="card-action"
    activeClassName="card-action--active"
    style={color ? { borderBottom: `0.125rem solid ${color}` } : undefined}
  >
    {name}
  </NavLink>
);

type Props = {
  /**
   * The card header (should include the wanted heading level)
   */
  header?: ReactNode;
  /**
   * Does the card header need a separator? Defaults to true
   */
  headerSeparator?: boolean;
  /**
   * Links to be displayed at the bottom of the card
   */
  links?: Array<CardActionProps>;
};

const Card = forwardRef<HTMLElement, Props & HTMLAttributes<HTMLElement>>(
  (
    { header, headerSeparator = true, children, links, className, ...props },
    ref
  ) => (
    <section className={cn(className, 'card')} ref={ref} {...props}>
      <div className="card__container">
        {header && (
          <div
            className={cn('card__header', {
              'card__header--with-separator': headerSeparator,
            })}
          >
            {header}
          </div>
        )}
        {children && <div className="card__content">{children}</div>}
      </div>
      {links?.length ? (
        <div className="card__actions">
          {links.map((link, index) => (
            <CardAction
              key={
                link.key ||
                (typeof link.name === 'string' ? link.name : index) ||
                index
              }
              {...link}
            />
          ))}
        </div>
      ) : undefined}
    </section>
  )
);

export default Card;
