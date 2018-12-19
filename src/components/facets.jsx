import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatLargeNumber } from '../utils';

import '../styles/components/facets.scss';

class Facets extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive(facetName, facetValue) {
    const { selectedFacets } = this.props;
    if (facetName in selectedFacets && selectedFacets[facetName].includes(facetValue)) {
      return true;
    }
    return false;
  }

  render() {
    const { data, toggleFacet } = this.props;
    if (!data) {
      return null;
    }
    return (
      <div className="facets">
        <ul className="no-bullet">
          {data.map(facet => (
            <li key={facet.name}>
              <div className="facet-name">{facet.label}</div>
              <ul className="no-bullet">
                {facet.values.map(value => (
                  <li
                    key={`${facet.name}_${value.value}`}
                    className={this.isActive(facet.name, value.value) ? 'facet-active' : ''}
                  >
                    <button type="button" onClick={() => toggleFacet(facet.name, value.value)}>
                      {`${value.label} (${formatLargeNumber(value.count)})`}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Facets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFacet: PropTypes.func.isRequired,
  selectedFacets: PropTypes.shape({}),
};

Facets.defaultProps = {
  selectedFacets: {},
};

export default Facets;
