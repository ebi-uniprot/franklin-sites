import { useState, useEffect, useCallback, Fragment } from 'react';

import sequenceProcessor, {
  SequenceObject,
} from '../sequence-utils/sequence-processor';
import Message from './message';

import '../styles/components/sequence-submission.scss';

type Props = {
  /**
   * The value, if needed.
   */
  value?: string;
  /**
   * The default value, if needed.
   */
  defaultValue?: string;
  /**
   * Triggers when the value is changed.
   */
  onChange?: (processed: SequenceObject[]) => void;
  /**
   * Display text when the textarea is empty.
   */
  placeholder?: string;
  /**
   * Minimum acceptable length for a sequence
   */
  minimumLength?: number;
};

const SequenceSubmission = ({
  value,
  onChange,
  placeholder,
  defaultValue,
  minimumLength,
}: Props) => {
  const [processed, setProcessed] = useState<SequenceObject[]>([]);

  const onChangeWithValidation = useCallback(
    (newValue) => {
      const processed = sequenceProcessor(newValue, minimumLength);
      setProcessed(processed);

      // Calling the custom 'onChange' callback first
      onChange?.(processed);
    },
    [onChange, minimumLength]
  );

  useEffect(() => {
    if (value || value === '') {
      onChangeWithValidation(value);
    } else if (defaultValue || defaultValue === '') {
      onChangeWithValidation(defaultValue);
    }
  }, [value, defaultValue, onChangeWithValidation]);

  let errorMessages = null;
  if (
    processed.length > 1 ||
    (processed.length === 1 && processed[0].sequence.length > 10)
  ) {
    errorMessages = processed
      .map(
        (item, index) =>
          !item.valid && (
            <Message
              level="failure"
              data-testid="sequence-submission-error"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <code>{item.name || `sequence ${index + 1}`}</code>:&nbsp;
              {item.message}
            </Message>
          )
      )
      .filter(Boolean);
  }

  const warningMessages = [];
  if (processed.length > 1) {
    // loop and match all the sequences together, only once
    const unique = new Map<
      string,
      Array<{ sequenceIndex: number; sequenceObject: SequenceObject }>
    >();
    for (const [index, sequenceObject] of processed.entries()) {
      const sequence = sequenceObject.sequence.toLowerCase();
      const itemList = unique.get(sequence) ?? [];
      itemList.push({ sequenceIndex: index + 1, sequenceObject });
      unique.set(sequence, itemList);
    }
    for (const sameSequences of unique.values()) {
      if (sameSequences.length > 1) {
        warningMessages.push(
          <Message
            level="info"
            key={sameSequences
              .map(({ sequenceIndex }) => sequenceIndex)
              .join('-')}
          >
            Sequences{' '}
            {sameSequences.map(
              ({ sequenceIndex, sequenceObject: { name } }, index) => (
                <Fragment key={sequenceIndex}>
                  {index ? ', ' : ''}
                  {sequenceIndex}{' '}
                  {name ? (
                    <>
                      (<code>{name}</code>)
                    </>
                  ) : (
                    ''
                  )}
                </Fragment>
              )
            )}{' '}
            are identical, this might be unintended.
          </Message>
        );
      }
    }
  }

  return (
    <>
      <textarea
        className="sequence-submission-input"
        value={value}
        onChange={(e) => onChangeWithValidation(e.target.value)}
        placeholder={placeholder}
        data-testid="sequence-submission-input"
        defaultValue={defaultValue}
        spellCheck="false"
      />
      {processed[0] && processed[0].sequence.length > 10 && (
        <Message level="info">
          Your input contains {processed.length} sequence
          {processed.length === 1 ? '' : 's'}
        </Message>
      )}
      {errorMessages}
      {warningMessages}
    </>
  );
};

export default SequenceSubmission;
