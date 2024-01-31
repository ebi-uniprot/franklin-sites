/* eslint-disable jsx-a11y/control-has-associated-label */
import { SyntheticEvent, useState } from 'react';
// Part of '@storybook/addon-essentials'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import {
  BasketIcon,
  Button,
  EnvelopeIcon,
  Header as HeaderComponent,
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
    <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
      <HelpIcon width="1.8ch" />
    </a>
    <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
      <EnvelopeIcon width="2ch" />
    </a>
    <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
      <BasketIcon width="2ch" />
    </a>
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

export const Header = () => (
  <HeaderComponent
    homepageLink={
      <a href="https://www.uniprot.org">
        <UniProtLogo width={30} />
      </a>
    }
    search={boolean('With Search', true) && <Search />}
    secondaryItems={
      boolean('Secondary items', true) ? headerSecondaryItems : undefined
    }
    subtext={boolean('Subtext', true) && 'Release info | Statistics'}
    isNegative={boolean('Negative', true)}
  >
    <a target="_blank" href="https://www.uniprot.org/" rel="noreferrer">
      Link 1
    </a>
    <Dropdown visibleElement={<Button variant="tertiary">Links 2</Button>}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
          sublink 1
        </a>
        <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
          sublink 2
        </a>
        <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
          sublink 3
        </a>
        <ExternalLink url="//www.uniprot.org">external link</ExternalLink>
        <Button variant="tertiary" onClick={action('onClick')}>
          action
        </Button>
      </div>
    </Dropdown>
    <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
      Link 3
    </a>
    <Button variant="tertiary" onClick={action('onClick')}>
      action
    </Button>
  </HeaderComponent>
);
