import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { DataList, Card } from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';

export default {
  title: 'Data/Data List',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  decorators: [
    story => (
      <DataDecorator>
        {(data, getIdKey, columns, hasMoreData, onLoadMoreItems) => (
          <div style={{ height: '65vh' }}>
            {story({
              data,
              getIdKey,
              columns,
              hasMoreData,
              onLoadMoreItems,
            })}
          </div>
        )}
      </DataDecorator>
    ),
  ],
};

export const dataList = ({
  data,
  getIdKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataList
    {...{
      data,
      getIdKey,
      columns,
      hasMoreData,
      onLoadMoreItems,
    }}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    dataRenderer={content => <Fragment>{Object.values(content)}</Fragment>}
    selectable
  />
);

export const dataListWithCards = ({
  data,
  getIdKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataList
    {...{
      data,
      getIdKey,
      columns,
      hasMoreData,
      onLoadMoreItems,
    }}
    onHeaderClick={action('onHeaderClick')}
    dataRenderer={content => (
      <Card onSelect={action('onSelect')}>{Object.values(content)}</Card>
    )}
    selectable
  />
);

dataList.propTypes = DataList.propTypes;
dataListWithCards.propTypes = DataList.propTypes;
