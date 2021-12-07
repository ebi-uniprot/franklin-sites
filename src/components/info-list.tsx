import { ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import DecoratedListItem from './decorated-list-item';

import '../styles/components/info-list.scss';

type Item = {
  title: ReactNode;
  content: ReactNode;
  key?: string;
  to?: string;
};

type Props = {
  /**
   * An array of objects each containing 'title' and 'content'
   */
  infoData: Array<Item>;
  /**
   * A boolean indicating whether the component should span multiple
   * columns on medium to large screens or not.
   */
  columns?: boolean;
  /**
   * A boolean indicating whether the component should render
   * as a compact list
   */
  isCompact?: boolean;
  /**
   * Should the first content item in the InfoList be bold
   */
  highlightFirstItem?: boolean;
  /**
   * Display titles or not
   */
  noTitles?: boolean;
};

const InfoList = ({
  infoData,
  columns,
  isCompact,
  highlightFirstItem,
  noTitles,
  className,
  ...props
}: Props & HTMLAttributes<HTMLUListElement>) => {
  if (!infoData.length || infoData.every((infoDatum) => !infoDatum.content)) {
    return null;
  }

  return (
    <ul
      className={cn(className, 'info-list', {
        'info-list--columns': columns,
      })}
      {...props}
    >
      {infoData.map(
        // Only draw if there is content
        ({ content, title, key, to }, index) =>
          content && (
            <li key={key || (typeof title === 'string' ? title : index)}>
              <DecoratedListItem
                title={title}
                highlight={index === 0 && highlightFirstItem}
                compact={isCompact}
                hideTitle={noTitles}
                to={to}
              >
                {content}
              </DecoratedListItem>
            </li>
          )
      )}
    </ul>
  );
};

export default InfoList;
