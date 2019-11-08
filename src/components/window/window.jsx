import React from 'react';
import PropTypes from 'prop-types';

import { getClassNames } from '../../utils';

import WindowHeader from './window-header';
import WindowFooter from './window-footer';

import '../../styles/components/window.scss';

const Window = ({
  width,
  height,
  title,
  withHeaderCloseButton,
  withFooterCloseButton,
  onWindowOpen,
  onWindowClose,
  actionButtons,
  withShadow,
  className,
  children,
}) => {
  const styles = {
    width,
    height,
    top: `calc((80vh - ${height}) / 2)`,
    left: `calc((100vw - ${width}) / 2)`,
  };
  const baseClassName = 'window';
  const withShadowClassName = `${baseClassName}--with-shadow`;
  const cssClasses = getClassNames([
    baseClassName,
    [withShadowClassName, !!withShadow],
    [className, !!className],
  ]);

  if (typeof onWindowOpen === 'function') {
    onWindowOpen();
  }

  return (
    <div
      className={cssClasses}
      style={styles}
    >
      {title && (
        <WindowHeader
          title={title}
          withCloseButton={withHeaderCloseButton}
          onWindowClose={onWindowClose}
        />
      )}

      <div className="window__content">{children}</div>

      {(withFooterCloseButton || actionButtons)
        && (
          <WindowFooter
            withCloseButton={withFooterCloseButton}
            onWindowClose={onWindowClose}
          >
            {actionButtons && actionButtons}
          </WindowFooter>
        )
      }
    </div>
  );
};

Window.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string,
  withHeaderCloseButton: PropTypes.bool,
  withFooterCloseButton: PropTypes.bool,
  onWindowOpen: PropTypes.func,
  onWindowClose: PropTypes.func,
  withShadow: PropTypes.bool,
  className: PropTypes.string,
  actionButtons: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.node), PropTypes.node],
  ),
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.node), PropTypes.node],
  ),
};

Window.defaultProps = {
  title: null,
  withHeaderCloseButton: false,
  withFooterCloseButton: false,
  onWindowOpen: null,
  onWindowClose: null,
  actionButtons: null,
  withShadow: false,
  className: null,
  children: null,
};

export default Window;
