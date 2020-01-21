import React from 'react';
import { action } from '@storybook/addon-actions';
import { DataTable } from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';

export default {
  title: 'Data|Data Table',
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

export const dataTable = ({
  data,
  idKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataTable
    {...{
      data,
      idKey,
      columns,
      hasMoreData,
      onLoadMoreItems,
    }}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
  />
);

dataTable.propTypes = DataTable.propTypes;
