import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

const YAxis = ({ scale, height, label }) => {
  const width = 80;
  const d3Container = useRef(null);
  useEffect(() => {
    if (d3Container.current) {
      const axis = axisLeft()
        .scale(scale)
        .tickPadding(6);
      axis.tickSize(0);
      const svg = select(d3Container.current);
      svg.selectAll('*').remove();
      svg
        .append('g')
        .attr('transform', 'translate(50, 0)')
        .call(axis);

      if (label) {
        svg
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', width / 4)
          .attr('x', -height / 2)
          .style('text-anchor', 'middle')
          .text(label);
      }
    }
  }, [height, label, scale]);

  return (
    <svg width={width} height={height} ref={d3Container} className="y-axis" />
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
  /**
   * Label to appear to the left of the axis
   */
  label: PropTypes.string,
};

YAxis.defaultProps = {
  label: null,
};

export default YAxis;
