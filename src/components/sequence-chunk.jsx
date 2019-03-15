import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';

const highlightHeight = 2;
const highlightGap = 3;

const computeHighlights = (sequence, highlights, textSize) => {
  const sequenceArray = sequence.split('');
  return highlights.map((highlight, i) => sequenceArray
    .map((aa, j) => (highlight.aminoAcids.includes(aa) ? j : ''))
    .filter(String)
    .map(pos => (
      <rect
        x={pos * textSize.width}
        y={2 * textSize.height + (highlightHeight + highlightGap * i)}
        width={textSize.width}
        height={highlightHeight}
        fill={highlight.colour}
        key={v1()}
      />
    )));
};

const SequenceChunk = ({
  sequence, textSize, chunkSize, chunkNumber, highlights,
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
      {computeHighlights(sequence, highlights, textSize)}
    </svg>
  </Fragment>
);

SequenceChunk.propTypes = {
  sequence: PropTypes.string.isRequired,
  textSize: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
  chunkSize: PropTypes.number.isRequired,
  chunkNumber: PropTypes.number.isRequired,
};

SequenceChunk.defaultProps = {
  textSize: { width: 0, height: 0 },
};

export default SequenceChunk;
