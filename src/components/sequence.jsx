import React, { Fragment, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DownloadIcon from '../svg/download.svg';
import BasketIcon from '../svg/basket.svg';
import SequenceChunk from './sequence-chunk';

import aminoAcidsProps from './data/amino-acid-properties.json';

import '../styles/components/sequence.scss';
import DropdownButton from './dropdown-button';

const expasyPrefixUrl = '//web.expasy.org/cgi-bin/';
const sequenceTools = [
  {
    name: 'ProtParam',
    url: '/protparam/protparam?',
  },
  {
    name: 'ProtScale',
    url: '/protscale/protscale.pl?',
  },
  {
    name: 'Compute pI/Mw',
    url: '/compute_pi/pi_tool?',
  },
  {
    name: 'PeptideMass',
    url: '/peptide_mass/peptide-mass.pl?',
  },
  {
    name: 'PeptideCutter',
    url: '/peptide_cutter/peptidecutter.pl?',
  },
];

const Sequence = ({
  sequence,
  chunkSize,
  accession,
  initialTextSize,
  blastCallback,
  addCallback,
  downloadUrl,
}) => {
  const [textSize, setTextSize] = useState(initialTextSize);
  const [highlights, setHighlights] = useState([]);
  const [copied, setCopied] = useState(false);
  const text = useRef(null);

  useEffect(() => {
    if (!text || initialTextSize) {
      return;
    }
    // Measure height and width of the dummy element
    const { width, height } = text.current.getBBox();
    setTextSize({ width, height });
  }, [initialTextSize]);

  const getChunks = (str, size) => {
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

  const handleToggleHighlight = aaProp => {
    let highlightsToUpdate = [...highlights];
    if (highlightsToUpdate.includes(aaProp)) {
      highlightsToUpdate = highlightsToUpdate.filter(h => h !== aaProp);
    } else {
      highlightsToUpdate.push(aaProp);
    }
    setHighlights(highlightsToUpdate);
  };

  const getSelectors = () => {
    return (
      <DropdownButton label="Highlight">
        <div className="dropdown-menu__content">
          {aminoAcidsProps.map(aaProp => {
            const inputId = `${accession}-${aaProp.name}`;
            return (
              <label key={aaProp.name} htmlFor={inputId}>
                <input
                  type="checkbox"
                  id={inputId}
                  data-testid="sequence-highlight-checkbox"
                  onChange={() => handleToggleHighlight(aaProp)}
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
  const chunks = getChunks(sequence, chunkSize, textSize);

  return (
    <Fragment>
      <div className="action-bar button-group">
        <DropdownButton label="Tools">
          <ul className="no-bullet">
            {blastCallback && (
              <li>
                <button
                  className="button tertiary"
                  type="button"
                  onClick={blastCallback}
                >
                  BLAST
                </button>
              </li>
            )}
            {sequenceTools.map(sequenceTool => (
              <li key={sequenceTool.name}>
                <a
                  href={`${expasyPrefixUrl}${sequenceTool.url}${accession}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sequenceTool.name}
                </a>
              </li>
            ))}
          </ul>
        </DropdownButton>
        {downloadUrl && (
          <a className="button" href={downloadUrl} download>
            <DownloadIcon />
            Download
          </a>
        )}

        {addCallback && (
          <button type="button" className="button" onClick={addCallback}>
            <BasketIcon />
            Add
          </button>
        )}

        {getSelectors()}
        <CopyToClipboard text={sequence} onCopy={() => setCopied(true)}>
          <button type="button" className="button">
            {copied ? 'Copied' : 'Copy sequence'}
          </button>
        </CopyToClipboard>
      </div>
      <div className="sequence">
        <div className="sequence__sequence">
          {/* If textSize was not provided, add a text element so it can be measured */}
          {textSize === null ? (
            <svg>
              <text ref={text}>M</text>
            </svg>
          ) : (
            <Fragment>
              {chunks.map(chunk => (
                <span
                  className="sequence__sequence__chunk"
                  key={`chunk_${v1()}`}
                >
                  {chunk}
                </span>
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Sequence.propTypes = {
  /**
   * The sequence
   */
  sequence: PropTypes.string.isRequired,
  /**
   * The accession corresponding to the sequence
   */
  accession: PropTypes.string.isRequired,
  /**
   * The width and height of a letter. Will be calculated if left blank
   */
  initialTextSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  /**
   * The number of items to include in a sequence chunk. Default 10
   */
  chunkSize: PropTypes.number,
  /**
   * The URL to download the isoform sequence
   */
  downloadUrl: PropTypes.string,
  /**
   * Callback which is fired when the BLAST button is clicked. If no callback
   * is provided then no BLAST button will be displayed.
   */
  blastCallback: PropTypes.func,
  /** Callback which is fired when the Add button is clicked. If no callback
   * is provided then no Add button will be displayed.
   */
  addCallback: PropTypes.func,
};

Sequence.defaultProps = {
  chunkSize: 10,
  initialTextSize: null,
  downloadUrl: null,
  blastCallback: null,
  addCallback: null,
};

export default Sequence;
