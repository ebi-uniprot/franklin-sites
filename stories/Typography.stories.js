import React from 'react';
import ReactMarkdown from 'react-markdown';
import typographyFile from '../markdown/typography.md';

export default {
  title: 'Core|Typography',
};

export const typography = () => (
  <ReactMarkdown source={typographyFile} escapeHtml={false} />
);
