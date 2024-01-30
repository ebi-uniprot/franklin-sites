import { FC, ReactNode, HTMLAttributes, Children } from 'react';
import cn from 'classnames';

import ExpandableList from './expandable-list';

import '../styles/components/facets.scss';

export type FacetWithValuesLinksObject = {
  label?: ReactNode;
  name: string;
  allowMultipleSelection?: boolean;
  values?: ReactNode[];
};

type FacetProps = {
  /**
   * The facet data to be displayed
   */
  data: FacetWithValuesLinksObject;
  /**
   * Extra components to be added in the "action" area
   */
  extraActions?: ReactNode;
  /**
   * Key with which to add the facets in the querystring (defaults to "facets")
   */
  queryStringKey?: string;
  /**
   * ClickHandler for specific behaviour
   */
  facetClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Facet: FC<FacetProps & HTMLAttributes<HTMLDivElement>> = ({
  data,
  extraActions,
  facetClickHandler,
  ...props
}) => {
  if (!data.values?.length) {
    return null;
  }
  return (
    <div {...props}>
      <div className="facet-name">{data.label || data.name}</div>
      <ExpandableList extraActions={extraActions}>
        {data.values.map((link) => link)}
      </ExpandableList>
    </div>
  );
};

type FacetsProps = {
  /**
   * The facet data to be displayed
   */
  data?: FacetWithValuesLinksObject[];
  /**
   * Extra components to be added in the "action" area, map of <facet name, component>
   */
  extraActionsFor?: Map<string, ReactNode>;
  /**
   * Key with which to add the facets in the querystring (defaults to "facets")
   */
  queryStringKey?: string;
  /**
   * ClickHandler for specific behaviour
   */
  facetClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Facets: FC<FacetsProps & HTMLAttributes<HTMLDivElement>> = ({
  data,
  extraActionsFor,
  children,
  className,
  facetClickHandler,
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
                facetClickHandler={facetClickHandler}
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
