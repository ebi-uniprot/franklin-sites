import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';

import Tile from '../components/tile';
import DropdownButton from '../components/dropdown-button';
import TreeSelect from '../components/tree-select';
import Autocomplete from '../components/autocomplete';
import MainSearch from '../components/main-search';
import HeroHeader from '../components/hero-header';
import Facets from '../components/facets';
import { treeData, flattenedPaths } from './common/tree-data';
import facetData from './common/facetData';
import sequenceData from './common/sequence-data';
import PageIntro from '../components/page-intro';
import InfoList from '../components/info-list';
import Card from '../components/card';
import { EvidenceTag } from '../components';
import Sequence from '../components/sequence';
import InPageNav from '../components/in-page-nav';
import Loader from '../components/loader';

class MainSearchWrapper extends Component {
  constructor(props) {
    super(props);
    const { searchTerm } = this.props;
    this.state = { searchTerm };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(searchTerm) {
    this.setState({ searchTerm });
    // eslint-disable-next-line no-console
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
      title: 'Tile',
      namespace: 'uniref',
    },
  },
  {
    name: 'Evidence Tag',
    component: EvidenceTag,
    function: 'Provide the user with information about the evidence associated to a piece of text.',
    purpose:
      'Inform the user so they can make a decision regarding the trustworthyness of a piece of text',
    props: {
      label: 'evidence tag',
    },
  },
  {
    name: 'Page intro',
    component: PageIntro,
    function:
      'Tell users a bit about the area of the website that they are on with links to further information',
    purpose:
      'People might land on areas of the website they don’t know much about. The intro is a place they can get some contextual help, some introductory info and links to further help, information and downloads',
    props: {
      title: 'UniProtKB',
      resultsCount: 1000,
      children:
        'UniProtKB consists of two sections:Reviewed (Swiss-Prot) - Manually annotated Records with information extracted from literature and curator-evaluated computational analysis. Unreviewed (TrEMBL) - Computationally analyzed. Records that await full manual annotation. The UniProt Knowledgebase (UniProtKB) is the central hub for the collection of functional information on proteins, with accurate, consistent and rich annotation. In addition to capturing the core data mandatory for each UniProtKB entry (mainly, the amino acid sequence, protein name or description, taxonomic data and citation information), as much annotation information as possible is added.',
      links: [{ title: 'Help', icon: '', destination: '' }],
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
      // eslint-disable-next-line no-console
      onSelect: value => console.log(value),
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
        // eslint-disable-next-line no-console
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
      footer: loremIpsum({ count: 25, units: 'words' }),
    },
  },
  {
    name: 'Info list',
    component: InfoList,
    function:
      'Display a list of attribute names/values. The values can be of any form. Attribute names can have extra information attached to them in the form of tooltips.',
    purpose:
      'Provide a way of easily scanning for attribute names in order to view their associated data.',
    props: {
      infoData: [
        {
          title: 'Item 1',
          content: <div>Some content</div>,
        },
        {
          title: 'Another item',
          content: <div>Some more content</div>,
        },
      ],
    },
  },
  {
    name: 'Card',
    component: Card,
    function: 'Provide a contained section to show content for a given category.',
    purpose: 'Create visually delimited areas to allow for easier scanning of content.',
    props: {
      title: 'Title',
      subtitle: <Link to="/#">APOE_HUMAN - P02649</Link>,
      color: 'darkblue',
      children: <p>An example of content</p>,
      selectable: true,
      onSelect: () => null,
      selected: true,
      links: [
        {
          name: '10 Protein Interactions',
          link: '#',
          color: 'red',
        },
        {
          name: '9 Pathways',
          link: '#',
          color: 'blue',
        },
        {
          name: '5 Diseases',
          link: '#',
          color: '#bada55',
        },
        {
          name: '72 Variants',
          link: '#',
          color: 'burlywood',
        },
      ],
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
      addFacet: (name, value) => console.log(`${name} facet toggled with ${value}`),
      // eslint-disable-next-line no-console
      removeFacet: (name, value) => console.log(`${name} facet toggled with ${value}`),
    },
  },
  {
    name: 'Sequence',
    component: Sequence,
    function: 'Display protein/nucleotide sequence, allow users to copy it',
    purpose: 'Allow users to see a protein / nucleotide sequence',
    props: {
      sequence: sequenceData,
    },
  },
  {
    name: 'In page nav',
    component: InPageNav,
    function: 'Quickly navigate to different sections of the current page.',
    purpose: 'Help with navigation, give an idea of the position on a very long page.',
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
];

export default components;
