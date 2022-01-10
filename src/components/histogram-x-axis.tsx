import { useRef, useEffect, useMemo } from 'react';
import { scaleLinear, axisBottom, select, range } from 'd3';

type Props = {
  /**
   * The start point of the axis
   */
  min: number;
  /**
   * The end point of the axis
   */
  max: number;
  /**
   * Interval size between each tick
   */
  interval: number;
  /**
   * The top offset to vertically shift the axis
   */
  yPos: number;
  /**
   * The width of the axis
   */
  width?: number;
  /**
   * Label to appear under the axis
   */
  label?: string;
};

const XAxis = ({ min, max, interval, yPos, width, label }: Props) => {
  const height = 80;
  const d3Container = useRef(null);
  useEffect(() => {
    if (width && d3Container.current) {
      const scale = scaleLinear().domain([min, max]).range([0, width]);
      const axis = axisBottom(scale)
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

export default XAxis;
