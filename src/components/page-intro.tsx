import { createElement, ReactNode, HTMLAttributes } from 'react';
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
   * The tile title heading level
   */
  headingLevel?: HeadingLevels;
  /**
   * CSS classes to pass to the component title
   */
  titleClassName?: string;
  /**
   * Optional title postscript to follow resultsCount
   */
  titlePostscript?: ReactNode;
  /**
   * Number of results
   */
  resultsCount?: number;
};

const PageIntro = ({
  title,
  resultsCount,
  titlePostscript,
  headingLevel = 'h1',
  titleClassName,
  children,
  className,
  ...props
}: PageIntroProps & Except<HTMLAttributes<HTMLDivElement>, 'title'>) => (
  <div className={cn(className, 'page-intro')} {...props}>
    {createElement(
      headingLevel,
      { className: cn(titleClassName) },
      <>
        {title}
        {resultsCount !== undefined && (
          <small>
            {' '}
            {formatLargeNumber(resultsCount)} result
            {resultsCount === 1 ? '' : 's'}{' '}
          </small>
        )}
        {titlePostscript}
      </>
    )}
    {children}
  </div>
);

export default PageIntro;
