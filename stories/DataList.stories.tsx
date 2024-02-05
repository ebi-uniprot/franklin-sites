import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

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

export default {
  title: 'Data/Data List',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

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

export const DataListLoading = () => {
  const dataRenderer = (content: DataType) => (
    <>
      {Object.values(content)}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore we know it doesn't exist, it's on purpose */}
      {content.complex.value}
    </>
  );
  return (
    <DataDecorator>
      {(props: CommonProps) => (
        <DataListComponent {...props} loading dataRenderer={dataRenderer} />
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
  const selectable = boolean('selectable', false, 'Props');
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
