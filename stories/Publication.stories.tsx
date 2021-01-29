import { Publication } from '../src/components';

import publicationData from '../src/components/__mocks__/publications';

export default {
  title: 'Biocomponents/Publication',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

const linkBuilder = (author: string) => `/citations/?query=author:"${author}"`;

export const publication = () => {
  const {
    title,
    authors,
    abstract,
    infoData,
    journalInfo,
    pubmedId,
    statistics,
  } = publicationData;
  return (
    <Publication
      title={title}
      authors={authors}
      abstract={abstract}
      infoData={infoData}
      journalInfo={journalInfo}
      pubmedId={pubmedId}
      statistics={statistics}
      linkBuilder={linkBuilder}
    />
  );
};

export const publicationWithoutManyAuthors = () => {
  const {
    title,
    authors,
    abstract,
    infoData,
    journalInfo,
    pubmedId,
    statistics,
  } = publicationData;
  return (
    <Publication
      title={title}
      authors={authors.slice(0, 2)}
      abstract={abstract}
      infoData={infoData}
      journalInfo={journalInfo}
      pubmedId={pubmedId}
      statistics={statistics}
      linkBuilder={linkBuilder}
    />
  );
};

export const publicationFull = () => {
  const {
    title,
    authors,
    abstract,
    infoData,
    journalInfo,
    pubmedId,
    statistics,
  } = publicationData;
  return (
    <Publication
      title={title}
      authors={authors}
      abstract={abstract}
      infoData={infoData}
      journalInfo={journalInfo}
      pubmedId={pubmedId}
      statistics={statistics}
      linkBuilder={linkBuilder}
      displayAll
    />
  );
};
