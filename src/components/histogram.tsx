import { type HTMLAttributes, useMemo } from 'react';
import { scaleLinear } from 'd3';
import cn from 'classnames';

import XAxis from './histogram-x-axis';
import YAxis from './histogram-y-axis';

import '../styles/components/histogram.scss';

export type Range = [start: number, end: number];

type Props = {
  /**
   * The left-most, smallest, value the histogram starts at irrespective of the array values. Defaults to min(values).
   */
  min?: number;
  /**
   * The right-most, largest, value the histogram ends at irrespective of the array values. Defaults to max(values).
   */
  max?: number;
  /**
   * An array of values which the histogram is based on.
   */
  values: number[];
  /**
   * An array of unfiltered values which the histogram is based on.
   * (useful to calculated max bin height)
   */
  unfilteredValues?: number[];
  /**
   * A value which specifies the start and end points selected by the user.
   */
  selectedRange?: Range;
  /**
   * The height in pixels of the bin with the most values.
   */
  height?: number;
  /**
   * Label to appear to the left of the axis
   */
  yLabel?: string;
  /**
   * Label to appear under the axis
   */
  xLabel?: string;
  /**
   * Display a shadow of the unfiltered data (opacity value)
   */
  unfilteredValuesShadow?: number;
  /**
   * Additional CSS classnames to apply (eg secondary, tertiary)
   */
  className?: string;
} & (
  | {
      /**
       * Number of bins (intervals) which the values are allocated to.
       * One of either binSize or nBins must be provided.
       */
      nBins: number;
      binSize?: never;
    }
  | {
      nBins?: never;
      /**
       * The interval size of each bin.
       * One of either binSize or nBins must be provided.
       */
      binSize: number;
    }
);

const Histogram = ({
  selectedRange,
  values,
  unfilteredValues,
  nBins: nBinsOrUndef,
  min: minOrUndef,
  max: maxOrUndef,
  height = 300,
  binSize: binSizeOrUndef,
  xLabel,
  yLabel,
  unfilteredValuesShadow = 0,
  className,
  children,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  const allValues = unfilteredValues || values;

  const [getIndex, nBins, binSize, min, max] = useMemo(() => {
    // Assign sensible default values if not provided
    const innerMin =
      minOrUndef === undefined ? Math.min(...values) : minOrUndef;
    const innerMax =
      maxOrUndef === undefined ? Math.max(...values) : maxOrUndef;
    let innerBinSize = 0;
    let innerNBins = 0;
    if (!nBinsOrUndef && binSizeOrUndef) {
      innerBinSize = binSizeOrUndef;
      innerNBins = Math.ceil((innerMax - innerMin) / innerBinSize);
    } else if (nBinsOrUndef && !binSizeOrUndef) {
      innerNBins = nBinsOrUndef;
      innerBinSize = (innerMax - innerMin) / innerNBins;
    }
    // Create a convenience getIndex function
    const innerGetIndex = (value: number) =>
      Math.min(Math.floor((value - innerMin) / innerBinSize), nBins - 1);
    return [innerGetIndex, innerNBins, innerBinSize, innerMin, innerMax];
  }, [binSizeOrUndef, maxOrUndef, minOrUndef, nBinsOrUndef, values]);

  // Construct bins
  const [bins, allBins, yScale, transformScaleY] = useMemo(() => {
    const innerBins = Array(nBins).fill(0);
    const allDataBins = Array(nBins).fill(0);
    for (const value of values) {
      innerBins[getIndex(value)] += 1;
    }
    for (const value of allValues) {
      allDataBins[getIndex(value)] += 1;
    }
    const maxCount = Math.max(...allDataBins);
    const domainMax = Math.ceil(maxCount / 5) * 5;
    const innerYScale = scaleLinear().domain([0, domainMax]).range([height, 0]);
    const innerTransformScaleY = (count: number) =>
      (innerYScale(domainMax - count) || 0) / height;
    return [innerBins, allDataBins, innerYScale, innerTransformScaleY];
  }, [getIndex, height, nBins, values, allValues]);

  const [startIndex, endIndex] = [
    getIndex(selectedRange?.[0] ?? min),
    getIndex(selectedRange?.[1] ?? max),
  ];

  return (
    <div
      className={cn('histogram', className)}
      data-testid="histogram"
      {...props}
    >
      {unfilteredValuesShadow ? (
        <div
          className="histogram__bar-shadow-container"
          style={{ height, opacity: unfilteredValuesShadow }}
        >
          {allBins.map((count, index) => {
            const withinRange = startIndex <= index && index <= endIndex;
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
          const withinRange = startIndex <= index && index <= endIndex;
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
      {xLabel && (
        <XAxis
          min={min}
          max={max}
          interval={binSize}
          yPos={height}
          label={xLabel}
        />
      )}
      {yLabel && <YAxis scale={yScale} height={height} label={yLabel} />}
      {children}
    </div>
  );
};

export default Histogram;
