import { ReactNode, useCallback, useState } from 'react';
import cn from 'classnames';
import { Except } from 'type-fest';

import {
  BasicItem,
  getFlattenedPaths,
  restructureFlattenedTreeDataForAutocomplete,
} from '../utils';
import DropdownButton, { DropdownButtonProps } from './dropdown-button';
import Button from './button';
import Autocomplete from './autocomplete';

import '../styles/components/tree-select.scss';
import { AutocompleteItemType } from './autocomplete-item';

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
  const [autocompleteShowDropdown, setAutocompleteShowDropdown] =
    useState(false);

  const toggleNode = useCallback(
    (node: AutocompleteItemType | BasicItem<Item>) => {
      if (openNodes.includes(node.id)) {
        setOpenNodes(openNodes.slice(0, openNodes.indexOf(node.id)));
      } else {
        setOpenNodes([...openNodes, node.id]);
      }
    },
    [openNodes]
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
        const path = getFlattenedPaths(data, node.id)[0];
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
      open = false
    ) => (
      <ul className={cn({ open })}>
        {items.map((node) => (
          <li key={node.id} className={cn({ branch: node.items })}>
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
            {node.items &&
              buildTree(
                node.items,
                setShowDropdownMenu,
                openNodes.includes(node.id)
              )}
          </li>
        ))}
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
              data={restructureFlattenedTreeDataForAutocomplete(
                getFlattenedPaths(data)
              )}
              showDropdownUpdated={setAutocompleteShowDropdown}
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
              {buildTree(data, setShowDropdownMenu)}
            </div>
          )}
        </>
      )}
    </DropdownButton>
  );
};

export default TreeSelect;
