import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/external-link.scss';
import ExternalLinkIcon from '../svg/external-link.svg';

const ExternalLink = ({ children, url, newTab = true }) => {
  const props = { className: 'external-link', href: url, ...(newTab && { target: '_blank' }) };
  return (
    <a {...props}>
      {children}
      <ExternalLinkIcon width={12.5} />
    </a>
  );
};

ExternalLink.propTypes = {
  /**
   * The text which is displayed to the user
   */
  children: PropTypes.node.isRequired,
  /**
   * The location that is visted when clicked
   */
  url: PropTypes.string.isRequired,
  /**
   * Decides if a new browser tab should be opened or not
   */
  newTab: PropTypes.bool,
};

ExternalLink.defaultProps = {
  newTab: true,
};

export default ExternalLink;
