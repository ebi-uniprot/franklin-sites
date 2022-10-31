import { useState, useMemo, useRef, HTMLAttributes, useEffect } from 'react';
import cn from 'classnames';
import { brushX, select, event, scaleLinear, BrushBehavior } from 'd3';

import Histogram, { Range } from './histogram';

import useSize from '../hooks/useSize';

import '../styles/components/histogram-filter.scss';

type Props = {
  /**
   * The left-most, smallest, value the histogram starts at irrespective of the
   * array values. Defaults to min(values).
   */
  min?: number;
  /**
   * The right-most, largest, value the histogram ends at irrespective of the
   * array values. Defaults to max(values).
   */
  max?: number;
  /**
   * An array of values which the histogram is based on.
   */
  values: number[];
  /**
   * An array of unfiltered values which the histogram is based on.
   * (useful to calculate max bin height)
   */
  unfilteredValues?: number[];
  /**
   * A value which specifies the start and end points selected by the user.
   */
  selectedRange: Range;
  /**
   * A callback that returns the selected and final (ie after drag) range.
   */
  onChange: (range: Range) => unknown;
  /**
   * Number of bins (intervals) which the values are allocated to.
   * Each interval is of the size (max - min) / nBins. Defaults to 50.
   */
  nBins?: number;
  /**
   * The height in pixels of the bin with the most values. Defaults to 300.
   */
  height?: number;
  /**
   * Display a shadow of the unfiltered data (opacity value)
   */
  unfilteredValuesShadow?: number;
  /**
   * Additional CSS classnames to apply (eg secondary, tertiary)
   */
  className?: string;
};

const HistogramFilter = ({
  min: minOrUndef,
  max: maxOrUndef,
  values,
  unfilteredValues,
  unfilteredValuesShadow,
  selectedRange,
  onChange,
  nBins = 30,
  height = 50,
  className,
  ...props
}: Props & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>) => {
  const d3Container = useRef<SVGSVGElement>(null);
  const [size] = useSize(d3Container);
  const brushRef = useRef<BrushBehavior<unknown>>();

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const [min, max] = useMemo(() => {
    // Assign sensible default values if not provided
    const innerMin =
      minOrUndef === undefined ? Math.min(...values) : minOrUndef;
    const innerMax =
      maxOrUndef === undefined ? Math.max(...values) : maxOrUndef;
    return [innerMin, innerMax];
  }, [maxOrUndef, minOrUndef, values]);

  const [startInput, setStartInput] = useState(`${min}`);
  const [endInput, setEndInput] = useState(`${max}`);

  useEffect(() => {
    if (!size) {
      return; // Can't position the brush correctly until we have a size
    }

    // Scale
    const scale = scaleLinear().domain([min, max]).range([0, size.width]);

    // On brush event
    const getOnBrush = (type?: string) => () => {
      const range = event.selection;
      // Update only if an event caused this to be called (not programmatic)
      if (event.sourceEvent && range) {
        const start = +`${scale.invert(range[0]).toPrecision(4)}`;
        const end = +`${scale.invert(range[1]).toPrecision(4)}`;
        setStartInput(`${start}`);
        setEndInput(`${end}`);
        if (type === 'end') {
          // Only when user stops brushing, send the new values
          onChangeRef.current([start, end]);
        }
      }
    };

    // Brush
    brushRef.current = brushX()
      .extent([
        [0, 0],
        [size.width, size.height],
      ])
      .on('start brush', getOnBrush())
      .on('end', getOnBrush('end'));

    // Tie the brush to the DOM
    const selection = select(d3Container.current).append('g');
    brushRef.current(selection);

    // eslint-disable-next-line consistent-return
    return () => {
      // Unbind listeners
      brushRef.current?.on('start brush end', null);
      // Remove selection
      selection.remove();
    };
  }, [size, min, max]);

  // Update the brush programatically when props are changed
  useEffect(() => {
    if (!size) {
      return; // Can't position the brush correctly until we have a size
    }
    const scale = scaleLinear().domain([min, max]).range([0, size.width]);
    // If the brush corresponds to the full range, remove it completely
    if (selectedRange[0] === min && selectedRange[1] === max) {
      brushRef.current?.move(select(d3Container.current).select('g'), null);
    } else {
      brushRef.current?.move(select(d3Container.current).select('g'), [
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        scale(selectedRange[0])!,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        scale(selectedRange[1])!,
      ]);
    }
  }, [min, max, selectedRange, size]);

  return (
    <div className={cn('histogram-filter', className)} {...props}>
      <Histogram
        values={values}
        unfilteredValues={unfilteredValues}
        unfilteredValuesShadow={unfilteredValuesShadow}
        selectedRange={selectedRange}
        nBins={nBins}
        min={min}
        max={max}
        height={height}
      >
        {/* Brush container */}
        <svg ref={d3Container} width="100%" height="100%" />
      </Histogram>
      <div className="histogram-filter__text-input-container">
        <input
          type="text"
          onChange={(e) => {
            const textValue = e.target.value;
            // Always update the input text state, regardless of if valid or not
            setStartInput(e.target.value);
            const numberValue = +textValue;
            // Only if the number if valid do we keep it in the range state
            if (
              !Number.isNaN(numberValue) &&
              numberValue < selectedRange[1] &&
              numberValue >= min
            ) {
              onChange([numberValue, selectedRange[1]]);
            }
          }}
          // On blur, set the input text state to whatever value is in range
          // state and move the brush
          onBlur={() => setStartInput(`${selectedRange[0]}`)}
          value={startInput}
          style={{ width: `${startInput.length + 2}ch` }}
        />
        <input
          type="text"
          onChange={(e) => {
            const textValue = e.target.value;
            // Always update the input text state, regardless of if valid or not
            setEndInput(e.target.value);
            const numberValue = +textValue;
            // Only if the number if valid do we keep it in the range state
            if (
              !Number.isNaN(numberValue) &&
              numberValue > selectedRange[0] &&
              numberValue <= max
            ) {
              onChange([selectedRange[0], numberValue]);
            }
          }}
          // On blur, reset the input text state to whatever value is in range
          onBlur={() => setEndInput(`${selectedRange[1]}`)}
          value={endInput}
          style={{ width: `${endInput.length + 2}ch` }}
        />
      </div>
    </div>
  );
};

export default HistogramFilter;
