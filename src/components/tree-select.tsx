import { ReactNode, useCallback, useState, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { Except } from 'type-fest';

import DropdownButton, { DropdownButtonProps } from './dropdown-button';
import Button from './button';
import Autocomplete from './autocomplete';

import {
  BasicItem,
  getNodePaths,
  prepareTreeDataForAutocomplete,
  getSingleChildren,
} from '../utils';

import { AutocompleteItemType } from './autocomplete-item';

import '../styles/components/tree-select.scss';

export type TreeSelectProps<Item extends BasicItem<Item>> = {
  /**
   * The tree structure
   */
  data: Item[];
  /**
   * What happens when something is selected
   */
  onSelect: (item: Omit<Item, 'items'>) => void;
  /**
   * Contains autocomplete functionality to search through tree
   */
  autocomplete?: boolean;
  /**
   * Placeholder for the autocomplete input box
   */
  autocompletePlaceholder?: string;
  autocompleteFilter?: boolean;
  /**
   * The displayed label on the button
   */
  label?: ReactNode;
  /**
   * Array of default active nodes for initialisation
   */
  defaultActiveNodes?: Item['id'][];
};

type SetShowDropdownMenu = (show: boolean) => void;

const TreeSelect = <Item extends BasicItem<Item>>({
  data,
  onSelect,
  autocomplete = false,
  autocompletePlaceholder = '',
  autocompleteFilter = true,
  defaultActiveNodes = [],
  label,
  ...props
}: Except<DropdownButtonProps, 'children' | 'label'> &
  TreeSelectProps<Item>) => {
  const [activeNodes, setActiveNodes] = useState(defaultActiveNodes);

  const [openNodes, setOpenNodes] = useState<BasicItem<Item>['id'][]>([]);
  // When data changes, we need to update which nodes need to be open
  useEffect(() => {
    setOpenNodes(Array.from(getSingleChildren(data)));
  }, [data]);

  const [autocompleteShowDropdown, setAutocompleteShowDropdown] =
    useState(false);

  const autocompleteData = useMemo(
    () => prepareTreeDataForAutocomplete(getNodePaths(data)),
    [data]
  );
  const toggleNode = useCallback(
    (node: AutocompleteItemType | BasicItem<Item>) =>
      setOpenNodes((openNodes) =>
        openNodes.includes(node.id)
          ? openNodes.filter((id) => id !== node.id)
          : [...openNodes, node.id]
      ),
    []
  );

  const handleNodeClick = useCallback(
    (
      node: AutocompleteItemType | BasicItem<Item> | string,
      setShowDropdownMenu: SetShowDropdownMenu
    ) => {
      // Don't register when user hasn't specifically selected something
      if (typeof node === 'string') {
        return;
      }
      if (node.items) {
        toggleNode(node);
      } else {
        const path = getNodePaths(data, node.id)[0];
        const leafNode = path[path.length - 1];
        setActiveNodes(path.map((d) => d.id));
        setOpenNodes(path.map((d) => d.id));
        onSelect(leafNode);
        setShowDropdownMenu(false);
      }
    },
    [data, onSelect, toggleNode]
  );

  const buildTree = useCallback(
    (
      items: BasicItem<Item>[],
      setShowDropdownMenu: SetShowDropdownMenu,
      first = false
    ) => (
      <ul role={first ? 'tree' : 'group'}>
        {items.map((node) => {
          let ariaExpanded: undefined | 'true' | 'false';
          if (node.items) {
            ariaExpanded = openNodes.includes(node.id) ? 'true' : 'false';
          }
          return (
            <li
              key={node.id}
              role="treeitem"
              aria-expanded={ariaExpanded}
              className={cn({ branch: node.items })}
            >
              <Button
                onClick={() => handleNodeClick(node, setShowDropdownMenu)}
                className={cn({ active: activeNodes.includes(node.id) })}
                variant="secondary"
                aria-label={
                  node.items?.length
                    ? `${node.label} (${node.items.length} nested option${
                        node.items.length === 1 ? '' : 's'
                      })`
                    : undefined
                }
              >
                {node.label}
              </Button>
              {node.items && buildTree(node.items, setShowDropdownMenu)}
            </li>
          );
        })}
      </ul>
    ),
    [activeNodes, handleNodeClick, openNodes]
  );

  return (
    <DropdownButton label={label || 'Select'} {...props}>
      {(setShowDropdownMenu: SetShowDropdownMenu) => (
        <>
          {autocomplete && (
            <Autocomplete
              data={autocompleteData}
              onDropdownChange={setAutocompleteShowDropdown}
              onSelect={(node: AutocompleteItemType | string) =>
                handleNodeClick(node, setShowDropdownMenu)
              }
              placeholder={autocompletePlaceholder}
              filter={autocompleteFilter}
              clearOnSelect
              autoFocus
            />
          )}
          {!autocompleteShowDropdown && (
            <div className="dropdown-menu__panel">
              {buildTree(data, setShowDropdownMenu, true)}
            </div>
          )}
        </>
      )}
    </DropdownButton>
  );
};

export default TreeSelect;
