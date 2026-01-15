import { type FC, type PropsWithChildren } from 'react';

import '../styles/components/doughnut-chart.scss';

type Props = {
  /**
   * The bubble size (default is medium)
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The chart colour
   */
  colorClass?: string;
  /**
   * The background chart colour
   */
  bgColorClass?: string;
  /**
   * The ratio to be displayed in percent.
   */
  percent?: number;
};

const DoughnutChart: FC<PropsWithChildren<Props>> = ({
  size = 'medium',
  percent = 0,
  bgColorClass = 'colour-platinum',
  colorClass = 'colour-sea-blue',
  children,
}) => {
  let leftTransformerDegree;
  let rightTransformerDegree;
  if (percent >= 50) {
    rightTransformerDegree = '180deg';
    leftTransformerDegree = `${(percent - 50) * 3.6}deg`;
  } else {
    rightTransformerDegree = `${percent * 3.6}deg`;
    leftTransformerDegree = '0deg';
  }
  return (
    <span className={`doughnut-chart--${size} ${bgColorClass}`}>
      <span className={`doughnut-chart--${size}__left-wrap`}>
        <span
          className={`doughnut-chart--${size}__left-wrap__loader ${colorClass}`}
          style={{
            transform: `rotate(${leftTransformerDegree})`,
          }}
        />
      </span>
      <span className={`doughnut-chart--${size}__right-wrap`}>
        <span
          className={`doughnut-chart--${size}__right-wrap__loader ${colorClass}`}
          style={{
            transform: `rotate(${rightTransformerDegree})`,
          }}
        />
      </span>
      <span className={`doughnut-chart--${size}__inner-circle`} style={{}}>
        {children || <span>{`${percent}%`}</span>}
      </span>
    </span>
  );
};

export default DoughnutChart;
