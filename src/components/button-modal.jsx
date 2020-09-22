import React from 'react';
import PropTypes from 'prop-types';
import ModalBackdrop from './modal-backdrop';
import Window from './window/window';
import useModal from '../hooks/modal';

const DialogWindow = ({
  title,
  width,
  height,
  className,
  handleExitModal,
  onWindowOpen,
  withHeaderCloseButton,
  withFooterCloseButton,
  children,
}) => (
  <Window
    width={width}
    height={height}
    title={title}
    withHeaderCloseButton={withHeaderCloseButton}
    withFooterCloseButton={withFooterCloseButton}
    onWindowOpen={onWindowOpen}
    onWindowClose={handleExitModal}
    withShadow
    className={className}
  >
    {children}
  </Window>
);

DialogWindow.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  handleExitModal: PropTypes.func.isRequired,
  onWindowOpen: PropTypes.func,
  withHeaderCloseButton: PropTypes.bool.isRequired,
  withFooterCloseButton: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DialogWindow.defaultProps = {
  className: null,
  onWindowOpen: () => null,
};

const ButtonModal = ({
  buttonText,
  title,
  width,
  height,
  withHeaderCloseButton,
  withFooterCloseButton,
  onWindowOpen,
  children,
}) => {
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
        <Modal
          handleExitModal={() => setDisplayModal(false)}
          title={title}
          width={width}
          height={height}
          withHeaderCloseButton={withHeaderCloseButton}
          withFooterCloseButton={withFooterCloseButton}
          onWindowOpen={onWindowOpen}
        >
          {children}
        </Modal>
      )}
    </div>
  );
};

ButtonModal.propTypes = {
  /** The button label */
  buttonText: PropTypes.string.isRequired,
  /** The modal title */
  title: PropTypes.string.isRequired,
  /** The modal content */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** The width of the modal window */
  width: PropTypes.string,
  /** The height of the modal window */
  height: PropTypes.string,
  /** Display the close icon in the header */
  withHeaderCloseButton: PropTypes.bool,
  /** Display the close button in the footer */
  withFooterCloseButton: PropTypes.bool,
  /** Executed when the modal opens */
  onWindowOpen: PropTypes.func,
};

ButtonModal.defaultProps = {
  width: '70vw',
  height: '70vh',
  withHeaderCloseButton: false,
  withFooterCloseButton: true,
  onWindowOpen: () => null,
};

export default ButtonModal;
