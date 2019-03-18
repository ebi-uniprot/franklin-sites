import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SequenceChunk from './sequence-chunk';

import aminoAcidsProps from './data/amino-acid-properties.json';

import '../styles/components/sequence.scss';
import DropdownButton from './dropdown-button';

class Sequence extends Component {
  constructor(props) {
    super(props);
    this.state = { textSize: props.textSize, highlights: [], copied: false };
  }

  componentDidMount() {
    if (!this.text) {
      return;
    }
    // Measure height and width of the dummy element
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
    let { highlights } = this.state;
    if (highlights.includes(aaProp)) {
      highlights = highlights.filter(h => h !== aaProp);
    } else {
      highlights.push(aaProp);
    }
    this.setState({
      highlights,
    });
  };

  getSelectors = () => (
    <DropdownButton label="Highlight">
      <div className="dropdown-menu__content">
        {aminoAcidsProps.map(aaProp => (
          <label key={aaProp.name} htmlFor={aaProp.name}>
            <input
              type="checkbox"
              onClick={() => this.handleToggleHighlight(aaProp)}
              id={aaProp.name}
            />
            {aaProp.name}
          </label>
        ))}
      </div>
    </DropdownButton>
  );

  render() {
    const { sequence, chunkSize } = this.props;
    const { textSize, copied } = this.state;
    const chunks = this.getChunks(sequence, chunkSize, textSize);
    let content;
    // If textSize was not provided, add a text element so it can be measured
    // in componentDidMount
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
        <div className="action-bar">
          {this.getSelectors()}
          <CopyToClipboard text={sequence} onCopy={() => this.setState({ copied: true })}>
            <button type="button" className="button sequence__copy-button">
              {copied ? 'Copied' : 'Copy sequence'}
            </button>
          </CopyToClipboard>
        </div>
        <div className="sequence">
          <div className="sequence__sequence">{content}</div>
        </div>
      </Fragment>
    );
  }
}

Sequence.propTypes = {
  sequence: PropTypes.string.isRequired,
  textSize: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
  chunkSize: PropTypes.number,
};

Sequence.defaultProps = {
  chunkSize: 10,
  textSize: null,
};

export default Sequence;
