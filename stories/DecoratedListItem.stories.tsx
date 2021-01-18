import { DecoratedListItem } from '../src/components';

export default {
  title: 'Data/Decorated List Item',
  parameters: {
    purposeFunction: {
      purpose: 'Provides a re-usable styled list element.',
      function: 'Display a list item in various visual styles.',
    },
  },
};

const data = [
  {
    title: 'First',
    content: <div>Number one</div>,
  },
  {
    title: 'Second',
    content: <div>Number two</div>,
  },
  {
    title: 'Third',
    content: <div>Number three</div>,
  },
  {
    title: 'Fourth',
    content: <div>Number four</div>,
  },
];

export const decoratedListItem = () => (
  <div className="uniprot-grid">
    {data.map((i) => (
      <div className="uniprot-grid-cell--span-3">
        <DecoratedListItem compact altStyle>
          <h3>{i.title}</h3>
        </DecoratedListItem>
      </div>
    ))}
  </div>
);

decoratedListItem.storyName = 'Alternative Style';
