import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/doughnut-chart.scss';

const DoughnutChart = (props) => {
  const {
    percent, radius, bgcolor, color, borderWidth, innerColor, children, textStyle,
  } = props;
  let leftTransformerDegree = '0deg';
  let rightTransformerDegree = '0deg';
  if (percent >= 50) {
    rightTransformerDegree = '180deg';
    leftTransformerDegree = `${(percent - 50) * 3.6}deg`;
  } else {
    rightTransformerDegree = `${percent * 3.6}deg`;
    leftTransformerDegree = '0deg';
  }
  return (
    <div
      className="circle"
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: bgcolor,
      }}
    >
      <div
        className="left-wrap"
        style={{
          width: radius,
          height: radius * 2,
          left: 0,
        }}
      >
        <div
          className="loader"
          id="id1"
          style={{
            left: radius,
            width: radius,
            height: radius * 2,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: color,
            transform: `rotate(${leftTransformerDegree})`,
          }}
        />
      </div>
      <div
        className="right-wrap"
        style={{
          width: radius,
          height: radius * 2,
          left: radius,
        }}
      >
        <div
          className="loader2"
          id="id2"
          style={{
            left: -radius,
            width: radius,
            height: radius * 2,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: color,
            transform: `rotate(${rightTransformerDegree})`,
          }}
        />
      </div>
      <div
        className="inner-circle"
        style={{
          left: borderWidth,
          top: borderWidth,
          width: (radius - borderWidth) * 2,
          height: (radius - borderWidth) * 2,
          borderRadius: radius - borderWidth,
          backgroundColor: innerColor,
        }}
      >
        {children || (
        <span className={`text ${textStyle}`}>
          {percent}
%
        </span>
        )}
      </div>
    </div>
  );
};

DoughnutChart.propTypes = {
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  innerColor: PropTypes.string,
  radius: PropTypes.number,
  percent: PropTypes.number,
  borderWidth: PropTypes.number,
  textStyle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

DoughnutChart.defaultProps = {
  color: '#22424B',
  radius: 60,
  percent: 0,
  borderWidth: 20,
  bgcolor: '#cacaca',
  innerColor: '#fff',
  textStyle: '',
  children: null,
};

export default DoughnutChart;
