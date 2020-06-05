export function formatFASTA(fasta, chunkSize = 10) {
  const chunkRE = new RegExp(`.{1,${chunkSize}}`, 'g');
  const commentRE = new RegExp(`>`, 'g');
  return fasta
    .split('\n')
    .filter(Boolean)
    .map(line => (line.match(commentRE) ? line : line.match(chunkRE).join(' ')))
    .join('\n');
}

export function extractNameFromFASTAHeader(fasta) {
  if (!fasta) {
    return null;
  }

  const headers = fasta
    .split('\n')
    .map(line => (line.match(/>/g) ? line : null))
    .filter(Boolean)
    .map(line => line.replace(/\s/gi, '').split('|'));

  if (!headers || !headers.length) {
    return null;
  }

  // TODO assert that headers[0][1] exists
  const accession = headers[0][1];

  return accession;
}
