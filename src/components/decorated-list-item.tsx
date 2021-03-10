import { FC, ReactNode } from 'react';
import cn from 'classnames';

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

const DecoratedListItem: FC<Props> = ({
  title,
  children,
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
    })}
    {...props}
  >
    <div className="decorated-list-item__title">
      <h5 className="bold">{title}</h5>
    </div>

    <div className="decorated-list-item__content">
      {highlight ? <strong>{children}</strong> : children}
    </div>
  </div>
);

export default DecoratedListItem;
