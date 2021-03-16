import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import {
  BasketIcon,
  EnvelopeIcon,
  Header,
  HelpIcon,
  MainSearch,
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
};

const headerItems = [
  { label: 'Link 1', path: '/' },
  {
    label: 'Links 2',
    items: [
      { label: 'sublink 1', path: '/' },
      { label: 'sublink 2', path: '/' },
      { label: 'sublink 3', path: '/' },
      { label: 'external link', href: '//www.uniprot.org' },
      { label: 'action', onClick: action('onClick') },
    ],
  },
  { label: 'Link 3', path: '/' },
  { label: 'action', onClick: action('onClick') },
];

const headerSecondaryItems = [
  { label: <HelpIcon />, path: '/' },
  { label: <EnvelopeIcon />, path: '/' },
  { label: <BasketIcon />, path: '/' },
];

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <MainSearch
      onChange={setValue}
      searchTerm={value}
      onSubmit={(e: MouseEvent) => {
        e.preventDefault();
        action('onSubmit')(e);
      }}
    />
  );
};

export const header = () => (
  <Header logo={<UniProtLogo width={30} />} items={headerItems} />
);

export const headerWithSearch = () => (
  <Header
    logo={<UniProtLogo width={30} />}
    items={headerItems}
    search={<Search />}
    isNegative
  />
);

export const headerNegativeWithSecondaryNav = () => (
  <Header
    logo={<UniProtLogo width={30} />}
    items={headerItems}
    secondaryItems={headerSecondaryItems}
    isNegative
  />
);

export const headerNegativeWithSubtext = () => (
  <Header
    logo={<UniProtLogo width={30} />}
    items={headerItems}
    secondaryItems={headerSecondaryItems}
    subtext="Release info | Statistics"
    isNegative
  />
);
