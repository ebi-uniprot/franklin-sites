import React, { useState } from 'react';
import classNames from 'classnames';
import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import '../styles/components/bubble.scss';

const CopyToClipboard = ({ toCopy, beforeCopy, afterCopy, className }) => {
  const [copied, setCopied] = useState(false);
  return (
    <ReactCopyToClipboard text={toCopy} onCopy={() => setCopied(true)}>
      <button type="button" className={classNames('button', className)}>
        {copied ? afterCopy : beforeCopy}
      </button>
    </ReactCopyToClipboard>
  );
};

CopyToClipboard.propTypes = {
  /**
   * The text to place into the copy buffer
   */
  toCopy: PropTypes.string.isRequired,
  /**
   * The text placed in the button before copy event
   */
  beforeCopy: PropTypes.string,
  /**
   * The text placed in the button after copy event
   */
  afterCopy: PropTypes.string,
  /**
   * Additional class names
   */
  className: PropTypes.string,
};

CopyToClipboard.defaultProps = {
  beforeCopy: 'Copy',
  afterCopy: 'Copied',
  className: '',
};

export default CopyToClipboard;
