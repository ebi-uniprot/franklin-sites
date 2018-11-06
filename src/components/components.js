import React from 'react';
import Tile from './tile';
import Select from './select';
import TreeSelect from './tree-select';
import Autocomplete from './autocomplete';
import MainSearch from './main-search';
import { treeData, flattenedPaths } from '../app/common/tree-data';

const components = [
  {
    name: 'Tile',
    component: Tile,
    function: 'Provide a sneak peak and navigate to a searchable data section of the website.',
    purpose: 'Advertise a specific dataset of the website and provide searchable access to it.',
    props: {
      namespace: 'uniref',
    },
  },
  {
    name: 'Select',
    component: Select,
    function: 'Make a selection',
    purpose: 'Allow selection of item(s)',
    props: {
      children: <div>This</div>,
      onSelect: () => {},
    },
  },
  {
    name: 'Tree select',
    component: TreeSelect,
    function: 'Navigate through a tree to make a selection',
    purpose: 'Allow selection of item(s) from nested data set',
    props: {
      data: treeData,
      onSelect: () => {},
      autocomplete: true,
      autocompletePlaceholder: 'Search for item',
    },
  },
  {
    name: 'Autocomplete',
    component: Autocomplete,
    function: 'Search through an array to make a selection',
    purpose: 'Allow selection of item from flat data set',
    props: {
      data: flattenedPaths,
      onSelect: () => {},
      placeholder: 'Placeholder',
    },
  },
  {
    name: 'Main search',
    component: MainSearch,
    function: 'Search through an array to make a selection',
    purpose: 'Allow selection of item from flat data set',
    props: {},
  },
];

export default components;
