import { useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
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
const useWithCloseButton = () => boolean('withCloseButton', false);

export const SlidingPanels = () => {
  const title = useTitle();
  const position = usePosition();
  const size = useSize();
  const withCloseButton = useWithCloseButton();

  return (
    <SlidingPanel
      title={title}
      position={position}
      size={size}
      withCloseButton={withCloseButton}
      onClose={() => action('Closing')}
    >
      {loremIpsum({ count: 25 })}
    </SlidingPanel>
  );
};

export const SlidingPanelsWithArrow = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [arrowX, setArrowX] = useState();

  const position = usePositionLR();
  const title = useTitle();
  const size = useSize();
  const withCloseButton = useWithCloseButton();

  const buttonRef = useCallback(
    (node) => {
      if (node) {
        const bcr = node.getBoundingClientRect();
        setArrowX(bcr.x + bcr.width / 2);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [position]
  );

  const onButtonClick = () => {
    setShowPanel(true);
  };

  const onClose = () => {
    setShowPanel(false);
    action('onClose');
  };

  return (
    <>
      <Button
        onClick={onButtonClick}
        style={{
          position: 'absolute',
          top: '-2rem',
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
          withCloseButton={withCloseButton}
          onClose={onClose}
          arrowX={arrowX}
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
  const withCloseButton = useWithCloseButton();

  return (
    <>
      <Button
        onClick={() => setShowPanel(true)}
        style={{
          position: 'absolute',
          top: '-2rem',
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
          withCloseButton={withCloseButton}
          onClose={() => {
            setShowPanel(false);
            setShowPanel2(false);
            action('onClose 1');
          }}
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
                withCloseButton={withCloseButton}
                onClose={() => {
                  setShowPanel2(false);
                  action('onClose 2');
                }}
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
