import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import typographyFile from '../markdown/typography.md';

export default {
  title: 'Core/Typography',
};

export const typography = () => (
  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{typographyFile}</ReactMarkdown>
);
