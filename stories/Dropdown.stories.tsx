import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Fragment } from 'react';

import { DropdownButton, Button } from '../src/components';
import {
  Dropdown,
  UncontrolledDropdown,
} from '../src/components/dropdown-button';

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
    <p>Uncontrolled dropdowns</p>
    {variants.map((variant) => (
      <span key={variant}>
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
      </span>
    ))}
  </div>
);

export const controlledDropdown = () => {
  const expanded = boolean('expanded', false);

  return (
    <div>
      <p>Controlled dropdowns (trigger through storybook knobs)</p>
      {variants.map((variant) => (
        <Fragment key={variant}>
          <Dropdown
            visibleElement={<Button variant={variant}>Download</Button>}
            expanded={expanded}
          >
            <p>Download content from:</p>
            <ul className="no-bullet">
              <li>
                <a href="//www.uniprot.org">UniProt</a>
              </li>
              <li>
                <a href="//www.ensembl.org">Ensembl</a>
              </li>
            </ul>
          </Dropdown>{' '}
        </Fragment>
      ))}
    </div>
  );
};

export const uncontrolledDropdown = () => (
  <div>
    <p>Uncontrolled dropdowns</p>
    {variants.map((variant) => (
      <Fragment key={variant}>
        <UncontrolledDropdown
          visibleElement={<Button variant={variant}>Download</Button>}
        >
          <div>
            <p>Download content from:</p>
            <ul className="no-bullet">
              <li>
                <a href="//www.uniprot.org">UniProt</a>
              </li>
              <li>
                <a href="//www.ensembl.org">Ensembl</a>
              </li>
            </ul>
          </div>
        </UncontrolledDropdown>{' '}
      </Fragment>
    ))}
  </div>
);
