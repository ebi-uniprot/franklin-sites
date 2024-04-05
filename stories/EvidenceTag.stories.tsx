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
  parameters: {
    purposeFunction: {
      function:
        'Provide the user with information about the evidence associated to a piece of text.',
      purpose:
        'Inform the user so they can make a decision regarding the trustworthyness of a piece of text',
    },
  },
  argTypes: {
    iconComponent: {
      options: ['EvidenceTag', 'InformationIcon', 'HelpIcon'],
      mapping: IconComponentOptions,
      control: { type: 'select' },
    },
  },
  args: {
    label: 'this is an evidence tag',
    iconComponent: 'EvidenceTag',
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

type Story = StoryObj<StoryProps>;

export const EvidenceTag: Story = {};
