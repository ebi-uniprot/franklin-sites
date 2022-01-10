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

const variants = ['primary', 'secondary', 'tertiary'] as const;

export const dropdownButton = () => (
  <div>
    {variants.map((variant) => (
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
