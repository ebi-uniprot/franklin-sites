import React from 'react';
import PropTypes from 'prop-types';

import { DefaultCloseButton } from './window-buttons';

const WindowHeader = ({
  title,
  withCloseButton,
  onWindowClose,
}) => (
  <div className="window__header">
    <span className="window__header__title">{title}</span>
    {(withCloseButton && onWindowClose)
      && (
        <DefaultCloseButton
          onClick={onWindowClose}
          iconOnly
        />
      )}
  </div>
);

WindowHeader.propTypes = {
  title: PropTypes.string.isRequired,
  withCloseButton: PropTypes.bool,
  onWindowClose: PropTypes.func,
};

WindowHeader.defaultProps = {
  withCloseButton: false,
  onWindowClose: null,
};

export default WindowHeader;
