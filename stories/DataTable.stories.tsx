import { action } from '@storybook/addon-actions';

import { DataTable, DataTableWithLoader } from '../src/components';
import {
  DataDecorator,
  DataLoaderDecorator,
  columns,
} from '../src/decorators/DataDecorator';

export default {
  title: 'Data/Data Table',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const dataTable = () => (
  <DataDecorator>
    {(props) => (
      <DataTable
        {...props}
        columns={columns}
        onSelectRow={action('onSelectRow')}
        onHeaderClick={action('onHeaderClick')}
        selected={[]}
      />
    )}
  </DataDecorator>
);

export const dataTableWithLoader = () => (
  <DataLoaderDecorator>
    {(props) => (
      <DataTableWithLoader
        {...props}
        columns={columns}
        onSelectRow={action('onSelectRow')}
        onHeaderClick={action('onHeaderClick')}
        selected={[]}
      />
    )}
  </DataLoaderDecorator>
);

export const dataTableWithLoaderClickToLoad = () => (
  <DataLoaderDecorator>
    {(props) => (
      <DataTableWithLoader
        {...props}
        columns={columns}
        clickToLoad
        onSelectRow={action('onSelectRow')}
        onHeaderClick={action('onHeaderClick')}
        selected={[]}
      />
    )}
  </DataLoaderDecorator>
);

export const dataTableWithLoaderCompact = () => (
  <DataLoaderDecorator>
    {(props) => (
      <DataTableWithLoader
        {...props}
        columns={columns}
        onSelectRow={action('onSelectRow')}
        onHeaderClick={action('onHeaderClick')}
        selected={[]}
        density="compact"
      />
    )}
  </DataLoaderDecorator>
);

export const dataTableLoading = () => (
  <DataLoaderDecorator>
    {(props) => (
      <DataTableWithLoader
        {...props}
        loading
        columns={[
          ...columns,
          {
            label: 'Column 6',
            name: 'content5',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore we know it doesn't exist, it's on purpose
            render: (row) => row.content6.complexValue,
          },
        ]}
        onSelectRow={action('onSelectRow')}
        onHeaderClick={action('onHeaderClick')}
        selected={[]}
        density="compact"
      />
    )}
  </DataLoaderDecorator>
);

export const fixedTableWithLoader = () => (
  <DataLoaderDecorator>
    {(props) => (
      <DataTableWithLoader
        {...props}
        columns={columns}
        onSelectRow={action('onSelectRow')}
        selected={[]}
        fixedLayout
      />
    )}
  </DataLoaderDecorator>
);
