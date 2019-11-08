import React, { useState } from 'react';

import '../styles/components/modal.scss';

export default function useModal(Backdrop, Content) {
  const [displayModal, setDisplayModal] = useState(false);
  const Modal = props => (
    <div className="modal">
      <Backdrop className="modal__backdrop--visible" {...props} />
      <Content className="modal__content" {...props} />
    </div>
  );

  return {
    displayModal,
    setDisplayModal,
    Modal,
  };
}
