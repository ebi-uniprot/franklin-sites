export default {
  title: 'Core/Typography',
};

export const Typography = () => (
  <section>
    <h1>Typography</h1>
    <hr />
    <section>
      <h2>Headings</h2>
      <h1>This is a default level 1 heading</h1>
      <h2>This is a default level 2 heading</h2>
      <h3>This is a default level 3 heading</h3>
      <h4>This is a default level 4 heading</h4>
      <h5>This is a default level 5 heading</h5>
    </section>
    <hr />
    <section>
      <h2>Class-based size overrides</h2>
      <p>
        Note that these are overrides, and should be considered as last resort
      </p>
      <div className="x-huge">This is &lsquo;x-huge&rsquo; text</div>
      <div className="huge">This is a &lsquo;huge&rsquo; text</div>
      <div className="big">This is a &lsquo;big&rsquo; text</div>
      <div className="medium">This is a &lsquo;medium&rsquo; text</div>
      <div className="tiny">This is a &lsquo;tiny&rsquo; text</div>
    </section>
    <hr />
    <section>
      <h2>Paragraphs</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <hr />
    <section>
      <h2>Small text</h2>
      <small>I am small.</small>
    </section>
    <hr />
    <section>
      <h2>Links</h2>
      <a href="https://www.uniprot.org">click me</a>
    </section>
    <hr />
    <section>
      <h2>List</h2>
      <section>
        <h3>Unordered</h3>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </section>
      <section>
        <h3>Ordered</h3>
        <ol>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ol>
      </section>
      <section>
        <h3>No bullet</h3>
        <ul className="no-bullet">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>
            Item 3
            <ul>
              <li>Item 3.1</li>
              <li>Item 3.2</li>
            </ul>
          </li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </section>
    </section>
  </section>
);
