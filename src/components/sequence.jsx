import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/sequence.scss';

function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);
  for (let i = 0, o = 0; i < numChunks; i += 1, o += size) {
    chunks[i] = str.substr(o, size);
  }
  return chunks;
}

const Sequence = ({ sequence, chunkSize = 10 }) => {
  const chunks = chunkSubstr(sequence, chunkSize);
  return (
    <div className="sequence">
      {chunks.map((chunk, counter) => (
        <span className="sequence__chunk" id="{chunk}">
          {chunk.length === chunkSize && counter * chunkSize + chunkSize}
          <br />
          {chunk}
        </span>
      ))}
    </div>
  );
};

Sequence.propTypes = {
  sequence: PropTypes.string.isRequired,
  chunkSize: PropTypes.number,
};

Sequence.defaultProps = {
  chunkSize: 10,
};

export default Sequence;
