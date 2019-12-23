/* eslint-disable no-console */
import React, { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { treeData, flattenedPaths } from './common/tree-data';
import facetData from './common/facetData';
import { getLipsumObjectArray } from './common/lipsum';
import {
  Accordion,
  AccordionSearch,
  Autocomplete,
  ConfigureIcon,
  DropdownButton,
  ExpandableList,
  Facets,
  HeroHeader,
  InPageNav,
  Loader,
  MainSearch,
  PageIntro,
  Tabs,
  TreeSelect,
  SearchInput,
  Window,
} from '../components';
import HeroContainer from '../components/hero-container';

const MainSearchWrapper = props => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <MainSearch
      {...props}
      searchTerm={searchTerm}
      onChange={v => {
        console.log('MainSearch onChange:', v);
        setSearchTerm(v);
      }}
    />
  );
};

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
    name: 'Accordion',
    component: Accordion,
    function: 'Show/hide blocks of content',
    purpose: 'Minimise information-overload',
    props: {
      title: 'Title',
      count: 10,
      children: <div>{loremIpsum({ count: 25, units: 'words' })}</div>,
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
    name: 'Search Input',
    component: SearchInput,
    function:
      'Filter data displayed on the screen (autocomplete, list of fields etc.)',
    purpose:
      'Provide the user with an indication that typing in the input box will search something',
    props: {
      placeholder: 'Search',
    },
  },
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
    name: 'Accordion Search',
    component: AccordionSearch,
    function: 'Search through an array to make a selection',
    purpose: 'Allow selection of item from flat data set',
    props: {
      placeholder: 'Filter',
      onSelect: (accordionId, itemId) => {
        console.log(accordionId, itemId);
      },
      selected: [],
      accordionData: [
        {
          title: 'Gene',
          id: '1',
          items: [
            {
              label: 'BRCA1',
              id: '1-1',
            },
            {
              label: 'BRCA2',
              id: '1-2',
            },
            {
              label: 'TP53',
              id: '1-3',
            },
          ],
        },
        {
          title: 'Organelle',
          id: '2',
          items: [
            {
              label: 'Ribosome',
              id: '2-1',
            },
            {
              label: 'Nucleus',
              id: '2-2',
            },
          ],
        },
      ],
    },
  },

  {
    name: 'Main search',
    component: MainSearchWrapper,
    function: 'Search through an array to make a selection',
    purpose: 'Allow selection of item from flat data set',
    props: {
      onSubmit: e => {
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
    name: 'Hero Container',
    component: HeroContainer,
    function: 'Highlight a specific section',
    purpose: 'Differentiate section from others',
    props: {
      title: 'Title',
      children: loremIpsum({ count: 25, units: 'words' }),
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
