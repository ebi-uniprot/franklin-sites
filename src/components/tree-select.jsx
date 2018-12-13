import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFlattenedPaths, restructureFlattenedTreeDataForAutocomplete } from '../utils';
import DropdownButton from './dropdown-button';
import Autocomplete from './autocomplete';
import '../styles/components/tree-select.scss';

class TreeSelect extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      activeNodes: [],
      openNodes: [],
      autocompleteShowDropdown: false,
      selectedNode: value,
    };
    this.handleAutocompleteDropwdownUpdated = this.handleAutocompleteDropwdownUpdated.bind(this);
    this.handleAutocompleteSelect = this.handleAutocompleteSelect.bind(this);
    this.setDropdownRef = this.setDropdownRef.bind(this);
  }

  setDropdownRef(element) {
    this.dropdownElemnent = element;
  }

  handleNodeClick(node) {
    const { data, onSelect } = this.props;
    if (node.items) {
      this.toggleNode(node);
    } else {
      const path = getFlattenedPaths(data, node.id)[0];
      const leafNode = path[path.length - 1];
      this.setState({
        activeNodes: path.map(d => d.id),
        selectedNode: leafNode,
        openNodes: path.map(d => d.id),
      });
      onSelect(leafNode);
      this.dropdownElemnent.close();
    }
  }

  toggleNode(node) {
    let { openNodes } = this.state;
    if (openNodes.includes(node.id)) {
      openNodes = openNodes.slice(0, openNodes.indexOf(node.id));
    } else {
      openNodes = [...openNodes, node.id];
    }
    this.setState({ openNodes });
  }

  buildTree(data, open) {
    const { activeNodes, openNodes } = this.state;
    return (
      <ul className={open ? 'open' : ''}>
        {data.map(node => (
          <li key={node.id} className={node.items ? 'branch' : ''}>
            <button
              type="button"
              onClick={e => this.handleNodeClick(node, e)}
              className={activeNodes.includes(node.id) ? 'active' : ''}
            >
              {node.label}
            </button>
            {node.items && this.buildTree(node.items, openNodes.includes(node.id))}
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
    const {
      data, autocomplete, autocompletePlaceholder, autocompleteFilter,
    } = this.props;
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
          filter={autocompleteFilter}
          clearOnSelect
        />
      );
    }
    let treeNode;
    if (!autocompleteShowDropdown) {
      treeNode = this.buildTree(data);
    }
    return (
      <DropdownButton
        label={selectedNode ? selectedNode.label : 'Select'}
        ref={this.setDropdownRef}
      >
        {autocompleteNode}
        <div className="dropdown-menu__panel">{treeNode}</div>
      </DropdownButton>
    );
  }
}

TreeSelect.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
  autocompletePlaceholder: PropTypes.string,
  autocompleteFilter: PropTypes.bool,
  value: PropTypes.shape({}),
};

TreeSelect.defaultProps = {
  autocomplete: false,
  autocompletePlaceholder: '',
  autocompleteFilter: true,
  value: undefined,
};

export default TreeSelect;
