import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/doughnut-chart.scss';

const DoughnutChart = ({
  size, percent, bgColorClass, colorClass, children,
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
    <div className={`doughnut-chart--${size} ${bgColorClass}`}>
      <div className={`doughnut-chart--${size}__left-wrap`}>
        <div
          className={`doughnut-chart--${size}__left-wrap__loader ${colorClass}`}
          style={{
            transform: `rotate(${leftTransformerDegree})`,
          }}
        />
      </div>
      <div className={`doughnut-chart--${size}__right-wrap`}>
        <div
          className={`doughnut-chart--${size}__right-wrap__loader ${colorClass}`}
          style={{
            transform: `rotate(${rightTransformerDegree})`,
          }}
        />
      </div>
      <div className={`doughnut-chart--${size}__inner-circle`} style={{}}>
        {children || (
        <span>
          {percent}
%
        </span>
        )}
      </div>
    </div>
  );
};

DoughnutChart.propTypes = {
  /**
   * The bubble size (default is medium)
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The chart colour
   */
  colorClass: PropTypes.string,
  /**
   * The background chart colour
   */
  bgColorClass: PropTypes.string,
  /**
   * The ratio to be displayed in percent.
   */
  percent: PropTypes.number,
  /**
   * The component(s) to display inside as an alternative to the percentage
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

DoughnutChart.defaultProps = {
  size: 'medium',
  colorClass: 'colour-uniprot-blue',
  bgColorClass: 'colour-light-grey',
  percent: 0,
  children: null,
};

export default DoughnutChart;
