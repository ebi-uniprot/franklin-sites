import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import '../styles/components/decorated-list-item.scss';

type Props = {
  /**
   * Title
   */
  title?: string;

  /**
   * Textual content
   */
  content?: string;

  /**
   * Same as 'content', but can accept HTML elements
   */
  children: string | ReactNode;

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
   * Extra CSS class names to be passed down from the parnet component
   */
  className?: string;

  /**
   * Switches to an alternative style for the decorative line
   */
  altStyle?: boolean;
};

const DecoratedListItem: FC<Props> = ({
  title,
  content,
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
    className={classNames(
      className,
      'decorated-list-item',
      { 'decorated-list-item--compact': compact },
      { 'decorated-list-item--no-title': hideTitle },
      { 'decorated-list-item--inline': inline },
      { 'decorated-list-item--alt-style': altStyle }
    )}
    {...props}
  >
    <div className="decorated-list-item__title">
      <h5 className="bold">{title}</h5>
    </div>

    <div className="decorated-list-item__content">
      {highlight ? <strong>{content || children}</strong> : content || children}
    </div>
  </div>
);

export default DecoratedListItem;
