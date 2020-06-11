import React, { Fragment, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import 'rheostat/initialize';
import Rheostat from 'rheostat';
import 'rheostat/css/rheostat.css';
import '../styles/components/histogram-filter.scss';

const HistogramFilter = ({
  min: minOrNull,
  max: maxOrNull,
  values,
  selectedRange,
  onChange,
  nBins,
  height,
}) => {
  const [min, max, getIndex] = useMemo(() => {
    // Assign sensible default values if not provided
    const innerMin = minOrNull === null ? Math.min(...values) : minOrNull;
    const innerMax = maxOrNull === null ? Math.max(...values) : maxOrNull;
    // Create a convenience getIndex function
    const innerGetIndex = value =>
      Math.floor(value / ((innerMax - innerMin) / nBins));
    return [innerMin, innerMax, innerGetIndex];
  }, [maxOrNull, minOrNull, nBins, values]);

  // The start and end indices that correspond to the current selected range values
  const [[startIndex, endIndex], setRangeIndex] = useState([
    getIndex(min),
    getIndex(max),
  ]);

  // Construct bins
  const [bins, maxCount] = useMemo(() => {
    const innerBins = Array(nBins).fill(0);
    values.forEach(value => {
      innerBins[getIndex(value)] += 1;
    });
    const innerMaxCount = Math.max(...innerBins);
    return [innerBins, innerMaxCount];
  }, [getIndex, nBins, values]);

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
   * A 2-element array which specifies the [start, end] points selected by the user. Defaults to [min, max].
   */
  selectedRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * A callback that returns the selected and final (ie after drag) range.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Number of bins (intervals) which the values are allocated to. Each interval is of the size (max - min) / nBins. Defaults to 50.
   */
  nBins: PropTypes.number,
  /**
   * The height in pixels of the bin with the most values. Defaults to 300.
   */
  height: PropTypes.number,
};

HistogramFilter.defaultProps = {
  min: null,
  max: null,
  nBins: 50,
  height: 300,
};
export default HistogramFilter;
