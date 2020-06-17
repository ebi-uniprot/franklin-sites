import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/histogram.scss';

const Histogram = ({
  selectedRange,
  values,
  nBins,
  min: minOrNull,
  max: maxOrNull,
  height,
}) => {
  const getIndex = useMemo(() => {
    // Assign sensible default values if not provided
    const min = minOrNull === null ? Math.min(...values) : minOrNull;
    const max = maxOrNull === null ? Math.max(...values) : maxOrNull;
    // Create a convenience getIndex function
    const innerGetIndex = value => Math.floor(value / ((max - min) / nBins));
    return innerGetIndex;
  }, [maxOrNull, minOrNull, nBins, values]);

  // Construct bins
  const [bins, maxCount] = useMemo(() => {
    const innerBins = Array(nBins).fill(0);
    values.forEach(value => {
      innerBins[getIndex(value)] += 1;
    });
    const innerMaxCount = Math.max(...innerBins);
    return [innerBins, innerMaxCount];
  }, [getIndex, nBins, values]);

  const [startIndex, endIndex] = [
    getIndex(selectedRange[0]),
    getIndex(selectedRange[1]),
  ];

  return (
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
  );
};

Histogram.propTypes = {
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
   * Number of bins (intervals) which the values are allocated to. Each interval is of the size (max - min) / nBins. Defaults to 50.
   */
  nBins: PropTypes.number,
  /**
   * The height in pixels of the bin with the most values. Defaults to 300.
   */
  height: PropTypes.number,
};

Histogram.defaultProps = {
  min: null,
  max: null,
  nBins: 50,
  height: 300,
};

export default Histogram;
