import type { Meta, StoryObj } from '@storybook/react-vite';

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

type DataListComponentAndWrapperProps = React.ComponentProps<
  typeof DataListComponent
> &
  WrapperProps<DataType>;

const meta: Meta<DataListComponentAndWrapperProps> = {
  component: DataListComponent,
  title: 'Data/Data List',
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

const DataListWithLoaderAndCardsChildren = (
  props: CommonProps & WrapperProps<DataType>
) => {
  const dataRenderer = (content: DataType) => (
    <Card>{Object.values(content)}</Card>
  );
  return <DataListWithLoaderComponent {...props} dataRenderer={dataRenderer} />;
};

export const DataListWithLoaderAndCards: Story = {
  argTypes: {
    clickToLoad: { control: 'boolean' },
  },
  render: (storyProps) => (
    <DataLoaderDecorator>
      {(props: CommonProps & WrapperProps<DataType>) => (
        <DataListWithLoaderAndCardsChildren {...props} {...storyProps} />
      )}
    </DataLoaderDecorator>
  ),
};
