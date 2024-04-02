import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  DataList as DataListComponent,
  DataListWithLoader as DataListWithLoaderComponent,
  Card,
} from '../src/components';
import {
  CommonProps,
  DataDecorator,
  DataType,
  DataLoaderDecorator,
} from '../src/decorators/DataDecorator';
import { WrapperProps } from '../src/components/data-loader';

type DataListComponentAndWrapperProps = React.ComponentProps<
  typeof DataListComponent
> &
  WrapperProps<DataType>;

const meta: Meta<DataListComponentAndWrapperProps> = {
  component: DataListComponent,
  title: 'Data/Data List',
  parameters: {
    purposeFunction: {
      function: '',
      purpose: '',
    },
  },
};

export default meta;

type Story = StoryObj<DataListComponentAndWrapperProps>;

export const DataList: Story = {
  render: () => {
    const dataRenderer = (content: DataType) => <>{Object.values(content)}</>;
    return (
      <DataDecorator>
        {(props: CommonProps) => (
          <DataListComponent {...props} dataRenderer={dataRenderer} />
        )}
      </DataDecorator>
    );
  },
};

const DataListWithLoaderChildren = ({
  props,
}: {
  props: CommonProps & WrapperProps<DataType>;
}) => {
  const dataRenderer = (content: DataType) => <>{Object.values(content)}</>;
  return (
    <DataListWithLoaderComponent
      {...props}
      dataRenderer={dataRenderer}
      clickToLoad={props.clickToLoad}
    />
  );
};

export const DataListWithLoader: Story = {
  args: {
    clickToLoad: false,
  },
  render: ({ clickToLoad }) => (
    <DataLoaderDecorator>
      {(props: CommonProps & WrapperProps<DataType>) => (
        <DataListWithLoaderChildren props={{ ...props, clickToLoad }} />
      )}
    </DataLoaderDecorator>
  ),
};

const DataListWithLoaderAndCardsChildren = ({
  props,
}: {
  props: CommonProps & WrapperProps<DataType>;
}) => {
  const dataRenderer = (content: DataType) => (
    <Card>
      {props.onSelectionChange && (
        <div className="checkbox-cell">
          <input type="checkbox" />
        </div>
      )}
      {Object.values(content)}
    </Card>
  );
  return <DataListWithLoaderComponent {...props} dataRenderer={dataRenderer} />;
};

export const DataListWithLoaderAndCards: Story = {
  args: {
    clickToLoad: false,
  },
  argTypes: {
    onSelectionChange: {
      name: 'Selectable (onSelectionChange)',
      options: [true, false],
      mapping: { true: action('selectChange'), false: null },
      control: 'boolean',
    },
  },
  render: ({ clickToLoad, onSelectionChange }) => (
    <DataLoaderDecorator>
      {(props: CommonProps & WrapperProps<DataType>) => (
        <DataListWithLoaderAndCardsChildren
          props={{ ...props, clickToLoad, onSelectionChange }}
        />
      )}
    </DataLoaderDecorator>
  ),
};
