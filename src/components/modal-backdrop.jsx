import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ModalBackdrop = (props) => {
  const {
    className,
    handleExitModal,
    ...otherProps
  } = props;

  const bodayTag = document.getElementsByTagName('body')[0];
  bodayTag.classList.add('modal__body');

  // clean-up, when component unmounts.
  useEffect(() => () => bodayTag.classList.remove('modal__body'));

  return (
    <div
      className={`modal__backdrop ${className}`}
      onClick={handleExitModal}
      role="dialog"
      aria-hidden
      {...otherProps}
    />
  );
};

ModalBackdrop.propTypes = {
  className: PropTypes.string,
  handleExitModal: PropTypes.func.isRequired,
};

ModalBackdrop.defaultProps = {
  className: null,
};

export default ModalBackdrop;
