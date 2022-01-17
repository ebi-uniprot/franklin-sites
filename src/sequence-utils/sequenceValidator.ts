const naturalAminoAcids = 'ARNDCEQGHILKMFPSTWYV';
const ambiguousAminoAcids = 'XBZJ';
const baseNucleicAcids = 'ACGTU';
const ambiguousNucleicAcids = 'WSMKRYBDHVNZ';

// Characters unique only to their subset e.g. 'U' is not a valid AA.
const aminoAcidsOnly = /[EQILFPXJ]/gi;
const nucleicAcidsOnly = /U/gi;

export const validAminoAcids = [
  naturalAminoAcids,
  ambiguousAminoAcids,
  '*', // Stop
  '.-', // Gaps
].join('');

export const validNucleicAcids = [
  baseNucleicAcids,
  ambiguousNucleicAcids,
  // No gaps e.g. - and . are not allowed
].join('');

export const errorResponses = Object.freeze({
  missingSequence: Object.freeze({
    valid: false,
    message: 'The sequence is missing',
  }),
  invalidSequence: Object.freeze({
    valid: false,
    message: 'The sequence is invalid',
  }),
  shortSequence: Object.freeze({
    valid: false,
    message: 'The sequence is too short',
  }),
});

export const validResponse = Object.freeze({ valid: true });

// Keep start ^ and end $ anchors in the regex
// Matches all alphabet letters, except for the letter O (case-insensitive)
// Accepts * . -
const validCharacters = /^[A-NP-Z*.-]+$/i;

/**
 * Very basic check on if a string is likely to be a FASTA-formatted string
 *
 * @param {string} seq - Sequence
 * @return {Boolean} True if it is likely to be FASTA
 */
const isFASTA = (seq: string) => /.*[>;]+/gm.test(seq);

/**
 * Prepares a string to be digested by the core validation function.
 *
 * @param {string} fasta - A FASTA-formatted string
 * @return {Array<string>} An array of clean sequences
 */
function prepareFASTAString(fasta: string) {
  return fasta
    .split(/^[>;].*\n?$/gm) // split and remove the 'Description' line
    .map((s) => s.replace(/\s/g, '')) // remove all of the white-space
    .filter(Boolean); // remove all non-truthy values e.g. null, '', false.
}

/*
 * Accepts a sequence of characters and makes a guess if
 * the sequence is an AA or NA sequence.
 * Note: This function will always return a guess.
 * Note: The argument 'threshold' is the frequency of nucliec-acid
 * bases that has to be repeated in the sequence in order to consider
 * it a NA sequence. This is a percentage value, represented in
 * values from 1 to 100.
 * e.g. with 'threshold' set to 90
 * sample sequence: AAAAAZZZZZ -> AA
 * sample sequence: AAAAAAAAAZ -> NA
 *
 * @param {string} sequence - A sequence
 * @param {Number} threshold - NA threshold from 1 to 100
 * @return {string} The likely type either 'aa' or 'na'
 */
function guessSequenceType(sequence: string, threshold: number) {
  const typeAA = 'aa';
  const typeNA = 'na';

  // Check for nucleic-acid only characters
  if (nucleicAcidsOnly.test(sequence)) {
    // Make sure it does NOT contain any amino-acid only characters
    if (!aminoAcidsOnly.test(sequence)) {
      return typeNA;
    }
  }

  // Check for amino-acid only characters
  if (aminoAcidsOnly.test(sequence)) {
    // Make sure it does NOT contain any nucleic-acid only characters
    if (!nucleicAcidsOnly.test(sequence)) {
      return typeAA;
    }
  }

  // Counting the characters to determine the percentage of
  // total occurances of members of each type
  const counts: Record<string, number> = {};

  for (let index = 0; index < sequence.length; index += 1) {
    const char = sequence.charAt(index);

    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char] += 1;
    }
  }

  // Keeping track of each individual character's percentage in the
  // whole sequence, gives flexibility if further logic needs to be
  // utilised in the future.
  const percentagePerChar = 100 / sequence.length;

  const percentages = Object.keys(counts).reduce(
    (acc, current) => {
      if (naturalAminoAcids.includes(current)) {
        acc.aa += counts[current] * percentagePerChar;
      }

      if (baseNucleicAcids.includes(current)) {
        acc.na += counts[current] * percentagePerChar;
      }

      return acc;
    },
    {
      aa: 0, // Amino-Acids
      na: 0, // Nucleic-Acids
    }
  );

  // Is this above our arbitrary threshold?
  if (percentages.na > threshold) {
    return typeNA;
  }

  // If you have reached here and it is not NA, then our guess
  // would be AA.
  return typeAA;
}

