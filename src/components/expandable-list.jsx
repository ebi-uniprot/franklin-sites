import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ExpandableMessage = ({
  descriptionString,
  expanded,
  setExpanded,
}) => (
  <button
    data-testid="expandable-message"
    className="button tertiary"
    type="button"
    onClick={() => setExpanded(!expanded)}
  >
    {expanded ? `Less ${descriptionString}` : `More ${descriptionString}`}
  </button>
);

ExpandableMessage.propTypes = {
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
  descriptionString: PropTypes.string,
};

ExpandableMessage.defaultProps = {
  descriptionString: 'items',
};

const ExpandableList = ({
  children,
  numberCollapsedItems,
  descriptionString,
  showBullets,
}) => {
  const [expanded, setExpanded] = useState(false);
  const enoughChildren = children.length > numberCollapsedItems + 1;
  const itemNodes = children
    .slice(
      0,
      expanded || !enoughChildren ? children.length : numberCollapsedItems
    )
    .map(item => <li key={item.id}>{item.content}</li>);
  return (
    <ul className={showBullets ? '' : 'no-bullet'}>
      {itemNodes}
      {enoughChildren && (
        <li>
          <ExpandableMessage
            expanded={expanded}
            setExpanded={setExpanded}
            descriptionString={descriptionString}
          />
        </li>
      )}
    </ul>
  );
};

ExpandableList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    })
  ).isRequired,
  numberCollapsedItems: PropTypes.number,
  descriptionString: PropTypes.string,
  showBullets: PropTypes.bool,
};

ExpandableList.defaultProps = {
  numberCollapsedItems: 5,
  descriptionString: 'items',
  showBullets: false,
};

export default ExpandableList;
