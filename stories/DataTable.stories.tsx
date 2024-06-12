import { action } from '@storybook/addon-actions';

import { Meta, StoryObj } from '@storybook/react';
import {
  DataTable as DataTableComponent,
  DataTableWithLoader as DataTableWithLoaderComponent,
} from '../src/components';
import {
  CommonProps,
  DataDecorator,
  DataLoaderDecorator,
  DataType,
  columns,
} from '../src/decorators/DataDecorator';
import { WrapperProps } from '../src/components/data-loader';

type DataTableComponentAndWrapperProps = React.ComponentProps<
  typeof DataTableComponent
> &
  WrapperProps<DataType>;

const meta: Meta<DataTableComponentAndWrapperProps> = {
  component: DataTableComponent,
  title: 'Data/Data Table',
  argTypes: {
    onSelectionChange: {
      name: 'Selectable (onSelectionChange)',
      mapping: { true: action('selectChange'), false: null },
      control: 'boolean',
    },
    clickToLoad: { control: 'boolean' },
  },
  args: {
    onHeaderClick: action('headerClick'),
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
