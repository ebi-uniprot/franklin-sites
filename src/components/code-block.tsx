import { HTMLAttributes } from 'react';
import cn from 'classnames';

import '../styles/components/code-block.scss';

type Props = HTMLAttributes<HTMLPreElement> & {
  /**
   * Activate light mode or defaults to dark mode
   */
  lightMode?: boolean;
};

const CodeBlock = ({ lightMode, children, className, ...props }: Props) => (
  <pre
    className={cn('codeblock', { 'codeblock-light': lightMode }, className)}
    {...props}
  >
    <code>{children}</code>
  </pre>
);

export default CodeBlock;
