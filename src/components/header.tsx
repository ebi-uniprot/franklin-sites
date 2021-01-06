import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import DropdownButton from './dropdown-button';
import Button from './button';

import '../styles/components/header.scss';

type HeaderExternalLink = {
  label: ReactNode;
  href: string;
  path?: never;
  onClick?: never;
  items?: never;
};
type HeaderInternalLink = {
  label: ReactNode;
  href?: never;
  path:
    | string
    | { pathname?: string; search?: string; hash?: string; state?: unknown };
  onClick?: never;
  items?: never;
};
type HeaderButton = {
  label: ReactNode;
  href?: never;
  path?: never;
  onClick: () => void;
  items?: never;
};
type HeaderItem = HeaderExternalLink | HeaderInternalLink | HeaderButton;
type HeaderDropdown = {
  label: ReactNode;
  href?: never;
  path?: never;
  onClick?: never;
  items: HeaderItem[];
};

type HeaderItemProps = {
  item: HeaderItem;
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

type HeaderProps = {
  logo?: ReactNode;
  items: Array<HeaderItem | HeaderDropdown>;
  search?: ReactNode;
  isNegative?: boolean;
};
const Header: FC<HeaderProps> = ({ logo, items, search, isNegative }) => (
  <div className={cn('header', { 'header--negative': isNegative })}>
    <div className="header__logo">
      <Link to="/">{logo}</Link>
    </div>
    <ul className="header__navigation">
      {items.map((item, index) => (
        <li key={typeof item.label === 'string' ? item.label : index}>
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
                  <li
                    key={
                      typeof subItem.label === 'string' ? subItem.label : index
                    }
                  >
                    <HeaderItem item={subItem} />
                  </li>
                ))}
              </ul>
            </DropdownButton>
          ) : (
            <HeaderItem item={item} />
          )}
        </li>
      ))}
    </ul>
    <div className="header__search">{search}</div>
  </div>
);

export default Header;
