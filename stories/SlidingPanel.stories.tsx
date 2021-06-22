import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
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
  >
    {loremIpsum({ count: 25 })}
  </SlidingPanel>
);

export const slidingPanelWithArrow = () => (
  <SlidingPanel
    title={text('Title', 'Title')}
    position={select('Position', ['right', 'left'], 'left')}
    size={select('Size', ['small', 'medium', 'large', 'full-screen'], 'medium')}
    withCloseButton={boolean('withCloseButton', false)}
    onClose={action('closing')}
    arrowX={number('arrowX', 20)}
  >
    {loremIpsum({ count: 25 })}
  </SlidingPanel>
);
