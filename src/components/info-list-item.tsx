import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import '../styles/components/info-list-item.scss';

type Props = {
  /**
   * Title
   */
  title: string;

  /**
   * Textual content
   */
  content: string;

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
};

const InfoListItem: FC<Props> = ({
  title,
  content,
  children,
  highlight,
  compact,
  hideTitle,
  inline,
}: Props) => (
  <div
    className={classNames(
      'info-list-item',
      { 'info-list-item--compact': compact },
      { 'info-list-item--no-title': hideTitle },
      { 'info-list-item--inline': inline }
    )}
  >
    {!hideTitle && title && (
      <div className="info-list-item__title">
        <h5 className="bold">{title}</h5>
      </div>
    )}

    <div className="info-list-item__content">
      {highlight ? <strong>{content || children}</strong> : content || children}
    </div>
  </div>
);

export default InfoListItem;
