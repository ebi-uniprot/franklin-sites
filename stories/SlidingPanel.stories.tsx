import { useCallback, useState } from 'react';
// Part of '@storybook/addon-essentials'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { loremIpsum } from 'lorem-ipsum';

import { Button, SlidingPanel } from '../src/components';

export default {
  title: 'Layout/Sliding Panel',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose:
        'Display additional information or options without leaving the page',
      function: 'Overlayed on top of the page, obfuscating part of the page.',
    },
  },
};

const usePosition = () =>
  select('Position', ['top', 'right', 'bottom', 'left'], 'left');
const usePositionLR = () => select('Position', ['right', 'left'], 'left');

const useTitle = () => text('Title', 'Title');
const useSize = () =>
  select('Size', ['small', 'medium', 'large', 'full-screen'], 'medium');

export const SlidingPanels = () => {
  const title = useTitle();
  const position = usePosition();
  const size = useSize();

  return (
    <SlidingPanel
      title={title}
      position={position}
      size={size}
      onClose={action('Closing')}
      pathname="#"
    >
      {loremIpsum({ count: 25 })}
    </SlidingPanel>
  );
};

export const SlidingPanelsWithArrow = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [arrowX, setArrowX] = useState<number>();

  const position = usePositionLR();
  const title = useTitle();
  const size = useSize();

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
        <SlidingPanel
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
        </SlidingPanel>
      )}
    </>
  );
};

export const SlidingPanelInSlidingPanel = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [showPanel2, setShowPanel2] = useState(false);

  const position = usePositionLR();
  const title = useTitle();
  const size = useSize();

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
        <SlidingPanel
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
              <SlidingPanel
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
              </SlidingPanel>
            )}
          </>
        </SlidingPanel>
      )}
    </>
  );
};
