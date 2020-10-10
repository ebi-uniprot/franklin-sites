import React from 'react';
import ReactMarkdown from 'react-markdown';

import coloursFile from '../markdown/colours.md';

export default {
  title: 'Core/Colours',
};

export const colours = () => (
  <ReactMarkdown source={coloursFile} escapeHtml={false} />
);
