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
  /**
   * Minimum acceptable number of sequences
   */
  minimumSequences?: number;
  /**
   * Maximum acceptable number of sequences
   */
  maximumSequences?: number;
};

const SequenceSubmission = ({
  value,
  onChange,
  placeholder,
  defaultValue,
  minimumLength,
  minimumSequences,
  maximumSequences,
}: Props) => {
  const [processed, setProcessed] = useState<SequenceObject[]>([]);

  const onChangeWithValidation = useCallback(
    (newValue: string) => {
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

  const errorMessages = [];
  const warningMessages = [];
  if (
    processed.length > 1 ||
    (processed.length === 1 && processed[0].sequence.length > 10)
  ) {
    // loop and match all the errors together, only once
    const uniqueErrors = new Map<
      string,
      Array<{ sequenceIndex: number; sequenceObject: SequenceObject }>
    >();
    // loop and match all the sequences together, only once
    const uniqueSequences = new Map<
      string,
      Array<{ sequenceIndex: number; sequenceObject: SequenceObject }>
    >();
    for (const [index, sequenceObject] of processed.entries()) {
      const { valid, message } = sequenceObject;
      if (!valid && message) {
        const itemList = uniqueErrors.get(message) ?? [];
        itemList.push({ sequenceIndex: index + 1, sequenceObject });
        uniqueErrors.set(message, itemList);
      }

      const sequence = sequenceObject.sequence.toLowerCase();
      const itemList = uniqueSequences.get(sequence) ?? [];
      itemList.push({ sequenceIndex: index + 1, sequenceObject });
      uniqueSequences.set(sequence, itemList);
    }

    for (const [errorMessage, sameErrors] of uniqueErrors.entries()) {
      errorMessages.push(
        <Message
          level="failure"
          data-testid="sequence-submission-error"
          key={sameErrors.map(({ sequenceIndex }) => sequenceIndex).join('-')}
        >
          Error: {errorMessage}. Sequence{sameErrors.length === 1 ? ' ' : 's '}
          {sameErrors.map(
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
          )}
        </Message>
      );
    }

    for (const sameSequences of uniqueSequences.values()) {
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

  const sequenceCountMessage =
    (maximumSequences && processed.length > maximumSequences && (
      <Message level="failure">
        Your input contains {processed.length} sequences which exceeds the
        submission limit of {maximumSequences}.
      </Message>
    )) ||
    (minimumSequences &&
      processed.length &&
      processed.length < minimumSequences && (
        <Message level="failure">
          Your input contains {processed.length} sequence
          {processed.length === 1 ? '' : 's'}. At least {minimumSequences}{' '}
          sequences are required.
        </Message>
      )) ||
    (processed[0] && processed[0].sequence.length > 10 && (
      <Message level="info">
        Your input contains {processed.length} sequence
        {processed.length === 1 ? '' : 's'}.
      </Message>
    ));

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
      {sequenceCountMessage}
      {errorMessages}
      {warningMessages}
    </>
  );
};

export default SequenceSubmission;
