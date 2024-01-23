import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import {
  DataList as DataListComponent,
  DataListWithLoader as DataListWithLoaderComponent,
  Card,
} from '../src/components';
import {
  DataDecorator,
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

export const DataList = () => (
  <DataDecorator>
    {(props) => (
      <DataListComponent
        {...props}
        dataRenderer={(content) => <>{Object.values(content)}</>}
      />
    )}
  </DataDecorator>
);

export const DataListLoading = () => (
  <DataDecorator>
    {(props) => (
      <DataListComponent
        {...props}
        loading
        dataRenderer={(content) => (
          <>
            {Object.values(content)}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore we know it doesn't exist, it's on purpose */}
            {content.complex.value}
          </>
        )}
      />
    )}
  </DataDecorator>
);

export const DataListWithLoader = () => (
  <DataLoaderDecorator>
    {(props) => {
      const clickToLoad = useClickToLoad();
      const clickToLoadContent = useClickToLoadContent();
      return (
        <DataListWithLoaderComponent
          {...props}
          dataRenderer={(content) => <>{Object.values(content)}</>}
          clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
        />
      );
    }}
  </DataLoaderDecorator>
);

export const DataListWithLoaderAndCards = () => (
  <DataLoaderDecorator>
    {(props) => {
      const selectable = boolean('selectable', false, 'Props');
      const clickToLoad = useClickToLoad();
      const clickToLoadContent = useClickToLoadContent();
      return (
        <DataListWithLoaderComponent
          {...props}
          dataRenderer={(content) => (
            <Card>
              {selectable && (
                <div className="checkbox-cell">
                  <input type="checkbox" />
                </div>
              )}
              {Object.values(content)}
            </Card>
          )}
          onSelectionChange={selectable ? action('onSelect') : undefined}
          clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
        />
      );
    }}
  </DataLoaderDecorator>
);
