import { PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

import withDataLoader from './data-loader';

import '../styles/components/data-table.scss';

interface CommonColumn<T> {
  label: ReactNode;
  name: string;
  render: (datum: T, index: number, data: T[]) => ReactNode;
  width?: string;
}

interface SortableColumn<T> extends CommonColumn<T> {
  sortable: true;
  sorted?: 'ascend' | 'descend';
}

interface NonSortableColumn<T> extends CommonColumn<T> {
  sortable: false | undefined;
  sorted: never;
}

interface SharedProps<T> {
  /**
   * Flag which indicates rows should be selectable with an input box.
   */
  selectable?: boolean;
  /**
   * An array of objects which specifies attributes about each column of your data. Each object has
   *  label, name and render attributes.
   */
  columns: Array<SortableColumn<T> | NonSortableColumn<T>>;
  /**
   * Table fixed layout
   */
  fixedLayout?: boolean;
}

interface HeadProps<T> extends SharedProps<T> {
  onHeaderClick?: (columnName: CommonColumn<T>['name']) => void;
}

function DataTableHead<T>({
  selectable,
  columns,
  onHeaderClick,
}: PropsWithChildren<HeadProps<T>>) {
  return (
    <thead className="data-table__header">
      <tr className="data-table__row">
        {selectable && (
          <th
            key="selectable-column"
            className="data-table__header-cell data-table__header-cell--checkbox"
          >
            {' '}
          </th>
        )}
        {columns.map(({ sorted, name, label, sortable, width }) => (
          <th
            key={name}
            className={cn('data-table__header-cell', {
              [`data-table__header-cell--${sorted || 'ascend'}`]:
                sorted || sortable,
            })}
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

type ID = string | number;

interface BodyProps<T> extends SharedProps<T> {
  /**
   * The data to be displayed
   */
  data: T[];
  /**
   * A function that returns a unique ID for each of the data objects.
   * Defaults to return the "id" field.
   */
  getIdKey?: (datum: T) => ID;
  /**
   * A callback function that is called whenever a user selects a row.
   */
  onSelect?: (id: ID, datum: T, index: number, data: T[]) => void;
  /**
   * An object which indicates which rows have been selected by the user.
   */
  selected?: Array<ID>;
}

function DataTableBody<T extends Record<string, unknown>>({
  data,
  columns,
  onSelect,
  selected = [],
  getIdKey,
  selectable,
  fixedLayout,
}: PropsWithChildren<BodyProps<T>>) {
  return (
    <tbody>
      {data.map((datum, index, data) => {
        const id = getIdKey?.(datum) || (datum.id as ID);
        const isSelected = selected.includes(id);
        const className = 'data-table__cell';
        return (
          <tr
            key={id}
            className={cn('data-table__row', {
              'data-table__row--selected': isSelected,
            })}
          >
            {selectable && (
              <td key={`${id}-select-column`} className={className}>
                <input
                  type="checkbox"
                  onChange={() => onSelect?.(id, datum, index, data)}
                  aria-label={`${id}`}
                  checked={isSelected}
                />
              </td>
            )}
            {columns.map((column) => (
              <td
                key={`${id}-${column.name}`}
                className={cn(className, {
                  'data-table__cell--ellipsis': fixedLayout,
                })}
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

interface TableProps<T> extends HeadProps<T>, BodyProps<T> {
  /**
   * Display density of the table (default is 'normal')
   */
  density?: 'normal' | 'compact';
  /**
   * Optional props
   */
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  onSelect,
  selected,
  getIdKey,
  selectable,
  onHeaderClick,
  density = 'normal',
  fixedLayout,
  className,
  ...props
}: PropsWithChildren<TableProps<T>>) {
  return (
    <table
      className={cn(className, 'data-table', {
        'data-table--compact': density === 'compact',
        'data-table--fixed': fixedLayout,
      })}
      {...props}
    >
      <DataTableHead
        selectable={selectable}
        columns={columns}
        onHeaderClick={onHeaderClick}
      />
      <DataTableBody
        data={data}
        columns={columns}
        onSelect={onSelect}
        selected={selected}
        getIdKey={getIdKey}
        selectable={selectable}
        fixedLayout={fixedLayout}
      />
    </table>
  );
}

export const DataTableWithLoader = withDataLoader(DataTable);
