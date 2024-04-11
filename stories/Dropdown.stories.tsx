import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import { Button, Dropdown as DropdownComponent } from '../src/components';

const variants = ['primary', 'secondary', 'tertiary'] as const;

const meta: Meta<typeof DropdownComponent> = {
  component: DropdownComponent,
  title: 'Forms/Dropdown',
  render: () => (
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
          </DropdownComponent>
        </Fragment>
      ))}
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof DropdownComponent>;

export const Dropdown: Story = {};
