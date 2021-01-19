import { Facet } from '../components/facets';

const facetData: Facet[] = [
  {
    label: 'Facet 1',
    name: 'facet_1',
    allowMultipleSelection: false,
    values: [
      {
        label: 'Value 1',
        value: 'value_1',
        count: 76,
      },
      {
        label: 'Value 2',
        value: 'value_2',
        count: 79,
      },
    ],
  },
  {
    label: 'Facet 2',
    name: 'facet_2',
    allowMultipleSelection: true,
    values: [
      {
        label: 'Value 1',
        value: 'value_1',
        count: 764879,
      },
      {
        label: undefined,
        value: 'value_2',
        count: 794,
      },
    ],
  },
  {
    label: 'Facet not shown',
    name: 'facet_not',
  },
  {
    label: 'Long facet shown',
    name: 'long_facet',
    allowMultipleSelection: true,
    values: [
      {
        label: 'Value 1',
        value: 'value_1',
        count: 764879,
      },
      {
        label: 'Value 2',
        value: 'value_2',
        count: 764879,
      },
      {
        label: 'Value 3',
        value: 'value_3',
        count: 764879,
      },
      {
        label: 'Value 4',
        value: 'value_4',
        count: 764879,
      },
      {
        label: 'Value 5',
        value: 'value_5',
        count: 764879,
      },
      {
        label: 'Value 6',
        value: 'value_6',
        count: 764879,
      },
      {
        label: 'Value 7',
        value: 'value_7',
        count: 764879,
      },
      {
        label: 'Value 8',
        value: 'value_8',
        count: 764879,
      },
      {
        label: 'Value 9',
        value: 'value_9',
        count: 764879,
      },
      {
        label: 'Value 10',
        value: 'value_10',
        count: 764879,
      },
      {
        label: 'Value 11',
        value: 'value_11',
        count: 764879,
      },
    ],
  },
];

export default facetData;
