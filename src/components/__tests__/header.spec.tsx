import { BasketIcon, EnvelopeIcon, HelpIcon, MainSearch } from '..';
import renderWithRouter from '../../testHelpers/renderWithRouter';

import Header from '../header';

describe('Header component', () => {
  test('should render', () => {
    const { asFragment } = renderWithRouter(
      <Header
        items={[
          { path: '/here', label: <strong>here</strong> },
          { path: '/there', label: 'there' },
          { href: 'www.ebi.ac.uk', label: 'EBI' },
          { onClick: jest.fn(), label: 'action' },
          {
            items: [
              { path: '/sub-link-a', label: 'sub link A' },
              { path: '/sub-link-b', label: <span>sub link b</span> },
            ],
            label: 'sub links',
          },
        ]}
        secondaryItems={[
          { label: <HelpIcon />, path: '/' },
          { label: <EnvelopeIcon />, path: '/' },
          { label: <BasketIcon />, path: '/' },
        ]}
        search={<MainSearch onChange={jest.fn()} onSubmit={jest.fn()} />}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
