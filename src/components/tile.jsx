import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/tile.scss';

const Tile = ({ namespace, title, description }) => (
  <div className={namespace ? `tile tile-${namespace}` : 'tile'}>
    <h3 className="tile__header">{title}</h3>
    <p className="tile__content">{description}</p>
  </div>
);

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
};

Tile.defaultProps = {
  description: 'This is a short description of what the resource is/provides.',
  namespace: '',
};

export default Tile;
