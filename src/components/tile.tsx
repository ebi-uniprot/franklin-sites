import React, { FC } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/tile.scss';

type Props = {
  namespace?:
    | 'uniref'
    | 'uniparc'
    | 'proteomes'
    | 'uniprotkb'
    | 'keywords'
    | 'publications';
  title: string;
  description?: string;
  small?: boolean;
};

const Tile: FC<Props> = ({ namespace, title, description, small }) => {
  let classNames = 'tile';
  classNames += namespace ? ` tile--${namespace}` : '';
  classNames += small ? ' tile--small' : '';
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
  namespace: PropTypes.oneOf([
    'uniref',
    'uniparc',
    'proteomes',
    'uniprotkb',
    'keywords',
    'publications',
  ]),
  /**
   * Small or normal version
   */
  small: PropTypes.bool,
};

Tile.defaultProps = {
  description: 'This is a short description of what the resource is/provides.',
  namespace: undefined,
  small: false,
};

export default Tile;
