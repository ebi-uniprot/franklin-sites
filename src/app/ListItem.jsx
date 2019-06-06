import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/card';

const ListItem = memo(
  ({ selected, children, onSelect }) => (
    <Card backgroundColor={selected ? '#f1f1f1' : ''}>
      <div className="data-list-item">
        <div className="data-list-item__checkbox">
          <input type="checkbox" checked={selected} onChange={onSelect} />
        </div>
        <div className="data-list-item__content">{children}</div>
      </div>
    </Card>
  ),
  (props, nextProps) => props.selected === nextProps.selected,
);

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

ListItem.defaultProps = {
  selected: false,
  onSelect: () => {},
};

export default ListItem;
