import Card from '../card';

import renderWithBrowserRouter from '../../testHelpers/renderWithBrowserRouter';

describe('Card component', () => {
  it('should render', () => {
    const { asFragment } = renderWithBrowserRouter(
      <Card header={<h2>Title</h2>}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render card with links', () => {
    const links = [
      {
        name: 'link',
        link: 'example.com',
        color: 'red',
      },
    ];

    const { asFragment } = renderWithBrowserRouter(
      <Card header={<h2>Title</h2>} links={links}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
