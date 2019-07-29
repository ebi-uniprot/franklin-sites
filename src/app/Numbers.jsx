import React from 'react';
import DoughnutChart from '../components/doughnut-chart';
import Bubble from '../components/bubble';

const Numbers = () => (
  <section className="atoms-section" id="numbers">
    <h1>Numbers</h1>
    <section>
      <section>
        <h3>Doughnut chart</h3>
        <p>
          Used to represent numbers which represent a quantity relative to a total. By default shown
          as percentages but custom text can be shown instead.
        </p>
        <DoughnutChart percent={60}>3/5</DoughnutChart>
      </section>
      <section>
        <h3>Bubble</h3>
        <p />
        <Bubble value={56} />
        <Bubble value={10000} />
      </section>
    </section>
  </section>
);

export default Numbers;
