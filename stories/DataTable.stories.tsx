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

type DataTableComponentAndWrapperProps = React.ComponentProps<
  typeof DataTableComponent
> &
  WrapperProps<DataType>;

const meta: Meta<DataTableComponentAndWrapperProps> = {
  component: DataTableComponent,
  title: 'Data/Data Table',
  argTypes: {
    clickToLoad: { control: 'boolean' },
  },
  args: {
    onHeaderClick: fn(),
  },
};

export default meta;

type Story = StoryObj<DataTableComponentAndWrapperProps>;

export const DataTable: Story = {
  render: (storyProps) => (
    <DataDecorator>
      {(props: CommonProps) => (
        <DataTableComponent {...props} {...storyProps} columns={columns} />
      )}
    </DataDecorator>
  ),
};

export const DataTableWithLoader: Story = {
  render: (storyProps) => (
    <DataLoaderDecorator>
      {(props: CommonProps & WrapperProps<DataType>) => (
        <DataTableWithLoaderComponent
          {...props}
          {...storyProps}
          columns={columns}
        />
      )}
    </DataLoaderDecorator>
  ),
};

export const DataTableColumnLoading: Story = {
  render: (storyProps) => (
    <DataLoaderDecorator>
      {(props: CommonProps & WrapperProps<DataType>) => (
        <DataTableWithLoaderComponent
          {...props}
          {...storyProps}
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
  ),
};
