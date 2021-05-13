import { FC, ReactNode } from 'react';

import { formatLargeNumber } from '../utils';

import '../styles/components/page-intro.scss';

type PageIntroProps = {
  /**
   * The title
   */
  title: ReactNode;
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
}) => (
  <div className="page-intro">
    <h2>
      {title}
      {resultsCount > 0 && (
        <small> {formatLargeNumber(resultsCount)} results </small>
      )}
      {titlePostscript}
    </h2>
  </div>
);

export default PageIntro;
