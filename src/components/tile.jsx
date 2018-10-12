import React from 'react';
import PropTypes from 'prop-types';

import '../../dist/components/tile.css';

const Tile = ({ namespace, title, description }) => (
  <div className={namespace ? `tile tile-${namespace}` : 'tile'}>
    <h3 className="tile__header">{title}</h3>
    <p className="tile__content">{description}</p>
  </div>
);

Tile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  namespace: PropTypes.string,
};

Tile.defaultProps = {
  title: 'Tile title',
  description: 'This is a short description of what the resource is/provides.',
  namespace: '',
};

export default Tile;
