import { DoughnutChart as DoughnutChartComponent } from '../src/components';

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
  <DoughnutChartComponent percent={90} size="small">
    9
  </DoughnutChartComponent>
);

export const RegularDoughnut = () => (
  <DoughnutChartComponent
    percent={60}
    colorClass="colour-uniref"
    bgColorClass="colour-sky-white"
  >
    3/5
  </DoughnutChartComponent>
);

export const LargeDoughnut = () => (
  <DoughnutChartComponent percent={20} size="large" />
);
