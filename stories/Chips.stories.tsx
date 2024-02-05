import { CSSProperties } from 'react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';

import { Chip as ChipComponent } from '../src/components';

import colors from '../src/styles/colours.json';

export default {
  title: 'Core/Chip',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      function: 'Can be used to make selections or trigger actions',
      purpose: 'Display compact discrete information',
    },
  },
};

interface Style extends CSSProperties {
  // TODO: define and extend the supported custom properties in franklin
  // TODO: find a way to expose them globally when using franklin elements
  '--main-chip-color': string;
}

export const Chip = () => (
  <ChipComponent
    title={text('title', 'this is a chip', 'Props')}
    compact={boolean('compact', false, 'Props')}
    disabled={boolean('disabled', false, 'Props')}
    className={select(
      'className',
      ['primary', 'secondary'],
      'primary',
      'Props'
    )}
    style={
      {
        '--main-chip-color': select(
          '--main-chip-color',
          colors,
          colors.sapphireBlue,
          'Custom Properties'
        ),
      } as Style
    }
  >
    Chip content
  </ChipComponent>
);

export const WithClick = () => (
  <>
    <ChipComponent
      title="this is a primary chip"
      onClick={action('click on primary')}
    >
      Primary
    </ChipComponent>
    <ChipComponent className="secondary" onClick={action('click on secondary')}>
      Secondary
    </ChipComponent>
  </>
);

export const WithKeyPress = () => (
  <>
    <ChipComponent
      title="this is a primary chip"
      onKeyPress={action('key press on primary')}
    >
      Primary
    </ChipComponent>
    <ChipComponent
      className="secondary"
      onKeyPress={action('key press on secondary')}
    >
      Secondary
    </ChipComponent>
  </>
);

export const Removable = () => (
  <>
    <ChipComponent onRemove={action('Remove chip')}>Primary</ChipComponent>
    <ChipComponent onRemove={action('Remove chip')} className="secondary">
      Secondary
    </ChipComponent>
  </>
);
