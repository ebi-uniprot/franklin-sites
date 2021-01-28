import { ReactNode, HTMLAttributes } from 'react';

import withDataLoader, { WrapperProps } from './data-loader';

type ItemID = string | number;

export type Props<T> = {
  /**
   * The data to be displayed
   */
  data: T[];
  /**
   * A function that returns a unique ID for each of the data objects.
   * Defaults to return the "id" field.
   * Same function signature as a map function.
   */
  getIdKey?: (datum: T, index: number, data: T[]) => ItemID;
  /**
   * A renderer function for each item of the list.
   * Same function signature as a map function.
   */
  dataRenderer: (datum: T, index: number, data: T[]) => ReactNode;
};

export function DataList<T extends Record<string, unknown>>({
  data,
  getIdKey,
  dataRenderer,
  ...props
}: Props<T> & HTMLAttributes<HTMLElement>) {
  return (
    <>
      {data.map((datum, index) => (
        <section
          key={getIdKey?.(datum, index, data) || (datum.id as ItemID)}
          {...props}
        >
          {dataRenderer(datum, index, data)}
        </section>
      ))}
    </>
  );
}

export const DataListWithLoader = <T extends Record<string, unknown>>(
  props: WrapperProps<T> & Props<T> & HTMLAttributes<HTMLElement>
) => withDataLoader<T, typeof props>(DataList)(props);
