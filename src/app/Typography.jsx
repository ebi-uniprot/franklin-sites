import React from 'react';

const Typography = () => (
  <div className="atoms-section" id="type">
    <h1>Typography</h1>
    <section>
      <p>
        The chosen type is a sans-serif, Lato, designed by Warsaw-based designer
        <a href="http://www.lukaszdziedzic.eu/">Łukasz Dziedzic.</a>
        <br />
        We use 2 variants of the font, normal and bold:
      </p>
      <div>
        <span className="font-style font-style-normal">
          <span className="font-style-title">Aa</span>
          <span className="font-style-description">Normal</span>
        </span>
        <span className="font-style font-style-bold">
          <span className="font-style-title">Aa</span>
          <span className="font-style-description">Bold</span>
        </span>
      </div>
      <div>
        ‌
        <p>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          a​‌b​‌c​‌d​‌e​‌f​‌g​‌h​‌i​‌j​‌k​‌l​‌m​‌n​‌o​‌p​‌q​‌r​‌s​‌t​‌u​‌v​‌w​‌x​‌y​‌z​‌
          1​‌2​‌3​‌4​‌5​‌6​‌7​‌8​‌9​‌0​‌
        </p>
      </div>
      <hr />
    </section>

    <section>
      <h1>Headers</h1>
      <h1>H1. This is a title 3.531rem</h1>
      <h2>H2. This is a title 2.888rem</h2>
      <h3>H3. This is a title 1.863rem</h3>
      <h4>H4. This is a title 1.863rem</h4>
      <h5>H5. This is a title 1.563rem</h5>
      <h6>H6. This is a title 1.250rem</h6>
      <span className="h7">H7. This is a title 1.250rem</span>
      <hr />
    </section>

    <section>
      <h1>Paragraphs</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <a href="www.uniprot.org">Click me</a>
      </p>
      <hr />
    </section>

    <section>
      <h1>Lists</h1>
      <h2>Unordered</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>

      <h2>Ordered</h2>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ol>

      <h2>Description list</h2>
      <dl>
        <dt>Item 1</dt>
        <dd>Description 1 is about item 1</dd>
        <dt>Item 2</dt>
        <dd>Description 2 is about item 2</dd>
        <dt>Item 3</dt>
        <dd>Description 3 is about item 3</dd>
      </dl>

      <h2>.no-bullet</h2>
      <ul className="no-bullet">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </section>
  </div>
);

export default Typography;
