import { loremIpsum } from 'lorem-ipsum';
import { withKnobs, text } from '@storybook/addon-knobs';

import { HeroHeader as HH } from '../src/components';

const useTitle = () => text('Title', 'Title');
const useFooter = () =>
  text('Footer', loremIpsum({ count: 25, units: 'words' }));

export default {
  title: 'Layout/Hero Header',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose: 'Provide an entry point',
      function: 'Tell the user what the resource is about and offer a way in',
    },
  },
};

export const HeroHeader = () => (
  <HH title={useTitle()} footer={useFooter()}>
    <input type="text" />
  </HH>
);
