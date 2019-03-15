import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SequenceChunk from './sequence-chunk';

import aminoAcids from './data/amino-acids.json';

import '../styles/components/sequence.scss';

class Sequence extends Component {
  constructor(props) {
    super(props);
    this.state = { textSize: null };
  }

  componentDidMount() {
    if (!this.text) {
      return;
    }
    const box = this.text.getBBox();
    this.setState({ textSize: { width: box.width, height: box.height } });
  }

  chunkSubstr = (str, size, textSize) => {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);
    for (let i = 0, o = 0; i < numChunks; i += 1, o += size) {
      chunks[i] = (
        <SequenceChunk
          sequence={str.substr(o, size)}
          textSize={textSize}
          chunkSize={size}
          chunkNumber={i}
        />
      );
    }
    return chunks;
  };

  render() {
    // console.log(aminoAcids);
    const { sequence, chunkSize } = this.props;
    const { textSize } = this.state;
    const chunks = this.chunkSubstr(sequence, chunkSize, textSize);
    let content;
    if (textSize === null) {
      content = (
        <svg>
          <text
            ref={(t) => {
              this.text = t;
            }}
          >
            M
          </text>
        </svg>
      );
    } else {
      content = (
        <Fragment>
          {chunks.map(chunk => (
            <span className="sequence__sequence__chunk" key={`chunk_${v1()}`}>
              {chunk}
            </span>
          ))}
          <CopyToClipboard text={sequence}>
            <button type="button" className="button sequence__copy-button">
              Copy
            </button>
          </CopyToClipboard>
        </Fragment>
      );
    }

    return (
      <div className="sequence">
        <div className="sequence__sequence">{content}</div>
      </div>
    );
  }
}

Sequence.propTypes = {
  sequence: PropTypes.string.isRequired,
  chunkSize: PropTypes.number,
};

Sequence.defaultProps = {
  chunkSize: 10,
};

export default Sequence;
