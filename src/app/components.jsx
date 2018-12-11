import React from 'react';
import Tile from '../components/tile';
import DropdownButton from '../components/dropdown-button';
import TreeSelect from '../components/tree-select';
import Autocomplete from '../components/autocomplete';
import MainSearch from '../components/main-search';
import DataTable from '../components/data-table';
import { treeData, flattenedPaths } from './common/tree-data';

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
    name: 'Dropdown button',
    component: DropdownButton,
    function: 'Shows a dropdown area when clicked',
    purpose: 'Allow the user to perform actions',
    props: {
      label: 'Download',
      children: (
        <div className="dropdown-menu__content">
          <p>Download content from:</p>
          <ul>
            <li>
              <a href="//www.uniprot.org">UniProt</a>
            </li>
            <li>
              <a href="//www.ensembl.org">Ensembl</a>
            </li>
          </ul>
        </div>
      ),
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
      autocompleteFilter: true,
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
      filter: true,
    },
  },
  {
    name: 'Main search',
    component: MainSearch,
    function: 'Search through an array to make a selection',
    purpose: 'Allow selection of item from flat data set',
    props: {},
  },
  {
    name: 'Data table',
    component: DataTable,
    function: '',
    purpose: '',
    props: {
      columns: [
        {
          label: 'Column 1',
          name: 'col1',
          render: row => <span>{row.fieldValue1.value}</span>,
        },
        {
          label: 'Column 2',
          name: 'col2',
          render: row => <span>{row.fieldValue2.value}</span>,
        },
      ],
      data: [
        {
          id: 'blah1',
          fieldValue1: {
            value: 'Some data 1',
          },
          fieldValue2: {
            value: 'Some data 2',
          },
        },
        {
          id: 'blah2',
          fieldValue1: {
            value: 'Some data A',
          },
          fieldValue2: {
            value: 'Some data B',
          },
        },
      ],
    },
  },
];

export default components;
