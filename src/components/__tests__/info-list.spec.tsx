import { render } from '@testing-library/react';

import InfoList from '../info-list';

describe('InfoList component', () => {
  const infoData = [
    {
      title: 'Item 1',
      content: <div>Some content</div>,
    },
    {
      title: 'Another item',
      content: <div>Some more content</div>,
    },
  ];
  it('should render', () => {
    const { asFragment } = render(<InfoList infoData={infoData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render nothing when empty list', () => {
    const { container } = render(<InfoList infoData={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render nothing when no content', () => {
    const { container } = render(
      <InfoList
        infoData={[
          { title: 'Item 1', content: null },
          { title: 'Item 2', content: undefined },
          { title: 'Item 3', content: '' },
        ]}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('should render compact', () => {
    const { asFragment } = render(<InfoList infoData={infoData} isCompact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without titles', () => {
    const { asFragment } = render(<InfoList infoData={infoData} noTitles />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with titles in 2 columns', () => {
    const { asFragment } = render(<InfoList infoData={infoData} columns />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not render items that are undefined', () => {
    const { asFragment } = render(
      <InfoList
        infoData={[
          { title: 'Item 1', content: 'content' },
          { title: 'Item 2', content: undefined },
        ]}
        columns
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render title that is a React Node', () => {
    const { asFragment } = render(
      <InfoList
        infoData={[
          { title: <div>Item 1</div>, content: <div>Some content</div> },
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
