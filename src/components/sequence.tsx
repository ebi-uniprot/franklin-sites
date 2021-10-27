import { useState, useEffect, useRef, ReactNode, FC } from 'react';
import {
  InfoList,
  DownloadIcon,
  SpinnerIcon,
  DropdownButton,
  SequenceTools,
} from '.';
import SequenceChunk from './sequence-chunk';
import CopyToClipboard from './copy-to-clipboard';

import aminoAcidsProps from './data/amino-acid-properties.json';

import '../styles/components/sequence.scss';

type AminoAcidProperty = {
  name: string;
  aminoAcids: string[];
  colour: string;
};

type SequenceProps = {
  /**
   * The sequence
   */
  sequence?: string;
  /**
   * The accession corresponding to the sequence
   */
  accession?: string;
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
  };
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
  addToBasketButton?: ReactNode;
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
  addToBasketButton,
  downloadUrl,
  showActionBar = true,
}) => {
  const [textSize, setTextSize] = useState(initialTextSize);
  const [highlights, setHighlights] = useState<AminoAcidProperty[]>([]);
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
          Show sequence {isLoading && <SpinnerIcon />}
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

  const handleToggleHighlight = (aaProp: AminoAcidProperty) => {
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
        {showActionBar && accession && (
          <div className="action-bar button-group">
            <SequenceTools accession={accession} onBlastClick={onBlastClick} />
            {downloadUrl && (
              <a className="button tertiary" href={downloadUrl} download>
                <DownloadIcon />
                Download
              </a>
            )}
            {addToBasketButton}
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
            {!textSize ? (
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
