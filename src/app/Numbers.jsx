import React from 'react';
import DoughnutChart from '../components/doughnut-chart';
import Bubble from '../components/bubble';
import LongNumber from '../components/long-number';

const Numbers = () => (
  <section className="atoms-section" id="numbers">
    <h1>Numbers</h1>
    <section>
      <h3>Long numbers</h3>
      <p>
        <LongNumber number={1000000} />
      </p>
    </section>
    <section>
      <h3>Bubble</h3>
      <p>
        Use Bubbles to highlight numbers. If there is more than 100 items the bubble will show 99+.
        There are 3 sizes of bubbles.
      </p>
      <Bubble value={56} />
      <Bubble value={10000} colourClass="colour-reviewed" />
      <Bubble value={10.12345} size="large" colourClass="colour-proteomes" />
      <Bubble value={2} size="small" colourClass="colour-light-grey" />
    </section>
    <section>
      <section>
        <h3>Doughnut chart</h3>
        <p>
          Used to represent numbers which represent a quantity relative to a total. By default shown
          as percentages but custom text can be shown instead.
        </p>
        <DoughnutChart percent={60} />
        <DoughnutChart
          percent={60}
          borderWidth={10}
          colorClass="colour-uniref"
          bgColorClass="colour-seashell-grey"
        >
          3/5
        </DoughnutChart>
        <DoughnutChart percent={20} size="large" />
        <DoughnutChart percent={90} size="small">
          9
        </DoughnutChart>
      </section>
    </section>
  </section>
);

export default Numbers;
