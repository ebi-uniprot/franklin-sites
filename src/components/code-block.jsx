import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/code-block.scss';

const CodeBlock = ({ lightMode, children, className, ...props }) => (
  <pre
    className={`codeblock${lightMode ? ' codeblock-light' : ''}${
      className ? ` ${className}` : ''
    }`}
    {...props}
  >
    <code>{children}</code>
  </pre>
);

CodeBlock.propTypes = {
  /**
   * Activate light mode or defaults to dark mode
   */
  lightMode: PropTypes.bool,
  /**
   * The content of the code block
   */
  children: PropTypes.string.isRequired,
  /**
   * Optional class names to merge into the component
   */
  className: PropTypes.string,
};

CodeBlock.defaultProps = {
  lightMode: false,
  className: undefined,
};

export default CodeBlock;
