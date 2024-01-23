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
  const children = (props: CommonProps) => (
    <DataListComponent {...props} dataRenderer={dataRenderer} />
  );
  return <DataDecorator>{children}</DataDecorator>;
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
  const children = (props: CommonProps) => (
    <DataListComponent {...props} loading dataRenderer={dataRenderer} />
  );
  return <DataDecorator>{children}</DataDecorator>;
};

const DataListWithLoaderChildren = ({ props }: { props: CommonProps }) => {
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

export const DataListWithLoader = () => {
  const children = (props: CommonProps) => (
    <DataListWithLoaderChildren props={props} />
  );
  return <DataLoaderDecorator>{children}</DataLoaderDecorator>;
};

const DataListWithLoaderAndCardsChildren = ({
  props,
}: {
  props: CommonProps;
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

export const DataListWithLoaderAndCards = () => {
  const children = (props: CommonProps) => (
    <DataListWithLoaderAndCardsChildren props={props} />
  );

  return <DataLoaderDecorator>{children}</DataLoaderDecorator>;
};
