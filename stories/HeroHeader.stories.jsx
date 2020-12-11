import { loremIpsum } from 'lorem-ipsum';
import { withKnobs, text } from '@storybook/addon-knobs';
import { HeroHeader } from '../src/components';

const useTitle = () => text('Title', 'Title');
const useFooter = () =>
  text('Footer', loremIpsum({ count: 25, units: 'words' }));

export default {
  title: 'Layout/Hero header',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose: 'Provide an entry point',
      function: 'Tell the user what the resource is about and offer a way in',
    },
  },
};

export const heroHeader = () => (
  <HeroHeader title={useTitle()} footer={useFooter()}>
    <input type="text" />
  </HeroHeader>
);
