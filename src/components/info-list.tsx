import { FC, ReactNode } from 'react';
import cn from 'classnames';

import DecoratedListItem from './decorated-list-item';

import '../styles/components/info-list.scss';

type Props = {
  /**
   * An array of objects each containing 'title' and 'content'
   */
  infoData: Array<{ title: string; content: ReactNode }>;
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
  /**
   * optional CSS classname coming from the parent
   */
  className?: string;
};

const InfoList: FC<Props> = ({
  infoData,
  columns,
  isCompact,
  highlightFirstItem,
  noTitles,
  className,
  ...props
}) => (
  <ul
    className={cn(className, 'info-list', {
      'info-list--columns': columns,
    })}
    {...props}
  >
    {infoData.map(
      // Only draw if there is content
      (item, index) =>
        item.content && (
          <li key={item.title}>
            <DecoratedListItem
              title={item.title}
              highlight={index === 0 && highlightFirstItem}
              compact={isCompact}
              hideTitle={noTitles}
              key={item.title}
            >
              {item.content}
            </DecoratedListItem>
          </li>
        )
    )}
  </ul>
);

export default InfoList;
