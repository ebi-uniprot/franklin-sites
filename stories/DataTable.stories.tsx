import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

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

const useCheckbox = () => boolean('onSelectionChange', false, 'Props');
const useFixedLayout = () => boolean('fixedLayout', false, 'Props');
const useDensity = () =>
  select('density', ['normal', 'compact'], 'normal', 'Props');
const useClickToLoad = () => boolean('clickToLoad', false, 'Props');
const useClickToLoadContent = () => text('clickToLoad content', '');

export const dataTable = () => (
  <DataDecorator>
    {(props) => (
      <DataTable
        {...props}
        columns={columns}
        onSelectionChange={
          useCheckbox() ? action('onSelectionChange') : undefined
        }
        onHeaderClick={action('onHeaderClick')}
        fixedLayout={useFixedLayout()}
        density={useDensity()}
      />
    )}
  </DataDecorator>
);

export const dataTableWithLoader = () => (
  <DataLoaderDecorator>
    {(props) => {
      const clickToLoad = useClickToLoad();
      const clickToLoadContent = useClickToLoadContent();
      return (
        <DataTableWithLoader
          {...props}
          columns={columns}
          onSelectionChange={
            useCheckbox() ? action('onSelectionChange') : undefined
          }
          onHeaderClick={action('onHeaderClick')}
          fixedLayout={useFixedLayout()}
          density={useDensity()}
          clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
        />
      );
    }}
  </DataLoaderDecorator>
);

export const dataTableColumnLoading = () => (
  <DataLoaderDecorator>
    {(props) => {
      const clickToLoad = useClickToLoad();
      const clickToLoadContent = useClickToLoadContent();
      return (
        <DataTableWithLoader
          {...props}
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
          onSelectionChange={
            useCheckbox() ? action('onSelectionChange') : undefined
          }
          onHeaderClick={action('onHeaderClick')}
          fixedLayout={useFixedLayout()}
          density={useDensity()}
          clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
        />
      );
    }}
  </DataLoaderDecorator>
);
