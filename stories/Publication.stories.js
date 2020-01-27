import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Publication } from '../src/components';
import publicationData from '../src/components/__mocks__/publications';

export default {
  title: 'Biocomponents|Publication',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

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
    <Router>
      <Publication
        title={title}
        authors={authors}
        abstract={abstract}
        infoData={infoData}
        journalInfo={journalInfo}
        pubmedId={pubmedId}
        statistics={statistics}
      />
    </Router>
  );
};
