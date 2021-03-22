import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import DropdownButton from './dropdown-button';
import Button from './button';

import '../styles/components/header.scss';

type HeaderExternalLink = {
  href: string;
  path?: never;
  onClick?: never;
  items?: never;
};
type HeaderInternalLink = {
  href?: never;
  path:
    | string
    | { pathname?: string; search?: string; hash?: string; state?: unknown };
  onClick?: never;
  items?: never;
};
type HeaderButton = {
  href?: never;
  path?: never;
  onClick: () => void;
  items?: never;
};
type HeaderPossibleItem = {
  label: ReactNode;
} & (HeaderExternalLink | HeaderInternalLink | HeaderButton);

type HeaderDropdown = {
  label: ReactNode;
  href?: never;
  path?: never;
  onClick?: never;
  items: HeaderPossibleItem[];
};

type HeaderItemProps = {
  item: HeaderPossibleItem;
};
const HeaderItem: FC<HeaderItemProps> = ({ item }) => {
  let extraProps = {};
  let element: typeof Link | 'a' | 'button' = Link;
  if (item.path) {
    extraProps = { to: item.path };
  } else if (item.href) {
    extraProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: item.href,
    };
    element = 'a';
  } else if (item.onClick) {
    extraProps = { onClick: item.onClick };
    element = 'button';
  }
  return (
    <Button variant="tertiary" element={element} {...extraProps}>
      {item.label}
    </Button>
  );
};

const HeaderListItem: FC<{
  item: HeaderPossibleItem | HeaderDropdown;
  isNegative: boolean;
}> = ({ item, isNegative }) => (
  <li>
    {item.items ? (
      <DropdownButton
        label={item.label}
        className={cn({
          'dropdown-container__trigger--negative': isNegative,
        })}
        openOnHover
      >
        <ul>
          {item.items.map((subItem, index) => (
            <li key={typeof subItem.label === 'string' ? subItem.label : index}>
              <HeaderItem item={subItem} />
            </li>
          ))}
        </ul>
      </DropdownButton>
    ) : (
      <HeaderItem item={item as HeaderPossibleItem} />
    )}
  </li>
);

type HeaderProps = {
  /**
   * Logo to display where the link to the home page will be
   */
  logo?: ReactNode;
  /**
   * List of items to render in the header
   */
  items: Array<HeaderPossibleItem | HeaderDropdown>;
  /**
   * Search component
   */
  search?: ReactNode;
  /**
   * Secondary items
   */
  secondaryItems?: Array<HeaderPossibleItem | HeaderDropdown>;
  /**
   * Subtext
   */
  subtext?: ReactNode;
  /**
   * Flag representing if the header should be in a "negative" style
   */
  isNegative?: boolean;
};
const Header: FC<HeaderProps> = ({
  logo,
  items,
  search,
  secondaryItems,
  subtext,
  isNegative = false,
}) => (
  <div className={cn('header', { 'header--negative': isNegative })}>
    <div className="header__logo">
      <Link to="/">{logo}</Link>
    </div>
    <ul className="header__navigation">
      {items.map((item, index) => (
        <HeaderListItem
          item={item}
          key={typeof item.label === 'string' ? item.label : index}
          isNegative={isNegative}
        />
      ))}
    </ul>
    <div className="header__search">{search}</div>
    {(secondaryItems || subtext) && (
      <div className="header__secondary">
        {secondaryItems && (
          <ul className="header__navigation">
            {secondaryItems.map((item, index) => (
              <HeaderListItem
                item={item}
                key={
                  typeof item.label === 'string'
                    ? item.label
                    : `secondary_${index}`
                }
                isNegative={isNegative}
              />
            ))}
          </ul>
        )}
        {subtext && <small>{subtext}</small>}
      </div>
    )}
  </div>
);

export default Header;
