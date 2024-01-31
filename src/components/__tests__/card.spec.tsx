import { render } from '@testing-library/react';
import Card from '../card';

describe('Card component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Card header={<h2>Title</h2>}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render card with links', () => {
    const links = [
      <a key="uniprot" href="https://www.uniprot.org">
        link
      </a>,
    ];

    const { asFragment } = render(
      <Card header={<h2>Title</h2>} links={links}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
