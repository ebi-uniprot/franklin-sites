import { ReactNode, HTMLAttributes, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Dropdown } from './dropdown-button';
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

const HeaderItem = ({ item }: HeaderItemProps) => {
  let extraProps = {};
  let element: typeof Link | 'a' | 'button' = Link;
  if (item.path) {
    extraProps = { to: item.path };
  } else if (item.href) {
    extraProps = {
      target: '_blank',
      rel: 'noopener',
      referrerPolicy: 'no-referrer-when-downgrade',
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

type HeaderListItemProps = {
  item: HeaderPossibleItem | HeaderDropdown;
  isNegative: boolean;
};

const HeaderListItem = ({ item, isNegative }: HeaderListItemProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <li>
      {item.items ? (
        <Dropdown
          visibleElement={
            <Button
              variant="tertiary"
              onClick={() => setExpanded((expanded) => !expanded)}
            >
              {item.label}
            </Button>
          }
          className={cn({
            'dropdown-container__trigger--negative': isNegative,
          })}
          expanded={expanded}
          onFocus={() => setExpanded(true)}
          onBlur={(event) => {
            if (
              !event.relatedTarget ||
              !event.currentTarget.contains(event.relatedTarget as Node)
            ) {
              setExpanded(false);
            }
          }}
          onPointerEnter={() => setExpanded(true)}
          onPointerLeave={() => setExpanded(false)}
        >
          <ul>
            {item.items.map((subItem, index) => (
              <li
                key={typeof subItem.label === 'string' ? subItem.label : index}
              >
                <HeaderItem item={subItem} />
              </li>
            ))}
          </ul>
        </Dropdown>
      ) : (
        <HeaderItem item={item} />
      )}
    </li>
  );
};

type HeaderProps = {
  /**
   * Logo to display where the link to the home page will be
   */
  logo?: ReactNode;
  /**
   * List of items to render in the header
   */
  items: ReactNode;
  /**
   * Search component
   */
  search?: ReactNode;
  /**
   * Secondary items
   */
  secondaryItems?: ReactNode;
  /**
   * Subtext
   */
  subtext?: ReactNode;
  /**
   * Flag representing if the header should be in a "negative" style
   */
  isNegative?: boolean;
};

const Header = ({
  logo,
  items,
  search,
  secondaryItems,
  subtext,
  isNegative = false,
  className,
  ...props
}: HeaderProps & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(className, 'header', { 'header--negative': isNegative })}
    {...props}
  >
    <div className="header__logo">
      <Link to="/">{logo}</Link>
    </div>
    <div className="header__navigation">{items}</div>
    <div className="header__search">{search}</div>
    {(secondaryItems || subtext) && (
      <div className="header__secondary">
        {secondaryItems && (
          <div className="header__navigation">{secondaryItems}</div>
        )}
        {subtext && <small>{subtext}</small>}
      </div>
    )}
  </div>
);

export default Header;
