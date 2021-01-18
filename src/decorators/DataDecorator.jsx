import { useState } from 'react';
import PropTypes from 'prop-types';

import { getLipsumObjectArray } from '../mock-data/lipsum';

const totalNumberDataPoints = 50;
const getIdKey = ({ id }) => id;
const columns = [
  {
    label: 'Column 1',
    name: 'content1',
    render: (row) => row.content1,
    sortable: true,
    sorted: 'ascend',
  },
  {
    label: 'Column 2',
    name: 'content2',
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
    width: '40vw',
    sortable: true,
  },
  {
    label: 'Column 5',
    name: 'content5',
    render: (row) => row.content5,
  },
];

function generateData(numberElements) {
  return getLipsumObjectArray({
    keys: columns.map((column) => column.name),
    numberElements,
  });
}

export const DataLoaderDecorator = ({ children, ...props }) => {
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

DataLoaderDecorator.propTypes = {
  children: PropTypes.func.isRequired,
};

export const DataDecorator = ({ children, ...props }) => (
  <div {...props}>
    {children({
      data: generateData(totalNumberDataPoints),
      getIdKey,
      columns,
    })}
  </div>
);
DataDecorator.propTypes = {
  children: PropTypes.func.isRequired,
};
