import { FC, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import { formatLargeNumber } from '../utils';

import { HeadingLevels } from '../types/common';

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
        <small>
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
