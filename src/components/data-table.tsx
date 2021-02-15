/* eslint-disable react/require-default-props */
import { memo, useCallback, ReactNode, HTMLAttributes, FormEvent } from 'react';
import cn from 'classnames';

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
  selectable?: boolean;
  /**
   * Optional event handler called when a sortable column header gets clicked
   * Make sure that it doesn't change unecessarily by wrapping it in useCallback
   */
  onHeaderClick?: (columnName: SortableColumn<Datum>['name']) => void;
};

const DataTableHead = <Datum extends BasicDatum>({
  selectable,
  columns,
  onHeaderClick,
}: HeadProps<Datum> & SharedProps<Datum>) => (
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

// Either the rows are selectable
type Selectable = {
  /**
   * A callback function that is called whenever a user selects a row.
   */
  onSelectRow: (id: string) => void;
  /**
   * An object which indicates which rows have been selected by the user.
   */
  selected: string[];
};
// Or they're not selectable
type NonSelectable = {
  onSelectRow?: never;
  selected?: never;
};

type MaybeSelectable = Selectable | NonSelectable;

type RowProps<Datum extends BasicDatum> = {
  /**
   * The data to be displayed
   */
  datum: Datum;
  id: string;
  selectable: boolean;
  isSelected?: boolean;
};

const noop = () => undefined;

const DataTableRow = <Datum extends BasicDatum>({
  datum,
  columns,
  selectable,
  isSelected,
  id,
  fixedLayout,
}: RowProps<Datum> & SharedProps<Datum>) => (
  <tr className={isSelected ? `${BLOCK}__row--selected` : undefined}>
    {selectable && (
      <td key={`${id}-select-column`}>
        <input
          type="checkbox"
          aria-label={id}
          data-id={id}
          checked={isSelected}
          // Yes, we know what we are doing, we do event delegation at the level
          // of the body in order to prevent rerendering each row if the handler
          // function changes (out of the franklin's responsibility).
          // This prevents a React warning in development
          onChange={noop}
        />
      </td>
    )}
    {columns.map((column) => (
      <td
        key={`${id}-${column.name}`}
        className={fixedLayout ? `${BLOCK}__cell--ellipsis` : undefined}
      >
        {column.render(datum)}
      </td>
    ))}
  </tr>
);
const MemoizedDataTableRow = memo(DataTableRow) as typeof DataTableRow;

type BodyProps<Datum> = {
  /**
   * The data to be displayed
   */
  data: Datum[];
  /**
   * A function that returns a unique ID for each of the data objects.
   * Same function signature as a map function.
   */
  getIdKey: (datum: Datum, index: number, data: Datum[]) => string;
  onSelectRow?: Selectable['onSelectRow'];
};

const DataTableBody = <Datum extends BasicDatum>({
  data,
  selected,
  getIdKey,
  onSelectRow,
  ...props
}: BodyProps<Datum> & SharedProps<Datum> & MaybeSelectable) => {
  const handleChange = useCallback(
    (event: FormEvent<HTMLElement>) => {
      if (!onSelectRow) {
        return;
      }
      const target = event.target as HTMLElement;
      if (target.dataset.id) {
        onSelectRow(target.dataset.id);
      }
    },
    [onSelectRow]
  );

  return (
    <tbody onChange={handleChange}>
      {data.map((datum, index) => {
        const id = getIdKey(datum, index, data);
        return (
          <MemoizedDataTableRow
            key={id}
            datum={datum}
            id={id}
            isSelected={selected?.includes(id)}
            selectable={Boolean(selected)}
            {...props}
          />
        );
      })}
    </tbody>
  );
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
    BodyProps<Datum>,
    // Omit because 'selectable' is not passed from the top, it is deduced later
    Omit<HeadProps<Datum>, 'selectable'>,
    SharedProps<Datum> {}

export const DataTable = <Datum extends BasicDatum>({
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
}: Props<Datum> &
  MaybeSelectable &
  HTMLAttributes<HTMLTableElement>): JSX.Element => {
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
      <MemoizedDataTableHead<Datum>
        selectable={Boolean(selected)}
        columns={columns}
        onHeaderClick={onHeaderClick}
      />
      <DataTableBody<Datum>
        data={data}
        columns={columns}
        getIdKey={getIdKey}
        fixedLayout={fixedLayout}
        {...selectedProps}
      />
    </table>
  );
};

export const DataTableWithLoader = <Datum extends BasicDatum>(
  props: WrapperProps<Datum> &
    Props<Datum> &
    MaybeSelectable &
    HTMLAttributes<HTMLTableElement>
) => withDataLoader<Datum, typeof props>(DataTable)(props);
