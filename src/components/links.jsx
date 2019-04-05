import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/components/links.scss';
import ExternalLinkIcon from '../svg/external-link.svg';

const ExternalLink = ({ children, uri, newTab = true }) => {
  const props = { className: 'external-link', href: uri, ...(newTab && { target: '_blank' }) };
  return (
    <a {...props}>
      {children}
      {' '}
      <ExternalLinkIcon width={12.5} />
    </a>
  );
};

export default ExternalLink;
