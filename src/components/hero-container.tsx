import { createElement, FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import { HeadingLevels } from '../types/common';

import '../styles/components/hero-container.scss';

type HeroContainerProps = HTMLAttributes<HTMLElement> & {
  /**
   * The title of the component
   */
  headingContent?: ReactNode;
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

export const HeroContainer: FC<HeroContainerProps> &
  HTMLAttributes<HTMLElement> = ({
  headingContent,
  headingLevel = 'h2',
  children,
  className,
  titleClassName,
  noSidePadding = false,
  ...props
}) => (
  <section
    className={cn(
      'hero-container',
      className,
      !noSidePadding && 'hero-container--side-padding'
    )}
    {...props}
  >
    {headingContent &&
      createElement(
        headingLevel,
        { className: cn(titleClassName, 'hero-container__title', 'big') },
        headingContent
      )}
    {children}
  </section>
);

export default HeroContainer;
