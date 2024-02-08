import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';

import { loremIpsum } from 'lorem-ipsum';

import { Tile } from '../src/components';

import SVG from '../assets/uniprotkb_illustration.svg';
import colors from '../src/styles/colours.json';

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

export const BasicTile = () => (
  <div style={{ width: text('Container size', '40%', 'ContainerProps') }}>
    <Tile
      title={text('title', 'Title', 'Props')}
      headingLevel={select(
        'headingLevel',
        ['h1', 'h2', 'h3', 'h4', 'h5'],
        'h3',
        'Props'
      )}
      backgroundColor={select(
        '--tile-background',
        colors,
        colors.seaBlue,
        'Custom Properties'
      )}
      backgroundImage={boolean('with background?', false) ? <SVG /> : null}
      subtitle={text('subtitle', 'subtitle', 'Props')}
      gradient={boolean('gradient', false, 'Props')}
      descriptionSlideUp={boolean('Slide up description', false, 'Props')}
      // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content
      link={<a />}
    >
      {loremIpsum()}
      {boolean('button in description', false) ? (
        <button
          type="button"
          onClick={action('description button clicked')}
          style={{ color: 'currentcolor', background: 'black' }}
        >
          Some button
        </button>
      ) : null}
    </Tile>
  </div>
);
