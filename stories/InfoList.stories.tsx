import { loremIpsum } from 'lorem-ipsum';

import { InfoList } from '../src/components';

export default {
  title: 'Data/Info List',
  parameters: {
    purposeFunction: {
      purpose:
        'Provide a way of easily scanning for attribute names in order to view their associated data.',
      function:
        'Display a list of attribute names/values. The values can be of any form. Attribute names can have extra information attached to them in the form of tooltips.',
    },
  },
};

const data = [
  {
    title: 'Item 1',
    content: <div>Some content</div>,
  },
  {
    title: 'Another item',
    content: <div>Some more content</div>,
  },
  {
    title: 'Yet another item',
    content: loremIpsum({ count: 25, units: 'words' }),
  },
];

export const infoList = () => <InfoList infoData={data} />;

export const highlightFirstItem = () => (
  <InfoList infoData={data} highlightFirstItem />
);

export const compact = () => <InfoList infoData={data} isCompact />;

export const noTitles = () => <InfoList infoData={data} noTitles />;

export const columns = () => <InfoList infoData={data} columns />;

export const columnsCompact = () => (
  <InfoList infoData={data} columns isCompact />
);

infoList.storyName = 'Simple data';
