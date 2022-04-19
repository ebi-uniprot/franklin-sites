import { boolean } from '@storybook/addon-knobs';

import { Card as CardComponent, SwissProtIcon } from '../src/components';

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
  {
    key: 'swissprot',
    name: (
      <>
        <SwissProtIcon width="1.5ch" /> Reviewed
      </>
    ),
    link: '/reviewed',
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

export const Card = () => {
  const hasHeader = boolean('header', true, 'Props');
  const hasHeaderSeparator = boolean('headerSeparator', true, 'Props');
  const hasCheckbox = boolean('checkbox (only if header)', false, 'Props');
  return (
    <CardComponent
      header={
        hasHeader ? (
          <>
            {hasCheckbox && <input type="checkbox" />}
            <h2>
              Title{' '}
              <a className="medium" href="/#">
                APOE_HUMAN - P02649
              </a>
            </h2>
          </>
        ) : undefined
      }
      headerSeparator={hasHeaderSeparator}
      links={boolean('links', false, 'Props') ? links : undefined}
    >
      {getLipsumSentences()}
    </CardComponent>
  );
};
