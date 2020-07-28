import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/expandable-list.scss';

export const ExpandableMessage = ({
  descriptionString,
  expanded,
  setExpanded,
}) => (
  <button
    data-testid="expandable-message"
    className="button tertiary expandable-list__action"
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
  extraActions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const enoughChildren = children.length > numberCollapsedItems + 1;
  const itemNodes = children
    .slice(
      0,
      expanded || !enoughChildren ? children.length : numberCollapsedItems
    )
    .map(item => <li key={item.id}>{item.content}</li>);

  let actions = null;
  if (enoughChildren || extraActions) {
    actions = (
      <li>
        {enoughChildren && (
          <ExpandableMessage
            expanded={expanded}
            setExpanded={setExpanded}
            descriptionString={descriptionString}
          />
        )}
        {extraActions}
      </li>
    );
  }

  return (
    <ul className={`expandable-list ${showBullets ? '' : 'no-bullet'}`}>
      {itemNodes}
      {actions}
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
  extraActions: PropTypes.element,
};

ExpandableList.defaultProps = {
  numberCollapsedItems: 5,
  descriptionString: 'items',
  showBullets: false,
  extraActions: null,
};

export default ExpandableList;
