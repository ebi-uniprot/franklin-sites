import React, { Component } from 'react';
import Card from '../components/card';
import '../styles/components/data-table.scss';

class ListItem extends Component {
  shouldComponentUpdate(nextProps) {
    const { selected } = this.props;
    const { selected: nextSelected } = nextProps;
    return selected !== nextSelected;
  }

  render() {
    const { selected, children, onSelect } = this.props;
    return (
      <Card backgroundColor={selected ? '#f1f1f1' : ''}>
        <div className="data-list-item">
          <div className="data-list-item__checkbox">
            <input type="checkbox" checked={selected} onChange={() => onSelect()} />
          </div>
          <p className="data-list-item__content">{children}</p>
        </div>
      </Card>
    );
  }
}

export default ListItem;
