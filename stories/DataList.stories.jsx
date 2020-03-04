import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { DataList, Card } from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';

export default {
  title: 'Data|Data List',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  decorators: [
    story => {
      return (
        <DataDecorator>
          {(data, idKey, columns, hasMoreData, onLoadMoreItems) => {
            return (
              <div style={{ height: '65vh' }}>
                {story({
                  data,
                  idKey,
                  columns,
                  hasMoreData,
                  onLoadMoreItems,
                })}
              </div>
            );
          }}
        </DataDecorator>
      );
    },
  ],
};

export const dataList = ({
  data,
  idKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataList
    {...{
      data,
      idKey,
      columns,
      hasMoreData,
      onLoadMoreItems,
    }}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    dataRenderer={content => <section>{Object.values(content)}</section>}
    selectable
  />
);

export const dataListWithCards = ({
  data,
  idKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataList
    {...{
      data,
      idKey,
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
