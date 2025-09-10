import { type FC, type HTMLAttributes, type ReactNode } from 'react';
import cn from 'classnames';

import type { HeadingLevels } from '../types/common';

import '../styles/components/hero-container.scss';

type HeroContainerProps = HTMLAttributes<HTMLElement> & {
  /**
   * The heading of the component
   */
  headingContent?: ReactNode;
  /**
   * The heading level
   */
  headingLevel?: HeadingLevels;
  /**
   * CSS classes to pass to the component heading
   */
  headingClassName?: string;
  /**
   * Remove left and right padding
   */
  noSidePadding?: boolean;
};

export const HeroContainer: FC<HeroContainerProps> &
  HTMLAttributes<HTMLElement> = ({
  headingContent,
  headingLevel: HeadingLevel = 'h2',
  headingClassName,
  children,
  className,
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
    {headingContent && (
      <HeadingLevel
        className={cn(headingClassName, 'hero-container__title', 'big')}
      >
        {headingContent}
      </HeadingLevel>
    )}
    {children}
  </section>
);

export default HeroContainer;
