import React from 'react';
import ReactMarkdown from 'react-markdown';
import baseStyling from '../markdown/base-styling.md';

export default {
  title: 'Core Styling',
};

export const core = () => (
  <ReactMarkdown source={baseStyling} escapeHtml={false} />
);
