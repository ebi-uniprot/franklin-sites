import React, { FC } from 'react';

import '../styles/components/tile.scss';

type Props = {
  /**
   * The namespace, which decides the colour
   */
  namespace?:
    | 'uniref'
    | 'uniparc'
    | 'proteomes'
    | 'uniprotkb'
    | 'keywords'
    | 'publications';
  /**
   * The tile title
   */
  title: string;
  /**
   * The tile description. Short and snappy.
   */
  description?: string;
  /**
   * Small or normal version
   */
  small?: boolean;
};

export const Tile: FC<Props> = ({
  namespace,
  title,
  description = 'This is a short description of what the resource is/provides.',
  small,
}) => {
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

export default Tile;
