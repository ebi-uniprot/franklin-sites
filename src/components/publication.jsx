import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import InfoList from './info-list';
import Bubble from './bubble';
import '../styles/components/publication.scss';

const Authors = ({ authors, limit }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="publication__authors">
      {authors
        .filter((author, i) => open || authors.length <= limit || i < limit - 1)
        .map(author => (
          <Link to="/" key={author}>
            {author}
          </Link>
        ))
        .reduce((prev, curr) => [prev, ', ', curr])}
      {!open && authors.length > limit && (
        <Fragment>
          <button
            className="button tertiary"
            type="button"
            onClick={() => setOpen(true)}
          >
            [...]
          </button>
          {', '}
          <Link to="/" key={authors[authors.length - 1]}>
            {authors[authors.length - 1]}
          </Link>
        </Fragment>
      )}
    </section>
  );
};

const Abstract = ({ abstract }) => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      {open ? (
        <p>{abstract}</p>
      ) : (
        <button
          className="button tertiary"
          type="button"
          onClick={() => setOpen(true)}
        >
          Show abstract
        </button>
      )}
    </section>
  );
};

const JournalInfo = ({ journalInfo }) => {
  const {
    journal,
    volume,
    firstPage,
    lastPage,
    publicationDate,
    doiId,
  } = journalInfo;
  return (
    <a href={`//dx.doi.org/${doiId}`}>
      {`${journal} ${volume}:${firstPage}-${lastPage}(${publicationDate})`}
    </a>
  );
};

const Statistics = ({ statistics }) => {
  return (
    <section className="publication__statistics">
      <div>Cited in other entries:</div>
      <Bubble colourClass="colour-sea-blue" size="medium" value={statistics} />
    </section>
  );
};

const Publication = ({
  title,
  authors,
  abstract,
  journalInfo,
  infoData,
  pubmedId,
  statistics,
}) => (
  <section className="publication">
    <h4>{title}</h4>
    {authors && <Authors authors={authors} />}
    <section className="publication__columns">
      <section className="publication__columns__main">
        {abstract && <Abstract abstract={abstract} />}
        {infoData && <InfoList infoData={infoData} />}
      </section>
      <section className="publication__columns__side">
        <ul className="no-bullet">
          {journalInfo && (
            <li>
              <JournalInfo journalInfo={journalInfo} />
            </li>
          )}
          {pubmedId && (
            <Fragment>
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
            </Fragment>
          )}
          {statistics > 0 && (
            <li>
              <Statistics statistics={statistics} />
            </li>
          )}
        </ul>
      </section>
    </section>
  </section>
);

Authors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  limit: PropTypes.number,
};

Authors.defaultProps = {
  limit: 10,
};

Abstract.propTypes = {
  abstract: PropTypes.string.isRequired,
};

JournalInfo.propTypes = {
  journalInfo: PropTypes.shape({
    publicationDate: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    firstPage: PropTypes.string.isRequired,
    lastPage: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    doiId: PropTypes.string.isRequired,
  }).isRequired,
};

Statistics.propTypes = {
  statistics: PropTypes.number.isRequired,
};

Publication.propTypes = {
  /**
   * The publication title.
   */
  title: PropTypes.string.isRequired,
  /**
   * The lise of authors. Will be cut off and can be expanded.
   */
  authors: PropTypes.arrayOf(PropTypes.string),
  /**
   * The publication abstract (collapsed by default).
   */
  abstract: PropTypes.string,
  /**
   * The content of an Info List component.
   */
  infoData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  /**
   * Information about the journal in which this was published.
   */
  journalInfo: JournalInfo.propTypes.journalInfo,
  /**
   * The PubMed identifier
   */
  pubmedId: PropTypes.number,
  /**
   * Number of other entries this publication is cited in
   */
  statistics: PropTypes.number,
};

Publication.defaultProps = {
  authors: [],
  abstract: null,
  infoData: null,
  journalInfo: null,
  pubmedId: null,
  statistics: 0,
};

export default Publication;
