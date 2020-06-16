import React from 'react';
import { action } from '@storybook/addon-actions';
import { DataTable } from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';
import { DENSITY_COMPACT } from '../src/components/data-table';

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
          {(data, getIdKey, columns, hasMoreData, onLoadMoreItems) => {
            return (
              <div style={{ height: '65vh' }}>
                {story({
                  data,
                  getIdKey,
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
  getIdKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataTable
    {...{
      data,
      getIdKey,
      columns,
      hasMoreData,
      onLoadMoreItems,
    }}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
  />
);

export const dataTableCompact = ({
  data,
  getIdKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataTable
    {...{
      data,
      getIdKey,
      columns,
      hasMoreData,
      onLoadMoreItems,
    }}
    onSelect={action('onSelect')}
    onHeaderClick={action('onHeaderClick')}
    selectable
    density={DENSITY_COMPACT}
  />
);

dataTable.propTypes = DataTable.propTypes;
