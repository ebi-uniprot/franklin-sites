import { FC, useRef, useEffect, ReactNode, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { frame } from 'timing-functions';

import Button from './button';

import CloseIcon from '../svg/times.svg';

import '../styles/components/sliding-panel.scss';

const focusable =
  'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';

export type LRBelowHeader = {
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

export type TBSlidingPanel = {
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
  onClose?: (reason: 'outside' | 'x-button' | 'navigation' | 'escape') => void;
  /**
   * Size of the panel once opened
   */
  size?: 'small' | 'medium' | 'large' | 'full-screen';
  /**
   * Title of the panel
   */
  title?: ReactNode;
  /**
   * Pathname of current location. When this changes the panel is closed.
   */
  pathname: string;
} & (LRBelowHeader | TBSlidingPanel);

const SlidingPanel: FC<
  SlidingPanelProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'>
> = ({
  children,
  onClose,
  position,
  size = 'medium',
  title,
  arrowX,
  className,
  pathname,
  ...props
}) => {
  const node = useRef<HTMLDivElement>(null);

  const onCloseRef = useRef<SlidingPanelProps['onClose']>(onClose);
  onCloseRef.current = onClose;

  // onMount/onUnmount
  useEffect(() => {
    // keep track of the currently active element (likely the button used)
    const previousActiveElement = document.activeElement as HTMLElement | null;

    // Mutation observer for when the content of the sliding panel changes
    // (because all the content might not be there immediatly)
    let mutationObs: MutationObserver | null = null;
    const focusTarget = node.current?.querySelector<HTMLElement>(focusable);
    if (focusTarget) {
      focusTarget.focus();
    } else {
      // if there is no focusable element, wait for one to be rendered
      mutationObs = new MutationObserver(() => {
        // Get the first focusable element in the panel
        const focusTarget = node.current?.querySelector<HTMLElement>(focusable);
        if (focusTarget) {
          // If there is one, focus it and disconnect the observer
          focusTarget.focus();
          mutationObs?.disconnect();
        }
      });
      if (node.current) {
        // Connect the observer to the panel
        mutationObs?.observe(node.current, { childList: true, subtree: true });
      }
    }

    // Clean up
    return () => {
      // Return focus to previously active element on unmount if still there
      if (previousActiveElement && document.contains(previousActiveElement)) {
        previousActiveElement?.focus();
      }
      // Disconnect here too, just in case it didn't have a chance to do so
      mutationObs?.disconnect();
    };
  }, []);

  useEffect(() => {
    // Make sure to add it to the reference anyway every time to handle the
    // double renders in React in dev mode
    onCloseRef.current = onClose;
    return () => {
      // Lose the reference to the onClose function on unmount because we might
      // call it on the next frame but it will already be unmounted
      onCloseRef.current = undefined;
    };
  }, [onClose]);

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
      // If none of the panels contains the target, close the panel.
      // Wait a frame in order to let other event listeners run before.
      frame().then(() => {
        onCloseRef.current?.('outside');
      });
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Handle closing the sliding panel when there's a path change
  const pathnameRef = useRef(pathname);
  useEffect(() => {
    // If the pathname changed
    if (pathnameRef.current !== pathname) {
      onCloseRef.current?.('navigation');
    }
  }, [pathname]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current?.('escape');
      }
    };

    document.addEventListener('keydown', listener, { passive: true });

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return createPortal(
    <aside
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
      {title && (
        <div className="sliding-panel__header">
          {title && (
            <span className="small sliding-panel__header__title">{title}</span>
          )}

          <Button
            variant="tertiary"
            onClick={() => onCloseRef.current?.('x-button')}
            className="sliding-panel__header__buttons"
            title="Close panel"
          >
            <CloseIcon />
          </Button>
          {Number.isFinite(arrowX) && (
            <div
              className="sliding-panel__header__arrow"
              style={{ left: arrowX }}
            />
          )}
        </div>
      )}
      <div className="sliding-panel__content">{children}</div>
    </aside>,
    document.body
  );
};

export default SlidingPanel;
