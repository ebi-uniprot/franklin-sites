import React from 'react';
import { action } from '@storybook/addon-actions';

import { DropdownButton } from '../src/components';

export default {
  title: 'Forms/Dropdown button',
  parameters: {
    purposeFunction: {
      function: 'Shows a dropdown area when clicked',
      purpose: 'Allow the user to perform actions',
    },
  },
};

export const dropdownButton = () => (
  <div>
    {['primary', 'secondary', 'tertiary'].map((variant) => (
      <div key={variant}>
        <DropdownButton
          label="Download"
          onSelect={action('onSelect')}
          variant={variant}
        >
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
      </div>
    ))}
  </div>
);
