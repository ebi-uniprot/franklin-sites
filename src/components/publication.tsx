import { useState, FC, ReactNode, Fragment } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import InfoList from './info-list';
import Bubble from './bubble';
import Button from './button';

import PublicationIcon from '../svg/publication.svg';
import ComputerMappedIcon from '../svg/computer-mapped.svg';
import CitedIcon from '../svg/cited.svg';

import '../styles/components/publication.scss';

type AuthorProps = {
  authors: string[];
  limit?: number;
  linkBuilder: (author: string) => LinkProps['to'];
};

const Authors: FC<AuthorProps> = ({ authors, limit = 10, linkBuilder }) => {
  const tooMany = authors.length > limit;

  const [collapsed, setCollapsed] = useState(tooMany);

  const lastAuthor = authors[authors.length - 1];
  const displayedAuthors = collapsed ? authors.slice(0, limit - 1) : authors;

  return (
    <section className="publication__authors">
      {displayedAuthors.map((author, index) => (
        <Fragment key={author}>
          {index !== 0 && ', '}
          <Link to={linkBuilder(author)}>{author}</Link>
        </Fragment>
      ))}
      {collapsed ? (
        <>
          <Button variant="tertiary" onClick={() => setCollapsed(false)}>
            [...]
          </Button>
          {', '}
          <Link to={linkBuilder(lastAuthor)}>{lastAuthor}</Link>
        </>
      ) : null}
    </section>
  );
};

type AbstractProps = {
  abstract: string;
  open?: boolean;
};

const Abstract: FC<AbstractProps> = ({ abstract, open = false }) => {
  const [display, setDisplay] = useState(open);
  return (
    <section className="publication__abstract">
      {display ? (
        <p>{abstract}</p>
      ) : (
        <Button variant="tertiary" onClick={() => setDisplay(true)}>
          View abstract [...]
        </Button>
      )}
    </section>
  );
};

type JournalInfoProps = {
  journalInfo: {
    publicationDate?: string;
    journal?: string;
    firstPage?: string;
    lastPage?: string;
    volume?: string;
    doiId?: string;
  };
};

const JournalInfo: FC<JournalInfoProps> = ({
  journalInfo: { publicationDate, journal, firstPage, lastPage, volume, doiId },
}) => {
  if (!doiId) {
    return null;
  }

  const name = journal || doiId;
  let page = null;
  if (firstPage) {
    page = firstPage;
    if (lastPage) {
      page += `-${lastPage}`;
    }
  }

  let date;
  if (publicationDate) {
    date = (
      <>
        (
        <time dateTime={new Date(publicationDate).toISOString()}>
          {publicationDate}
        </time>
        )
      </>
    );
  }

  return (
    <a href={`//dx.doi.org/${doiId}`} target="_blank" rel="noopener noreferrer">
      {name} {volume}
      {volume && page && ':'}
      {page}
      {date}
    </a>
  );
};

type StatisticsProps = {
  statistics: {
    reviewedProteinCount?: number;
    unreviewedProteinCount?: number;
    mappedProteinCount?: number;
  };
};

const Statistics: FC<StatisticsProps> = ({ statistics }) => {
  const {
    reviewedProteinCount = 0,
    unreviewedProteinCount = 0,
    mappedProteinCount = 0,
  } = statistics;
  const citedCount = reviewedProteinCount + unreviewedProteinCount;

  return (
    <section className="publication__statistics">
      {mappedProteinCount > 0 && (
        <section className="publication__statistics__item">
          <Link to="/">
            <section>
              <small>Mapped to</small>
            </section>
            <section className="publication__statistics__bubble">
              <Bubble
                colourClass="colour-pastel-blue"
                size="small"
                value={mappedProteinCount}
              />
              <ComputerMappedIcon width={15} height={15} />
            </section>
          </Link>
        </section>
      )}
      {citedCount > 0 && (
        <section className="publication__statistics__item">
          <Link to="/">
            <section>
              <small>Cited in</small>
            </section>
            <section className="publication__statistics__bubble">
              <Bubble
                colourClass="colour-pastel-blue"
                size="small"
                value={citedCount}
              />
              <CitedIcon width={15} height={15} />
            </section>
          </Link>
        </section>
      )}
    </section>
  );
};

type PublicationProps = {
  /**
   * The publication title.
   */
  title?: string;
  /**
   * The lise of authors. Will be cut off and can be expanded.
   */
  authors?: string[];
  /**
   * The publication abstract (collapsed by default).
   */
  abstract?: string;
  /**
   * The content of an Info List component.
   */
  infoData: Array<{ title: string; content: ReactNode }>;
  /**
   * Information about the journal in which this was published.
   */
  journalInfo?: JournalInfoProps['journalInfo'];
  /**
   * The PubMed identifier
   */
  pubmedId?: number | string;
  /**
   * Number of other entries this publication is cited in
   */
  statistics?: StatisticsProps['statistics'];
  /**
   * Display all authors and abstract by default (useful for publication entry)
   */
  displayAll?: boolean;
  /**
   * Function generating a valid link for a given author
   */
  linkBuilder: AuthorProps['linkBuilder'];
};

const Publication: FC<PublicationProps> = ({
  title,
  authors,
  abstract,
  journalInfo,
  infoData,
  pubmedId,
  statistics,
  displayAll,
  linkBuilder,
}) => (
  <section className="publication">
    <section className="publication__columns">
      <section className="publication__columns__main">
        <h5>{title}</h5>
        {authors?.length && (
          <Authors
            authors={authors}
            limit={displayAll ? +Infinity : 10}
            linkBuilder={linkBuilder}
          />
        )}
        {abstract && <Abstract abstract={abstract} open={displayAll} />}
        {infoData && <InfoList infoData={infoData} isCompact />}
      </section>
      <section className="publication__columns__side">
        <section className="publication__columns__side__item">
          {pubmedId && <PublicationIcon width="1.875em" height="2em" />}
          <ul className="no-bullet">
            {pubmedId && (
              <>
                <li>
                  <a
                    href={`//www.ncbi.nlm.nih.gov/pubmed/${pubmedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubMed
                  </a>
                </li>
                <li>
                  <a
                    href={`//europepmc.org/article/MED/${pubmedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Europe PMC
                  </a>
                </li>
              </>
            )}
            {journalInfo && (
              <li>
                <small>
                  <JournalInfo journalInfo={journalInfo} />
                </small>
              </li>
            )}
          </ul>
        </section>
        <section className="publication__columns__side__item">
          {statistics && <Statistics statistics={statistics} />}
        </section>
      </section>
    </section>
  </section>
);

export default Publication;
