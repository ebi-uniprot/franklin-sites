import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
} from 'react';
import PropTypes from 'prop-types';
import validateSequences from '../validators/sequenceValidator';
import Message from './message';
import '../styles/components/sequence-submission.scss';

const SequenceSubmission = ({
  value,
  onChange,
  placeholder,
}) => {
  const [error, setError] = useState('');
  const ref = useRef();
  const autoFocus = () => {
    ref.current.focus();
  };

  useEffect(() => autoFocus(), []);

  const onChangeWithValidation = useCallback((newValue) => {
    // Calling the custom 'onChange' callback first
    if (onChange instanceof Function) {
      onChange(newValue);
    }

    // Reset the error value before starting the validation    
    setError('');

    // At the moment we are only supporting one sequence, but we need
    // to send an array to the validator. Here we are sending an array
    // and extracting the first result object off the returned results.
    const result = validateSequences([newValue])[0];

    if (!result.valid) {
      setError(result.message);
    }
  }, [onChange]);

  useEffect(() => {
    if (value) {
      onChangeWithValidation(value);
    }
  }, [value, onChangeWithValidation]);

  return (
    <Fragment>
      <textarea
        className="sequence-submission-input"
        defaultValue={value}
        onChange={e => onChangeWithValidation(e.target.value)}
        placeholder={placeholder}
        ref={ref}
        data-testid="sequence-submission-input"
      />
      {(error) && (
        <Message
          level='failure'
          data-testid='sequence-submission-error'
        >
          {error}
        </Message>
      )}
    </Fragment>
  );
};

SequenceSubmission.propTypes = {
  /**
   * The pre-loaded value, if needed.
   */
  value: PropTypes.string,
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
  onChange: undefined,
  placeholder: undefined,
};

export default SequenceSubmission;
