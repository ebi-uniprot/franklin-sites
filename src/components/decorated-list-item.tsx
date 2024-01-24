import { FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import '../styles/components/decorated-list-item.scss';

type Props = {
  /**
   * Title
   */
  title?: ReactNode;
  /**
   * Make this item visually stand-out
   */
  highlight?: boolean;
  /**
   * Target/link of the list item when clicking on it
   */
  to?: LinkProps['to'];
  /**
   * Compact style
   */
  compact?: boolean;
  /**
   * Hide the title
   */
  hideTitle?: boolean;
  /**
   * Attempts to keep the element horizontally aligned with its siblings
   */
  inline?: boolean;
  /**
   * Optional CSS classnames to be passed down from the parent component
   */
  className?: string;
  /**
   * Switches to an alternative style for the decorative line
   */
  altStyle?: boolean;
};

const DecoratedListItem: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  to,
  highlight,
  compact,
  hideTitle,
  inline,
  className,
  altStyle,
  ...props
}) => (
  <div
    className={cn(className, 'decorated-list-item', {
      'decorated-list-item--compact': compact,
      'decorated-list-item--no-title': hideTitle,
      'decorated-list-item--inline': inline,
      'decorated-list-item--alt-style': altStyle,
      'decorated-list-item--has-link': to,
    })}
    {...props}
  >
    {to && (
      <Link
        data-testid="background-link"
        to={to}
        className="decorated-list-item__link"
        aria-hidden="true"
        tabIndex={-1}
      />
    )}
    {title && <div className="decorated-list-item__title tiny">{title}</div>}
    <div className="decorated-list-item__content">
      {highlight ? <strong>{children}</strong> : children}
    </div>
  </div>
);

export default DecoratedListItem;
