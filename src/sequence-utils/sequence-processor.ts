import { commentLineRE, extractNameFromFASTAHeader } from '.';
import { sequenceValidator } from './sequenceValidator';

const whitespaceRE = /\s+/g;

export type SequenceObject = {
  raw: string;
  name: string;
  header: string;
  sequence: string;
  likelyType?: 'aa' | 'na';
  valid?: boolean;
  message?: string;
};

const getNewSequenceObject = (): SequenceObject => ({
  raw: '',
  name: '',
  header: '',
  sequence: '',
});

const validate = (sequenceObject: SequenceObject): SequenceObject => {
  const validation = sequenceValidator(sequenceObject.sequence);
  return { ...validation, ...sequenceObject };
};

const sequenceProcessor = (rawText: string): SequenceObject[] => {
  const sequences: SequenceObject[] = [];
  let currentSequence = getNewSequenceObject();
  for (const line of rawText.split('\n')) {
    // for each line

    if (commentLineRE.test(line)) {
      // if this is a comment line

      if (currentSequence.sequence) {
        // if we already have sequence data being processed
        // store current sequence
        sequences.push(validate(currentSequence));

        // and start new sequence
        currentSequence = getNewSequenceObject();
      }

      if (currentSequence.header) {
        // multiline header
        currentSequence.header += '\n';
      } else {
        // first header line
        const name = extractNameFromFASTAHeader(line);
        if (name) {
          currentSequence.name = name;
        }
      }
      currentSequence.header += line;
    } else {
      // if this is a sequence line
      currentSequence.sequence += line.replace(whitespaceRE, '');
    }

    // store the raw string
    if (currentSequence.raw) {
      currentSequence.raw += '\n';
    }
    currentSequence.raw += line;
  }

  if (currentSequence.raw) {
    sequences.push(validate(currentSequence));
  }

  return sequences;
};

export default sequenceProcessor;