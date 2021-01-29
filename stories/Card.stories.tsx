import { Link } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { Card } from '../src/components';
import { getLipsumSentences } from '../src/mock-data/lipsum';

const links = [
  {
    name: '10 Protein Interactions',
    link: '/red',
    color: 'red',
  },
  {
    name: '9 Pathways',
    link: '/blue',
    color: 'blue',
  },
  {
    name: '5 Diseases',
    link: '/diseases',
    color: '#bada55',
  },
  {
    name: '72 Variants',
    link: '/burlywood',
    color: 'burlywood',
  },
];

export default {
  title: 'Layout/Card',
  parameters: {
    purposeFunction: {
      function:
        'Provide a contained section to show content for a given category.',
      purpose:
        'Create visually delimited areas to allow for easier scanning of content.',
    },
  },
};

export const card = () => (
  <Card title="Title" subtitle={<a href="/#">APOE_HUMAN - P02649</a>}>
    {getLipsumSentences()}
  </Card>
);

export const cardWithOnClick = () => (
  <Card title="Title" onClick={action('click')} links={links}>
    {getLipsumSentences()}
  </Card>
);

export const cardWithLinks = () => (
  <Card
    title="Title"
    subtitle={<Link to="/#">APOE_HUMAN - P02649</Link>}
    links={links}
  >
    {getLipsumSentences()}
  </Card>
);

export const activeCard = () => (
  <Card title="Title" onClick={action('click')} active>
    {getLipsumSentences()}
  </Card>
);
