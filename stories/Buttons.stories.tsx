import { CSSProperties } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent, DownloadIcon } from '../src/components';

import colors from '../src/styles/colours.json';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Forms/Button',
  argTypes: {
    color: { control: 'select', name: '--main-bubble-color', options: colors },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: ({ color, disabled }) => (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <ButtonComponent disabled={disabled} onClick={action('onClick')}>
          Primary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Secondary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Tertiary
        </ButtonComponent>
      </div>
    </div>
  ),
};

export const ButtonGroups: Story = {
  render: ({ color, disabled }) => (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div className="button-group">
        <button
          className="button tertiary"
          type="button"
          onClick={action('onClick')}
        >
          One
        </button>
        <button
          className="button tertiary"
          type="button"
          onClick={action('onClick')}
        >
          Two
        </button>
        <button
          className="button tertiary"
          type="button"
          onClick={action('onClick')}
        >
          Three
        </button>
      </div>
      <div className="button-group">
        <ButtonComponent disabled={disabled} onClick={action('onClick')}>
          One
        </ButtonComponent>
        <ButtonComponent disabled={disabled} onClick={action('onClick')}>
          Two
        </ButtonComponent>
        <ButtonComponent disabled={disabled} onClick={action('onClick')}>
          Three
        </ButtonComponent>
      </div>
      <div className="button-group">
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          One
        </ButtonComponent>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Two
        </ButtonComponent>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Three
        </ButtonComponent>
      </div>
      <div className="button-group">
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          One
        </ButtonComponent>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Two
        </ButtonComponent>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Three
        </ButtonComponent>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: ({ color, disabled }) => (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <ButtonComponent disabled={disabled} onClick={action('onClick')}>
          <DownloadIcon />
          Primary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          <DownloadIcon />
          Secondary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          <DownloadIcon />
          Tertiary
        </ButtonComponent>
      </div>
    </div>
  ),
};
