import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';
import { range } from 'd3-array';

const XAxis = ({ min, max, interval, yPos, width }) => {
  const d3Container = useRef(null);
  useEffect(() => {
    if (width && d3Container.current) {
      const scale = scaleLinear()
        .domain([min, max])
        .range([0, width]);
      const axis = axisBottom()
        .scale(scale)
        .tickValues(range(min, max + interval, interval));
      axis.tickSize(0);
      const svg = select(d3Container.current);
      svg.selectAll('*').remove();
      svg.append('g').call(axis);
    }
  }, [interval, max, min, width]);

  return (
    <svg
      style={{ top: yPos, position: 'absolute' }}
      width={width}
      height={100}
      ref={d3Container}
    />
  );
};

XAxis.propTypes = {
  /**
   * The start point of the axis
   */
  min: PropTypes.number.isRequired,
  /**
   * The end point of the axis
   */
  max: PropTypes.number.isRequired,
  /**
   * Interval size between each tick
   */
  interval: PropTypes.number.isRequired,
  /**
   * The top offset to vertically shift the axis
   */
  yPos: PropTypes.number.isRequired,
  /**
   * The width of the axis
   */
  width: PropTypes.number,
};

XAxis.defaultProps = {
  width: null,
};
export default XAxis;
