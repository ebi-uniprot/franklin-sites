import { useState, FC, ReactNode } from 'react';

import '../styles/components/modal.scss';

type Props = {
  title?: string;
  width?: string;
  height?: string;
  handleExitModal: () => void;
  withHeaderCloseButton?: boolean;
  withFooterCloseButton?: boolean;
  children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useModal(Backdrop: FC<any>, Content: FC<any>) {
  const [displayModal, setDisplayModal] = useState(false);
  const Modal = ({
    children,
    title,
    width = '50vw',
    height = '50vh',
    handleExitModal,
    withHeaderCloseButton,
    withFooterCloseButton,
    ...rest
  }: Props) => (
    <div className="modal">
      <Backdrop
        className="modal__backdrop--visible"
        handleExitModal={handleExitModal}
        {...rest}
      />
      <Content
        className="modal__content"
        title={title}
        width={width}
        height={height}
        handleExitModal={handleExitModal}
        withHeaderCloseButton={withHeaderCloseButton}
        withFooterCloseButton={withFooterCloseButton}
        {...rest}
      >
        {children}
      </Content>
    </div>
  );

  return {
    displayModal,
    setDisplayModal,
    Modal,
  };
}
