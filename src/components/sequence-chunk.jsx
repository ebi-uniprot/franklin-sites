import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SequenceChunk = ({
  sequence, textSize, chunkSize, chunkNumber,
}) => (
  <Fragment>
    <svg height={3 * textSize.height} width={textSize.width * chunkSize}>
      <text
        x={textSize.width * chunkSize}
        y={textSize.height}
        className="sequence__sequence__chunk__counter"
      >
        {sequence.length === chunkSize && chunkNumber * chunkSize + chunkSize}
      </text>
      <text x="0" y={2 * textSize.height} className="sequence__sequence__chunk_sequence">
        {sequence}
      </text>
    </svg>
  </Fragment>
);

SequenceChunk.propTypes = {
  sequence: PropTypes.string.isRequired,
  textSize: PropTypes.arrayOf(PropTypes.object).isRequired,
  chunkSize: PropTypes.number.isRequired,
  chunkNumber: PropTypes.number.isRequired,
};

export default SequenceChunk;
