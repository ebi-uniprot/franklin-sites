import { createElement, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import '../styles/components/hero-container.scss';

type HeadingLevels = `h${1 | 2 | 3 | 4 | 5 | 6}`;

type HeroContainerProps = HTMLAttributes<HTMLElement> & {
  /**
   * The title of the component
   */
  title?: string;
  /**
   * The tile title heading level
   */
  headingLevel?: HeadingLevels;
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
  headingLevel = 'h2',
  children,
  className,
  titleClassName,
  noSidePadding = false,
}) => (
  <section
    className={cn(
      'hero-container',
      className,
      !noSidePadding && 'hero-container--side-padding'
    )}
  >
    {title &&
      createElement(
        headingLevel,
        { className: cn(titleClassName, 'medium') },
        title
      )}
    {children}
  </section>
);

export default HeroContainer;
