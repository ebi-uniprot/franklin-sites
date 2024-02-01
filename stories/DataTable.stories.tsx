// Part of '@storybook/addon-essentials'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import {
  DataTable as DataTableComponent,
  DataTableWithLoader as DataTableWithLoaderComponent,
} from '../src/components';
import {
  CommonProps,
  DataDecorator,
  DataLoaderDecorator,
  columns,
} from '../src/decorators/DataDecorator';

export default {
  title: 'Data/Data Table',
  parameters: {
    purposeFunction: {
      function: '',
      purpose: '',
    },
  },
};

const useCheckbox = () => boolean('onSelectionChange', false, 'Props');
const useFixedLayout = () => boolean('fixedLayout', false, 'Props');
const useDensity = () =>
  select('density', ['normal', 'compact'], 'normal', 'Props');
const useClickToLoad = () => boolean('clickToLoad', false, 'Props');
const useClickToLoadContent = () => text('clickToLoad content', '');

export const DataTable = () => {
  const checkbox = useCheckbox();
  const fixedLayout = useFixedLayout();
  const density = useDensity();
  const children = (props: CommonProps) => (
    <DataTableComponent
      {...props}
      columns={columns}
      onSelectionChange={checkbox ? action('onSelectionChange') : undefined}
      onHeaderClick={action('onHeaderClick')}
      fixedLayout={fixedLayout}
      density={density}
    />
  );

  return <DataDecorator>{children}</DataDecorator>;
};

export const DataTableWithLoader = () => {
  const checkbox = useCheckbox();
  const fixedLayout = useFixedLayout();
  const density = useDensity();
  const clickToLoad = useClickToLoad();
  const clickToLoadContent = useClickToLoadContent();
  const children = (props: CommonProps) => (
    <DataTableWithLoaderComponent
      {...props}
      columns={columns}
      onSelectionChange={checkbox ? action('onSelectionChange') : undefined}
      onHeaderClick={action('onHeaderClick')}
      fixedLayout={fixedLayout}
      density={density}
      clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
    />
  );

  return <DataLoaderDecorator>{children}</DataLoaderDecorator>;
};

export const DataTableColumnLoading = () => {
  const checkbox = useCheckbox();
  const fixedLayout = useFixedLayout();
  const density = useDensity();
  const clickToLoad = useClickToLoad();
  const clickToLoadContent = useClickToLoadContent();
  const children = (props: CommonProps) => (
    <DataTableWithLoaderComponent
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
      onSelectionChange={checkbox ? action('onSelectionChange') : undefined}
      onHeaderClick={action('onHeaderClick')}
      fixedLayout={fixedLayout}
      density={density}
      clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
    />
  );
  return <DataLoaderDecorator>{children}</DataLoaderDecorator>;
};
