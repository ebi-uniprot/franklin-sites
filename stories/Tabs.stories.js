import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { Tabs, ConfigureIcon } from '../src/components';

const tabData = [
  {
    title: (
      <div>
        Title 1
        <ConfigureIcon
          style={{ verticalAlign: 'text-top' }}
          width={16}
          height={16}
        />
      </div>
    ),
    content: loremIpsum({ count: 2 }),
    id: 'id1',
  },
  {
    title: 'Title 2',
    content: loremIpsum({ count: 2 }),
    id: 'id2',
  },
  {
    title: 'Title 3',
    content: loremIpsum({ count: 2 }),
    id: 'id3',
  },
];

export default {
  title: 'Navigation/Tabs',
  parameters: {
    purposeFunction: {
      purpose:
        'Prevent information overload by categorising data to display and only showing one category at a time',
      function: 'Allow users to switch between different views.',
    },
  },
};

export const tabs = () => <Tabs tabData={tabData} />;
