import React from 'react';
import { DoughnutChart } from '../src/components';

export default {
  title: 'Atoms|Doughnut',
  parameters: {
    purposeFunction: {
      purpose: 'Highlight a ratio.',
      function:
        'Used to represent numbers which represent a quantity relative to a total. By default shown as percentages but custom text can be shown instead',
    },
  },
};

export const smallDoughnut = () => (
  <DoughnutChart percent={90} size="small">
    9
  </DoughnutChart>
);
export const regularDoughnut = () => (
  <DoughnutChart
    percent={60}
    borderWidth={10}
    colorClass="colour-uniref"
    bgColorClass="colour-seashell-grey"
  >
    3/5
  </DoughnutChart>
);
export const largeDoughnut = () => <DoughnutChart percent={20} size="large" />;
