import { ReactNode, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import '../styles/components/header.scss';

type HeaderProps = {
  /**
   * Logo to display where the link to the home page will be
   */
  logo?: ReactNode;
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
  search,
  secondaryItems,
  subtext,
  isNegative = false,
  className,
  children,
  ...props
}: HeaderProps & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(className, 'header', { 'header--negative': isNegative })}
    {...props}
  >
    <div className="header__logo">
      <Link to="/">{logo}</Link>
    </div>
    <div className="header__navigation">{children}</div>
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
