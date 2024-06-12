import { forwardRef, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import '../styles/components/card.scss';

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
   * Link components to be displayed at the bottom of the card
   */
  links?: ReactNode[];
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
      {!!links?.length && <div className="card__actions">{links}</div>}
    </section>
  )
);

export default Card;
