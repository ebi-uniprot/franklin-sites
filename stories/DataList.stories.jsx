import { action } from '@storybook/addon-actions';

import { DataList, DataListWithLoader, Card } from '../src/components';
import {
  DataDecorator,
  DataLoaderDecorator,
} from '../src/decorators/DataDecorator';

export default {
  title: 'Data/Data List',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  decorators: [(story) => <DataLoaderDecorator>{story}</DataLoaderDecorator>],
};

export const dataList = (_, props) => (
  <DataList
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    dataRenderer={(content) => <>{Object.values(content)}</>}
    selectable
  />
);
dataList.decorators = [(story) => <DataDecorator>{story}</DataDecorator>];

export const dataListWithLoader = (_, props) => (
  <DataListWithLoader
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    dataRenderer={(content) => <>{Object.values(content)}</>}
    selectable
  />
);

export const dataListWithLoaderAndCards = (_, props) => (
  <DataListWithLoader
    {...props}
    onHeaderClick={action('onHeaderClick')}
    dataRenderer={(content) => (
      <Card onSelect={action('onSelect')}>{Object.values(content)}</Card>
    )}
    selectable
  />
);

dataList.propTypes = DataListWithLoader.propTypes;
dataListWithLoaderAndCards.propTypes = DataListWithLoader.propTypes;
