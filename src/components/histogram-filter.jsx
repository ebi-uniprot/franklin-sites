import React, { Fragment } from 'react';
import 'rheostat/initialize';
import Rheostat from 'rheostat';
import 'rheostat/css/rheostat.css';
import '../styles/components/histogram-filter.scss';

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
  const bins = Array(nBins).fill(0);
  values.forEach(value => {
    const index = Math.floor(value / binSize);
    bins[index] += 1;
  });
  const pixelsPerCount = height / Math.max(...bins);
  return (
    <Fragment>
      <div className="histogram">
        {bins.map(count => (
          <div
            className="histogram histogram__bar"
            style={{ height: pixelsPerCount * count }}
          />
        ))}
      </div>
      <Rheostat min={1} max={100} values={selectedRange} onChange={onChange} />
    </Fragment>
  );
};

export default HistogramFilter;
