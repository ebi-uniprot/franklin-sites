import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { loremIpsum } from 'lorem-ipsum';
import { SlidingPanel } from '../src/components';

export default {
  title: 'Layout/Sliding Panel',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose:
        'Display additional information or options without leaving the page',
      function: 'Overlayed on top of the page, obfuscating part of the page.',
    },
  },
};

export const slidingPanel = () => (
  <SlidingPanel
    title={text('Title', 'Title')}
    position={select('Position', ['top', 'right', 'bottom', 'left'], 'left')}
    size={select('Size', ['small', 'medium', 'large', 'full-screen'], 'medium')}
    withCloseButton={boolean('withCloseButton', false)}
    onClose={action('closing')}
    yScrollable={boolean('yScrollable', false)}
    bellowHeader={boolean('bellowHeader', false)}
  >
    {loremIpsum()}
  </SlidingPanel>
);
