import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Publication from '../publication';
import publicationData from '../__mocks__/publications';

let rendered;

describe('Publication component', () => {
  beforeEach(() => {
    const {
      title,
      authors,
      abstract,
      infoData,
      journalInfo,
      pubmedId,
      statistics,
    } = publicationData;

    rendered = render(
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
  });

  test('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should expand authors', async () => {
    const { queryByText, getByText } = rendered;
    expect(queryByText('Darwin K.')).toBeNull();
    fireEvent.click(getByText('[...]'));
    const author = await waitForElement(() => queryByText('Darwin K.'));
    expect(author).toBeTruthy();
  });

  test('should expand abstract', async () => {
    const { queryByText, getByText } = rendered;
    expect(queryByText(/Captain Fitzroy/)).toBeNull();
    fireEvent.click(getByText('Show abstract'));
    const abstract = await waitForElement(() => queryByText(/Captain Fitzroy/));
    expect(abstract).toBeTruthy();
  });
});

export default publicationData;
