import { render, screen } from '@testing-library/react';

import DoughnutChart from '../doughnut-chart';

describe('DoughnutChart component', () => {
  it('should render low percent', () => {
    const { asFragment } = render(
      <DoughnutChart percent={40}>
        <span>Some content</span>
      </DoughnutChart>
    );
    // TODO: this should be a visual snapshot eventually
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render high percent', () => {
    const { asFragment } = render(
      <DoughnutChart percent={60}>
        <span>Some content</span>
      </DoughnutChart>
    );
    // TODO: this should be a visual snapshot eventually
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without content', () => {
    const { asFragment } = render(<DoughnutChart percent={60} />);
    expect(screen.queryByText('60%')).not.toBeNull();
    // TODO: this should be a visual snapshot eventually
    expect(asFragment()).toMatchSnapshot();
  });
});
