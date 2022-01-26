import { useState, HTMLAttributes } from 'react';

import { getLipsumObjectArray } from '../mock-data/lipsum';

import { Props as DataListProps } from '../components/data-list';
import {
  Props as DataTableProps,
  SortableColumn,
  NonSortableColumn,
} from '../components/data-table';
import { WrapperProps } from '../components/data-loader';
import { ExternalLink } from '../components';

type DataType = Record<string, string>;
type CommonProps = DataListProps<DataType> | DataTableProps<DataType>;

const totalNumberDataPoints = 50;
const getIdKey = (datum: DataType) => datum.id;
export const columns: Array<
  SortableColumn<DataType> | NonSortableColumn<DataType>
> = [
  {
    label: 'Column 1',
    name: 'content1',
    tooltip: 'Some content for the tooltip',
    render: (row) => row.content1,
    sortable: true,
    sorted: 'descend',
  },
  {
    label: 'Column 2',
    name: 'content2',
    tooltip: (
      <>
        Some <strong>richer</strong> content for the tooltip with a{' '}
        <ExternalLink url="https://www.uniprot.org">link</ExternalLink>
      </>
    ),
    render: (row) => row.content2,
  },
  {
    label: 'Column 3',
    name: 'content3',
    render: (row) => row.content3,
    sortable: true,
  },
  {
    label: 'Column 4',
    name: 'content4',
    render: (row) => row.content4,
    width: '30vw',
    sortable: true,
  },
  {
    label: () => (
      <>
        Column 5 <small>FC</small>
      </>
    ),
    name: 'content5',
    render: (row) => row.content5,
  },
];

const generateData = (numberElements: number) =>
  getLipsumObjectArray({
    keys: columns.map((column) => column.name),
    numberElements,
  });

type Args<P> = {
  children: (props: P) => JSX.Element;
} & HTMLAttributes<HTMLDivElement>;

export const DataLoaderDecorator = ({
  children,
  ...props
}: Args<CommonProps & WrapperProps<DataType>>) => {
  let loadingData = false;
  const numberDataPointsPerRequest = 6;
  const sleepDuration = 0.75;
  const numberInitialDataPoints = 1;

  const [data, setData] = useState(
    numberInitialDataPoints > 0 ? generateData(numberInitialDataPoints) : []
  );

  function onLoadMoreItems() {
    if (loadingData) {
      return null;
    }
    loadingData = true;
    const numberDataPoints = Math.min(
      numberDataPointsPerRequest,
      totalNumberDataPoints - data.length
    );
    const moreData = generateData(numberDataPoints);
    return setTimeout(() => {
      loadingData = false;
      setData([...data, ...moreData]);
    }, sleepDuration * 1000);
  }

  const hasMoreData = data.length < totalNumberDataPoints;
  return (
    <div {...props}>
      {children({
        data,
        getIdKey,
        columns,
        hasMoreData,
        onLoadMoreItems,
      })}
    </div>
  );
};

export const DataDecorator = ({ children, ...props }: Args<CommonProps>) => (
  <div {...props}>
    {children({
      data: generateData(totalNumberDataPoints),
      getIdKey,
      columns,
    })}
  </div>
);
