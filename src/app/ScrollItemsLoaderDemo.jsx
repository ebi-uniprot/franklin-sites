import React, { Fragment, useState } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import { getLipsumObjectArray } from './common/lipsum';
import DataList from './DataList';

const ScrollItemsLoaderDemoContent = () => {
  const [selected, setSelected] = useState({});

  let loadingData = false;
  const idKey = 'id';
  const numberDataPointsPerRequest = 6;
  const totalNumberDataPoints = 50;
  const sleepDuration = 0.75;
  const numberInitialDataPoints = 1;

  function generateData(numberElements) {
    return getLipsumObjectArray({
      keys: ['content'],
      idKey,
      numberElements,
    });
  }

  const [data, setData] = useState(
    numberInitialDataPoints > 0 ? generateData(numberInitialDataPoints) : [],
  );

  function loadMoreItems() {
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

  return (
    <Fragment>
      <h4 className="scroll-data-loader__status">
        Number of data points loaded:
        {` ${data.length} / ${totalNumberDataPoints}`}
      </h4>
      <DataList
        data={data}
        loadMoreItems={loadMoreItems}
        hasMoreItems={data.length < totalNumberDataPoints}
        idKey={idKey}
        onSelect={id => setSelected({ ...selected, [id]: !selected[id] })}
        selected={selected}
      />
    </Fragment>
  );
};

const ScrollItemsLoaderDemo = () => (
  <DefaultPageLayout title="Franklin - Data Table" content={<ScrollItemsLoaderDemoContent />} />
);

export default ScrollItemsLoaderDemo;
