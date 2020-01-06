import React from 'react';
import ReactMarkdown from 'react-markdown';
import baseStyling from '../markdown/base-styling.md';

export default {
  title: 'Atoms|Core',
};

export const core = () => (
  <ReactMarkdown source={baseStyling} escapeHtml={false} />
);
