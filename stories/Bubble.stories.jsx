import { Bubble } from '../src/components';

export default {
  title: 'Visualisation/Bubble',
  parameters: {
    purposeFunction: {
      purpose: 'Highlight numbers.',
      function: 'If there is more than 100 items the bubble will show 99+.',
    },
  },
};

export const smallBubble = () => (
  <Bubble size="small" value={56} colourClass="colour-yankees-blue" />
);
export const regularBubble = () => <Bubble value={1000} />;
export const largeBubble = () => (
  <Bubble size="large" value={22.5} colourClass="colour-proteomes" />
);
