import { type FormEventHandler, type SyntheticEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

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

const Search = ({
  onSubmit,
}: {
  onSubmit?: FormEventHandler<HTMLInputElement>;
}) => {
  const [value, setValue] = useState('');
  return (
    <MainSearch
      onTextChange={setValue}
      searchTerm={value}
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onSubmit?.(e);
      }}
    />
  );
};

const meta: Meta<typeof HeaderComponent> = {
  title: 'Layout/Header',
  args: {
    search: true,
    secondaryItems: true,
    isNegative: true,
    subtext: true,
    onClick: fn(),
    onSubmit: fn(),
  },

  render: ({
    search,
    secondaryItems,
    isNegative,
    subtext,
    onClick,
    onSubmit,
  }) => (
    <HeaderComponent
      homepageLink={
        <a href="https://www.uniprot.org">
          <UniProtLogo width={30} />
        </a>
      }
      search={search && <Search onSubmit={onSubmit} />}
      secondaryItems={secondaryItems && headerSecondaryItems}
      subtext={subtext && 'Release info | Statistics'}
      isNegative={isNegative}
    >
      <a target="_blank" href="https://www.uniprot.org/" rel="noreferrer">
        Link 1
      </a>
      <Dropdown
        visibleElement={(onClick) => (
          <Button variant="tertiary" onClick={onClick}>
            Links 2
          </Button>
        )}
      >
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
          <Button
            variant="tertiary"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onClick={onClick}
          >
            action
          </Button>
        </div>
      </Dropdown>
      <a target="_blank" href="https://uniprot.org/" rel="noreferrer">
        Link 3
      </a>
      <Button
        variant="tertiary"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onClick={onClick}
      >
        action
      </Button>
    </HeaderComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {};
