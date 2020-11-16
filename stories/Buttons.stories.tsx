import React, { CSSProperties } from 'react';

import { Button } from '../src/components';
import { DownloadIcon } from '../src/components';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import colors from '../src/styles/colours.json';

export default {
  title: 'Forms/Button',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

const useColor = () =>
  select(
    '--main-button-color',
    { ...colors, primary: '#1779ba' },
    '#1779ba',
    'Custom Properties'
  );
const useDisabled = () => boolean('disabled', false, 'Props');

export const buttons = () => {
  const color = useColor();
  const disabled = useDisabled();
  return (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <button className="button" type="button">
          Primary
        </button>
      </div>
      <div>
        <button className="button secondary" type="button">
          Secondary
        </button>
      </div>
      <div>
        <button className="button tertiary" type="button">
          Tertiary
        </button>
      </div>
      <div>
        <Button disabled={disabled}>Primary</Button>
      </div>
      <div>
        <Button variant="secondary" disabled={disabled}>
          Secondary
        </Button>
      </div>
      <div>
        <Button variant="tertiary" disabled={disabled}>
          Tertiary
        </Button>
      </div>
    </div>
  );
};

export const buttonGroups = () => {
  const color = useColor();
  const disabled = useDisabled();
  return (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div className="button-group">
        <button className="button" type="button">
          One
        </button>
        <button className="button" type="button">
          Two
        </button>
        <button className="button" type="button">
          Three
        </button>
      </div>
      <div className="button-group">
        <button className="button secondary" type="button">
          One
        </button>
        <button className="button secondary" type="button">
          Two
        </button>
        <button className="button secondary" type="button">
          Three
        </button>
      </div>
      <div className="button-group">
        <button className="button tertiary" type="button">
          One
        </button>
        <button className="button tertiary" type="button">
          Two
        </button>
        <button className="button tertiary" type="button">
          Three
        </button>
      </div>
      <div className="button-group">
        <Button disabled={disabled}>One</Button>
        <Button disabled={disabled}>Two</Button>
        <Button disabled={disabled}>Three</Button>
      </div>
      <div className="button-group">
        <Button variant="secondary" disabled={disabled}>
          One
        </Button>
        <Button variant="secondary" disabled={disabled}>
          Two
        </Button>
        <Button variant="secondary" disabled={disabled}>
          Three
        </Button>
      </div>
      <div className="button-group">
        <Button variant="tertiary" disabled={disabled}>
          One
        </Button>
        <Button variant="tertiary" disabled={disabled}>
          Two
        </Button>
        <Button variant="tertiary" disabled={disabled}>
          Three
        </Button>
      </div>
    </div>
  );
};

export const withIcon = () => {
  const color = useColor();
  const disabled = useDisabled();
  return (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <button className="button" type="button">
          <DownloadIcon />
          Primary
        </button>
      </div>
      <div>
        <button className="button secondary" type="button">
          <DownloadIcon />
          Secondary
        </button>
      </div>
      <div>
        <button className="button tertiary" type="button">
          <DownloadIcon />
          Tertiary
        </button>
      </div>
      <div>
        <Button disabled={disabled}>
          <DownloadIcon />
          Primary
        </Button>
      </div>
      <div>
        <Button variant="secondary" disabled={disabled}>
          <DownloadIcon />
          Secondary
        </Button>
      </div>
      <div>
        <Button variant="tertiary" disabled={disabled}>
          <DownloadIcon />
          Tertiary
        </Button>
      </div>
    </div>
  );
};
