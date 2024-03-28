import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import MainSearchComponent, {
  MainSearchProps,
} from '../src/components/main-search';

const namespaces = {
  uniprotkb: 'UniProtKB',
  uniref: 'UniRef',
  uniparc: 'UniParc',
  proteomes: 'Proteomes',
  publications: 'Publications',
  keywords: 'Keywords',
  toolResults: 'Tool results',
};

// Custom decorator
export default {
  title: 'Forms/Main Search',
  parameters: {
    purposeFunction: {
      purpose: 'Allow selection of item from flat data set',
      function: 'Search through an array to make a selection',
    },
  },
};

export const MainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [namespace, setNamespace] = useState('uniprotkb');

  const props: Partial<MainSearchProps> = {};
  if (boolean('with namespace', false)) {
    props.namespaces = namespaces;
    props.selectedNamespace = namespace;
    props.onNamespaceChange = (value) => setNamespace(value);
  }
  if (boolean('with secondary buttons', false)) {
    props.secondaryButtons = [
      { label: 'Advanced', action: action('Advanced') },
      { label: 'List', action: action('List') },
    ];
  }
  return (
    <MainSearchComponent
      searchTerm={searchTerm}
      onTextChange={(value) => setSearchTerm(value)}
      onSubmit={action('Submitted')}
      {...props}
    />
  );
};
