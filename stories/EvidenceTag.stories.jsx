import { withKnobs, text, select } from '@storybook/addon-knobs';
import { EvidenceTag, EvidenceTagIcon, HelpIcon } from '../src/components';
import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Biocomponents/Evidence Tag',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      function:
        'Provide the user with information about the evidence associated to a piece of text.',
      purpose:
        'Inform the user so they can make a decision regarding the trustworthyness of a piece of text',
    },
  },
};

const IconComponentOptions = {
  EvidenceTag: <EvidenceTagIcon />,
  HelpIcon: <HelpIcon />,
};

export const evidenceTag = () => (
  <EvidenceTag
    label={text('label', 'this is an evidence tag', 'Props')}
    title="Tag title"
    iconComponent={
      IconComponentOptions[
        select('iconComponent', ['EvidenceTag', 'HelpIcon'], null, 'Props')
      ]
    }
  >
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
  </EvidenceTag>
);
