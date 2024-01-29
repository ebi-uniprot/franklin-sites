import { Link } from 'react-router-dom';
import {
  BasketIcon,
  Button,
  EnvelopeIcon,
  ExternalLink,
  HelpIcon,
  MainSearch,
  Dropdown,
} from '..';

import renderWithBrowserRouter from '../../testHelpers/renderWithBrowserRouter';

import Header from '../header';

describe('Header component', () => {
  it('should render', () => {
    const { asFragment } = renderWithBrowserRouter(
      <Header
        secondaryItems={
          <>
            <Link to="/">
              <HelpIcon />
            </Link>
            <Link to="/">
              <EnvelopeIcon />
            </Link>
            <Link to="/">
              <BasketIcon />
            </Link>
          </>
        }
        search={<MainSearch onTextChange={jest.fn()} onSubmit={jest.fn()} />}
      >
        <Link to="/here">here</Link>
        <Link to="/there">there</Link>
        <ExternalLink url="www.ebi.ac.uk">EBI</ExternalLink>
        <Button onClick={jest.fn()}>Action</Button>
        <Dropdown
          visibleElement={<Button variant="tertiary">sub links</Button>}
        >
          <Link to="/sub-link-a">sub link A</Link>
          <Link to="/sub-link-b">
            <span>sub link B</span>
          </Link>
        </Dropdown>
      </Header>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
