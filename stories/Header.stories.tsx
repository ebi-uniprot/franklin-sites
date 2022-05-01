import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import {
  BasketIcon,
  Button,
  EnvelopeIcon,
  Header,
  HelpIcon,
  MainSearch,
  Dropdown,
  ExternalLink,
} from '../src/components';

import UniProtLogo from '../src/svg/swissprot.svg';

export default {
  title: 'Layout/Header',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  decorators: [withKnobs],
};

const headerSecondaryItems = (
  <>
    <Link to="/">
      <HelpIcon width="1.8ch" />
    </Link>
    <Link to="/">
      <EnvelopeIcon width="2ch" />
    </Link>
    <Link to="/">
      <BasketIcon width="2ch" />
    </Link>
  </>
);

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <MainSearch
      onTextChange={setValue}
      searchTerm={value}
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();
        action('onSubmit')(e);
      }}
    />
  );
};

export const header = () => (
  <Header
    logo={<UniProtLogo width={30} />}
    search={boolean('With Search', true) && <Search />}
    secondaryItems={
      boolean('Secondary items', true) ? headerSecondaryItems : undefined
    }
    subtext={boolean('Subtext', true) && 'Release info | Statistics'}
    isNegative={boolean('Negative', true)}
  >
    <Link to="/">Link 1</Link>
    <Dropdown visibleElement={<Button variant="tertiary">Links 2</Button>}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">sublink 1</Link>
        <Link to="/">sublink 2</Link>
        <Link to="/">sublink 3</Link>
        <ExternalLink url="//www.uniprot.org">external link</ExternalLink>
        <Button variant="tertiary" onClick={action('onClick')}>
          action
        </Button>
      </div>
    </Dropdown>
    <Link to="/">Link 3</Link>
    <Button variant="tertiary" onClick={action('onClick')}>
      action
    </Button>
  </Header>
);
