import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tag from '../svg/tag.svg';
import '../styles/components/evidence-tag.scss';

const size = 12;

const EvidenceTag = ({
  label, title, labelClassName, children,
}) => {
  const [contentDisplay, setContentDisplay] = useState(false);
  return (
    <span>
      <span
        className={`evidence-tag ${labelClassName}`}
        onClick={() => setContentDisplay(!contentDisplay)}
        role="button"
        tabIndex={0}
      >
        <Tag width={size} height={size} />
        <span className="evidence-tag__label" title={title}>
          {label}
        </span>
      </span>
      {children && (
        <div
          className={`evidence-tag-content ${
            contentDisplay ? 'evidence-tag-content--visible' : ''
          }`}
        >
          {children}
        </div>
      )}
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
  labelClassName: PropTypes.string,
  /**
   * The content of the tag
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

EvidenceTag.defaultProps = {
  title: '',
  labelClassName: '',
  children: null,
};

export default EvidenceTag;
