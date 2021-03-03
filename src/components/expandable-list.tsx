import { FC, Children, useState, ReactNode } from 'react';
import cn from 'classnames';

import Button from './button';

import '../styles/components/expandable-list.scss';

type ExpandableMessageProps = {
  expanded?: boolean;
  setExpanded: (expanded: boolean) => unknown;
  descriptionString?: string;
  nHiddenItems?: number;
};

export const ExpandableMessage: FC<ExpandableMessageProps> = ({
  descriptionString = 'items',
  expanded,
  setExpanded,
  nHiddenItems,
}) => {
  let message = `Less ${descriptionString}`;
  if (!expanded) {
    message = `${
      nHiddenItems === undefined ? 'More' : `${nHiddenItems} more`
    } ${descriptionString}`;
  }
  return (
    <Button
      variant="tertiary"
      className="expandable-list__action"
      onClick={() => setExpanded(!expanded)}
      data-testid="expandable-message"
    >
      {message}
    </Button>
  );
};

type ExpandableListProps = {
  /**
   * Children as an array of react elements, items of the list
   */
  children: ReactNode;
  /**
   * Threshold from which to start hiding items of the list
   */
  numberCollapsedItems?: number;
  /**
   * Description of the items to put in text of the open/close button
   */
  descriptionString?: string;
  /**
   * Wether to show or hide the visual bullet points
   */
  showBullets?: boolean;
  /**
   * Extra element to place alongside the open/close button
   */
  extraActions?: ReactNode;
  /**
   * Wether to display or not the number of hidden elements
   */
  displayNumberOfHiddenItems?: boolean;
  /**
   * Classnames to be added to the list container
   */
  className?: string;
  /**
   * Any other prop to pass down to the rendered element
   */
  [key: string]: unknown;
};

export const ExpandableList: FC<ExpandableListProps> = ({
  children: c,
  numberCollapsedItems = 5,
  descriptionString = 'items',
  showBullets,
  extraActions,
  displayNumberOfHiddenItems,
  className,
  ...props
}) => {
  // get an array of children, filter out null or undefined children to avoid
  // counting them towards the threshold limit
  const children = Children.toArray(c).filter(Boolean);
  const [expanded, setExpanded] = useState(false);
  const enoughChildren = children.length > numberCollapsedItems + 1;
  const itemNodes = children
    .slice(
      0,
      expanded || !enoughChildren ? children.length : numberCollapsedItems
    )
    .map((item, index) => {
      let key: string | number = index;
      if (typeof item === 'object' && 'key' in item && item.key) {
        key = item.key;
      }
      return <li key={key}>{item}</li>;
    });

  let actions = null;
  if (enoughChildren || extraActions) {
    actions = (
      <li>
        {enoughChildren && (
          <ExpandableMessage
            expanded={expanded}
            setExpanded={setExpanded}
            descriptionString={descriptionString || 'items'}
            nHiddenItems={
              displayNumberOfHiddenItems
                ? children.length - numberCollapsedItems
                : undefined
            }
          />
        )}
        {extraActions}
      </li>
    );
  }

  return (
    <ul
      className={cn(className, 'expandable-list', {
        'no-bullet': !showBullets,
      })}
      {...props}
    >
      {itemNodes}
      {actions}
    </ul>
  );
};

export default ExpandableList;