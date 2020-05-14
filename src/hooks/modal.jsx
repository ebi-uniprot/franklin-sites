import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/modal.scss';

export default function useModal(Backdrop, Content) {
  const [displayModal, setDisplayModal] = useState(false);
  const Modal = ({
    children,
    layout,
    ...props
  }) => (
    <div className="modal">
      <Backdrop className="modal__backdrop--visible" {...props} />
      <Content className="modal__content" {...props}>
        {children}
      </Content>
    </div>
  );

  Modal.propTypes = {
    children: PropTypes.oneOfType(
      [PropTypes.arrayOf(PropTypes.node), PropTypes.node],
    ).isRequired,
    layout: PropTypes.string,
  };

  Modal.defaultProps = {
    layout: undefined,
  };

  return {
    displayModal,
    setDisplayModal,
    Modal,
  };
}


