import React from 'react';
import { DownloadIcon } from '../components';

const Links = () => (
  <section className="atoms-section" id="buttons">
    <h1>Buttons</h1>
    <section>
      <section>
        <button className="button" type="button">
          Primary
        </button>
        <p> Use primary buttons for main actions.</p>
      </section>
      <section>
        <button className="button secondary" type="button">
          Secondary
        </button>
        <p>This hollowed style of buttons is more suited for secondary actions such as Cancel.</p>
      </section>
      <section>
        <button className="button link-button" type="button">
          Link button
        </button>
        <p>
          This style of buttons is more discrete and works great for groups of actions or inline
          text.
        </p>
      </section>
    </section>
    <section>
      <h4>Button groups</h4>
      <p>Button groups are used to display multiple buttons in a row together.</p>
      <div className="button-group">
        <button className="button" type="button">
          One
        </button>
        <button className="button" type="button">
          Two
        </button>
        <button className="button" type="button">
          Three
        </button>
      </div>
      <div className="button-group">
        <button className="button link-button" type="button">
          One
        </button>
        <button className="button link-button" type="button">
          Two
        </button>
        <button className="button link-button" type="button">
          Three
        </button>
      </div>
    </section>
    <section>
      <h4>Disabled buttons</h4>
      <p>
        Use the class
        {' '}
        <em>.disabled</em>
      </p>
      <div className="button-group">
        <button className="button disabled" type="button">
          One
        </button>
        <button className="button secondary disabled" type="button">
          Two
        </button>
        <button className="button link-button disabled" type="button">
          Three
        </button>
      </div>
    </section>
    <section>
      <h4>Icon buttons</h4>
      <p>You can use icon components directly within an icon.</p>
      <div className="button-group">
        <button className="button" type="button">
          <DownloadIcon />
          Download
        </button>
        <button className="button secondary" type="button">
          <DownloadIcon />
          Download
        </button>
        <button className="button link-button" type="button">
          <DownloadIcon />
          Download
        </button>
      </div>
    </section>
  </section>
);

export default Links;
