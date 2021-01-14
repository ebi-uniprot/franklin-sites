import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import franklinTheme from './franklin-theme';
import '../src/styles/index.scss';

addDecorator(withInfo);

addDecorator(StoryRouter());

addDecorator((storyFn) => (
  <div
    style={{
      padding: '2rem 10rem',
    }}
  >
    {storyFn()}
  </div>
));

addParameters({
  docs: {
    theme: franklinTheme,
  },
});
