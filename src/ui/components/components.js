import Tile from '../components/tile';
import PaginationSnippet from '../app/snippets/PaginationSnippet';
import TreeSelect from '../components/tree-select';
import treeData from '../common/tree-data';

const components = [{
  name: 'Tile',
  component: Tile,
  function: 'Provide a sneak peak and navigate to a searchable data section of the website.',
  purpose: 'Advertise a specific dataset of the website and provide searchable access to it.'
}, {
  name: 'Pagination',
  component: PaginationSnippet,
  function: 'Navigate through a paged result set',
  purpose: 'Provide indication of number of results, allow access to different pages'
}, {
  name: 'Tree select',
  component: TreeSelect,
  function: 'Navigate through a tree to make a selection',
  purpose: 'Allow selection of item(s) from nested data set',
  props: {
    data: treeData,
    onSelect: (node) => console.log(node)
  },
}];

export default components;
