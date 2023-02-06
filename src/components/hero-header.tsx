import { ReactNode } from 'react';
import cn from 'classnames';

import '../styles/components/header.scss';

type HeroHeaderProps = {
  /**
   * The title of the hero header
   */
  title: ReactNode;
  /**
   * The content of the hero header
   */
  children: ReactNode;
  /**
   * An optional footer, displayed at the bottom
   */
  footer?: ReactNode;
  /**
   * An optional class name
   */
  className?: string;
};

export const HeroHeader = ({
  title = '',
  children,
  footer,
  className,
  ...props
}: HeroHeaderProps) => (
  <div className={cn('hero-header', className)} {...props}>
    <div className="hero-header__content">
      <h1 className="x-huge">{title}</h1>
      {children}
    </div>
    <div className="hero-header__footer">{footer}</div>
  </div>
);

export default HeroHeader;
