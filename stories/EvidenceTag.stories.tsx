import { Meta, StoryObj } from '@storybook/react';

import {
  EvidenceTag as EvidenceTagComponent,
  EvidenceTagIcon,
  InformationIcon,
  HelpIcon,
} from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

const IconComponentOptions = {
  EvidenceTag: <EvidenceTagIcon />,
  InformationIcon: <InformationIcon />,
  HelpIcon: <HelpIcon />,
};

const meta: Meta<typeof EvidenceTagComponent> = {
  component: EvidenceTagComponent,
  title: 'Biocomponents/Evidence Tag',
  argTypes: {
    iconComponent: {
      options: ['EvidenceTag', 'InformationIcon', 'HelpIcon'],
      mapping: IconComponentOptions,
      control: { type: 'select' },
    },
  },
  args: {
    label: 'this is an evidence tag',
    iconComponent: <EvidenceTagIcon />,
  },
  render: ({ label, iconComponent }) => (
    <EvidenceTagComponent label={label} iconComponent={iconComponent}>
      <div>
        <h5>Some title</h5>
        <p>{getLipsumSentences()}</p>
        <p>{getLipsumSentences()}</p>
        <p>{getLipsumSentences()}</p>
        <p>{getLipsumSentences()}</p>
        <p>{getLipsumSentences()}</p>
        <p>{getLipsumSentences()}</p>
        <p>{getLipsumSentences()}</p>
        <p>{getLipsumSentences()}</p>
      </div>
    </EvidenceTagComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof EvidenceTagComponent>;

export const EvidenceTag: Story = {};
