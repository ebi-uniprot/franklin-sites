import React from 'react';
import { action } from '@storybook/addon-actions';
import { DropdownButton } from '../src/components';

export default {
  title: 'Atoms|Dropdown button',
  parameters: {
    purposeFunction: {
      function: 'Shows a dropdown area when clicked',
      purpose: 'Allow the user to perform actions',
    },
  },
};

export const dropdownButton = () => (
  <DropdownButton label="Download" onSelect={action('onSelect')}>
    <div className="dropdown-menu__content">
      <p>Download content from:</p>
      <ul>
        <li>
          <a href="//www.uniprot.org">UniProt</a>
        </li>
        <li>
          <a href="//www.ensembl.org">Ensembl</a>
        </li>
      </ul>
    </div>
  </DropdownButton>
);
