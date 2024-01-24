import { DisplayMenu as DisplayMenuComponent } from '../src/components';

import displayMenuData from '../src/components/__mocks__/displayMenu';

import ReactRouterDecorator from '../src/decorators/RouterDecorator';

export default {
  title: 'Layout/Display Menu',
  decorators: [ReactRouterDecorator],
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const DisplayMenu = () => (
  <DisplayMenuComponent data={displayMenuData} />
);
