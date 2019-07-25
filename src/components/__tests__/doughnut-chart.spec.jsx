import React from 'react';
import renderer from 'react-test-renderer';
import DoughnutChart from '../doughnut-chart';

describe('DoughnutChart component', () => {
  test('should render', () => {
    const component = renderer
      .create(
        <DoughnutChart percent={40}>
          <span>Some content</span>
        </DoughnutChart>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
