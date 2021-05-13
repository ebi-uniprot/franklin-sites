import { createElement, FC, ReactNode } from 'react';
import cn from 'classnames';

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

const PageIntro: FC<PageIntroProps> = ({
  title,
  resultsCount = 0,
  titlePostscript,
  headingLevel = 'h1',
  titleClassName,
}) => (
  <div className="page-intro">
    {createElement(
      headingLevel,
      { className: cn('big', titleClassName) },
      <>
        {title}
        {resultsCount > 0 && (
          <small> {formatLargeNumber(resultsCount)} results </small>
        )}
        {titlePostscript}
      </>
    )}
  </div>
);

export default PageIntro;
