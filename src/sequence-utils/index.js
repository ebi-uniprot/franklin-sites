export const commentLineRE = /^\s*[>;](.*)$/m;
const whitespacesRE = /\s+/g;

export function formatFASTA(fasta, chunkSize = 10, chunksPerLine = 6) {
  const aaPerChunkRE = new RegExp(`(.{1,${chunkSize}})`, 'g');
  const chunksPerLineRE = new RegExp(
    `(.{1,${chunkSize * chunksPerLine}})`,
    'g'
  );

  let header = '';
  let sequence = '';
  // eslint-disable-next-line no-restricted-syntax, 🙄
  for (const line of fasta.split('\n')) {
    const trimmedLine = line.trim();
    if (commentLineRE.test(trimmedLine)) {
      header += `\n${trimmedLine}`;
    } else {
      // concatenate all the sequence lines into a single one
      sequence += trimmedLine;
    }
  }

  let output = sequence
    .replace(whitespacesRE, '')
    // split the sequence per requested aa per lines
    .replace(chunksPerLineRE, '$1\n')
    .split('\n')
    // separate aa per chunk size within the lines themselves
    .map(line => line.replace(aaPerChunkRE, '$1 ').trim())
    .join('\n');
  if (header) {
    output = `${header}\n${output}`;
  }
  return output.trim();
}

// extract a name as an NCBI identifier from a FASTA header
// See: https://en.wikipedia.org/wiki/FASTA_format#NCBI_identifiers
export function extractNameFromFASTAHeader(fasta) {
  if (!fasta) {
    return;
  }

  const [, header = ''] = fasta.match(commentLineRE) || [];

  // separate by space, first word will be the extracted name
  const [name] = header.split(' ').filter(Boolean);

  // eslint-disable-next-line consistent-return
  return name;
}
