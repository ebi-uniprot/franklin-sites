import React, { useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { SizeMe } from 'react-sizeme';
import { scaleLinear } from 'd3-scale';
import XAxis from './XAxis';
import YAxis from './YAxis';
import '../styles/components/histogram.scss';

const Histogram = ({
  selectedRange,
  values,
  nBins: nBinsOrNull,
  min: minOrNull,
  max: maxOrNull,
  height,
  binSize: binSizeOrNull,
  showAxes,
}) => {
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
  const [bins, yScale, transformScaleY] = useMemo(() => {
    const innerBins = Array(nBins).fill(0);
    values.forEach(value => {
      innerBins[getIndex(value)] += 1;
    });
    const maxCount = Math.max(...innerBins);
    const domainMax = Math.ceil(maxCount / 5) * 5;
    const innerYScale = scaleLinear()
      .domain([0, domainMax])
      .range([height, 0]);
    const innerTransformScaleY = count => yScale(domainMax - count) / height;
    return [innerBins, innerYScale, innerTransformScaleY];
  }, [getIndex, height, nBins, values]);

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
          {showAxes && (
            <Fragment>
              <XAxis
                min={min}
                max={max}
                interval={binSize}
                yPos={height}
                width={size.width}
              />
              <YAxis scale={yScale} height={height} />
            </Fragment>
          )}
          {bins.map((count, index) => {
            const withinRange =
              selectedRange === null ||
              (startIndex <= index && index <= endIndex);
            const key = `bin${index}`;
            return (
              <div
                key={key}
                className={`histogram histogram__bar ${
                  withinRange ? 'histogram__bar--within-range' : ''
                }`}
                style={{
                  height,
                  transform: `scaleY(${transformScaleY(count)})`,
                }}
              />
            );
          })}
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
   * A 2-element array which specifies the [start, end] points selected by the user. Defaults to [min, max].
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
};

Histogram.defaultProps = {
  min: null,
  max: null,
  nBins: null,
  height: 300,
  selectedRange: null,
  binSize: null,
  showAxes: true,
};

export default Histogram;
