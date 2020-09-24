import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../src/components/header';
import { MainSearch } from '../src/components/index';
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

const links = [
  { label: 'Link 1', path: '/' },
  {
    label: 'Links 2',
    links: [
      { label: 'sublink 1', path: '/' },
      { label: 'sublink 2', path: '/' },
      { label: 'sublink 3', path: '/' },
      { label: 'external link', href: '//www.uniprot.org' },
    ],
  },
  { label: 'Link 3', path: '/' },
];

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <MainSearch
      onChange={setValue}
      searchTerm={value}
      onSubmit={() => {
        action('Submitted');
      }}
    />
  );
};

export const header = () => (
  <Header logo={<UniProtLogo width={30} />} links={links} search={<Search />} />
);

export const headerNegative = () => (
  <Header
    logo={<UniProtLogo width={30} />}
    links={links}
    search={<Search />}
    isNegative
  />
);
