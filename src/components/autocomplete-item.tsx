import { useEffect, useRef } from 'react';
import { SubstringHighlight } from '.';

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
  const node = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (active && node.current) {
      node.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  });

  return (
    <li ref={node} data-testid="autocomplete-item">
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
