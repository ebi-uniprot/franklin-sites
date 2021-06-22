import { CSSProperties } from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button, DownloadIcon } from '../src/components';

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
  select('--main-button-color', colors, colors.seaBlue, 'Custom Properties');
const useDisabled = () => boolean('disabled', false, 'Props');

export const Buttons = () => {
  const color = useColor();
  const disabled = useDisabled();
  return (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <Button disabled={disabled} onClick={action('onClick')}>
          Primary
        </Button>
      </div>
      <div>
        <Button
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Secondary
        </Button>
      </div>
      <div>
        <Button
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Tertiary
        </Button>
      </div>
    </div>
  );
};

export const ButtonGroups = () => {
  const color = useColor();
  const disabled = useDisabled();
  return (
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
        <Button disabled={disabled} onClick={action('onClick')}>
          One
        </Button>
        <Button disabled={disabled} onClick={action('onClick')}>
          Two
        </Button>
        <Button disabled={disabled} onClick={action('onClick')}>
          Three
        </Button>
      </div>
      <div className="button-group">
        <Button
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          One
        </Button>
        <Button
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Two
        </Button>
        <Button
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Three
        </Button>
      </div>
      <div className="button-group">
        <Button
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          One
        </Button>
        <Button
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Two
        </Button>
        <Button
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          Three
        </Button>
      </div>
    </div>
  );
};

export const WithIcon = () => {
  const color = useColor();
  const disabled = useDisabled();
  return (
    <div style={{ '--main-button-color': color } as CSSProperties}>
      <div>
        <Button disabled={disabled} onClick={action('onClick')}>
          <DownloadIcon />
          Primary
        </Button>
      </div>
      <div>
        <Button
          variant="secondary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          <DownloadIcon />
          Secondary
        </Button>
      </div>
      <div>
        <Button
          variant="tertiary"
          disabled={disabled}
          onClick={action('onClick')}
        >
          <DownloadIcon />
          Tertiary
        </Button>
      </div>
    </div>
  );
};