/*
 * Does some ground work before passing the sequence to the
 * 'guess' function.
 *
 * @param {string} sequence - A sequence
 * @return {string} The likely type either 'aa' or 'na'
 */
export function findLikelyType(sequence: string) {
  // 1. Remove all of the non-letter characters, plus N and X
  // 2. If less than 11 usable characters left: unable to guess
  // 3. If more than (by default) 90% ACGTU: Nucleic-Acids
  // 4. Else: Amino-Acids
  // Note: Removing N and X is fine because 'N' is valid for both AA and NA sequences,
  // therefore, removing it should equally reduce the sequence length, regardless of the
  // type of sequence. 'X' can be safely removed since it only exists in AA sequences
  // and not a valid character in NA sequences.
  const cleanUpRegEx = /[^A-Z]|[NX]/gi;
  const cleanSequence = sequence.replace(cleanUpRegEx, '');
  const nucleicAcidBaseThreshold = 90;

  return guessSequenceType(cleanSequence, nucleicAcidBaseThreshold);
}

/**
 * Core internal validation function for a single sequence
 *
 * @param {string} sequence - A sequence
 * @return {object} The result
 */
export function sequenceValidator(sequence: string) {
  // Sequence was not passed at all
  if (!sequence) {
    return errorResponses.missingSequence;
  }

  // Remove all white-spaces and FASTA bits
  let cleanSequence: string | undefined;

  if (isFASTA(sequence)) {
    const cleanSequences = prepareFASTAString(sequence);

    if (cleanSequences.length > 0) {
      [cleanSequence] = cleanSequences;
    }
  } else {
    cleanSequence = sequence.replace(/\s/g, '');
  }

  // Nothing left?
  if (!cleanSequence) {
    return errorResponses.missingSequence;
  }

  // Minimum length from: https://www.ebi.ac.uk/ipd/imgt/hla/blast.html
  if (cleanSequence.length < 11) {
    return errorResponses.shortSequence;
  }

  // Check and fail if there are any invalid characters in the sequence
  const onlyValidChar = validCharacters.test(cleanSequence);

  if (!onlyValidChar) {
    return errorResponses.invalidSequence;
  }

  // Attempt to find what type is more likely
  const likelyType: 'na' | 'aa' = findLikelyType(cleanSequence);

  // Fail if type can't be detected
  if (!likelyType) {
    return errorResponses.invalidSequence;
  }

  return {
    ...validResponse,
    likelyType,
    sequence,
  };
}

/**
 * Main validation function
 *
 * @param {Array<string>|string} sequences - An array of sequences or a string
 * @return {Array<object|null>} The result of validating each sequence
 * while keeping order intact.
 */
function validateSequences(input: string | string[]) {
  let sequences: string[] = [];
  // Is this a string?
  if (typeof input === 'string') {
    // Is this a FASTA format?
    if (isFASTA(input)) {
      // This is important to happen here, otherwise you will get a result
      // similar to [[a], [b]] instead of [a, b]
      sequences = prepareFASTAString(input);
    } else {
      // We only work with arrays, so create an array
      sequences = [input];
    }
  } else {
    sequences = [...input];
  }

  // This works based on the value of 'sequence', so keep it here instead of top
  const invalidInputException = `Sequence Validation function expects an Array<string>|string, but received ${typeof sequences}`;

  // Otherwise, make sure we have an array to work with
  if (!Array.isArray(sequences)) {
    throw new Error(invalidInputException);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } else if (!Object.prototype.toString.call(sequences) === '[object Array]') {
    throw new Error(invalidInputException);
  }

  // If the input is empty, return empty results
  if (sequences.length === 0) {
    return [];
  }

  // Validate each sequence separately, compile and return the results
  return sequences.map((sequence) => sequenceValidator(sequence));
}

export default validateSequences;
