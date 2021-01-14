import PropTypes from 'prop-types';

import { DefaultCloseButton } from './window-buttons';

const WindowFooter = ({ withCloseButton, onWindowClose, children }) => (
  <div className="window__footer">
    {children && children}
    {withCloseButton && onWindowClose && (
      <DefaultCloseButton onClick={onWindowClose} text="Close" />
    )}
  </div>
);

WindowFooter.propTypes = {
  withCloseButton: PropTypes.bool,
  onWindowClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

WindowFooter.defaultProps = {
  withCloseButton: false,
  onWindowClose: null,
  children: null,
};

export default WindowFooter;
