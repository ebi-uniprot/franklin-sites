import cn from 'classnames';
import { FC, ReactNode } from 'react';

import '../styles/components/hero-container.scss';

type HeroContainerProps = {
  /**
   * The title of the component
   */
  title?: string;
  /**
   * The content of the component
   */
  children: ReactNode;
  /**
   * CSS classes to pass to the component
   */
  className?: string;
  /**
   * CSS classes to pass to the component title
   */
  titleClassName?: string;
  /**
   * Remove left and right padding
   */
  noSidePadding?: boolean;
};

export const HeroContainer: FC<HeroContainerProps> = ({
  title,
  children,
  className,
  titleClassName,
  noSidePadding = false,
}) => (
  <div
    className={cn(
      'hero-container',
      className,
      !noSidePadding && 'hero-container--side-padding'
    )}
  >
    {title && <h3 className={titleClassName}>{title}</h3>}
    {children}
  </div>
);

export default HeroContainer;
