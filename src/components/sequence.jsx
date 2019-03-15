import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SequenceChunk from './sequence-chunk';

import aminoAcidsProps from './data/amino-acid-properties.json';

import '../styles/components/sequence.scss';

class Sequence extends Component {
  constructor(props) {
    super(props);
    this.state = { textSize: null, highlights: [] };
  }

  componentDidMount() {
    if (!this.text) {
      return;
    }
    const box = this.text.getBBox();
    this.setState({ textSize: { width: box.width, height: box.height } });
  }

  getChunks = (str, size) => {
    const { textSize, highlights } = this.state;
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);
    for (let i = 0, o = 0; i < numChunks; i += 1, o += size) {
      chunks[i] = (
        <SequenceChunk
          sequence={str.substr(o, size)}
          textSize={textSize}
          chunkSize={size}
          chunkNumber={i}
          highlights={highlights}
        />
      );
    }
    return chunks;
  };

  handleToggleHighlight = (aaProp) => {
    const { highlights } = this.state;
    // TODO this should toggle not just add
    highlights.push(aaProp);
    this.setState({
      highlights,
    });
  };

  getSelectors = () => (
    <Fragment>
      {aminoAcidsProps.map(aaProp => (
        <label key={aaProp.name}>
          <input type="checkbox" onClick={() => this.handleToggleHighlight(aaProp)} />
          {aaProp.name}
        </label>
      ))}
    </Fragment>
  );

  render() {
    // console.log(aminoAcids);
    const { sequence, chunkSize } = this.props;
    const { textSize } = this.state;
    const chunks = this.getChunks(sequence, chunkSize, textSize);
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
        </Fragment>
      );
    }

    return (
      <Fragment>
        {this.getSelectors()}
        <CopyToClipboard text={sequence}>
          <button type="button" className="button sequence__copy-button">
            Copy
          </button>
        </CopyToClipboard>
        <div className="sequence">
          <div className="sequence__sequence">{content}</div>
        </div>
      </Fragment>
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
