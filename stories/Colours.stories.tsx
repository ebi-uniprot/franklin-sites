import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import coloursFile from '../markdown/colours.md';

export default {
  title: 'Core/Colours',
};

export const Colors = () => (
  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{coloursFile}</ReactMarkdown>
);
