import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ModalBackdrop = ({
  className,
  handleExitModal,
  onWindowOpen,
  ...otherProps
}) => {
  const bodyTag = document.body;
  bodyTag.classList.add('modal__body');

  // onWindowOpen not used but leads to console warning as added as
  // attribute. Long term should probably rename prop

  // clean-up, when component unmounts.
  useEffect(() => () => bodyTag.classList.remove('modal__body'));

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
  onWindowOpen: PropTypes.func,
};

ModalBackdrop.defaultProps = {
  className: null,
  onWindowOpen: () => null,
};

export default ModalBackdrop;
