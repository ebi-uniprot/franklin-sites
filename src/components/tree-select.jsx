import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFlattenedPaths, getSquashedArrayOfPaths } from '../utils';
import Autocomplete from './autocomplete';
import '../../dist/components/dropdown.css';

class TreeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNodes: [],
      openNodes: [],
      autocompleteShowDropdown: false,
    };
    this.handleAutocompleteDropwdownUpdated = this.handleAutocompleteDropwdownUpdated.bind(this);
    this.handleAutocompleteSelect = this.handleAutocompleteSelect.bind(this);
  }

  handleNodeClick(node) {
    const { data, onSelect } = this.props;
    if (node.items) {
      this.toggleNode(node);
    } else {
      const path = getFlattenedPaths(data, node.value)[0];
      this.setState({
        activeNodes: path.map(d => d.value),
        selectedNode: node,
        openNodes: path.map(d => d.value),
      });
      this.toggleTreeSelect();
      onSelect(node);
    }
  }

  toggleNode(node) {
    const { openNodes } = this.state;
    if (openNodes.includes(node.value)) {
      openNodes.splice(openNodes.indexOf(node.value));
    } else {
      openNodes.push(node.value);
    }
    this.setState({ openNodes });
  }

  buildTree(data, open) {
    const { activeNodes, openNodes } = this.state;
    return (
      <ul className={open ? 'open' : ''}>
        {data.map(node => (
          <li key={node.value} className={node.items ? 'branch' : ''}>
            <button
              type="button"
              onClick={e => this.handleNodeClick(node, e)}
              className={activeNodes.includes(node.value) ? 'active' : ''}
            >
              {node.label}
            </button>
            {node.items && this.buildTree(node.items, openNodes.includes(node.value))}
          </li>
        ))}
      </ul>
    );
  }

  toggleTreeSelect() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  handleAutocompleteDropwdownUpdated(autocompleteShowDropdown) {
    this.setState({ autocompleteShowDropdown });
  }

  handleAutocompleteSelect(node) {
    this.handleNodeClick(node);
    // this.setState({ selectedNode });
  }

  render() {
    const { selectedNode, showMenu, autocompleteShowDropdown } = this.state;
    const { data, autocomplete } = this.props;
    let autocompleteNode;
    if (autocomplete) {
      const flattenedPaths = getFlattenedPaths(data);
      const squashedPaths = getSquashedArrayOfPaths(flattenedPaths);
      // console.log('data', data);
      // console.log('flattenedPaths', flattenedPaths);
      // console.log('squashedPaths', squashedPaths);
      autocompleteNode = (
        <Autocomplete
          data={squashedPaths}
          showDropwdownUpdated={this.handleAutocompleteDropwdownUpdated}
          onSelect={this.handleAutocompleteSelect}
          clearOnSelect
        />
      );
    }
    let treeNode;
    if (!autocompleteShowDropdown) {
      treeNode = this.buildTree(data);
    }
    return (
      <div className="dropdown-container">
        <button type="button" className="button dropdown" onClick={() => this.toggleTreeSelect()}>
          {selectedNode ? selectedNode.label : 'Select'}
        </button>
        <div className={showMenu ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'}>
          {autocompleteNode}
          {treeNode}
        </div>
      </div>
    );
  }
}

TreeSelect.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
};

TreeSelect.defaultProps = {
  autocomplete: false,
};

export default TreeSelect;
