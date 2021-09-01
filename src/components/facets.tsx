import { FC, ReactNode, HTMLAttributes, Children } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import {
  parse as qsParse,
  stringify as qsStringify,
  ParsedQuery,
} from 'query-string';

import ExpandableList from './expandable-list';

import { formatLargeNumber } from '../utils';

import '../styles/components/facets.scss';

type FacetValue = { label?: ReactNode; value: string; count: number };

export type FacetObject = {
  label?: ReactNode;
  name: string;
  allowMultipleSelection?: boolean;
  values?: FacetValue[];
};

// To hold facets, record of sets
type CustomQueryValue = Record<string, Set<string>>;
// The modified query object, with our custom facet object
type CustomParsedQuery = ParsedQuery<string | CustomQueryValue>;

/**
 * Takes a search string and parse it, handle facets specifically, keeps them
 * as sets of values
 */
export const parse = (
  string: string,
  queryStringKey = 'facets'
): CustomParsedQuery => {
  const parsed = qsParse(string);
  let queryStringFacet = parsed[queryStringKey];
  if (!queryStringFacet) {
    return parsed;
  }
  if (Array.isArray(queryStringFacet)) {
    queryStringFacet = queryStringFacet.join(',');
  }
  const facets = queryStringFacet
    .split(',')
    .map((stringTuple) => stringTuple.split(':'));
  // change variable name and assert another type of TS (ok to mutate here)
  const customParsed: CustomParsedQuery = parsed;
  customParsed[queryStringKey] = {};
  const field = customParsed[queryStringKey] as CustomQueryValue;
  for (const [name, value] of facets) {
    if (!field[name]) {
      field[name] = new Set();
    }
    field[name].add(value);
  }
  return customParsed;
};

/**
 * Takes a parsed search object (as generated by the previous "parse" function)
 * and generate a search string
 */
export const stringify = (
  query: CustomParsedQuery,
  queryStringKey = 'facets'
): string => {
  const { [queryStringKey]: facets = {}, ...rest } = query;
  const facetString = Object.entries(facets as CustomQueryValue)
    .map(([name, values]) =>
      Array.from(values).map((value) => `${name}:${value}`)
    )
    .flat()
    .join(',');
  if (!facetString) {
    return qsStringify(rest);
  }
  return qsStringify({ ...rest, [queryStringKey]: facetString });
};

type FacetProps = {
  /**
   * The facet data to be displayed
   */
  data: FacetObject;
  /**
   * Extra components to be added in the "action" area
   */
  extraActions?: ReactNode;
  /**
   * Key with which to add the facets in the querystring (defaults to "facets")
   */
  queryStringKey?: string;
};

export const Facet: FC<FacetProps & HTMLAttributes<HTMLDivElement>> = ({
  data,
  extraActions,
  queryStringKey = 'facets',
  ...props
}) => {
  const location = useLocation();
  const search = parse(location.search, queryStringKey);

  if (!data.values?.length) {
    return null;
  }
  return (
    <div {...props}>
      <div className="facet-name">{data.label || data.name}</div>
      <ExpandableList extraActions={extraActions}>
        {data.values.map(({ value, label, count }) => {
          const queryField = search[queryStringKey] as
            | CustomQueryValue
            | undefined;
          const isActive = queryField?.[data.name]?.has(value);

          const facetSet = new Set(
            data.allowMultipleSelection && queryField
              ? queryField[data.name]
              : null
          );
          facetSet[isActive ? 'delete' : 'add'](value);

          const to = {
            ...location,
            search: stringify(
              {
                ...search,
                [queryStringKey]: {
                  ...queryField,
                  [data.name]: facetSet,
                },
              },
              queryStringKey
            ),
          };

          return (
            <Link
              key={`${data.name}_${value}`}
              to={to}
              className={isActive ? 'facet-active' : undefined}
            >
              {label || value}
              {` (${formatLargeNumber(count)})`}
            </Link>
          );
        })}
      </ExpandableList>
    </div>
  );
};

type FacetsProps = {
  /**
   * The facet data to be displayed
   */
  data?: FacetObject[];
  /**
   * Extra components to be added in the "action" area, map of <facet name, component>
   */
  extraActionsFor?: Map<string, ReactNode>;
  /**
   * Key with which to add the facets in the querystring (defaults to "facets")
   */
  queryStringKey?: string;
};

export const Facets: FC<FacetsProps & HTMLAttributes<HTMLDivElement>> = ({
  data,
  extraActionsFor,
  queryStringKey = 'facets',
  children,
  className,
  ...props
}) => {
  if (!(data?.length || Children.count(children))) {
    return null;
  }

  return (
    <div className={cn(className, 'facets')} {...props}>
      <ul className="no-bullet">
        {data?.map((facet) =>
          facet.values?.length ? (
            <li key={facet.name}>
              <Facet
                data={facet}
                extraActions={extraActionsFor?.get(facet.name)}
                queryStringKey={queryStringKey}
              />
            </li>
          ) : null
        )}
        {Children.map(children, (child, index) => {
          if (!child) {
            return null;
          }
          return (
            <li
              key={
                (typeof child === 'object' && 'key' in child && child.key) ||
                index
              }
            >
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};