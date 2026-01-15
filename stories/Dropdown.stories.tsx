import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Fragment } from 'react';

import { Button, Dropdown as DropdownComponent } from '../src/components';

const variants = ['primary', 'secondary', 'tertiary'] as const;

const meta: Meta<typeof DropdownComponent> = {
  component: DropdownComponent,
  title: 'Forms/Dropdown',
  args: {
    onClick: fn(),
  },
  render: ({ onClick }) => (
    <div>
      <p>Uncontrolled/automatic dropdowns</p>
      {variants.map((variant) => (
        <Fragment key={variant}>
          <DropdownComponent
            visibleElement={(onClick) => (
              <Button variant={variant} onClick={onClick}>
                Download
              </Button>
            )}
          >
            {(closeDropdown) => (
              <div>
                <p>Download content from:</p>
                <ul className="no-bullet">
                  <li>
                    <a href="//www.uniprot.org">UniProt</a>
                  </li>
                  <li>
                    <a href="//www.ensembl.org">Ensembl</a>
                  </li>
                  <li>
                    <Button
                      variant="tertiary"
                      onClick={(e) => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        onClick?.(e);
                        closeDropdown();
                      }}
                    >
                      Some button
                    </Button>
                  </li>
                </ul>
              </div>
            )}
          </DropdownComponent>
        </Fragment>
      ))}
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof DropdownComponent>;

export const Dropdown: Story = {};
