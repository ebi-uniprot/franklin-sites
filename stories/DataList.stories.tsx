import type { Meta, StoryObj } from '@storybook/react';

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
    clickToLoad: true,
  },
  render: ({ clickToLoad }) => (
    <DataLoaderDecorator>
      {(props: CommonProps & WrapperProps<DataType>) => (
        <DataListWithLoaderChildren props={{ ...props, clickToLoad }} />
      )}
    </DataLoaderDecorator>
  ),
};

/*
const useClickToLoad = () => boolean('clickToLoad', false, 'Props');
const useClickToLoadContent = () => text('clickToLoad content', '');

export const DataList = () => {
  const dataRenderer = (content: DataType) => <>{Object.values(content)}</>;
  return (
    <DataDecorator>
      {(props: CommonProps) => (
        <DataListComponent {...props} dataRenderer={dataRenderer} />
      )}
    </DataDecorator>
  );
};


const DataListWithLoaderChildren = ({
  props,
}: {
  props: CommonProps & WrapperProps<DataType>;
}) => {
  const clickToLoad = useClickToLoad();
  const clickToLoadContent = useClickToLoadContent();
  const dataRenderer = (content: DataType) => <>{Object.values(content)}</>;
  return (
    <DataListWithLoaderComponent
      {...props}
      dataRenderer={dataRenderer}
      clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
    />
  );
};

export const DataListWithLoader = () => (
  <DataLoaderDecorator>
    {(props: CommonProps & WrapperProps<DataType>) => (
      <DataListWithLoaderChildren props={props} />
    )}
  </DataLoaderDecorator>
);

const DataListWithLoaderAndCardsChildren = ({
  props,
}: {
  props: CommonProps & WrapperProps<DataType>;
}) => {
  const selectable = boolean('selectable', true, 'Props');
  const clickToLoad = useClickToLoad();
  const clickToLoadContent = useClickToLoadContent();
  const dataRenderer = (content: DataType) => (
    <Card>
      {selectable && (
        <div className="checkbox-cell">
          <input type="checkbox" />
        </div>
      )}
      {Object.values(content)}
    </Card>
  );
  return (
    <DataListWithLoaderComponent
      {...props}
      dataRenderer={dataRenderer}
      onSelectionChange={selectable ? action('onSelect') : undefined}
      clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
    />
  );
};

export const DataListWithLoaderAndCards = () => (
  <DataLoaderDecorator>
    {(props: CommonProps & WrapperProps<DataType>) => (
      <DataListWithLoaderAndCardsChildren props={props} />
    )}
  </DataLoaderDecorator>
);
*/
