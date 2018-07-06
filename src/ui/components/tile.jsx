import React from 'react';
import PropTypes from 'prop-types';

import '../../../dist/components/tile.css';

const Tile = props => (
  <div className={props.namespace ? `tile tile-${props.namespace}` : 'tile'}>
    <h3 className="tile__header">{props.title}</h3>
    <p className="tile__content">{props.description}</p>
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
