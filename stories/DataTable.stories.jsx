import { action } from '@storybook/addon-actions';

import {
  DataTable,
  DataTableWithLoader,
  DENSITY_COMPACT,
} from '../src/components';
import {
  DataDecorator,
  DataLoaderDecorator,
} from '../src/decorators/DataDecorator';

export default {
  title: 'Data/Data Table',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  decorators: [(story) => <DataLoaderDecorator>{story}</DataLoaderDecorator>],
};

export const dataTable = (_, props) => (
  <DataTable
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
  />
);
dataTable.decorators = [(story) => <DataDecorator>{story}</DataDecorator>];

export const dataTableWithLoader = (_, props) => (
  <DataTableWithLoader
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
  />
);

export const dataTableWithLoaderClickToLoad = (_, props) => (
  <DataTableWithLoader
    {...props}
    clickToLoad
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
  />
);

export const dataTableWithLoaderCompact = (_, props) => (
  <DataTableWithLoader
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
    density={DENSITY_COMPACT}
  />
);

export const fixedTableWithLoader = (_, props) => (
  <DataTableWithLoader
    {...props}
    onSelect={action('onSelect')}
    selectable
    fixedLayout
  />
);

dataTableWithLoaderCompact.propTypes = DataTableWithLoader.propTypes;
