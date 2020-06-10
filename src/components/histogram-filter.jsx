import React, { Fragment, useState } from 'react';
import 'rheostat/initialize';
import Rheostat from 'rheostat';
import 'rheostat/css/rheostat.css';
import '../styles/components/histogram-filter.scss';

const getIndexForBinSize = binSize => value => Math.floor(value / binSize);

const HistogramFilter = ({
  min,
  max,
  values,
  selectedRange,
  onChange,
  nBins = 50,
  height = 300,
}) => {
  const binSize = (max - min) / nBins;
  const getIndex = getIndexForBinSize(binSize);
  const [rangeIndex, setRangeIndex] = useState([getIndex(min), getIndex(max)]);
  const bins = Array(nBins).fill(0);
  values.forEach(value => {
    bins[getIndex(value)] += 1;
  });
  const [startIndex, endIndex] = rangeIndex;
  const maxCount = Math.max(...bins);
  return (
    <Fragment>
      <div className="histogram">
        {bins.map((count, index) => {
          const withinRange = startIndex <= index && index < endIndex;
          const key = `bin${index}`;
          return (
            <div
              key={key}
              className={`histogram histogram__bar ${
                withinRange ? 'histogram__bar--within-range' : ''
              }`}
              style={{
                height,
                transform: `scaleY(${count / maxCount})`,
              }}
            />
          );
        })}
      </div>
      <Rheostat
        min={1}
        max={100}
        values={selectedRange}
        onChange={onChange}
        onValuesUpdated={({ values: [start, end] }) => {
          setRangeIndex([getIndex(start), getIndex(end)]);
        }}
      />
    </Fragment>
  );
};

export default HistogramFilter;
