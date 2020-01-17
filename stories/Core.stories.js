import React from 'react';
import ReactMarkdown from 'react-markdown';
import coloursFile from '../markdown/colours.md';
import typographyFile from '../markdown/typography.md';

export default {
  title: 'Atoms|Core',
};

export const colours = () => (
  <ReactMarkdown source={coloursFile} escapeHtml={false} />
);

export const typography = () => (
  <ReactMarkdown source={typographyFile} escapeHtml={false} />
);
