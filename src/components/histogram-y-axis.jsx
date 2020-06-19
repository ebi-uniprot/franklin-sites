import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

const YAxis = ({ scale, height }) => {
  const d3Container = useRef(null);
  useEffect(() => {
    if (d3Container.current) {
      const axis = axisLeft().scale(scale);
      axis.tickSize(0);
      const svg = select(d3Container.current);
      svg.selectAll('*').remove();
      svg
        .append('g')
        .attr('transform', 'translate(50, 0)')
        .call(axis);
    }
  }, [scale]);

  return (
    <svg
      style={{ left: -50, position: 'absolute' }}
      width={100}
      height={height}
      ref={d3Container}
    />
  );
};

YAxis.propTypes = {
  /**
   * D3 scale function
   */
  scale: PropTypes.func.isRequired,
  /**
   * The height of axis component
   */
  height: PropTypes.number.isRequired,
};

export default YAxis;
