import { DisplayMenu } from '../src';

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

export const displayMenu = () => <DisplayMenu data={displayMenuData} />;
