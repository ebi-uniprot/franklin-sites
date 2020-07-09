import { commentLineRE, extractNameFromFASTAHeader } from '.';
import { sequenceValidator } from './sequenceValidator';

const whitespaceRE = /\s+/g;

const getNewSequenceObject = () => ({
  raw: '',
  name: '',
  header: '',
  sequence: '',
});

const validate = sequenceObject => {
  const validation = sequenceValidator(sequenceObject.sequence);
  return { ...validation, ...sequenceObject };
};

const sequenceProcessor = rawText => {
  const sequences = [];
  let currentSequence = getNewSequenceObject();
  // eslint-disable-next-line no-restricted-syntax
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
