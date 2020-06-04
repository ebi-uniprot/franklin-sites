function formatFASTA(fasta, chunkSize = 10) {
  const chunkRE = new RegExp(`.{1,${chunkSize}}`, 'g');
  const commentRE = new RegExp(`>`, 'g');
  return fasta
    .split('\n')
    .filter(Boolean)
    .map(line => (line.match(commentRE) ? line : line.match(chunkRE).join(' ')))
    .join('\n');
}

export default formatFASTA;
