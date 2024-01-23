import { number, select } from '@storybook/addon-knobs';
import { CSSProperties } from 'react';

import { Bubble as BubbleComponent } from '../src/components';

import colors from '../src/styles/colours.json';

export default {
  title: 'Visualisation/Bubble',
  parameters: {
    purposeFunction: {
      purpose: 'Highlight numbers.',
      function: 'If there is more than 100 items the bubble will show 99+.',
    },
  },
};

export const Bubble = () => (
  <BubbleComponent
    size={select('size', ['small', 'medium', 'large'], 'small', 'Props')}
    style={
      {
        '--main-bubble-color': select(
          '--main-bubble-color',
          colors,
          colors.seaBlue,
          'Custom Properties'
        ),
      } as CSSProperties
    }
  >
    {number(
      'children (bubble number value)',
      20,
      { min: 0, max: 200, step: 0.5 },
      'Props'
    )}
  </BubbleComponent>
);
