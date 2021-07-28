import { FC, useRef, useEffect, ReactNode, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

import { Button, CloseIcon } from './index';

import '../styles/components/sliding-panel.scss';

type LRBelowHeader = {
  /**
   * Where the sliding panel should appear
   */
  position: 'left' | 'right';
  /**
   * Horizontal position of the arrow if the panel appears below the page header.
   * Also works as a flag to display the arrow and display below the header
   */
  arrowX?: number;
};

type TBSlidingPanel = {
  /**
   * Where the sliding panel should appear
   */
  position: 'top' | 'bottom';
  arrowX?: never;
};

type SlidingPanelProps = {
  /**
   * What happens when close is triggered. Responsability of the user of the compoent
   */
  onClose: (arg: void) => void;
  /**
   * Size of the panel once opened
   */
  size?: 'small' | 'medium' | 'large' | 'full-screen';
  /**
   * Title of the panel
   */
  title?: ReactNode;
  /**
   * Add a close button in the panel header
   */
  withCloseButton?: boolean;
} & (LRBelowHeader | TBSlidingPanel);

const SlidingPanel: FC<
  SlidingPanelProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'>
> = ({
  children,
  onClose,
  position,
  size = 'medium',
  title,
  withCloseButton = false,
  arrowX,
  className,
  ...props
}) => {
  const node = useRef<HTMLDivElement>(null);

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Handle closing the sliding panel when there's a click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // loop through all the currently opened panels
      for (const panel of document.querySelectorAll<HTMLDivElement>(
        '.sliding-panel'
      )) {
        // if the click event was within one, bail out of the whole function
        if (panel.contains(e.target as Node)) {
          return;
        }
      }
      // If none of the panels contains the target, close the panel
      onCloseRef.current();
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Handle closing the sliding panel when there's a path change
  const { pathname } = useLocation();
  const firstTime = useRef(true);
  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
    } else {
      onCloseRef.current();
    }
    // keep pathname below, this is to trigger the effect when it changes
  }, [pathname]);

  return createPortal(
    <div
      data-testid="sliding-panel"
      className={cn(
        'sliding-panel',
        `sliding-panel--${position}`,
        `sliding-panel--${position}--${size}`,
        Number.isFinite(arrowX) && `sliding-panel--${position}--below-header`,
        className
      )}
      ref={node}
      {...props}
    >
      {(title || withCloseButton) && (
        <div className="sliding-panel__header">
          {title && (
            <span className="small sliding-panel__header__title">{title}</span>
          )}
          {withCloseButton && (
            <Button
              variant="tertiary"
              onClick={() => onCloseRef.current()}
              className="sliding-panel__header__buttons"
            >
              <CloseIcon />
            </Button>
          )}
          {Number.isFinite(arrowX) && (
            <div
              className="sliding-panel__header__arrow"
              style={{ left: arrowX }}
            />
          )}
        </div>
      )}
      <div className="sliding-panel__content">{children}</div>
    </div>,
    document.body
  );
};

export default SlidingPanel;
