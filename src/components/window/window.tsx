import { FC, ReactNode } from 'react';
import cn from 'classnames';

import WindowHeader from './window-header';
import WindowFooter from './window-footer';

import '../../styles/components/window.scss';

type WindowProps = {
  width?: string;
  height?: string;
  title?: string;
  withHeaderCloseButton?: boolean;
  withFooterCloseButton?: boolean;
  onWindowOpen?: () => void;
  onWindowClose?: () => void;
  withShadow?: boolean;
  className?: string;
  actionButtons?: ReactNode;
  children?: ReactNode;
};

const Window: FC<WindowProps> = ({
  width = '50vw',
  height = '50vh',
  title,
  withHeaderCloseButton = false,
  withFooterCloseButton = false,
  onWindowOpen,
  onWindowClose,
  actionButtons,
  withShadow = false,
  className,
  children,
}) => {
  const styles = {
    width,
    minHeight: height,
    top: `calc((80vh - ${height}) / 2)`,
    left: `calc((100vw - ${width}) / 2)`,
  };
  const baseClassName = 'window';
  const cssClasses = cn(baseClassName, className, {
    [`${baseClassName}--with-shadow`]: !!withShadow,
  });
  if (typeof onWindowOpen === 'function') {
    onWindowOpen();
  }

  return (
    <div className={cssClasses} style={styles}>
      {title && (
        <WindowHeader
          title={title}
          withCloseButton={withHeaderCloseButton}
          onWindowClose={onWindowClose}
        />
      )}

      <div className="window__content">{children}</div>

      {(withFooterCloseButton || actionButtons) && (
        <WindowFooter
          withCloseButton={withFooterCloseButton}
          onWindowClose={onWindowClose}
        >
          {actionButtons && actionButtons}
        </WindowFooter>
      )}
    </div>
  );
};

export default Window;
