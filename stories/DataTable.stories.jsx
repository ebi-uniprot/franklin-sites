import React, { useRef } from 'react';
import { action } from '@storybook/addon-actions';
import { DataTable as DataTableComponent } from '../src/components';
import DataDecorator from '../src/decorators/DataDecorator';
import { DENSITY_COMPACT } from '../src/components/data-table';

export default {
  title: 'Data/Data Table',
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
            const scrollDataAttribute = 'data-table';
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

export const dataTable = ({
  data,
  getIdKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataTableComponent
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
  <DataTableComponent
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

export const fixedTable = ({
  data,
  getIdKey,
  columns,
  hasMoreData,
  onLoadMoreItems,
}) => (
  <DataTableComponent
    {...{
      data,
      getIdKey,
      columns,
      hasMoreData,
      onLoadMoreItems,
    }}
    selectable
    fixedLayout
  />
);

dataTableCompact.propTypes = DataTableComponent.propTypes;
