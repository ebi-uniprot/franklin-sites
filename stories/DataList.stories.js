import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { DataList } from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';

export default {
  title: 'Data view/Data List',
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
    onSelect={action()}
    onHeaderClick={action()}
    dataRenderer={content => <Fragment>{Object.values(content)}</Fragment>}
    selectable
  />
);

dataList.propTypes = DataList.propTypes;
