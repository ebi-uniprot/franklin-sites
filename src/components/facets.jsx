import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import qs from 'query-string';

import ExpandableList from './expandable-list';

import { formatLargeNumber } from '../utils';

import '../styles/components/facets.scss';

const parse = string => {
  const parsed = qs.parse(string);
  if (!parsed.facets) {
    return parsed;
  }
  const facets = (parsed.facets || '')
    .split(',')
    .map(stringTuple => stringTuple.split(':'));
  parsed.facets = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const [name, value] of facets) {
    if (!parsed.facets[name]) {
      parsed.facets[name] = new Set();
    }
    parsed.facets[name].add(value);
  }
  return parsed;
};

const stringify = ({ facets = {}, ...rest }) => {
  const facetString = Object.entries(facets)
    .map(([name, values]) =>
      Array.from(values).map(value => `${name}:${value}`)
    )
    .flat()
    .join(',');
  if (!facetString) {
    return qs.stringify(rest, { encode: false });
  }
  return qs.stringify({ ...rest, facets: facetString }, { encode: false });
};

const Facets = ({ data }) => {
  const location = useLocation();

  if (!(data && data.length)) {
    return null;
  }

  const facetsToShow = data.filter(
    facet => facet.values && facet.values.length
  );

  const search = parse(location.search);

  return (
    <div className="facets">
      <ul className="no-bullet">
        {facetsToShow.map(facet => (
          <li key={facet.name}>
            <div className="facet-name">{facet.label || facet.name}</div>
            <ExpandableList>
              {facet.values.map(({ value, label, count }) => {
                const isActive =
                  search.facets &&
                  search.facets[facet.name] &&
                  search.facets[facet.name].has(value);

                const facetSet = new Set((search.facets || {})[facet.name]);
                facetSet[isActive ? 'delete' : 'add'](value);

                const to = {
                  ...location,
                  search: stringify({
                    ...search,
                    facets: { ...search.facets, [facet.name]: facetSet },
                  }),
                };

                return {
                  id: `${facet.name}_${value}`,
                  content: (
                    <NavLink
                      to={to}
                      activeClassName="facet-active"
                      isActive={() => isActive}
                    >
                      {`${label || value} (${formatLargeNumber(count)})`}
                      <br />
                      {JSON.stringify(to.search)}
                    </NavLink>
                  ),
                };
              })}
            </ExpandableList>
          </li>
        ))}
      </ul>
    </div>
  );
};

class _Facets extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  isActive(facetName, facetValue) {
    const { selectedFacets } = this.props;
    const matchingFacet = selectedFacets.filter(
      facet => facet.name === facetName && facet.value === facetValue
    );
    return matchingFacet && matchingFacet.length > 0;
  }

  handleClick(facetName, facetValue) {
    const { addFacet, removeFacet } = this.props;
    if (this.isActive(facetName, facetValue)) {
      removeFacet(facetName, facetValue);
    } else {
      addFacet(facetName, facetValue);
    }
  }

  render() {
    const { data } = this.props;
    if (!data) {
      return null;
    }
    const facetsToShow = data.filter(
      facet => facet.values && facet.values.length > 0
    );

    return (
      <div className="facets">
        <ul className="no-bullet">
          {facetsToShow.map(facet => (
            <li key={facet.name}>
              <div className="facet-name">{facet.label}</div>
              <ExpandableList>
                {facet.values.map(value => ({
                  id: `${facet.name}_${value.value}`,
                  content: (
                    <button
                      type="button"
                      className={
                        this.isActive(facet.name, value.value)
                          ? 'facet-active'
                          : ''
                      }
                      onClick={() => this.handleClick(facet.name, value.value)}
                    >
                      {`${
                        value.label ? value.label : value.value
                      } (${formatLargeNumber(value.count)})`}
                    </button>
                  ),
                }))}
              </ExpandableList>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Facets.propTypes = {
  /**
   * The data to be displayed
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * What happens if a facet is selected
   */
  addFacet: PropTypes.func.isRequired,
  /**
   * What happens if a facet is de-selected
   */
  removeFacet: PropTypes.func.isRequired,
  /**
   * An array of selected facets
   */
  selectedFacets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Facets;
