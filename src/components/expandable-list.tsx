import { FC, Children, useState, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import Button from './button';

import '../styles/components/expandable-list.scss';

type ExpandableMessageProps = {
  expanded?: boolean;
  setExpanded: (expanded: boolean) => unknown;
  descriptionString?: string;
  showHideWording?: boolean;
  nHiddenItems?: number;
};

export const ExpandableMessage: FC<ExpandableMessageProps> = ({
  descriptionString = 'items',
  expanded,
  setExpanded,
  showHideWording,
  nHiddenItems,
}) => {
  let message = `${showHideWording ? 'Hide' : 'Less'} ${descriptionString}`;
  if (!expanded) {
    if (nHiddenItems === undefined) {
      message = showHideWording ? 'Show' : 'More';
    } else {
      message = showHideWording
        ? `Show ${nHiddenItems}`
        : `${nHiddenItems} more`;
    }
    message += ` ${descriptionString}`;
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
  children?: ReactNode;
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
};

export const ExpandableList = ({
  children: c,
  numberCollapsedItems = 5,
  descriptionString = 'items',
  showBullets,
  extraActions,
  displayNumberOfHiddenItems,
  className,
  ...props
}: ExpandableListProps & HTMLAttributes<HTMLUListElement>) => {
  const [expanded, setExpanded] = useState(false);

  // get an array of children, filter out null or undefined children to avoid
  // counting them towards the threshold limit
  const children = Children.toArray(c).filter(Boolean);

  if (!children.length) {
    return null;
  }

  const enoughChildren = children.length > numberCollapsedItems + 1;
  const itemNodes = Children.map(
    children.slice(
      0,
      expanded || !enoughChildren ? children.length : numberCollapsedItems
    ),
    (child, index) => {
      let key: string | number = index;
      if (typeof child === 'object' && 'key' in child && child.key) {
        key = child.key;
      }
      return <li key={key}>{child}</li>;
    }
  );

  let actions = null;
  if (enoughChildren || extraActions) {
    actions = (
      <li>
        {enoughChildren && (
          <ExpandableMessage
            expanded={expanded}
            setExpanded={setExpanded}
            descriptionString={descriptionString || 'items'}
            showHideWording={numberCollapsedItems === 0}
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
