import {
  memo,
  useEffect,
  ReactNode,
  HTMLAttributes,
  useRef,
  useMemo,
} from 'react';
import cn from 'classnames';
import { v1 } from 'uuid';

import Loader from './loader';

import useDataCheckboxes from '../hooks/useDataCheckboxes';

import withDataLoader, { WrapperProps } from './data-loader';

import '../styles/components/data-table.scss';

type BasicDatum = Record<string, unknown>;

type CommonColumn<Datum> = {
  label?: ReactNode;
  name: string;
  render: (datum: Datum) => ReactNode;
  width?: string;
};

// Either a column is sortable
export interface SortableColumn<Datum> extends CommonColumn<Datum> {
  sortable?: true;
  sorted?: 'ascend' | 'descend';
}
// Or it's not sortable
export interface NonSortableColumn<Datum> extends CommonColumn<Datum> {
  sortable?: false | undefined;
  sorted?: never;
}

type SharedProps<Datum> = {
  /**
   * An array of objects which specifies attributes about each column of your
   * data. Each object has label, name and render attributes.
   */
  columns: Array<SortableColumn<Datum> | NonSortableColumn<Datum>>;
  /**
   * Table fixed layout
   */
  // Note sure why it doesn't detect it as used...
  // eslint-disable-next-line react/no-unused-prop-types
  fixedLayout?: boolean;
};

const BLOCK = 'data-table';

type HeadProps<Datum> = {
  /**
   * Optional event handler called when a sortable column header gets clicked
   * Make sure that it doesn't change unecessarily by wrapping it in useCallback
   */
  onHeaderClick?: (columnName: SortableColumn<Datum>['name']) => void;
};

const DataTableHead = <Datum extends BasicDatum>({
  columns,
  onHeaderClick,
  checkbox,
}: HeadProps<Datum> & SharedProps<Datum> & { checkbox: ReactNode }) => (
  <thead>
    <tr>
      {checkbox && (
        <th className={`${BLOCK}__header-cell--checkbox`}>
          {/* needs a relative wrapper, because the header is sticky */}
          <div className="checkbox-cell">{checkbox}</div>
        </th>
      )}
      {columns.map(({ sorted, name, label, sortable, width }) => (
        <th
          key={name}
          className={cn({
            [`${BLOCK}__header-cell--sortable`]: sortable,
            [`${BLOCK}__header-cell--${sorted || 'ascend'}`]:
              sortable && sorted,
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
const MemoizedDataTableHead = memo(DataTableHead) as typeof DataTableHead;

type CellProp<Datum extends BasicDatum> = {
  column: CommonColumn<Datum>;
  datum: Datum;
  loading?: boolean;
  fixedLayout?: boolean;
  firstColumn: boolean;
};

const Cell = <Datum extends BasicDatum>({
  column,
  datum,
  loading,
  fixedLayout,
  firstColumn,
}: CellProp<Datum>) => {
  let rendered: ReactNode;
  try {
    rendered = column.render(datum);
  } catch (error) {
    /**
     * We get here only if the renderer fails. If the renderer returns null of
     * undefined because of a lack of data, then it will no throw and will not
     * display the loader at all
     */
    /* istanbul ignore next */
    if (!loading) {
      throw error;
    } else {
      rendered = firstColumn && <Loader />;
    }
  }

  return (
    <td className={fixedLayout ? `${BLOCK}__cell--ellipsis` : undefined}>
      {rendered}
    </td>
  );
};

type RowProps<Datum extends BasicDatum> = {
  /**
   * The data to be displayed
   */
  datum: Datum;
  loading?: boolean;
  id: string;
  selectable: boolean;
};

const DataTableRow = <Datum extends BasicDatum>({
  datum,
  loading,
  columns,
  selectable,
  id,
  fixedLayout,
  firstColumn,
}: RowProps<Datum> & SharedProps<Datum> & { firstColumn: boolean }) => {
  const idRef = useRef(v1());
  return (
    <tr>
      {selectable && (
        <td className="checkbox-cell">
          <input type="checkbox" data-id={id} id={idRef.current} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor={idRef.current}
            aria-label={id}
            title="click to select, shift+click for multiple selection"
          />
        </td>
      )}
      {columns.map((column) => (
        <Cell
          key={`${id}-${column.name}`}
          column={column}
          datum={datum}
          loading={loading}
          fixedLayout={fixedLayout}
          firstColumn={firstColumn}
        />
      ))}
    </tr>
  );
};
const MemoizedDataTableRow = memo(DataTableRow) as typeof DataTableRow;

type RowsProps<Datum> = {
  /**
   * The data to be displayed
   */
  data: Datum[];
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
};

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

export interface Props<Datum>
  extends TableProps,
    RowsProps<Datum>,
    // Omit because 'selectable' is not passed from the top, it is deduced later
    Omit<HeadProps<Datum>, 'selectable'>,
    SharedProps<Datum> {}

export const DataTable = <Datum extends BasicDatum>({
  data,
  loading,
  columns,
  getIdKey,
  onHeaderClick,
  onSelectionChange,
  density = 'normal',
  fixedLayout,
  optimisedRendering,
  className,
  ...props
}: Props<Datum> & HTMLAttributes<HTMLTableElement>): JSX.Element => {
  const idRef = useRef(v1());

  const { selectAllRef, checkboxContainerRef, checkSelectAllSync } =
    useDataCheckboxes(onSelectionChange);

  // We need to update the state of the select-all checkbox when data changes
  useEffect(checkSelectAllSync, [data, checkSelectAllSync]);

  const selectable = Boolean(onSelectionChange);

  const selectAllCheckbox = useMemo(
    () =>
      selectable && (
        <>
          <input type="checkbox" id={idRef.current} ref={selectAllRef} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor={idRef.current}
            aria-label="Selection control for all visible items"
          />
        </>
      ),
    [selectAllRef, selectable]
  );

  return (
    <table
      className={cn(className, BLOCK, {
        [`${BLOCK}--compact`]: density === 'compact',
        [`${BLOCK}--fixed`]: fixedLayout,
        [`${BLOCK}--optimised-rendering`]: optimisedRendering,
      })}
      {...props}
    >
      <MemoizedDataTableHead<Datum>
        columns={columns}
        onHeaderClick={onHeaderClick}
        checkbox={selectAllCheckbox}
      />
      <tbody ref={checkboxContainerRef}>
        {data.map((datum, index) => {
          const id = getIdKey(datum, index, data);
          return (
            <MemoizedDataTableRow<Datum>
              key={id}
              datum={datum}
              loading={loading}
              id={id}
              selectable={selectable}
              firstColumn={index === 0}
              columns={columns}
              fixedLayout={fixedLayout}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export const DataTableWithLoader = <Datum extends BasicDatum>(
  props: WrapperProps<Datum> & Props<Datum> & HTMLAttributes<HTMLTableElement>
) => withDataLoader<Datum, typeof props>(DataTable)(props);
