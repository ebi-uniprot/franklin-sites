import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from './layout/DefaultPageLayout';
import { getLipsumObjectArray } from './common/lipsum';
import DataList from './DataList';
import DataTable from '../components/data-table';

const CARDS = 'CARDS';
const TABLE = 'TABLE';

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

const ScrollItemsLoaderDemoContent = () => {
  const [selected, setSelected] = useState({});
  const [view, setView] = useState(TABLE);

  let loadingData = false;
  const idKey = 'id';
  const numberDataPointsPerRequest = 6;
  const totalNumberDataPoints = 50;
  const sleepDuration = 0.75;
  const numberInitialDataPoints = 1;
  const selectable = true;

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
    <div className="data-view">
      <div className="data-view__dashboard">
        <ViewButtons {...{ view, setView }} />
        <h4>{`Number of data points loaded: ${data.length} / ${totalNumberDataPoints}`}</h4>
      </div>
      <div className="data-view__container">
        {view === CARDS && (
          <DataList
            {...{
              data,
              hasMoreData,
              idKey,
              selected,
              selectable,
              onSelect,
              onLoadMoreItems,
            }}
          />
        )}
        {view === TABLE && (
          <DataTable
            {...{
              hasMoreData,
              data,
              idKey,
              columns,
              onSelect,
              selected,
              onHeaderClick,
              onLoadMoreItems,
            }}
            selectable
          />
        )}
      </div>
    </div>
  );
};

const ScrollItemsLoaderDemo = () => (
  <DefaultPageLayout title="Franklin - Data Table" content={<ScrollItemsLoaderDemoContent />} />
);

function ViewButtons({ view, setView }) {
  return (
    <div className="button-group">
      <button
        className={`button ${view !== CARDS ? 'secondary' : ''}`}
        type="button"
        onClick={() => setView(CARDS)}
      >
        Cards View
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
  view: PropTypes.oneOf([CARDS, TABLE]).isRequired,
  setView: PropTypes.func.isRequired,
};

export default ScrollItemsLoaderDemo;
