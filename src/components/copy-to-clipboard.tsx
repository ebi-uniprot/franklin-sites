import { useState, useCallback, useRef, useEffect, memo } from 'react';
import { sleep } from 'timing-functions';

import { Button, ButtonProps } from './button';

type Props = {
  /**
   * The text to place into the copy buffer
   */
  textToCopy: string;
  /**
   * The text placed in the button before copy event
   */
  beforeCopy?: string;
  /**
   * The text placed in the button after copy event
   */
  afterCopy?: string;
  onCopy?: (copied: string) => void;
};

const CopyToClipboard = memo(
  ({
    textToCopy,
    beforeCopy = 'Copy',
    afterCopy = 'Copied',
    onCopy,
    ...props
  }: Props & Omit<ButtonProps, 'onCopy'>) => {
    const [copied, setCopied] = useState(false);
    const copyPromise = useRef<Promise<void> | null>(null);

    useEffect(() => {
      setCopied(false);
      return () => {
        // Clear any potential ongoing promise on changing value or unmounting
        copyPromise.current = null;
      };
    }, [textToCopy]);

    const handleClick = useCallback(() => {
      const p = navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          if (copyPromise.current === p) {
            // Display copied for 10 seconds
            setCopied(true);
            onCopy?.(textToCopy);
            return sleep(10000);
          }
          return null;
        })
        .then(() => {
          if (copyPromise.current === p) {
            setCopied(false);
          }
        });
      copyPromise.current = p;
    }, [onCopy, textToCopy]);

    if (!('clipboard' in navigator) || !('writeText' in navigator.clipboard)) {
      return null;
    }

    return (
      <Button {...props} onClick={handleClick}>
        {copied ? afterCopy : beforeCopy}
      </Button>
    );
  }
);

export default CopyToClipboard;
