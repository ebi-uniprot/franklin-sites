import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../svg/tag.svg';
import '../styles/components/evidence-tag.scss';

const size = 10;

const EvidenceTag = ({ label, title, reviewed = false }) => {
  const styleClassName = `evidence-tag ${
    reviewed ? 'evidence-tag--reviewed' : 'evidence-tag--unreviewed'
  }`;
  return (
    <span className={styleClassName}>
      <Tag width={size} height={size} />
      <span className="evidence-tag__label" title={title}>
        {label}
      </span>
    </span>
  );
};

EvidenceTag.propTypes = {
  /**
   * Displayed on the tag
   */
  label: PropTypes.string.isRequired,
  /**
   * Displayed on on mouseover
   */
  title: PropTypes.string,
  /**
   * Decides the colour of the tag
   */
  reviewed: PropTypes.bool,
};

EvidenceTag.defaultProps = {
  title: '',
  reviewed: false,
};

export default EvidenceTag;
