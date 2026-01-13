import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  DataTable as DataTableComponent,
  DataTableWithLoader as DataTableWithLoaderComponent,
} from '../src/components';
import {
  type CommonProps,
  DataDecorator,
  DataLoaderDecorator,
  type DataType,
  columns,
} from '../src/decorators/DataDecorator';
import { type WrapperProps } from '../src/components/data-loader';

type StoryProps = React.ComponentProps<typeof DataTableComponent> &
  WrapperProps<DataType> & {
    isSelectable: boolean;
  };

const meta: Meta<StoryProps> = {
  component: DataTableComponent,
  title: 'Data/Data Table',
  argTypes: {
    onSelectionChange: {
      table: {
        disable: true,
      },
    },
    isSelectable: {
      name: 'Selectable (onSelectionChange)',
      control: 'boolean',
      description: 'Toggle to enable selection checkboxes',
    },
    clickToLoad: {
      control: 'boolean',
      description: 'Require a click to load data (when using loader)',
    },
  },
  args: {
    onHeaderClick: fn(),
    onSelectionChange: fn(),
    isSelectable: true,
    clickToLoad: false,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DataTable: Story = {
  argTypes: {
    clickToLoad: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    const { isSelectable, onSelectionChange, clickToLoad, ...restArgs } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;

    return (
      <DataDecorator>
        {(props: CommonProps) => (
          <DataTableComponent
            {...props}
            {...restArgs}
            onSelectionChange={finalOnSelectionChange}
            columns={columns}
          />
        )}
      </DataDecorator>
    );
  },
};

export const DataTableWithLoader: Story = {
  render: (args) => {
    const { isSelectable, onSelectionChange, ...restArgs } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;

    return (
      <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => (
          <DataTableWithLoaderComponent
            {...props}
            {...restArgs}
            onSelectionChange={finalOnSelectionChange}
            columns={columns}
          />
        )}
      </DataLoaderDecorator>
    );
  },
};

export const DataTableColumnLoading: Story = {
  render: (args) => {
    const { isSelectable, onSelectionChange, ...restArgs } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;

    return (
      <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => (
          <DataTableWithLoaderComponent
            {...props}
            {...restArgs}
            onSelectionChange={finalOnSelectionChange}
            loading
            columns={[
              ...columns,
              {
                label: 'Column 6',
                name: 'content6',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore we know it doesn't exist, it's on purpose
                render: (row) => row.content6.complexValue,
              },
            ]}
          />
        )}
      </DataLoaderDecorator>
    );
  },
};
