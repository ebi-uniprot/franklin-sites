import { useState, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

import { Button } from './button';

import '../styles/components/ellipsis-reveal.scss';

const EllipsisReveal = ({
  children,
  className,
  title,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  const [open, setOpen] = useState(false);
  if (open) {
    return <>{children}</>;
  }
  return (
    <Button
      variant="tertiary"
      onClick={() => setOpen(true)}
      className={cn(className, 'ellipsis-reveal')}
      title={title || 'Show more'}
      aria-expanded="false"
      {...props}
    >
      [...]
    </Button>
  );
};

export default EllipsisReveal;
