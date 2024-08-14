import { createElement, FC, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Except } from 'type-fest';

import { formatLargeNumber } from '../utils';

import { HeadingLevels } from '../types/common';

import '../styles/components/page-intro.scss';

type PageIntroProps = {
  /**
   * The title
   */
  title: ReactNode;
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

const PageIntro: FC<
  PageIntroProps & Except<HTMLAttributes<HTMLDivElement>, 'title'>
> = ({
  title,
  resultsCount,
  headingPostscript,
  headingLevel = 'h1',
  headingClassName,
  children,
  className,
  ...props
}) => (
  <div className={cn(className, 'page-intro')} {...props}>
    {createElement(
      headingLevel,
      { className: cn(headingClassName) },
      <>
        {title}
        {resultsCount !== undefined && (
          <small>
            {' '}
            {formatLargeNumber(resultsCount)} result
            {resultsCount === 1 ? '' : 's'}{' '}
          </small>
        )}
        {headingPostscript}
      </>
    )}
    {children}
  </div>
);

export default PageIntro;
