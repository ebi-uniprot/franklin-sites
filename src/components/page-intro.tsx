import { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { formatLargeNumber } from '../utils';

import ChevronDown from '../svg/chevron-down.svg';
import ChevronUp from '../svg/chevron-up.svg';

import '../styles/components/page-intro.scss';

const chevronSize = 20;

type PageIntroProps = {
  /**
   * The title, works as a trigger to open/close
   */
  title: ReactNode;
  titlePostscript?: ReactNode;
  /**
   * Number of results
   */
  resultsCount?: number;
  /**
   * Content revealed on toggle
   */
  children?: ReactNode;
  /**
   * Links revealed on toggle
   */
  links?: { title: string; destination: string }[];
  /**
   * To show the content by default or not
   */
  showContent?: boolean;
};

const PageIntro: FC<PageIntroProps> = ({
  title,
  resultsCount = 0,
  children,
  links,
  showContent = false,
  titlePostscript,
}) => {
  const [displayContent, setDisplayContent] = useState(showContent);
  return (
    <div className="page-intro">
      <h2>
        <button
          type="button"
          onClick={() => setDisplayContent(!displayContent)}
          className="dropdown"
        >
          {displayContent ? (
            <ChevronUp width={chevronSize} height={chevronSize} />
          ) : (
            <ChevronDown width={chevronSize} height={chevronSize} />
          )}{' '}
          {title}
        </button>
        {resultsCount > 0 && (
          <small> {formatLargeNumber(resultsCount)} results </small>
        )}
        {titlePostscript}
      </h2>

      <div
        className={cn('intro-content', {
          'intro-content--display-content': displayContent,
        })}
      >
        {children}
        <div className="intro-links">
          {links?.map((link) => (
            <Link to={link.destination} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageIntro;
