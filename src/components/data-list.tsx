import { memo, ReactNode, HTMLAttributes } from 'react';

import Loader from './loader';
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

  return <section key={id}>{rendered}</section>;
};
const MemoizedDataListItem = memo(DataListItem) as typeof DataListItem;

export function DataList<Datum extends BasicDatum>({
  data,
  getIdKey,
  dataRenderer,
  loading = false,
  ...props
}: Props<Datum> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
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
    </div>
  );
}

export const DataListWithLoader = <Datum extends BasicDatum>(
  props: WrapperProps<Datum> & Props<Datum> & HTMLAttributes<HTMLElement>
) => withDataLoader<Datum, typeof props>(DataList)(props);
