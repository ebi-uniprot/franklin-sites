import { ComponentProps, FC, useCallback, useState } from 'react';

import { action } from '@storybook/addon-actions';
import { loremIpsum } from 'lorem-ipsum';

import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  SlidingPanel as SlidingPanelComponent,
} from '../src/components';
import { LRBelowHeader } from '../src/components/sliding-panel';

export type SlidingPanelLR = FC<
  Omit<ComponentProps<typeof SlidingPanelComponent>, 'position'> & LRBelowHeader
>;

const SlidingPanelsWithArrowRender: SlidingPanelLR = ({
  title,
  position,
  size,
}) => {
  const [showPanel, setShowPanel] = useState(false);
  const [arrowX, setArrowX] = useState<number>();

  const buttonRef = useCallback(
    (node: HTMLButtonElement) => {
      if (node) {
        const bcr = node.getBoundingClientRect();
        setArrowX(bcr.x + bcr.width / 2);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [position]
  );

  return (
    <>
      <Button
        onClick={() => {
          setShowPanel(true);
        }}
        style={{
          position: 'absolute',
          top: '1rem',
          left: position === 'left' ? '1rem' : '',
          right: position === 'right' ? '1rem' : '',
        }}
        ref={buttonRef}
      >
        Click me
      </Button>
      {showPanel && (
        <SlidingPanelComponent
          title={title}
          position={position}
          size={size}
          onClose={(reason) => {
            setShowPanel(false);
            action('onClose')(reason);
          }}
          arrowX={arrowX}
          pathname="#"
        >
          {loremIpsum({ count: 25 })}
        </SlidingPanelComponent>
      )}
    </>
  );
};

const meta: Meta<SlidingPanelLR> = {
  title: 'Layout/Sliding Panel',
  component: SlidingPanelComponent as SlidingPanelLR,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full-screen'],
    },
    position: { control: 'select', options: ['right', 'left'] },
  },
  args: {
    title: 'Title',
    size: 'medium',
    position: 'left',
  },
  render: (props) => <SlidingPanelsWithArrowRender {...props} />,
};

export default meta;

type Story = StoryObj<SlidingPanelLR>;

export const SlidingPanelWithArrow: Story = {};
