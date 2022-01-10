import { extractNameFromFASTAHeader, formatFASTA } from '..';

const fastaSingleSequenceMultipleLines = `
>sp|P00000|ID_0 Protein description OS=Homo sapiens OX=9606 GN=APP PE=1 SV=3
MLPGLALLLLAAWTARALEVPTDGNAGLLAEPQIAMFCGRLNMHMNVQNGKWDSDPSGTK
IKTEEISEVKMDAEFRHDSGYEVHHQKLVFFAEDVGSNKGAIIGLMVGGVVIATVIVITL
VMLKKKQYTSIHHGVVEVDAAVTPEERHLSKMQQNGYENPTYKFFEQMQN
`;

const fastaOneBigLine = `
>sp|P00000|ID_0 Protein description OS=Homo sapiens OX=9606 GN=APP PE=1 SV=3
MLPGLALLLLAAWTARALEVPTDGNAGLLAEPQIAMFCGRLNMHMNVQNGKWDSDPSGTKIKTEEISEVKMDAEFRHDSGYEVHHQKLVFFAEDVGSNKGAIIGLMVGGVVIATVIVITLVMLKKKQYTSIHHGVVEVDAAVTPEERHLSKMQQNGYENPTYKFFEQMQN`;

const fastaNoHeaderBadlyCopyPasted = `

MLPGLA LLLLAAWTARALEVPTDGN   AGLLAEPQIAMFCGRLNMHMNVQNGKWDSDPSGTKIKT


EEISEVKMDAEF


`;

const expected = `>sp|P00000|ID_0 Protein description OS=Homo sapiens OX=9606 GN=APP PE=1 SV=3
MLPGLALLLL AAWTARALEV PTDGNAGLLA EPQIAMFCGR LNMHMNVQNG KWDSDPSGTK
IKTEEISEVK MDAEFRHDSG YEVHHQKLVF FAEDVGSNKG AIIGLMVGGV VIATVIVITL
VMLKKKQYTS IHHGVVEVDA AVTPEERHLS KMQQNGYENP TYKFFEQMQN`;

const expectedNoHeader = `MLPGLALLLL AAWTARALEV PTDGNAGLLA EPQIAMFCGR LNMHMNVQNG KWDSDPSGTK
IKTEEISEVK MDAEF`;

describe('formatFASTA', () => {
  it('should format a multiple line sequence', () => {
    expect(formatFASTA(fastaSingleSequenceMultipleLines)).toEqual(expected);
    expect(formatFASTA(fastaOneBigLine)).toEqual(expected);
    expect(formatFASTA(fastaNoHeaderBadlyCopyPasted)).toEqual(expectedNoHeader);
  });
});

describe('extractNameFromFASTAHeader', () => {
  it('should extract name', () => {
    expect(
      extractNameFromFASTAHeader(fastaSingleSequenceMultipleLines)
    ).toEqual('sp|P00000|ID_0');
    expect(
      extractNameFromFASTAHeader(fastaNoHeaderBadlyCopyPasted)
    ).toBeUndefined();
  });
});
