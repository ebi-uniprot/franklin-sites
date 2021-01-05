import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Tile } from '../src/components';
import SVG from '../assets/uniprotkb_illustration.svg';
import colors from '../src/styles/colours';
import { loremIpsum, LoremIpsum } from 'lorem-ipsum';

export default {
  title: 'Navigation/Tile',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose:
        'Advertise a specific dataset of the website and provide searchable access to it.',
      function:
        'Provide a sneak peak and navigate to a searchable data section of the website.',
    },
  },
};

const useColor = () =>
  select(
    '--tile-background',
    colors,
    colors.colourUniprotkb,
    'Custom Properties'
  );

export const tile = () => (
  <Tile
    title="Title"
    backgroundColor={useColor()}
    subtitle="Subtitle"
    description={loremIpsum()}
    width="20rem"
    onClick={action('clicked')}
  />
);

export const tileWithGradient = () => (
  <Tile
    title="Title"
    backgroundColor={useColor()}
    subtitle="Subtitle"
    description={loremIpsum()}
    gradient
    width="20rem"
    onClick={action('clicked')}
  />
);

export const tileWithContainer = () => (
  <div style={{ width: '40%' }}>
    <Tile
      title="Title"
      backgroundColor={useColor()}
      subtitle="Subtitle"
      description={loremIpsum()}
      gradient
      onClick={action('clicked')}
    />
  </div>
);

export const tileWithBackgroundImage = () => (
  <Tile
    title="Title"
    backgroundColor={useColor()}
    gradient
    subtitle="Subtitle"
    description={loremIpsum({ count: 1, units: 'paragraph' })}
    backgroundImage={<SVG />}
    onClick={action('clicked')}
    width="20rem"
  />
);
