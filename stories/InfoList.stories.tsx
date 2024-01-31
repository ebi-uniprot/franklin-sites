/* eslint-disable jsx-a11y/anchor-has-content */
import { loremIpsum } from 'lorem-ipsum';

import {
  InfoList as InfoListComponent,
  SwissProtIcon,
} from '../src/components';

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
  {
    title: (
      <>
        <SwissProtIcon width={16} height={16} /> An item with JSX
      </>
    ),
    content: loremIpsum({ count: 25, units: 'words' }),
  },
  {
    title: 'This item is a link',
    content: loremIpsum({ count: 25, units: 'words' }),
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    link: <a href={`${window.parent.location.href}#`} />,
  },
];

export const InfoList = () => <InfoListComponent infoData={data} />;

export const HighlightFirstItem = () => (
  <InfoListComponent infoData={data} highlightFirstItem />
);

export const Compact = () => <InfoListComponent infoData={data} isCompact />;

export const NoTitles = () => <InfoListComponent infoData={data} noTitles />;

export const Columns = () => <InfoListComponent infoData={data} columns />;

export const ColumnsCompact = () => (
  <InfoListComponent infoData={data} columns isCompact />
);

InfoList.storyName = 'Simple data';
