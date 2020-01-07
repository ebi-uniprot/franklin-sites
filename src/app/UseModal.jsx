import React from 'react';
import PropTypes from 'prop-types';
import { loremIpsum } from 'lorem-ipsum';

import DefaultPageLayout from './layout/DefaultPageLayout';
import { useModal, ModalBackdrop, Window } from '../components';

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
    {loremIpsum({ count: 25, units: 'words' })}
  </Window>
);

DialogWindow.propTypes = {
  className: PropTypes.string,
  handleExitModal: PropTypes.func.isRequired,
};

DialogWindow.defaultProps = {
  className: null,
};

const UseModalContent = () => {
  const { displayModal, setDisplayModal, Modal } = useModal(
    ModalBackdrop,
    DialogWindow
  );

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
          {displayModal && (
            <Modal handleExitModal={() => setDisplayModal(false)} />
          )}
        </div>
      </section>
    </section>
  );
};

const UseModal = () => (
  <DefaultPageLayout
    title="Franklin - useModal"
    content={<UseModalContent />}
  />
);

export default UseModal;
