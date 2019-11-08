import React from 'react';
import PropTypes from 'prop-types';

import useModal from '../hooks/modal';
import ModalBackdrop from '../components/modal-backdrop';
import Window from '../components/window/window';

const DialogWindow = ({ className, handleExitModal }) => (
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
    Hello, World!
  </Window>
);

DialogWindow.propTypes = {
  className: PropTypes.string,
  handleExitModal: PropTypes.func.isRequired,
};

DialogWindow.defaultProps = {
  className: null,
};

const Modals = () => {
  const { displayModal, setDisplayModal, Modal } = useModal(ModalBackdrop, DialogWindow);

  return (
    <section className="atoms-section" id="modals">
      <h1>Modals</h1>
      <section>
        <h3>Basic</h3>
        <div>
          <button
            onClick={() => setDisplayModal(true)}
            className="button"
            type="button"
          >
            Display Modal
          </button>
          {displayModal && <Modal handleExitModal={() => setDisplayModal(false)} />}
        </div>
      </section>
    </section>
  );
};

export default Modals;
