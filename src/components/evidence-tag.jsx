import React, { useState, useRef, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';

import EvidenceTagIcon from '../svg/evidence-tag.svg';

import '../styles/components/evidence-tag.scss';

const size = 12;

const EvidenceTag = ({ label, title, className, iconComponent, children }) => {
  const idRef = useRef(v1());
  const [contentDisplay, setContentDisplay] = useState(false);
  return (
    <>
      <button
        className={`evidence-tag ${className}`}
        onClick={() => setContentDisplay(!contentDisplay)}
        type="button"
        data-testid="evidence-tag-trigger"
        aria-expanded={contentDisplay}
        aria-controls={idRef.current}
      >
        {cloneElement(iconComponent, { width: size, height: size })}
        <span className="evidence-tag__label" title={title}>
          {label}
        </span>
      </button>
      {children && (
        <div
          className={`evidence-tag-content ${
            contentDisplay ? 'evidence-tag-content--visible' : ''
          }`}
          data-testid="evidence-tag-content"
          id={idRef.current}
        >
          {contentDisplay && children}
        </div>
      )}
    </>
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
  className: PropTypes.string,
  /**
   * Decides the colour of the tag
   */
  iconComponent: PropTypes.element,
  /**
   * The content of the tag
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

EvidenceTag.defaultProps = {
  title: '',
  className: '',
  iconComponent: <EvidenceTagIcon />,
  children: null,
};

export default EvidenceTag;
