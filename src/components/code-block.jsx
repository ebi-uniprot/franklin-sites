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
  lightMode: PropTypes.bool,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CodeBlock.defaultProps = {
  lightMode: false,
  className: undefined,
};

export default CodeBlock;
