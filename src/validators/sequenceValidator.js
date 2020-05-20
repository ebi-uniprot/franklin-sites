const naturalAminoAcids = 'ARNDCEQGHILKMFPSTWYV';
const ambiguousAminoAcids = 'XBZJ';
const baseNucleicAcids = 'ACGTU';
const ambiguousNucleicAcids = 'WSMKRYBDHVNZ';

// Characters unique only to their subset e.g. 'U' is not a valid AA.
const aminoAcidsOnly = /[EQILFPXJ]/ig;
const nucleicAcidsOnly = /U/ig;

export const validAminoAcids = [
  naturalAminoAcids,
  ambiguousAminoAcids,
  '*',  // Stop
  '.-',  // Gaps
].join('');

export const validNucleicAcids = [
  baseNucleicAcids,
  ambiguousNucleicAcids,
  // No gaps e.g. - and . are not allowed
].join('');

export const errorResponses = {
  missingSequence: {
    valid: false,
    likelyType: null,
    message: 'The sequence is missing',
  },
  invalidSequence: {
    valid: false,
    likelyType: null,
    message: 'The sequence is invalid',
  },
};

export const validResponse = {
  valid: true,
  likelyType: null,
  message: null,
};

// Keep start ^ and end $ anchors in the regex
// Matches all alphabet letters, except for the letter O (case-insensitive)
// Accepts * . -
const validCharacters = /^[A-NP-Z*.-]+$/i;

// Accepts a sequence of characters and makes a guess if
// the sequence is an AA or NA sequence.
// Note: This function will always return a guess.
// Note: The argument 'threshold' is the frequency of nucliec-acid
// bases that has to be repeated in the sequence in order to consider
// it a NA sequence. This is a percentage value, represented in
// values from 0 to 100.
// e.g. with 'threshold' set to 90
// sample sequence: AAAAAZZZZZ -> AA
// sample sequence: AAAAAAAAAZ -> NA
function guessSeuquenceType(sequence, threshold) {
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
  const counts = {};

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

  const percentages = Object.keys(counts)
    .reduce((acc, current) => {
      if (naturalAminoAcids.includes(current)) {
        acc.aa += (counts[current] * percentagePerChar);
      }

      if (baseNucleicAcids.includes(current)) {
        acc.na += (counts[current] * percentagePerChar);
      }

      return acc;
    }, {
      aa: 0,  // Amino-Acids
      na: 0,  // Nucleic-Acids
    });

  // Is this above our arbitrary threshold?
  if (percentages.na > threshold) {
    return typeNA;
  }

  // If you have reached here and it is not NA, then our guess
  // would be AA.
  return typeAA;
}

// Does some ground work before passing the sequence to the
// 'guess' function
function findLikelyType(sequence) {
  // 1. Remove all of the non-letter characters, plus N and X
  // 2. If less than 11 usable characters left: unable to guess
  // 3. If more than (by default) 90% ACGTU: Nucleic-Acids
  // 4. Else: Amino-Acids
  // Note: Removing N and X is fine because 'N' is valid for both AA and NA sequences,
  // therefore, removing it should equally reduce the sequence length, regardless of the
  // type of sequence. 'X' can be safely removed since it only exists in AA sequences
  // and not a valid character in NA sequences.
  const cleanUpRegEx = /[^A-Z]|[NX]/ig;
  const cleanSequence = sequence.replace(cleanUpRegEx, '');
  const nucleicAcidBaseThreshold = 90;

  return guessSeuquenceType(cleanSequence, nucleicAcidBaseThreshold);
}

// Main validation function
function sequenceValidator(sequence) {
  // Sequence was not passed at all
  if (!sequence) {
    return errorResponses.missingSequence;
  }

  // Remove FASTA description lines and all white-spaces
  const cleanSequence = sequence
    .replace(/^>.*\n?$/gm, '')
    .replace(/\s/g,'');

  // Nothing left?
  if (!cleanSequence.length > 0) {
    return errorResponses.missingSequence;
  }

  // Minimum length from: https://www.ebi.ac.uk/ipd/imgt/hla/blast.html
  if (!cleanSequence.length > 11) {
    return errorResponses.invalidSequence;
  }

  // Check and fail if there are any invalid characters in the sequence
  const onlyValidChar = validCharacters.test(cleanSequence);

  if (!onlyValidChar) {
    return errorResponses.invalidSequence;
  }

  // Attempt to find what type is more likely
  const likelyType = findLikelyType(cleanSequence);

  // Fail if type can't be detected
  if (!likelyType) {
    return errorResponses.invalidSequence;
  }

  return {
    ...validResponse,
    likelyType,
  };
}

export default sequenceValidator;
