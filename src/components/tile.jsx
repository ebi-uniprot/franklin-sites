import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/tile.scss';

const Tile = ({
  namespace, title, description, small,
}) => {
  let classNames = 'tile';
  classNames = namespace ? `${classNames} tile--${namespace}` : `${classNames}`;
  classNames = small ? `${classNames} tile--small` : `${classNames}`;
  return (
    <div className={classNames}>
      <h3 className="tile__header">{title}</h3>
      {!small && <p className="tile__content">{description}</p>}
    </div>
  );
};

Tile.propTypes = {
  /**
   * The tile title
   */
  title: PropTypes.string.isRequired,
  /**
   * The tile description. Short and snappy.
   */
  description: PropTypes.string,
  /**
   * The namespace, which decides the colour
   */
  namespace: PropTypes.string,
  /**
   * Small or normal version
   */
  small: PropTypes.bool,
};

Tile.defaultProps = {
  description: 'This is a short description of what the resource is/provides.',
  namespace: '',
  small: false,
};

export default Tile;
