import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Header, MainSearch } from '../src/components';

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

const items = [
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
  <Header logo={<UniProtLogo width={30} />} items={items} search={<Search />} />
);

export const headerNegative = () => (
  <Header
    logo={<UniProtLogo width={30} />}
    items={items}
    search={<Search />}
    isNegative
  />
);
