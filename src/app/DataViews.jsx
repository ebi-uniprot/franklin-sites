import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from './layout/DefaultPageLayout';
import { getLipsumObjectArray } from './common/lipsum';
import DataList from '../components/data-list';
import DataTable from '../components/data-table';

const LIST = 'LIST';
const TABLE = 'TABLE';

const DataViewsContent = () => {
  const [selected, setSelected] = useState({});
  const [view, setView] = useState(LIST);

  let loadingData = false;
  const idKey = 'id';
  const numberDataPointsPerRequest = 6;
  const totalNumberDataPoints = 50;
  const sleepDuration = 0.75;
  const numberInitialDataPoints = 1;
  const selectable = true;
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
    numberInitialDataPoints > 0 ? generateData(numberInitialDataPoints) : [],
  );

  function onLoadMoreItems() {
    if (loadingData) {
      return null;
    }
    loadingData = true;
    const numberDataPoints = Math.min(
      numberDataPointsPerRequest,
      totalNumberDataPoints - data.length,
    );
    const moreData = generateData(numberDataPoints);
    return setTimeout(() => {
      loadingData = false;
      setData([...data, ...moreData]);
    }, sleepDuration * 1000);
  }

  const hasMoreData = data.length < totalNumberDataPoints;
  const onSelect = id => setSelected({ ...selected, [id]: !selected[id] });
  const onHeaderClick = (columnName) => {
    // eslint-disable-next-line no-console
    console.log(`Header for column "${columnName}" clicked.`);
  };
  return (
    <Fragment>
      <div className="data-view__dashboard">
        <ViewButtons {...{ view, setView }} />
        <h4>{`Number of data points loaded: ${data.length} / ${totalNumberDataPoints}`}</h4>
      </div>
      <div className="data-view__container">
        {view === LIST && (
          <DataList
            {...{
              data,
              idKey,
              onSelect,
              hasMoreData,
              onLoadMoreItems,
              selectable,
              selected,
              dataRender: content => <Fragment>{Object.values(content)}</Fragment>,
            }}
          />
        )}
        {view === TABLE && (
          <DataTable
            {...{
              data,
              idKey,
              onSelect,
              hasMoreData,
              onLoadMoreItems,
              selectable,
              selected,
              columns,
              onHeaderClick,
            }}
          />
        )}
      </div>
    </Fragment>
  );
};

function ViewButtons({ view, setView }) {
  return (
    <div className="button-group">
      <button
        className={`button ${view !== LIST ? 'secondary' : ''}`}
        type="button"
        onClick={() => setView(LIST)}
      >
        List View
      </button>
      <button
        className={`button ${view !== TABLE ? 'secondary' : ''}`}
        type="button"
        onClick={() => setView(TABLE)}
      >
        Table View
      </button>
    </div>
  );
}

ViewButtons.propTypes = {
  view: PropTypes.oneOf([LIST, TABLE]).isRequired,
  setView: PropTypes.func.isRequired,
};

const DataViews = () => (
  <DefaultPageLayout title="Franklin - Data Table" content={<DataViewsContent />} />
);

export default DataViews;
