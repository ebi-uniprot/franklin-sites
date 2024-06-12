import { loremIpsum } from 'lorem-ipsum';

import { ButtonModal } from '../src/components';

export default {
  title: 'Layout/Modal',
};

export const Modal = () => (
  <ButtonModal buttonText="click me" title="Example modal window">
    {loremIpsum({ count: 45 })}
  </ButtonModal>
);
