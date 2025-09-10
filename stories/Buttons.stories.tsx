import { type CSSProperties } from 'react';
import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button as ButtonComponent, DownloadIcon } from '../src/components';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Forms/Button',
  args: {
    onClick: fn(),
  },
  argTypes: {
    color: {
      control: 'select',
      name: '--main-bubble-color',
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
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: ({ color, disabled, onClick }) => (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          Primary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={onClick}
        >
          Secondary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={onClick}
        >
          Tertiary
        </ButtonComponent>
      </div>
    </div>
  ),
};

export const ButtonGroups: Story = {
  render: ({ color, disabled, onClick }) => (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div className="button-group">
        <button className="button tertiary" type="button" onClick={onClick}>
          One
        </button>
        <button className="button tertiary" type="button" onClick={onClick}>
          Two
        </button>
        <button className="button tertiary" type="button" onClick={onClick}>
          Three
        </button>
      </div>
      <div className="button-group">
        <ButtonComponent disabled={disabled} onClick={onClick}>
          One
        </ButtonComponent>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          Two
        </ButtonComponent>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          Three
        </ButtonComponent>
      </div>
      <div className="button-group">
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={onClick}
        >
          One
        </ButtonComponent>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={onClick}
        >
          Two
        </ButtonComponent>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={onClick}
        >
          Three
        </ButtonComponent>
      </div>
      <div className="button-group">
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={onClick}
        >
          One
        </ButtonComponent>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={onClick}
        >
          Two
        </ButtonComponent>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={onClick}
        >
          Three
        </ButtonComponent>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: ({ color, disabled, onClick }) => (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          <DownloadIcon />
          Primary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="secondary"
          disabled={disabled}
          onClick={onClick}
        >
          <DownloadIcon />
          Secondary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="tertiary"
          disabled={disabled}
          onClick={onClick}
        >
          <DownloadIcon />
          Tertiary
        </ButtonComponent>
      </div>
    </div>
  ),
};
