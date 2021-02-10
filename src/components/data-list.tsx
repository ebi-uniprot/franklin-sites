import { memo, ReactNode, HTMLAttributes } from 'react';

import withDataLoader, { WrapperProps } from './data-loader';

export type Props<Datum> = {
  /**
   * The data to be displayed
   */
  data: Datum[];
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
};

const DataListItem = <Datum extends BasicDatum>({
  datum,
  id,
  dataRenderer,
}: DataListItemProps<Datum>) => (
  <section key={id}>{dataRenderer(datum)}</section>
);
const MemoizedDataListItem = memo(DataListItem) as typeof DataListItem;

export function DataList<Datum extends BasicDatum>({
  data,
  getIdKey,
  dataRenderer,
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
          />
        );
      })}
    </div>
  );
}

export const DataListWithLoader = <Datum extends BasicDatum>(
  props: WrapperProps<Datum> & Props<Datum> & HTMLAttributes<HTMLElement>
) => withDataLoader<Datum, typeof props>(DataList)(props);
