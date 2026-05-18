import { useEffect, useRef } from 'react';

import SubstringHighlight from './substring-highlight';

export type AutocompleteItemType = {
  id: string;
  pathLabel: string;
  itemLabel: string;
  items?: AutocompleteItemType[];
  tags?: string[];
};

type AutocompleteItemProps = {
  item: AutocompleteItemType;
  active: boolean;
  substringToHighlight: string;
  handleOnClick: (
    item: AutocompleteItemType | string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const AutocompleteItem = ({
  item,
  active,
  substringToHighlight,
  handleOnClick,
}: AutocompleteItemProps) => {
  const nodeRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (active && nodeRef.current) {
      nodeRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  });

  return (
    <li ref={nodeRef} data-testid="autocomplete-item">
      <button
        type="button"
        onClick={(e) => handleOnClick(item, e)}
        className={active ? 'hover' : ''}
      >
        {substringToHighlight ? (
          <SubstringHighlight substring={substringToHighlight}>
            {item.pathLabel}
          </SubstringHighlight>
        ) : (
          item.itemLabel
        )}
      </button>
    </li>
  );
};

export default AutocompleteItem;
