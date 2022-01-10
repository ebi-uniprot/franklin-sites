import { useRef, useEffect } from 'react';
import { axisLeft, ScaleLinear, select } from 'd3';

type Props = {
  /**
   * D3 scale function
   */
  scale: ScaleLinear<number, number>;
  /**
   * The height of axis component
   */
  height: number;
  /**
   * Label to appear to the left of the axis
   */
  label?: string;
};

const YAxis = ({ scale, height, label }: Props) => {
  const width = 80;
  const d3Container = useRef(null);
  useEffect(() => {
    if (d3Container.current) {
      const axis = axisLeft(scale).tickPadding(6);
      axis.tickSize(0);
      const svg = select(d3Container.current);
      svg.selectAll('*').remove();
      svg.append('g').attr('transform', 'translate(50, 0)').call(axis);

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

export default YAxis;
