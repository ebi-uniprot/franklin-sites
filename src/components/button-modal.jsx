import React from 'react';
import PropTypes from 'prop-types';
import ModalBackdrop from './modal-backdrop';
import Window from './window/window';
import useModal from '../hooks/modal';

const DialogWindow = ({ className, handleExitModal, children }) => (
  <Window
    width="20rem"
    height="15rem"
    title="Alert"
    withHeaderCloseButton
    withFooterCloseButton
    onWindowOpen={() => null}
    onWindowClose={handleExitModal}
    withShadow
    key="full-featured-window"
    className={className}
  >
    {children}
  </Window>
);

DialogWindow.propTypes = {
  className: PropTypes.string,
  handleExitModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DialogWindow.defaultProps = {
  className: null,
};

const ButtonModal = ({ buttonText, title, children }) => {
  const { displayModal, setDisplayModal, Modal } = useModal(
    ModalBackdrop,
    DialogWindow
  );
  return (
    <div>
      <button
        onClick={() => setDisplayModal(true)}
        className="button"
        type="button"
      >
        {buttonText}
      </button>
      {displayModal && (
        <Modal handleExitModal={() => setDisplayModal(false)} title={title}>
          {children}
        </Modal>
      )}
    </div>
  );
};

ButtonModal.propTypes = {
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ButtonModal;
