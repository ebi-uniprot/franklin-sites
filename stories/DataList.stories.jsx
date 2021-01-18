import { action } from '@storybook/addon-actions';

import { DataListWithLoader, Card } from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';

export default {
  title: 'Data/Data List',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  decorators: [(story) => <DataDecorator>{story}</DataDecorator>],
};

export const dataList = (_, props) => (
  <DataListWithLoader
    {...props}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    dataRenderer={(content) => <>{Object.values(content)}</>}
    selectable
  />
);

export const dataListWithCards = (_, props) => (
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
dataListWithCards.propTypes = DataListWithLoader.propTypes;
