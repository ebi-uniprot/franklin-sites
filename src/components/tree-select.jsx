import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFlattenedPaths } from '../utils';
import '../../dist/components/dropdown.css';

class TreeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNodes: [],
      openNodes: [],
    };
  }

  handleNodeClick(node) {
    const { data, onSelect } = this.props;
    if (node.items) {
      this.toggleNode(node);
    } else {
      const path = getFlattenedPaths(data, node.label)[0];
      this.setState({
        activeNodes: path.map(d => d.label),
        selectedNode: node,
      });
      this.toggleTreeSelect();
      onSelect(node);
    }
  }

  toggleNode(node) {
    const { openNodes } = this.state;
    if (openNodes.includes(node.label)) {
      openNodes.splice(openNodes.indexOf(node.label));
    } else {
      openNodes.push(node.label);
    }
    this.setState({ openNodes });
  }

  buildTree(data, open) {
    const { activeNodes, openNodes } = this.state;
    return (
      <ul className={open ? 'open' : ''}>
        {data.map(node => (
          <li key={node.label} className={node.items ? 'branch' : ''}>
            <button
              type="button"
              onClick={e => this.handleNodeClick(node, e)}
              className={activeNodes.includes(node.label) ? 'active' : ''}
            >
              {node.label}
            </button>
            {node.items && this.buildTree(node.items, openNodes.includes(node.label))}
          </li>
        ))}
      </ul>
    );
  }

  toggleTreeSelect() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { selectedNode, showMenu } = this.state;
    const { data } = this.props;
    return (
      <div className="dropdown-container">
        <button type="button" className="button dropdown" onClick={() => this.toggleTreeSelect()}>
          {selectedNode ? selectedNode.label : 'Select'}
        </button>
        <div className={showMenu ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'}>
          {this.buildTree(data)}
        </div>
      </div>
    );
  }
}

TreeSelect.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TreeSelect;
