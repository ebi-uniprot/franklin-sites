import { DoughnutChart } from '../src/components';

export default {
  title: 'Visualisation/Doughnut',
  parameters: {
    purposeFunction: {
      purpose: 'Highlight a ratio.',
      function:
        'Used to represent numbers which represent a quantity relative to a total. By default shown as percentages but custom text can be shown instead',
    },
  },
};

export const SmallDoughnut = () => (
  <DoughnutChart percent={90} size="small">
    9
  </DoughnutChart>
);

export const RegularDoughnut = () => (
  <DoughnutChart
    percent={60}
    colorClass="colour-uniref"
    bgColorClass="colour-sky-white"
  >
    3/5
  </DoughnutChart>
);

export const LargeDoughnut = () => <DoughnutChart percent={20} size="large" />;
