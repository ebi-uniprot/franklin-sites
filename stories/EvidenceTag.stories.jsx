import { EvidenceTag } from '../src/components';
import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Biocomponents/Evidence Tag',
  parameters: {
    purposeFunction: {
      function:
        'Provide the user with information about the evidence associated to a piece of text.',
      purpose:
        'Inform the user so they can make a decision regarding the trustworthyness of a piece of text',
    },
  },
};

export const evidenceTag = () => (
  <EvidenceTag label="Evidence tag">
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
