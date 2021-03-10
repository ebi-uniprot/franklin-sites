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
      <InfoList infoData={[{ title: 'Item 1', content: undefined }]} columns />
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
