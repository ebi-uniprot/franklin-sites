import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
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
  nBins,
  height,
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
HistogramFilter.propTypes = {
  /**
   * The left-most, smallest, value the histogram starts at irrespective of the array values. Defaults to min(values).
   */
  min: PropTypes.number,
  /**
   * The right-most, largest, value the histogram ends at irrespective of the array values. Defaults to max(values).
   */
  max: PropTypes.number,
  /**
   * An array of values which the histogram is based on.
   */
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * Additional CSS classnames to apply (eg secondary, tertiary)
   */
  selectedRange: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func.isRequired,
  nBins: PropTypes.number,
  height: PropTypes.number,
};

HistogramFilter.defaultProps = {
  min: null,
  max: null,
  selectedRange: null,
  nBins: 50,
  height: 300,
};
export default HistogramFilter;
