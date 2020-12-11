import { ExternalLink } from '../src/components';

export default {
  title: 'Core/External link',
  parameters: {
    purposeFunction: {
      purpose:
        'Indicate to the user that the link will take them to another website.',
      function: 'Provide a link to another web resource.',
    },
  },
};

export const externalLink = () => (
  <ExternalLink url="https://www.ebi.ac.uk/">external link</ExternalLink>
);
