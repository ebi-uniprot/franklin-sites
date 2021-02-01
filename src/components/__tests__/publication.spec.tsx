import { screen, fireEvent } from '@testing-library/react';

import Publication from '../publication';

import publicationData from '../__mocks__/publications';

import renderWithRouter from '../../testHelpers/renderWithRouter';

let rendered: ReturnType<typeof renderWithRouter>;

describe('Publication component', () => {
  beforeEach(async () => {
    const {
      title,
      authors,
      abstract,
      infoData,
      journalInfo,
      pubmedId,
      statistics,
    } = publicationData;

    rendered = renderWithRouter(
      <Publication
        title={title}
        authors={authors}
        abstract={abstract}
        infoData={infoData}
        journalInfo={journalInfo}
        pubmedId={pubmedId}
        statistics={statistics}
        linkBuilder={(author) => `/citations/?query=author:"${author}"`}
      />
    );
  });

  test('should render', () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should expand authors', async () => {
    expect(screen.queryByText('Darwin K.')).toBeNull();
    fireEvent.click(screen.getByText('[...]'));
    const author = await screen.findByText('Darwin K.');
    expect(author).toBeTruthy();
  });

  test('should expand abstract', async () => {
    expect(screen.queryByText(/Captain Fitzroy/)).toBeNull();
    fireEvent.click(screen.getByText('View abstract [...]'));
    const abstract = await screen.findByText(/Captain Fitzroy/);
    expect(abstract).toBeTruthy();
  });
});
