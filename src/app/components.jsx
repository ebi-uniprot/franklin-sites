/* eslint-disable no-console */
import React, { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { treeData } from './common/tree-data';
import facetData from './common/facetData';
import { getLipsumObjectArray } from './common/lipsum';
import {
  ConfigureIcon,
  ExpandableList,
  Facets,
  InPageNav,
  Loader,
  Tabs,
  TreeSelect,
  Window,
} from '../components';

const TreeSelectWrapper = props => {
  const [value, setValue] = useState(null);
  return (
    <TreeSelect
      {...props}
      value={value}
      onSelect={v => {
        console.log('TreeSelect onSelect:', v);
        setValue(v);
      }}
    />
  );
};

const components = [
  {
    name: 'Tree select',
    component: TreeSelectWrapper,
    function: 'Navigate through a tree to make a selection',
    purpose: 'Allow selection of item(s) from nested data set',
    props: {
      data: treeData,
      autocomplete: true,
      autocompletePlaceholder: 'Search for item',
      autocompleteFilter: true,
    },
  },
  {
    name: 'Tabs',
    component: Tabs,
    function:
      'Upon clicking a header the corresponding content will be displayed.',
    purpose: 'Allow users to switch between different views.',
    props: {
      tabData: [
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
      ],
    },
  },
  {
    name: 'Expandable List',
    component: ExpandableList,
    function:
      'Display an unordered list of items which is initially collapsed.',
    purpose: 'Provide a way of truncating long unordered lists of items.',
    props: {
      numberCollapsedItems: 5,
      descriptionString: 'lorem ipsum items',
      children: getLipsumObjectArray({
        numberElements: 10,
        keys: ['content'],
        type: 'words',
      }),
    },
  },
  {
    name: 'Facets',
    component: Facets,
    function:
      'Modify a query to filter a set of results, highlight filter which is currently selected, remove selected filter',
    purpose:
      'Give meta-information about a result set (e.g. keywords, top organisms, …) and allow restriction of a results set.',
    props: {
      data: facetData,
      selectedFacets: [{ name: 'facet_2', value: 'value_2' }],
      // eslint-disable-next-line no-console
      addFacet: (name, value) =>
        console.log(`${name} facet toggled with ${value}`),
      // eslint-disable-next-line no-console
      removeFacet: (name, value) =>
        console.log(`${name} facet toggled with ${value}`),
    },
  },
  {
    name: 'In page nav',
    component: InPageNav,
    function: 'Quickly navigate to different sections of the current page.',
    purpose:
      'Help with navigation, give an idea of the position on a very long page.',
    props: {
      sections: [
        {
          id: 'id1',
          label: 'First link',
        },
        {
          id: 'id2',
          label: 'Second link',
        },
        {
          id: 'id3',
          label: 'Third link',
          disabled: true,
        },
      ],
      sticky: false,
    },
  },
  {
    name: 'Loader',
    component: Loader,
    function: '',
    purpose: '',
    props: {},
  },
  {
    name: 'Window',
    component: Window,
    function:
      'Provide reusable window component with various configurations possible.',
    purpose:
      'Improve the User Experience by providing another way of conent-isoloation.',
    props: {
      width: '20rem',
      height: '15rem',
      title: 'Alert',
      withHeaderCloseButton: true,
      withFooterCloseButton: true,
      onWindowOpen: () => null,
      onWindowClose: () => null,
      withShadow: true,
      key: 'full-featured-window',
      children: loremIpsum({ count: 25, units: 'words' }),
    },
  },
];

export default components;
