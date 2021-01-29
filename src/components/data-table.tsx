/* eslint-disable react/require-default-props */
import { ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import withDataLoader, { WrapperProps } from './data-loader';

import '../styles/components/data-table.scss';

type CommonColumn<T> = {
  label: ReactNode;
  name: string;
  // same function signature as a map function
  render: (datum: T, index: number, data: T[]) => ReactNode;
  width?: string;
};

// Either a column is sortable
export interface SortableColumn<T> extends CommonColumn<T> {
  sortable: true;
  sorted?: 'ascend' | 'descend';
}
// Or it's not sortable
export interface NonSortableColumn<T> extends CommonColumn<T> {
  sortable?: false | undefined;
  sorted?: never;
}

type SharedProps<T> = {
  /**
   * An array of objects which specifies attributes about each column of your data. Each object has
   *  label, name and render attributes.
   */
  columns: Array<SortableColumn<T> | NonSortableColumn<T>>;
  /**
   * Table fixed layout
   */
  // Note sure why it doesn't detect it as used...
  // eslint-disable-next-line react/no-unused-prop-types
  fixedLayout?: boolean;
};

const BLOCK = 'data-table';

type HeadProps<T> = {
  selectable?: boolean;
  onHeaderClick?: (columnName: CommonColumn<T>['name']) => void;
};

function DataTableHead<T>({
  selectable,
  columns,
  onHeaderClick,
}: HeadProps<T> & SharedProps<T>) {
  return (
    <thead>
      <tr>
        {selectable && (
          <th
            key="selectable-column"
            className={`${BLOCK}__header-cell--checkbox`}
          >
            {' '}
          </th>
        )}
        {columns.map(({ sorted, name, label, sortable, width }) => (
          <th
            key={name}
            className={
              sorted || sortable
                ? `${BLOCK}__header-cell--${sorted || 'ascend'}`
                : undefined
            }
            onClick={sortable ? () => onHeaderClick?.(name) : undefined}
            style={width ? { width } : undefined}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

// Either the rows are selectable
type Selectable<T, ID> = {
  /**
   * A callback function that is called whenever a user selects a row.
   */
  onSelectRow: (id: ID, datum: T, index: number, data: T[]) => void;
  /**
   * An object which indicates which rows have been selected by the user.
   */
  selected: ID[];
};
// Or they're not selectable
type NonSelectable = {
  onSelectRow?: never;
  selected?: never;
};

type MaybeSelectable<T, ID> = Selectable<T, ID> | NonSelectable;

type BodyProps<T, ID> = {
  /**
   * The data to be displayed
   */
  data: T[];
  /**
   * A function that returns a unique ID for each of the data objects.
   * Same function signature as a map function.
   */
  getIdKey: (datum: T, index: number, data: T[]) => ID;
};

function DataTableBody<
  T extends Record<string, unknown>,
  ID extends string | number
>({
  data,
  columns,
  onSelectRow,
  selected,
  getIdKey,
  fixedLayout,
}: BodyProps<T, ID> & SharedProps<T> & MaybeSelectable<T, ID>) {
  return (
    <tbody>
      {data.map((datum, index) => {
        const id = getIdKey(datum, index, data);
        const isSelected = selected?.includes(id);
        return (
          <tr
            key={id}
            className={isSelected ? `${BLOCK}__row--selected` : undefined}
          >
            {selected && (
              <td key={`${id}-select-column`}>
                <input
                  type="checkbox"
                  onChange={() => onSelectRow?.(id, datum, index, data)}
                  aria-label={`${id}`}
                  checked={isSelected}
                />
              </td>
            )}
            {columns.map((column) => (
              <td
                key={`${id}-${column.name}`}
                className={fixedLayout ? `${BLOCK}__cell--ellipsis` : undefined}
              >
                {column.render(datum, index, data)}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

type TableProps = {
  /**
   * Display density of the table (default is 'normal')
   */
  density?: 'normal' | 'compact';
  /**
   * Choose to activate optimised rendering (default: false). Do not use if
   *  - height of row is really tall or variable (scroll bar will jump)
   *  - column width changes (should be fine with "fixedLayout")
   */
  optimisedRendering?: boolean;
};

export interface Props<T, ID = string>
  extends TableProps,
    BodyProps<T, ID>,
    // Omit because 'selectable' is not passed from the top, it is deduced later
    Omit<HeadProps<T>, 'selectable'>,
    SharedProps<T> {}

export function DataTable<
  T extends Record<string, unknown>,
  ID extends string | number = string
>({
  data,
  columns,
  onSelectRow,
  selected,
  getIdKey,
  onHeaderClick,
  density = 'normal',
  fixedLayout,
  optimisedRendering,
  className,
  ...props
}: Props<T, ID> &
  MaybeSelectable<T, ID> &
  HTMLAttributes<HTMLTableElement>): JSX.Element {
  let selectedProps = {};
  if (selected) {
    selectedProps = { selected, onSelectRow };
  }
  return (
    <table
      className={cn(className, BLOCK, {
        [`${BLOCK}--compact`]: density === 'compact',
        [`${BLOCK}--fixed`]: fixedLayout,
        [`${BLOCK}--optimised-rendering`]: optimisedRendering,
      })}
      {...props}
    >
      <DataTableHead<T>
        selectable={Boolean(selected)}
        columns={columns}
        onHeaderClick={onHeaderClick}
      />
      <DataTableBody<T, ID>
        data={data}
        columns={columns}
        getIdKey={getIdKey}
        fixedLayout={fixedLayout}
        {...selectedProps}
      />
    </table>
  );
}

export const DataTableWithLoader = <
  T extends Record<string, unknown>,
  ID extends string | number = string
>(
  props: WrapperProps<T> &
    Props<T, ID> &
    MaybeSelectable<T, ID> &
    HTMLAttributes<HTMLTableElement>
) => withDataLoader<T, typeof props>(DataTable)(props);
