import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/modal.scss';

export default function useModal(Backdrop, Content) {
  const [displayModal, setDisplayModal] = useState(false);
  const Modal = ({
    children,
    title,
    width,
    height,
    handleExitModal,
    withHeaderCloseButton,
    withFooterCloseButton,
    ...rest
  }) => (
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

  Modal.propTypes = {
    children: PropTypes.oneOfType(
      [PropTypes.arrayOf(PropTypes.node), PropTypes.node],
    ).isRequired,
    title: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    handleExitModal: PropTypes.func.isRequired,
    withHeaderCloseButton: PropTypes.bool,
    withFooterCloseButton: PropTypes.bool,
  };

  Modal.defaultProps = {
    title: null,
    width: '50vw',
    height: '50vh',
    withHeaderCloseButton: false,
    withFooterCloseButton: false,
  };

  return {
    displayModal,
    setDisplayModal,
    Modal,
  };
}
