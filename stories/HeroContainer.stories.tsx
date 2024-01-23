import { loremIpsum } from 'lorem-ipsum';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { HeroContainer as HeroContainerComponent } from '../src/components';

export default {
  title: 'Layout/Hero Container',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose: 'Differentiate section from others',
      function: 'Highlight a specific section',
    },
  },
};

export const HeroContainer = () => (
  <HeroContainerComponent
    title={text('Title', 'Title', 'Props')}
    noSidePadding={boolean('No side padding', false, 'Props')}
  >
    {loremIpsum({ count: 25, units: 'words' })}
  </HeroContainerComponent>
);
