import { DisplayMenu as DisplayMenuComponent } from '../src/components';

import displayMenuData from '../src/components/__mocks__/displayMenu';

export default {
  title: 'Layout/Display Menu',
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
