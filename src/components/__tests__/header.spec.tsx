/* eslint-disable jsx-a11y/control-has-associated-label */
import { render } from '@testing-library/react';
import {
  BasketIcon,
  Button,
  EnvelopeIcon,
  ExternalLink,
  HelpIcon,
  MainSearch,
  Dropdown,
} from '..';

import Header from '../header';

describe('Header component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Header
        secondaryItems={
          <>
            <a href="/">
              <HelpIcon />
            </a>
            <a href="/">
              <EnvelopeIcon />
            </a>
            <a href="/">
              <BasketIcon />
            </a>
          </>
        }
        search={<MainSearch onTextChange={jest.fn()} onSubmit={jest.fn()} />}
      >
        <a href="/here">here</a>
        <a href="/there">there</a>
        <ExternalLink url="www.ebi.ac.uk">EBI</ExternalLink>
        <Button onClick={jest.fn()}>Action</Button>
        <Dropdown
          visibleElement={<Button variant="tertiary">sub links</Button>}
        >
          <a href="/sub-link-a">sub link A</a>
          <a href="/sub-link-b">sub link B</a>
        </Dropdown>
      </Header>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
