import { createElement, HTMLAttributes } from 'react';
import cn from 'classnames';

import { HeadingLevels } from '../types/common';

import '../styles/components/hero-container.scss';

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

export const HeroContainer = ({
  title,
  headingLevel = 'h2',
  children,
  className,
  titleClassName,
  noSidePadding = false,
}: HeroContainerProps) => (
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
        { className: cn(titleClassName, 'hero-container__title', 'big') },
        title
      )}
    {children}
  </section>
);

export default HeroContainer;
