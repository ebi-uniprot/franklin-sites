import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
  getFlattenedPaths,
  restructureFlattenedTreeDataForAutocomplete,
} from '../utils';
import DropdownButton from './dropdown-button';
import Autocomplete from './autocomplete';

import '../styles/components/tree-select.scss';

const TreeSelect = ({
  data,
  onSelect,
  autocomplete,
  autocompletePlaceholder,
  autocompleteFilter,
  defaultActiveNodes,
  label,
  className,
}) => {
  const [activeNodes, setActiveNodes] = useState(defaultActiveNodes);
  const [openNodes, setOpenNodes] = useState([]);
  const [autocompleteShowDropdown, setAutocompleteShowDropdown] = useState(
    false
  );

  const toggleNode = (node) => {
    if (openNodes.includes(node.id)) {
      setOpenNodes(openNodes.slice(0, openNodes.indexOf(node.id)));
    } else {
      setOpenNodes([...openNodes, node.id]);
    }
  };

  const handleNodeClick = (node, setShowDropdownMenu) => {
    if (node.items) {
      toggleNode(node);
    } else {
      const path = getFlattenedPaths(data, node.id)[0];
      const leafNode = path[path.length - 1];
      setActiveNodes(path.map((d) => d.id));
      setOpenNodes(path.map((d) => d.id));
      onSelect(leafNode);
      setShowDropdownMenu(false);
    }
  };

  const buildTree = (items, setShowDropdownMenu, open) => (
    <ul className={cn({ open })}>
      {items.map((node) => (
        <li key={node.id} className={cn({ branch: node.items })}>
          <button
            type="button"
            onClick={(e) => handleNodeClick(node, setShowDropdownMenu, e)}
            className={cn({ active: activeNodes.includes(node.id) })}
          >
            {node.label}
          </button>
          {node.items &&
            buildTree(
              node.items,
              setShowDropdownMenu,
              openNodes.includes(node.id)
            )}
        </li>
      ))}
    </ul>
  );

  return (
    <DropdownButton label={label || 'Select'} className={className}>
      {(setShowDropdownMenu) => (
        <>
          {autocomplete && (
            <Autocomplete
              data={restructureFlattenedTreeDataForAutocomplete(
                getFlattenedPaths(data)
              )}
              showDropdownUpdated={(show) => setAutocompleteShowDropdown(show)}
              onSelect={(node) => handleNodeClick(node, setShowDropdownMenu)}
              placeholder={autocompletePlaceholder}
              filter={autocompleteFilter}
              clearOnSelect
              autoFocus
            />
          )}
          {!autocompleteShowDropdown && (
            <div className="dropdown-menu__panel">
              {buildTree(data, setShowDropdownMenu)}
            </div>
          )}
        </>
      )}
    </DropdownButton>
  );
};

TreeSelect.propTypes = {
  /**
   * The tree structure
   */
  data: PropTypes.instanceOf(Array).isRequired,
  /**
   * What happens when something is selected
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Contains autocomplete functionality to search through tree
   */
  autocomplete: PropTypes.bool,
  /**
   * Placeholder for the autocomplete input box
   */
  autocompletePlaceholder: PropTypes.string,
  autocompleteFilter: PropTypes.bool,
  /**
   * The displayed label on the button
   */
  label: PropTypes.string,
  /**
   * Additional CSS classnames to apply to button (eg secondary, tertiary)
   */
  className: PropTypes.string,
  /**
   * Array of default active nodes for initialisation
   */
  defaultActiveNodes: PropTypes.arrayOf(PropTypes.string),
};

TreeSelect.defaultProps = {
  autocomplete: false,
  autocompletePlaceholder: '',
  autocompleteFilter: true,
  label: undefined,
  className: undefined,
  defaultActiveNodes: [],
};

export default TreeSelect;
