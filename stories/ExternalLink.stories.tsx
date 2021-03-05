import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ExternalLink } from '../src/components';

export default {
  title: 'Core/External link',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose:
        'Indicate to the user that the link will take them to another website.',
      function: 'Provide a link to another web resource.',
    },
  },
};

export const externalLink = () => (
  <ExternalLink
    url="https://www.ebi.ac.uk/"
    noIcon={boolean('Hide icon?', false)}
  >
    external link
  </ExternalLink>
);

export const externalLinkWithoutPassingText = () => (
  <ExternalLink
    url="https://www.ebi.ac.uk/"
    tidyUrl={boolean('Tidy URL string?', false)}
    noIcon={boolean('Hide icon?', false)}
  />
);
