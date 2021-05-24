import { FC, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { Button } from './button';

import '../styles/components/ellipsis-reveal.scss';

const EllipsisReveal: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  title,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        children
      ) : (
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
      )}
    </>
  );
};

export default EllipsisReveal;
