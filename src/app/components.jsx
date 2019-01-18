import React, { Component } from 'react';
import Tile from '../components/tile';
import DropdownButton from '../components/dropdown-button';
import TreeSelect from '../components/tree-select';
import Autocomplete from '../components/autocomplete';
import MainSearch from '../components/main-search';
import DataTable from '../components/data-table';
import HeroHeader from '../components/hero-header';
import Facets from '../components/facets';
import { treeData, flattenedPaths } from './common/tree-data';
import lipsum from './common/lipsum';
import facetData from './common/facetData';

class MainSearchWrapper extends Component {
  constructor(props) {
    super(props);
    const { searchTerm } = this.props;
    this.state = { searchTerm };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(searchTerm) {
    this.setState({ searchTerm });
    console.log('Main search change:', searchTerm);
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <MainSearch {...this.props} searchTerm={searchTerm} onChange={v => this.handleChange(v)} />
    );
  }
}

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
    component: MainSearchWrapper,
    function: 'Search through an array to make a selection',
    purpose: 'Allow selection of item from flat data set',
    props: {
      onSubmit: (e) => {
        e.preventDefault();
        console.log('Main search submit');
      },
    },
  },
  {
    name: 'Hero header',
    component: HeroHeader,
    function: 'Tell the user what the resource is about and offer a way in',
    purpose: 'Provide an entry point',
    props: {
      title: 'Title',
      children: <input type="text" />,
      footer: lipsum.substring(0, 150),
    },
  },
  {
    name: 'Data table',
    component: DataTable,
    function: '',
    purpose: '',
    props: {
      selectable: true,
      selected: { blah3: true },
      onSelect: (rowId) => {
        console.log(rowId, 'selected');
      },
      onHeaderClick: (columnName) => {
        console.log(columnName);
      },
      columns: [
        {
          label: 'Column 1',
          name: 'col1',
          render: row => <span>{row.fieldValue1.value}</span>,
          sortable: true,
        },
        {
          label: 'Column 2',
          name: 'col2',
          render: row => <span>{row.fieldValue2.value}</span>,
          sorted: 'ascend',
          sortable: true,
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
        {
          id: 'blah3',
          fieldValue1: {
            value: 'Some data α',
          },
          fieldValue2: {
            value: 'Some data β',
          },
        },
      ],
    },
  },
  {
    name: 'Facets',
    component: Facets,
    function: '',
    purpose: '',
    props: {
      data: facetData,
      selectedFacets: [{ name: 'facet_2', value: 'value_2' }],
      addFacet: (name, value) => console.log(`${name} facet toggled with ${value}`),
      removeFacet: (name, value) => console.log(`${name} facet toggled with ${value}`),
    },
  },
];

export default components;
