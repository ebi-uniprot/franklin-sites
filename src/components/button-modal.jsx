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
    onWindowOpen={() => null}
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
  width: PropTypes.string,
  height: PropTypes.string,
  handleExitModal: PropTypes.func.isRequired,
  withHeaderCloseButton: PropTypes.bool,
  withFooterCloseButton: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DialogWindow.defaultProps = {
  className: null,
};

const ButtonModal = ({
  buttonText,
  title,
  width,
  height,
  withHeaderCloseButton,
  withFooterCloseButton,
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
};

ButtonModal.defaultProps = {
  width: '70vw',
  height: '70vh',
  withHeaderCloseButton: false,
  withFooterCloseButton: true,
};

export default ButtonModal;
