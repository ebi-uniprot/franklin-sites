import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'rheostat/initialize';
import Rheostat from 'rheostat';

import Histogram from './histogram';

import 'rheostat/css/rheostat.css';
import '../styles/components/histogram-filter.scss';

const isNumberString = (string) => {
  try {
    const number = parseInt(string, 10);
    return Number.isFinite(number);
  } catch (error) {
    return false;
  }
};

const cleanNumber = (string) => {
  try {
    const number = parseFloat(string);
    return Number.isFinite(number) && number;
  } catch (error) {
    return false;
  }
};

const cleanRange = (start, end, min, max) => [
  Math.max(cleanNumber(start) || min, min),
  Math.min(cleanNumber(end) || max, max),
];

const round = (value) =>
  value === 0 || value > 0.1
    ? Math.round(value * 100) / 100
    : value.toExponential(2);

const HistogramFilter = ({
  min: minOrNull,
  max: maxOrNull,
  values,
  unfilteredValues,
  selectedRange,
  onChange,
  nBins,
  height,
  className,
  ...props
}) => {
  const [min, max] = useMemo(() => {
    // Assign sensible default values if not provided
    const innerMin = minOrNull === null ? Math.min(...values) : minOrNull;
    const innerMax = maxOrNull === null ? Math.max(...values) : maxOrNull;
    return [innerMin, innerMax];
  }, [maxOrNull, minOrNull, values]);

  const [range, setRange] = useState(
    selectedRange && Array.isArray(selectedRange) && selectedRange.length === 2
      ? selectedRange
      : [min, max]
  );

  // algorithm used by Rheostat component
  const algorithm = useMemo(() => {
    // find needed precision depending on spread of bounds, minimum precision: 1
    const precision = Math.max(1, 100 / (max - min));
    return {
      getPosition(value, min, max) {
        return ((value - min) / (max - min)) * 100;
      },

      getValue(pos, min, max) {
        const decimal = pos / 100;

        if (pos === 0) {
          return min;
        }

        if (pos === 100) {
          return max;
        }

        return (
          Math.round(((max - min) * decimal + min) * precision) / precision
        );
      },
    };
  }, [max, min]);

  const [startValue, endValue] = range;
  const startTextValue = `${round(startValue)}`;
  const endTextValue = `${round(endValue)}`;

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
    <div className={cn('histogram-filter', className)} {...props}>
      <div className="histogram-filter__histogram-rheostat-container">
        <Histogram
          values={values}
          unfilteredValues={unfilteredValues}
          selectedRange={cleanedRange}
          nBins={nBins}
          min={min}
          max={max}
          height={height}
          showAxes={false}
        />
        <Rheostat
          min={min}
          max={max}
          algorithm={algorithm}
          values={cleanedRange}
          onChange={(e) => {
            onChange(e.values.map(round));
          }}
          onValuesUpdated={({ values: [start, end] }) => {
            setRange([start, end]);
          }}
        />
      </div>
      <div className="histogram-filter__text-input-container">
        <input
          type="number"
          min={min}
          max={max}
          onChange={(e) => {
            handleTextInputChange([e.target.value, endValue]);
          }}
          value={startTextValue}
          onBlur={handleTextInputBlur}
          style={{ width: `${startTextValue.length + 2}ch` }}
        />
        <input
          type="number"
          min={min}
          max={max}
          onChange={(e) => {
            handleTextInputChange([startValue, e.target.value]);
          }}
          value={endTextValue}
          onBlur={handleTextInputBlur}
          style={{ width: `${endTextValue.length + 2}ch` }}
        />
      </div>
    </div>
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
   * An array of unfiltered values which the histogram is based on.
   * (useful to calculated max bin height)
   */
  unfilteredValues: PropTypes.arrayOf(PropTypes.number),
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
  /**
   * Additional CSS classnames to apply (eg secondary, tertiary)
   */
  className: PropTypes.string,
  /**
   * Optional extra props to pass to the chip
   */
  props: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/require-default-props
};

HistogramFilter.defaultProps = {
  min: null,
  max: null,
  nBins: 30,
  height: 50,
  unfilteredValues: undefined,
  className: undefined,
};

export default HistogramFilter;
