import { loremIpsum } from 'lorem-ipsum';

import {
  InfoList as InfoListComponent,
  SwissProtIcon,
} from '../src/components';

export default { title: 'Data/Info List' };

const data = [
  { title: 'Item 1', content: <div>Some content</div> },
  { title: 'Another item', content: <div>Some more content</div> },
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
    // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
    link: <a />,
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
