import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import sequenceProcessor from '../sequence-utils/sequence-processor';
import Message from './message';

import '../styles/components/sequence-submission.scss';

const SequenceSubmission = ({ value, onChange, placeholder, defaultValue }) => {
  const [processed, setProcessed] = useState([]);

  const onChangeWithValidation = useCallback(
    newValue => {
      const processed = sequenceProcessor(newValue);
      setProcessed(processed);

      // Calling the custom 'onChange' callback first
      if (onChange instanceof Function) {
        onChange(processed);
      }
    },
    [onChange]
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
    for (let i = 0; i < processed.length; i += 1) {
      for (let j = i + 1; j < processed.length; j += 1) {
        const a = processed[i];
        const b = processed[j];
        if (a.sequence.toLowerCase() === b.sequence.toLowerCase()) {
          // use index to name the sequences, because name might be the same
          warningMessages.push(
            <Message
              level="info"
              data-testid="sequence-submission-warning"
              // eslint-disable-next-line react/no-array-index-key
              key={`${i}-${j}`}
            >
              Sequences {i + 1}
              {a.name ? ` (${a.name})` : ''} and {j + 1}
              {b.name ? ` (${b.name})` : ''} are identical, this might be
              unintended.
            </Message>
          );
        }
      }
    }
  }

  return (
    <>
      <textarea
        className="sequence-submission-input"
        value={value}
        onChange={e => onChangeWithValidation(e.target.value)}
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

SequenceSubmission.propTypes = {
  /**
   * The value, if needed.
   */
  value: PropTypes.string,
  /**
   * The default value, if needed.
   */
  defaultValue: PropTypes.string,
  /**
   * Triggers when the value is changed.
   */
  onChange: PropTypes.func,
  /**
   * Display text when the textarea is empty.
   */
  placeholder: PropTypes.string,
};

SequenceSubmission.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  onChange: undefined,
  placeholder: undefined,
};

export default SequenceSubmission;
