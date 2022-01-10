import { FC } from 'react';

import ModalBackdrop from './modal-backdrop';
import Window from './window/window';
import useModal from '../hooks/modal';

type DialogWindowProps = {
  title: string;
  className?: string;
  width: string;
  height: string;
  handleExitModal: () => void;
  onWindowOpen?: () => void;
  withHeaderCloseButton?: boolean;
  withFooterCloseButton?: boolean;
};

const DialogWindow: FC<DialogWindowProps> = ({
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

type ButtonModalProps = {
  /** The button label */
  buttonText: string;
  /** The modal title */
  title: string;
  /** The width of the modal window */
  width?: string;
  /** The height of the modal window */
  height?: string;
  /** Display the close icon in the header */
  withHeaderCloseButton?: boolean;
  /** Display the close button in the footer */
  withFooterCloseButton?: boolean;
};

const ButtonModal: FC<ButtonModalProps> = ({
  buttonText,
  title,
  width = '70vw',
  height = '70vh',
  withHeaderCloseButton,
  withFooterCloseButton = true,
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

export default ButtonModal;
