import { action } from '@storybook/addon-actions';
import { loremIpsum } from 'lorem-ipsum';

import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Button,
  SlidingPanel as SlidingPanelComponent,
} from '../src/components';
import { SlidingPanelLR } from './SlidingPanelsWithArrow.stories';

const SlidingPanelInSlidingPanelRender: SlidingPanelLR = ({
  title,
  position,
  size,
}) => {
  const [showPanel, setShowPanel] = useState(false);
  const [showPanel2, setShowPanel2] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowPanel(true)}
        style={{
          position: 'absolute',
          top: '1rem',
          left: position === 'left' ? '1rem' : '',
          right: position === 'right' ? '1rem' : '',
        }}
      >
        Click me
      </Button>
      {showPanel && (
        <SlidingPanelComponent
          title={`Sliding panel 1: ${title}`}
          position={position}
          size={size}
          onClose={(reason) => {
            setShowPanel(false);
            setShowPanel2(false);
            action('onClose 1')(reason);
          }}
          pathname="#"
        >
          <>
            <Button onClick={() => setShowPanel2(true)}>Click me too</Button>
            <br />
            {loremIpsum({ count: 25 })}
            {showPanel2 && (
              <SlidingPanelComponent
                title={`Sliding panel 2: ${title}`}
                position={position}
                size={size}
                onClose={(reason) => {
                  setShowPanel2(false);
                  action('onClose 2')(reason);
                }}
                pathname="#"
              >
                {loremIpsum({ count: 25 })}
              </SlidingPanelComponent>
            )}
          </>
        </SlidingPanelComponent>
      )}
    </>
  );
};

const meta: Meta<SlidingPanelLR> = {
  title: 'Layout/Sliding Panel',
  component: SlidingPanelComponent as SlidingPanelLR,
  parameters: {
    purposeFunction: {
      purpose:
        'Display additional information or options without leaving the page',
      function: 'Overlayed on top of the page, obfuscating part of the page.',
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full-screen'],
      position: {
        control: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
  args: {
    title: 'Title',
    size: 'medium',
    position: 'left',
  },
  render: (props) => <SlidingPanelInSlidingPanelRender {...props} />,
};

export default meta;

type Story = StoryObj<SlidingPanelLR>;

export const SlidingPanelInSlidingPanel: Story = {};
