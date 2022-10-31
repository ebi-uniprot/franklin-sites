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
  label: string;
};

const WIDTH = 80;

const YAxis = ({ scale, height, label }: Props) => {
  const d3Container = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (d3Container.current) {
      const axis = axisLeft(scale).tickPadding(6);
      axis.tickSize(0);
      const svg = select(d3Container.current);
      svg.selectAll('*').remove();
      svg.append('g').attr('transform', 'translate(50, 0)').call(axis);
      svg
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', WIDTH / 4)
        .attr('x', -height / 2)
        .style('text-anchor', 'middle')
        .text(label);
    }
  }, [height, label, scale]);

  return (
    <svg width={WIDTH} height={height} ref={d3Container} className="y-axis" />
  );
};

export default YAxis;
