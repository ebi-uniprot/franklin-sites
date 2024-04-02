import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Meta, StoryObj } from '@storybook/react';
import {
  DataTable as DataTableComponent,
  DataTableWithLoader as DataTableWithLoaderComponent,
} from '../src/components';
import {
  CommonProps,
  DataDecorator,
  DataLoaderDecorator,
  DataType,
  columns,
} from '../src/decorators/DataDecorator';
import { WrapperProps } from '../src/components/data-loader';

type DataTableComponentAndWrapperProps = React.ComponentProps<
  typeof DataTableComponent
> &
  WrapperProps<DataType>;

const meta: Meta<DataTableComponentAndWrapperProps> = {
  component: DataTableComponent,
  title: 'Data/Data Table',
  argTypes: {
    onSelectionChange: {
      name: 'Selectable (onSelectionChange)',
      options: [true, false],
      mapping: { true: action('selectChange'), false: null },
      control: 'boolean',
      defaultValue: true,
    },
  },
  parameters: {
    purposeFunction: {
      function: '',
      purpose: '',
    },
  },
};

export default meta;

type Story = StoryObj<DataTableComponentAndWrapperProps>;

export const DataTable: Story = {
  render: ({ onSelectionChange }) => (
    <DataDecorator>
      {(props: CommonProps) => (
        <DataTableComponent
          {...props}
          columns={columns}
          onSelectionChange={onSelectionChange}
          onHeaderClick={action('onHeaderClick')}
          // fixedLayout={fixedLayout}
          // density={density}
        />
      )}
    </DataDecorator>
  ),
};

// export default {
//   title: 'Data/Data Table',
//   parameters: {
//     purposeFunction: {
//       function: '',
//       purpose: '',
//     },
//   },
// };

// const useCheckbox = () => boolean('onSelectionChange', true, 'Props');
// const useFixedLayout = () => boolean('fixedLayout', false, 'Props');
// const useDensity = () =>
//   select('density', ['normal', 'compact'], 'normal', 'Props');
// const useClickToLoad = () => boolean('clickToLoad', false, 'Props');
// const useClickToLoadContent = () => text('clickToLoad content', '');

// export const DataTable = () => {
//   const checkbox = useCheckbox();
//   const fixedLayout = useFixedLayout();
//   const density = useDensity();

//   return (
//     <DataDecorator>
//       {(props: CommonProps) => (
//         <DataTableComponent
//           {...props}
//           columns={columns}
//           onSelectionChange={checkbox ? action('onSelectionChange') : undefined}
//           onHeaderClick={action('onHeaderClick')}
//           fixedLayout={fixedLayout}
//           density={density}
//         />
//       )}
//     </DataDecorator>
//   );
// };

// export const DataTableWithLoader = () => {
//   const checkbox = useCheckbox();
//   const fixedLayout = useFixedLayout();
//   const density = useDensity();
//   const clickToLoad = useClickToLoad();
//   const clickToLoadContent = useClickToLoadContent();

//   return (
//     <DataLoaderDecorator>
//       {(props: CommonProps & WrapperProps<DataType>) => (
//         <DataTableWithLoaderComponent
//           {...props}
//           columns={columns}
//           onSelectionChange={checkbox ? action('onSelectionChange') : undefined}
//           onHeaderClick={action('onHeaderClick')}
//           fixedLayout={fixedLayout}
//           density={density}
//           clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
//         />
//       )}
//     </DataLoaderDecorator>
//   );
// };

// export const DataTableColumnLoading = () => {
//   const checkbox = useCheckbox();
//   const fixedLayout = useFixedLayout();
//   const density = useDensity();
//   const clickToLoad = useClickToLoad();
//   const clickToLoadContent = useClickToLoadContent();
//   return (
//     <DataLoaderDecorator>
//       {(props: CommonProps & WrapperProps<DataType>) => (
//         <DataTableWithLoaderComponent
//           {...props}
//           loading
//           columns={[
//             ...columns,
//             {
//               label: 'Column 6',
//               name: 'content6',
//               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//               // @ts-ignore we know it doesn't exist, it's on purpose
//               render: (row) => row.content6.complexValue,
//             },
//           ]}
//           onSelectionChange={checkbox ? action('onSelectionChange') : undefined}
//           onHeaderClick={action('onHeaderClick')}
//           fixedLayout={fixedLayout}
//           density={density}
//           clickToLoad={clickToLoad && (clickToLoadContent || clickToLoad)}
//         />
//       )}
//     </DataLoaderDecorator>
//   );
// };
