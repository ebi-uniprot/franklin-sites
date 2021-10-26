import { useState, useEffect, useRef, ReactNode, FC } from 'react';
import InfoList from './info-list';
import DownloadIcon from '../svg/download.svg';
import BasketIcon from '../svg/basket.svg';
import Spinner from '../svg/spinner.svg';
import SequenceChunk from './sequence-chunk';
import CopyToClipboard from './copy-to-clipboard';
import DropdownButton from './dropdown-button';
import SequenceTools from './sequence-tools';

import aminoAcidsProps from './data/amino-acid-properties.json';

import '../styles/components/sequence.scss';

type SequenceProps = {
  /**
   * The sequence
   */
  sequence?: string;
  /**
   * The accession corresponding to the sequence
   */
  accession: string;
  /**
   * Action triggered when the "Show sequence" button is clicked.
   * This button will be displayed by default if no sequence is passed
   * down to the component.
   */
  onShowSequence?: () => void;
  /**
   * Display option to show/hide the sequence. If no sequence is
   * provided and `onShowSequence` is defined, this defaults to "true"
   */
  isCollapsible?: boolean;
  /**
   * If the sequence is loading, display a spinner in the button
   */
  isLoading?: boolean;
  /**
   * Data to be displayed in an InfoData component above the sequence
   */
  infoData?: {
    title: string;
    content: ReactNode;
  }[];
  /**
   * The width and height of a letter. Will be calculated if left blank
   */
  initialTextSize?: {
    width: number;
    height: number;
  }[];
  /**
   * The number of items to include in a sequence chunk. Default 10
   */
  chunkSize?: number;
  /**
   * The URL to download the isoform sequence
   */
  downloadUrl?: string;
  /**
   * Callback which is fired when the BLAST button is clicked. If no callback
   * is provided then no BLAST button will be displayed.
   */
  onBlastClick?: () => void;
  /** Callback which is fired when the Add button is clicked. If no callback
   * is provided then no Add button will be displayed.
   */
  onAddToBasketClick?: () => void;
  showActionBar?: boolean;
};

const Sequence: FC<SequenceProps> = ({
  sequence,
  accession,
  onShowSequence,
  isCollapsible = false,
  isLoading = false,
  infoData,
  chunkSize = 10,
  initialTextSize,
  onBlastClick,
  onAddToBasketClick,
  downloadUrl,
  showActionBar = true,
}) => {
  const [textSize, setTextSize] = useState(initialTextSize);
  const [highlights, setHighlights] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(
    isCollapsible || (onShowSequence && !sequence)
  );
  const text = useRef<SVGTextElement>(null);

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

  const getChunks = (str: string, size: number) => {
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

  const getSelectors = () => (
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
  const chunks = getChunks(sequence, chunkSize);

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
      <section className="sequence-container">
        {showActionBar && (
          <div className="action-bar button-group">
            <DropdownButton label="Tools" className="tertiary">
              <SequenceTools
                accession={accession}
                onBlastClick={onBlastClick}
              />
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
      </section>
    </>
  );
};

export default Sequence;
