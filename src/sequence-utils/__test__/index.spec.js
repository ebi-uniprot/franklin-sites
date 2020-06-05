import { extractNameFromFASTAHeader, formatFASTA } from '..';

const fastaSingleSequenceMultipleLines = `
>sp|P00000|Protein description OS=Homo sapiens OX=9606 GN=APP PE=1 SV=3
MLPGLALLLLAAWTARALEVPTDGNAGLLAEPQIAMFCGRLNMHMNVQNGKWDSDPSGTK
IKTEEISEVKMDAEFRHDSGYEVHHQKLVFFAEDVGSNKGAIIGLMVGGVVIATVIVITL
VMLKKKQYTSIHHGVVEVDAAVTPEERHLSKMQQNGYENPTYKFFEQMQN
`;

describe('formatFASTA', () => {
  it('should format a multiple line sequence', () => {
    expect(formatFASTA(fastaSingleSequenceMultipleLines)).toEqual(
      `>sp|P00000|Protein description OS=Homo sapiens OX=9606 GN=APP PE=1 SV=3
MLPGLALLLL AAWTARALEV PTDGNAGLLA EPQIAMFCGR LNMHMNVQNG KWDSDPSGTK
IKTEEISEVK MDAEFRHDSG YEVHHQKLVF FAEDVGSNKG AIIGLMVGGV VIATVIVITL
VMLKKKQYTS IHHGVVEVDA AVTPEERHLS KMQQNGYENP TYKFFEQMQN`
    );
  });
});

describe('extractNameFromFASTAHeader', () => {
  it('should extract name', () => {
    expect(
      extractNameFromFASTAHeader(fastaSingleSequenceMultipleLines)
    ).toEqual('P00000');
  });
});
