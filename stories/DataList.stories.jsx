import React, { useRef } from 'react';
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
    (story) => {
      return (
        <DataDecorator>
          {(data, getIdKey, columns, hasMoreData, onLoadMoreItems) => {
            const scrollDataAttribute = 'data-list';
            return (
              <div
                style={{ height: '65vh', overflowY: 'auto' }}
                data-loader-scroll={scrollDataAttribute}
              >
                {React.cloneElement(story(), {
                  data,
                  getIdKey,
                  columns,
                  hasMoreData,
                  onLoadMoreItems,
                  scrollDataAttribute,
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
  getIdKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => {
  return (
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
      dataRenderer={(content) => <>{Object.values(content)}</>}
      selectable
    />
  );
};

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
    dataRenderer={(content) => (
      <Card onSelect={action('onSelect')}>{Object.values(content)}</Card>
    )}
    selectable
  />
);

dataList.propTypes = DataList.propTypes;
dataListWithCards.propTypes = DataList.propTypes;
