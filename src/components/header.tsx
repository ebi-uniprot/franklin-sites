import { type ReactNode, type HTMLAttributes, type FC } from 'react';
import cn from 'classnames';

import '../styles/components/header.scss';

type HeaderProps = {
  /**
   * Component to display where the link to the home page will be
   */
  homepageLink?: ReactNode;
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

const Header: FC<HeaderProps & HTMLAttributes<HTMLDivElement>> = ({
  search,
  secondaryItems,
  subtext,
  isNegative = false,
  className,
  homepageLink,
  children,
  ...props
}) => (
  <div
    className={cn(className, 'header', { 'header--negative': isNegative })}
    {...props}
  >
    <div className="header__link">{homepageLink}</div>
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
