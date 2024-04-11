import { useState } from 'react';

import { action } from '@storybook/addon-actions';

import { Meta, StoryObj } from '@storybook/react';
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

type StoryProps = React.ComponentProps<typeof MainSearchComponent> & {
  withNamespace: boolean;
  withSecondaryButtons: boolean;
};

export const MainSearch = ({
  withNamespace,
  withSecondaryButtons,
}: StoryProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [namespace, setNamespace] = useState('uniprotkb');

  const props: Partial<MainSearchProps> = {};
  if (withNamespace) {
    props.namespaces = namespaces;
    props.selectedNamespace = namespace;
    props.onNamespaceChange = (value) => setNamespace(value);
  }
  if (withSecondaryButtons) {
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

const meta: Meta<StoryProps> = {
  title: 'Forms/Main Search',
  component: MainSearchComponent,
  args: {
    withNamespace: false,
    withSecondaryButtons: false,
  },
  render: MainSearch,
};

export default meta;

type Story = StoryObj<typeof MainSearchComponent>;

export const HeroHeader: Story = {};
