import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { SizeMe } from 'react-sizeme';
import { scaleLinear } from 'd3-scale';
import cn from 'classnames';

import XAxis from './histogram-x-axis';
import YAxis from './histogram-y-axis';

import '../styles/components/histogram.scss';

const Histogram = ({
  selectedRange,
  values,
  unfilteredValues,
  nBins: nBinsOrNull,
  min: minOrNull,
  max: maxOrNull,
  height,
  binSize: binSizeOrNull,
  showAxes,
  xLabel,
  yLabel,
  unfilteredValuesShadow,
}) => {
  const allValues = unfilteredValues || values;

  const [getIndex, nBins, binSize, min, max] = useMemo(() => {
    // Assign sensible default values if not provided
    const innerMin = minOrNull === null ? Math.min(...values) : minOrNull;
    const innerMax = maxOrNull === null ? Math.max(...values) : maxOrNull;
    let innerBinSize;
    let innerNBins;
    if (nBinsOrNull === null && binSizeOrNull !== null) {
      innerBinSize = binSizeOrNull;
      innerNBins = Math.ceil((innerMax - innerMin) / innerBinSize);
    } else if (nBinsOrNull !== null && binSizeOrNull === null) {
      innerNBins = nBinsOrNull;
      innerBinSize = (innerMax - innerMin) / innerNBins;
    } else {
      throw Error(
        'Histogram: must specify only one of either: nBins or binSize'
      );
    }
    // Create a convenience getIndex function
    const innerGetIndex = value =>
      Math.min(Math.floor((value - innerMin) / innerBinSize), nBins - 1);
    return [innerGetIndex, innerNBins, innerBinSize, innerMin, innerMax];
  }, [binSizeOrNull, maxOrNull, minOrNull, nBinsOrNull, values]);

  // Construct bins
  const [bins, allBins, yScale, transformScaleY] = useMemo(() => {
    const innerBins = Array(nBins).fill(0);
    const allDataBins = Array(nBins).fill(0);
    values.forEach(value => {
      innerBins[getIndex(value)] += 1;
    });
    allValues.forEach(value => {
      allDataBins[getIndex(value)] += 1;
    });
    const maxCount = Math.max(...allDataBins);
    const domainMax = Math.ceil(maxCount / 5) * 5;
    const innerYScale = scaleLinear()
      .domain([0, domainMax])
      .range([height, 0]);
    const innerTransformScaleY = count => yScale(domainMax - count) / height;
    return [innerBins, allDataBins, innerYScale, innerTransformScaleY];
  }, [getIndex, height, nBins, values, allValues]);

  window.yScale = yScale;

  let startIndex;
  let endIndex;
  if (selectedRange !== null) {
    [startIndex, endIndex] = [
      getIndex(selectedRange[0]),
      getIndex(selectedRange[1]),
    ];
  }

  return (
    <SizeMe>
      {({ size }) => (
        <div className="histogram" data-testid="histogram">
          {unfilteredValuesShadow ? (
            <div
              className="histogram__bar-shadow-container"
              style={{ height, opacity: unfilteredValuesShadow }}
            >
              {allBins.map((count, index) => {
                const withinRange =
                  selectedRange === null ||
                  (startIndex <= index && index <= endIndex);
                return (
                  <div
                    key={index} // eslint-disable-line react/no-array-index-key
                    data-testid="histogram-bar"
                    className={cn(
                      'histogram histogram__bar',
                      withinRange && 'histogram__bar--within-range'
                    )}
                    style={{ transform: `scaleY(${transformScaleY(count)})` }}
                  />
                );
              })}
            </div>
          ) : null}
          <div className="histogram__bar-container" style={{ height }}>
            {bins.map((count, index) => {
              const withinRange =
                selectedRange === null ||
                (startIndex <= index && index <= endIndex);
              return (
                <div
                  key={index} // eslint-disable-line react/no-array-index-key
                  data-testid="histogram-bar"
                  className={cn(
                    'histogram histogram__bar',
                    withinRange && 'histogram__bar--within-range'
                  )}
                  style={{
                    transform: `scaleY(${transformScaleY(count)})`,
                    transitionDelay: `${Math.floor((500 * index) / nBins)}ms`,
                  }}
                />
              );
            })}
          </div>
          {showAxes && (
            <>
              <XAxis
                min={min}
                max={max}
                interval={binSize}
                yPos={height}
                width={size.width}
                label={xLabel}
              />
              <YAxis scale={yScale} height={height} label={yLabel} />
            </>
          )}
        </div>
      )}
    </SizeMe>
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
   * An array of unfiltered values which the histogram is based on.
   * (useful to calculated max bin height)
   */
  unfilteredValues: PropTypes.arrayOf(PropTypes.number),
  /**
   * A 2-element array which specifies [start, end] points to shade the bars to indicate selection.
   */
  selectedRange: PropTypes.arrayOf(PropTypes.number),
  /**
   * Number of bins (intervals) which the values are allocated to. One of either binSize or nBins must be provided.
   */
  nBins: PropTypes.number,
  /**
   * The height in pixels of the bin with the most values.
   */
  height: PropTypes.number,
  /**
   * The interval size of each bin. One of either binSize or nBins must be provided.
   */
  binSize: PropTypes.number,
  /**
   * Optional flag to show x (bins) and y (counts) axis
   */
  showAxes: PropTypes.bool,
  /**
   * Label to appear to the left of the axis
   */
  yLabel: PropTypes.string,
  /**
   * Label to appear under the axis
   */
  xLabel: PropTypes.string,
  /**
   * Display a shadow of the unfiltered data (opacity value)
   */
  unfilteredValuesShadow: PropTypes.number,
};

Histogram.defaultProps = {
  min: null,
  max: null,
  nBins: null,
  height: 300,
  selectedRange: null,
  binSize: null,
  showAxes: true,
  xLabel: null,
  yLabel: null,
  unfilteredValues: undefined,
  unfilteredValuesShadow: 0,
};

export default Histogram;
