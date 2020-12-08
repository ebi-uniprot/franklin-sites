import { FC, HTMLAttributes } from 'react';

import '../styles/components/code-block.scss';

type Props = HTMLAttributes<HTMLPreElement> & {
  /**
   * Activate light mode or defaults to dark mode
   */
  lightMode?: boolean;
  /**
   * The content of the code block
   */
  children: string;
  /**
   * Optional class names to merge into the component
   */
  className?: string;
};

const CodeBlock: FC<Props> = ({ lightMode, children, className, ...props }) => (
  <pre
    className={`codeblock${lightMode ? ' codeblock-light' : ''}${
      className ? ` ${className}` : ''
    }`}
    {...props}
  >
    <code>{children}</code>
  </pre>
);

export default CodeBlock;
