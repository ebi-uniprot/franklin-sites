import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import {
  Button,
  ControlledDropdown as ControlledDropdownComponent,
} from '../src/components';

const variants = ['primary', 'secondary', 'tertiary'] as const;

const meta: Meta<typeof ControlledDropdownComponent> = {
  component: ControlledDropdownComponent,
  title: 'Forms/Dropdown',
  parameters: {
    purposeFunction: {
      function: 'Shows a dropdown area when clicked',
      purpose: 'Allow the user to perform actions',
    },
  },
  args: { expanded: false },
  render: ({ expanded }) => (
    <div>
      <p>Controlled dropdowns (trigger through storybook knobs)</p>
      {variants.map((variant) => (
        <Fragment key={variant}>
          <ControlledDropdownComponent
            visibleElement={<Button variant={variant}>Download</Button>}
            expanded={expanded}
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
          </ControlledDropdownComponent>{' '}
        </Fragment>
      ))}
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof ControlledDropdownComponent>;

export const ControlledDropdown: Story = {};
