import { type FC, type ReactNode, type HTMLAttributes } from 'react';
import cn from 'classnames';

import { formatLargeNumber } from '../utils';

import type { HeadingLevels } from '../types/common';

import '../styles/components/page-intro.scss';

type PageIntroProps = {
  /**
   * The title
   */
  heading: ReactNode;
  /**
   * The heading level
   */
  headingLevel?: HeadingLevels;
  /**
   * CSS classes to pass to the component heading
   */
  headingClassName?: string;
  /**
   * Optional heading postscript to follow resultsCount
   */
  headingPostscript?: ReactNode;
  /**
   * Number of results
   */
  resultsCount?: number;
};

const PageIntro: FC<PageIntroProps & HTMLAttributes<HTMLDivElement>> = ({
  heading,
  resultsCount,
  headingPostscript,
  headingLevel: HeadingLevel = 'h1',
  headingClassName,
  children,
  className,
  ...props
}) => (
  <div className={cn(className, 'page-intro')} {...props}>
    <HeadingLevel className={cn(headingClassName)}>
      {heading}
      {resultsCount !== undefined && (
        /* Not sure why fragments and keys are needed, but otherwise gets the
        React key warnings messages and children are rendered as array... */
        <small key="count">
          {' '}
          {formatLargeNumber(resultsCount)} result
          {resultsCount === 1 ? '' : 's'}{' '}
        </small>
      )}
      {headingPostscript}
    </HeadingLevel>
    {children}
  </div>
);

export default PageIntro;
