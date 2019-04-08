import React from 'react';
import ExternalLink from '../components/external-link';
import './styles/atoms.scss';

const Links = () => (
  <div className="atoms-section" id="links">
    <h1>Links</h1>
    <section>
      <ul className="no-bullet">
        <li>
          <span>Lorem ipsum </span>
          <ExternalLink url="https://www.ebi.ac.uk/">external link</ExternalLink>
          <span>dolor sit amet.</span>
        </li>
      </ul>
    </section>
  </div>
);

export default Links;
