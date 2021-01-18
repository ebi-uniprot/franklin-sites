import { action } from '@storybook/addon-actions';

import {
  DataTableWithLoader as DataTableComponent,
  DENSITY_COMPACT,
} from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';

export default {
  title: 'Data/Data Table',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  decorators: [(story) => <DataDecorator>{story}</DataDecorator>],
};

export const dataTable = (_, props) => (
  <DataTableComponent
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
  />
);

export const dataTableClickToLoad = (_, props) => (
  <DataTableComponent
    {...props}
    clickToLoad
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
  />
);

export const dataTableCompact = (_, props) => (
  <DataTableComponent
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
    density={DENSITY_COMPACT}
  />
);

export const fixedTable = (_, props) => (
  <DataTableComponent
    {...props}
    onSelect={action('onSelect')}
    selectable
    fixedLayout
  />
);

dataTableCompact.propTypes = DataTableComponent.propTypes;
