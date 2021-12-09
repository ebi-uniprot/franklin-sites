import {
  useState,
  ReactNode,
  useMemo,
  useCallback,
  memo,
  useEffect,
  useRef,
  CSSProperties,
} from 'react';
import {
  InfoList,
  DownloadIcon,
  SpinnerIcon,
  DropdownButton,
  SequenceTools,
  CopyToClipboard,
  Button,
} from '.';

import aminoAcidsProps from './data/amino-acid-properties.json';

import '../styles/components/sequence.scss';

type AminoAcidProperty = {
  name: string;
  aminoAcids: Set<string>;
  colour: string;
};

const aaProps: AminoAcidProperty[] = aminoAcidsProps.map((aaProp) => ({
  ...aaProp,
  // Optimise for later lookup
  aminoAcids: new Set(aaProp.aminoAcids),
}));

const chunksOfTen = /(.{1,10})/g;

const SequenceChunks = memo(
  ({
    sequence,
    computeHighlights,
  }: {
    sequence: string;
    computeHighlights: boolean;
  }) => {
    const ref = useRef<HTMLDivElement>(null);

    const chunks = useMemo(() => sequence.match(chunksOfTen) || [], [sequence]);

    useEffect(() => {
      // Don't run until needed the first time
      if (!computeHighlights) {
        return;
      }
      // OK, we requested a highlight, compute them all at once
      for (const [index, chunk] of chunks.entries()) {
        const boxShadow: string[] = [];

        let xOffset = 0;
        // start at negative values to get closer to the letters
        let yOffset = -3;
        for (const { name, aminoAcids } of aaProps) {
          for (const letter of chunk) {
            if (aminoAcids.has(letter)) {
              boxShadow.push(
                `${xOffset}ch ${yOffset}px 0 1px var(--color-${name}, transparent)`
              );
            }
            xOffset += 10;
          }
          yOffset += 2;
          xOffset = 0;
        }
        const node = ref.current?.children[index] as HTMLElement | undefined;
        if (node) {
          // Avoid React by setting directly on the nodes
          node?.style.setProperty('--box-shadow', boxShadow.join(', '));
        }
      }
    }, [chunks, computeHighlights]);

    return (
      <div className="sequence" ref={ref}>
        {chunks.map((chunk, index) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="sequence__chunk"
          >
            {chunk}
          </span>
        ))}
      </div>
    );
  }
);

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

const Sequence = ({
  sequence,
  accession,
  onShowSequence,
  isCollapsible = false,
  isLoading = false,
  infoData,
  onBlastClick,
  addToBasketButton,
  downloadUrl,
  showActionBar = true,
}: SequenceProps) => {
  const [highlights, setHighlights] = useState<AminoAcidProperty[]>([]);
  const [computeHighlights, setComputeHighlights] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(
    isCollapsible || (onShowSequence && !sequence)
  );

  const handleShowSequenceClick = useCallback(() => {
    setIsCollapsed(false);
    // Request call of sequence
    if (!sequence && onShowSequence) {
      onShowSequence();
    }
  }, [onShowSequence, sequence]);

  const sequenceStyle = useMemo(
    () =>
      Object.fromEntries(
        highlights.map((highlight) => [
          `--color-${highlight.name}`,
          highlight.colour,
        ])
      ),
    [highlights]
  );

  const handleToggleHighlight = useCallback((aaProp: AminoAcidProperty) => {
    setComputeHighlights(true);
    setHighlights((highlights) => {
      const highlightsSet = new Set(highlights);
      if (highlightsSet.has(aaProp)) {
        highlightsSet.delete(aaProp);
      } else {
        highlightsSet.add(aaProp);
      }
      return Array.from(highlightsSet);
    });
  }, []);

  if (isCollapsed || !sequence) {
    return (
      <Button variant="secondary" onClick={handleShowSequenceClick}>
        Show sequence {isLoading && <SpinnerIcon />}
      </Button>
    );
  }

  return (
    <>
      {isCollapsible && (
        <Button variant="secondary" onClick={() => setIsCollapsed(true)}>
          Hide sequence
        </Button>
      )}
      <section className="sequence-container" style={sequenceStyle}>
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
            <DropdownButton label="Highlight" className="tertiary">
              <div className="dropdown-menu__content">
                {aaProps.map((aaProp) => {
                  const inputId = `${accession}-${aaProp.name}`;
                  return (
                    <label key={aaProp.name} htmlFor={inputId}>
                      <input
                        type="checkbox"
                        id={inputId}
                        onChange={() => handleToggleHighlight(aaProp)}
                        checked={highlights.includes(aaProp)}
                        style={{ accentColor: aaProp.colour } as CSSProperties}
                      />
                      {aaProp.name}
                    </label>
                  );
                })}
              </div>
            </DropdownButton>
            <CopyToClipboard
              textToCopy={sequence}
              beforeCopy="Copy FASTA"
              afterCopy="Copied"
              className="tertiary"
            />
          </div>
        )}
        <InfoList infoData={infoData} isCompact columns />
        <SequenceChunks
          sequence={sequence}
          computeHighlights={computeHighlights}
        />
      </section>
    </>
  );
};

export default Sequence;
