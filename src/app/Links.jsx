import React from 'react';
import ExternalLink from '../components/links';
import './styles/atoms.scss';

const Links = () => (
  <div className="atoms-section" id="links">
    <h1>Links</h1>
    <section>
      <ul className="no-bullet">
        <li>
          <ExternalLink uri="https://www.ebi.ac.uk/">External link</ExternalLink>
        </li>
      </ul>
    </section>
  </div>
);

export default Links;
