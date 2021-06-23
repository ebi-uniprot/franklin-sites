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
const useTitle = () => text('Title', 'Title');
const useSize = () =>
  select('Size', ['small', 'medium', 'large', 'full-screen'], 'medium');
const useWithCloseButton = () => boolean('withCloseButton', false);
const useWithArrow = () => boolean('withArrow', false);

export const SlidingPanels = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [arrowX, setArrowX] = useState();

  const position = usePosition();
  const title = useTitle();
  const size = useSize();
  const withCloseButton = useWithCloseButton();
  const withArrow =
    useWithArrow() && (position === 'left' || position === 'right');

  const buttonRef = useCallback(
    (node) => {
      if (node) {
        if ((withArrow && position === 'left') || position === 'right') {
          const bcr = node.getBoundingClientRect();
          setArrowX(bcr.x + bcr.width / 2);
        }
      }
    },
    [withArrow, position]
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
