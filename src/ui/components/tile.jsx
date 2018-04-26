import React from 'react';
import PropTypes from 'prop-types';
import checkPatternAttributes from '../common/patternAttributes';

import '../../styles/components/_tile.scss';

const Tile = props => (
    <div className="tile">
        <h3 className="tile__header">{props.title}</h3>
        <p className="tile__content">{props.description}</p>
    </div>
);

Tile.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Tile.defaultProps = {
    title: 'Tile title',
    description: 'This is a short description of what the resource is/provide.'
};

Tile.title = 'Tile';
Tile.function = 'Provide a sneak peak and navigate to a searchable data section of the website.';
Tile.purpose = 'Advertise a specific dataset of the website and provide searchable access to it.';

export default checkPatternAttributes(Tile);
