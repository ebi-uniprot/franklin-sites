import { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear, axisBottom, select, range } from 'd3';

const XAxis = ({ min, max, interval, yPos, width, label }) => {
  const height = 80;
  const d3Container = useRef(null);
  useEffect(() => {
    if (width && d3Container.current) {
      const scale = scaleLinear().domain([min, max]).range([0, width]);
      const axis = axisBottom()
        .scale(scale)
        .tickValues(range(min, max + interval, interval))
        .tickPadding(6);
      axis.tickSize(0);
      const svg = select(d3Container.current);
      svg.selectAll('*').remove();
      svg.append('g').call(axis);

      if (label) {
        svg
          .append('text')
          .attr('transform', `translate(${width / 2},${height / 2})`)
          .style('text-anchor', 'middle')
          .text(label);
      }
    }
  }, [interval, label, max, min, width]);

  const style = useMemo(() => ({ top: yPos }), [yPos]);

  return <svg style={style} width={width} height={height} ref={d3Container} />;
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
  /**
   * Label to appear under the axis
   */
  label: PropTypes.string,
};

XAxis.defaultProps = {
  width: null,
  label: null,
};
export default XAxis;
