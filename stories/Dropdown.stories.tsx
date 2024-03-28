import { boolean } from '@storybook/addon-knobs';
import { Fragment } from 'react';

import {
  Button,
  ControlledDropdown as ControlledDropdownComponent,
  Dropdown as DropdownComponent,
} from '../src/components';

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

export const ControlledDropdown = () => {
  const expanded = boolean('expanded', false);

  return (
    <div>
      <p>Controlled dropdowns (trigger through storybook knobs)</p>
      {variants.map((variant) => (
        <Fragment key={variant}>
          <ControlledDropdownComponent
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
          </ControlledDropdownComponent>{' '}
        </Fragment>
      ))}
    </div>
  );
};

export const Dropdown = () => (
  <div>
    <p>Uncontrolled/automatic dropdowns</p>
    {variants.map((variant) => (
      <Fragment key={variant}>
        <DropdownComponent
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
        </DropdownComponent>{' '}
      </Fragment>
    ))}
  </div>
);
