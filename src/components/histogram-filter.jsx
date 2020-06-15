import React, { Fragment, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import 'rheostat/initialize';
import Rheostat from 'rheostat';
import 'rheostat/css/rheostat.css';
import '../styles/components/histogram-filter.scss';

const isNumberString = string => {
  try {
    const number = parseInt(string, 10);
    return Number.isFinite(number);
  } catch (error) {
    return false;
  }
};

const cleanNumber = string => {
  try {
    const number = parseInt(string, 10);
    return Number.isFinite(number) && number;
  } catch (error) {
    return false;
  }
};

const cleanRange = (start, end, min, max) => [
  Math.max(cleanNumber(start) || min, min),
  Math.min(cleanNumber(end) || max, max),
];

const HistogramFilter = ({
  min: minOrNull,
  max: maxOrNull,
  values,
  selectedRange,
  onChange,
  nBins,
  height,
}) => {
  const [min, max, getIndex, inputWidth] = useMemo(() => {
    // Assign sensible default values if not provided
    const innerMin = minOrNull === null ? Math.min(...values) : minOrNull;
    const innerMax = maxOrNull === null ? Math.max(...values) : maxOrNull;
    // Create a convenience getIndex function
    const innerGetIndex = value =>
      Math.floor(value / ((innerMax - innerMin) / nBins));
    // Use the number of digits in the maximum number to determine the width (rem) of the
    // text input boxes. Add a bit more (2.3) for up/down html input controls.
    const innerInputWidth = Math.floor(Math.log10(innerMax)) + 2.3;
    return [innerMin, innerMax, innerGetIndex, innerInputWidth];
  }, [maxOrNull, minOrNull, nBins, values]);

  const [range, setRange] = useState(
    selectedRange && Array.isArray(selectedRange) && selectedRange.length === 2
      ? selectedRange
      : [min, max]
  );

  const [startValue, endValue] = range;
  const [startIndex, endIndex] = [getIndex(startValue), getIndex(endValue)];

  // Construct bins
  const [bins, maxCount] = useMemo(() => {
    const innerBins = Array(nBins).fill(0);
    values.forEach(value => {
      innerBins[getIndex(value)] += 1;
    });
    const innerMaxCount = Math.max(...innerBins);
    return [innerBins, innerMaxCount];
  }, [getIndex, nBins, values]);

  const cleanedRange = cleanRange(startValue, endValue, min, max);

  const handleTextInputBlur = () => {
    setRange(cleanedRange);
  };

  const handleTextInputChange = ([start, end]) => {
    if (isNumberString(start) && isNumberString(end)) {
      onChange(cleanRange(start, end, min, max));
    }
    setRange([start, end]);
  };
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
        min={min}
        max={max}
        values={cleanedRange}
        onChange={e => {
          onChange(e.values);
        }}
        onValuesUpdated={({ values: [start, end] }) => {
          setRange([start, end]);
        }}
      />
      <div className="text-input">
        <input
          type="number"
          min={min}
          max={max}
          onChange={e => {
            handleTextInputChange([e.target.value, endValue]);
          }}
          value={startValue}
          onBlur={handleTextInputBlur}
          style={{ width: `${inputWidth}rem` }}
        />
        <input
          type="number"
          min={min}
          max={max}
          onChange={e => {
            handleTextInputChange([startValue, e.target.value]);
          }}
          value={endValue}
          onBlur={handleTextInputBlur}
          style={{ width: `${inputWidth}rem` }}
        />
      </div>
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
