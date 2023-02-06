import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { DataList, DataListWithLoader, Card } from '../src';
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

export const dataList = () => (
  <DataDecorator>
    {(props) => (
      <DataList
        {...props}
        dataRenderer={(content) => <>{Object.values(content)}</>}
      />
    )}
  </DataDecorator>
);

export const dataListLoading = () => (
  <DataDecorator>
    {(props) => (
      <DataList
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

export const dataListWithLoader = () => (
  <DataLoaderDecorator>
    {(props) => {
      const clickToLoad = useClickToLoad();
      const clickToLoadContent = useClickToLoadContent();
      return (
        <DataListWithLoader
          {...props}
          dataRenderer={(content) => <>{Object.values(content)}</>}
          clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
        />
      );
    }}
  </DataLoaderDecorator>
);

export const dataListWithLoaderAndCards = () => (
  <DataLoaderDecorator>
    {(props) => {
      const selectable = boolean('selectable', false, 'Props');
      const clickToLoad = useClickToLoad();
      const clickToLoadContent = useClickToLoadContent();
      return (
        <DataListWithLoader
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
