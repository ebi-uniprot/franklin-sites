import Header from '../header';
import renderWithRouter from '../../testHelpers/renderWithRouter';
import expectToThrowNoConsole from '../../testHelpers/expectToThrowNoConsole';

describe('Header component', () => {
  test('should render', () => {
    const { asFragment } = renderWithRouter(
      <Header
        items={[
          { path: '/here', label: <strong>here</strong> },
          { path: '/there', label: 'there' },
          { href: 'www.ebi.ac.uk', label: 'EBI' },
          { onClick: () => {}, label: 'action' },
          {
            items: [
              { path: '/sub-link-a', label: 'sub link A' },
              { path: '/sub-link-b', label: <span>sub link b</span> },
            ],
            label: 'sub links',
          },
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
