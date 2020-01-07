import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getLipsumObjectArray } from '../mock-data/lipsum';

const DataDecorator = ({ children, ...props }) => {
  let loadingData = false;
  const idKey = 'id';
  const numberDataPointsPerRequest = 6;
  const totalNumberDataPoints = 50;
  const sleepDuration = 0.75;
  const numberInitialDataPoints = 1;

  const columns = [
    {
      label: 'Column 1',
      name: 'content1',
      render: row => row.content1,
      sortable: true,
      sorted: 'ascend',
    },
    {
      label: 'Column 2',
      name: 'content2',
      render: row => row.content2,
    },
    {
      label: 'Column 3',
      name: 'content3',
      render: row => row.content3,
      sortable: true,
    },
    {
      label: 'Column 4',
      name: 'content4',
      render: row => row.content4,
      sortable: true,
    },
    {
      label: 'Column 5',
      name: 'content5',
      render: row => row.content5,
    },
  ];

  function generateData(numberElements) {
    return getLipsumObjectArray({
      keys: columns.map(column => column.name),
      idKey,
      numberElements,
    });
  }

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
      {children(data, idKey, columns, hasMoreData, onLoadMoreItems)}
    </div>
  );
};

DataDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataDecorator;
