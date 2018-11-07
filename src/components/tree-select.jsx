import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFlattenedPaths, restructureFlattenedTreeDataForAutocomplete } from '../utils';
import Select from './select';
import Autocomplete from './autocomplete';
import '../../dist/components/tree-select.css';

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
      const leafNode = path[path.length - 1];
      this.setState({
        activeNodes: path.map(d => d.value),
        selectedNode: leafNode,
        openNodes: path.map(d => d.value),
      });
      onSelect(leafNode);
    }
  }

  toggleNode(node) {
    let { openNodes } = this.state;
    if (openNodes.includes(node.value)) {
      openNodes = openNodes.slice(0, openNodes.indexOf(node.value));
    } else {
      openNodes = [...openNodes, node.value];
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

  handleAutocompleteDropwdownUpdated(autocompleteShowDropdown) {
    this.setState({ autocompleteShowDropdown });
  }

  handleAutocompleteSelect(node) {
    this.handleNodeClick(node);
  }

  render() {
    const { selectedNode, autocompleteShowDropdown } = this.state;
    const { data, autocomplete, autocompletePlaceholder } = this.props;
    let autocompleteNode;
    if (autocomplete) {
      const flattenedPaths = getFlattenedPaths(data);
      const squashedPaths = restructureFlattenedTreeDataForAutocomplete(flattenedPaths);
      autocompleteNode = (
        <Autocomplete
          data={squashedPaths}
          showDropwdownUpdated={this.handleAutocompleteDropwdownUpdated}
          onSelect={this.handleAutocompleteSelect}
          placeholder={autocompletePlaceholder}
          clearOnSelect
        />
      );
    }
    let treeNode;
    if (!autocompleteShowDropdown) {
      treeNode = this.buildTree(data);
    }
    return (
      <Select label={selectedNode && selectedNode.label}>
        {autocompleteNode}
        <div className="dropdown-menu__panel">{treeNode}</div>
      </Select>
    );
  }
}

TreeSelect.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
  autocompletePlaceholder: PropTypes.string,
};

TreeSelect.defaultProps = {
  autocomplete: false,
  autocompletePlaceholder: '',
};

export default TreeSelect;
