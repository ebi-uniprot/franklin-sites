import validateSequences, {
  validResponse,
  errorResponses,
} from '../sequenceValidator';

let results;
let expectedResult;
const missingSequence = null;
const emptySequence = '   '; // empty spaces...
const validAminoAcidSequence = 'ARNDCEQGHILKMFPSTWYVXBZJ';
const invalidAminoAcidSequence = 'ARNDCEQGHILKMFPSTWYVXBZJO';
const validNucleicAcidSequence = 'ACGTUACGTUACGTUACGTU';
const invalidNucleicAcidSequence = 'ACGTUACGTUACGTUACGTU_';
const validAmbiguousNucleicAcidSequence = 'ACGTWSMKRYBDHVNZ';
const shortSequenceAfterCleanUp = 'A**C**G**T**U**';
const shortSequence = 'ACGTU';
const fastaSingle = `
>FBgn0046814 type=gene; loc=2L:complement(9950437..9950455); ID=FBgn0046814; name=mir-87; dbxref=FlyBase:FBgn0046814,FlyBase:FBan0032981,FlyBase_Annotation_IDs:CR32981,GB:AE003626,MIR:MI0000382,flight:FBgn0046814,flymine:FBgn0046814,hdri:FBgn0046814,ihop:1478786; derived_computed_cyto=30F1-30F1%3B Limits computationally determined from genome sequence between @P{EP}CG5899<up>EP701</up>@ and @P{EP}CG4747<up>EP594</up>@%26@P{lacW}l(2)k13305<up>k13305</up>@; gbunit=AE014134; MD5=10a65ff8961e4823bad6c34e37813302; length=19; release=r5.21; species=Dmel;
ARNDCEQGHILKMFPSTWYVXBZJ
`;
const fastaArray = [
  `>FBgn0046814 type=gene; loc=2L:complement(9950437..9950455); ID=FBgn0046814; name=mir-87; dbxref=FlyBase:FBgn0046814,FlyBase:FBan0032981,FlyBase_Annotation_IDs:CR32981,GB:AE003626,MIR:MI0000382,flight:FBgn0046814,flymine:FBgn0046814,hdri:FBgn0046814,ihop:1478786; derived_computed_cyto=30F1-30F1%3B Limits computationally determined from genome sequence between @P{EP}CG5899<up>EP701</up>@ and @P{EP}CG4747<up>EP594</up>@%26@P{lacW}l(2)k13305<up>k13305</up>@; gbunit=AE014134; MD5=10a65ff8961e4823bad6c34e37813302; length=19; release=r5.21; species=Dmel;
  ARNDCEQGHILKMFPSTWYVXBZJ`,
  `>AT1G01140.1 (version 1)
  ACGTUACGTUACGTUACGTU`,
];
const fastaString = `
>FBgn0046814 type=gene; loc=2L:complement(9950437..9950455); ID=FBgn0046814; name=mir-87; dbxref=FlyBase:FBgn0046814,FlyBase:FBan0032981,FlyBase_Annotation_IDs:CR32981,GB:AE003626,MIR:MI0000382,flight:FBgn0046814,flymine:FBgn0046814,hdri:FBgn0046814,ihop:1478786; derived_computed_cyto=30F1-30F1%3B Limits computationally determined from genome sequence between @P{EP}CG5899<up>EP701</up>@ and @P{EP}CG4747<up>EP594</up>@%26@P{lacW}l(2)k13305<up>k13305</up>@; gbunit=AE014134; MD5=10a65ff8961e4823bad6c34e37813302; length=19; release=r5.21; species=Dmel;
ARNDCEQGHILKMFPSTWYVXBZJ

>AT1G01140.1 (version 1)
ACGTUACGTUACGTUACGTU
`;

describe('validateSequences', () => {
  beforeEach(() => {
    results = null;
    expectedResult = null;
  });

  it('should fail when sequence is missing', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    results = validateSequences([missingSequence]);
    expect(results).toEqual([errorResponses.missingSequence]);
  });

  it('should fail when sequence is an empty string', () => {
    results = validateSequences([emptySequence]);
    expect(results).toEqual([errorResponses.missingSequence]);
  });

  it('should fail if a sequence is too short', () => {
    results = validateSequences([shortSequence]);
    expect(results).toEqual([errorResponses.shortSequence]);
  });

  it('should NOT fail if a sequence is too short after clean-up', () => {
    results = validateSequences([shortSequenceAfterCleanUp]);
    expectedResult = [
      {
        ...validResponse,
        likelyType: 'na',
        sequence: 'A**C**G**T**U**',
      },
    ];

    expect(results).toEqual(expectedResult);
  });

  it('should indicate a valid AA sequence', () => {
    results = validateSequences([validAminoAcidSequence]);
    expectedResult = [
      {
        ...validResponse,
        likelyType: 'aa',
        sequence: 'ARNDCEQGHILKMFPSTWYVXBZJ',
      },
    ];

    expect(results).toEqual(expectedResult);
  });

  it('should indicate invalid for an AA sequence with invalid characters', () => {
    results = validateSequences([invalidAminoAcidSequence]);
    expect(results).toEqual([errorResponses.invalidSequence]);
  });

  it('should indicate a valid NA sequence', () => {
    results = validateSequences([validNucleicAcidSequence]);
    expectedResult = [
      {
        ...validResponse,
        likelyType: 'na',
        sequence: 'ACGTUACGTUACGTUACGTU',
      },
    ];

    expect(results).toEqual(expectedResult);
  });

  it('should indicate invalid for an NA sequence with invalid characters', () => {
    results = validateSequences([invalidNucleicAcidSequence]);
    expect(results).toEqual([errorResponses.invalidSequence]);
  });

  it('should indicate AA for an NA sequence with ambiguous codes', () => {
    results = validateSequences([validAmbiguousNucleicAcidSequence]);
    expectedResult = [
      {
        ...validResponse,
        likelyType: 'aa',
        sequence: 'ACGTWSMKRYBDHVNZ',
      },
    ];

    expect(results).toEqual(expectedResult);
  });

  it('should remove all FASTA description lines', () => {
    results = validateSequences(fastaSingle);
    expectedResult = [
      {
        ...validResponse,
        likelyType: 'aa',
        sequence: 'ARNDCEQGHILKMFPSTWYVXBZJ',
      },
    ];

    expect(results).toEqual(expectedResult);
  });

  it('should validate an array of multiple sequences', () => {
    results = validateSequences(fastaArray);
    expectedResult = [
      {
        ...validResponse,
        likelyType: 'aa',
        sequence: fastaArray[0],
      },
      {
        ...validResponse,
        likelyType: 'na',
        sequence: fastaArray[1],
      },
    ];

    expect(results).toEqual(expectedResult);
  });

  it('should validate a string that contains multiple sequences', () => {
    results = validateSequences(fastaString);
    expectedResult = [
      {
        ...validResponse,
        likelyType: 'aa',
        sequence: 'ARNDCEQGHILKMFPSTWYVXBZJ',
      },
      {
        ...validResponse,
        likelyType: 'na',
        sequence: 'ACGTUACGTUACGTUACGTU',
      },
    ];

    expect(results).toEqual(expectedResult);
  });
});
