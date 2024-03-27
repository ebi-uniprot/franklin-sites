/* eslint-disable react/no-unused-prop-types */
import { memo, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import Loader from './loader';

import useDataCheckboxes from '../hooks/useDataCheckboxes';

import withDataLoader, { WrapperProps } from './data-loader';

export type Props<Datum> = {
  /**
   * The data to be displayed
   */
  data: Datum[];
  /**
   * Flag saying that data is loading, so we might be showing stale data
   */
  loading?: boolean;
  /**
   * A function that returns a unique ID for each of the data objects.
   * Same function signature as a map function.
   */
  getIdKey: (datum: Datum, index: number, data: Datum[]) => string;
  /**
   * A callback that is called whenever a user selects or unselects a row.
   */
  onSelectionChange?: (event: MouseEvent | KeyboardEvent) => void;
  /**
   * A renderer function for each item of the list.
   * Make sure that it doesn't change unecessarily by wrapping it in useCallback
   */
  dataRenderer: (datum: Datum) => ReactNode;
};

type BasicDatum = Record<string, unknown>;

type DataListItemProps<Datum> = {
  datum: Datum;
  id: string;
  dataRenderer: (datum: Datum) => ReactNode;
  loading: boolean;
  firstItem: boolean;
};

const DataListItem = <Datum extends BasicDatum>({
  datum,
  id,
  dataRenderer,
  loading,
  firstItem,
}: DataListItemProps<Datum>) => {
  let rendered: ReactNode;
  try {
    rendered = dataRenderer(datum);
  } catch (error) {
    /**
     * We get here only if the renderer fails. If the renderer returns null of
     * undefined because of a lack of data, then it will no throw and will not
     * display the loader at all
     */
    if (!loading) {
      throw error;
    } else {
      rendered = firstItem && <Loader />;
    }
  }

  return <li key={id}>{rendered}</li>;
};
const MemoizedDataListItem = memo(DataListItem) as typeof DataListItem;

export const DataList = <Datum extends BasicDatum>({
  data,
  getIdKey,
  dataRenderer,
  loading = false,
  onSelectionChange,
  className,
  ...props
}: Props<Datum> & HTMLAttributes<HTMLUListElement>) => {
  const { checkboxContainerRef } = useDataCheckboxes(onSelectionChange);

  return (
    <ul
      {...props}
      className={cn('data-list', 'no-bullet', className)}
      ref={checkboxContainerRef}
    >
      {data.map((datum, index) => {
        const id = getIdKey(datum, index, data);
        return (
          <MemoizedDataListItem
            key={id}
            datum={datum}
            id={id}
            dataRenderer={dataRenderer}
            loading={loading}
            firstItem={index === 0}
          />
        );
      })}
    </ul>
  );
};

export const DataListWithLoader = <Datum extends BasicDatum>(
  props: WrapperProps<Datum> & Props<Datum> & HTMLAttributes<HTMLElement>
) => <>{withDataLoader<Datum, typeof props>(DataList)(props)}</>;
