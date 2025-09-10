import { useState } from 'react';
import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';
import MainSearchComponent, {
  type MainSearchProps,
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
  onAdvancedClick: typeof fn;
  onListClick: typeof fn;
};

export const MainSearch = ({
  withNamespace,
  withSecondaryButtons,
  onAdvancedClick,
  onListClick,
  onSubmit,
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
      { label: 'Advanced', action: onAdvancedClick },
      { label: 'List', action: onListClick },
    ];
  }
  return (
    <MainSearchComponent
      searchTerm={searchTerm}
      onTextChange={(value) => setSearchTerm(value)}
      onSubmit={onSubmit}
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
    onAdvancedClick: fn(),
    onListClick: fn(),
    onSubmit: fn(),
  },
  render: MainSearch,
};

export default meta;

type Story = StoryObj<typeof MainSearchComponent>;

export const HeroHeader: Story = {};
