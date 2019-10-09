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
    for (let i = 0, chunkStart = 0; i < numChunks; i += 1, chunkStart += size) {
      chunks[i] = (
        <SequenceChunk
          sequence={str.substr(chunkStart, size)}
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
    let highlightsToUpdate = [...highlights];
    if (highlightsToUpdate.includes(aaProp)) {
      highlightsToUpdate = highlightsToUpdate.filter(h => h !== aaProp);
    } else {
      highlightsToUpdate.push(aaProp);
    }
    this.setState({
      highlights: highlightsToUpdate,
    });
  };

  getSelectors = () => {
    const { highlights } = this.state;
    const { id } = this.props;

    return (
      <DropdownButton label="Highlight">
        <div className="dropdown-menu__content">
          {aminoAcidsProps.map((aaProp) => {
            const inputId = `${id || v1()}-${aaProp.name}`;
            return (
              <label key={aaProp.name} htmlFor={inputId}>
                <input
                  type="checkbox"
                  id={inputId}
                  data-testid="sequence-highlight-checkbox"
                  onChange={() => this.handleToggleHighlight(aaProp)}
                  checked={highlights.includes(aaProp)}
                />
                {aaProp.name}
              </label>
            );
          })}
        </div>
      </DropdownButton>
    );
  };

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
  /**
   * The sequence
   */
  sequence: PropTypes.string.isRequired,
  /**
   * The width and height of a letter. Will be calculated if left blank
   */
  textSize: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
  /**
   * The number of items to include in a sequence chunk. Default 10
   */
  chunkSize: PropTypes.number,
  /**
   * An ID used to form the highlight options IDs. Default uuid/v1
   */
  id: PropTypes.string,
};

Sequence.defaultProps = {
  chunkSize: 10,
  textSize: null,
  id: '',
};

export default Sequence;
