import { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { loremIpsum } from 'lorem-ipsum';

import { Button, Tile as TileComponent } from '../src/components';

import SVG from '../assets/uniprotkb_illustration.svg';

type StoryProps = React.ComponentProps<typeof TileComponent> & {
  containerSize: string;
  withBackgroundImage: boolean;
  buttonInDescription: boolean;
};

const meta: Meta<StoryProps> = {
  title: 'Navigation/Tile',
  component: TileComponent,
  argTypes: {
    headingLevel: {
      control: 'select',
      choices: ['h1', 'h2', 'h3', 'h4', 'h5'],
    },
    backgroundColor: {
      control: 'select',
      name: '--tile-background',
      options: [
        'var(--fr--color-sapphire-blue)',
        'var(--fr--color-sea-blue)',
        'var(--fr--color-vivid-cerulean)',
        'var(--fr--color-medium-turquoise)',
        'var(--fr--color-gainsborough)',
        'white',
        'blue',
      ],
    },
  },
  args: {
    headingLevel: 'h3',
    title: 'title',
    subtitle: 'subtitle',
    backgroundColor: 'var(--fr--color-sea-blue)',
    containerSize: '40%',
    buttonInDescription: false,
  },
  render: ({
    title,
    headingLevel,
    containerSize,
    withBackgroundImage,
    subtitle,
    gradient,
    descriptionSlideUp,
    buttonInDescription,
    backgroundColor,
  }) => (
    <div style={{ width: containerSize }}>
      <TileComponent
        title={title}
        headingLevel={headingLevel}
        backgroundColor={backgroundColor}
        backgroundImage={withBackgroundImage ? <SVG /> : null}
        subtitle={subtitle}
        gradient={gradient}
        descriptionSlideUp={descriptionSlideUp}
        // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content
        link={<a />}
      >
        {loremIpsum()}
        {buttonInDescription && (
          <div>
            <Button onClick={action('description button clicked')}>
              Some button
            </Button>
          </div>
        )}
      </TileComponent>
    </div>
  ),
};

export default meta;

type Story = StoryObj<StoryProps>;

export const BasicTile: Story = {};
