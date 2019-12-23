import React from 'react';
import EvidenceTag from '../src/components/evidence-tag';
import { getLipsumSentences } from '../src/app/common/lipsum';

export default {
  title: 'Evidence Tag',
};

export const evidenceTag = () => (
  <EvidenceTag label="Evidence tag">
    <div>
      <h5>Some title</h5>
      <p>{getLipsumSentences()}</p>
    </div>
  </EvidenceTag>
);
