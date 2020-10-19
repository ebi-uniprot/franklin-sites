import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import InfoList from './info-list';
import DownloadIcon from '../svg/download.svg';
import BasketIcon from '../svg/basket.svg';
import Spinner from '../svg/spinner.svg';
import SequenceChunk from './sequence-chunk';
import CopyToClipboard from './copy-to-clipboard';

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
  accession,
  onShowSequence,
  isCollapsible,
  isLoading,
  infoData,
  chunkSize,
  initialTextSize,
  onBlastClick,
  onAddToBasketClick,
  downloadUrl,
  showActionBar,
}) => {
  const [textSize, setTextSize] = useState(initialTextSize);
  const [highlights, setHighlights] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(
    isCollapsible || (onShowSequence && !sequence)
  );
  const text = useRef(null);

  useEffect(() => {
    if (!text || !text.current || !text.current.getBBox || initialTextSize) {
      return;
    }
    // Measure height and width of the dummy element
    const { width, height } = text.current.getBBox();
    setTextSize({ width, height });
  }, [initialTextSize, showActionBar, isCollapsed, sequence]);

  const handleShowSequenceClick = () => {
    setIsCollapsed(false);
    // Request call of sequence
    if (!sequence && onShowSequence) {
      onShowSequence();
    }
  };

  if (isCollapsed || !sequence) {
    return (
      <>
        <button
          type="button"
          className="button secondary"
          onClick={handleShowSequenceClick}
        >
          Show sequence {isLoading && <Spinner />}
        </button>
      </>
    );
  }

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

  const handleToggleHighlight = (aaProp) => {
    let highlightsToUpdate = [...highlights];
    if (highlightsToUpdate.includes(aaProp)) {
      highlightsToUpdate = highlightsToUpdate.filter((h) => h !== aaProp);
    } else {
      highlightsToUpdate.push(aaProp);
    }
    setHighlights(highlightsToUpdate);
  };

  const getSelectors = () => {
    return (
      <DropdownButton label="Highlight" className="tertiary">
        <div className="dropdown-menu__content">
          {aminoAcidsProps.map((aaProp) => {
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
    <>
      {isCollapsible && (
        <button
          type="button"
          className="button secondary"
          onClick={() => setIsCollapsed(true)}
        >
          Hide sequence
        </button>
      )}
      {showActionBar && (
        <div className="action-bar button-group">
          <DropdownButton label="Tools" className="tertiary">
            <ul className="no-bullet">
              {onBlastClick && (
                <li>
                  <button
                    className="button tertiary"
                    type="button"
                    onClick={onBlastClick}
                  >
                    BLAST
                  </button>
                </li>
              )}
              {sequenceTools.map((sequenceTool) => (
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
            <a className="button tertiary" href={downloadUrl} download>
              <DownloadIcon />
              Download
            </a>
          )}

          {onAddToBasketClick && (
            <button
              type="button"
              className="button tertiary"
              onClick={onAddToBasketClick}
            >
              <BasketIcon />
              Add
            </button>
          )}

          {getSelectors()}
          <CopyToClipboard
            toCopy={sequence}
            beforeCopy="Copy FASTA"
            afterCopy="Copied"
            className="tertiary"
          />
        </div>
      )}
      {infoData && <InfoList infoData={infoData} isCompact columns />}
      <div className="sequence">
        <div className="sequence__sequence">
          {/* If textSize was not provided, add a text element so it can be measured */}
          {textSize === null ? (
            <svg>
              <text ref={text}>M</text>
            </svg>
          ) : (
            <>
              {chunks.map((chunk, index) => (
                <span
                  className="sequence__sequence__chunk"
                  // eslint-disable-next-line react/no-array-index-key
                  key={`chunk_${index}`}
                >
                  {chunk}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

Sequence.propTypes = {
  /**
   * The sequence
   */
  sequence: PropTypes.string,
  /**
   * The accession corresponding to the sequence
   */
  accession: PropTypes.string,
  /**
   * Action triggered when the "Show sequence" button is clicked.
   * This button will be displayed by default if no sequence is passed
   * down to the component.
   */
  onShowSequence: PropTypes.func,
  /**
   * Display option to show/hide the sequence. If no sequence is
   * provided and `onShowSequence` is defined, this defaults to "true"
   */
  isCollapsible: PropTypes.bool,
  /**
   * If the sequence is loading, display a spinner in the button
   */
  isLoading: PropTypes.bool,
  /**
   * Data to be displayed in an InfoData component above the sequence
   */
  infoData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ),
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
  onBlastClick: PropTypes.func,
  /** Callback which is fired when the Add button is clicked. If no callback
   * is provided then no Add button will be displayed.
   */
  onAddToBasketClick: PropTypes.func,
  showActionBar: PropTypes.bool,
};

Sequence.defaultProps = {
  sequence: null,
  onShowSequence: null,
  isLoading: false,
  infoData: null,
  isCollapsible: false,
  chunkSize: 10,
  accession: null,
  initialTextSize: null,
  downloadUrl: null,
  onBlastClick: null,
  onAddToBasketClick: null,
  showActionBar: true,
};

export default Sequence;
