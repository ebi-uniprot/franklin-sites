import { useRef, useEffect, useMemo } from 'react';
import { scaleLinear, axisBottom, select, range } from 'd3';
import useSize from '../hooks/useSize';

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
   * Label to appear under the axis
   */
  label: string;
};

const HEIGHT = 80;

const XAxis = ({ min, max, interval, yPos, label }: Props) => {
  const d3Container = useRef<SVGSVGElement>(null);
  const [size] = useSize(d3Container);

  useEffect(() => {
    if (size?.width && d3Container.current) {
      const scale = scaleLinear().domain([min, max]).range([0, size.width]);
      const axis = axisBottom(scale)
        .tickValues(range(min, max + interval, interval))
        .tickPadding(6);
      axis.tickSize(0);
      const svg = select(d3Container.current);
      svg.selectAll('*').remove();
      svg.append('g').call(axis);
      svg
        .append('text')
        .attr('transform', `translate(${size.width / 2}, ${HEIGHT / 2})`)
        .style('text-anchor', 'middle')
        .text(label);
    }
  }, [interval, label, max, min, size?.width]);

  const style = useMemo(() => ({ top: yPos }), [yPos]);

  return <svg style={style} width="100%" height={HEIGHT} ref={d3Container} />;
};

export default XAxis;
