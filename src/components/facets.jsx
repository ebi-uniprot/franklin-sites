import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import qs from 'query-string';

import ExpandableList from './expandable-list';

import { formatLargeNumber } from '../utils';

import '../styles/components/facets.scss';

/**
 * Takes a search string and parse it, handle facets specifically, keeps them
 * as sets of values
 * @param {string} string
 */
export const parse = (string, queryStringKey = 'facets') => {
  const parsed = qs.parse(string);
  if (!parsed[queryStringKey]) {
    return parsed;
  }
  const facets = (parsed[queryStringKey] || '')
    .split(',')
    .map((stringTuple) => stringTuple.split(':'));
  parsed[queryStringKey] = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const [name, value] of facets) {
    if (!parsed[queryStringKey][name]) {
      parsed[queryStringKey][name] = new Set();
    }
    parsed[queryStringKey][name].add(value);
  }
  return parsed;
};

/**
 * Takes a parsed search object (as generated by the previous "parse" function)
 * and generate a search string
 * @param {object} parsedSearch
 */
export const stringify = (query, queryStringKey = 'facets') => {
  const { [queryStringKey]: facets = {}, ...rest } = query;
  const facetString = Object.entries(facets)
    .map(([name, values]) =>
      Array.from(values).map((value) => `${name}:${value}`)
    )
    .flat()
    .join(',');
  if (!facetString) {
    return qs.stringify(rest);
  }
  return qs.stringify({ ...rest, [queryStringKey]: facetString });
};

const Facets = ({ data, extraActionsFor, queryStringKey }) => {
  const location = useLocation();

  if (!(data && data.length)) {
    return null;
  }

  const facetsToShow = data.filter(
    (facet) => facet.values && facet.values.length
  );

  const search = parse(location.search, queryStringKey);

  return (
    <div className="facets">
      <ul className="no-bullet">
        {facetsToShow.map((facet) => (
          <li key={facet.name}>
            <div className="facet-name">{facet.label || facet.name}</div>
            <ExpandableList extraActions={extraActionsFor.get(facet.name)}>
              {facet.values.map(({ value, label, count }) => {
                const isActive = search[queryStringKey]?.[facet.name]?.has(
                  value
                );

                const facetSet = new Set(
                  facet.allowMultipleSelection
                    ? (search[queryStringKey] || {})[facet.name]
                    : null
                );
                facetSet[isActive ? 'delete' : 'add'](value);

                const to = {
                  ...location,
                  search: stringify(
                    {
                      ...search,
                      [queryStringKey]: {
                        ...search[queryStringKey],
                        [facet.name]: facetSet,
                      },
                    },
                    queryStringKey
                  ),
                };

                return {
                  id: `${facet.name}_${value}`,
                  content: (
                    <Link
                      to={to}
                      className={isActive ? 'facet-active' : undefined}
                      replace
                    >
                      {`${label || value} (${formatLargeNumber(count)})`}
                    </Link>
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

Facets.propTypes = {
  /**
   * The facet data to be displayed
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Extra components to be added in the "action" area, map of <facet name, component>
   */
  extraActionsFor: PropTypes.instanceOf(Map),
  /**
   * Key with which to add the facets in the querystring (defaults to "facets")
   */
  queryStringKey: PropTypes.string,
};

Facets.defaultProps = {
  extraActionsFor: new Map(),
  queryStringKey: 'facets',
};

export default Facets;
