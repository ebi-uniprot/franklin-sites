import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ReactNode } from 'react';

import {
  DataList as DataListComponent,
  DataListWithLoader as DataListWithLoaderComponent,
  Card,
} from '../src/components';
import {
  type CommonProps,
  DataDecorator,
  type DataType,
  DataLoaderDecorator,
} from '../src/decorators/DataDecorator';
import { type WrapperProps } from '../src/components/data-loader';

const createDataRenderer =
  (hasSelection: boolean, wrapInCard = false) =>
  (content: DataType): ReactNode => {
    const contentNode = (
      <>
        {hasSelection && (
          <input type="checkbox" style={{ margin: '15px 5px 0 0' }} />
        )}
        {Object.values(content)}
      </>
    );
    return wrapInCard ? <Card>{contentNode}</Card> : contentNode;
  };

type StoryProps = React.ComponentProps<typeof DataListComponent> &
  WrapperProps<DataType> & {
    isSelectable: boolean;
  };

const meta: Meta<StoryProps> = {
  component: DataListComponent,
  title: 'Data/Data List',
  argTypes: {
    onSelectionChange: {
      table: { disable: true },
    },
    isSelectable: {
      name: 'Selectable (onSelectionChange)',
      control: 'boolean',
      description: 'Toggle to enable selection checkbox',
    },
    clickToLoad: {
      control: 'boolean',
      description: 'Require a click to load data (when using loader)',
    },
  },
  args: {
    onSelectionChange: fn(),
    isSelectable: true,
    clickToLoad: false,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DataList: Story = {
  argTypes: {
    clickToLoad: { table: { disable: true } },
  },
  render: (args) => {
    const { isSelectable, onSelectionChange, clickToLoad, ...restArgs } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    const dataRenderer = createDataRenderer(!!finalOnSelectionChange);
    return (
      <DataDecorator>
        {(props: CommonProps) => (
          <DataListComponent
            {...props}
            {...restArgs}
            onSelectionChange={finalOnSelectionChange}
            dataRenderer={dataRenderer}
          />
        )}
      </DataDecorator>
    );
  },
};

const DataListWithLoaderWrapper = ({
  props,
  dataRenderer,
}: {
  props: CommonProps & WrapperProps<DataType>;
  dataRenderer: (datum: DataType) => ReactNode;
}) => (
  <DataListWithLoaderComponent
    {...props}
    dataRenderer={dataRenderer}
    clickToLoad={props.clickToLoad}
  />
);

export const DataListWithLoader: Story = {
  render: (args) => {
    const { isSelectable, onSelectionChange, ...restArgs } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    const dataRenderer = createDataRenderer(!!finalOnSelectionChange);
    return (
      <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => (
          <DataListWithLoaderWrapper
            props={{
              ...props,
              ...restArgs,
              onSelectionChange: finalOnSelectionChange,
            }}
            dataRenderer={dataRenderer}
          />
        )}
      </DataLoaderDecorator>
    );
  },
};

export const DataListWithLoaderAndCards: Story = {
  render: (args) => {
    const { isSelectable, onSelectionChange, ...restArgs } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    const dataRenderer = createDataRenderer(!!finalOnSelectionChange, true);
    return (
      <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => (
          <DataListWithLoaderWrapper
            props={{
              ...props,
              ...restArgs,
              onSelectionChange: finalOnSelectionChange,
            }}
            dataRenderer={dataRenderer}
          />
        )}
      </DataLoaderDecorator>
    );
  },
};
