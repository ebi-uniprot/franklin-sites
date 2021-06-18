import { FC, useRef, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { Button, CloseIcon } from './index';

import '../styles/components/sliding-panel.scss';

type SlidingPanelProps = {
  /**
   * Where the sliding panel will slide from
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
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
  /**
   * Should the panel be scrollable if the content is taller than the panel?
   */
  yScrollable?: boolean;
  /**
   * Should a 'left' or 'right' panel appear below the page header?
   */
  bellowHeader?: boolean;
  /**
   * Horizontal position of the arrow. If the panel appears below the page header.
   * Also works as a flag to display the arrow.
   */
  arrowX?: number;
  className?: string;
};

const SlidingPanel: FC<SlidingPanelProps> = ({
  children,
  onClose,
  position = 'left',
  size = 'medium',
  title,
  withCloseButton = false,
  className,
  bellowHeader = false,
  yScrollable = false,
  arrowX,
}) => {
  const node = useRef<HTMLDivElement>(null);

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (node?.current && !node.current.contains(e.target as Node)) {
        e.stopPropagation();
        e.preventDefault();
        onCloseRef.current();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return createPortal(
    <div
      data-testid="sliding-panel"
      className={cn(
        'sliding-panel',
        `sliding-panel--${position}`,
        `sliding-panel--${position}--${size}`,
        bellowHeader && `sliding-panel--${position}--bellow-header`,
        className
      )}
      style={{ overflowY: yScrollable ? 'auto' : 'initial' }}
      ref={node}
    >
      {(title || withCloseButton) && (
        <div className="sliding-panel__header">
          {title && <h1 className="small">{title}</h1>}
          {withCloseButton && (
            <div className="sliding-panel__header__buttons">
              <Button variant="tertiary" onClick={() => onCloseRef.current()}>
                <CloseIcon />
              </Button>
            </div>
          )}
          {arrowX && (
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
